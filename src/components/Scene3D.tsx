import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, OrbitControls, MeshDistortMaterial, Icosahedron, Torus } from "@react-three/drei";
import * as THREE from "three";

function VRHeadset() {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.4;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
  });

  return (
    <group ref={ref} scale={1.2}>
      {/* Main visor body */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[2.4, 1.1, 0.9]} />
        <meshStandardMaterial color="#1a0b2e" metalness={0.9} roughness={0.15} />
      </mesh>
      {/* Front glossy face */}
      <mesh position={[0, 0, 0.46]}>
        <boxGeometry args={[2.3, 1.0, 0.05]} />
        <meshStandardMaterial
          color="#0a0a2e"
          metalness={1}
          roughness={0.05}
          emissive="#7c3aed"
          emissiveIntensity={0.5}
        />
      </mesh>
      {/* Lenses */}
      <mesh position={[-0.55, 0, 0.5]}>
        <cylinderGeometry args={[0.32, 0.32, 0.04, 32]} />
        <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={1.4} />
      </mesh>
      <mesh position={[0.55, 0, 0.5]}>
        <cylinderGeometry args={[0.32, 0.32, 0.04, 32]} />
        <meshStandardMaterial color="#ff00d4" emissive="#ff00d4" emissiveIntensity={1.4} />
      </mesh>
      {/* Strap arms */}
      <mesh position={[-1.3, 0, -0.1]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.45, 0.06, 16, 32, Math.PI]} />
        <meshStandardMaterial color="#2a1b4e" metalness={0.7} roughness={0.3} />
      </mesh>
      <mesh position={[1.3, 0, -0.1]} rotation={[0, Math.PI, Math.PI / 2]}>
        <torusGeometry args={[0.45, 0.06, 16, 32, Math.PI]} />
        <meshStandardMaterial color="#2a1b4e" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Glow accents */}
      <mesh position={[0, 0.45, 0.49]}>
        <boxGeometry args={[2.0, 0.04, 0.02]} />
        <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={2} />
      </mesh>
    </group>
  );
}

function FloatingShapes() {
  return (
    <>
      <Float speed={2} rotationIntensity={2} floatIntensity={2}>
        <Icosahedron args={[0.4, 0]} position={[-3.5, 1.5, -2]}>
          <MeshDistortMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={0.6} distort={0.4} speed={2} />
        </Icosahedron>
      </Float>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={3}>
        <Torus args={[0.5, 0.15, 16, 50]} position={[3.5, -1, -1]}>
          <meshStandardMaterial color="#ff00d4" emissive="#ff00d4" emissiveIntensity={0.7} metalness={0.8} roughness={0.2} />
        </Torus>
      </Float>
      <Float speed={1.8} rotationIntensity={2} floatIntensity={2}>
        <mesh position={[3, 2, -3]}>
          <octahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={0.6} metalness={0.9} roughness={0.1} />
        </mesh>
      </Float>
      <Float speed={1.2} rotationIntensity={1.5} floatIntensity={1.5}>
        <mesh position={[-3, -1.8, -2.5]}>
          <tetrahedronGeometry args={[0.45, 0]} />
          <meshStandardMaterial color="#7c3aed" emissive="#7c3aed" emissiveIntensity={0.7} metalness={0.9} roughness={0.1} />
        </mesh>
      </Float>
    </>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#a855f7" />
        <pointLight position={[-10, -5, 5]} intensity={1} color="#00f0ff" />
        <pointLight position={[0, -8, -5]} intensity={0.8} color="#ff00d4" />
        <Stars radius={80} depth={50} count={4000} factor={4} saturation={1} fade speed={1} />
        <FloatingShapes />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
      </Suspense>
    </Canvas>
  );
}
