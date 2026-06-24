import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'

const ACCENT = '#5BC8E8'
const ACCENT2 = '#9BE4F5'

function Stars() {
  const geo = useMemo(() => {
    const count = 900
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 28
      pos[i * 3 + 1] = (Math.random() - 0.5) * 18
      pos[i * 3 + 2] = (Math.random() - 0.5) * 14
    }
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3))
    return g
  }, [])
  return (
    <points geometry={geo}>
      <pointsMaterial color={ACCENT} size={0.022} sizeAttenuation transparent opacity={0.45} />
    </points>
  )
}

function Network() {
  const groupRef = useRef<THREE.Group>(null)
  const linesRef = useRef<THREE.LineSegments>(null)
  const pulseRef = useRef<THREE.LineSegments>(null)

  const { nodeGeo, lineGeo, pulseGeo, hubPositions } = useMemo(() => {
    const count = 42
    const nodes: THREE.Vector3[] = []
    for (let i = 0; i < count; i++) {
      const phi   = Math.acos(2 * Math.random() - 1)
      const theta = Math.random() * Math.PI * 2
      const r = 2.8 + Math.random() * 3.6
      nodes.push(new THREE.Vector3(
        r * Math.sin(phi) * Math.cos(theta) * 1.6,
        r * Math.sin(phi) * Math.sin(theta) * 0.9,
        r * Math.cos(phi),
      ))
    }

    const threshold = 3.0
    const linePts: number[] = []
    const pulsePts: number[] = []
    let pulseCount = 0
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const d = nodes[i].distanceTo(nodes[j])
        if (d < threshold) {
          linePts.push(nodes[i].x, nodes[i].y, nodes[i].z, nodes[j].x, nodes[j].y, nodes[j].z)
          if (Math.random() < 0.2 && pulseCount < 28) {
            pulsePts.push(nodes[i].x, nodes[i].y, nodes[i].z, nodes[j].x, nodes[j].y, nodes[j].z)
            pulseCount++
          }
        }
      }
    }

    const nodePts = new Float32Array(count * 3)
    nodes.forEach((n, i) => { nodePts[i*3] = n.x; nodePts[i*3+1] = n.y; nodePts[i*3+2] = n.z })
    const ng = new THREE.BufferGeometry()
    ng.setAttribute('position', new THREE.Float32BufferAttribute(nodePts, 3))
    const lg = new THREE.BufferGeometry()
    lg.setAttribute('position', new THREE.Float32BufferAttribute(new Float32Array(linePts), 3))
    const pg = new THREE.BufferGeometry()
    pg.setAttribute('position', new THREE.Float32BufferAttribute(new Float32Array(pulsePts), 3))

    const degree = new Array(count).fill(0)
    for (let i = 0; i < count; i++)
      for (let j = i+1; j < count; j++)
        if (nodes[i].distanceTo(nodes[j]) < threshold) { degree[i]++; degree[j]++ }
    const hubs = [...degree.keys()].sort((a, b) => degree[b] - degree[a]).slice(0, 6)

    return { nodeGeo: ng, lineGeo: lg, pulseGeo: pg, hubPositions: hubs.map(h => nodes[h]) }
  }, [])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.04
      groupRef.current.rotation.x = Math.sin(t * 0.025) * 0.07
    }
    if (linesRef.current)
      (linesRef.current.material as THREE.LineBasicMaterial).opacity = 0.09 + Math.sin(t * 0.4) * 0.03
    if (pulseRef.current)
      (pulseRef.current.material as THREE.LineBasicMaterial).opacity = 0.25 + Math.sin(t * 1.8) * 0.2
  })

  return (
    <group ref={groupRef}>
      <lineSegments ref={linesRef} geometry={lineGeo}>
        <lineBasicMaterial color={ACCENT} transparent opacity={0.09} />
      </lineSegments>
      <lineSegments ref={pulseRef} geometry={pulseGeo}>
        <lineBasicMaterial color={ACCENT2} transparent opacity={0.3} />
      </lineSegments>
      <points geometry={nodeGeo}>
        <pointsMaterial color={ACCENT} size={0.055} sizeAttenuation transparent opacity={0.85} />
      </points>
      {hubPositions.map((pos, i) => (
        <HubNode key={i} position={pos} index={i} />
      ))}
    </group>
  )
}

function HubNode({ position, index }: { position: THREE.Vector3; index: number }) {
  const ref = useRef<THREE.Mesh>(null)
  const base = 0.07 + (index % 3) * 0.03
  useFrame((state) => {
    if (ref.current) {
      const s = base + Math.sin(state.clock.elapsedTime * 1.2 + index * 1.4) * 0.02
      ref.current.scale.setScalar(s)
    }
  })
  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[1, 10, 10]} />
      <meshBasicMaterial color={index % 2 === 0 ? ACCENT : ACCENT2} transparent opacity={0.9} />
    </mesh>
  )
}

function DataDrift() {
  const ref = useRef<THREE.Points>(null)
  const geo = useMemo(() => {
    const count = 100
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i*3]   = (Math.random() - 0.5) * 20
      pos[i*3+1] = (Math.random() - 0.5) * 12
      pos[i*3+2] = (Math.random() - 0.5) * 8
    }
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3))
    return g
  }, [])
  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.012
  })
  return (
    <points ref={ref} geometry={geo}>
      <pointsMaterial color={ACCENT2} size={0.04} sizeAttenuation transparent opacity={0.3} />
    </points>
  )
}

function CameraRig() {
  const mouse = useRef({ x: 0, y: 0 })
  useMemo(() => {
    const fn = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth  - 0.5) * 2
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', fn)
    return () => window.removeEventListener('mousemove', fn)
  }, [])
  useFrame(({ camera }) => {
    camera.position.x += (mouse.current.x * 1.2 - camera.position.x) * 0.03
    camera.position.y += (mouse.current.y * 0.7 - camera.position.y) * 0.03
    camera.lookAt(0, 0, 0)
  })
  return null
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 60 }}
      gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
      dpr={[1, 1.5]}
    >
      <CameraRig />
      <Stars />
      <DataDrift />
      <Network />
      <EffectComposer>
        <Bloom luminanceThreshold={0.1} luminanceSmoothing={0.9} intensity={1.2} />
      </EffectComposer>
    </Canvas>
  )
}
