import { NodeIO } from '@gltf-transform/core';
import { KHRONOS_EXTENSIONS } from '@gltf-transform/extensions';
import { prune, dedup, weld, quantize, resample } from '@gltf-transform/functions';
import { mkdirSync, statSync, writeFileSync } from 'node:fs';

// Only these clips ever play in game. Everything else (Attack_Kick, HitReact,
// Eating, Wave, ...) is dead weight — and the Animated pack ships every clip
// twice, once bare and once "AnimalArmature|"-prefixed.
const WALK_SET = ['Walk', 'Gallop', 'Idle', 'Death'];
const HOP_SET = ['Jump', 'Idle'];

const ROSTER = [
  // Animated Animal Pack — full walk + gallop rigs
  ['animated_Cow', WALK_SET], ['animated_Bull', WALK_SET],
  ['animated_Donkey', WALK_SET], ['animated_Deer', WALK_SET],
  ['animated_Alpaca', WALK_SET], ['animated_Fox', WALK_SET],
  ['animated_ShibaInu', WALK_SET], ['animated_Stag', WALK_SET],
  ['animated_Husky', WALK_SET], ['animated_Wolf', WALK_SET],
  ['animated_Horse', WALK_SET], ['animated_WhiteHorse', WALK_SET],
  // Farm Animal Pack — Zebra walks; the rest only ship a hop cycle
  ['farm_Zebra', ['Walk', 'Run', 'Idle', 'Death']],
  ['farm_Pig', HOP_SET], ['farm_Sheep', HOP_SET],
  ['farm_Llama', HOP_SET], ['farm_Pug', HOP_SET],
  // Hazard + player
  ['extra_Snake', ['Snake_Walk', 'Snake_Idle']],
  ['extra_ChickenB', ['Walk', 'Jump', 'Idle', 'Death', 'Dance']],
];

const short = (name) => name.split('|').pop();
const io = new NodeIO().registerExtensions(KHRONOS_EXTENSIONS);
mkdirSync('opt', { recursive: true });

const rows = [];
for (const [file, keep] of ROSTER) {
  const doc = await io.read(`glb/${file}.glb`);
  const root = doc.getRoot();

  // Keep the first clip per short name, drop duplicates and everything
  // unlisted, then normalize names so game code sees one vocabulary.
  const seen = new Set();
  for (const anim of root.listAnimations()) {
    const name = short(anim.getName());
    if (!keep.includes(name) || seen.has(name)) {
      // Disposing the Animation alone orphans its samplers, which keep their
      // accessors reachable — prune() then treats that data as live. Tear the
      // channels and samplers down explicitly first.
      for (const ch of anim.listChannels()) ch.dispose();
      for (const s of anim.listSamplers()) s.dispose();
      anim.dispose();
      continue;
    }
    seen.add(name);
    anim.setName(name);
  }

  const missing = keep.filter(k => !seen.has(k));
  await doc.transform(
    resample(),                       // drop redundant keyframes
    dedup(),                          // share identical accessors/materials
    prune(),                          // drop now-orphaned data
    weld(),                           // merge duplicate vertices
    quantize({                        // KHR_mesh_quantization — decoded
      quantizePosition: 14,           // natively by three.js, no extra
      quantizeNormal: 10,             // decoder script needed at runtime
      quantizeTexcoord: 12,
      quantizeWeight: 8,
      quantizeGeneric: 12,
    }),
  );

  await io.write(`opt/${file}.glb`, doc);
  rows.push({
    file,
    before: statSync(`glb/${file}.glb`).size,
    after: statSync(`opt/${file}.glb`).size,
    clips: [...seen],
    missing,
  });
}

let b = 0, a = 0;
console.log('파일'.padEnd(24), '원본'.padStart(8), '최적화'.padStart(8), '절감'.padStart(6), '  클립');
for (const r of rows) {
  b += r.before; a += r.after;
  console.log(
    r.file.padEnd(24),
    `${(r.before / 1024).toFixed(0)}KB`.padStart(8),
    `${(r.after / 1024).toFixed(0)}KB`.padStart(8),
    `${(100 - r.after / r.before * 100).toFixed(0)}%`.padStart(6),
    ` ${r.clips.join(',')}`,
    r.missing.length ? `  ⚠ 누락:${r.missing.join(',')}` : '');
}
console.log(`\n합계  ${(b / 1024 / 1024).toFixed(2)} MB → ${(a / 1024 / 1024).toFixed(2)} MB` +
  `  (${(100 - a / b * 100).toFixed(0)}% 절감, ${rows.length}종)`);
writeFileSync('optimize-report.json', JSON.stringify(rows, null, 2));
