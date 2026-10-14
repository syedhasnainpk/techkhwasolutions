import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const projects = [
  {
    id: '01',
    client: 'KP Labour Department',
    category: 'GOVERNMENT · DIGITAL PLATFORM',
    metric: '86% PAPER REDUCTION',
    gradient: 'linear-gradient(135deg, #060E1A 0%, #0A2440 40%, #0E3D5C 100%)',
    accent: '#5BC8E8',
    span: 'lg:col-span-7',
    height: 'h-72 lg:h-80',
  },
  {
    id: '02',
    client: 'Auto Accounting',
    category: 'FINANCE · SAAS PLATFORM',
    metric: '68% PRODUCTIVITY BOOST',
    gradient: 'linear-gradient(135deg, #0A0618 0%, #1A1040 40%, #2A1860 100%)',
    accent: '#9BE4F5',
    span: 'lg:col-span-5',
    height: 'h-72 lg:h-80',
  },
  {
    id: '03',
    client: 'Dubai Real Estate',
    category: 'REAL ESTATE · AI PLATFORM',
    metric: '3× LEAD CONVERSION',
    gradient: 'linear-gradient(135deg, #0E0A04 0%, #2A1E08 40%, #3D2C0E 100%)',
    accent: '#F0C040',
    span: 'lg:col-span-5',
    height: 'h-72 lg:h-80',
  },
  {
    id: '04',
    client: 'HomeCuras',
    category: 'HEALTHCARE · MOBILE & WEB',
    metric: '400+ BOOKINGS COMPLETED',
    gradient: 'linear-gradient(135deg, #04100A 0%, #08261A 40%, #0D3828 100%)',
    accent: '#5BC8E8',
    span: 'lg:col-span-7',
    height: 'h-72 lg:h-80',
  },
]

function ProjectCard({ p, delay }: { p: typeof projects[0]; delay: number }) {
  return (
    <motion.div
      className={`group relative rounded-2xl overflow-hidden cursor-pointer ${p.span}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
    >
      <Link to="/case-studies">
        {/* Gradient thumbnail */}
        <div className={`relative ${p.height} overflow-hidden`} style={{ background: p.gradient }}>
          {/* Card content */}
          <div className="absolute inset-0">
            {/* Subtle grid */}
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }} />
            {/* ID watermark */}
            <div
              className="absolute right-6 top-6 font-display font-bold select-none"
              style={{ fontSize: 'clamp(4rem,10vw,9rem)', lineHeight: 1, color: 'rgba(255,255,255,0.04)', letterSpacing: '-0.04em' }}
            >
              {p.id}
            </div>
            {/* Hover overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: `linear-gradient(135deg, transparent 0%, rgba(${p.accent === '#F0C040' ? '240,192,64' : '91,200,232'},0.06) 100%)` }} />
          </div>

          {/* Bottom info bar */}
          <div
            className="absolute bottom-0 inset-x-0 px-5 py-4 flex items-center justify-between"
            style={{ borderTop: '1px solid rgba(255,255,255,0.08)', background: 'rgba(10,15,26,0.6)', backdropFilter: 'blur(8px)' }}
          >
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: p.accent }} />
              <span className="nav-label text-white/90" style={{ fontSize: '10px' }}>{p.client}</span>
            </div>
            <span className="nav-label text-white/35" style={{ fontSize: '9px' }}>{p.category}</span>
          </div>
        </div>

        {/* Metric below card */}
        <div className="pt-3 pb-1 flex items-center justify-between px-1">
          <span className="nav-label text-white/30" style={{ fontSize: '9px' }}>{p.metric}</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="opacity-20 group-hover:opacity-60 transition-opacity duration-300">
            <path d="M2 10L10 2M10 2H4M10 2V8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </Link>
    </motion.div>
  )
}

export default function Portfolio() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#080C14' }}>
      {/* Column grid */}
      <div className="col-grid absolute inset-0">
        {[0,1,2,3,4].map(i => <span key={i} />)}
      </div>

      <div className="max-w-[1440px] mx-auto px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.01 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="pt-24 pb-14 flex flex-col lg:flex-row lg:items-end justify-between gap-6"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
        >
          <div>
            <span className="nav-label text-[#5BC8E8] opacity-60 block mb-4" style={{ fontSize: '10px' }}>OUR WORK</span>
            <h2 className="display-xl text-white" style={{ fontSize: 'clamp(2.8rem,6vw,6.5rem)' }}>
              SELECTED<br />
              <span style={{ background: 'linear-gradient(135deg,#5BC8E8,#9BE4F5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                PROJECTS
              </span>
            </h2>
          </div>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/case-studies"
              className="nav-label flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-1 transition-all"
              style={{ color: '#5BC8E8', border: '1px solid rgba(91,200,232,0.25)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#5BC8E8]" />
              VIEW ALL CASE STUDIES
            </Link>
          </motion.div>
        </motion.div>

        {/* Asymmetric grid */}
        <div className="py-12 grid lg:grid-cols-12 gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} p={p} delay={i * 0.08} />
          ))}
        </div>

      </div>
    </section>
  )
}
