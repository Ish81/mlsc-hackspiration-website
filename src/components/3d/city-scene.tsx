"use client"

import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial, Environment } from "@react-three/drei"
import * as random from "maath/random/dist/maath-random.cjs"

function Stars(props: any) {
    const ref = useRef<any>(null)
    const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }))

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10
            ref.current.rotation.y -= delta / 15
        }
    })

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#00E5FF"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    )
}

function CameraRig() {
    useFrame((state) => {
        state.camera.position.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.2
        state.camera.position.y = Math.cos(state.clock.elapsedTime * 0.1) * 0.2
        state.camera.lookAt(0, 0, 0)
    })
    return null
}

export function CityScene() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <CameraRig />
                <Stars />
                <ambientLight intensity={0.5} />
                {/* Cyberpunk Grid */}
                <gridHelper args={[20, 20, 0xff00ff, 0x00E5FF]} position={[0, -0.5, 0]} rotation={[Math.PI / 2.5, 0, 0]} />
                <Environment preset="city" />
            </Canvas>
        </div>
    )
}
