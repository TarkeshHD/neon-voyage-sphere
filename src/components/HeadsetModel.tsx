import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls, Stars, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import headsetAsset from "@/assets/META_Q3.glb.asset.json";

useGLTF.preload(headsetAsset.url);

function Headset() {
  const { scene } = useGLTF(headsetAsset.url) as any;

  useEffect(() => {
    scene.traverse((obj: any) => {
      if (obj.isMesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
        if (obj.material) {
          obj.material.envMapIntensity = 1.4;
          if ("roughness" in obj.material) {
            obj.material.roughness = Math.min(obj.material.roughness ?? 0.5, 0.45);
          }
          if ("metalness" in obj.material) {
            obj.material.metalness = Math.max(obj.material.metalness ?? 0.2, 0.35);
          }
          obj.material.needsUpdate = true;
        }
      }
    });
  }, [scene]);

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3()).length();
    const center = box.getCenter(new THREE.Vector3());
    scene.position.x += -center.x;
    scene.position.y += -center.y;
    scene.position.z += -center.z;
    const scale = 3.1 / size;
    scene.scale.setScalar(scale);
    scene.position.y += 0.15;
  }, [scene]);

  return <primitive object={scene} />;
}

function Rig() {
  const groupRef = useRef<THREE.Group>(null);
  const controlsRef = useRef<any>(null);
  const [interacting, setInteracting] = useState(false);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useFrame((_, delta) => {
    if (controlsRef.current) controlsRef.current.update();
    // Slow idle auto-rotation applied to group (not controls) so user mouse
    // movement never affects it.
    if (groupRef.current && !interacting) {
      groupRef.current.rotation.y += delta * 0.25;
    }
  });

  return (
    <>
      <group ref={groupRef}>
        <Headset />
      </group>
      <OrbitControls
        ref={controlsRef}
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.08}
        rotateSpeed={0.9}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.7}
        onStart={() => {
          setInteracting(true);
          if (idleTimer.current) clearTimeout(idleTimer.current);
        }}
        onEnd={() => {
          if (idleTimer.current) clearTimeout(idleTimer.current);
          idleTimer.current = setTimeout(() => setInteracting(false), 3000);
        }}
      />
    </>
  );
}

export default function HeadsetModel() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0.2, 4.2], fov: 38 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.25} />

        {/* Key light */}
        <directionalLight position={[2, 4, 3]} intensity={0.6} color="#ffffff" castShadow />

        {/* Neon purple rim - left back */}
        <spotLight
          position={[-5, 2, -2]}
          angle={0.7}
          penumbra={1}
          intensity={60}
          distance={20}
          color="#a855f7"
        />
        {/* Electric blue rim - right back */}
        <spotLight
          position={[5, 1.5, -2]}
          angle={0.7}
          penumbra={1}
          intensity={55}
          distance={20}
          color="#22d3ee"
        />
        {/* Soft front fill */}
        <pointLight position={[0, 0, 5]} intensity={8} color="#b9c8ff" distance={12} />
        {/* Magenta underglow */}
        <pointLight position={[0, -2.5, 0]} intensity={6} color="#ff3df0" distance={10} />

        <Stars radius={80} depth={50} count={2500} factor={4} saturation={1} fade speed={1} />

        <Rig />

        <ContactShadows
          position={[0, -1.3, 0]}
          opacity={0.55}
          scale={8}
          blur={2.6}
          far={3}
          color="#7c3aed"
        />

        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
