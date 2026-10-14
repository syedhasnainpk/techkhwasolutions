import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'

// ── Paste your Web3Forms access key here ──────────────────────
// Get it free (takes 30 seconds): https://web3forms.com
// Enter techkhwasolutions@gmail.com → click Get Access Key → check email
const WEB3FORMS_KEY = 'b7d03353-0f74-452a-9668-fe651b16692c'
// ─────────────────────────────────────────────────────────────


function Field({ label, name, placeholder, required = false, type = 'text', textarea = false, value, onChange }: {
  label: string; name: string; placeholder: string; required?: boolean
  type?: string; textarea?: boolean; value: string; onChange: (v: string) => void
}) {
  const [focused, setFocused] = useState(false)
  const base: React.CSSProperties = {
    width: '100%', background: 'transparent', outline: 'none',
    color: '#FFFFFF', fontFamily: 'Inter, sans-serif', fontSize: '0.95rem',
    padding: '0.5rem 0', letterSpacing: '-0.01em',
    borderBottom: `1px solid ${focused ? '#5BC8E8' : 'rgba(255,255,255,0.15)'}`,
    transition: 'border-color 0.2s', resize: 'none' as const,
  }
  return (
    <div>
      <label style={{
        display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '0.65rem',
        fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase',
        color: focused || value ? '#5BC8E8' : 'rgba(255,255,255,0.35)',
        marginBottom: '0.5rem', transition: 'color 0.2s',
      }}>
        {label}{required && <span style={{ color: '#5BC8E8' }}> *</span>}
      </label>
      {textarea
        ? <textarea rows={3} name={name} placeholder={placeholder} required={required} value={value}
            onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
            onChange={e => onChange(e.target.value)} style={{ ...base, display: 'block' }} className="placeholder-white/20" />
        : <input type={type} name={name} placeholder={placeholder} required={required} value={value}
            onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
            onChange={e => onChange(e.target.value)} style={base} className="placeholder-white/20" />
      }
    </div>
  )
}

function ServiceTag({ label, selected, onToggle }: { label: string; selected: boolean; onToggle: () => void }) {
  return (
    <button type="button" onClick={onToggle}
      className="font-body text-[11px] font-medium px-3.5 py-1.5 rounded-full transition-all duration-200"
      style={{
        border: `1px solid ${selected ? '#5BC8E8' : 'rgba(255,255,255,0.12)'}`,
        color: selected ? '#5BC8E8' : 'rgba(255,255,255,0.4)',
        background: selected ? 'rgba(91,200,232,0.1)' : 'transparent',
      }}>
      {label}
    </button>
  )
}

const SERVICE_OPTIONS = ['Software Dev', 'App Dev', 'Web Dev', 'Cloud', 'Datacenter', 'IT Consulting']

