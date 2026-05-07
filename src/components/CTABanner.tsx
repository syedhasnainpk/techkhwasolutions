import { motion } from 'framer-motion'
import { ArrowRight, Shield, Zap, Users } from 'lucide-react'

const pillars = [
  { icon: Shield, label: 'End-to-end ownership' },
  { icon: Zap,    label: 'Delivered on schedule' },
  { icon: Users,  label: 'Dedicated team, always' },
]

export default function CTABanner() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 70% at 50% 100%, rgba(91,200,232,0.07) 0%, transparent 65%)' }}
      />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-8 relative z-10 pt-24 pb-20 lg:pt-32 lg:pb-28">

        {/* ── Top label row ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.01 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4 mb-10"
        >
          <span className="w-8 h-px" style={{ background: '#5BC8E8' }} />
          <span className="font-body font-semibold text-[11px] tracking-[0.18em] uppercase" style={{ color: '#5BC8E8' }}>
            Let's Build Together
          </span>
        </motion.div>

        {/* ── Tagline — full-width statement ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.01 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <h2
            className="font-display font-bold leading-none"
            style={{ fontSize: 'clamp(2.6rem,6.5vw,6rem)', letterSpacing: '-0.035em' }}
          >
            <span className="text-white">Your Technology Partner,</span>
            <br />
            <span style={{ background: 'linear-gradient(135deg,#5BC8E8,#9BE4F5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Not Just a Developer Team.
            </span>
          </h2>
        </motion.div>

        {/* ── Bottom row: copy + pillars + CTA ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.01 }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            <p className="font-body text-[1.05rem] leading-relaxed" style={{ color: 'rgba(255,255,255,0.42)' }}>
              We embed with your team, align with your goals, and stay accountable through every sprint — from first line of code to long-term scale.
            </p>

            {/* Pillars */}
            <div className="flex flex-col gap-3">
              {pillars.map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.01 }}
                  transition={{ delay: 0.22 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-3"
                >
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(91,200,232,0.1)', border: '1px solid rgba(91,200,232,0.2)' }}
                  >
                    <Icon size={13} style={{ color: '#5BC8E8' }} />
                  </div>
                  <span className="font-body text-[0.85rem] font-medium" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    {label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Divider */}
          <div className="hidden lg:flex lg:col-span-1 justify-center">
            <div className="w-px h-32" style={{ background: 'linear-gradient(to bottom, transparent, rgba(91,200,232,0.2), transparent)' }} />
          </div>

          {/* CTA block */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.01 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            {/* Card */}
            <div
              className="rounded-2xl p-8 flex flex-col gap-7"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(91,200,232,0.12)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <div>
                <p className="font-display font-bold text-white text-[1.25rem] leading-snug mb-2">
                  Ready to start something great?
                </p>
                <p className="font-body text-[0.875rem] leading-relaxed" style={{ color: 'rgba(255,255,255,0.38)' }}>
                  Book a free 30-minute discovery call — no pitch, no pressure. Just clarity on how we can help.
                </p>
              </div>

              <motion.a
                href="mailto:info@techkhwasolutions.com"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-body font-semibold text-[14px] btn-glow transition-all"
                style={{ background: '#5BC8E8', color: '#0A0F1A' }}
              >
                Let's Business
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>

              <div className="flex items-center gap-2">
                <div className="flex -space-x-1.5">
                  {['#e879f9','#60a5fa','#34d399'].map((c) => (
                    <div key={c} className="w-6 h-6 rounded-full border-2 border-navy" style={{ background: c }} />
                  ))}
                </div>
                <span className="font-body text-[11px]" style={{ color: 'rgba(255,255,255,0.28)' }}>
                  Trusted by 40+ businesses across the globe
                </span>
              </div>
            </div>

            <p className="font-body text-[11px] tracking-wide text-center" style={{ color: 'rgba(255,255,255,0.18)' }}>
              No commitment required · Free discovery call · Reply within 2 hours
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
