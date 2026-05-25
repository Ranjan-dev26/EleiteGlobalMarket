import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Line, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

function GraphLine({ color, points, speed = 1, offset = 0 }) {
  const lineRef = useRef()
  
  const animatedPoints = useMemo(() => {
    return points.map(p => new THREE.Vector3(...p))
  }, [points])

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed + offset
    if (lineRef.current) {
      const positions = lineRef.current.geometry.attributes.position.array
      for (let i = 0; i < positions.length; i += 3) {
        // Fluid wave motion
        const x = positions[i]
        const y = positions[i + 1]
        positions[i + 1] += Math.sin(t + x * 0.5) * 0.005
      }
      lineRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <Line
      ref={lineRef}
      points={animatedPoints}
      color={color}
      lineWidth={1.5}
      transparent
      opacity={0.4}
    />
  )
}

function Terrain() {
  const meshRef = useRef()
  const geomRef = useRef()
  
  const [initialY, vertices] = useMemo(() => {
    const size = 30
    const segments = 50
    const geometry = new THREE.PlaneGeometry(size, size, segments, segments)
    const pos = geometry.attributes.position.array
    const initialY = new Float32Array(pos.length / 3)
    
    for (let i = 0; i < pos.length; i += 3) {
      const x = pos[i]
      const y = pos[i + 1]
      pos[i + 2] = (Math.sin(x * 0.3) * Math.cos(y * 0.3) * 1.5) + (Math.sin(x * 0.8) * 0.3)
      initialY[i/3] = pos[i + 2]
    }
    
    return [initialY, pos]
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * 0.3
    if (meshRef.current) {
      meshRef.current.rotation.z = t * 0.05
    }
    
    if (geomRef.current) {
      const pos = geomRef.current.attributes.position.array
      for (let i = 0; i < pos.length; i += 3) {
        const x = pos[i]
        const y = pos[i + 1]
        // Animate the terrain peaks
        pos[i + 2] = initialY[i/3] + Math.sin(t + x * 0.5) * 0.2 + Math.cos(t + y * 0.5) * 0.2
      }
      geomRef.current.attributes.position.needsUpdate = true
    }
  })

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2.2, 0, 0]} position={[0, -3, -8]}>
      <planeGeometry ref={geomRef} args={[40, 30, 50, 50]} />
      <meshStandardMaterial 
        color="#3B82F6" 
        wireframe 
        transparent 
        opacity={0.08} 
        metalness={1}
        roughness={0}
      />
    </mesh>
  )
}

function FloatingDataPoints() {
  const groupRef = useRef()
  
  const points = useMemo(() => {
    return Array.from({ length: 8 }).map(() => ({
      position: [
        (Math.random() - 0.5) * 20,
        Math.random() * 4,
        (Math.random() - 0.5) * 10
      ],
      speed: 0.5 + Math.random() * 0.5,
      offset: Math.random() * Math.PI * 2
    }))
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        const p = points[i]
        child.position.y = p.position[1] + Math.sin(t * p.speed + p.offset) * 0.5
        child.position.x = p.position[0] + Math.cos(t * p.speed * 0.5 + p.offset) * 0.2
      })
    }
  })

  return (
    <group ref={groupRef}>
      {points.map((p, i) => (
        <Float key={i} speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh position={p.position}>
            <sphereGeometry args={[0.04, 16, 16]} />
            <meshStandardMaterial 
              color="#3B82F6" 
              emissive="#3B82F6"
              emissiveIntensity={2}
            />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

export default function LiveGraphScene() {
  const linePoints1 = useMemo(() => {
    const pts = []
    for (let i = -15; i <= 15; i += 0.2) {
      pts.push([i, Math.sin(i * 0.4) * 2 + Math.cos(i * 0.7) * 0.5, 0])
    }
    return pts
  }, [])

  const linePoints2 = useMemo(() => {
    const pts = []
    for (let i = -15; i <= 15; i += 0.2) {
      pts.push([i, Math.cos(i * 0.3) * 1.5 + Math.sin(i * 0.9) * 0.4, -3])
    }
    return pts
  }, [])

  return (
    <div className="absolute inset-0 z-0 bg-[#050508]">
      <Canvas dpr={[1, 1.5]}>
        <PerspectiveCamera makeDefault position={[0, 3, 12]} fov={40} />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#3B82F6" />
        <pointLight position={[-10, 5, -5]} intensity={0.5} color="#EF4444" />
        
        <group position={[0, -1, 0]}>
          <Terrain />
          <GraphLine color="#3B82F6" points={linePoints1} speed={0.4} />
          <GraphLine color="#EF4444" points={linePoints2} speed={0.6} offset={Math.PI} />
          <FloatingDataPoints />
        </group>

        <fog attach="fog" args={['#050508', 8, 30]} />
      </Canvas>
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#050508_90%)] pointer-events-none" />
    </div>
  )
}

