import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'

function Globe() {
  const globeRef = useRef()
  const pointsRef = useRef()

  // Create points on sphere surface for "financial hubs"
  const hubPositions = useMemo(() => {
    const hubs = [
      { lat: 40.7, lng: -74.0 },   // New York
      { lat: 51.5, lng: -0.1 },    // London
      { lat: 35.7, lng: 139.7 },   // Tokyo
      { lat: 22.3, lng: 114.2 },   // Hong Kong
      { lat: 1.3, lng: 103.8 },    // Singapore
      { lat: -33.9, lng: 151.2 },  // Sydney
      { lat: 19.1, lng: 72.9 },    // Mumbai
      { lat: 25.2, lng: 55.3 },    // Dubai
      { lat: 47.4, lng: 8.5 },     // Zurich
      { lat: 48.9, lng: 2.4 },     // Paris
      { lat: 52.5, lng: 13.4 },    // Berlin
      { lat: -23.5, lng: -46.6 },  // São Paulo
    ]

    return hubs.map(({ lat, lng }) => {
      const phi = (90 - lat) * (Math.PI / 180)
      const theta = (lng + 180) * (Math.PI / 180)
      const r = 2.05
      return new THREE.Vector3(
        -r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta)
      )
    })
  }, [])

  // Create connection lines between hubs
  const connections = useMemo(() => {
    const conns = []
    const pairs = [
      [0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [1, 8], 
      [6, 7], [7, 9], [9, 10], [0, 11], [4, 6], [1, 7]
    ]
    
    pairs.forEach(([a, b]) => {
      const start = hubPositions[a]
      const end = hubPositions[b]
      const mid = new THREE.Vector3()
        .addVectors(start, end)
        .multiplyScalar(0.5)
        .normalize()
        .multiplyScalar(2.8)
      
      const curve = new THREE.QuadraticBezierCurve3(start, mid, end)
      conns.push(curve)
    })
    
    return conns
  }, [hubPositions])

  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <group ref={globeRef}>
      {/* Main Globe */}
      <Sphere args={[2, 64, 64]}>
        <meshPhongMaterial
          color="#0A1628"
          transparent
          opacity={0.8}
          wireframe={false}
          emissive="#0A1628"
          emissiveIntensity={0.1}
        />
      </Sphere>

      {/* Wireframe overlay */}
      <Sphere args={[2.01, 32, 32]}>
        <meshBasicMaterial
          color="#3B82F6"
          wireframe
          transparent
          opacity={0.06}
        />
      </Sphere>

      {/* Financial hub points */}
      {hubPositions.map((pos, i) => (
        <Float key={i} speed={2} floatIntensity={0.2}>
          <mesh position={pos}>
            <sphereGeometry args={[0.04, 16, 16]} />
            <meshBasicMaterial color="#3B82F6" />
          </mesh>
          {/* Glow ring around hub */}
          <mesh position={pos} rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}>
            <ringGeometry args={[0.06, 0.08, 32]} />
            <meshBasicMaterial color="#3B82F6" transparent opacity={0.5} side={THREE.DoubleSide} />
          </mesh>
        </Float>
      ))}

      {/* Connection routes */}
      {connections.map((curve, i) => {
        const points = curve.getPoints(50)
        const geometry = new THREE.BufferGeometry().setFromPoints(points)
        return (
          <line key={i} geometry={geometry}>
            <lineBasicMaterial
              color={i % 2 === 0 ? '#3B82F6' : '#EF4444'}
              transparent
              opacity={0.25}
            />
          </line>
        )
      })}

      {/* Atmosphere glow */}
      <Sphere args={[2.15, 32, 32]}>
        <meshBasicMaterial
          color="#EF4444"
          transparent
          opacity={0.03}
          side={THREE.BackSide}
        />
      </Sphere>
    </group>
  )
}

function OrbitParticles({ count = 100 }) {
  const ref = useRef()

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2
      const radius = 3.5 + Math.random() * 1.5
      pos[i * 3] = Math.cos(angle) * radius
      pos[i * 3 + 1] = (Math.random() - 0.5) * 2
      pos[i * 3 + 2] = Math.sin(angle) * radius
    }
    return pos
  }, [count])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.03
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#3B82F6"
        transparent
        opacity={0.5}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

export default function FinancialGlobe() {
  return (
    <div className="w-full h-[500px] md:h-[600px]">
      <Canvas
        camera={{ position: [0, 1, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.6} color="#3B82F6" />
        <pointLight position={[-10, -5, -10]} intensity={0.3} color="#EF4444" />
        <directionalLight position={[5, 5, 5]} intensity={0.2} color="#60A5FA" />
        
        <Globe />
        <OrbitParticles />
      </Canvas>
    </div>
  )
}

