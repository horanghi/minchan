// 브라우저 전 구간 테스트: 로딩 → 시작 → 이동 → 사망 → 재시작.
//
// 실행: cd minchan_5/tools && npm install && npm run e2e
//
// 3D 렌더 결과를 픽셀 단위로 비교하는 회귀 테스트는 GPU·드라이버가 다르면
// 그대로 깨진다. 대신 "실제로 무언가 그려졌는가"와 "바이오미마다 색조가
// 의도한 방향으로 다른가"를 본다 — 이쪽이 기기가 바뀌어도 살아남는다.

import assert from 'node:assert/strict';
import http from 'node:http';
import { after, before, describe, test } from 'node:test';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { chromium } from 'playwright';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PORT = 8791;
const BASE = `http://127.0.0.1:${PORT}`;
const SHOTS = path.join(ROOT, 'tools', 'screenshots');

const MIME = {
  '.html': 'text/html', '.js': 'text/javascript',
  '.glb': 'model/gltf-binary', '.json': 'application/json',
};

let server;
let browser;
let page;

before(async () => {
  server = http.createServer((req, res) => {
    let url = decodeURIComponent(req.url.split('?')[0]);
    if (url.endsWith('/')) url += 'index.html';
    const file = path.join(ROOT, url);
    if (!file.startsWith(ROOT)) { res.writeHead(403); return res.end(); }
    fs.readFile(file, (err, data) => {
      if (err) { res.writeHead(404); return res.end('404'); }
      res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] ?? 'application/octet-stream' });
      res.end(data);
    });
  });
  await new Promise((r) => server.listen(PORT, r));

  browser = await chromium.launch();
  page = await browser.newPage({ viewport: { width: 1100, height: 720 } });
  fs.mkdirSync(SHOTS, { recursive: true });
});

after(async () => {
  await browser?.close();
  await new Promise((r) => server.close(r));
});

const state = () => page.evaluate(() => window.__game.state);
const visible = (id) => page.evaluate((i) => !document.getElementById(i).hidden, id);

/**
 * 화면의 평균 색과 분산. 렌더가 실제로 일어났는지 보는 지표다.
 *
 * WebGL 캔버스를 drawImage 로 바로 읽으면 빈 화면이 나온다 — 그리기 버퍼는
 * 프레임이 끝나면 비워지고, 살려두려면 preserveDrawingBuffer 를 켜야 하는데
 * 그건 실제 게임 성능을 깎는다. 대신 Playwright 로 스크린샷을 떠서(합성된
 * 결과라 항상 정확하다) 그 PNG 를 다시 페이지에 넣어 픽셀을 샘플링한다.
 */
async function frameStats() {
  const png = (await page.screenshot({ type: 'png' })).toString('base64');
  return page.evaluate(async (b64) => {
    const img = new Image();
    img.src = `data:image/png;base64,${b64}`;
    await img.decode();
    const off = document.createElement('canvas');
    off.width = 160; off.height = 100;
    const ctx = off.getContext('2d', { willReadFrequently: true });
    ctx.drawImage(img, 0, 0, off.width, off.height);
    const { data } = ctx.getImageData(0, 0, off.width, off.height);
    let r = 0, g = 0, b = 0;
    const n = data.length / 4;
    for (let i = 0; i < data.length; i += 4) { r += data[i]; g += data[i + 1]; b += data[i + 2]; }
    r /= n; g /= n; b /= n;
    let variance = 0;
    for (let i = 0; i < data.length; i += 4) {
      variance += (data[i] - r) ** 2 + (data[i + 1] - g) ** 2 + (data[i + 2] - b) ** 2;
    }
    return { r, g, b, variance: variance / n };
  }, png);
}

