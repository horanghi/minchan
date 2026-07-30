// 종별 오브젝트 풀.
//
// SkinnedMesh 는 InstancedMesh 로 묶을 수 없다 — 개체마다 스켈레톤이 따로
// 필요하기 때문이다. 대신 SkeletonUtils.clone 을 쓰면 지오메트리와 머티리얼은
// 원본과 공유하고 뼈대만 복제한다. 줄이 생길 때마다 새로 만들면 GC 가 튀므로
// 종마다 만들어둔 걸 돌려쓴다.

import * as THREE from 'three';
import { clone as cloneSkinned } from 'three/addons/utils/SkeletonUtils.js';

import { createContactShadowTexture } from './renderer.js';

// 종마다 놀려둘 수 있는 최대 개체 수.
//
// 상한이 없으면 "같은 종이 한 화면에 몇 마리나 겹쳤는가"의 최고 기록이
// 갱신될 때마다 개체가 영구히 늘어난다. 개체 하나는 SkinnedMesh 를 4~8개
// 가지고 각각이 본 텍스처를 물기 때문에, 오래 달리면 GPU 텍스처가
// 수천 개까지 불어난다. 살아 있는 수보다 넉넉하되 유한하게 잡는다.
const MAX_IDLE_PER_SPECIES = 8;

export function createPool(scene, speciesMap) {
  const shadowTex = createContactShadowTexture();
  const shadowMat = new THREE.MeshBasicMaterial({
    map: shadowTex, transparent: true, depthWrite: false,
    opacity: 0.9, polygonOffset: true, polygonOffsetFactor: -2,
  });
  const shadowGeo = new THREE.PlaneGeometry(1, 1);

  /** @type {Map<string, object[]>} 종 id → 놀고 있는 인스턴스 */
  const idle = new Map();
  const live = new Set();
  let created = 0;
  let destroyed = 0;

  function build(id) {
    const proto = speciesMap.get(id);
    if (!proto) throw new Error(`알 수 없는 종: ${id}`);

    const group = new THREE.Group();
    const model = cloneSkinned(proto.root);
    group.add(model);

    // 접지 그림자 데칼. 섀도맵만으로는 발밑이 붕 뜬 것처럼 보인다.
    const shadow = new THREE.Mesh(shadowGeo, shadowMat);
    shadow.rotation.x = -Math.PI / 2;
    shadow.position.y = 0.015;
    shadow.scale.set(proto.half.hx * 3.0, proto.half.hz * 4.2, 1);
    group.add(shadow);

    const mixer = new THREE.AnimationMixer(model);
    const actions = new Map();
    for (const [name, clip] of proto.clips) {
      actions.set(name, mixer.clipAction(clip));
    }

    created++;
    return {
      id, proto, group, model, mixer, actions,
      current: null,
      box: { cx: 0, cy: proto.half.hy, cz: 0, ...proto.half },
    };
  }

  /**
   * 개체를 완전히 버린다.
   * 지오메트리·머티리얼은 프로토타입과 공유하므로 절대 dispose 하지 않는다.
   * 개체가 실제로 소유한 것은 복제된 스켈레톤(과 그 본 텍스처)과
   * AnimationMixer 의 액션 캐시뿐이다.
   */
  function destroy(inst) {
    inst.mixer.stopAllAction();
    inst.mixer.uncacheRoot(inst.model);
    inst.model.traverse((o) => {
      if (o.isSkinnedMesh) o.skeleton.dispose();
    });
    inst.actions.clear();
    destroyed++;
  }

  return {
    /** 놀고 있는 개체를 꺼내거나 없으면 새로 만든다. */
    acquire(id) {
      const bucket = idle.get(id);
      const inst = bucket?.length ? bucket.pop() : build(id);
      inst.group.visible = true;
      scene.add(inst.group);
      live.add(inst);
      return inst;
    },

    /**
     * 화면에서 빼고 재사용 대기열에 넣는다. 대기열이 이미 가득 차 있으면
     * 이 개체는 버린다 — 그래야 유휴 개체 수가 무한히 늘지 않는다.
     */
    release(inst) {
      inst.mixer.stopAllAction();
      inst.current = null;
      scene.remove(inst.group);
      inst.group.visible = false;
      live.delete(inst);

      if (!idle.has(inst.id)) idle.set(inst.id, []);
      const bucket = idle.get(inst.id);
      if (bucket.length >= MAX_IDLE_PER_SPECIES) { destroy(inst); return; }
      bucket.push(inst);
    },

    /** 지정한 클립을 재생한다. 이미 같은 클립이면 아무것도 하지 않는다. */
    play(inst, clipName, timeScale = 1) {
      const action = inst.actions.get(clipName);
      if (!action) return null;
      action.timeScale = timeScale;
      if (inst.current === clipName) return action;
      inst.mixer.stopAllAction();
      action.reset().play();
      inst.current = clipName;
      return action;
    },

    /** 살아 있는 개체 목록(충돌 검사용). */
    live,

    stats() {
      let pooled = 0;
      for (const b of idle.values()) pooled += b.length;
      return { created, destroyed, retained: created - destroyed, live: live.size, pooled };
    },

    /** 게임 종료 시 GPU 자원 반납. */
    dispose() {
      for (const inst of [...live]) this.release(inst);
      for (const bucket of idle.values()) {
        for (const inst of bucket) destroy(inst);
        bucket.length = 0;
      }
      shadowGeo.dispose();
      shadowMat.dispose();
      shadowTex.dispose();
    },
  };
}
