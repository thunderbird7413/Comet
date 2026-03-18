"use client";

import { useMemo } from "react";
import * as THREE from "three";

export default function HeroStarField() {
    // Static star field for low GPU/CPU cost.
    const count = 1800;
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 1200;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 1200;
            // Keep stars in front of camera so they remain visible without animation.
            pos[i * 3 + 2] = -20 - Math.random() * 1180;
        }
        return pos;
    }, []);

    return (
        <points>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                color={new THREE.Color("#9ed6ff")}
                size={2.2}
                sizeAttenuation
                transparent
                opacity={0.85}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}
