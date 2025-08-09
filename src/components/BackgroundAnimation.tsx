import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, AdaptiveDpr } from "@react-three/drei";
import * as THREE from "three";

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.1;
    }
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  const vertexShader = `
    uniform float uTime;
    varying vec2 vUv;
    varying vec3 vPosition;
    
    void main() {
      vUv = uv;
      vPosition = position;
      
      vec3 newPosition = position;
      float noise = sin(position.x * 4.0 + uTime) * sin(position.y * 4.0 + uTime) * 0.1;
      newPosition += normal * noise;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    }
  `;

  const fragmentShader = `
    uniform float uTime;
    varying vec2 vUv;
    varying vec3 vPosition;
    
    void main() {
      vec3 color1 = vec3(0.7, 0.4, 1.0); // Purple
      vec3 color2 = vec3(1.0, 0.3, 0.8); // Pink
      
      float noise = sin(vUv.x * 10.0 + uTime) * sin(vUv.y * 10.0 + uTime);
      vec3 finalColor = mix(color1, color2, noise * 0.5 + 0.5);
      
      gl_FragColor = vec4(finalColor, 0.3);
    }
  `;

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 64, 64]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          uTime: { value: 0 }
        }}
        transparent
        wireframe
      />
    </mesh>
  );
};

const FloatingParticles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  const particlesCount = useMemo(() => {
    if (typeof window !== "undefined" && window.innerWidth < 640) return 60;
    return 120;
  }, []);

  const positions = useMemo(() => {
    const arr = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, [particlesCount]);

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        sizeAttenuation
        color="#B445F5"
        transparent
        opacity={0.6}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[0.75, 2]}
        gl={{ powerPreference: "high-performance", antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <AnimatedSphere />
          <FloatingParticles />
          <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.2} />
          <AdaptiveDpr pixelated />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default BackgroundAnimation;