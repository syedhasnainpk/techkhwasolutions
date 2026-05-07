import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, Star } from 'lucide-react'

const testimonials = [
  {
    quote: 'TechKhwa transformed our logistics operation. Dispatching time dropped by 65% in the first month — and the platform has handled our 3× growth without a single outage.',
    name: 'Ahmed Raza',
    role: 'CEO, LogiPak Courier Services',
    initials: 'AR',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    quote: 'We evaluated 8 development partners before choosing TechKhwa. Their technical depth and ability to navigate healthcare compliance were in a completely different league.',
    name: 'Dr. Fatima Malik',
    role: 'Founder & CTO, MedConnect',
    initials: 'FM',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    quote: 'The ERP they built replaced three legacy systems that had caused headaches for a decade. On time, on budget — and our finance team actually loves using it.',
    name: 'Usman Tariq',
    role: 'Head of Digital, Meridian Manufacturing',
    initials: 'UT',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
  },
  {
    quote: "Our platform handles flash sales with 50,000+ concurrent users thanks to TechKhwa's cloud architecture. They didn't just write code — they thought about our business.",
    name: 'Sara Khan',
    role: 'VP Technology, RetailEdge',
    initials: 'SK',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
]

const T = {
  heading: '#0A0F1A',
  body: '#374151',
  muted: '#9CA3AF',
  accent: '#5BC8E8',
  border: 'rgba(10,15,26,0.08)',
}

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(1)

  const go = useCallback((d: number) => {
    setDir(d)
    setIndex(p => (p + d + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const t = setInterval(() => go(1), 6000)
    return () => clearInterval(t)
  }, [go])

  const t = testimonials[index]

  return (
    <section className="relative overflow-hidden" style={{ background: '#F7F8FA' }}>
      <div className="absolute inset-0 grid-bg-light pointer-events-none" style={{ opacity: 0.5 }} />

      <div className="max-w-[1440px] mx-auto px-8 relative z-10">

        {/* ─── Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.01 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="py-20 flex items-end justify-between"
          style={{ borderBottom: `1px solid ${T.border}` }}
        >
          <div>
            <span className="font-body font-semibold text-[11px] tracking-[0.14em] uppercase block mb-5" style={{ color: T.accent }}>
              Client Stories
            </span>
            <h2 className="font-display font-bold leading-none" style={{ fontSize: 'clamp(2.4rem,5vw,4.5rem)', letterSpacing: '-0.03em', color: T.heading }}>
              Trusted by<br />
              <span style={{ background: 'linear-gradient(135deg,#5BC8E8,#9BE4F5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Industry Leaders
              </span>
            </h2>
          </div>

          {/* Nav arrows */}
          <div className="flex items-center gap-3">
            {([{ d: -1, Icon: ArrowLeft }, { d: 1, Icon: ArrowRight }] as const).map(({ d, Icon }) => (
              <button
                key={d}
                onClick={() => go(d)}
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200"
                style={{ border: `1px solid rgba(10,15,26,0.12)`, background: '#fff', color: T.muted }}
                onMouseEnter={e => { (e.currentTarget).style.borderColor = T.accent; (e.currentTarget).style.color = T.accent }}
                onMouseLeave={e => { (e.currentTarget).style.borderColor = 'rgba(10,15,26,0.12)'; (e.currentTarget).style.color = T.muted }}
              >
                <Icon size={16} />
              </button>
            ))}
          </div>
        </motion.div>

        {/* ─── Testimonial body ─── */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Author column */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`author-${index}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-3 flex flex-col justify-between gap-8"
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Avatar + name */}
              <div className="flex flex-col gap-4">
                <div className="relative w-fit">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-16 h-16 rounded-full object-cover"
                    style={{ border: `2px solid ${T.accent}`, boxShadow: `0 0 0 4px rgba(91,200,232,0.12)` }}
                    onError={e => {
                      // Fallback to initials if image fails to load
                      const target = e.currentTarget
                      target.style.display = 'none'
                      const sibling = target.nextElementSibling as HTMLElement
                      if (sibling) sibling.style.display = 'flex'
                    }}
                  />
                  {/* Fallback initials avatar */}
                  <div
                    className="w-16 h-16 rounded-full items-center justify-center font-display font-bold text-base"
                    style={{ background: T.heading, color: T.accent, border: `2px solid ${T.accent}`, display: 'none' }}
                  >
                    {t.initials}
                  </div>
                  {/* Online dot */}
                  <span
                    className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full border-2 border-white"
                    style={{ background: '#22C55E' }}
                  />
                </div>

                <div>
                  <div className="font-display font-bold text-[15px]" style={{ color: T.heading }}>{t.name}</div>
                  <div className="font-body text-[0.82rem] mt-0.5" style={{ color: T.muted }}>{t.role}</div>
                </div>
              </div>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDir(i > index ? 1 : -1); setIndex(i) }}
                    className="rounded-full transition-all duration-300"
                    style={{ width: i === index ? '20px' : '6px', height: '6px', background: i === index ? T.accent : 'rgba(10,15,26,0.15)' }}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Quote column */}
          <div className="lg:col-span-9 flex items-center">
            <AnimatePresence custom={dir} mode="wait">
              <motion.blockquote
                key={index}
                custom={dir}
                initial={{ opacity: 0, x: dir > 0 ? 48 : -48 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir > 0 ? -48 : 48 }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                className="font-display font-semibold leading-tight"
                style={{ fontSize: 'clamp(1.4rem,2.5vw,2.1rem)', letterSpacing: '-0.02em', color: T.heading }}
              >
                "{t.quote}"
              </motion.blockquote>
            </AnimatePresence>
          </div>

        </div>

        {/* All testimonials avatars strip */}
        <div className="pb-16 flex items-center gap-4" style={{ borderTop: `1px solid ${T.border}`, paddingTop: '1.5rem' }}>
          <span className="font-body text-[11px] tracking-[0.1em] uppercase font-medium mr-2" style={{ color: T.muted }}>
            {testimonials.length} happy clients
          </span>
          <div className="flex -space-x-3">
            {testimonials.map((item, i) => (
              <button
                key={i}
                onClick={() => { setDir(i > index ? 1 : -1); setIndex(i) }}
                className="relative transition-transform duration-200 hover:-translate-y-1"
                title={item.name}
              >
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-9 h-9 rounded-full object-cover"
                  style={{
                    border: i === index ? `2px solid ${T.accent}` : '2px solid #fff',
                    boxShadow: i === index ? `0 0 0 2px rgba(91,200,232,0.3)` : 'none',
                    filter: i === index ? 'none' : 'grayscale(40%)',
                    opacity: i === index ? 1 : 0.7,
                  }}
                  onError={e => {
                    const el = e.currentTarget
                    el.style.display = 'none'
                  }}
                />
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Fade to dark */}
      <div
        className="absolute bottom-0 inset-x-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #0A0F1A)' }}
      />
    </section>
  )
}
