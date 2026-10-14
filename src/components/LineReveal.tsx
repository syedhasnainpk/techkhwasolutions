import { motion } from 'framer-motion'

interface LineRevealProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  style?: React.CSSProperties
  className?: string
  /** 'view' uses whileInView, 'mount' animates on mount */
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
  const anim =
    trigger === 'view'
      ? {
          initial: { y: '110%' },
          whileInView: { y: '0%' },
          viewport: { once: true, amount: 0.5 as const },
          transition: { delay, duration, ease: [0.16, 1, 0.3, 1] as const },
        }
      : {
          initial: { y: '110%' },
          animate: { y: '0%' },
          transition: { delay, duration, ease: [0.16, 1, 0.3, 1] as const },
        }

  return (
    <div style={{ overflow: 'hidden' }}>
      <motion.div style={style} className={className} {...anim}>
        {children}
      </motion.div>
    </div>
  )
}
