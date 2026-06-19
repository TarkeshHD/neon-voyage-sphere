import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Environment, Stars, useGLTF } from "@react-three/drei";
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
    scene.position.y -= 0.35;
  }, [scene]);

  return <primitive object={scene} />;
}

function Rig() {
  const groupRef = useRef<THREE.Group>(null);
  const { gl } = useThree();
  const isDraggingRef = useRef(false);
  const lastPosRef = useRef({ x: 0, y: 0 });
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const canvas = gl.domElement;

    const handleMove = (e: PointerEvent) => {
      if (!isDraggingRef.current || !groupRef.current) return;
      const rect = canvas.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      const dx = x - lastPosRef.current.x;
      const dy = y - lastPosRef.current.y;
      groupRef.current.rotation.y += dx * 3;
      groupRef.current.rotation.x += dy * 1.5;
      groupRef.current.rotation.x = THREE.MathUtils.clamp(
        groupRef.current.rotation.x,
        -Math.PI / 2.5,
        Math.PI / 2.5
      );
      lastPosRef.current = { x, y };
    };

    const handleUp = () => {
      isDraggingRef.current = false;
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };

    canvas.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp);
    window.addEventListener("pointercancel", handleUp);

    return () => {
      canvas.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
      window.removeEventListener("pointercancel", handleUp);
    };
  }, [gl]);

  const handlePointerDown = (e: any) => {
    isDraggingRef.current = true;
    lastPosRef.current = { x: e.pointer.x, y: e.pointer.y };
    if (idleTimer.current) clearTimeout(idleTimer.current);
  };

  useFrame((_, delta) => {
    if (groupRef.current && !isDraggingRef.current) {
      groupRef.current.rotation.y += delta * 0.25;
    }
  });

  return (
    <group ref={groupRef} onPointerDown={handlePointerDown}>
      <Headset />
    </group>
  );
}

export default function HeadsetModel() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 4.2], fov: 38 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
      style={{ touchAction: "pan-y" }}
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
