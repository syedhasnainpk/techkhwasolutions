import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

/* ─── Segmented inner cubes (like ccript) ─── */
function CubeMosaic() {
  const grid = 4
  const cellSize = 42
  const gap = 4
  const total = grid * cellSize + (grid - 1) * gap

  return (
    <div className="relative" style={{ width: total, height: total, perspective: '700px' }}>
      {/* Glow */}
      <div className="absolute inset-0 blur-[60px] rounded-full pointer-events-none"
        style={{ background: 'rgba(91,200,232,0.18)', transform: 'scale(1.4)' }} />

      <motion.div
        animate={{ rotateY: [0, 360], rotateX: [12, 18, 12] }}
        transition={{ rotateY: { duration: 18, repeat: Infinity, ease: 'linear' }, rotateX: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
        style={{ width: total, height: total, transformStyle: 'preserve-3d', position: 'relative' }}
      >
        {/* Front face – grid of small cubes */}
        <div
          style={{
            position: 'absolute', width: total, height: total,
            transform: `translateZ(${total / 2}px)`,
            display: 'grid',
            gridTemplateColumns: `repeat(${grid}, ${cellSize}px)`,
            gap: `${gap}px`,
          }}
        >
          {Array.from({ length: grid * grid }).map((_, i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2 + (i % 4) * 0.5, repeat: Infinity, delay: i * 0.1 }}
              style={{
                width: cellSize, height: cellSize,
                background: i % 3 === 0 ? 'rgba(91,200,232,0.45)' : i % 3 === 1 ? 'rgba(91,200,232,0.2)' : 'rgba(91,200,232,0.12)',
                border: '1px solid rgba(91,200,232,0.4)',
                borderRadius: 2,
              }}
            />
          ))}
        </div>

        {/* Top face */}
        <div style={{
          position: 'absolute', width: total, height: total,
          transform: `rotateX(90deg) translateZ(${total / 2}px)`,
          display: 'grid', gridTemplateColumns: `repeat(${grid}, ${cellSize}px)`, gap: `${gap}px`,
        }}>
          {Array.from({ length: grid * grid }).map((_, i) => (
            <div key={i} style={{ width: cellSize, height: cellSize, background: 'rgba(91,200,232,0.08)', border: '1px solid rgba(91,200,232,0.2)', borderRadius: 2 }} />
          ))}
        </div>

        {/* Right face */}
        <div style={{
          position: 'absolute', width: total, height: total,
          transform: `rotateY(90deg) translateZ(${total / 2}px)`,
          display: 'grid', gridTemplateColumns: `repeat(${grid}, ${cellSize}px)`, gap: `${gap}px`,
        }}>
          {Array.from({ length: grid * grid }).map((_, i) => (
            <div key={i} style={{ width: cellSize, height: cellSize, background: 'rgba(91,200,232,0.06)', border: '1px solid rgba(91,200,232,0.18)', borderRadius: 2 }} />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

/* ─── Form field ─── */
function Field({
  label, placeholder, required = false, type = 'text', textarea = false,
}: {
  label: string; placeholder: string; required?: boolean; type?: string; textarea?: boolean
}) {
  const [focused, setFocused] = useState(false)
  const [filled, setFilled] = useState(false)

  const baseStyle: React.CSSProperties = {
    width: '100%', background: 'transparent', outline: 'none',
    color: '#FFFFFF', fontFamily: 'Inter, sans-serif', fontSize: '0.95rem',
    padding: '0.5rem 0', letterSpacing: '-0.01em',
    borderBottom: `1px solid ${focused ? '#5BC8E8' : 'rgba(255,255,255,0.15)'}`,
    transition: 'border-color 0.2s',
    resize: 'none' as const,
  }

  return (
    <div>
      <label style={{
        display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '0.65rem',
        fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase',
        color: focused || filled ? '#5BC8E8' : 'rgba(255,255,255,0.35)',
        marginBottom: '0.5rem', transition: 'color 0.2s',
      }}>
        {label} {required && <span style={{ color: '#5BC8E8' }}>*</span>}
      </label>
      {textarea ? (
        <textarea
          rows={3}
          placeholder={placeholder}
          required={required}
          onFocus={() => setFocused(true)}
          onBlur={e => { setFocused(false); setFilled(e.target.value.length > 0) }}
          style={{ ...baseStyle, display: 'block' }}
          className="placeholder-white/20"
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          required={required}
          onFocus={() => setFocused(true)}
          onBlur={e => { setFocused(false); setFilled(e.target.value.length > 0) }}
          style={baseStyle}
          className="placeholder-white/20"
        />
      )}
    </div>
  )
}

export default function Contact() {
  const [consent, setConsent] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const cubeY = useTransform(scrollYProgress, [0, 1], [-40, 40])

  return (
    <section ref={sectionRef} id="contact-form" className="relative overflow-hidden" style={{ background: '#0A0F1A' }}>
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">

          {/* ─── Left: Visual ─── */}
          <div className="relative flex flex-col justify-between px-8 py-20 border-r border-white/5 overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 60% 60% at 30% 60%, rgba(91,200,232,0.06) 0%, transparent 70%)' }} />

            <div>
              <span className="font-body font-semibold text-[11px] tracking-[0.14em] uppercase block mb-6" style={{ color: '#5BC8E8' }}>
                Get in Touch
              </span>
              <h2 className="font-display font-bold leading-tight" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', letterSpacing: '-0.03em', color: '#FFFFFF' }}>
                How can we
                <br />
                help you{' '}
                <span style={{ background: 'linear-gradient(135deg,#5BC8E8,#9BE4F5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  grow?
                </span>
              </h2>
            </div>

            {/* Animated 3D cube */}
            <motion.div
              style={{ y: cubeY }}
              className="flex items-center justify-center py-16"
            >
              <CubeMosaic />
            </motion.div>

            {/* Bottom info */}
            <div className="space-y-4">
              {[
                { label: 'Email', value: 'info@techkhwasolutions.com' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <div className="font-body text-[10px] tracking-[0.14em] uppercase mb-0.5" style={{ color: 'rgba(255,255,255,0.3)' }}>{label}</div>
                  <div className="font-body text-[0.9rem]" style={{ color: 'rgba(255,255,255,0.65)' }}>{value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ─── Right: Form ─── */}
          <div className="px-8 lg:px-14 py-20 flex flex-col justify-center">
            <motion.form
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.01 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              onSubmit={e => e.preventDefault()}
              className="flex flex-col gap-8"
            >
              {/* Row 1: Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <Field label="Full Name"     placeholder="Your full name"         required />
                <Field label="Email Address" placeholder="your@email.com"  required type="email" />
              </div>

              {/* Row 2: Organization */}
              <Field label="Organization" placeholder="Company or organization name" />

              {/* Row 3: Service interest */}
              <div>
                <label style={{
                  display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '0.65rem',
                  fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.35)', marginBottom: '0.75rem',
                }}>
                  Service Interest
                </label>
                <div className="flex flex-wrap gap-2">
                  {['Software Dev', 'App Dev', 'Web Dev', 'Cloud', 'Datacenter', 'IT Consulting'].map(s => (
                    <ServiceTag key={s} label={s} />
                  ))}
                </div>
              </div>

              {/* Row 4: Project description */}
              <Field label="Project Description" placeholder="Briefly describe your project, goals, and expected timeline…" textarea />

              {/* Consent */}
              <label className="flex items-start gap-3 cursor-pointer select-none group">
                <div
                  onClick={() => setConsent(c => !c)}
                  className="mt-0.5 w-4 h-4 shrink-0 rounded-sm flex items-center justify-center transition-all duration-200"
                  style={{
                    border: `1.5px solid ${consent ? '#5BC8E8' : 'rgba(255,255,255,0.2)'}`,
                    background: consent ? '#5BC8E8' : 'transparent',
                  }}
                >
                  {consent && (
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="#0A0F1A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <span className="font-body text-[0.78rem] leading-relaxed" style={{ color: 'rgba(255,255,255,0.3)' }}>
                  I agree to be contacted by TechKhwa Solutions regarding my inquiry. View our{' '}
                  <a href="#" style={{ color: '#5BC8E8', textDecoration: 'underline' }}>Privacy Policy</a>.
                </span>
              </label>

              {/* Submit */}
              <div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-body font-semibold text-[14px] transition-all btn-glow"
                  style={{ background: '#5BC8E8', color: '#0A0F1A' }}
                >
                  Send Message
                  <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
              </div>
            </motion.form>
          </div>

        </div>
      </div>
    </section>
  )
}

function ServiceTag({ label }: { label: string }) {
  const [active, setActive] = useState(false)
  return (
    <button
      type="button"
      onClick={() => setActive(a => !a)}
      className="font-body text-[11px] font-medium px-3.5 py-1.5 rounded-full transition-all duration-200"
      style={{
        border: `1px solid ${active ? '#5BC8E8' : 'rgba(255,255,255,0.12)'}`,
        color: active ? '#5BC8E8' : 'rgba(255,255,255,0.4)',
        background: active ? 'rgba(91,200,232,0.1)' : 'transparent',
      }}
    >
      {label}
    </button>
  )
}
