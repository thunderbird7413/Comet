"use client";

import { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function HeroStarField() {
    const pointsRef = useRef<THREE.Points>(null);

    // Create stars
    const count = 4000;
    const { positions, sizes, speeds } = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const sz = new Float32Array(count);
        const sp = new Float32Array(count);
        for (let i = 0; i < count; i++) {
            // Wider spread for hero background
            pos[i * 3] = (Math.random() - 0.5) * 1200;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 1200;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 1200;
            // Bigger stars for Hero: 1.5 to 6.0
            sz[i] = 1.5 + Math.random() * 4.5;
            // Varied speeds
            sp[i] = 0.5 + Math.random() * 1.5;
        }
        return { positions: pos, sizes: sz, speeds: sp };
    }, []);

    const uniforms = useMemo(() => ({
        uTime: { value: 0 },
        uColor: { value: new THREE.Color("#0de785") }
    }), []);

    // Mouse interaction
    const mouse = useRef({ x: 0, y: 0 });
    const targetMouse = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Normalize coordinates -1 to 1
            targetMouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
            targetMouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        uniforms.uTime.value = time;

        // Smooth mouse dampening
        mouse.current.x += (targetMouse.current.x - mouse.current.x) * 0.05;
        mouse.current.y += (targetMouse.current.y - mouse.current.y) * 0.05;

        // Gentle Rotation based on mouse + time
        if (pointsRef.current) {
            // Continuous slow rotation
            pointsRef.current.rotation.y = time * 0.02;
            pointsRef.current.rotation.z = time * 0.01;

            // Mouse influence (Parallax feel)
            const targetRotationX = mouse.current.y * 0.2;
            const targetRotationY = mouse.current.x * 0.2;

            pointsRef.current.rotation.x += (targetRotationX - pointsRef.current.rotation.x) * 0.05;
            pointsRef.current.rotation.y += (targetRotationY - pointsRef.current.rotation.y) * 0.05;
        }
    });

    const shaderMaterial = useMemo(() => new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: `
      uniform float uTime;
      attribute float size;
      varying float vAlpha;
      varying vec3 vColor;

      void main() {
        vec3 pos = position;
        
        // Complex drift logic
        float t = uTime * 0.5;
        
        // Z moves forward to create depth
        // Wrap around logic
        float z = mod(position.z + t * 50.0, 1200.0) - 600.0;
        pos.z = z;
        
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        
        // Standard attenuation
        gl_PointSize = size * (400.0 / -mvPosition.z);
        
        // Color variation based on depth and position
        vec3 color1 = vec3(0.05, 0.9, 0.5); // Emerald
        vec3 color2 = vec3(0.4, 0.6, 1.0); // Blueish
        
        float mixVal = smoothstep(-600.0, 600.0, pos.x);
        vColor = mix(color1, color2, 0.5 + 0.5 * sin(t + pos.y * 0.01));
        
        // Fade at edges
        float alphaClose = smoothstep(500.0, 400.0, pos.z); 
        float alphaFar = smoothstep(-600.0, -500.0, pos.z);
        vAlpha = alphaClose * alphaFar * (0.6 + 0.4 * sin(t * 2.0 + pos.x)); // Twinkle
      }
    `,
        fragmentShader: `
      varying float vAlpha;
      varying vec3 vColor;
      
      void main() {
        vec2 coord = gl_PointCoord - vec2(0.5);
        if(length(coord) > 0.5) discard;
        
        float strength = 1.0 - (length(coord) * 2.0);
        strength = pow(strength, 3.0); // Sharper points
        
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
