import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CTABanner from '../components/CTABanner'

const services = [
  {
    id: '01',
    title: 'Web Development',
    short: 'Custom web apps, portals, and SaaS platforms built for performance.',
    body: 'From marketing sites to complex web applications, we build on modern stacks — React, Next.js, Node.js, and cloud-native infrastructure. Every project is architected for scalability from day one, with CI/CD pipelines and test coverage built in, not bolted on.',
    bullets: ['React / Next.js / TypeScript', 'Node.js / Python backends', 'REST & GraphQL APIs', 'PostgreSQL / MongoDB', 'AWS / Vercel / GCP deployment'],
  },
  {
    id: '02',
    title: 'Mobile App Development',
    short: 'iOS and Android apps that feel native and perform at scale.',
    body: 'We build cross-platform mobile apps with React Native and Expo — one codebase, true native performance. For projects where platform-specific features matter, we go fully native. Either way, you get an app your users will actually want to open.',
    bullets: ['React Native / Expo', 'iOS (Swift) & Android (Kotlin)', 'Offline-first architecture', 'Push notifications & deep linking', 'App Store & Play Store submission'],
  },
  {
    id: '03',
    title: 'Custom Software Development',
    short: 'Bespoke platforms for workflows that off-the-shelf can\'t handle.',
    body: 'Some problems are too specific for generic software. We build the exact system your business needs — custom ERPs, workflow automation tools, internal dashboards, data pipelines — designed around how your team actually works.',
    bullets: ['ERP & CRM systems', 'Workflow automation', 'Internal tooling & dashboards', 'Data pipelines & ETL', 'Legacy system modernization'],
  },
  {
    id: '04',
    title: 'Data Centre Maintenance',
    short: 'Physical and logical infrastructure management for enterprise uptime.',
    body: 'We provide end-to-end data centre maintenance — hardware lifecycle management, rack installation, network cabling, OS provisioning, and ongoing health monitoring. Paired with our software team, we can handle the full stack from silicon to UI.',
    bullets: ['Server rack installation & cabling', 'Hardware lifecycle management', 'OS provisioning & configuration', 'Network infrastructure maintenance', 'Monitoring & capacity planning'],
  },
  {
    id: '05',
    title: 'DevOps & Cloud Infrastructure',
    short: 'CI/CD pipelines, cloud architecture, and 24/7 monitoring.',
    body: 'We design and operate cloud infrastructure that scales with your business — Kubernetes clusters, auto-scaling groups, multi-region redundancy, and cost-optimized architectures. Plus CI/CD pipelines that get code from commit to production without drama.',
    bullets: ['AWS / Azure / GCP architecture', 'Kubernetes & Docker orchestration', 'CI/CD pipeline setup (GitHub Actions, GitLab)', 'Infrastructure as Code (Terraform)', 'APM & alerting (Datadog, Grafana)'],
  },
  {
    id: '06',
    title: 'UI / UX Design',
    short: 'Design systems and interfaces users actually want to use.',
    body: 'We design products that work, not just look good. User research, information architecture, wireframes, high-fidelity Figma prototypes, and production-ready design systems — all aligned with your brand and built to hand off cleanly to engineering.',
    bullets: ['User research & journey mapping', 'Wireframes & prototyping', 'High-fidelity Figma design', 'Design systems & component libraries', 'Handoff-ready specs for engineering'],
  },
]

const BD = 'rgba(255,255,255,0.05)'

