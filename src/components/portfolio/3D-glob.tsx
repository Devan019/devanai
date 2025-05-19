import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

// Technology data with geographic coordinates
const TECH_DATA: { name: string; icon: string; origin: string; position: [number, number, number]; color: string }[] = [
  { name: "React", icon: "⚛️", origin: "USA", position: [0.5, 0.4, 0.8], color: "#61DAFB" },
  { name: "Python", icon: "🐍", origin: "Netherlands", position: [0.2, 0.6, -0.8], color: "#3776AB" },
  { name: "JavaScript", icon: "🌐", origin: "USA", position: [0.7, 0.3, 0.7], color: "#F7DF1E" },
  { name: "Node.js", icon: "🟢", origin: "USA", position: [0.6, 0.5, 0.6], color: "#339933" },
  { name: "TypeScript", icon: "📘", origin: "USA", position: [0.65, 0.4, 0.65], color: "#3178C6" },
  { name: "Next.js", icon: "⏭️", origin: "USA", position: [0.55, 0.35, 0.75], color: "#000000" },
  { name: "Three.js", icon: "🔺", origin: "USA", position: [-0.8, 0.4, 0.4], color: "#049EF4" },
  { name: "Spring Boot", icon: "🌱", origin: "USA", position: [0.6, 0.45, 0.65], color: "#6DB33F" },
  { name: "Django", icon: "🎸", origin: "USA", position: [-0.6, 0.6, 0.5], color: "#092E20" },
  { name: "Java", icon: "☕", origin: "USA", position: [0.5, 0.5, 0.7], color: "#007396" },
  { name: "C", icon: "🔵", origin: "USA", position: [0.4, 0.55, -0.7], color: "#A8B9CC" },
  { name: "C++", icon: "➕", origin: "USA", position: [0.3, 0.5, -0.6], color: "#00599C" },
  { name: "GSAP", icon: "🎞️", origin: "USA", position: [-0.5, 0.45, 0.6], color: "#88CE02" },
  { name: "Framer Motion", icon: "🔄", origin: "Sweden", position: [-0.7, 0.35, 0.5], color: "#0055FF" }
];


const Earth = ({ scrollData = { offset: 0 } }) => {
  const earthRef = useRef<THREE.Group | null>(null);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  // Memoize the sun position calculation
  const sunPosition: [number, number, number] = React.useMemo(() => {
    const date = new Date();
    const hours = date.getUTCHours() + date.getUTCMinutes() / 60;
    const sunAngle = (hours / 24) * Math.PI * 2;
    return [Math.cos(sunAngle), 0, Math.sin(sunAngle)];
  }, []);

  // Load textures once
  const [earthTexture, nightTexture, cloudMap] = React.useMemo(() => [
    new THREE.TextureLoader().load('/textures/earth_daymap.jpg'),
    new THREE.TextureLoader().load('/textures/earth_nightmap.jpg'),
    new THREE.TextureLoader().load('/textures/earth_clouds.jpg')
  ], []);

  useFrame((state, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.01;
      if (scrollData?.offset !== undefined) {
        earthRef.current.position.z = -scrollData.offset * 2;
        earthRef.current.rotation.x = scrollData.offset * Math.PI * 0.2;
      }
    }
  });

  return (
    <group ref={earthRef} position={[0, 0.3, 0]}>
      <directionalLight position={sunPosition} intensity={1.5} color="#fdfbd3" />
      <ambientLight intensity={0.1} />

      <mesh castShadow receiveShadow>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          map={earthTexture}
          emissiveMap={nightTexture}
          emissiveIntensity={0.5}
          emissive={0x111111}
          metalness={0.1}
          roughness={0.8}
        />
      </mesh>

      <mesh>
        <sphereGeometry args={[1.01, 64, 64]} />
        <meshStandardMaterial transparent opacity={0.2} color="#afd5f7" />
      </mesh>

      <mesh>
        <sphereGeometry args={[1.02, 64, 64]} />
        <meshStandardMaterial
          map={cloudMap}
          transparent
          opacity={0.3}
          depthWrite={false}
        />
      </mesh>

      <group>
        {TECH_DATA.map((tech) => (
          <TechMarker
            key={tech.name}
            tech={tech}
            isHovered={hoveredTech === tech.name}
            setHoveredTech={setHoveredTech}
          />
        ))}
      </group>
    </group>
  );
};

type TechMarkerProps = {
  tech: { name: string; icon: string; origin: string; position: [number, number, number]; color: string };
  isHovered: boolean;
  setHoveredTech: React.Dispatch<React.SetStateAction<string | null>>;
};

const TechMarker: React.FC<TechMarkerProps> = React.memo(({ tech, isHovered, setHoveredTech }) => {
  const groupRef = useRef<THREE.Group | null>(null);
  const pulseSpeed = 3;
  const pulseIntensity = 0.1;

  useFrame((state) => {
    if (groupRef.current) {
      const pulse = Math.sin(state.clock.getElapsedTime() * pulseSpeed) * pulseIntensity;
      groupRef.current.scale.setScalar(1 + pulse);
    }
  });

  const handleHover = () => setHoveredTech(tech.name);
  const handleLeave = () => setHoveredTech(null);

  return (
    <group 
      ref={groupRef} 
      position={tech.position}
      onPointerEnter={handleHover}
      onPointerLeave={handleLeave}
    >
      <mesh>
        <coneGeometry args={[0.03, 0.1, 16]} />
        <meshStandardMaterial 
          color={tech.color} 
          emissive={tech.color} 
          emissiveIntensity={isHovered ? 0.8 : 0.3}
        />
      </mesh>
      <mesh position={[0, 0.05, 0]}>
        <sphereGeometry args={[0.02, 16, 16]} />
        <meshStandardMaterial color={tech.color} />
      </mesh>

      <Html distanceFactor={15} position={[0, 0.15, 0]}>
        <div 
          className={`transform -translate-x-1/2 px-2 py-1 rounded-md
            dark:bg-black dark:text-white bg-white text-gray-900
           transition-all duration-200`}
          style={{ 
            opacity: isHovered ? 1 : 0.6,
            transform: isHovered ? 'scale(1.5)' : 'scale(0.3)',
            boxShadow: `0 0 8px ${tech.color}`,
            fontSize: '0.65rem',
            lineHeight: '1rem',
            minWidth: '4rem'
          }}
        >
          <div className="flex items-center justify-center space-x-1">
            <span>{tech.icon}</span>
            <span className="font-semibold">{tech.name}</span>
          </div>
        </div>
      </Html>
    </group>
  );
});

export default Earth;