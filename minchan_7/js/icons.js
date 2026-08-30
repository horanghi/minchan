import { TEAM } from './world.js';
import { TYPES, ORDER } from './types.js';

/**
 * 버튼 그림. minchan_6 에서 그대로 가져왔다.
 * 색만 잡은 팀 색을 받는다.
 */
let INK = TEAM.a.ink;
export function setInk(c) { INK = c; }
/** 버튼용 장갑차 그림. drawAPC 와 같은 실루엣이다. */
export function iconAPC(x,h){
  const wr=h*.13;
  for(const wx of [-h*.27, 0, h*.27]){ x.beginPath(); x.arc(wx,-wr,wr,0,7); x.stroke(); }
  x.beginPath();
  x.moveTo(-h*.37,-h*.19); x.lineTo(h*.35,-h*.19);
  x.lineTo(h*.42,-h*.42); x.lineTo(h*.16,-h*.49); x.lineTo(-h*.34,-h*.49);
  x.closePath(); x.stroke();
  x.beginPath();
  x.moveTo(-h*.13,-h*.49); x.lineTo(h*.13,-h*.49);
  x.lineTo(h*.10,-h*.64); x.lineTo(-h*.10,-h*.64);
  x.closePath(); x.stroke();
  x.lineWidth=3.4;
  x.beginPath(); x.moveTo(h*.10,-h*.57); x.lineTo(h*.52,-h*.57); x.stroke();
  x.lineWidth=2.6;
}
export function iconOf(c,k){
  const x=c.getContext('2d'), h=52;
  // 다시 그릴 수 있어야 한다. 변환을 초기화하지 않으면 부를 때마다 밀린다.
  x.setTransform(1,0,0,1,0,0);
  x.clearRect(0,0,c.width,c.height);
  x.translate(30,64); x.scale(.9,.9);
  x.strokeStyle = k==='miner' ? '#e0b45f'
    : (k==='medic'||k==='priest' ? '#8fd8ae'
    : (k==='titan' ? '#8fd8e8' : INK));
  x.lineWidth=2.6; x.lineCap='round';
  // 차량은 사람 뼈대를 그리기 전에 갈라져 나간다. 버튼 그림과 전장 그림의
  // 실루엣이 같아야 무엇을 사는지 안다.
  if(TYPES[k].vehicle){ iconAPC(x,h); return; }
  const hip=-h*.42, sh=-h*.72;
  x.beginPath();
  x.moveTo(0,hip); x.lineTo(7,hip*.5); x.lineTo(9,0);
  x.moveTo(0,hip); x.lineTo(-7,hip*.5); x.lineTo(-9,0);
  x.moveTo(0,hip); x.lineTo(0,sh); x.stroke();
  x.beginPath(); x.arc(0,-h*.855,h*.125,0,7); x.stroke();
  if(k==='miner'){
    x.beginPath(); x.moveTo(0,sh); x.lineTo(10,sh-9); x.stroke();
    x.beginPath(); x.moveTo(10,sh-9); x.lineTo(18,sh-17); x.stroke();
    x.beginPath(); x.moveTo(13,sh-21); x.lineTo(22,sh-13); x.stroke();
  } else if(k==='archer'){
    x.beginPath(); x.moveTo(0,sh); x.lineTo(13,sh); x.stroke();
    x.beginPath(); x.arc(15,sh,8,-1.15,1.15); x.stroke();
  } else if(k==='shield'){
    x.beginPath(); x.moveTo(0,sh); x.lineTo(10,sh+3); x.stroke();
    x.beginPath(); x.rect(11,sh-8,7,18); x.stroke();
  } else if(k==='spear'){
    x.beginPath(); x.moveTo(0,sh); x.lineTo(9,sh+2); x.stroke();
    x.lineWidth=2.1;
    x.beginPath(); x.moveTo(2,sh+9); x.lineTo(27,sh-9); x.stroke();
    x.lineWidth=2.6;
  } else if(k==='medic'){
    x.beginPath(); x.moveTo(0,sh); x.lineTo(9,sh-5); x.stroke();
    x.strokeStyle='#7fd39b'; x.lineWidth=3.2;
    x.beginPath(); x.moveTo(13,sh-14); x.lineTo(13,sh-1); x.stroke();
    x.beginPath(); x.moveTo(7,sh-8); x.lineTo(19,sh-8); x.stroke();
    x.lineWidth=2.6;
  } else if(k==='cavalry'){
    x.beginPath(); x.ellipse(-2,-12,13,5,0,0,7); x.stroke();
    x.beginPath(); x.moveTo(-9,-8); x.lineTo(-9,0); x.moveTo(6,-8); x.lineTo(6,0); x.stroke();
    x.lineWidth=2.1;
    x.beginPath(); x.moveTo(-4,sh+8); x.lineTo(24,sh-2); x.stroke();
    x.lineWidth=2.6;
  } else if(k==='priest'){
    x.beginPath(); x.moveTo(0,sh); x.lineTo(9,sh-5); x.stroke();
    x.strokeStyle='#7fdcae'; x.lineWidth=3;
    x.beginPath(); x.moveTo(13,sh-16); x.lineTo(13,sh+4); x.stroke();
    x.beginPath(); x.moveTo(7,sh-9); x.lineTo(19,sh-9); x.stroke();
    x.lineWidth=2.6;
  } else if(k==='hero'){
    x.beginPath(); x.moveTo(0,sh); x.lineTo(10,sh+4); x.stroke();
    x.lineWidth=4;
    x.beginPath(); x.moveTo(10,sh+4); x.lineTo(27,sh-16); x.stroke();
    x.strokeStyle='#ffe9a8'; x.lineWidth=2;
    x.beginPath(); x.moveTo(10,sh+4); x.lineTo(25,sh-14); x.stroke();
    x.lineWidth=2.6;
  } else if(k==='berserk'){
    /* 철퇴 — 자루와 가시 머리 */
    x.beginPath(); x.moveTo(0,sh); x.lineTo(8,sh+3); x.stroke();
    x.lineWidth=3.4;
    x.beginPath(); x.moveTo(8,sh+3); x.lineTo(19,sh-9); x.stroke();
    x.lineWidth=2;
    for(let i=0;i<6;i++){ const t=i*Math.PI/3;
      x.beginPath(); x.moveTo(21+Math.cos(t)*4, sh-11+Math.sin(t)*4);
      x.lineTo(21+Math.cos(t)*8, sh-11+Math.sin(t)*8); x.stroke(); }
    x.beginPath(); x.arc(21,sh-11,5,0,7); x.stroke();
    x.lineWidth=2.6;
  } else if(k==='titan'){
    x.lineWidth=3;
    x.beginPath(); x.rect(-9,sh-8,18,20); x.stroke();
    x.beginPath(); x.moveTo(-9,sh-4); x.lineTo(-17,sh+6); x.stroke();
    x.beginPath(); x.moveTo(9,sh-4); x.lineTo(19,sh+2); x.stroke();
    x.strokeStyle='#8fd8e8'; x.lineWidth=2.6;
    x.beginPath(); x.arc(0,sh+2,4,0,7); x.stroke();
  } else if(k==='mage' || k==='frost'){
    x.beginPath(); x.moveTo(0,sh); x.lineTo(10,sh-2); x.stroke();
    x.beginPath(); x.moveTo(12,sh-16); x.lineTo(12,sh+8); x.stroke();
    x.strokeStyle = k==='mage' ? '#bfe6ff' : '#7fd0ff'; x.lineWidth=2.2;
    x.beginPath(); x.arc(12,sh-18,5,0,7); x.stroke();
    if(k==='frost'){
      for(let i=0;i<3;i++){ const a=i*Math.PI/3;
        x.beginPath();
        x.moveTo(12-Math.cos(a)*8, sh-18-Math.sin(a)*8);
        x.lineTo(12+Math.cos(a)*8, sh-18+Math.sin(a)*8); x.stroke(); }
    } else {
      x.beginPath(); x.moveTo(6,sh-26); x.lineTo(12,sh-20); x.lineTo(8,sh-18); x.lineTo(16,sh-10); x.stroke();
    }
    x.lineWidth=2.6;
  } else if(k==='bomber'){
    x.beginPath(); x.moveTo(0,sh); x.lineTo(10,sh-3); x.stroke();
    x.beginPath(); x.arc(15,sh-6,6,0,7); x.stroke();
    x.lineWidth=1.9;
    x.beginPath(); x.moveTo(18,sh-11); x.lineTo(22,sh-16); x.stroke();
    x.lineWidth=2.6;
  } else {
    x.beginPath(); x.moveTo(0,sh); x.lineTo(11,sh+6); x.stroke();
    x.beginPath(); x.moveTo(11,sh+6); x.lineTo(24,sh-9); x.lineWidth=k==='giant'?4.4:3; x.stroke();
  }
}

