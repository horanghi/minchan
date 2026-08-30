let AC = null;
export let sound = true;
export function setSound(v) { sound = v; }

/**
 * 효과음.
 *
 * **사각파를 버렸다.** 배음이 거칠어 소리가 따갑고, 병사가 많아지면
 * 타격음이 겹쳐 소음이 된다. 삼각파로 낮추고, 시작과 끝을 짧게 눕혀
 * '딱' 하고 끊기지 않게 하고, 높은 쪽은 필터로 깎아 낸다.
 *
 * **겹침도 막는다.** 전투가 붙으면 초당 수십 번씩 울리는데, 그건 소리가
 * 아니라 잡음이다. 짧은 사이에 들어온 것은 그냥 버린다.
 */
let lastAt = 0, burst = 0;
const MIN_GAP = 0.045;      // 이보다 촘촘하면 버린다
const BURST_MAX = 3;        // 같은 순간에 이만큼까지만

export function beep(f, d, g) {
  if (!sound) return;
  try {
    AC = AC || new (window.AudioContext || window.webkitAudioContext)();
    const t = AC.currentTime;
    if (t - lastAt < MIN_GAP) { if (++burst > BURST_MAX) return; }
    else { burst = 0; lastAt = t; }

    const dur = Math.max(.05, d || .08);
    const o = AC.createOscillator(), v = AC.createGain(), lp = AC.createBiquadFilter();
    o.type = 'triangle';
    o.frequency.setValueAtTime(f, t);
    lp.type = 'lowpass';
    lp.frequency.setValueAtTime(Math.min(2800, f * 2.6 + 700), t);
    lp.Q.value = .6;

    const peak = Math.min(.05, (g || .04) * .55);
    v.gain.setValueAtTime(.0001, t);
    v.gain.exponentialRampToValueAtTime(peak, t + Math.min(.018, dur * .3));
    v.gain.exponentialRampToValueAtTime(.0001, t + dur);

    o.connect(v); v.connect(lp); lp.connect(AC.destination);
    o.start(t); o.stop(t + dur + .03);
  } catch (e) {}
}
