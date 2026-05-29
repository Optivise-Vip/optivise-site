"use client";

import { useMemo, type RefObject } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Effect } from "postprocessing";

/**
 * Hybrid gravitational-lensing approximation.
 * Distorts screen UVs radially around the black hole's projected screen
 * position — light appears to bend inward near the horizon, falling off to
 * zero at the edges of the frame.
 *
 * Uses the documented react-postprocessing custom-effect pattern
 * (useMemo'd Effect instance via <primitive ... dispose={null} />); the
 * wrapEffect() helper triggers a circular-structure crash under React 19.
 */
const fragmentShader = /* glsl */ `
  uniform float uStrength;
  uniform vec2 uCenter;
  uniform float uAspect;

  void mainUv(inout vec2 uv) {
    vec2 d = uv - uCenter;
    d.x *= uAspect;
    float dist = length(d);
    float falloff = smoothstep(0.55, 0.0, dist);
    float amount = uStrength * falloff / (dist + 0.10);
    vec2 dir = dist > 0.0001 ? d / dist : vec2(0.0);
    vec2 offset = dir * amount * 0.03;
    offset.x /= uAspect;
    uv -= offset;
  }
`;

class LensingEffectImpl extends Effect {
  constructor() {
    super("LensingEffect", fragmentShader, {
      uniforms: new Map<string, THREE.Uniform>([
        ["uStrength", new THREE.Uniform(0)],
        ["uCenter", new THREE.Uniform(new THREE.Vector2(0.5, 0.5))],
        ["uAspect", new THREE.Uniform(1)],
      ]),
    });
  }
}

export default function Lensing({
  progressRef,
}: {
  progressRef: RefObject<number>;
}) {
  const { camera, size } = useThree();
  const effect = useMemo(() => new LensingEffectImpl(), []);
  const projected = useMemo(() => new THREE.Vector3(), []);

  useFrame(() => {
    const t = progressRef.current;
    const strength = THREE.MathUtils.lerp(0.15, 1.1, Math.min(t * 1.2, 1));
    effect.uniforms.get("uStrength")!.value = strength;

    projected.set(0, 0, 0).project(camera);
    (effect.uniforms.get("uCenter")!.value as THREE.Vector2).set(
      (projected.x + 1) / 2,
      (projected.y + 1) / 2,
    );
    effect.uniforms.get("uAspect")!.value = size.width / Math.max(1, size.height);
  });

  return <primitive object={effect} dispose={null} />;
}
