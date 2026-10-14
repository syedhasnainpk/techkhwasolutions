import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function CTABanner() {
  return (
    <section id="contact" className="relative overflow-hidden" style={{ background: '#0A0F1A' }}>
      {/* Column grid */}
      <div className="col-grid absolute inset-0">
        {[0,1,2,3,4].map(i => <span key={i} />)}
      </div>
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'rgba(255,255,255,0.05)' }} />

      <div className="max-w-[1440px] mx-auto px-8 relative z-10 py-28 lg:py-36">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.01 }}
          transition={{ duration: 0.55 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#5BC8E8]" />
          <span className="nav-label text-[#5BC8E8] opacity-60" style={{ fontSize: '10px' }}>LET'S BUILD TOGETHER</span>
        </motion.div>

        {/* Massive headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.01 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <h2 className="display-xl text-white" style={{ fontSize: 'clamp(2.8rem,7vw,8rem)' }}>
            YOUR TECHNOLOGY<br />
            PARTNER,
            <span className="block" style={{ background: 'linear-gradient(135deg,#5BC8E8,#9BE4F5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              NOT JUST A DEV TEAM.
            </span>
          </h2>
        </motion.div>

        {/* Bottom row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '3rem' }}>

          {/* Description + trust signals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.01 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="flex flex-col gap-6 max-w-md"
          >
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,0.4)' }}>
              We embed with your team, align with your goals, and stay accountable through every sprint —
              from first line of code to long-term scale.
            </p>
            <div className="flex items-center gap-4">
              {['End-to-end ownership', 'On schedule', 'Always available'].map((t) => (
                <div key={t} className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#5BC8E8] opacity-60" />
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.3)' }}>{t}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.01 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="flex flex-col gap-4"
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="nav-label flex items-center gap-2.5 px-8 py-4 rounded-full transition-all btn-glow"
                style={{ background: '#5BC8E8', color: '#0A0F1A', fontSize: '12px' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                START THE CONVERSATION
              </Link>
            </motion.div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.18)', textAlign: 'center' }}>
              Free discovery call · Reply within 2 hours
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
