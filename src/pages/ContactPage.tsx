import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const faqs = [
  {
    q: 'How long does a typical project take?',
    a: 'Depends on scope. A marketing website or simple web app: 4â€“6 weeks. A full platform with custom backend, integrations, and mobile app: 3â€“6 months. We scope accurately and hit those timelines.',
  },
  {
    q: 'Do you work with early-stage startups or only established businesses?',
    a: 'Both. Some of our best projects started with a founder who had a napkin sketch. Others were established companies replacing legacy systems. What matters is that you have a real problem and a realistic expectation of what it takes to solve it.',
  },
  {
    q: 'What does a fixed-scope project look like?',
    a: 'We agree on deliverables, timeline, and cost before work begins. You know exactly what you\'re getting and what you\'re paying. If scope genuinely changes (not just feature creep), we adjust formally â€” no silent surprises.',
  },
  {
    q: 'Can you take over a project someone else started?',
    a: 'Yes. We do this often. We\'ll review the existing codebase, give you an honest assessment, and either continue it or recommend a rebuild if the foundation is unsalvageable. We\'ll tell you which is which.',
  },
  {
    q: 'Do you offer ongoing maintenance and support after launch?',
    a: 'Yes. Most clients move to a monthly retainer post-launch. This covers bug fixes, performance monitoring, minor feature additions, and on-call support. We don\'t disappear after go-live.',
  },
]

