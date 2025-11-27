"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { canUseWebGL } from "@/utils/webgl";
import { useEffect, useState } from "react";

const CRYSTAL_COLOR = "#03935B"; // emerald green instead of blue

function CrystalShape({ position, scale, rotationSpeed }: { position: [number, number, number]; scale: number; rotationSpeed: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    const g = groupRef.current;
    if (!g) return;
    g.rotation.x += delta * rotationSpeed;
    g.rotation.y += delta * rotationSpeed * 0.7;
    g.rotation.z += delta * rotationSpeed * 0.4;
  });

  // Create an irregular octahedron-like crystal (memoized)
  const geometry = useMemo(() => {
    const geo = new THREE.OctahedronGeometry(1, 0);
    const positions = geo.attributes.position;
    // Use a seeded random or consistent distortion for stability
    const seed = scale; // Use scale as seed for consistent pattern
    let r = seed * 1000;
    const random = () => {
      r = (r * 9301 + 49297) % 233280;
      return r / 233280;
    };
    
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      const z = positions.getZ(i);
      const noise = 0.15;
      positions.setX(i, x + (random() - 0.5) * noise);
      positions.setY(i, y + (random() - 0.5) * noise);
      positions.setZ(i, z + (random() - 0.5) * noise);
    }
    positions.needsUpdate = true;
    geo.computeVertexNormals();
    return geo;
  }, [scale]);

  return (
    <group ref={groupRef} position={position} scale={scale}>
      <mesh geometry={geometry} castShadow receiveShadow>
        <MeshTransmissionMaterial
          samples={8}
          resolution={256}
          thickness={0.6}
          roughness={0.1}
          anisotropy={0.3}
          clearcoat={1}
          clearcoatRoughness={0.12}
          transmission={1}
          ior={1.5}
          chromaticAberration={0.02}
          attenuationColor={CRYSTAL_COLOR}
          attenuationDistance={1.8}
          color={CRYSTAL_COLOR}
        />
      </mesh>
    </group>
  );
}

export default function AboutShapes() {
  const [ready, setReady] = useState<boolean | null>(null);

  useEffect(() => {
    setReady(canUseWebGL());
  }, []);

  if (ready === false) {
    return (
      <>
        <div className="crystal-fallback large" />
        <div className="crystal-fallback small" />
      </>
    );
  }
  if (ready === null) return null;

  return (
    <>
      <Canvas
        className="about-shape-canvas large"
        camera={{ position: [0, 0, 4], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, powerPreference: "high-performance", alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight intensity={2.5} position={[3, 3, 3]} color={new THREE.Color(CRYSTAL_COLOR)} />
        <directionalLight intensity={1.2} position={[-2, -1, 2]} color={new THREE.Color(CRYSTAL_COLOR)} />
        <pointLight intensity={1.5} position={[0, 2, 3]} color={new THREE.Color(CRYSTAL_COLOR)} />
        <CrystalShape position={[0, 0, 0]} scale={1.8} rotationSpeed={0.15} />
      </Canvas>
      <Canvas
        className="about-shape-canvas small"
        camera={{ position: [0, 0, 3], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, powerPreference: "high-performance", alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight intensity={2.5} position={[3, 3, 3]} color={new THREE.Color(CRYSTAL_COLOR)} />
        <directionalLight intensity={1.2} position={[-2, -1, 2]} color={new THREE.Color(CRYSTAL_COLOR)} />
        <CrystalShape position={[0, 0, 0]} scale={1} rotationSpeed={0.2} />
      </Canvas>
    </>
  );
}

