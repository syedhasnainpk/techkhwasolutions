import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'

const TS: React.CSSProperties = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontWeight: 800,
  lineHeight: 0.88,
  letterSpacing: '-0.04em',
  textTransform: 'uppercase',
  display: 'block',
  whiteSpace: 'nowrap',
}

/* Masked line reveal — text slides up from behind bottom edge of its own line box */
function LineReveal({ children, delay = 0, style }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  return (
    <div style={{ overflow: 'hidden', lineHeight: 0.92 }}>
      <motion.span
        style={{ display: 'block', ...style }}
        initial={{ y: '105%', opacity: 0 }}
        animate={{ y: '0%', opacity: 1 }}
        transition={{ delay, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </div>
  )
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const textY   = useTransform(scrollYProgress, [0, 1], ['0%', '14%'])
  const laptopY = useTransform(scrollYProgress, [0, 1], ['0%', '8%'])

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ height: '100vh', background: '#0A0F1A' }}>

      {/* Subtle column grid */}
      <div className="col-grid absolute inset-0 z-[1]">
        {[0,1,2,3,4].map(i => <span key={i} />)}
      </div>

      {/* Top-left label — also a masked reveal */}
      <div className="absolute z-[30] flex items-center gap-2" style={{ top: '8rem', left: '4vw', overflow: 'hidden' }}>
        <motion.div
          className="flex items-center gap-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#5BC8E8' }} />
          <span className="nav-label" style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.14em' }}>
            CUSTOM SOFTWARE + DIGITAL ENGINEERING
          </span>
        </motion.div>
      </div>

      {/* MASSIVE STACKED TYPOGRAPHY — behind laptop */}
      <motion.div
        className="absolute inset-0 z-[2] flex flex-col justify-center select-none pointer-events-none"
        style={{ padding: '0 3vw', y: textY }}
      >
        <LineReveal delay={0.5} style={{ ...TS, fontSize: 'clamp(3.5rem,13.5vw,17rem)', color: 'rgba(255,255,255,0.16)' }}>
          ENGINEERING
        </LineReveal>
        <LineReveal delay={0.65} style={{ ...TS, fontSize: 'clamp(3.5rem,13.5vw,17rem)', color: 'rgba(255,255,255,0.10)', fontStyle: 'italic' }}>
          DIGITAL
        </LineReveal>
        <LineReveal
          delay={0.8}
          style={{
            ...TS,
            fontSize: 'clamp(3.5rem,13.5vw,17rem)',
            background: 'linear-gradient(135deg, rgba(91,200,232,0.55) 0%, rgba(155,228,245,0.45) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          EXCELLENCE.
        </LineReveal>
      </motion.div>

      {/* 3D LAPTOP MOCKUP — above text */}
      <div
        className="absolute z-[10] hidden md:block"
        style={{ top: '50%', left: '56%', transform: 'translate(-44%, -50%)', width: 'clamp(320px, 44vw, 700px)' }}
      >
        <motion.div
          style={{ y: laptopY }}
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div style={{ transform: 'perspective(1400px) rotateY(-9deg) rotateX(4deg)', transformStyle: 'preserve-3d' }}>

            {/* Lid */}
            <div style={{
              background: 'linear-gradient(160deg, #161D2E 0%, #0D1220 100%)',
              borderRadius: '14px 14px 0 0',
              border: '1.5px solid rgba(255,255,255,0.12)',
              borderBottom: '1px solid rgba(255,255,255,0.05)',
              padding: '10px 10px 0',
              boxShadow: '0 50px 140px rgba(0,0,0,0.75), inset 0 1px 0 rgba(255,255,255,0.08)',
            }}>
              <div style={{ height: 6, display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 7 }}>
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'rgba(255,255,255,0.15)' }} />
              </div>

              {/* Screen */}
              <div style={{
                position: 'relative', background: '#050B13', borderRadius: '6px 6px 0 0',
                overflow: 'hidden', aspectRatio: '16 / 10',
                border: '1px solid rgba(255,255,255,0.06)', borderBottom: 'none',
              }}>
                {/*
                  ADD YOUR VIDEO:
                  1. Place your file in /public  e.g. public/showreel.mp4
                  2. Uncomment the <source> line below
                  3. Delete the placeholder <div>
                */}
                <video autoPlay muted loop playsInline
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }}>
                  {/* <source src="/showreel.mp4" type="video/mp4" /> */}
                </video>

                {/* PLACEHOLDER — remove once video is added */}
                <div style={{
                  position: 'absolute', inset: 0, zIndex: 2,
                  background: '#080F1D',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10,
                }}>
                  <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }} />
                  <div style={{
                    position: 'relative', width: 38, height: 38, borderRadius: '50%',
                    border: '1px solid rgba(91,200,232,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M3 2L10 6L3 10V2Z" fill="rgba(91,200,232,0.5)" />
                    </svg>
                  </div>
                  <span style={{ position: 'relative', fontFamily: 'Inter,sans-serif', fontSize: 9, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.18)', textTransform: 'uppercase' }}>
                    Add showreel video
                  </span>
                </div>

                {/* Glare */}
                <div style={{ position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none', background: 'linear-gradient(135deg, rgba(255,255,255,0.025) 0%, transparent 45%)' }} />
              </div>
            </div>

            {/* Base */}
            <div style={{
              height: 16,
              background: 'linear-gradient(180deg, #131928 0%, #0B1020 100%)',
              borderRadius: '0 0 6px 6px',
              border: '1.5px solid rgba(255,255,255,0.07)',
              borderTop: '2px solid rgba(255,255,255,0.13)',
            }} />
            <div style={{ height: 3, margin: '0 6%', background: 'rgba(0,0,0,0.5)', borderRadius: '0 0 50% 50%', filter: 'blur(5px)' }} />
          </div>
        </motion.div>
      </div>

      {/* BOTTOM BAR */}
      <motion.div
        className="absolute bottom-0 inset-x-0 z-[30]"
        style={{ padding: '0 4vw 2.5rem' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.5rem' }}
        >
          {/* Left */}
          <div className="flex flex-col gap-4">
            <button
              className="nav-label flex items-center gap-2.5 px-5 py-2.5 rounded-full w-fit"
              style={{
                background: 'rgba(20,26,42,0.9)', border: '1px solid rgba(255,255,255,0.1)',
                color: '#fff', fontSize: '11px', cursor: 'pointer', backdropFilter: 'blur(8px)',
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

          {/* Right */}
          <div className="flex flex-col items-start sm:items-end gap-4">
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '14px', color: 'rgba(255,255,255,0.33)', lineHeight: 1.65, maxWidth: '22rem', textAlign: 'right' }}>
              From custom software to cloud infrastructure —<br />
              TechKhwa Solutions powers businesses across the globe.
            </p>
            <div className="flex items-center gap-3">
              <Link
                to="/services"
                className="nav-label flex items-center gap-2 px-6 py-3 rounded-full"
                style={{ background: '#5BC8E8', color: '#0A0F1A', fontSize: '11px' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                EXPLORE SERVICES
              </Link>
              <Link
                to="/contact"
                className="nav-label px-6 py-3 rounded-full"
                style={{ color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.1)', fontSize: '11px' }}
              >
                BOOK A CALL
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

    </section>
  )
}
