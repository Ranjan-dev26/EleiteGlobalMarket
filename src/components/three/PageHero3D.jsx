import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sphere, MeshDistortMaterial, Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function SceneContent({ mode, color }) {
  const meshRef = useRef()
  const pointsRef = useRef()

  const particles = useMemo(() => {
    const count = 1000
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return pos
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.2
      meshRef.current.rotation.y = t * 0.3
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.05
    }
  })

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color={color} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffffff" />

      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={meshRef}>
          {mode === 'distort' ? (
            <Sphere args={[1, 64, 64]}>
              <MeshDistortMaterial
                color={color}
                speed={3}
                distort={0.4}
                radius={1}
                metalness={0.8}
                roughness={0.2}
              />
            </Sphere>
          ) : mode === 'wireframe' ? (
            <octahedronGeometry args={[1, 2]} />
          ) : (
            <torusKnotGeometry args={[1, 0.3, 128, 32]} />
          )}
          {mode !== 'distort' && (
            <meshStandardMaterial
              color={color}
              wireframe
              transparent
              opacity={0.3}
              metalness={1}
              roughness={0}
            />
          )}
        </mesh>
      </Float>

      <Points ref={pointsRef} positions={particles} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={color}
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </>
  )
}

export default function PageHero3D({ mode = 'distort', color = '#3B82F6' }) {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <SceneContent mode={mode} color={color} />
      </Canvas>
    </div>
  )
}

