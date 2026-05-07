import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import HeroScene from './HeroScene'

const word = (text: string, offset: number, cls = '') => (
  <motion.span
    className={`inline-block ${cls}`}
    initial={{ opacity: 0, y: 32 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.8 + offset, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
  >
    {text}
  </motion.span>
)

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-24 overflow-hidden">

      {/* ─── 3D Scene — fades in from dark ─── */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.4, ease: 'easeOut' }}
      >
        <HeroScene />
      </motion.div>

      {/* ─── Overlays ─── */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: '#0A0F1A', opacity: 0.4 }} />
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 90% 90% at 65% 45%, transparent 35%, rgba(10,15,26,0.85) 100%)' }}
      />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full blur-[130px] animate-float pointer-events-none" style={{ background: 'rgba(91,200,232,0.07)' }} />
      <div className="absolute bottom-1/4 right-1/5 w-[380px] h-[380px] rounded-full blur-[100px] animate-float pointer-events-none" style={{ background: 'rgba(91,200,232,0.05)', animationDelay: '3s' }} />

      {/* ─── Content — emerges from the background ─── */}
      <motion.div
        className="relative z-10 max-w-[1440px] mx-auto px-8 w-full"
        initial={{ opacity: 0, filter: 'blur(18px)', scale: 1.04 }}
        animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
        transition={{ duration: 2.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Headline */}
        <h1
          className="font-display font-bold mb-10 overflow-visible"
          style={{ fontSize: 'clamp(3.2rem,7.5vw,6.8rem)', lineHeight: '0.96', letterSpacing: '-0.03em', color: '#FFFFFF' }}
        >
          <div className="overflow-hidden">{word('Engineering', 0)}</div>
          <div className="overflow-hidden">{word('Digital', 0.12)}{' '}{word('Excellence', 0.22)}</div>
          <div className="overflow-hidden">
            <motion.span
              className="inline-block"
              style={{ background: 'linear-gradient(135deg,#5BC8E8,#9BE4F5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.06, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            >
              — Today.
            </motion.span>
          </div>
        </h1>

        {/* Bottom row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-body text-[1.1rem] leading-relaxed max-w-md"
            style={{ color: 'rgba(255,255,255,0.55)', letterSpacing: '-0.005em' }}
          >
            From custom software to cloud infrastructure —
            TechKhwa Solutions powers businesses
            across the globe.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.45, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <motion.a
              href="#services"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-body font-semibold text-[14px] btn-glow transition-all"
              style={{ background: '#5BC8E8', color: '#0A0F1A' }}
            >
              Explore Services
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-body font-semibold text-[14px] transition-all"
              style={{ color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.18)' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.38)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)')}
            >
              Book a Consultation
            </motion.a>
          </motion.div>
        </div>

      </motion.div>
    </section>
  )
}
