import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 15, suffix: '+', label: 'PROJECTS DELIVERED' },
  { value: 5,  suffix: '',  label: 'COUNTRIES SERVED' },
  { value: 2,  suffix: '+', label: 'YEARS IN BUSINESS' },
  { value: 98, suffix: '%', label: 'CLIENT RETENTION' },
]

const stack = [
  'React', 'Next.js', 'Node.js', 'TypeScript', 'Python',
  'React Native', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes',
  'React', 'Next.js', 'Node.js', 'TypeScript', 'Python',
  'React Native', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes',
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 1800
    const start = performance.now()
    const frame = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(1 - t, 3)
      setCount(parseFloat((target * ease).toFixed(target % 1 !== 0 ? 1 : 0)))
      if (t < 1) requestAnimationFrame(frame)
    }
    requestAnimationFrame(frame)
  }, [inView, target])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function StatsBar() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#060C16' }}>
      {/* Column grid */}
      <div className="col-grid absolute inset-0">
        {[0,1,2,3,4].map(i => <span key={i} />)}
      </div>
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'rgba(91,200,232,0.08)' }} />

      {/* Tech stack ticker */}
      <div className="relative z-10 py-5 overflow-hidden" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="flex animate-ticker whitespace-nowrap">
          {stack.map((name, i) => (
            <span key={i} className="inline-flex items-center gap-3 mx-10 nav-label text-white/15" style={{ fontSize: '10px' }}>
              <span className="w-1 h-1 rounded-full bg-[#5BC8E8] opacity-30" />
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 py-16 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="px-8 first:pl-0 last:pr-0 py-4"
          >
            <div className="display-xl text-white mb-3" style={{ fontSize: 'clamp(3rem,5.5vw,5.5rem)' }}>
              <CountUp target={s.value} suffix={s.suffix} />
            </div>
            <div className="nav-label text-white/25" style={{ fontSize: '10px' }}>
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
