import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const pillars = [
  { num: '01', title: 'Expert Team',        body: 'Seasoned engineers with 5–12 years of experience embedded into your workflow.' },
  { num: '02', title: 'Agile Delivery',     body: '2-week sprints. Transparent standups. Zero surprises at go-live.' },
  { num: '03', title: '24 / 7 Support',     body: 'Round-the-clock monitoring and SLA-backed incident response — always on.' },
  { num: '04', title: 'Scalable by Design', body: 'Architectures built to handle 10× growth from day one — no rewrites required.' },
]

const T = { border: 'rgba(10,15,26,0.07)', body: '#4B5563', muted: '#9CA3AF', accent: '#5BC8E8' }

export default function WhyTechKhwa() {
  return (
    <section id="about" className="relative overflow-hidden" style={{ background: '#FFFFFF' }}>
      <div className="col-grid col-grid-light absolute inset-0">
        {[0,1,2,3,4].map(i => <span key={i} />)}
      </div>

      <div className="max-w-[1440px] mx-auto px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.01 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="pt-24 pb-14 grid grid-cols-1 lg:grid-cols-2 gap-16 items-end"
          style={{ borderBottom: `1px solid ${T.border}` }}
        >
          <div>
            <span className="nav-label block mb-4" style={{ fontSize: '10px', color: T.accent, opacity: 0.7 }}>WHY TECHKHWA</span>
            <h2 className="display-xl" style={{ fontSize: 'clamp(2.8rem,6vw,6.5rem)', color: '#0A0F1A' }}>
              WE DON'T<br />JUST BUILD
              <span className="block" style={{ background: 'linear-gradient(135deg,#5BC8E8,#9BE4F5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                SOFTWARE.
              </span>
            </h2>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.75, color: T.body, maxWidth: '26rem' }}>
            We treat every project as a long-term partnership — not a ticket to close.
            Our engineers stay accountable through delivery and beyond, because the real test is what happens after launch.
          </p>
        </motion.div>

        {/* Pillars — editorial numbered list */}
        <div style={{ borderBottom: `1px solid ${T.border}` }}>
          {pillars.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.01 }}
              transition={{ delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="group grid grid-cols-12 items-center gap-6 py-8 hover:pl-2 transition-all duration-300"
              style={{ borderTop: `1px solid ${T.border}` }}
            >
              <span className="col-span-2 lg:col-span-1 nav-label" style={{ fontSize: '10px', color: T.muted }}>{p.num}</span>
              <h3
                className="col-span-10 lg:col-span-4 font-display font-bold leading-tight group-hover:text-[#5BC8E8] transition-colors duration-200"
                style={{ fontSize: 'clamp(1.2rem,2.2vw,1.7rem)', letterSpacing: '-0.02em', color: '#0A0F1A' }}
              >
                {p.title}
              </h3>
              <div className="hidden lg:block lg:col-span-1">
                <div className="w-full h-px" style={{ background: `rgba(91,200,232,0.2)` }} />
              </div>
              <p className="col-span-12 lg:col-span-6 text-[0.9rem] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', color: T.body }}>
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer row */}
        <div className="py-8 flex items-center justify-between">
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: T.muted }}>Trusted by 15+ clients globally</span>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/about"
              className="nav-label flex items-center gap-2.5 transition-colors"
              style={{ fontSize: '11px', color: T.body }}
            >
              MORE ABOUT US
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