describe('동물 길건너 전 구간', () => {
  test('로딩이 끝나면 메뉴가 뜬다', async () => {
    await page.goto(`${BASE}/index.html`);
    await page.waitForFunction(() => window.__game?.state === 'menu', null, { timeout: 60_000 });

    assert.equal(await visible('menu'), true, '메뉴가 보이지 않는다');
    assert.equal(await visible('loading'), false, '로딩 화면이 남아 있다');

    const stats = await frameStats();
    assert.ok(stats.variance > 150,
      `메뉴 배경 3D 가 그려지지 않았다 (분산 ${stats.variance.toFixed(0)})`);
    await page.screenshot({ path: path.join(SHOTS, '1-menu.png') });
  });

  test('시작을 누르면 플레이가 시작된다', async () => {
    await page.click('#btnStart');
    assert.equal(await state(), 'playing');
    assert.equal(await visible('menu'), false);
    assert.equal(await page.textContent('#score'), '0');
    assert.equal(await page.evaluate(() => document.getElementById('hud').style.display), 'block');
  });

  test('키를 누르면 앞으로 이동하고 점수가 오른다', async () => {
    const row = () => page.evaluate(() => -window.__game.player.state.gridZ);
    const before = await row();

    // 도로 줄이면 나무에 막히지 않은 칸으로 비켜서면서 전진을 시도한다.
    // (옆으로만 움직이면 줄이 그대로라 영원히 제자리다 — 항상 ↑ 를 섞는다.)
    let advanced = 0;
    for (let i = 0; i < 14 && (await state()) === 'playing'; i++) {
      await page.keyboard.press('ArrowUp');
      await page.waitForTimeout(150);
      const now = await row();
      if (now > before + advanced) advanced = now - before;
      if (advanced >= 3) break;
      // 나무에 막혔을 수 있으니 한 칸 비켜본다.
      if (now === before + advanced) {
        await page.keyboard.press(i % 2 ? 'ArrowLeft' : 'ArrowRight');
        await page.waitForTimeout(150);
      }
    }

    assert.ok(advanced > 0, `한 칸도 전진하지 못했다 (줄 ${before} 고정)`);
    const score = await page.evaluate(() => window.__game.score);
    assert.equal(score, await row(), '점수는 도달한 줄 번호와 같아야 한다');
    assert.ok(score > 0, `점수가 오르지 않았다 (${score})`);
    await page.screenshot({ path: path.join(SHOTS, '2-playing.png') });
  });

  test('동물에 부딪히면 사망 연출을 거쳐 게임오버로 간다', async () => {
    // 앞쪽 도로 줄의 동물을 하나 골라 그 바로 위에 플레이어를 놓는다.
    // 줄만 맞추고 x 를 0 으로 두면 동물이 지나갈 때까지 우연에 맡기게 된다.
    const placed = await page.evaluate(() => {
      const g = window.__game;
      const from = -g.player.state.gridZ;
      for (let r = from + 1; r < from + 30; r++) {
        const row = g.world.rows.get(r);
        const victimOf = row?.animals?.[0];
        if (!victimOf) continue;
        g.player.state.gridZ = -r;
        g.player.state.isMoving = false;
        g.player.group.position.set(victimOf.x, 0, -r);
        return { row: r, species: victimOf.id, x: victimOf.x };
      }
      return null;
    });
    assert.ok(placed, '앞쪽에서 동물이 있는 도로 줄을 찾지 못했다');
    await page.waitForFunction(() => window.__game.state === 'dying', null, { timeout: 15_000 });
    await page.waitForFunction(() => window.__game.state === 'dead', null, { timeout: 15_000 });

    assert.equal(await visible('gameover'), true, '게임오버 화면이 뜨지 않았다');
    const shown = await page.textContent('#finalScore');
    assert.equal(shown, String(await page.evaluate(() => window.__game.score)));
    await page.screenshot({ path: path.join(SHOTS, '3-gameover.png') });
  });

  test('다시하기를 누르면 새 판이 시작된다', async () => {
    await page.click('#btnRetry');
    assert.equal(await state(), 'playing');
    assert.equal(await visible('gameover'), false);
    assert.equal(await page.evaluate(() => window.__game.score), 0, '점수가 초기화되지 않았다');
    assert.equal(await page.evaluate(() => window.__game.player.state.gridZ), 0);
    assert.equal(await page.evaluate(() => window.__game.player.state.isDead), false);
  });

  test('최고 점수가 저장된다', async () => {
    const best = await page.evaluate(() => localStorage.getItem('minchan5_crossy_best'));
    assert.ok(Number(best) >= 0, `최고 점수가 저장되지 않았다 (${best})`);
  });

  test('바이오미마다 화면 색조가 의도한 방향으로 다르다', async () => {
    const sample = async (row) => {
      await page.evaluate((r) => window.__game.jumpToRow(r), row);
      await page.waitForTimeout(700);
      return frameStats();
    };
    const farm = await sample(4);
    const forest = await sample(30);
    const savanna = await sample(54);

    for (const [name, s] of [['농장', farm], ['숲', forest], ['사바나', savanna]]) {
      assert.ok(s.variance > 150, `${name} 화면이 단색이다 (분산 ${s.variance.toFixed(0)})`);
    }
    // 숲은 초록이 우세하고, 사바나는 노을이라 파랑이 가장 약하다.
    assert.ok(forest.g > forest.b, `숲이 초록 우세가 아니다 (g=${forest.g.toFixed(0)} b=${forest.b.toFixed(0)})`);
    assert.ok(savanna.r > savanna.b, `사바나가 따뜻하지 않다 (r=${savanna.r.toFixed(0)} b=${savanna.b.toFixed(0)})`);
    assert.ok(savanna.r - savanna.b > forest.r - forest.b,
      '사바나가 숲보다 따뜻해야 한다');

    await page.screenshot({ path: path.join(SHOTS, '4-savanna.png') });
  });

  test('콘솔 에러 없이 동작한다', async () => {
    const errors = [];
    page.on('pageerror', (e) => errors.push(String(e)));
    page.on('console', (m) => { if (m.type() === 'error' && !m.text().includes('favicon')) errors.push(m.text()); });
    await page.evaluate(() => window.__game.jumpToRow(80));
    await page.waitForTimeout(1200);
    assert.deepEqual(errors, [], `콘솔 에러: ${errors.join(' | ')}`);
  });
});
