import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import LineReveal from './LineReveal'

export default function CTABanner() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])

  return (
    <section ref={ref} id="contact" className="relative overflow-hidden" style={{ background: '#111111' }}>
      {/* Subtle parallax glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          y: bgY,
          background:
            'radial-gradient(ellipse 80% 60% at 50% 60%, rgba(91,200,232,0.04) 0%, transparent 70%)',
        }}
      />
      <div className="col-grid absolute inset-0">
        {[0, 1, 2, 3, 4].map((i) => <span key={i} />)}
      </div>
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'rgba(255,255,255,0.05)' }} />

      <div className="max-w-[1440px] mx-auto px-8 relative z-10 py-36 lg:py-44">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#5BC8E8]" />
          <span className="nav-label text-[#5BC8E8] opacity-60" style={{ fontSize: '10px' }}>
            LET'S BUILD TOGETHER
          </span>
        </motion.div>

        {/* Massive headline with LineReveal */}
        <div className="mb-16">
          <h2 className="display-xl text-white" style={{ fontSize: 'clamp(2.8rem,7vw,8rem)' }}>
            <LineReveal delay={0.05} trigger="view">YOUR TECHNOLOGY</LineReveal>
            <LineReveal delay={0.2} trigger="view">PARTNER,</LineReveal>
            <LineReveal delay={0.35} trigger="view">
              <span
                style={{
                  background: 'linear-gradient(135deg,#5BC8E8,#9BE4F5)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                NOT JUST A DEV TEAM.
              </span>
            </LineReveal>
          </h2>
        </div>

        {/* Bottom row */}
        <div
          className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '3rem' }}
        >
          {/* Description + trust signals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="flex flex-col gap-6 max-w-md"
          >
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,0.4)' }}>
              We embed with your team, align with your goals, and stay accountable through every sprint —
              from first line of code to long-term scale.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              {['End-to-end ownership', 'On schedule', 'Always available'].map((t, i) => (
                <motion.div
                  key={t}
                  className="flex items-center gap-1.5"
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                >
                  <span className="w-1 h-1 rounded-full bg-[#5BC8E8] opacity-60" />
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.3)' }}>
                    {t}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="flex flex-col gap-4"
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="nav-label flex items-center gap-2.5 px-8 py-4 rounded-full transition-all btn-glow"
                style={{ background: '#5BC8E8', color: '#111111', fontSize: '12px' }}
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
