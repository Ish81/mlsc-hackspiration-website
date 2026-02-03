"use client"

import { useRef, useEffect, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

// Web3 Network Node Component
function NetworkNode({ position, color }: { position: [number, number, number], color: string }) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current && meshRef.current.position && meshRef.current.scale) {
      // Gentle floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2
      // Gentle pulsing
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.1
      meshRef.current.scale.setScalar(scale)
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.15, 16, 16]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        toneMapped={false}
      />
      {/* Outer glow ring */}
      <mesh>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </mesh>
    </mesh>
  )
}

// Connection line between nodes
function ConnectionLine({ start, end, color }: { 
  start: [number, number, number], 
  end: [number, number, number],
  color: string 
}) {
  const lineRef = useRef<THREE.Line>(null)
  
  const points = useMemo(() => {
    return [
      new THREE.Vector3(...start),
      new THREE.Vector3(...end)
    ]
  }, [start, end])

  const geometry = useMemo(() => {
    return new THREE.BufferGeometry().setFromPoints(points)
  }, [points])

  useFrame((state) => {
    if (lineRef.current && lineRef.current.material) {
      // Animate opacity for data flow effect
      const material = lineRef.current.material as THREE.LineBasicMaterial
      material.opacity = 0.2 + Math.sin(state.clock.elapsedTime * 2) * 0.15
    }
  })

  return (
    <line ref={lineRef} geometry={geometry}>
      <lineBasicMaterial
        color={color}
        transparent
        opacity={0.3}
        linewidth={2}
      />
    </line>
  )
}

// Blockchain Grid Effect
function BlockchainGrid() {
  const gridRef = useRef<THREE.GridHelper>(null)
  
  useFrame((state) => {
    if (gridRef.current && gridRef.current.position) {
      gridRef.current.position.y = -5 + Math.sin(state.clock.elapsedTime * 0.5) * 0.5
    }
  })

  return (
    <gridHelper 
      ref={gridRef}
      args={[50, 50, '#00E5FF', '#7C7CFF']} 
      position={[0, -5, 0]}
    />
  )
}

// Floating Hexagons (blockchain-inspired)
function FloatingHexagon({ position, scale, rotationSpeed }: {
  position: [number, number, number],
  scale: number,
  rotationSpeed: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  const geometry = useMemo(() => {
    const shape = new THREE.Shape()
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i
      const x = Math.cos(angle)
      const y = Math.sin(angle)
      if (i === 0) shape.moveTo(x, y)
      else shape.lineTo(x, y)
    }
    shape.closePath()
    return new THREE.ShapeGeometry(shape)
  }, [])

  useFrame((state) => {
    if (meshRef.current && meshRef.current.rotation && meshRef.current.position && position && position.length >= 2) {
      meshRef.current.rotation.z += rotationSpeed
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.5
    }
  })

  // Safety check for position
  if (!position || position.length < 3) {
    return null
  }

  return (
    <mesh ref={meshRef} position={position} scale={scale} geometry={geometry}>
      <meshBasicMaterial
        color="#7C7CFF"
        transparent
        opacity={0.1}
        side={THREE.DoubleSide}
        wireframe
      />
    </mesh>
  )
}

// Particles for depth
function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null)
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(1000 * 3)
    const colors = new Float32Array(1000 * 3)
    const colorPalette = [
      new THREE.Color('#00E5FF'),
      new THREE.Color('#FF2D95'),
      new THREE.Color('#7C7CFF')
    ]
    
    for (let i = 0; i < 1000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50
      
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)]
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }
    
    return [positions, colors]
  }, [])

  useFrame((state) => {
    if (particlesRef.current && particlesRef.current.rotation) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

// Main Network Scene
function Web3Network() {
  const groupRef = useRef<THREE.Group>(null)
  
  // Define network nodes with positions
  const nodes = useMemo(() => [
    { pos: [-4, 2, -2] as [number, number, number], color: '#00E5FF' },
    { pos: [4, 3, -3] as [number, number, number], color: '#FF2D95' },
    { pos: [0, -2, -4] as [number, number, number], color: '#7C7CFF' },
    { pos: [-3, -3, -2] as [number, number, number], color: '#00E5FF' },
    { pos: [3, 0, -5] as [number, number, number], color: '#FF2D95' },
    { pos: [0, 4, -3] as [number, number, number], color: '#7C7CFF' },
    { pos: [-5, 0, -4] as [number, number, number], color: '#00E5FF' },
    { pos: [5, -2, -2] as [number, number, number], color: '#FF2D95' },
  ], [])

  // Define connections between nodes
  const connections = useMemo(() => [
    { start: nodes[0].pos, end: nodes[1].pos, color: '#00E5FF' },
    { start: nodes[1].pos, end: nodes[2].pos, color: '#FF2D95' },
    { start: nodes[2].pos, end: nodes[3].pos, color: '#7C7CFF' },
    { start: nodes[3].pos, end: nodes[0].pos, color: '#00E5FF' },
    { start: nodes[4].pos, end: nodes[5].pos, color: '#FF2D95' },
    { start: nodes[5].pos, end: nodes[6].pos, color: '#7C7CFF' },
    { start: nodes[6].pos, end: nodes[7].pos, color: '#00E5FF' },
    { start: nodes[0].pos, end: nodes[5].pos, color: '#7C7CFF' },
    { start: nodes[1].pos, end: nodes[4].pos, color: '#FF2D95' },
  ], [nodes])

  const hexagons = useMemo(() => [
    { pos: [-6, 2, -8] as [number, number, number], scale: 0.5, speed: 0.002 },
    { pos: [6, -1, -7] as [number, number, number], scale: 0.7, speed: -0.003 },
    { pos: [0, 3, -10] as [number, number, number], scale: 1, speed: 0.001 },
    { pos: [-4, -4, -6] as [number, number, number], scale: 0.6, speed: -0.002 },
    { pos: [4, 4, -9] as [number, number, number], scale: 0.8, speed: 0.0025 },
  ], [])

  useFrame((state) => {
    if (groupRef.current && groupRef.current.position && groupRef.current.rotation) {
      // Subtle parallax effect based on scroll
      const scrollY = typeof window !== 'undefined' ? window.scrollY : 0
      groupRef.current.position.y = scrollY * -0.001
      
      // Gentle rotation
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {/* Blockchain Grid */}
      <BlockchainGrid />
      
      {/* Network Connections */}
      {connections.map((conn, i) => (
        <ConnectionLine key={`conn-${i}`} {...conn} />
      ))}
      
      {/* Network Nodes */}
      {nodes.map((node, i) => (
        <NetworkNode key={`node-${i}`} position={node.pos} color={node.color} />
      ))}
      
      {/* Floating Hexagons */}
      {hexagons.map((hex, i) => (
        <FloatingHexagon key={`hex-${i}`} {...hex} />
      ))}
      
      {/* Particle Field */}
      <ParticleField />
    </group>
  )
}

export function Web3Background() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      <Canvas
        camera={{
          position: [0, 0, 10],
          fov: 60,
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00E5FF" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#FF2D95" />
        <Web3Network />
      </Canvas>
    </div>
  )
}
