import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Text3D, Center } from '@react-three/drei'
import * as THREE from 'three'

function ForexSymbol({ text, position, color = '#3B82F6', speed = 1 }) {
  const ref = useRef()
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed + position[0]) * 0.3
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={ref} position={position}>
        {/* Glow background */}
        <mesh>
          <planeGeometry args={[1.8, 0.8]} />
          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.03}
            side={THREE.DoubleSide}
          />
        </mesh>
        {/* Border */}
        <mesh>
          <ringGeometry args={[0.6, 0.62, 4]} />
          <meshBasicMaterial color={color} transparent opacity={0.15} />
        </mesh>
      </group>
    </Float>
  )
}

function GridLines() {
  const ref = useRef()

  const lines = useMemo(() => {
    const l = []
    const gridSize = 20
    const divisions = 20

    for (let i = -gridSize / 2; i <= gridSize / 2; i += gridSize / divisions) {
      l.push(
        { start: [-gridSize / 2, 0, i], end: [gridSize / 2, 0, i] },
        { start: [i, 0, -gridSize / 2], end: [i, 0, gridSize / 2] }
      )
    }
    return l
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.z = (state.clock.elapsedTime * 0.3) % 1
    }
  })

  return (
    <group ref={ref} position={[0, -3, 0]} rotation={[-Math.PI / 6, 0, 0]}>
      {lines.map((line, i) => {
        const points = [
          new THREE.Vector3(...line.start),
          new THREE.Vector3(...line.end)
        ]
        const geometry = new THREE.BufferGeometry().setFromPoints(points)
        return (
          <line key={i} geometry={geometry}>
            <lineBasicMaterial
              color="#3B82F6"
              transparent
              opacity={0.04}
            />
          </line>
        )
      })}
    </group>
  )
}

function PriceChart() {
  const ref = useRef()

  const chartPoints = useMemo(() => {
    const points = []
    for (let i = 0; i <= 60; i++) {
      const x = (i / 60) * 8 - 4
      const y = Math.sin(i * 0.3) * 0.5 + Math.cos(i * 0.15) * 0.8 + Math.sin(i * 0.5) * 0.3
      points.push(new THREE.Vector3(x, y, 0))
    }
    return points
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
  })

  const geometry = new THREE.BufferGeometry().setFromPoints(chartPoints)

  return (
    <group ref={ref} position={[0, 0, -3]}>
      <line geometry={geometry}>
        <lineBasicMaterial color="#EF4444" transparent opacity={0.4} />
      </line>
    </group>
  )
}

export default function FloatingForexScene() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 5, 5]} intensity={0.4} color="#3B82F6" />

        <ForexSymbol text="EUR/USD" position={[-3, 2, -2]} color="#3B82F6" speed={0.8} />
        <ForexSymbol text="GBP/JPY" position={[3, -1, -1]} color="#EF4444" speed={1.1} />
        <ForexSymbol text="USD/JPY" position={[-2, -2, -3]} color="#3B82F6" speed={0.9} />
        <ForexSymbol text="XAU/USD" position={[4, 1.5, -2]} color="#60A5FA" speed={0.7} />

        <GridLines />
        <PriceChart />
      </Canvas>
    </div>
  )
}

