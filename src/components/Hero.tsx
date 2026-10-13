import { lazy, Suspense, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'

const HeroScene = lazy(() => import('./HeroScene'))

const TS: React.CSSProperties = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontWeight: 800,
  lineHeight: 0.88,
  letterSpacing: '-0.04em',
  textTransform: 'uppercase',
  display: 'block',
  whiteSpace: 'nowrap',
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const sceneY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const textY  = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ height: '100vh', background: '#0A0F1A' }}>

      {/* Column grid */}
      <div className="col-grid absolute inset-0 z-[1]">
        {[0,1,2,3,4].map(i => <span key={i} />)}
      </div>

      {/* 3D neural scene — very subtle */}
      <motion.div
        className="absolute inset-0 z-[1]"
        style={{ y: sceneY, opacity: 0.07 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.07 }}
        transition={{ duration: 3, ease: 'easeOut' }}
      >
        <Suspense fallback={null}><HeroScene /></Suspense>
      </motion.div>

      {/* Top-left label */}
      <motion.div
        className="absolute z-[30] flex items-center gap-2"
        style={{ top: '8rem', left: '4vw' }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#5BC8E8' }} />
        <span className="nav-label" style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.14em' }}>
          CUSTOM SOFTWARE + DIGITAL ENGINEERING
        </span>
      </motion.div>

      {/* MASSIVE STACKED TYPOGRAPHY — behind laptop */}
      <motion.div
        className="absolute inset-0 z-[2] flex flex-col justify-center select-none pointer-events-none"
        style={{ padding: '0 3vw', y: textY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1.2 }}
      >
        <motion.span
          style={{ ...TS, fontSize: 'clamp(3.5rem,13.5vw,17rem)', color: 'rgba(255,255,255,0.16)' }}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.55, duration: 1.1, ease: [0.22,1,0.36,1] }}
        >
          ENGINEERING
        </motion.span>

        <motion.span
          style={{ ...TS, fontSize: 'clamp(3.5rem,13.5vw,17rem)', color: 'rgba(255,255,255,0.10)', fontStyle: 'italic' }}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 1.1, ease: [0.22,1,0.36,1] }}
        >
          DIGITAL
        </motion.span>

        <motion.span
          style={{
            ...TS,
            fontSize: 'clamp(3.5rem,13.5vw,17rem)',
            background: 'linear-gradient(135deg, rgba(91,200,232,0.55) 0%, rgba(155,228,245,0.45) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.85, duration: 1.1, ease: [0.22,1,0.36,1] }}
        >
          EXCELLENCE.
        </motion.span>
      </motion.div>

      {/* 3D LAPTOP MOCKUP — above text */}
      <div
        className="absolute z-[10] hidden md:block"
        style={{ top: '50%', left: '56%', transform: 'translate(-44%, -50%)', width: 'clamp(320px, 44vw, 700px)' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 1.3, ease: [0.22,1,0.36,1] }}
        >
          <div style={{ transform: 'perspective(1400px) rotateY(-9deg) rotateX(4deg)', transformStyle: 'preserve-3d' }}>

            {/* Lid */}
            <div style={{
              background: 'linear-gradient(160deg, #161D2E 0%, #0D1220 100%)',
              borderRadius: '14px 14px 0 0',
              border: '1.5px solid rgba(255,255,255,0.12)',
              borderBottom: '1px solid rgba(255,255,255,0.05)',
              padding: '10px 10px 0',
              boxShadow: '0 50px 140px rgba(0,0,0,0.75), 0 0 0 1px rgba(255,255,255,0.03), inset 0 1px 0 rgba(255,255,255,0.08)',
            }}>
              {/* Camera dot */}
              <div style={{ height: 6, display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 7 }}>
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', boxShadow: '0 0 0 1px rgba(255,255,255,0.06)' }} />
              </div>

              {/* Screen area */}
              <div style={{
                position: 'relative',
                background: '#050B13',
                borderRadius: '6px 6px 0 0',
                overflow: 'hidden',
                aspectRatio: '16 / 10',
                border: '1px solid rgba(255,255,255,0.06)',
                borderBottom: 'none',
              }}>
                {/*
                  ADD YOUR VIDEO:
                  1. Place your video file in /public (e.g. public/showreel.mp4)
                  2. Add: <source src="/showreel.mp4" type="video/mp4" />
                  3. Remove the placeholder div below
                */}
                <video
                  autoPlay muted loop playsInline
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block', zIndex: 1 }}
                >
                  {/* <source src="/showreel.mp4" type="video/mp4" /> */}
                </video>

                {/* PLACEHOLDER — delete this div once your video is added */}
                <div style={{
                  position: 'absolute', inset: 0, zIndex: 2,
                  background: 'linear-gradient(145deg, #080F1D 0%, #060C18 100%)',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10,
                }}>
                  <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'linear-gradient(rgba(91,200,232,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(91,200,232,0.04) 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                  }} />
                  <div style={{
                    position: 'absolute', width: '60%', height: '60%', top: '20%', left: '20%',
                    background: 'radial-gradient(ellipse at center, rgba(91,200,232,0.06) 0%, transparent 70%)',
                    filter: 'blur(20px)',
                  }} />
                  <div style={{
                    position: 'relative',
                    width: 40, height: 40, borderRadius: '50%',
                    border: '1.5px solid rgba(91,200,232,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                      <path d="M3.5 2.5L11.5 7L3.5 11.5V2.5Z" fill="rgba(91,200,232,0.55)" />
                    </svg>
                  </div>
                  <span style={{ position: 'relative', fontFamily: 'Inter,sans-serif', fontSize: 9, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase' }}>
                    Add showreel video
                  </span>
                </div>

                {/* Screen glare */}
                <div style={{
                  position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 50%)',
                }} />
              </div>
            </div>

            {/* Keyboard base */}
            <div style={{
              height: 16,
              background: 'linear-gradient(180deg, #131928 0%, #0B1020 100%)',
              borderRadius: '0 0 6px 6px',
              border: '1.5px solid rgba(255,255,255,0.07)',
              borderTop: '2px solid rgba(255,255,255,0.13)',
              boxShadow: 'inset 0 -1px 0 rgba(0,0,0,0.4)',
            }} />

            {/* Drop shadow */}
            <div style={{
              height: 4, margin: '0 6%',
              background: 'rgba(0,0,0,0.55)',
              borderRadius: '0 0 50% 50%',
              filter: 'blur(6px)',
            }} />
          </div>
        </motion.div>
      </div>

      {/* BOTTOM BAR */}
      <motion.div
        className="absolute bottom-0 inset-x-0 z-[30]"
        style={{ padding: '0 4vw 2.5rem' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.9, ease: [0.22,1,0.36,1] }}
      >
        <div
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.5rem' }}
        >
          {/* Left: PLAY SHOWREEL + credits */}
          <div className="flex flex-col gap-4">
            <button
              className="nav-label flex items-center gap-2.5 px-5 py-2.5 rounded-full w-fit"
              style={{
                background: 'rgba(20,26,42,0.9)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#fff',
                fontSize: '11px',
                cursor: 'pointer',
                backdropFilter: 'blur(8px)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#5BC8E8' }} />
              PLAY SHOWREEL
            </button>
            <div>
              <div style={{ fontFamily: 'Inter,sans-serif', fontSize: '10px', color: 'rgba(255,255,255,0.22)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                TechKhwa Solutions
              </div>
              <div style={{ fontFamily: 'Inter,sans-serif', fontSize: '10px', color: 'rgba(255,255,255,0.14)', letterSpacing: '0.08em', marginTop: 2 }}>
                PK &nbsp;&oplus;&nbsp; Karachi, Pakistan
              </div>
            </div>
          </div>

          {/* Right: description + CTAs */}
          <div className="flex flex-col items-start sm:items-end gap-4">
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '14px', color: 'rgba(255,255,255,0.33)', lineHeight: 1.65, maxWidth: '22rem', textAlign: 'right' }}>
              From custom software to cloud infrastructure —<br />
              TechKhwa Solutions powers businesses across the globe.
            </p>
            <div className="flex items-center gap-3">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/services"
                  className="nav-label flex items-center gap-2 px-6 py-3 rounded-full btn-glow"
                  style={{ background: '#5BC8E8', color: '#0A0F1A', fontSize: '11px' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  EXPLORE SERVICES
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/contact"
                  className="nav-label px-6 py-3 rounded-full"
                  style={{ color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.1)', fontSize: '11px' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.28)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                >
                  BOOK A CALL
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

    </section>
  )
}