const BD = 'rgba(255,255,255,0.05)'

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'b7d03353-0f74-452a-9668-fe651b16692c',
          ...form,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('sent')
        setForm({ name: '', email: '', company: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputBase: React.CSSProperties = {
    width: '100%',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.07)',
    borderRadius: '6px',
    padding: '14px 16px',
    color: '#fff',
    fontFamily: 'Inter,sans-serif',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  return (
    <div style={{ background: '#111111', color: '#fff' }}>
      <Navbar />

      {/* â”€â”€ PAGE HERO â”€â”€ */}
      <section className="relative overflow-hidden pt-36 pb-20" style={{ background: '#111111' }}>
        <div className="col-grid absolute inset-0">{[0,1,2,3,4].map(i => <span key={i} />)}</div>
        <div className="absolute bottom-0 inset-x-0 h-px" style={{ background: BD }} />

        <div className="relative z-10 max-w-[1440px] mx-auto px-8">
          <motion.span
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}
            className="nav-label block mb-5" style={{ fontSize: '10px', color: '#5BC8E8', opacity: 0.6 }}
          >
            GET IN TOUCH
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.22,1,0.36,1] }}
            className="display-xl text-white" style={{ fontSize: 'clamp(3rem,8.5vw,9.5rem)' }}
          >
            LET'S TALK ABOUT<br />
            <span style={{ background: 'linear-gradient(135deg,#5BC8E8,#9BE4F5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              YOUR PROJECT.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 max-w-xl text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter,sans-serif' }}
          >
            Tell us what you're building. We'll respond within 2 hours with an honest assessment
            and suggested next steps â€” not a sales pitch.
          </motion.p>
        </div>
      </section>

      {/* â”€â”€ FORM + SIDEBAR â”€â”€ */}
      <section className="relative overflow-hidden" style={{ background: '#080C14' }}>
        <div className="col-grid absolute inset-0">{[0,1,2,3,4].map(i => <span key={i} />)}</div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Form â€” 7 cols */}
            <motion.div
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="lg:col-span-7"
            >
              <span className="nav-label block mb-8" style={{ fontSize: '10px', color: '#5BC8E8', opacity: 0.6 }}>SEND A MESSAGE</span>

              {status === 'sent' ? (
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="py-16 text-center">
                  <div className="w-12 h-12 rounded-full border flex items-center justify-center mx-auto mb-6" style={{ borderColor: '#5BC8E8' }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10L8 14L16 6" stroke="#5BC8E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="display-xl text-white mb-3" style={{ fontSize: 'clamp(1.5rem,3vw,2.5rem)' }}>MESSAGE SENT.</h3>
                  <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '14px', color: 'rgba(255,255,255,0.4)' }}>
                    We'll get back to you within 2 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="nav-label block mb-2" style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)' }}>YOUR NAME</label>
                      <input
                        required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                        placeholder="Alex Johnson"
                        style={inputBase}
                        onFocus={e => (e.target.style.borderColor = 'rgba(91,200,232,0.4)')}
                        onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.07)')}
                      />
                    </div>
                    <div>
                      <label className="nav-label block mb-2" style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)' }}>EMAIL</label>
                      <input
                        type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                        placeholder="alex@company.com"
                        style={inputBase}
                        onFocus={e => (e.target.style.borderColor = 'rgba(91,200,232,0.4)')}
                        onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.07)')}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="nav-label block mb-2" style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)' }}>COMPANY / PROJECT NAME</label>
                    <input
                      value={form.company} onChange={e => setForm({ ...form, company: e.target.value })}
                      placeholder="Acme Inc."
                      style={inputBase}
                      onFocus={e => (e.target.style.borderColor = 'rgba(91,200,232,0.4)')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.07)')}
                    />
                  </div>
                  <div>
                    <label className="nav-label block mb-2" style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)' }}>TELL US ABOUT YOUR PROJECT</label>
                    <textarea
                      required rows={6} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="What are you building? What's the problem you're trying to solve? Any timeline or budget constraints?"
                      style={{ ...inputBase, resize: 'vertical', minHeight: '140px' }}
                      onFocus={e => (e.target.style.borderColor = 'rgba(91,200,232,0.4)')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.07)')}
                    />
                  </div>
                  {status === 'error' && (
                    <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '13px', color: '#F87171' }}>
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}
                  <motion.button
                    type="submit" disabled={status === 'sending'}
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className="nav-label flex items-center gap-2.5 px-8 py-4 rounded-full btn-glow disabled:opacity-50"
                    style={{ background: '#5BC8E8', color: '#111111', fontSize: '12px', border: 'none', cursor: 'pointer' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    {status === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Sidebar â€” 5 cols */}
            <motion.div
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-5 flex flex-col gap-10"
            >
              {/* Guarantees */}
              <div>
                <span className="nav-label block mb-6" style={{ fontSize: '10px', color: '#5BC8E8', opacity: 0.6 }}>WHAT TO EXPECT</span>
                <div className="space-y-5">
                  {[
                    { icon: 'â±', title: 'Reply within 2 hours', body: 'During business hours. You\'ll hear from a real engineer, not a bot or BDR.' },
                    { icon: 'ðŸŽ¯', title: 'Free discovery call', body: 'We\'ll spend 30 minutes understanding your problem before talking scope or cost.' },
                    { icon: 'ðŸ“‹', title: 'Honest assessment', body: 'We\'ll tell you what you actually need â€” even if it\'s less than what you thought.' },
                    { icon: 'ðŸ”’', title: 'NDA on request', body: 'Happy to sign an NDA before the first call if your project requires confidentiality.' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4 py-4" style={{ borderTop: `1px solid ${BD}` }}>
                      <span style={{ fontSize: '16px', opacity: 0.6 }}>{item.icon}</span>
                      <div>
                        <div className="font-display font-bold mb-1" style={{ fontSize: '13px', letterSpacing: '-0.01em', color: '#fff' }}>{item.title}</div>
                        <div style={{ fontFamily: 'Inter,sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.35)', lineHeight: 1.6 }}>{item.body}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct contact */}
              <div className="p-6 rounded-lg" style={{ background: 'rgba(91,200,232,0.04)', border: '1px solid rgba(91,200,232,0.1)' }}>
                <span className="nav-label block mb-3" style={{ fontSize: '10px', color: '#5BC8E8', opacity: 0.6 }}>PREFER EMAIL?</span>
                <a
                  href="mailto:hello@techkhwa.com"
                  className="font-display font-bold block hover:text-[#5BC8E8] transition-colors"
                  style={{ fontSize: 'clamp(0.9rem,1.5vw,1.1rem)', letterSpacing: '-0.01em', color: '#fff' }}
                >
                  hello@techkhwa.com
                </a>
                <p className="mt-2" style={{ fontFamily: 'Inter,sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>
                  Same 2-hour response guarantee.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* â”€â”€ FAQ â”€â”€ */}
      <section className="relative overflow-hidden" style={{ background: '#F5F4F0' }}>
        <div className="col-grid col-grid-light absolute inset-0">{[0,1,2,3,4].map(i => <span key={i} />)}</div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 py-24">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}
            className="pb-12" style={{ borderBottom: '1px solid rgba(10,15,26,0.07)' }}>
            <span className="nav-label block mb-4" style={{ fontSize: '10px', color: '#5BC8E8', opacity: 0.7 }}>COMMON QUESTIONS</span>
            <h2 className="display-xl" style={{ fontSize: 'clamp(2.4rem,5.5vw,6rem)', color: '#111111' }}>
              THINGS PEOPLE<br />
              <span style={{ background: 'linear-gradient(135deg,#5BC8E8,#9BE4F5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>USUALLY ASK.</span>
            </h2>
          </motion.div>

          <div style={{ borderBottom: '1px solid rgba(10,15,26,0.07)' }}>
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i
              return (
                <motion.div
                  key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  style={{ borderTop: '1px solid rgba(10,15,26,0.07)' }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full text-left grid grid-cols-12 items-start gap-4 py-7 group hover:pl-1 transition-all duration-300"
                  >
                    <span className="col-span-2 lg:col-span-1 nav-label" style={{ fontSize: '10px', color: '#5BC8E8', opacity: 0.5, paddingTop: '2px' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h4 className="col-span-9 lg:col-span-10 font-display font-bold leading-snug group-hover:text-[#5BC8E8] transition-colors"
                      style={{ fontSize: 'clamp(0.95rem,1.8vw,1.25rem)', letterSpacing: '-0.015em', color: isOpen ? '#5BC8E8' : '#111111' }}>
                      {faq.q}
                    </h4>
                    <div className="col-span-1 flex justify-end pt-0.5">
                      <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.25 }}
                        className="w-6 h-6 rounded-full border flex items-center justify-center flex-shrink-0"
                        style={{ borderColor: isOpen ? '#5BC8E8' : 'rgba(10,15,26,0.15)', color: isOpen ? '#5BC8E8' : '#6B7280' }}>
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                          <path d="M6 2V10M2 6H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </motion.div>
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-8 pl-[8.33%] lg:pl-[8.33%]"
                          style={{ fontFamily: 'Inter,sans-serif', fontSize: '14px', lineHeight: 1.75, color: '#4B5563' }}>
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
