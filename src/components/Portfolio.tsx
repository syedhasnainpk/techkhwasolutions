import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    num: '01', title: 'FinFlow ERP', category: 'Enterprise Software',
    description: 'Financial management ERP processing PKR 2B+ monthly transactions for a 500-employee manufacturing firm — real-time dashboards, audit trails, multi-entity support.',
    metric: '↓ 65%', metricLabel: 'Manual processing time',
    tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    accent: '#5BC8E8', bg: '#0A0F1A',
    mockLines: [4, 7, 5, 9, 6, 8, 4, 10, 7, 9],
  },
  {
    num: '02', title: 'MedConnect', category: 'Healthcare · iOS & Android',
    description: 'Telemedicine app connecting 120+ doctors to 50,000+ patients with HD video consultation, e-prescriptions, and a pharmacy fulfilment network.',
    metric: '50K+', metricLabel: 'Active patients',
    tags: ['React Native', 'Firebase', 'WebRTC', 'Stripe'],
    accent: '#5BC8E8', bg: '#0D1828',
    mockLines: [6, 9, 5, 8, 4, 7, 9, 5, 8, 6],
  },
  {
    num: '03', title: 'LogiTrack', category: 'SaaS · Logistics',
    description: 'Multi-tenant logistics SaaS managing 10,000+ daily shipments for 80+ courier companies — live GPS tracking, automated invoicing, and open API.',
    metric: '10K+', metricLabel: 'Shipments / day',
    tags: ['Next.js', 'Kubernetes', 'Redis', 'GCP'],
    accent: '#5BC8E8', bg: '#091627',
    mockLines: [7, 4, 9, 5, 8, 3, 7, 6, 10, 5],
  },
]

const T = {
  heading: '#0A0F1A',
  body:    '#4B5563',
  muted:   '#9CA3AF',
  accent:  '#5BC8E8',
  border:  'rgba(10,15,26,0.08)',
}

function MockUI({ lines, accent, bg }: { lines: number[]; accent: string; bg: string }) {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden" style={{ background: bg }}>
      <div className="flex items-center gap-1.5 px-4 py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        {['#FF5F57','#FFBD2E','#28CA41'].map(c => <span key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c, opacity: 0.65 }} />)}
        <div className="flex-1 mx-3 h-3.5 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }} />
      </div>
      <div className="p-5 space-y-4">
        <div className="flex justify-between items-center">
          <div className="h-4 w-24 rounded" style={{ background: 'rgba(255,255,255,0.07)' }} />
          <div className="h-7 w-16 rounded-full" style={{ background: `${accent}22` }} />
        </div>
        <div className="flex items-end gap-1.5 h-20">
          {lines.map((h, i) => (
            <motion.div key={i} initial={{ height: 0 }} whileInView={{ height: `${h * 9}%` }}
              viewport={{ once: true, amount: 0.01 }}
              transition={{ delay: i * 0.05, duration: 0.45, ease: 'easeOut' }}
              className="flex-1 rounded-t-sm" style={{ background: i % 4 === 0 ? `${accent}cc` : `${accent}30`, minHeight: 3 }} />
          ))}
        </div>
        <div className="space-y-2">
          {[75, 55, 85].map((w, i) => <div key={i} className="h-2 rounded-full" style={{ width: `${w}%`, background: 'rgba(255,255,255,0.07)' }} />)}
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#FFFFFF' }}>
      <div className="absolute inset-0 dot-grid-light pointer-events-none" style={{ opacity: 0.45 }} />

      <div className="max-w-[1440px] mx-auto px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.01 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="py-20 flex flex-col lg:flex-row lg:items-end justify-between gap-8"
          style={{ borderBottom: `1px solid ${T.border}` }}
        >
          <div>
            <span className="font-body font-semibold text-[11px] tracking-[0.14em] uppercase block mb-5" style={{ color: T.accent }}>Our Work</span>
            <h2 className="font-display font-bold leading-none" style={{ fontSize: 'clamp(2.4rem,5vw,4.5rem)', letterSpacing: '-0.03em', color: T.heading }}>
              Built to Perform.<br />
              <span style={{ background: 'linear-gradient(135deg,#5BC8E8,#9BE4F5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Designed to Impress.
              </span>
            </h2>
          </div>
          <a href="#" className="inline-flex items-center gap-1.5 font-body font-semibold text-[13px] lg:mb-2 hover:opacity-70 transition-opacity"
            style={{ color: T.body }}>
            View all projects <ArrowUpRight size={14} />
          </a>
        </motion.div>

        {/* Project rows */}
        <div>
          {projects.map((p, i) => (
            <motion.a
              key={p.num}
              href="#"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.01 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col lg:flex-row gap-10 py-12 hover:pl-2 transition-all duration-300"
              style={{ borderTop: `1px solid ${T.border}` }}
            >
              {/* Left: num + meta + metric */}
              <div className="lg:w-60 shrink-0 flex flex-col justify-between gap-6">
                <div>
                  <span className="font-display font-bold text-[11px] tracking-[0.18em] block mb-4" style={{ color: T.muted }}>{p.num}</span>
                  <span className="font-body font-semibold text-[11px] tracking-[0.14em] uppercase block mb-3" style={{ color: T.accent }}>{p.category}</span>
                  <h3 className="font-display font-bold leading-tight transition-colors duration-200 group-hover:text-[#5BC8E8]"
                    style={{ fontSize: 'clamp(1.4rem,2.5vw,2.2rem)', letterSpacing: '-0.025em', color: T.heading }}>
                    {p.title}
                  </h3>
                </div>
                <div>
                  <div className="font-display font-bold leading-none mb-1" style={{ fontSize: 'clamp(2rem,3.5vw,2.8rem)', letterSpacing: '-0.04em', background: 'linear-gradient(135deg,#5BC8E8,#9BE4F5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    {p.metric}
                  </div>
                  <div className="font-body text-[11px] tracking-[0.1em] uppercase" style={{ color: T.muted }}>{p.metricLabel}</div>
                </div>
              </div>

              {/* Center: description + tags */}
              <div className="flex-1 flex flex-col justify-between gap-5">
                <p className="font-body text-[1.05rem] leading-relaxed max-w-lg" style={{ color: T.body }}>{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="font-body text-[11px] px-3 py-1.5 rounded-full font-medium"
                      style={{ border: `1px solid rgba(10,15,26,0.1)`, color: T.muted, background: 'rgba(10,15,26,0.03)' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: mock UI */}
              <div className="lg:w-72 xl:w-80 shrink-0 rounded-2xl overflow-hidden transition-transform duration-400 group-hover:-translate-y-2" style={{ minHeight: '200px' }}>
                <MockUI lines={p.mockLines} accent={p.accent} bg={p.bg} />
              </div>

              <div className="hidden lg:flex items-start pt-2">
                <ArrowUpRight size={20} className="transition-all duration-250 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ color: T.muted }} />
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  )
}
