import { ctx, gy, TEAM } from './world.js';
import { G } from './state.js';

/**
 * 유닛 그림. minchan_6 에서 그대로 가져왔다.
 *
 * 바뀐 것은 **색과 방향을 정하는 세 줄**뿐이다. 1:1 에서는 "아군이면 파랑,
 * 아니면 빨강" 이면 됐지만 셋이 붙으면 그 이분법이 성립하지 않는다.
 * 색은 주인의 팀 색을 그대로 쓰고, 방향은 유닛이 자기 변에서 나아가는
 * 쪽(`u.dir`)을 따른다.
 */
/**
 * 기관총 장갑차.
 *
 * 스틱맨 사이를 굴러다니는 물건이라 **사람처럼 그리지 않는다.** 바퀴 세 짝
 * 위에 앞이 깎인 차체를 얹고, 포탑에서 총열이 앞으로 나온다. 여섯 발이
 * 나가는 동안 총구 불꽃이 튄다 — 연사라는 게 눈에 보여야 한다.
 */
export function drawAPC(u,h,col,lw){
  const fill = u.hurt>0 ? '#f0663f' : TEAM[u.own].dark;
  ctx.lineJoin='round';

  /* 바퀴 — 축을 함께 그려야 굴러가는 게 보인다 */
  const wr=h*.125, roll=u.ph*.8;
  for(const wx of [-h*.30, 0, h*.30]){
    ctx.fillStyle='#1b2430';
    ctx.beginPath(); ctx.arc(wx,-wr,wr,0,7); ctx.fill();
    ctx.lineWidth=lw; ctx.beginPath(); ctx.arc(wx,-wr,wr,0,7); ctx.stroke();
    ctx.lineWidth=lw*.7;
    ctx.beginPath();
    ctx.moveTo(wx-Math.cos(roll)*wr*.6, -wr-Math.sin(roll)*wr*.6);
    ctx.lineTo(wx+Math.cos(roll)*wr*.6, -wr+Math.sin(roll)*wr*.6);
    ctx.stroke();
  }

  /* 차체 — 앞이 비스듬히 깎인 각진 상자 */
  const b0=-h*.19, b1=-h*.49;
  ctx.lineWidth=lw*1.15; ctx.fillStyle=fill;
  ctx.beginPath();
  ctx.moveTo(-h*.43,b0); ctx.lineTo(h*.41,b0);
  ctx.lineTo(h*.48,b1+h*.07); ctx.lineTo(h*.19,b1); ctx.lineTo(-h*.40,b1);
  ctx.closePath(); ctx.fill(); ctx.stroke();

  /* 시야창 */
  ctx.fillStyle='#cfe0ee';
  ctx.fillRect(h*.21, b1+h*.025, h*.13, h*.05);

  /* 포탑 */
  ctx.fillStyle=fill;
  ctx.beginPath();
  ctx.moveTo(-h*.15,b1); ctx.lineTo(h*.15,b1);
  ctx.lineTo(h*.12,b1-h*.16); ctx.lineTo(-h*.12,b1-h*.16);
  ctx.closePath(); ctx.fill(); ctx.stroke();

  /* 총열 — 쏘는 동안 반동으로 떨린다 */
  const kick = u.mgN>0 ? Math.sin(G.t*70)*h*.02 : 0;
  const my = b1-h*.10;
  ctx.lineWidth=lw*1.5;
  ctx.beginPath(); ctx.moveTo(h*.11-kick,my); ctx.lineTo(h*.58-kick,my); ctx.stroke();
  ctx.lineWidth=lw*.8;
  ctx.beginPath(); ctx.moveTo(h*.19-kick,my-h*.05); ctx.lineTo(h*.32-kick,my-h*.05); ctx.stroke();

  /* 총구 불꽃 */
  if(u.mgN>0){
    const f=h*.11*(.55+Math.random()*.7), mx=h*.58-kick;
    ctx.fillStyle='#ffd98a';
    ctx.beginPath();
    ctx.moveTo(mx,my); ctx.lineTo(mx+f, my-f*.55);
    ctx.lineTo(mx+f*1.35, my); ctx.lineTo(mx+f, my+f*.55);
    ctx.closePath(); ctx.fill();
  }
  ctx.lineWidth=lw;
}

