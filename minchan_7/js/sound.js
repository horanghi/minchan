let AC = null;
export let sound = true;
export function setSound(v){ sound = v; }
export function beep(f,d,g){
  if(!sound) return;
  try{
    AC = AC || new (window.AudioContext||window.webkitAudioContext)();
    const o=AC.createOscillator(), v=AC.createGain();
    o.type='square'; o.frequency.value=f; v.gain.value=g||.04;
    o.connect(v); v.connect(AC.destination); o.start();
    v.gain.exponentialRampToValueAtTime(.0001, AC.currentTime+(d||.08));
    o.stop(AC.currentTime+(d||.08)+.02);
  }catch(e){}
}
