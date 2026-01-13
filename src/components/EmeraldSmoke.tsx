"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Clouds, Cloud } from "@react-three/drei";
import * as THREE from "three";
import { Group } from "three";

interface EmeraldSmokeProps {
    start: boolean;
}

export default function EmeraldSmoke({ start }: EmeraldSmokeProps) {
    const groupRef = useRef<Group>(null);
    const [opacity, setOpacity] = useState(0);

    // Animation state
    // We use refs for values we want to lerp without re-rendering too much
    const boundsRef = useRef(new THREE.Vector3(1, 4, 1)); // Start narrow and tall (cylinder-ish)

    useFrame((state, delta) => {
        if (!groupRef.current) return;
        const t = state.clock.elapsedTime;

        if (start) {
            // 1. Fade in
            if (opacity < 1) {
                setOpacity((prev) => Math.min(prev + delta * 0.5, 1));
            }

            // 2. Descent & Spread
            // Target Y is much lower now to avoid text (-3.5 is roughly bottom third)
            const targetY = -4.0;
            const currentY = groupRef.current.position.y;

            if (Math.abs(currentY - targetY) > 0.1) {
                // Descending
                groupRef.current.position.y = THREE.MathUtils.lerp(currentY, targetY, delta * 2.0);

                // Spread logic
                const progress = THREE.MathUtils.clamp((6 - currentY) / 10, 0, 1);

                // End shape: Very wide, very flat (to stay at bottom)
                boundsRef.current.x = THREE.MathUtils.lerp(1, 25, Math.pow(progress, 3));
                boundsRef.current.y = THREE.MathUtils.lerp(5, 1.5, Math.pow(progress, 2));
                boundsRef.current.z = THREE.MathUtils.lerp(1, 5, progress);

            } else {
                // Floating/Dancing at bottom
                // Sine wave mix for organic "dance"
                groupRef.current.position.y = targetY + Math.sin(t * 0.8) * 0.15;
                groupRef.current.position.x = Math.sin(t * 0.3) * 0.5;

                // Pulse bounds slightly for "breathing" smoke
                boundsRef.current.y = 1.5 + Math.sin(t * 0.5) * 0.2;
            }

        } else {
            groupRef.current.position.y = 9;
            setOpacity(0);
            boundsRef.current.set(1, 5, 1);
        }

        groupRef.current.rotation.y = t * 0.1;
    });

    return (
        <group ref={groupRef} position={[0, 9, 0]}>
            <Clouds material={THREE.MeshBasicMaterial}>
                <Cloud
                    seed={10}
                    segments={50} // Reduced from 80 for performance
                    bounds={boundsRef.current}
                    volume={15}
                    color="#10b981"
                    opacity={opacity * 0.4}
                    fade={80}
                    speed={0.5}
                    growth={8}
                    concentrate="inside"
                />
                <Cloud
                    seed={45}
                    segments={30} // Reduced from 50 for performance
                    bounds={boundsRef.current}
                    volume={10}
                    color="#022c22"
                    opacity={opacity * 0.5}
                    fade={100}
                    speed={0.4}
                    position={[0, -0.2, 0]}
                    growth={6}
                />
            </Clouds>
            {/* Subtle light to tint the black background near smoke */}
            <pointLight position={[0, -2, 0]} intensity={2 * opacity} color="#10b981" distance={10} decay={2.5} />
        </group>
    );
}
