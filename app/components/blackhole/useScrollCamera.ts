/* eslint-disable react-hooks/immutability --
   Imperatively mutating the Three.js camera (and effect uniforms) inside
   useFrame is the canonical react-three-fiber pattern; the objects are
   long-lived mutable instances, not React state. */
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, type RefObject } from "react";
import * as THREE from "three";
import type { BloomEffect } from "postprocessing";

const easeInOut = (x: number) =>
  x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;

/**
 * Drives the camera from scroll progress (0 -> 1):
 *  - orbits ANTI-CLOCKWISE around the black hole
 *  - dollies inward and drops toward the disk plane
 *  - widens FOV on the plunge for drama
 *  - swells bloom as the horizon fills the frame
 *
 * All values are tunable via the TUNING constants below.
 */
const TUNING = {
  startRadius: 15,
  // Stop short of entering — the camera never reaches "inside" the hole; the
  // fade-to-hero finishes the approach before the close-up would get there.
  endRadius: 1.8,
  startHeight: 4.6,
  endHeight: 0.22,
  startAngle: 0.5,
  // Positive sweep subtracted from angle -> anti-clockwise on screen.
  sweep: Math.PI * 1.4,
  startFov: 55,
  endFov: 82,
  bloomStart: 0.9,
  bloomEnd: 2.4,
  damp: 5,
};

export function Rig({
  progressRef,
  bloomRef,
}: {
  progressRef: RefObject<number>;
  bloomRef?: RefObject<BloomEffect | null>;
}) {
  const { camera } = useThree();
  const smoothed = useRef(0);

  useFrame((_, delta) => {
    smoothed.current = THREE.MathUtils.damp(
      smoothed.current,
      progressRef.current,
      TUNING.damp,
      Math.min(delta, 0.05),
    );
    const t = smoothed.current;
    const e = easeInOut(t);

    const radius = THREE.MathUtils.lerp(TUNING.startRadius, TUNING.endRadius, e);
    const height = THREE.MathUtils.lerp(TUNING.startHeight, TUNING.endHeight, e);
    const angle = TUNING.startAngle - e * TUNING.sweep;

    camera.position.set(
      Math.sin(angle) * radius,
      height,
      Math.cos(angle) * radius,
    );
    // Aim slightly above centre so the camera is tilted gently upward.
    camera.lookAt(0, THREE.MathUtils.lerp(0.15, 0.3, e), 0);

    const cam = camera as THREE.PerspectiveCamera;
    cam.fov = THREE.MathUtils.lerp(TUNING.startFov, TUNING.endFov, e * e);
    cam.updateProjectionMatrix();

    if (bloomRef?.current) {
      bloomRef.current.intensity = THREE.MathUtils.lerp(
        TUNING.bloomStart,
        TUNING.bloomEnd,
        e,
      );
    }
  });

  return null;
}
