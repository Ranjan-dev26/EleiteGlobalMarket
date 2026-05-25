import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, Stars } from '@react-three/drei'
import * as THREE from 'three'

function FloatingParticles({ count = 200 }) {
  const mesh = useRef()
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 25
      pos[i * 3 + 1] = (Math.random() - 0.5) * 25
      pos[i * 3 + 2] = (Math.random() - 0.5) * 25
    }
    return pos
  }, [count])

  const sizes = useMemo(() => {
    const s = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      s[i] = Math.random() * 0.03 + 0.01
    }
    return s
  }, [count])

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.02
      mesh.current.rotation.y = state.clock.elapsedTime * 0.03
    }
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          array={sizes}
          count={count}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#3B82F6"
        transparent
        opacity={0.4}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

function GlowingSphere({ position, color = '#3B82F6', speed = 1, isMobile }) {
  const ref = useRef()

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5
    }
  })

  if (isMobile) {
    return (
      <Sphere ref={ref} args={[0.2, 16, 16]} position={position}>
        <meshBasicMaterial color={color} transparent opacity={0.15} />
      </Sphere>
    )
  }

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={ref} args={[0.3, 32, 32]} position={position}>
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.2}
          distort={0.4}
          speed={2}
          roughness={0}
          metalness={1}
        />
      </Sphere>
    </Float>
  )
}

function MarketLines({ isMobile }) {
  const linesRef = useRef()
  const lineCount = isMobile ? 4 : 8

  const curves = useMemo(() => {
    return Array.from({ length: lineCount }, (_, i) => {
      const points = []
      const yOffset = (i - lineCount / 2) * (isMobile ? 2 : 1.2)
      for (let j = 0; j <= (isMobile ? 20 : 50); j++) {
        const x = (j / (isMobile ? 20 : 50)) * 20 - 10
        const y = yOffset + Math.sin(j * 0.3 + i) * 1.5
        const z = -5 + Math.cos(j * 0.2 + i * 0.5) * 2
        points.push(new THREE.Vector3(x, y, z))
      }
      return new THREE.CatmullRomCurve3(points)
    })
  }, [isMobile, lineCount])

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.05
    }
  })

  return (
    <group ref={linesRef}>
      {curves.map((curve, i) => {
        const points = curve.getPoints(isMobile ? 40 : 100)
        const geometry = new THREE.BufferGeometry().setFromPoints(points)
        const isGold = i % 2 === 0
        return (
          <line key={i} geometry={geometry}>
            <lineBasicMaterial
              color={isGold ? '#3B82F6' : '#EF4444'}
              transparent
              opacity={0.1}
              linewidth={1}
            />
          </line>
        )
      })}
    </group>
  )
}

export default function HeroScene() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={isMobile ? [1, 1] : [1, 1.5]}
        gl={{ 
          antialias: !isMobile, 
          alpha: true,
          powerPreference: "high-performance"
        }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.2} />
        {!isMobile && (
          <>
            <pointLight position={[10, 10, 10]} intensity={0.5} color="#3B82F6" />
            <pointLight position={[-10, -10, -10]} intensity={0.3} color="#EF4444" />
          </>
        )}

        <Stars
          radius={100}
          depth={50}
          count={isMobile ? 300 : 1000}
          factor={2}
          saturation={0}
          fade
          speed={0.5}
        />

        <FloatingParticles count={isMobile ? 80 : 300} />
        <MarketLines isMobile={isMobile} />

        <GlowingSphere isMobile={isMobile} position={[-4, 2, -3]} color="#3B82F6" speed={0.8} />
        <GlowingSphere isMobile={isMobile} position={[4, -1, -2]} color="#EF4444" speed={1.2} />
        {!isMobile && (
          <>
            <GlowingSphere isMobile={isMobile} position={[0, 3, -4]} color="#3B82F6" speed={1} />
            <GlowingSphere isMobile={isMobile} position={[-3, -2, -3]} color="#EF4444" speed={0.6} />
          </>
        )}
      </Canvas>
    </div>
  )
}

