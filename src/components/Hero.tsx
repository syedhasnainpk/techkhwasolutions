import { lazy, Suspense, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'

const HeroScene = lazy(() => import('./HeroScene'))

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const sceneY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col overflow-hidden" style={{ background: '#0A0F1A' }}>

      {/* Column grid lines — Dylan's signature layout grid */}
      <div className="col-grid absolute inset-0 z-0">
        {[0,1,2,3,4].map(i => <span key={i} />)}
      </div>

      {/* 3D Scene — parallax down on scroll */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: sceneY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.8, ease: 'easeOut' }}
      >
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </motion.div>

      {/* Dark overlay + vignette */}
      <div className="absolute inset-0 z-1 pointer-events-none" style={{ background: 'rgba(10,15,26,0.55)' }} />
      <div className="absolute inset-0 z-1 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 110% 80% at 70% 40%, transparent 30%, rgba(10,15,26,0.9) 100%)' }} />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col flex-1 max-w-[1440px] mx-auto px-8 w-full">

        {/* Spacer for navbar */}
        <div className="h-28 shrink-0" />

        {/* Label row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#5BC8E8]" />
          <span className="nav-label text-white/35">
            CUSTOM SOFTWARE + DIGITAL ENGINEERING
          </span>
        </motion.div>

        {/* MASSIVE display headline */}
        <div className="flex-1 flex flex-col justify-center -mt-8">
          <h1 className="display-xl text-white overflow-visible" style={{ fontSize: 'clamp(4.5rem, 14vw, 16rem)' }}>

            {/* Line 1 */}
            <div className="overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ delay: 0.7, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              >
                ENGINEERING
              </motion.span>
            </div>

            {/* Line 2 — italic, slight opacity shift */}
            <div className="overflow-hidden">
              <motion.span
                className="block italic"
                style={{ color: 'rgba(255,255,255,0.55)', WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ delay: 0.85, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              >
                DIGITAL
              </motion.span>
            </div>

            {/* Line 3 — accent gradient */}
            <div className="overflow-hidden">
              <motion.span
                className="block"
                style={{ background: 'linear-gradient(135deg,#5BC8E8,#9BE4F5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ delay: 1.0, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              >
                EXCELLENCE.
              </motion.span>
            </div>
          </h1>
        </div>

        {/* ── Bottom bar — info + CTAs ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="pb-12 mt-12 flex flex-col lg:flex-row lg:items-end justify-between gap-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          {/* Description */}
          <div className="pt-7">
            <p className="text-white/40 text-[15px] leading-relaxed max-w-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              From custom software to cloud infrastructure —<br />
              TechKhwa Solutions powers businesses across the globe.
            </p>
          </div>

          {/* CTAs */}
          <div className="pt-7 flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/services"
                className="nav-label flex items-center gap-2.5 px-6 py-3 rounded-full transition-all btn-glow"
                style={{ background: '#5BC8E8', color: '#0A0F1A' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                EXPLORE SERVICES
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="nav-label flex items-center gap-2.5 px-6 py-3 rounded-full transition-all"
                style={{ color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.12)' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')}
              >
                BOOK A CALL
              </Link>
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Scroll hint — bottom-center */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
      >
        <div className="w-px h-10 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      </motion.div>
    </section>
  )
}
