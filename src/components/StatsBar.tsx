import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 15, suffix: '+', label: 'Projects Delivered' },
  { value: 5,  suffix: '',  label: 'Countries Served' },
  { value: 2,  suffix: '+', label: 'Years in Business' },
  { value: 98, suffix: '%', label: 'Client Retention' },
]

const partners = [
  'Alibaba Cloud', 'Microsoft Azure', 'Amazon AWS', 'Google Cloud',
  'Cloudflare', 'Vercel', 'DigitalOcean', 'GitHub', 'Stripe', 'Twilio',
  'Alibaba Cloud', 'Microsoft Azure', 'Amazon AWS', 'Google Cloud',
  'Cloudflare', 'Vercel', 'DigitalOcean', 'GitHub', 'Stripe', 'Twilio',
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
    <section className="relative overflow-hidden bg-navy-mid">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      {/* ─── Scrolling ticker ─── */}
      <div className="py-7 overflow-hidden border-b border-white/5">
        <div className="flex animate-ticker whitespace-nowrap">
          {partners.map((name, i) => (
            <span key={i} className="inline-flex items-center gap-3 mx-12 font-body text-[11px] tracking-[0.15em] uppercase text-white/20 font-medium">
              <span className="w-1 h-1 rounded-full bg-accent/30" />
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* ─── Stats ─── */}
      <div className="max-w-[1440px] mx-auto px-8 py-16 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="px-8 first:pl-0 last:pr-0 py-4"
          >
            <div className="stat-number text-[clamp(2.8rem,5vw,4.5rem)] text-gradient mb-2">
              <CountUp target={s.value} suffix={s.suffix} />
            </div>
            <div className="font-body text-[11px] tracking-[0.12em] uppercase text-white/35 font-medium">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fade to light */}
      <div className="absolute bottom-0 inset-x-0 h-16 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #F7F8FA)' }} />
    </section>
  )
}
