"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, Torus } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AuroraCore() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Mouse position (-1 to +1)
    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;

    // Smooth mouse-follow rotation
    const targetRotationY = mouseX * 0.45;
    const targetRotationX = -mouseY * 0.3;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetRotationY,
      delta * 3,
    );

    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetRotationX,
      delta * 3,
    );

    // Small continuous rotation
    groupRef.current.rotation.z += delta * 0.08;
  });

  return (
    <Float speed={1.8} rotationIntensity={0.25} floatIntensity={1.2}>
      <group ref={groupRef}>
        {/* Main Violet Core */}
        <Sphere args={[1.35, 64, 64]}>
          <meshStandardMaterial
            color="#7c5cff"
            metalness={1}
            roughness={0.16}
            emissive="#4c2fb3"
            emissiveIntensity={0.45}
          />
        </Sphere>

        {/* Cyan Wireframe */}
        <Sphere args={[1.48, 32, 32]}>
          <meshBasicMaterial
            color="#38d9ff"
            wireframe
            transparent
            opacity={0.2}
          />
        </Sphere>

        {/* Violet Ring */}
        <Torus args={[1.8, 0.018, 16, 100]} rotation={[Math.PI / 2.5, 0.2, 0]}>
          <meshStandardMaterial
            color="#7c5cff"
            metalness={1}
            roughness={0.2}
            emissive="#7c5cff"
            emissiveIntensity={0.7}
          />
        </Torus>

        {/* Cyan Ring */}
        <Torus
          args={[2.05, 0.012, 16, 100]}
          rotation={[Math.PI / 3, -0.4, 0.3]}
        >
          <meshStandardMaterial
            color="#38d9ff"
            metalness={1}
            roughness={0.2}
            emissive="#38d9ff"
            emissiveIntensity={0.6}
          />
        </Torus>

        {/* Outer Aurora Ring */}
        <Torus args={[2.3, 0.008, 16, 100]} rotation={[0.8, 0.5, 0.8]}>
          <meshStandardMaterial
            color="#a78bfa"
            metalness={1}
            roughness={0.25}
            emissive="#7c5cff"
            emissiveIntensity={0.4}
          />
        </Torus>
      </group>
    </Float>
  );
}

function Scene() {
  return (
    <>
      {/* Ambient Light */}
      <ambientLight intensity={0.4} />

      {/* Main White Light */}
      <directionalLight position={[4, 5, 4]} intensity={3.5} color="#ffffff" />

      {/* Violet Glow */}
      <pointLight position={[-4, -2, 3]} intensity={25} color="#7c5cff" />

      {/* Cyan Glow */}
      <pointLight position={[4, 1, -2]} intensity={18} color="#38d9ff" />

      <AuroraCore />
    </>
  );
}

export default function ThreeHero() {
  return (
    <div className="h-[500px] w-full">
      <Canvas
        camera={{
          position: [0, 0, 5.5],
          fov: 45,
        }}
        dpr={[1, 2]}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
