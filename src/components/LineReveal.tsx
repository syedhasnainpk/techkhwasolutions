import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface LineRevealProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  style?: React.CSSProperties
  className?: string
  trigger?: 'view' | 'mount'
}

export default function LineReveal({
  children,
  delay = 0,
  duration = 0.95,
  style,
  className,
  trigger = 'mount',
}: LineRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  // Watch the outer container; fires as soon as any part enters the viewport
  const inView = useInView(ref, { once: true, margin: '0px 0px -40px 0px' })

  const shouldAnimate = trigger === 'view' ? inView : true

  return (
    <div ref={ref} style={{ overflow: 'hidden' }}>
      <motion.div
        style={style}
        className={className}
        initial={{ y: '110%' }}
        animate={{ y: shouldAnimate ? '0%' : '110%' }}
        transition={{ delay, duration, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  )
}