export default function ServicesPage() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <div style={{ background: '#0A0F1A', color: '#fff' }}>
      <Navbar />

      {/* ── PAGE HERO ── */}
      <section className="relative overflow-hidden pt-36 pb-20" style={{ background: '#0A0F1A' }}>
        <div className="col-grid absolute inset-0">{[0,1,2,3,4].map(i => <span key={i} />)}</div>
        <div className="absolute bottom-0 inset-x-0 h-px" style={{ background: BD }} />

        <div className="relative z-10 max-w-[1440px] mx-auto px-8">
          <motion.span
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}
            className="nav-label block mb-5" style={{ fontSize: '10px', color: '#5BC8E8', opacity: 0.6 }}
          >
            SERVICES
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.22,1,0.36,1] }}
            className="display-xl text-white" style={{ fontSize: 'clamp(3rem,8.5vw,9.5rem)' }}
          >
            WHAT WE<br />
            <span style={{ background: 'linear-gradient(135deg,#5BC8E8,#9BE4F5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              BUILD FOR YOU.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 max-w-xl text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter,sans-serif' }}
          >
            Six service areas. One team that owns the outcome end to end.
            No hand-offs to subcontractors, no surprise scope changes.
          </motion.p>
        </div>
      </section>

      {/* ── SERVICES LIST ── */}
      <section className="relative overflow-hidden" style={{ background: '#080C14' }}>
        <div className="col-grid absolute inset-0">{[0,1,2,3,4].map(i => <span key={i} />)}</div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 py-4">
          {services.map((svc, i) => {
            const isOpen = openId === svc.id
            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                style={{ borderTop: `1px solid ${BD}` }}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : svc.id)}
                  className="w-full text-left group"
                >
                  <div className="grid grid-cols-12 items-center gap-4 py-8 hover:pl-2 transition-all duration-300">
                    <span className="col-span-2 lg:col-span-1 nav-label text-white/25" style={{ fontSize: '10px' }}>{svc.id}</span>
                    <h3 className="col-span-8 lg:col-span-5 font-display font-bold leading-tight group-hover:text-[#5BC8E8] transition-colors duration-200"
                      style={{ fontSize: 'clamp(1.2rem,2.5vw,2rem)', letterSpacing: '-0.025em', color: isOpen ? '#5BC8E8' : '#fff' }}>
                      {svc.title}
                    </h3>
                    <p className="hidden lg:block col-span-5 text-[13px] leading-relaxed" style={{ fontFamily: 'Inter,sans-serif', color: 'rgba(255,255,255,0.35)' }}>
                      {svc.short}
                    </p>
                    <div className="col-span-2 lg:col-span-1 flex justify-end">
                      <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0"
                        style={{ borderColor: isOpen ? '#5BC8E8' : BD, color: isOpen ? '#5BC8E8' : 'rgba(255,255,255,0.3)' }}
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M6 2V10M2 6H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-12 pl-0 lg:pl-[8.33%]">
                        <div>
                          <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '15px', lineHeight: 1.75, color: 'rgba(255,255,255,0.45)' }}>
                            {svc.body}
                          </p>
                        </div>
                        <div>
                          <span className="nav-label block mb-4" style={{ fontSize: '10px', color: '#5BC8E8', opacity: 0.6 }}>WHAT'S INCLUDED</span>
                          <ul className="space-y-3">
                            {svc.bullets.map((b, bi) => (
                              <li key={bi} className="flex items-start gap-3" style={{ fontFamily: 'Inter,sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>
                                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0 bg-[#5BC8E8] opacity-50" />
                                {b}
                              </li>
                            ))}
                          </ul>
                          <div className="mt-8">
                            <Link
                              to="/contact"
                              className="nav-label inline-flex items-center gap-2 text-[#5BC8E8] hover:opacity-70 transition-opacity"
                              style={{ fontSize: '11px' }}
                            >
                              DISCUSS THIS SERVICE
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
          <div style={{ borderTop: `1px solid ${BD}` }} className="pb-4" />
        </div>
      </section>

      {/* ── HOW IT STARTS ── */}
      <section className="relative overflow-hidden" style={{ background: '#F7F8FA' }}>
        <div className="col-grid col-grid-light absolute inset-0">{[0,1,2,3,4].map(i => <span key={i} />)}</div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 py-24">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}
            className="pb-12" style={{ borderBottom: '1px solid rgba(10,15,26,0.07)' }}>
            <span className="nav-label block mb-4" style={{ fontSize: '10px', color: '#5BC8E8', opacity: 0.7 }}>THE FIRST STEP</span>
            <h2 className="display-xl" style={{ fontSize: 'clamp(2.4rem,5.5vw,6rem)', color: '#0A0F1A' }}>
              HOW WE<br />
              <span style={{ background: 'linear-gradient(135deg,#5BC8E8,#9BE4F5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>GET STARTED.</span>
            </h2>
          </motion.div>

          <div style={{ borderBottom: '1px solid rgba(10,15,26,0.07)' }}>
            {[
              { num: '01', title: 'Discovery Call', body: '30 minutes. You describe the problem, we ask the questions that matter. No pitch deck, no sales script. We\'re figuring out whether we\'re the right fit for each other.' },
              { num: '02', title: 'Scoped Proposal', body: 'Within 48 hours, you receive a fixed-scope proposal with timeline, team size, and budget. No open-ended retainers unless the project actually warrants it.' },
              { num: '03', title: 'Deliver & Iterate', body: 'Two-week sprints. You see working software every other Friday. We adjust scope based on what you learn, not based on an estimate made six months ago.' },
            ].map((step, i) => (
              <motion.div
                key={step.num} initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="group grid grid-cols-12 items-start gap-6 py-8 hover:pl-2 transition-all duration-300"
                style={{ borderTop: '1px solid rgba(10,15,26,0.07)' }}
              >
                <span className="col-span-2 lg:col-span-1 nav-label" style={{ fontSize: '10px', color: '#5BC8E8', opacity: 0.7 }}>{step.num}</span>
                <h3 className="col-span-10 lg:col-span-4 font-display font-bold leading-tight group-hover:text-[#5BC8E8] transition-colors"
                  style={{ fontSize: 'clamp(1.2rem,2.2vw,1.65rem)', letterSpacing: '-0.02em', color: '#0A0F1A', alignSelf: 'center' }}>
                  {step.title}
                </h3>
                <div className="hidden lg:flex col-span-1 items-center">
                  <div className="w-full h-px" style={{ background: 'rgba(91,200,232,0.2)' }} />
                </div>
                <p className="col-span-12 lg:col-span-6 text-[0.88rem] leading-relaxed" style={{ fontFamily: 'Inter,sans-serif', color: '#4B5563', alignSelf: 'center' }}>
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="pt-12 flex justify-center">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="nav-label flex items-center gap-2.5 px-8 py-4 rounded-full btn-glow"
                style={{ background: '#5BC8E8', color: '#0A0F1A', fontSize: '12px' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                BOOK THE DISCOVERY CALL
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  )
}