export default function Contact() {
  const [fields, setFields]   = useState({ name: '', email: '', org: '', message: '' })
  const [services, setServices] = useState<string[]>([])
  const [consent, setConsent]  = useState(false)
  const [status, setStatus]    = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const set = (k: keyof typeof fields) => (v: string) => setFields(f => ({ ...f, [k]: v }))
  const toggleService = (s: string) => setServices(p => p.includes(s) ? p.filter(x => x !== s) : [...p, s])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!consent) return
    setStatus('sending')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key:   WEB3FORMS_KEY,
          subject:      `New enquiry from ${fields.name} — TechKhwa Solutions`,
          from_name:    fields.name,
          email:        fields.email,
          organization: fields.org || '—',
          services:     services.length ? services.join(', ') : '—',
          message:      fields.message,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setFields({ name: '', email: '', org: '', message: '' })
        setServices([])
        setConsent(false)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact-form" className="relative overflow-hidden" style={{ background: '#111111' }}>
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">

          {/* Left */}
          <div className="relative flex flex-col justify-between px-8 py-20 border-r border-white/5 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 60% 60% at 30% 60%, rgba(91,200,232,0.06) 0%, transparent 70%)' }} />
            <div>
              <span className="font-body font-semibold text-[11px] tracking-[0.14em] uppercase block mb-6" style={{ color: '#5BC8E8' }}>
                Get in Touch
              </span>
              <h2 className="font-display font-bold leading-tight" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', letterSpacing: '-0.03em', color: '#FFFFFF' }}>
                How can we<br />help you{' '}
                <span style={{ background: 'linear-gradient(135deg,#5BC8E8,#9BE4F5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  grow?
                </span>
              </h2>
            </div>

            {/* Response guarantee */}
            <div className="flex flex-col gap-5 py-12">
              {[
                { label: 'Response time', value: 'Within 2 hours' },
                { label: 'Discovery call', value: 'Free, no commitment' },
                { label: 'Based in', value: 'Karachi, Pakistan' },
              ].map(item => (
                <div key={item.label} className="flex items-center justify-between py-4"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.35)' }}>{item.label}</span>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.75)', letterSpacing: '-0.01em' }}>{item.value}</span>
                </div>
              ))}
            </div>

            <div>
              <div className="font-body text-[10px] tracking-[0.14em] uppercase mb-0.5" style={{ color: 'rgba(255,255,255,0.3)' }}>Email</div>
              <a href="mailto:techkhwasolutions@gmail.com"
                className="font-body text-[0.9rem] hover:text-accent transition-colors"
                style={{ color: 'rgba(255,255,255,0.65)' }}>
                techkhwasolutions@gmail.com
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="px-8 lg:px-14 py-20 flex flex-col justify-center">
            <motion.form
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.01 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              onSubmit={handleSubmit}
              className="flex flex-col gap-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <Field label="Full Name"     name="name"    placeholder="Your full name"  required value={fields.name}    onChange={set('name')} />
                <Field label="Email Address" name="email"   placeholder="your@email.com"  required type="email" value={fields.email} onChange={set('email')} />
              </div>

              <Field label="Organization" name="organization" placeholder="Company or organization name" value={fields.org} onChange={set('org')} />

              <div>
                <label style={{
                  display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '0.65rem',
                  fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.35)', marginBottom: '0.75rem',
                }}>Service Interest</label>
                <div className="flex flex-wrap gap-2">
                  {SERVICE_OPTIONS.map(s => (
                    <ServiceTag key={s} label={s} selected={services.includes(s)} onToggle={() => toggleService(s)} />
                  ))}
                </div>
              </div>

              <Field label="Project Description" name="message" placeholder="Briefly describe your project, goals, and expected timeline…" textarea required value={fields.message} onChange={set('message')} />

              {/* Consent */}
              <label className="flex items-start gap-3 cursor-pointer select-none">
                <div onClick={() => setConsent(c => !c)}
                  className="mt-0.5 w-4 h-4 shrink-0 rounded-sm flex items-center justify-center transition-all duration-200"
                  style={{ border: `1.5px solid ${consent ? '#5BC8E8' : 'rgba(255,255,255,0.2)'}`, background: consent ? '#5BC8E8' : 'transparent' }}>
                  {consent && <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="#0A0F1A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                </div>
                <span className="font-body text-[0.78rem] leading-relaxed" style={{ color: 'rgba(255,255,255,0.3)' }}>
                  I agree to be contacted by TechKhwa Solutions regarding my inquiry.
                </span>
              </label>

              {/* Feedback */}
              {status === 'success' && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl"
                  style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)' }}>
                  <CheckCircle2 size={16} style={{ color: '#22c55e' }} />
                  <span className="font-body text-sm" style={{ color: '#22c55e' }}>Message sent! We'll get back to you within 2 hours.</span>
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl"
                  style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)' }}>
                  <AlertCircle size={16} style={{ color: '#ef4444' }} />
                  <span className="font-body text-sm" style={{ color: '#ef4444' }}>Something went wrong. Email us directly at techkhwasolutions@gmail.com</span>
                </motion.div>
              )}

              {/* Submit */}
              <div>
                <motion.button type="submit"
                  disabled={!consent || status === 'sending'}
                  whileHover={consent && status !== 'sending' ? { scale: 1.03 } : {}}
                  whileTap={consent && status !== 'sending' ? { scale: 0.97 } : {}}
                  className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-body font-semibold text-[14px] transition-all btn-glow"
                  style={{
                    background: consent && status !== 'sending' ? '#5BC8E8' : 'rgba(91,200,232,0.3)',
                    color: '#111111',
                    cursor: consent && status !== 'sending' ? 'pointer' : 'not-allowed',
                  }}>
                  {status === 'sending'
                    ? <><Loader2 size={15} className="animate-spin" /> Sending…</>
                    : <>Send Message <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" /></>
                  }
                </motion.button>
              </div>
            </motion.form>
          </div>

        </div>
      </div>
    </section>
  )
}
