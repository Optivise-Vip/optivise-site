"use client";

import { useRef, type RefObject } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import type { BloomEffect } from "postprocessing";
import AccretionDisk from "./AccretionDisk";
import { Rig } from "./useScrollCamera";

export type SceneQuality = "high" | "low";

export default function Scene({
  progressRef,
  quality = "high",
}: {
  progressRef: RefObject<number>;
  quality?: SceneQuality;
}) {
  const bloomRef = useRef<BloomEffect>(null);

  return (
    <Canvas
      gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
      dpr={quality === "low" ? 1 : [1, 1.75]}
      camera={{ position: [0, 4.6, 15], fov: 55, near: 0.1, far: 120 }}
    >
      <color attach="background" args={["#060608"]} />

      <Rig progressRef={progressRef} bloomRef={bloomRef} />

      <Stars
        radius={80}
        depth={45}
        count={quality === "low" ? 1500 : 4000}
        factor={3}
        saturation={0}
        fade
        speed={0.4}
      />

      {/* Event horizon — a pure-black silhouette the disk wraps around. */}
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial color="#000000" toneMapped={false} />
      </mesh>

      <AccretionDisk />

      <EffectComposer>
        <Bloom
          ref={bloomRef}
          mipmapBlur
          intensity={1.1}
          luminanceThreshold={0.15}
          luminanceSmoothing={0.3}
        />
      </EffectComposer>
    </Canvas>
  );
}
