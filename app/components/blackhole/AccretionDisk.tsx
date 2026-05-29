"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = /* glsl */ `
  varying vec2 vPlane;
  void main() {
    // RingGeometry lies in the XY plane; xy are the planar coords.
    vPlane = position.xy;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;
  varying vec2 vPlane;
  uniform float uTime;
  uniform float uInner;
  uniform float uOuter;
  uniform vec3 uDeep;
  uniform vec3 uBright;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }
  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p *= 2.0;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    float r = length(vPlane);
    float rn = (r - uInner) / (uOuter - uInner);
    if (rn < 0.0 || rn > 1.0) discard;

    float angle = atan(vPlane.y, vPlane.x);

    // Spiral turbulence, dragged around faster near the inner edge.
    float swirl = angle * 3.0 - uTime * 1.2 + rn * 6.0;
    float turb = fbm(vec2(swirl, rn * 4.0 - uTime * 0.4));

    // Hot inner edge + a bright photon-ring-like band.
    float radial = pow(1.0 - rn, 1.8);
    float innerBand = smoothstep(0.12, 0.0, rn);
    float bright = radial * 0.9 + innerBand * 1.4;
    bright *= 0.55 + 0.9 * turb;

    // Relativistic doppler: one side noticeably brighter.
    float doppler = 0.55 + 0.65 * pow(max(0.0, cos(angle - 1.2)), 1.5);
    bright *= doppler;

    vec3 col = mix(uDeep, uBright, clamp(radial * 1.3, 0.0, 1.0));
    col = mix(col, vec3(1.0), smoothstep(0.65, 1.0, bright) * 0.7);

    float alpha = clamp(bright, 0.0, 1.0);
    // Soft inner/outer falloff.
    alpha *= smoothstep(0.0, 0.06, rn) * smoothstep(1.0, 0.85, rn);

    gl_FragColor = vec4(col * bright, alpha);
  }
`;

export default function AccretionDisk() {
  const matRef = useRef<THREE.ShaderMaterial>(null);
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uInner: { value: 1.25 },
      uOuter: { value: 6.0 },
      uDeep: { value: new THREE.Color("#c2410c") },
      uBright: { value: new THREE.Color("#ffb24d") },
    }),
    [],
  );

  useFrame((_, delta) => {
    if (matRef.current) {
      matRef.current.uniforms.uTime.value += delta;
    }
  });

  return (
    <mesh rotation={[-Math.PI / 2 + 0.18, 0, 0]}>
      <ringGeometry args={[1.25, 6.0, 256, 1]} />
      <shaderMaterial
        ref={matRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        side={THREE.DoubleSide}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}
