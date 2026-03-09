"use client";

import { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";

export default function StarField() {
    const pointsRef = useRef<THREE.Points>(null);

    // Create thousands of stars
    const count = 2000;
    const { positions, sizes } = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const sz = new Float32Array(count);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 600; // X
            pos[i * 3 + 1] = (Math.random() - 0.5) * 600; // Y
            pos[i * 3 + 2] = (Math.random() - 0.5) * 600; // Z
            // Increase base size: 1.0 to 4.0
            sz[i] = 1.0 + Math.random() * 3.0;
        }
        return { positions: pos, sizes: sz };
    }, []);

    // Uniforms
    const uniforms = useMemo(() => ({
        uTime: { value: 0 },
        uSpeed: { value: 0.5 }, // Start slow
        uColor: { value: new THREE.Color("#0de785") } // Comet Green
    }), []);

    // Animate specific 'Warp' properties via ref for performance
    useEffect(() => {
        // Trigger Warp Sequence
        const tl = gsap.timeline({ delay: 1 });

        // 1. Acceleration
        tl.to(uniforms.uSpeed, {
            value: 80.0, // Massive speed up
            duration: 3.0,
            ease: "power2.in"
        });

    }, [uniforms]);

    // Animation Loop
    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        uniforms.uTime.value = time;
    });

    // Custom Shader for the Stars
    const shaderMaterial = useMemo(() => new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: `
      uniform float uTime;
      uniform float uSpeed;
      attribute float size;
      varying float vAlpha;
      varying vec3 vColor;

      void main() {
        vec3 pos = position;
        
        // Endless Tunnel Logic
        // Z moves forward. Modulo wraps it around.
        // Range: -300 to 300
        float forward = uTime * uSpeed; 
        pos.z = mod(position.z + forward, 600.0) - 300.0;
        
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        
        // Size attenuation (bigger when closer)
        // Increased multiplier from 200.0 to 400.0 for better visibility
        gl_PointSize = size * (400.0 / -mvPosition.z);
        
        // Color Shift based on Speed (Redshift/Greenshift)
        float speedRatio = clamp(uSpeed / 80.0, 0.0, 1.0);
        vColor = mix(vec3(1.0), vec3(0.05, 0.9, 0.5), speedRatio);
        
        // Fade in/out at edges of tunnel
        // smoothstep(edge0, edge1, value)
        // Fade out when Z is very close to camera (e.g. > 200) or very far (< -250)
        float alphaClose = smoothstep(200.0, 100.0, pos.z); 
        float alphaFar = smoothstep(-300.0, -200.0, pos.z);
        vAlpha = alphaClose * alphaFar;
      }
    `,
        fragmentShader: `
      varying float vAlpha;
      varying vec3 vColor;
      
      void main() {
        // Round particles
        vec2 coord = gl_PointCoord - vec2(0.5);
        if(length(coord) > 0.5) discard;
        
        // Glowy
        float strength = 1.0 - (length(coord) * 2.0);
        strength = pow(strength, 2.0);
        
        gl_FragColor = vec4(vColor, vAlpha * strength);
      }
    `,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending
    }), [uniforms]);

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                    args={[positions, 3]}
                />
                <bufferAttribute
                    attach="attributes-size"
                    count={sizes.length}
                    array={sizes}
                    itemSize={1}
                    args={[sizes, 1]}
                />
            </bufferGeometry>
            <primitive object={shaderMaterial} attach="material" />
        </points>
    );
}
