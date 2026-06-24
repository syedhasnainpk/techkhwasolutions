import { useEffect, useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const WEB3FORMS_KEY = 'b7d03353-0f74-452a-9668-fe651b16692c'

const services = [
  'Web Application',
  'Mobile App',
  'AI Integration',
  'E-Commerce',
  'DevOps / Cloud',
  'UI/UX Design',
  'Other',
]

const guarantees = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="9" />
        <polyline points="11 6 11 11 14 14" />
      </svg>
    ),
    title: '4-hour response',
    body: 'Every serious inquiry gets a human response within 4 business hours — not a bot, not an auto-reply.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="8" y1="13" x2="14" y2="13" />
        <line x1="8" y1="17" x2="11" y2="17" />
      </svg>
    ),
    title: 'Free scoping call',
    body: 'No commitment. A 30-minute call to understand your project and whether we\'re the right fit.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'NDA on request',
    body: 'We\'ll sign a mutual NDA before you share anything sensitive. Your idea stays yours.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    title: 'Fixed-price proposals',
    body: 'Every project starts with a fixed-scope proposal. No hourly surprises, no scope creep without your approval.',
  },
]

const faqs = [
  {
    q: 'How long does a typical project take?',
    a: 'Depends on scope. A focused MVP takes 8–12 weeks. Enterprise-grade platforms with complex integrations can run 6–12 months. We define the timeline before we start, and we hold to it.',
  },
  {
    q: 'Do you work with early-stage startups?',
    a: 'Yes. Some of our best work has been with founders who had a great idea and no codebase. We help you move from concept to launch without overbuilding.',
  },
  {
    q: 'Can I hire TechKhwa to take over an existing codebase?',
    a: 'Yes — and we\'re good at it. We do a thorough codebase audit first, then agree on a plan. We won\'t inherit technical debt without telling you about it.',
  },
  {
    q: 'What happens after launch?',
    a: 'Every project includes a 30-day post-launch warranty. Beyond that, we offer ongoing support retainers for monitoring, feature development, and infrastructure management.',
  },
  {
    q: 'Do you sign NDAs?',
    a: 'Absolutely. Send us a message and we\'ll have a mutual NDA ready within 24 hours.',
  },
]

type FormData = {
  name: string
  email: string
  company: string
  budget: string
  service: string
  message: string
  consent: boolean
}

