"use client"

import { useRef, useEffect, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Float, Sparkles, useGLTF, useAnimations, ContactShadows, Center, OrbitControls } from "@react-three/drei"
import * as THREE from "three"

function Robot() {
    const group = useRef<THREE.Group>(null)
    const { scene, animations } = useGLTF("/models/r2-d2_animated.glb")
    const { actions } = useAnimations(animations, group)

    useEffect(() => {
        // Play the 'Animation' animation if available
        if (actions["Animation"]) {
            actions["Animation"].reset().fadeIn(0.5).play()
        }

        return () => {
            actions["Animation"]?.fadeOut(0.5)
        }
    }, [actions])

    useFrame((state) => {
        if (!group.current) return

        const scrollY = window.scrollY
        const viewportHeight = window.innerHeight
        const totalHeight = document.body.scrollHeight - viewportHeight
        const scrollProgress = Math.min(scrollY / viewportHeight, 3) // Normalize to screens

        // Base position
        const initialY = -4
        const initialZ = 0
        const initialScale = 7

        // Phase 1: Hero (0 - 1vh)
        // Robot stays in background
        if (scrollProgress < 1) {
            group.current.position.x = 0 // Reset X
            group.current.position.z = THREE.MathUtils.lerp(0, 5, scrollProgress) // Move closer
            group.current.position.y = THREE.MathUtils.lerp(-4, -7, scrollProgress) // Move up slightly
            group.current.rotation.y = THREE.MathUtils.lerp(0, -0.5, scrollProgress)
        }
        // Phase 2: Transition to "Own Page" (1 - 2vh)
        // Robot moves to center/front
        else if (scrollProgress < 2) {
            group.current.position.x = 0 // Reset X
            const t = scrollProgress - 1
            group.current.position.z = THREE.MathUtils.lerp(5, 6, t) // Very close
            group.current.position.y = THREE.MathUtils.lerp(-7, -16, t)
            group.current.rotation.y = THREE.MathUtils.lerp(-0.5, -Math.PI / 5, t)
        }
        // Phase 3: "Own Page" (2 - 3vh)
        // Robot stays centered
        else if (scrollProgress < 3) {
            group.current.position.x = 0 // Reset X
            const t = scrollProgress - 2
            // Slight floating or movement
            group.current.rotation.y = -Math.PI / 5 + Math.sin(state.clock.elapsedTime) * 0.1
        }
        // Phase 4: Exit (> 3vh)
        else {
            // Move away
            group.current.position.x = 100 // Move off screen
        }
    })

    return (
        <group ref={group} dispose={null} position={[0, -4, 0]} scale={7}>
            <primitive object={scene} />
        </group>
    )
}

export function RobotScene() {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none">
            <Canvas
                camera={{
                    position: isMobile ? [1.5, 0, 6] : [0, 0, 10],
                }}
            >
                <Suspense fallback={null}>
                    <ambientLight intensity={1} />
                    <directionalLight position={[5, 5, 5]} intensity={2} />
                    <Robot />
                </Suspense>
            </Canvas>
        </div>
    )
}

useGLTF.preload("models/r2-d2_animated.glb")