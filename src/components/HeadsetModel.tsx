import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import headsetAsset from "@/assets/META_Q3.glb.asset.json";

useGLTF.preload(headsetAsset.url);

function Headset() {
  const { scene } = useGLTF(headsetAsset.url) as any;
  const ref = useRef<THREE.Group>(null);

  useEffect(() => {
    scene.traverse((obj: any) => {
      if (obj.isMesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
        if (obj.material) {
          obj.material.envMapIntensity = 1.1;
        }
      }
    });
  }, [scene]);

  // Fit and center
  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3()).length();
    const center = box.getCenter(new THREE.Vector3());
    scene.position.x += -center.x;
    scene.position.y += -center.y;
    scene.position.z += -center.z;
    const scale = 2.6 / size;
    scene.scale.setScalar(scale);
  }, [scene]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.08;
  });

  return (
    <group ref={ref}>
      <primitive object={scene} />
    </group>
  );
}

function AutoRotateControls() {
  const controlsRef = useRef<any>(null);
  const [interacting, setInteracting] = useState(false);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useFrame(() => {
    if (controlsRef.current) controlsRef.current.update();
  });

  return (
    <OrbitControls
      ref={controlsRef}
      enableZoom={false}
      enablePan={false}
      autoRotate={!interacting}
      autoRotateSpeed={0.8}
      enableDamping
      dampingFactor={0.08}
      minPolarAngle={Math.PI / 3}
      maxPolarAngle={Math.PI / 1.7}
      onStart={() => {
        setInteracting(true);
        if (idleTimer.current) clearTimeout(idleTimer.current);
      }}
      onEnd={() => {
        if (idleTimer.current) clearTimeout(idleTimer.current);
        idleTimer.current = setTimeout(() => setInteracting(false), 2500);
      }}
    />
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
        <ambientLight intensity={0.35} />
        {/* Neon purple rim */}
        <spotLight
          position={[-4, 2, 3]}
          angle={0.6}
          penumbra={1}
          intensity={40}
          color="#a855f7"
          castShadow
        />
        {/* Electric blue rim */}
        <spotLight
          position={[4, 1.5, 2]}
          angle={0.6}
          penumbra={1}
          intensity={35}
          color="#22d3ee"
        />
        {/* Back accent */}
        <pointLight position={[0, -2, -3]} intensity={6} color="#ff00d4" />
        <directionalLight position={[0, 3, 2]} intensity={0.4} />

        <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
          <Headset />
        </Float>

        <Environment preset="city" />
        <AutoRotateControls />
      </Suspense>
    </Canvas>
  );
}
