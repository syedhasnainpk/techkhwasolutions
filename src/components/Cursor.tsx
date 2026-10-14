import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const [visible, setVisible] = useState(false)
  const [clicking, setClicking] = useState(false)
  const [hovering, setHovering] = useState(false)

  const mouseX = useMotionValue(-200)
  const mouseY = useMotionValue(-200)

  const ringX = useSpring(mouseX, { stiffness: 120, damping: 18, mass: 0.4 })
  const ringY = useSpring(mouseY, { stiffness: 120, damping: 18, mass: 0.4 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!visible) setVisible(true)
    }

    const onDown  = () => setClicking(true)
    const onUp    = () => setClicking(false)
    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    const onHoverIn = (e: MouseEvent) => {
      const t = e.target as Element
      if (t.closest('a, button, [data-cursor-hover]')) setHovering(true)
    }
    const onHoverOut = (e: MouseEvent) => {
      const t = e.target as Element
      if (t.closest('a, button, [data-cursor-hover]')) setHovering(false)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    document.documentElement.addEventListener('mouseleave', onLeave)
    document.documentElement.addEventListener('mouseenter', onEnter)
    document.addEventListener('mouseover', onHoverIn)
    document.addEventListener('mouseout', onHoverOut)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      document.documentElement.removeEventListener('mouseenter', onEnter)
      document.removeEventListener('mouseover', onHoverIn)
      document.removeEventListener('mouseout', onHoverOut)
    }
  }, [mouseX, mouseY, visible])

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null

  return (
    <>
      {/* Dot — instant */}
      <motion.div
        animate={{ opacity: visible ? 1 : 0, scale: clicking ? 0.5 : hovering ? 0 : 1 }}
        transition={{ duration: 0.12 }}
        style={{
          position: 'fixed', top: 0, left: 0, zIndex: 99999,
          x: mouseX, y: mouseY,
          translateX: '-50%', translateY: '-50%',
          width: 5, height: 5, borderRadius: '50%',
          background: '#5BC8E8',
          pointerEvents: 'none',
        }}
      />
      {/* Ring — spring lag */}
      <motion.div
        animate={{
          opacity: visible ? 1 : 0,
          scale: clicking ? 0.75 : hovering ? 1.7 : 1,
        }}
        transition={{ duration: 0.2 }}
        style={{
          position: 'fixed', top: 0, left: 0, zIndex: 99999,
          x: ringX, y: ringY,
          translateX: '-50%', translateY: '-50%',
          width: 34, height: 34, borderRadius: '50%',
          border: `1px solid ${hovering ? '#5BC8E8' : 'rgba(91,200,232,0.45)'}`,
          background: hovering ? 'rgba(91,200,232,0.08)' : 'transparent',
          pointerEvents: 'none',
        }}
      />
    </>
  )
}