export default function ContactPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const [form, setForm] = useState<FormData>({
    name: '', email: '', company: '', budget: '', service: '', message: '', consent: false,
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!form.consent) return
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          from_name: form.name,
          subject: `New Project Inquiry — ${form.service || 'General'} | TechKhwa`,
          name: form.name,
          email: form.email,
          company: form.company,
          budget: form.budget,
          service: form.service,
          message: form.message,
        }),
      })
      const data = await res.json()
      setStatus(data.success ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="bg-[#0A0F1A] text-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 grid-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1A] via-transparent to-[#0A0F1A] pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="section-label mb-4">
            Get In Touch
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
            Let's talk about<br /><span className="text-gradient">your project.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-[#8899AA] text-lg md:text-xl max-w-xl leading-relaxed">
            Tell us what you're building. We'll respond within 4 business hours with a direct, honest assessment.
          </motion.p>
        </div>
      </section>

      {/* Main content */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 rounded-full bg-[rgba(91,200,232,0.15)] border border-[#5BC8E8] flex items-center justify-center mb-6">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M5 14l6 6L23 8" stroke="#5BC8E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Message sent.</h3>
                <p className="text-[#8899AA] mb-6">We'll get back to you within 4 business hours. Check your inbox — ours comes from techkhwasolutions@gmail.com.</p>
                <button
                  onClick={() => { setStatus('idle'); setForm({ name: '', email: '', company: '', budget: '', service: '', message: '', consent: false }) }}
                  className="text-sm text-[#5BC8E8] underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#8899AA] mb-2 tracking-wide">Full name *</label>
                    <input
                      required
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="Jane Smith"
                      className="w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3.5 text-sm text-white placeholder-[#445566] focus:outline-none focus:border-[#5BC8E8] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#8899AA] mb-2 tracking-wide">Work email *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      placeholder="jane@company.com"
                      className="w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3.5 text-sm text-white placeholder-[#445566] focus:outline-none focus:border-[#5BC8E8] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#8899AA] mb-2 tracking-wide">Company / Project name</label>
                    <input
                      value={form.company}
                      onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                      placeholder="Acme Corp"
                      className="w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3.5 text-sm text-white placeholder-[#445566] focus:outline-none focus:border-[#5BC8E8] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#8899AA] mb-2 tracking-wide">Budget range</label>
                    <select
                      value={form.budget}
                      onChange={e => setForm(f => ({ ...f, budget: e.target.value }))}
                      className="w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#5BC8E8] transition-colors appearance-none"
                    >
                      <option value="" className="bg-[#0A0F1A]">Select range</option>
                      <option value="Under $5K" className="bg-[#0A0F1A]">Under $5K</option>
                      <option value="$5K – $15K" className="bg-[#0A0F1A]">$5K – $15K</option>
                      <option value="$15K – $50K" className="bg-[#0A0F1A]">$15K – $50K</option>
                      <option value="$50K – $150K" className="bg-[#0A0F1A]">$50K – $150K</option>
                      <option value="$150K+" className="bg-[#0A0F1A]">$150K+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#8899AA] mb-3 tracking-wide">Service needed</label>
                  <div className="flex flex-wrap gap-2">
                    {services.map(s => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setForm(f => ({ ...f, service: f.service === s ? '' : s }))}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all ${
                          form.service === s
                            ? 'bg-[#5BC8E8] text-[#0A0F1A] border-[#5BC8E8]'
                            : 'border-[rgba(255,255,255,0.1)] text-[#8899AA] hover:border-[#5BC8E8] hover:text-[#5BC8E8]'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#8899AA] mb-2 tracking-wide">Tell us about your project *</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    placeholder="What are you building? What's the problem you're solving? What does success look like in 6 months?"
                    className="w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3.5 text-sm text-white placeholder-[#445566] focus:outline-none focus:border-[#5BC8E8] transition-colors resize-none"
                  />
                </div>

                <label className="flex gap-3 items-start cursor-pointer group">
                  <div
                    onClick={() => setForm(f => ({ ...f, consent: !f.consent }))}
                    className={`mt-0.5 w-5 h-5 rounded flex-shrink-0 border flex items-center justify-center transition-all ${
                      form.consent ? 'bg-[#5BC8E8] border-[#5BC8E8]' : 'border-[rgba(255,255,255,0.2)] group-hover:border-[#5BC8E8]'
                    }`}
                  >
                    {form.consent && (
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="#0A0F1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <span className="text-xs text-[#8899AA] leading-relaxed">
                    I agree to be contacted by TechKhwa Solutions regarding my inquiry. We don't do spam — one conversation at a time.
                  </span>
                </label>

                {status === 'error' && (
                  <p className="text-red-400 text-sm">Something went wrong. Email us directly at techkhwasolutions@gmail.com</p>
                )}

                <button
                  type="submit"
                  disabled={!form.consent || status === 'sending'}
                  className="w-full bg-[#5BC8E8] text-[#0A0F1A] font-semibold py-4 rounded-xl text-sm hover:bg-[#9BE4F5] transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[#0A0F1A] border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Guarantees */}
            <div>
              <p className="section-label mb-5">What to expect</p>
              <div className="space-y-4">
                {guarantees.map(g => (
                  <div key={g.title} className="flex gap-4 p-5 rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)]">
                    <div className="text-[#5BC8E8] flex-shrink-0 mt-0.5">{g.icon}</div>
                    <div>
                      <div className="font-semibold text-sm mb-1">{g.title}</div>
                      <div className="text-xs text-[#8899AA] leading-relaxed">{g.body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct contact */}
            <div className="p-6 rounded-xl border border-[rgba(91,200,232,0.15)] bg-[rgba(91,200,232,0.03)]">
              <p className="section-label mb-3">Prefer email?</p>
              <a href="mailto:techkhwasolutions@gmail.com" className="text-lg font-bold text-[#5BC8E8] hover:text-[#9BE4F5] transition-colors">
                techkhwasolutions@gmail.com
              </a>
              <p className="text-xs text-[#667788] mt-2">We read every email personally. Response within 4 hours during business days.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-[rgba(255,255,255,0.06)] py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="section-label mb-4">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Questions we get asked.</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-[rgba(255,255,255,0.07)] rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 hover:bg-[rgba(255,255,255,0.02)] transition-colors"
                >
                  <span className="font-semibold text-sm leading-snug">{faq.q}</span>
                  <svg
                    width="16" height="16" viewBox="0 0 16 16" fill="none"
                    className={`flex-shrink-0 mt-0.5 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                  >
                    <path d="M4 6l4 4 4-4" stroke="#5BC8E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5"
                  >
                    <p className="text-sm text-[#8899AA] leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
