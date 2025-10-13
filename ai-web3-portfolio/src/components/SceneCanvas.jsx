import { Canvas, useFrame } from '@react-three/fiber';
import {
  Float,
  Line,
  OrbitControls,
  PointMaterial,
  Points,
  Sparkles,
  Text,
} from '@react-three/drei';
import { Suspense, useMemo, useRef } from 'react';
import * as THREE from 'three';

const generatePointCloud = (count, radius) => {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i += 1) {
    const phi = Math.acos(1 - 2 * (i + Math.random()) / count);
    const theta = Math.PI * (1 + Math.sqrt(5)) * i;
    const x = radius * Math.cos(theta) * Math.sin(phi);
    const y = radius * Math.sin(theta) * Math.sin(phi);
    const z = radius * Math.cos(phi);
    positions.set([x, y, z], i * 3);
  }
  return positions;
};

const NeuralField = () => {
  const ref = useRef();
  const points = useMemo(() => generatePointCloud(2200, 2.8), []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.x = Math.sin(t / 6) * 0.25;
      ref.current.rotation.y = Math.cos(t / 4) * 0.35;
    }
  });

  return (
    <group ref={ref}>
      <Points positions={points} stride={3}>
        <PointMaterial
          transparent
          color="#4bffb3"
          size={0.06}
          sizeAttenuation
          depthWrite={false}
          opacity={0.85}
        />
      </Points>
    </group>
  );
};

const NeuralLinks = () => {
  const groupRef = useRef();

  const links = useMemo(() => {
    const curves = [];
    const nodes = Array.from({ length: 26 }, () => new THREE.Vector3(
      THREE.MathUtils.randFloatSpread(2.4),
      THREE.MathUtils.randFloatSpread(2.4),
      THREE.MathUtils.randFloatSpread(2.4),
    ));

    for (let i = 0; i < nodes.length; i += 1) {
      const start = nodes[i];
      const target = nodes[(i + 7) % nodes.length];
      const midPoint = start.clone().lerp(target, 0.5).add(new THREE.Vector3(
        THREE.MathUtils.randFloatSpread(0.8),
        THREE.MathUtils.randFloatSpread(0.8),
        THREE.MathUtils.randFloatSpread(0.8),
      ));

      const curve = new THREE.CatmullRomCurve3([start, midPoint, target]);
      curves.push(curve.getPoints(42));
    }
    return curves;
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.1;
      groupRef.current.rotation.z = Math.sin(t * 0.25) * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      {links.map((points, idx) => (
        <Line
          key={`link-${idx}`}
          points={points}
          color="#00ffa9"
          lineWidth={1}
          transparent
          opacity={0.35}
        />
      ))}
    </group>
  );
};

const BetaGlyph = () => {
  const glyphRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (glyphRef.current) {
      glyphRef.current.rotation.y = Math.sin(t * 0.6) * 0.4 + 0.35;
      glyphRef.current.rotation.x = Math.cos(t * 0.45) * 0.2 + 0.2;
      glyphRef.current.position.y = Math.sin(t * 0.8) * 0.18;
    }
  });

  return (
    <Float speed={1.3} rotationIntensity={0.4} floatIntensity={0.6}>
      <group ref={glyphRef}>
        <Text
          font="/fonts/ChakraPetch-Bold.ttf"
          position={[0, 0, 0]}
          fontSize={1.8}
          letterSpacing={0.02}
          depth={0.35}
          bevelEnabled
          bevelSize={0.05}
          bevelThickness={0.04}
        >
          β
          <meshStandardMaterial
            color="#35ffb3"
            metalness={0.5}
            roughness={0.2}
            emissive="#00ffa9"
            emissiveIntensity={0.35}
          />
        </Text>
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -1.6, 0]}>
          <ringGeometry args={[1.5, 1.68, 64]} />
          <meshBasicMaterial color="#00ffa9" transparent opacity={0.16} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -1.6, 0]}>
          <ringGeometry args={[1.1, 1.12, 64]} />
          <meshBasicMaterial color="#00f6ff" transparent opacity={0.32} />
        </mesh>
        <Sparkles
          count={120}
          speed={0.7}
          opacity={0.7}
          size={1.8}
          scale={[3.2, 3.2, 3.2]}
          color="#3cffcf"
        />
      </group>
    </Float>
  );
};

const OuterRings = () => (
  <group>
    {[3.8, 4.2, 4.8].map((radius, idx) => (
      <Float
        key={`ring-${idx}`}
        speed={1 + idx * 0.2}
        rotationIntensity={0.2}
        floatIntensity={0.5}
      >
        <mesh rotation={[Math.PI / 4, Math.PI / 2.5, 0]}>
          <torusGeometry args={[radius, 0.015, 16, 220]} />
          <meshBasicMaterial
            color={idx === 1 ? '#00ffa9' : '#015f4b'}
            transparent
            opacity={idx === 1 ? 0.75 : 0.3}
          />
        </mesh>
      </Float>
    ))}
  </group>
);

export const SceneCanvas = () => (
  <Canvas
    camera={{ position: [0, 0, 7], fov: 50 }}
    dpr={[1, 1.5]}
    className="neural-canvas"
  >
    <color attach="background" args={['#020805']} />
    <fog attach="fog" args={['#020805', 10, 25]} />
    <Suspense fallback={null}>
      <group rotation={[Math.PI / 5, 0, 0]}>
        <NeuralField />
        <NeuralLinks />
        <BetaGlyph />
        <OuterRings />
      </group>
    </Suspense>
    <ambientLight intensity={0.5} />
    <directionalLight position={[5, 5, 5]} intensity={0.85} color="#5affc4" />
    <directionalLight position={[-5, -4, -5]} intensity={0.35} color="#00f5ff" />
    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.6} />
  </Canvas>
);
