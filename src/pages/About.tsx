import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CTABanner from '../components/CTABanner'

const credibility = [
  { value: '15+', label: 'PROJECTS DELIVERED', sub: 'across multiple industries' },
  { value: '2+',  label: 'YEARS IN BUSINESS',  sub: 'founded 2023' },
  { value: '98%', label: 'CLIENT RETENTION',   sub: 'clients who stay come back' },
  { value: '5',   label: 'COUNTRIES SERVED',   sub: 'globally distributed clients' },
]

const values = [
  { num: '01', title: 'Ownership over excuses',  body: 'If it shipped late, that\'s on us. If there\'s a bug in production, we fix it before you finish typing the message. We treat your product like it\'s our product.' },
  { num: '02', title: 'Clarity above all',        body: 'We don\'t hide behind jargon. You\'ll always know exactly where your project stands, what\'s blocking it, and what\'s coming next.' },
  { num: '03', title: 'Speed with quality',       body: 'Fast doesn\'t mean sloppy. Our processes â€” code review, automated testing, CI/CD â€” exist so we can move fast without creating debt that bites you six months later.' },
  { num: '04', title: 'No ghost vendors',         body: 'After launch, we stick around. Bug reports, feature requests, infrastructure scaling â€” our clients have a direct line to the engineer who built it.' },
]

const timeline = [
  { year: '2023', event: 'TechKhwa founded',         detail: 'Started with web development â€” custom websites, business platforms, and digital products. First clients onboarded within weeks of launch.' },
  { year: '2023', event: 'Government sector entry',  detail: 'Delivered the KP Labour Department digitalization â€” paper-based workflows moved fully online, 86% paper reduction.' },
  { year: '2024', event: 'Services expanded',         detail: 'Grew beyond web dev into mobile apps, AI integration, DevOps, and UI/UX design as client needs evolved.' },
  { year: '2024', event: 'First international client',detail: 'Delivered an AI-powered omnichannel sales platform for a real estate firm in Dubai, UAE.' },
  { year: '2024', event: 'CA firm digitalization',    detail: 'Replaced paper auditing and Excel workflows with a unified platform for Auto Accounting â€” 68% productivity boost.' },
  { year: '2025', event: 'TechKhwa today',            detail: '15+ projects delivered across 5 countries. Full-service technology partner for businesses that treat software as a competitive advantage.' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] } }),
}

const BD = 'rgba(255,255,255,0.05)'
const BL = 'rgba(10,15,26,0.07)'

