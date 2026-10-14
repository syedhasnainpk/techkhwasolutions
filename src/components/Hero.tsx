import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring, useMotionTemplate } from 'framer-motion'

const TS: React.CSSProperties = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontWeight: 800,
  lineHeight: 0.9,
  letterSpacing: '-0.04em',
  textTransform: 'uppercase',
  display: 'block',
}

function LineReveal({
  children,
  delay = 0,
  style,
}: {
  children: React.ReactNode
  delay?: number
  style?: React.CSSProperties
}) {
  return (
    <div style={{ overflow: 'hidden' }}>
      <motion.span
        style={{ display: 'block', ...style }}
        initial={{ y: '110%' }}
        animate={{ y: '0%' }}
        transition={{ delay, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </div>
  )
}

function LaptopUI() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: '#0A0A0A',
        display: 'flex',
        flexDirection: 'column',
        padding: '16px',
        gap: 12,
      }}
    >
      {/* Traffic-light dots */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
        <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(255,255,255,0.12)' }} />
        <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
        <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
        <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.04)', marginLeft: 8 }} />
      </div>
      <div style={{ height: 8, width: '70%', background: 'rgba(255,255,255,0.18)', borderRadius: 2 }} />
      <div style={{ height: 5, width: '50%', background: 'rgba(255,255,255,0.07)', borderRadius: 2 }} />
      <div style={{ height: 1, background: 'rgba(255,255,255,0.05)', margin: '4px 0' }} />
      {/* Stat cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>
        {['#5BC8E8', 'rgba(255,255,255,0.3)', 'rgba(255,255,255,0.2)'].map((c, i) => (
          <div
            key={i}
            style={{
              padding: '8px 10px',
              background: 'rgba(255,255,255,0.03)',
              borderRadius: 4,
              border: '1px solid rgba(255,255,255,0.05)',
            }}
          >
            <div
              style={{
                height: 10,
                width: '60%',
                background: c,
                borderRadius: 2,
                marginBottom: 5,
                opacity: i === 0 ? 0.7 : 1,
              }}
            />
            <div style={{ height: 4, width: '80%', background: 'rgba(255,255,255,0.06)', borderRadius: 2 }} />
          </div>
        ))}
      </div>
      {/* Bar chart */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: 4, padding: '8px 0 0' }}>
        {[0.3, 0.55, 0.4, 0.75, 0.5, 0.9, 0.65, 0.45, 0.8, 0.6, 0.35, 0.7].map((h, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: `${h * 100}%`,
              background: i === 6 ? 'rgba(91,200,232,0.6)' : 'rgba(255,255,255,0.08)',
              borderRadius: '2px 2px 0 0',
            }}
          />
        ))}
      </div>
      <div style={{ height: 1, background: 'rgba(255,255,255,0.06)' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {['JAN', 'MAR', 'MAY', 'JUL', 'SEP', 'NOV'].map((m) => (
          <span
            key={m}
            style={{
              fontFamily: 'Inter,sans-serif',
              fontSize: 7,
              color: 'rgba(255,255,255,0.2)',
              letterSpacing: '0.05em',
            }}
          >
            {m}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end end'],
  })

  // Spring-smoothed scroll for butter-soft easing
  const smooth = useSpring(scrollYProgress, { stiffness: 55, damping: 22, restDelta: 0.001 })

  // ── Text column fades out first ──────────────────────────────
  const textOpacity = useTransform(smooth, [0, 0.18], [1, 0])
  const textY       = useTransform(smooth, [0, 0.22], [0, -50])
  const barOpacity  = useTransform(smooth, [0, 0.14], [1, 0])

  // ── Laptop fades as video appears ────────────────────────────
  const laptopOpacity = useTransform(smooth, [0.12, 0.28], [1, 0])

  // ── Video overlay ─────────────────────────────────────────────
  const videoOpacity = useTransform(smooth, [0.14, 0.32], [0, 1])

  // Clip-path: expands from where the laptop screen sits (right side)
  // to fill the full viewport. Values tuned for desktop 1280px.
  // inset(top% right% bottom% left%)
  const clipTop    = useTransform(smooth, [0.16, 0.75], [27, 0])
  const clipRight  = useTransform(smooth, [0.16, 0.75], [8, 0])
  const clipBottom = useTransform(smooth, [0.16, 0.75], [27, 0])
  const clipLeft   = useTransform(smooth, [0.16, 0.75], [51, 0])
  const clipRadius = useTransform(smooth, [0.16, 0.55], [12, 0])
  const videoClipPath = useMotionTemplate`inset(${clipTop}% ${clipRight}% ${clipBottom}% ${clipLeft}% round ${clipRadius}px)`

  // ── Scroll hint bounces then disappears ──────────────────────
  const hintOpacity = useTransform(smooth, [0, 0.07], [1, 0])

  // Parallax for column grid
  const gridY = useTransform(smooth, [0, 1], ['0%', '8%'])

  return (
    // 300vh gives 200vh of scroll travel while the section is pinned
    <div ref={scrollRef} style={{ height: '300vh' }}>
      <section
        className="relative overflow-hidden"
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          background: '#111111',
        }}
      >
        {/* Column grid — subtle parallax */}
        <motion.div
          className="col-grid absolute inset-0 z-[1]"
          style={{ y: gridY }}
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} />
          ))}
        </motion.div>

        {/* ── MAIN CONTENT: two-column layout ───────────────── */}
        <motion.div
          className="relative z-[2] w-full h-full max-w-[1440px] mx-auto px-8 lg:px-16 flex flex-col"
          style={{ opacity: textOpacity, y: textY }}
        >
          {/* Center content vertically */}
          <div
            className="flex-1 flex items-center"
            style={{ paddingTop: '5rem' }}
          >
            <div className="w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-0">

              {/* ── LEFT: Typography ── */}
              <div className="flex-1 lg:pr-8">
                {/* Overline */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-3 mb-10"
                >
                  <div style={{ width: 24, height: 1, background: '#5BC8E8' }} />
                  <span
                    style={{
                      fontFamily: 'Inter,sans-serif',
                      fontSize: '11px',
                      letterSpacing: '0.16em',
                      color: 'rgba(255,255,255,0.4)',
                      textTransform: 'uppercase',
                    }}
                  >
                    Custom Software · Digital Engineering
                  </span>
                </motion.div>

                {/* Headline */}
                <div style={{ marginBottom: '2.5rem' }}>
                  <LineReveal
                    delay={0.35}
                    style={{ ...TS, fontSize: 'clamp(3.2rem,7.5vw,10rem)', color: '#FFFFFF' }}
                  >
                    ENGINEERING
                  </LineReveal>
                  <LineReveal
                    delay={0.5}
                    style={{
                      ...TS,
                      fontSize: 'clamp(3.2rem,7.5vw,10rem)',
                      color: 'rgba(255,255,255,0.28)',
                      fontStyle: 'italic',
                    }}
                  >
                    DIGITAL
                  </LineReveal>
                  <LineReveal
                    delay={0.65}
                    style={{
                      ...TS,
                      fontSize: 'clamp(3.2rem,7.5vw,10rem)',
                      background: 'linear-gradient(135deg, #5BC8E8 0%, #9BE4F5 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    EXCELLENCE.
                  </LineReveal>
                </div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.85, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    fontFamily: 'Inter,sans-serif',
                    fontSize: '15px',
                    color: 'rgba(255,255,255,0.32)',
                    lineHeight: 1.7,
                    maxWidth: '26rem',
                  }}
                >
                  From custom software to cloud infrastructure —
                  TechKhwa Solutions powers businesses across the globe.
                </motion.p>
              </div>

              {/* ── RIGHT: 3D Laptop (lg+ only) ── */}
              <motion.div
                className="hidden lg:flex w-[48%] shrink-0 items-center justify-center"
                style={{ opacity: laptopOpacity }}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <div style={{ width: '100%', maxWidth: 560 }}>
                  <div
                    style={{
                      transform: 'perspective(1400px) rotateY(-8deg) rotateX(3deg)',
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {/* Lid */}
                    <div
                      style={{
                        background: 'linear-gradient(160deg, #1C2233 0%, #111827 100%)',
                        borderRadius: '14px 14px 0 0',
                        border: '1.5px solid rgba(255,255,255,0.1)',
                        borderBottom: '1px solid rgba(255,255,255,0.04)',
                        padding: '10px 10px 0',
                        boxShadow:
                          '0 60px 160px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.07)',
                      }}
                    >
                      <div
                        style={{
                          height: 6,
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          marginBottom: 6,
                        }}
                      >
                        <div
                          style={{
                            width: 4,
                            height: 4,
                            borderRadius: '50%',
                            background: 'rgba(255,255,255,0.12)',
                          }}
                        />
                      </div>
                      {/* Screen */}
                      <div
                        style={{
                          position: 'relative',
                          background: '#0A0A0A',
                          borderRadius: '6px 6px 0 0',
                          overflow: 'hidden',
                          aspectRatio: '16 / 10',
                          border: '1px solid rgba(255,255,255,0.06)',
                          borderBottom: 'none',
                        }}
                      >
                        <LaptopUI />
                        <div
                          style={{
                            position: 'absolute',
                            inset: 0,
                            pointerEvents: 'none',
                            background:
                              'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 50%)',
                            zIndex: 10,
                          }}
                        />
                      </div>
                    </div>
                    {/* Base */}
                    <div
                      style={{
                        height: 18,
                        background: 'linear-gradient(180deg, #161D2E 0%, #0E1420 100%)',
                        borderRadius: '0 0 7px 7px',
                        border: '1.5px solid rgba(255,255,255,0.07)',
                        borderTop: '2px solid rgba(255,255,255,0.12)',
                      }}
                    />
                    {/* Ground shadow */}
                    <div
                      style={{
                        height: 4,
                        margin: '0 5%',
                        background: 'rgba(0,0,0,0.6)',
                        borderRadius: '0 0 50% 50%',
                        filter: 'blur(8px)',
                      }}
                    />
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>

        {/* ── VIDEO OVERLAY: clip-path expands from laptop screen ── */}
        <motion.div
          className="absolute inset-0 z-[15]"
          style={{
            opacity: videoOpacity,
            clipPath: videoClipPath,
          }}
        >
          {/*
            DROP YOUR SHOWREEL HERE:
            Place a video file at public/videos/showreel.mp4
            The video will auto-play, loop, and fill the screen.
          */}
          <video
            src="/videos/showreel.mp4"
            autoPlay
            muted
            loop
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          {/* Fallback background when no video file */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #0A0A0A 0%, #0E1A2E 50%, #0A0A0A 100%)',
              pointerEvents: 'none',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <span
                style={{
                  fontFamily: 'Inter,sans-serif',
                  fontSize: '11px',
                  letterSpacing: '0.18em',
                  color: 'rgba(255,255,255,0.25)',
                  textTransform: 'uppercase',
                }}
              >
                Add /videos/showreel.mp4
              </span>
            </div>
          </div>
          {/* Bottom fade */}
          <div
            className="absolute bottom-0 inset-x-0 h-40 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(17,17,17,0.85))' }}
          />
        </motion.div>

        {/* ── BOTTOM BAR ── */}
        <motion.div
          className="absolute bottom-0 inset-x-0 z-[10] max-w-[1440px] mx-auto px-8 lg:px-16 pb-8 w-full"
          style={{ opacity: barOpacity }}
        >
          <div
            style={{
              borderTop: '1px solid rgba(255,255,255,0.06)',
              paddingTop: '1.25rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontFamily: 'Inter,sans-serif',
                fontSize: '10px',
                color: 'rgba(255,255,255,0.2)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
              }}
            >
              TechKhwa Solutions &nbsp;·&nbsp; Karachi, Pakistan
            </span>
            <span
              style={{
                fontFamily: 'Inter,sans-serif',
                fontSize: '10px',
                color: 'rgba(255,255,255,0.15)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              Est. 2022
            </span>
          </div>
        </motion.div>

        {/* ── SCROLL HINT ── */}
        <motion.div
          className="absolute bottom-10 left-1/2 z-[8]"
          style={{ opacity: hintOpacity, x: '-50%' }}
        >
          <motion.div
            className="flex flex-col items-center gap-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span
              style={{
                fontFamily: 'Inter,sans-serif',
                fontSize: '9px',
                color: 'rgba(255,255,255,0.25)',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              Scroll
            </span>
            <div
              style={{
                width: 1,
                height: 36,
                background: 'linear-gradient(to bottom, rgba(91,200,232,0.5), transparent)',
              }}
            />
          </motion.div>
        </motion.div>

      </section>
    </div>
  )
}
