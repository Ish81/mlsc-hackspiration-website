"use client"

import { useRef, useMemo, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

// Large Central Blockchain Node - The hero element like the robot was
function CentralBlockchainNode() {
  const groupRef = useRef<THREE.Group>(null)
  const innerRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      // Slow rotation
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3
      
      // Gentle floating
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
    }
    
    if (innerRef.current) {
      // Counter-rotate inner cube
      innerRef.current.rotation.x = -state.clock.elapsedTime * 0.5
      innerRef.current.rotation.z = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Large outer wireframe cube - blockchain structure */}
      <mesh>
        <boxGeometry args={[4, 4, 4]} />
        <meshBasicMaterial
          color="#00E5FF"
          wireframe
          transparent
          opacity={0.6}
        />
      </mesh>
      
      {/* Inner rotating cube */}
      <mesh ref={innerRef}>
        <boxGeometry args={[2.5, 2.5, 2.5]} />
        <meshBasicMaterial
          color="#FF2D95"
          wireframe
          transparent
          opacity={0.7}
        />
      </mesh>
      
      {/* Core glowing sphere */}
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#7C7CFF"
          emissive="#7C7CFF"
          emissiveIntensity={3}
          toneMapped={false}
        />
      </mesh>
      
      {/* Bright point lights at corners */}
      <pointLight position={[2, 2, 2]} color="#00E5FF" intensity={4} />
      <pointLight position={[-2, -2, -2]} color="#FF2D95" intensity={4} />
      <pointLight position={[2, -2, 2]} color="#7C7CFF" intensity={4} />
      <pointLight position={[-2, 2, -2]} color="#00E5FF" intensity={4} />
    </group>
  )
}

// Orbiting network nodes
function OrbitingNodes() {
  const nodesRef = useRef<THREE.Group>(null)
  
  const nodes = useMemo(() => {
    const count = 8
    const radius = 6
    return Array.from({ length: count }, (_, i) => ({
      angle: (i / count) * Math.PI * 2,
      radius,
      color: ['#00E5FF', '#FF2D95', '#7C7CFF'][i % 3],
      offset: i * 0.5
    }))
  }, [])
  
  useFrame((state) => {
    if (nodesRef.current) {
      nodesRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <group ref={nodesRef}>
      {nodes.map((node, i) => {
        const x = Math.cos(node.angle) * node.radius
        const z = Math.sin(node.angle) * node.radius
        return (
          <mesh key={i} position={[x, 0, z]}>
            <sphereGeometry args={[0.3, 16, 16]} />
            <meshStandardMaterial
              color={node.color}
              emissive={node.color}
              emissiveIntensity={2}
              toneMapped={false}
            />
          </mesh>
        )
      })}
    </group>
  )
}

// Connection beams between center and orbiting nodes
function ConnectionBeams() {
  const beamsRef = useRef<THREE.Group>(null)
  
  const beams = useMemo(() => {
    const count = 8
    const radius = 6
    return Array.from({ length: count }, (_, i) => {
      const angle = (i / count) * Math.PI * 2
      return {
        start: [0, 0, 0] as [number, number, number],
        end: [Math.cos(angle) * radius, 0, Math.sin(angle) * radius] as [number, number, number],
        color: ['#00E5FF', '#FF2D95', '#7C7CFF'][i % 3]
      }
    })
  }, [])
  
  useFrame((state) => {
    if (beamsRef.current) {
      beamsRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <group ref={beamsRef}>
      {beams.map((beam, i) => {
        const curve = new THREE.LineCurve3(
          new THREE.Vector3(...beam.start),
          new THREE.Vector3(...beam.end)
        )
        const tubeGeometry = new THREE.TubeGeometry(curve, 20, 0.03, 8, false)
        
        return (
          <mesh key={i} geometry={tubeGeometry}>
            <meshBasicMaterial
              color={beam.color}
              transparent
              opacity={0.5}
              emissive={beam.color}
              emissiveIntensity={1}
            />
          </mesh>
        )
      })}
    </group>
  )
}

// Animated grid floor
function BlockchainGrid() {
  const gridRef = useRef<THREE.GridHelper>(null)
  
  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.y = -4 + Math.sin(state.clock.elapsedTime * 0.5) * 0.3
    }
  })

  return (
    <gridHelper 
      ref={gridRef}
      args={[30, 30, '#00E5FF', '#FF2D95']} 
      position={[0, -4, 0]}
    />
  )
}

// Floating particles
function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null)
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(1500 * 3)
    const colors = new Float32Array(1500 * 3)
    const colorPalette = [
      new THREE.Color('#00E5FF'),
      new THREE.Color('#FF2D95'),
      new THREE.Color('#7C7CFF')
    ]
    
    for (let i = 0; i < 1500; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30
      
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)]
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }
    
    return [positions, colors]
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
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
        size={0.08}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  )
}

export function Web3Background() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      <Canvas
        camera={{
          position: [0, 2, 14],
          fov: 75,
        }}
      >
        <Suspense fallback={null}>
          {/* Very bright ambient lighting */}
          <ambientLight intensity={2} />
          
          {/* Strong colored lights */}
          <pointLight position={[10, 10, 10]} intensity={5} color="#00E5FF" />
          <pointLight position={[-10, 10, 10]} intensity={5} color="#FF2D95" />
          <pointLight position={[0, -10, 10]} intensity={5} color="#7C7CFF" />
          <directionalLight position={[0, 5, 5]} intensity={2} color="#ffffff" />
          
          {/* Fog for depth */}
          <fog attach="fog" args={['#000000', 10, 30]} />
          
          <CentralBlockchainNode />
          <OrbitingNodes />
          <ConnectionBeams />
          <BlockchainGrid />
          <ParticleField />
        </Suspense>
      </Canvas>
    </div>
  )
}