export default function AboutPage() {
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
            ABOUT TECHKHWA
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.22,1,0.36,1] }}
            className="display-xl text-white" style={{ fontSize: 'clamp(3rem,8.5vw,9.5rem)' }}
          >
            WE BUILD SOFTWARE<br />
            <span style={{ background: 'linear-gradient(135deg,#5BC8E8,#9BE4F5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              THAT EARNS ITS KEEP.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 max-w-xl text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter,sans-serif' }}
          >
            TechKhwa Solutions is a product engineering company. We partner with founders and business
            leaders to turn technology problems into competitive advantages â€” not just working code.
          </motion.p>
        </div>
      </section>

      {/* â”€â”€ CREDIBILITY STATS â”€â”€ */}
      <section className="relative overflow-hidden" style={{ background: '#0C0C0C' }}>
        <div className="col-grid absolute inset-0">{[0,1,2,3,4].map(i => <span key={i} />)}</div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 py-16 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
          {credibility.map((c, i) => (
            <motion.div
              key={c.label} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
              className="px-8 first:pl-0 last:pr-0 py-4"
            >
              <div className="display-xl text-white mb-3" style={{ fontSize: 'clamp(2.5rem,5vw,5rem)' }}>{c.value}</div>
              <div className="nav-label text-white/30 mb-1" style={{ fontSize: '10px' }}>{c.label}</div>
              <div style={{ fontFamily: 'Inter,sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.2)' }}>{c.sub}</div>
            </motion.div>
          ))}
        </div>
        <div className="h-px max-w-[1440px] mx-auto px-8" style={{ background: BD }} />
      </section>

      {/* â”€â”€ STORY â”€â”€ */}
      <section className="relative overflow-hidden" style={{ background: '#111111' }}>
        <div className="col-grid absolute inset-0">{[0,1,2,3,4].map(i => <span key={i} />)}</div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 py-24">
          <div style={{ borderBottom: BD ? `1px solid ${BD}` : '' }} className="pb-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="nav-label block mb-5" style={{ fontSize: '10px', color: '#5BC8E8', opacity: 0.6 }}>OUR STORY</span>
              <h2 className="display-xl text-white" style={{ fontSize: 'clamp(2rem,5vw,5rem)' }}>
                STARTED FOCUSED.<br />
                <span style={{ background: 'linear-gradient(135deg,#5BC8E8,#9BE4F5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  GREW DELIBERATELY.
                </span>
              </h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}
              className="flex flex-col justify-center space-y-5"
              style={{ fontFamily: 'Inter,sans-serif', fontSize: '15px', lineHeight: 1.75, color: 'rgba(255,255,255,0.45)' }}
            >
              <p>TechKhwa was founded in 2023 with a clear starting point: web development done properly. No inflated promises, no offshore hand-offs â€” just a focused team that delivered websites and web platforms that actually worked. Early clients stuck around, referred others, and started asking for more.</p>
              <p>That demand shaped what we became. As clients grew, so did the problems they brought us â€” mobile apps, AI integrations, cloud infrastructure, workflow automation. We didn't expand for the sake of it. We expanded because clients we already trusted asked us to solve problems we knew we could solve.</p>
              <p>Two years in, we've delivered 15+ projects across 5 countries â€” from digitalizing a government department in KP to building an AI sales platform for a real estate firm in Dubai.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* â”€â”€ TIMELINE â”€â”€ */}
      <section className="relative overflow-hidden" style={{ background: '#F5F4F0' }}>
        <div className="col-grid col-grid-light absolute inset-0">{[0,1,2,3,4].map(i => <span key={i} />)}</div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 py-24">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}
            className="pb-12" style={{ borderBottom: `1px solid ${BL}` }}>
            <span className="nav-label block mb-4" style={{ fontSize: '10px', color: '#5BC8E8', opacity: 0.7 }}>HOW WE GOT HERE</span>
            <h2 className="display-xl" style={{ fontSize: 'clamp(2.4rem,5.5vw,6rem)', color: '#111111' }}>
              OUR<br />
              <span style={{ background: 'linear-gradient(135deg,#5BC8E8,#9BE4F5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>TIMELINE.</span>
            </h2>
          </motion.div>
          <div style={{ borderBottom: `1px solid ${BL}` }}>
            {timeline.map((t, i) => (
              <motion.div
                key={t.year + t.event} custom={i} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-40px' }} variants={fadeUp}
                className="group grid grid-cols-12 items-start gap-6 py-8 hover:pl-2 transition-all duration-300"
                style={{ borderTop: `1px solid ${BL}` }}
              >
                <span className="col-span-2 lg:col-span-1 nav-label" style={{ fontSize: '10px', color: '#5BC8E8', opacity: 0.7 }}>{t.year}</span>
                <h3 className="col-span-10 lg:col-span-4 font-display font-bold leading-tight group-hover:text-[#5BC8E8] transition-colors"
                  style={{ fontSize: 'clamp(1.1rem,2vw,1.5rem)', letterSpacing: '-0.02em', color: '#111111', alignSelf: 'center' }}>
                  {t.event}
                </h3>
                <div className="hidden lg:flex col-span-1 items-center">
                  <div className="w-full h-px" style={{ background: 'rgba(91,200,232,0.2)' }} />
                </div>
                <p className="col-span-12 lg:col-span-6 text-[0.88rem] leading-relaxed" style={{ fontFamily: 'Inter,sans-serif', color: '#4B5563' }}>
                  {t.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ VALUES â”€â”€ */}
      <section className="relative overflow-hidden" style={{ background: '#080C14' }}>
        <div className="col-grid absolute inset-0">{[0,1,2,3,4].map(i => <span key={i} />)}</div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 py-24">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}
            className="pb-12" style={{ borderBottom: `1px solid ${BD}` }}>
            <span className="nav-label block mb-4" style={{ fontSize: '10px', color: '#5BC8E8', opacity: 0.6 }}>HOW WE WORK</span>
            <h2 className="display-xl text-white" style={{ fontSize: 'clamp(2.4rem,5.5vw,6rem)' }}>
              THE RULES<br />
              <span style={{ background: 'linear-gradient(135deg,#5BC8E8,#9BE4F5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                WE DON'T BEND.
              </span>
            </h2>
          </motion.div>
          <div style={{ borderBottom: `1px solid ${BD}` }}>
            {values.map((v, i) => (
              <motion.div
                key={v.num} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
                className="group grid grid-cols-12 items-start gap-6 py-8 hover:pl-2 transition-all duration-300"
                style={{ borderTop: `1px solid ${BD}` }}
              >
                <span className="col-span-2 lg:col-span-1 nav-label text-white/25" style={{ fontSize: '10px' }}>{v.num}</span>
                <h3 className="col-span-10 lg:col-span-4 font-display font-bold leading-tight group-hover:text-[#5BC8E8] transition-colors duration-200"
                  style={{ fontSize: 'clamp(1.1rem,2vw,1.5rem)', letterSpacing: '-0.02em', color: '#fff', alignSelf: 'center' }}>
                  {v.title}
                </h3>
                <div className="hidden lg:flex col-span-1 items-center">
                  <div className="w-full h-px" style={{ background: 'rgba(91,200,232,0.15)' }} />
                </div>
                <p className="col-span-12 lg:col-span-6 text-[0.88rem] leading-relaxed" style={{ fontFamily: 'Inter,sans-serif', color: 'rgba(255,255,255,0.42)', alignSelf: 'center' }}>
                  {v.body}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="py-8 flex items-center justify-between">
            <span style={{ fontFamily: 'Inter,sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.2)' }}>4 core values</span>
            <Link to="/contact" className="nav-label flex items-center gap-2 text-white/30 hover:text-white/60 transition-colors" style={{ fontSize: '11px' }}>
              WORK WITH US
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  )
}