export function drawUnit(u){
  const h=u.size;
  // 광부는 광산을 오가며 몸을 돌린다. 나머지는 나아가는 쪽을 본다.
  let dir = u.type==='miner' ? u.dir * (u.job==='toMine' ? -1 : 1) : u.dir;
  // T.col 이 있으면 그 색을 쓴다. 3판에 적 다섯 종이 섞여 나오는데 전부
  // 같은 빨강이면 무엇이 오는지 구분할 수 없다.
  const col = u.hurt>0 ? '#f0663f'
            : (u.type==='miner' ? '#c98f1a'
            : (u.T.col ? u.T.col : TEAM[u.own].c));
  ctx.save(); ctx.translate(u.x, gy+u.yo);
  ctx.globalAlpha=.13; ctx.fillStyle='#1b2430';
  ctx.beginPath(); ctx.ellipse(0,0,h*.2,h*.05,0,0,7); ctx.fill(); ctx.globalAlpha=1;
  if(u.dead){
    const k=Math.min(1,u.dead/.5);
    ctx.globalAlpha=Math.max(0,1-u.dead/1.3);
    // 장갑차는 옆으로 넘어지지 않는다. 주저앉으며 기운다.
    if(u.T.vehicle){ ctx.rotate(dir*k*.13); ctx.translate(0, k*h*.09); }
    else { ctx.rotate(dir*k*Math.PI/2*.92); ctx.translate(0,-2); }
  }
  ctx.scale(dir,1);
  const lw=Math.max(2.2,h*.055);
  ctx.lineWidth=lw; ctx.lineCap='round'; ctx.strokeStyle=col;
  if(u.T.vehicle){ drawAPC(u,h,col,lw); ctx.restore(); return; }
  const hipY=-h*.42, shY=-h*.72, headY=-h*.855, hr=h*.125;
  const p=Math.sin(u.ph);

  ctx.beginPath();
  ctx.moveTo(0,hipY); ctx.lineTo(p*h*.15,hipY*.5); ctx.lineTo(p*h*.2,0);
  ctx.moveTo(0,hipY); ctx.lineTo(-p*h*.15,hipY*.5); ctx.lineTo(-p*h*.2,0);
  ctx.stroke();
  ctx.beginPath(); ctx.moveTo(0,hipY); ctx.lineTo(0,shY); ctx.stroke();
  ctx.beginPath(); ctx.arc(0,headY,hr,0,7); ctx.stroke();

  const sw=u.sw;
  const armA=-0.6-sw*1.5;
  const hx=Math.cos(armA)*h*.3, hy=shY+Math.sin(armA)*h*.3;

  if(u.type==='miner'){
    const swing = u.job==='mining' ? u.sw : 0;
    const a = -1.5 + swing*1.9;
    const px = Math.cos(a)*h*.32, py = shY+Math.sin(a)*h*.32;
    ctx.beginPath(); ctx.moveTo(0,shY); ctx.lineTo(px,py); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0,shY); ctx.lineTo(px*.7,py*.92); ctx.stroke();
    /* 곡괭이 */
    ctx.beginPath(); ctx.moveTo(px,py); ctx.lineTo(px+Math.cos(a)*h*.3, py+Math.sin(a)*h*.3); ctx.stroke();
    const tx2=px+Math.cos(a)*h*.3, ty2=py+Math.sin(a)*h*.3;
    ctx.beginPath(); ctx.moveTo(tx2-h*.12, ty2-h*.05); ctx.lineTo(tx2+h*.12, ty2+h*.05); ctx.stroke();
    if(u.carry>0){
      ctx.fillStyle='#e8b23a'; ctx.strokeStyle='#a87d16'; ctx.lineWidth=1.6;
      ctx.beginPath(); ctx.rect(-h*.11, headY-h*.34, h*.22, h*.16); ctx.fill(); ctx.stroke();
      ctx.strokeStyle=col; ctx.lineWidth=lw;
    }
  } else if(u.type==='archer'){
    ctx.beginPath(); ctx.moveTo(0,shY); ctx.lineTo(h*.26,shY-h*.02); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0,shY); ctx.lineTo(h*.13,shY+h*.1); ctx.stroke();
    ctx.beginPath(); ctx.arc(h*.3,shY-h*.02,h*.17,-1.15,1.15); ctx.stroke();
    ctx.lineWidth=lw*.55;
    const pull=h*.09*(1-sw);
    ctx.beginPath();
    ctx.moveTo(h*.3+Math.cos(-1.15)*h*.17, shY-h*.02+Math.sin(-1.15)*h*.17);
    ctx.lineTo(h*.3-pull, shY-h*.02);
    ctx.lineTo(h*.3+Math.cos(1.15)*h*.17, shY-h*.02+Math.sin(1.15)*h*.17);
    ctx.stroke(); ctx.lineWidth=lw;
  } else if(u.type==='spear'){
    ctx.beginPath(); ctx.moveTo(0,shY); ctx.lineTo(-h*.18,shY+h*.13); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0,shY); ctx.lineTo(hx,hy); ctx.stroke();
    /* 창대. 찌를 때 앞으로 뻗는다 */
    const sa = armA*.3 + sw*.85, len=h*.95;
    const bx = hx-Math.cos(sa)*h*.2, by = hy-Math.sin(sa)*h*.2;
    ctx.lineWidth=lw*.8;
    ctx.beginPath(); ctx.moveTo(bx,by); ctx.lineTo(bx+Math.cos(sa)*len, by+Math.sin(sa)*len); ctx.stroke();
    ctx.lineWidth=lw;
  } else if(u.type==='medic'){
    ctx.beginPath(); ctx.moveTo(0,shY); ctx.lineTo(-h*.18,shY+h*.12); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0,shY); ctx.lineTo(h*.2,shY-h*.14); ctx.stroke();
    /* 초록 십자. 이 색이 아군 파랑과 겹치지 않아 한눈에 구분된다 */
    ctx.strokeStyle='#7fd39b'; ctx.lineWidth=lw*1.15;
    ctx.beginPath(); ctx.moveTo(h*.2,shY-h*.3); ctx.lineTo(h*.2,shY-h*.04); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(h*.07,shY-h*.17); ctx.lineTo(h*.33,shY-h*.17); ctx.stroke();
    ctx.strokeStyle=col; ctx.lineWidth=lw;
  } else if(u.type==='cavalry'){
    /* 말 위에서 창을 낮게 겨눈다 */
    ctx.lineWidth=lw*.9;
    ctx.beginPath(); ctx.ellipse(-h*.05, -h*.2, h*.3, h*.11, 0, 0, 7); ctx.stroke();
    for(const o of [-.26,-.08,.1,.28]){
      ctx.beginPath(); ctx.moveTo(h*o, -h*.14); ctx.lineTo(h*o+p*h*.06, 0); ctx.stroke();
    }
    ctx.lineWidth=lw;
    ctx.beginPath(); ctx.moveTo(0,shY); ctx.lineTo(hx,hy); ctx.stroke();
    const la = -0.15 + sw*.5;
    ctx.lineWidth=lw*.8;
    ctx.beginPath(); ctx.moveTo(hx-Math.cos(la)*h*.2, hy-Math.sin(la)*h*.2);
    ctx.lineTo(hx+Math.cos(la)*h*.75, hy+Math.sin(la)*h*.75); ctx.stroke();
    ctx.lineWidth=lw;
  } else if(u.type==='priest'){
    ctx.beginPath(); ctx.moveTo(0,shY); ctx.lineTo(-h*.17,shY+h*.13); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0,shY); ctx.lineTo(h*.2,shY-h*.12); ctx.stroke();
    ctx.strokeStyle='#3fa96b'; ctx.lineWidth=lw*1.1;
    ctx.beginPath(); ctx.moveTo(h*.2,shY-h*.34); ctx.lineTo(h*.2,shY+h*.16); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(h*.06,shY-h*.2); ctx.lineTo(h*.34,shY-h*.2); ctx.stroke();
    ctx.strokeStyle=col; ctx.lineWidth=lw;
  } else if(u.type==='hero'){
    ctx.beginPath(); ctx.moveTo(0,shY); ctx.lineTo(-h*.22,shY+h*.2); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0,shY); ctx.lineTo(hx,hy); ctx.stroke();
    /* 전설의 검 — 크게, 휘두를수록 앞으로 */
    const ba = armA-.7+sw*1.6;
    ctx.lineWidth=lw*1.6;
    ctx.beginPath(); ctx.moveTo(hx,hy); ctx.lineTo(hx+Math.cos(ba)*h*.7, hy+Math.sin(ba)*h*.7); ctx.stroke();
    ctx.lineWidth=lw*.9; ctx.strokeStyle='#ffe9a8';
    ctx.beginPath(); ctx.moveTo(hx,hy); ctx.lineTo(hx+Math.cos(ba)*h*.62, hy+Math.sin(ba)*h*.62); ctx.stroke();
    ctx.strokeStyle=col; ctx.lineWidth=lw;
  } else if(u.type==='berserk'){
    /* 거대 철퇴. 평소엔 뒤로 끌고, 칠 때 앞으로 내려찍는다 */
    const a = .55 + (1-sw)*2.15;
    const armLen=h*.30;
    const hxx=Math.cos(a)*armLen, hyy=shY+Math.sin(a)*armLen;
    ctx.lineWidth=lw*1.15;
    ctx.beginPath(); ctx.moveTo(0,shY); ctx.lineTo(hxx,hyy); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0,shY-h*.03); ctx.lineTo(hxx*.72,hyy*.94); ctx.stroke();
    const hl=h*.6;
    const ex=hxx+Math.cos(a)*hl, ey=hyy+Math.sin(a)*hl;
    ctx.lineWidth=lw*1.6;
    ctx.beginPath(); ctx.moveTo(hxx,hyy); ctx.lineTo(ex,ey); ctx.stroke();
    /* 철퇴 머리 — 덩어리에 가시를 두른다 */
    ctx.save(); ctx.translate(ex,ey); ctx.rotate(a);
    const R=h*.17;
    ctx.lineWidth=lw*.9; ctx.strokeStyle='#1b2430'; ctx.fillStyle='#8a94a3';
    for(let i=0;i<8;i++){
      const t2=i*Math.PI/4;
      ctx.beginPath();
      ctx.moveTo(Math.cos(t2)*R*.8, Math.sin(t2)*R*.8);
      ctx.lineTo(Math.cos(t2)*R*1.55, Math.sin(t2)*R*1.55); ctx.stroke();
    }
    ctx.beginPath(); ctx.arc(0,0,R,0,7); ctx.fill(); ctx.stroke();
    ctx.fillStyle='#6b7785';
    ctx.beginPath(); ctx.arc(-R*.25,-R*.25,R*.42,0,7); ctx.fill();
    ctx.restore();
    ctx.strokeStyle=col; ctx.lineWidth=lw;
    ctx.lineWidth=lw*.7;
    ctx.beginPath();
    ctx.moveTo(-hr*.6, headY-hr*.25); ctx.lineTo(-hr*.1, headY);
    ctx.moveTo( hr*.6, headY-hr*.25); ctx.lineTo( hr*.1, headY); ctx.stroke();
    ctx.lineWidth=lw;
  } else if(u.T.tman){
    /* T맨 — 어깨 딱풀미사일 발사관 · 가슴 코어 · 양손 건틀랫.
       타이탄과 실루엣이 겹치면 1.5배 크다는 게 안 읽힌다. 팔 끝을 칼이
       아니라 주먹으로 두껍게 막아, 멀리서도 다른 것이 왔다는 걸 안다. */
    const st = u.lastStage|0;
    const glow='#ffd86a', core='#fff6d8';
    ctx.lineWidth=lw*1.35;

    /* 어깨 — 그 위에 발사관을 얹는다 */
    ctx.beginPath(); ctx.moveTo(-h*.23,shY); ctx.lineTo(h*.23,shY); ctx.stroke();
    for(const sgn of [-1,1]){
      ctx.fillStyle='#3a3222';
      ctx.beginPath(); ctx.arc(sgn*h*.23, shY+h*.01, h*.10, Math.PI, 0);
      ctx.closePath(); ctx.fill(); ctx.stroke();
      /* 딱풀미사일 발사관 — 통 두 개. 쏘는 동안 주둥이가 탄다 */
      ctx.save(); ctx.translate(sgn*h*.23, shY-h*.075);
      ctx.fillStyle='#2b2517'; ctx.lineWidth=lw;
      ctx.beginPath(); ctx.rect(-h*.08,-h*.075, h*.16, h*.095); ctx.fill(); ctx.stroke();
      const lit = (st===1 && sw>.12);
      ctx.fillStyle = lit ? '#ffb347' : '#8a7a3a';
      for(const t of [-1,1]){
        ctx.beginPath(); ctx.arc(t*h*.04, -h*.028, h*.027, 0, 7); ctx.fill();
      }
      if(lit){
        ctx.fillStyle='rgba(255,190,90,'+(sw*.8)+')';
        ctx.beginPath(); ctx.arc(0,-h*.028, h*.075*sw+3, 0, 7); ctx.fill();
      }
      ctx.restore();
      ctx.lineWidth=lw*1.35;
    }

    /* 가슴 코어 — 코어 빔(3단) 시전 중에 크게 밝아진다 */
    const cy=shY+h*.14;
    const pulse=.5+Math.sin(G.t*6+u.id)*.2+(st===2 ? 1.0*sw : 0);
    ctx.fillStyle='rgba(255,205,90,'+(.22+pulse*.42)+')';
    ctx.beginPath(); ctx.arc(0,cy,h*.115*(1+pulse*.4),0,7); ctx.fill();
    ctx.fillStyle=core;
    ctx.beginPath(); ctx.arc(0,cy,h*.05,0,7); ctx.fill();
    ctx.strokeStyle=glow; ctx.lineWidth=lw*.85;
    ctx.beginPath(); ctx.arc(0,cy,h*.115,0,7); ctx.stroke();
    ctx.strokeStyle=col; ctx.lineWidth=lw*1.35;

    /* 바이저 */
    ctx.beginPath(); ctx.moveTo(-hr*.9, headY-hr*.1); ctx.lineTo(hr*.9, headY-hr*.1); ctx.stroke();
    ctx.strokeStyle='#ffbf4a'; ctx.lineWidth=lw*.9;
    ctx.beginPath(); ctx.moveTo(-hr*.6, headY+hr*.15); ctx.lineTo(hr*.6, headY+hr*.15); ctx.stroke();
    ctx.strokeStyle=col; ctx.lineWidth=lw*1.35;

    /* 양손 건틀랫. 오른쪽이 1단에서 앞으로 내지른다 */
    const gauntlet=(sgn, ang)=>{
      const ox=sgn*h*.23, oy=shY+h*.03;
      const fx=ox+Math.cos(ang)*h*.30, fy=oy+Math.sin(ang)*h*.30;
      ctx.beginPath(); ctx.moveTo(ox,oy); ctx.lineTo(fx,fy); ctx.stroke();
      ctx.save(); ctx.translate(fx,fy); ctx.rotate(ang);
      ctx.fillStyle='#3a3222'; ctx.strokeStyle=col; ctx.lineWidth=lw*1.15;
      ctx.beginPath(); ctx.rect(-h*.025,-h*.105, h*.25, h*.21); ctx.fill(); ctx.stroke();
      ctx.strokeStyle=glow; ctx.lineWidth=lw*.7;
      for(const t of [-.052,.052]){
        ctx.beginPath(); ctx.moveTo(h*.035, t*h); ctx.lineTo(h*.205, t*h); ctx.stroke();
      }
      ctx.restore();
      ctx.strokeStyle=col; ctx.lineWidth=lw*1.35;
      return [fx,fy];
    };
    gauntlet(-1, 0.9);
    const punch = st===0 ? (0.55 - sw*1.45) : 0.55;
    const [pfx,pfy] = gauntlet(1, punch);
    if(st===0 && sw>.5){
      ctx.strokeStyle='#ffd86a'; ctx.lineWidth=lw*1.1;
      ctx.beginPath(); ctx.arc(pfx+h*.26, pfy, h*.14*sw, -1.0, 1.0); ctx.stroke();
      ctx.strokeStyle=col; ctx.lineWidth=lw*1.35;
    }
  } else if(u.T.titan){
    /* 기계다. 어깨 장갑 · 가슴 코어 · 바이저 · 손목 캐논 · 대검 */
    const st = u.lastStage|0;
    const glow = u.T.infected ? '#9ff06f' : '#78f0ff';
    const core = u.T.infected ? '#e6ffd8' : '#d8fbff';
    ctx.lineWidth=lw*1.35;
    ctx.beginPath(); ctx.moveTo(-h*.19,shY); ctx.lineTo(h*.19,shY); ctx.stroke();
    ctx.fillStyle = u.T.infected ? '#2a3a24' : '#22323f';
    for(const sgn of [-1,1]){
      ctx.beginPath(); ctx.arc(sgn*h*.19, shY+h*.01, h*.09, Math.PI, 0);
      ctx.closePath(); ctx.fill(); ctx.stroke();
    }
    /* 가슴 코어 — 뛴다. 코어 빔(3단) 시전 중에는 크게 밝아진다 */
    const cy=shY+h*.13;
    const pulse = .5 + Math.sin(G.t*6+u.id)*.2 + (st===2 ? .9*sw : 0);
    ctx.fillStyle = 'rgba('+(u.T.infected?'150,240,110':'120,240,255')+','+(.22+pulse*.4)+')';
    ctx.beginPath(); ctx.arc(0, cy, h*.10*(1+pulse*.35), 0, 7); ctx.fill();
    ctx.fillStyle=core;
    ctx.beginPath(); ctx.arc(0, cy, h*.045, 0, 7); ctx.fill();
    ctx.strokeStyle=glow; ctx.lineWidth=lw*.8;
    ctx.beginPath(); ctx.arc(0, cy, h*.10, 0, 7); ctx.stroke();
    ctx.strokeStyle=col; ctx.lineWidth=lw*1.35;
    /* 바이저 */
    ctx.beginPath(); ctx.moveTo(-hr*.85, headY-hr*.1); ctx.lineTo(hr*.85, headY-hr*.1); ctx.stroke();
    ctx.strokeStyle = u.T.infected ? '#b6ff7a' : '#ff8f6f'; ctx.lineWidth=lw*.9;
    ctx.beginPath(); ctx.moveTo(-hr*.55, headY+hr*.15); ctx.lineTo(hr*.55, headY+hr*.15); ctx.stroke();
    ctx.strokeStyle=col; ctx.lineWidth=lw*1.35;

    /* 왼팔 — 손목 레이저 캐논. 1단에서 앞으로 뻗고 총구가 탄다 */
    const ca = st===0 ? (0.55 - sw*.75) : 0.55;
    const lox=-h*.19;
    const cxa=lox+Math.cos(ca)*h*.30, cya=shY+h*.02+Math.sin(ca)*h*.30;
    ctx.beginPath(); ctx.moveTo(lox,shY+h*.02); ctx.lineTo(cxa,cya); ctx.stroke();
    ctx.save(); ctx.translate(cxa,cya); ctx.rotate(ca);
    ctx.fillStyle = u.T.infected ? '#1e2c1a' : '#20303f';
    ctx.strokeStyle=col; ctx.lineWidth=lw;
    ctx.beginPath(); ctx.rect(-h*.03, -h*.075, h*.30, h*.15); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(h*.27,-h*.045); ctx.lineTo(h*.34,0); ctx.lineTo(h*.27,h*.045); ctx.stroke();
    if(st===0 && sw>.1){
      ctx.fillStyle='rgba('+(u.T.infected?'190,255,140':'255,140,110')+','+(sw*.9)+')';
      ctx.beginPath(); ctx.arc(h*.36, 0, h*.07*sw+3, 0, 7); ctx.fill();
    }
    ctx.restore();
    ctx.strokeStyle=col; ctx.lineWidth=lw*1.35;

    /* 오른팔 — 대검. 어깨에 걸치다 2단에서 내려찍는다 */
    const rest=-2.15;
    const sa2 = st===1 ? (rest + sw*3.0) : rest;
    const rox=h*.19;
    const gx2=rox+Math.cos(sa2)*h*.32, gy3=shY+h*.02+Math.sin(sa2)*h*.32;
    ctx.beginPath(); ctx.moveTo(rox,shY+h*.02); ctx.lineTo(gx2,gy3); ctx.stroke();
    const bl2=h*.88, ba2=sa2+.06;
    const ex2=gx2+Math.cos(ba2)*bl2, ey2=gy3+Math.sin(ba2)*bl2;
    ctx.strokeStyle = u.T.infected ? '#c8e0b8' : '#cfe0ee';
    ctx.lineWidth=lw*1.9; ctx.lineCap='butt';
    ctx.beginPath(); ctx.moveTo(gx2,gy3); ctx.lineTo(ex2,ey2); ctx.stroke();
    ctx.strokeStyle='#1b2430'; ctx.lineWidth=lw*.9;
    ctx.beginPath(); ctx.moveTo(gx2,gy3); ctx.lineTo(ex2,ey2); ctx.stroke();
    ctx.lineCap='round';
    ctx.strokeStyle='#e8b23a'; ctx.lineWidth=lw*1.2;
    ctx.beginPath();
    ctx.moveTo(gx2+Math.cos(ba2+1.57)*h*.13, gy3+Math.sin(ba2+1.57)*h*.13);
    ctx.lineTo(gx2+Math.cos(ba2-1.57)*h*.13, gy3+Math.sin(ba2-1.57)*h*.13); ctx.stroke();
    ctx.strokeStyle=col; ctx.lineWidth=lw;
  } else if(u.type==='mage' || u.type==='frost'){
    const magic = u.type==='mage' ? '#bfe6ff' : '#7fd0ff';
    ctx.beginPath(); ctx.moveTo(0,shY); ctx.lineTo(-h*.17,shY+h*.13); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0,shY); ctx.lineTo(hx*.8,hy*.98); ctx.stroke();
    /* 지팡이 */
    const sx=hx*.8, sy=hy*.98;
    ctx.beginPath(); ctx.moveTo(sx,sy-h*.38); ctx.lineTo(sx,sy+h*.34); ctx.stroke();
    /* 끝의 빛. 시전할수록(sw) 커진다 */
    ctx.strokeStyle=magic; ctx.lineWidth=lw*.9;
    const rr = h*.09*(1+sw*.9);
    ctx.beginPath(); ctx.arc(sx, sy-h*.38, rr, 0, 7); ctx.stroke();
    if(u.type==='frost'){
      for(let i=0;i<3;i++){
        const a=i*Math.PI/3;
        ctx.beginPath();
        ctx.moveTo(sx-Math.cos(a)*rr*1.7, sy-h*.38-Math.sin(a)*rr*1.7);
        ctx.lineTo(sx+Math.cos(a)*rr*1.7, sy-h*.38+Math.sin(a)*rr*1.7);
        ctx.stroke();
      }
    }
    ctx.strokeStyle=col; ctx.lineWidth=lw;
  } else if(u.type==='bomber'){
    ctx.beginPath(); ctx.moveTo(0,shY); ctx.lineTo(-h*.18,shY+h*.12); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0,shY); ctx.lineTo(hx,hy); ctx.stroke();
    ctx.beginPath(); ctx.arc(hx+h*.09, hy-h*.01, h*.1, 0, 7); ctx.stroke();
    ctx.lineWidth=lw*.7;
    ctx.beginPath(); ctx.moveTo(hx+h*.13,hy-h*.09); ctx.lineTo(hx+h*.2,hy-h*.19); ctx.stroke();
    ctx.lineWidth=lw;
  } else if(u.type==='shield'){
    ctx.beginPath(); ctx.moveTo(0,shY); ctx.lineTo(hx*.7,hy*.98); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0,shY); ctx.lineTo(h*.2,shY+h*.05); ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(h*.22,shY-h*.16); ctx.lineTo(h*.34,shY-h*.1);
    ctx.lineTo(h*.34,shY+h*.2); ctx.lineTo(h*.22,shY+h*.3); ctx.closePath(); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(hx*.7,hy*.98); ctx.lineTo(hx*.7+h*.26,hy*.98-h*.16); ctx.stroke();
  } else {
    ctx.beginPath(); ctx.moveTo(0,shY); ctx.lineTo(-h*.2,shY+h*.12); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0,shY); ctx.lineTo(hx,hy); ctx.stroke();
    const blade = u.type==='giant'?h*.5:h*.42;
    const ba = armA-.5+sw*1.3;
    ctx.lineWidth = u.type==='giant'?lw*1.7:lw*1.1;
    ctx.beginPath(); ctx.moveTo(hx,hy); ctx.lineTo(hx+Math.cos(ba)*blade, hy+Math.sin(ba)*blade); ctx.stroke();
    ctx.lineWidth=lw;
  }
  ctx.restore();

  if(!u.dead && u.slowT>0){
    /* 얼었다는 것이 몸이 아니라 발밑에 보여야 한다. 몸 색을 바꾸면
       아군·적군 구분이 흐려진다. */
    ctx.save();
    ctx.strokeStyle='#7fd0ff'; ctx.lineWidth=2; ctx.globalAlpha=.85;
    const w=h*.22;
    ctx.beginPath();
    ctx.moveTo(u.x-w, gy+u.yo); ctx.lineTo(u.x+w, gy+u.yo);
    ctx.moveTo(u.x-w*.6, gy+u.yo-4); ctx.lineTo(u.x+w*.6, gy+u.yo-4);
    ctx.stroke();
    ctx.restore();
  }

  if(!u.dead && u.ward>0){
    /* 광부는 무적이다. 그 사실이 화면에도 보여야 한다. */
    ctx.save();
    const a = Math.min(1, u.ward/.5);
    ctx.beginPath(); ctx.arc(u.x, gy - h*.5 + u.yo, h*.8, 0, Math.PI*2);
    ctx.globalAlpha = .10 + a*.16; ctx.fillStyle = '#9fd8ff'; ctx.fill();
    ctx.globalAlpha = .30 + a*.55; ctx.strokeStyle = '#cfeaff';
    ctx.lineWidth = 2 + a*1.6; ctx.stroke();
    ctx.restore();
  }

  if(!u.dead && u.hp<u.max){
    const w=h*.5, r=u.hp/u.max;
    ctx.fillStyle='#c7d2dc'; ctx.fillRect(u.x-w/2, gy+u.yo-h-13, w, 4);
    ctx.fillStyle=col; ctx.fillRect(u.x-w/2, gy+u.yo-h-13, w*r, 4);
  }
}
