"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, MeshTransmissionMaterial } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { canUseWebGL } from "@/utils/webgl";

const ACCENT = "#03935B"; // requested color

function RibbonSphere() {
  const groupRef = useRef<THREE.Group>(null);

  // Build a spiral curve hugging a sphere surface
  const curve = new THREE.CatmullRomCurve3(
    Array.from({ length: 220 }, (_, i) => {
      const t = i / 219; // 0..1
      const theta = t * Math.PI * 3.2 - Math.PI * 1.6; // ~1.6 turns
      const y = THREE.MathUtils.lerp(0.85, -0.85, t);
      const r = Math.sqrt(Math.max(0.0001, 1 - y * y)); // radius on unit sphere at this y
      // tilt the spiral by rotating around Z to get an S-like wrap
      const x = r * Math.cos(theta);
      const z = r * Math.sin(theta);
      const v = new THREE.Vector3(x, y, z);
      // slightly push outwards so the ribbon floats above the sphere
      return v.multiplyScalar(1.05);
    }),
    false,
    "catmullrom",
    0.02
  );

  useFrame((_state, delta) => {
    const g = groupRef.current;
    if (!g) return;
    // subtle rotation and breathing scale
    const t = performance.now() * 0.0012;
    g.rotation.y += delta * 0.18;
    g.rotation.x = Math.sin(t * 0.35) * 0.08;
    const s = 1 + Math.sin(t * 1.2) * 0.04; // expand effect
    g.scale.setScalar(s);
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={1.3}>
      {/* Core glossy sphere */}
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[1.05, 256, 256]} />
        <MeshTransmissionMaterial
          samples={8}
          resolution={256}
          thickness={0.8}
          roughness={0.1}
          anisotropy={0.25}
          clearcoat={1}
          clearcoatRoughness={0.14}
          transmission={1}
          ior={1.45}
          chromaticAberration={0.01}
          attenuationColor={ACCENT}
          attenuationDistance={2.2}
          color={ACCENT}
        />
      </mesh>

      {/* Swirling ribbon around the sphere */}
      <mesh castShadow>
        <tubeGeometry args={[curve, 600, 0.16, 24, false]} />
        <MeshTransmissionMaterial
          samples={8}
          resolution={256}
          thickness={0.7}
          roughness={0.08}
          anisotropy={0.3}
          transmission={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          ior={1.45}
          chromaticAberration={0.012}
          attenuationColor={ACCENT}
          attenuationDistance={2.0}
          color={ACCENT}
        />
      </mesh>
    </group>
  );
}

export default function Scene() {
  const [ready, setReady] = useState<boolean | null>(null);

  useEffect(() => {
    setReady(canUseWebGL());
  }, []);

  if (ready === false) {
    return <div className="shape-fallback" />;
  }
  if (ready === null) return null; // avoid hydration mismatch until client check runs

  return (
    <Canvas
      className="scene-canvas"
      camera={{ position: [0, 0.3, 3.2], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, powerPreference: "high-performance", alpha: true, stencil: false, depth: true }}
      shadows
    >
      <ambientLight intensity={0.35} />
      <directionalLight
        intensity={2.1}
        position={[2.5, 2.5, 1.5]}
        castShadow
        color={new THREE.Color(ACCENT)}
      />
      <Environment preset="studio" />
      <RibbonSphere />
    </Canvas>
  );
}


