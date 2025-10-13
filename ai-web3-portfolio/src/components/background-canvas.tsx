import { Canvas, useFrame } from '@react-three/fiber';
import {
  Points,
  PointMaterial,
  MeshDistortMaterial,
  GradientTexture,
  Float,
} from '@react-three/drei';
import { Suspense, useMemo, useRef } from 'react';
import type { Group, Mesh, ShaderMaterial } from 'three';
import { useDocumentVisibility } from '../hooks/use-document-visibility';

type DistortMaterial = ShaderMaterial & {
  distort: number;
  speed: number;
};

const generateParticlePositions = (count: number, radius: number) => {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i += 1) {
    const phi = Math.acos(2 * Math.random() - 1);
    const theta = Math.random() * Math.PI * 2;
    const r = radius * Math.cbrt(Math.random());
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  return positions;
};

const ParticleField = ({ visible }: { visible: boolean }) => {
  const positions = useMemo(() => generateParticlePositions(2400, 6), []);
  const groupRef = useRef<Group | null>(null);

  useFrame(({ clock }) => {
    if (!visible || !groupRef.current) return;
    const t = clock.getElapsedTime();
    groupRef.current.rotation.y = Math.sin(t * 0.08) * 0.25;
    groupRef.current.rotation.x = Math.cos(t * 0.06) * 0.18;
  });

  return (
    <group ref={groupRef}>
      <Points positions={positions} stride={3}>
        <PointMaterial
          transparent
          color="#28ffbc"
          size={visible ? 0.04 : 0}
          sizeAttenuation
          depthWrite={false}
          opacity={0.55}
        />
      </Points>
    </group>
  );
};

const AuroraCore = ({ visible }: { visible: boolean }) => {
  const meshRef = useRef<Mesh | null>(null);
  const materialRef = useRef<DistortMaterial | null>(null);

  useFrame(({ clock, pointer }) => {
    if (!visible) return;
    const mesh = meshRef.current;
    const material = materialRef.current;
    if (!mesh || !material) return;

    const t = clock.getElapsedTime();
    mesh.rotation.y = t * 0.12 + pointer.x * 0.45;
    mesh.rotation.x = 0.4 + pointer.y * 0.35;
    mesh.position.y = Math.sin(t * 0.6) * 0.15;
    material.distort = 0.38 + Math.sin(t * 0.3) * 0.05;
    material.speed = 1.4 + Math.cos(t * 0.25) * 0.2;
  });

  return (
    <Float floatIntensity={0.4} speed={1.2} rotationIntensity={0.3}>
      <mesh ref={meshRef} scale={6} position={[0, 0, -2]}>
        <icosahedronGeometry args={[0.8, 6]} />
        <MeshDistortMaterial
          ref={materialRef}
          distort={0.4}
          speed={1.2}
          transparent
          opacity={0.88}
        >
          <GradientTexture
            stops={[0, 0.35, 0.7, 1]}
            colors={['#04111b', '#18f5b1', '#19d0ff', '#9f72ff']}
            size={1024}
          />
        </MeshDistortMaterial>
      </mesh>
    </Float>
  );
};

const BackgroundScene = ({ visible }: { visible: boolean }) => (
  <>
    <ambientLight intensity={visible ? 0.45 : 0.2} />
    <directionalLight position={[4, 6, 4]} intensity={0.8} color="#89ffe2" />
    <directionalLight position={[-6, -4, -2]} intensity={0.4} color="#8266ff" />
    <AuroraCore visible={visible} />
    <ParticleField visible={visible} />
    <mesh position={[0, -6, -4]} rotation={[-Math.PI / 2.4, 0, 0]} scale={8}>
      <planeGeometry args={[6, 6, 32, 32]} />
      <meshStandardMaterial
        color="#04111b"
        transparent
        opacity={0.35}
        metalness={0.3}
        roughness={0.8}
      />
    </mesh>
  </>
);

const BackgroundCanvas = () => {
  const isVisible = useDocumentVisibility();

  return (
    <Canvas
      frameloop={isVisible ? 'always' : 'demand'}
      camera={{ position: [0, 0, 6], fov: 55 }}
      gl={{ antialias: true, powerPreference: 'high-performance' }}
      className="pointer-events-none"
    >
      <Suspense fallback={null}>
        <BackgroundScene visible={isVisible} />
      </Suspense>
    </Canvas>
  );
};

export default BackgroundCanvas;
