import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Float, PerspectiveCamera, Stars } from '@react-three/drei'
import * as THREE from 'three'
import { useScroll } from 'framer-motion'

function TunnelParticles({ count = 2000 }) {
  const pointsRef = useRef()
  const { scrollYProgress } = useScroll()

  const particles = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const color = new Float32Array(count * 3)
    const blue = new THREE.Color('#3B82F6')
    const red = new THREE.Color('#EF4444')
    
    for (let i = 0; i < count; i++) {
      // Create a tunnel distribution
      const theta = Math.random() * Math.PI * 2
      const radius = 2 + Math.random() * 8
      const z = (Math.random() - 0.5) * 40
      
      pos[i * 3] = Math.cos(theta) * radius
      pos[i * 3 + 1] = Math.sin(theta) * radius
      pos[i * 3 + 2] = z
      
      const mixColor = Math.random() > 0.5 ? blue : red
      color[i * 3] = mixColor.r
      color[i * 3 + 1] = mixColor.g
      color[i * 3 + 2] = mixColor.b
    }
    return { pos, color }
  }, [count])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    const scroll = scrollYProgress.get()
    
    if (pointsRef.current) {
      // Zoom effect based on scroll and time
      pointsRef.current.rotation.z = t * 0.05 + scroll * 2
      pointsRef.current.position.z = scroll * 20
    }
  })

  return (
    <Points ref={pointsRef} positions={particles.pos} colors={particles.color} stride={3}>
      <PointMaterial
        transparent
        vertexColors
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

function FloatingCrystals() {
  const groupRef = useRef()
  const { scrollYProgress } = useScroll()

  const crystals = useMemo(() => {
    return Array.from({ length: 15 }).map(() => ({
      position: [
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 50
      ],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
      scale: 0.1 + Math.random() * 0.4,
      speed: 0.2 + Math.random() * 0.5
    }))
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    const scroll = scrollYProgress.get()
    
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        const c = crystals[i]
        child.rotation.x += 0.01
        child.rotation.y += 0.01
        // Zooming past the camera
        child.position.z = ((c.position[2] + t * c.speed + scroll * 50) % 60) - 30
      })
    }
  })

  return (
    <group ref={groupRef}>
      {crystals.map((c, i) => (
        <mesh key={i} position={c.position} rotation={c.rotation} scale={c.scale}>
          <octahedronGeometry />
          <meshStandardMaterial 
            color={i % 2 === 0 ? '#3B82F6' : '#EF4444'} 
            wireframe 
            transparent 
            opacity={0.2}
            metalness={1}
            roughness={0}
          />
        </mesh>
      ))}
    </group>
  )
}

export default function Global3DBackground() {
  return (
    <div className="fixed inset-0 z-[-1] bg-[#050508] pointer-events-none">
      <Canvas dpr={[1, 1.5]}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#3B82F6" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#EF4444" />
        
        <Suspense fallback={null}>
          <TunnelParticles />
          <FloatingCrystals />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </Suspense>
        
        <fog attach="fog" args={['#050508', 5, 45]} />
      </Canvas>
      
      {/* Cinematic Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,8,0.4)_50%,#050508_100%)]" />
    </div>
  )
}
