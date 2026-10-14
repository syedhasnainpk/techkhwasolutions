import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const phases = [
  {
    num: '01',
    title: 'PLAN.',
    body: 'Deep discovery, technical scoping, and architecture design. We define exactly what to build — and why — before a single line of code.',
  },
  {
    num: '02',
    title: 'BUILD.',
    body: 'Agile sprints, daily standups, CI/CD pipelines. We ship fast without cutting corners, with transparent progress every step.',
  },
  {
    num: '03',
    title: 'SCALE.',
    body: 'Post-launch support, infrastructure optimization, and feature evolution. Your product grows with your business.',
  },
]

const services = [
  { num: '01', title: 'Software Development',   description: 'End-to-end custom software — from enterprise platforms to SaaS products built on modern stacks.',                           tags: ['React', 'Node.js', 'Python', '.NET'] },
  { num: '02', title: 'App Development',         description: 'Native-quality iOS and Android applications with offline-first architecture and deep integrations.',                       tags: ['React Native', 'Flutter', 'Swift', 'Kotlin'] },
  { num: '03', title: 'Website Development',     description: 'High-performance marketing sites, portals, and e-commerce platforms built for speed and conversion.',                   tags: ['Next.js', 'Tailwind', 'Shopify', 'WordPress'] },
  { num: '04', title: 'Datacenter Maintenance',  description: 'Proactive monitoring, hardware lifecycle management, and 24/7 on-site support for critical infrastructure.',            tags: ['VMware', 'Cisco', 'HPE', 'Dell EMC'] },
  { num: '05', title: 'Cloud Computing',         description: 'Multi-cloud migrations, Kubernetes orchestration, serverless architectures, and FinOps optimization.',                  tags: ['AWS', 'Azure', 'GCP', 'Terraform'] },
  { num: '06', title: 'IT Consulting & Support', description: 'Technology roadmaps, security audits, compliance consulting, and round-the-clock helpdesk support.',                   tags: ['ISO 27001', 'SOC 2', 'GDPR', 'ITSM'] },
]

const T = { border: 'rgba(17,17,17,0.08)', muted: '#9CA3AF', accent: '#5BC8E8', body: '#4B5563' }

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden" style={{ background: '#F5F4F0' }}>
      <div className="col-grid col-grid-light absolute inset-0">
        {[0,1,2,3,4].map(i => <span key={i} />)}
      </div>

      <div className="max-w-[1440px] mx-auto px-8 relative z-10">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.01 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="pt-36 pb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-8"
          style={{ borderBottom: `1px solid ${T.border}` }}
        >
          <div>
            <span className="nav-label block mb-4" style={{ fontSize: '10px', color: T.accent, opacity: 0.7 }}>WHAT WE DO</span>
            <h2 className="display-xl" style={{ fontSize: 'clamp(2.8rem,6vw,6.5rem)', color: '#111111' }}>
              EVERYTHING<br />
              <span style={{ background: 'linear-gradient(135deg,#5BC8E8,#9BE4F5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                YOU NEED
              </span>
            </h2>
          </div>
          <p className="text-[1rem] leading-relaxed max-w-xs lg:mb-2" style={{ fontFamily: 'Inter, sans-serif', color: T.body }}>
            A full-spectrum technology partner — from a single sprint to a multi-year digital transformation.
          </p>
        </motion.div>

        {/* ── Three phase cards (Dylan's Define/Design/Develop) ── */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: T.border }}>
          {phases.map((phase, i) => (
            <motion.div
              key={phase.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.01 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group p-10 flex flex-col gap-6 cursor-default"
              style={{ background: '#F5F4F0' }}
            >
              <span className="nav-label" style={{ fontSize: '9px', color: T.muted }}>0{i + 1}</span>
              <h3
                className="display-xl group-hover:text-[#5BC8E8] transition-colors duration-300"
                style={{ fontSize: 'clamp(2.5rem,4.5vw,5rem)', color: '#111111' }}
              >
                {phase.title}
              </h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: T.body, lineHeight: 1.7 }}>
                {phase.body}
              </p>
              <div className="mt-auto">
                <div className="w-8 h-px group-hover:w-16 transition-all duration-400" style={{ background: '#5BC8E8' }} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Service list ── */}
        <div style={{ borderBottom: `1px solid ${T.border}` }}>
          {services.map((svc, i) => (
            <motion.div
              key={svc.num}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.01 }}
              transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ borderTop: `1px solid ${T.border}` }}
            >
              <div className="group flex flex-col md:flex-row md:items-center gap-5 py-10 hover:pl-2 transition-all duration-300">
                <span className="nav-label w-8 shrink-0" style={{ fontSize: '10px', color: T.muted }}>{svc.num}</span>
                <h3 className="font-display font-bold md:w-64 shrink-0 leading-tight transition-colors duration-200 group-hover:text-[#5BC8E8]"
                  style={{ fontSize: 'clamp(1.1rem,2vw,1.4rem)', letterSpacing: '-0.015em', color: '#111111' }}>
                  {svc.title}
                </h3>
                <p className="flex-1 text-[0.88rem] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', color: T.body }}>{svc.description}</p>
                <div className="hidden xl:flex flex-wrap gap-1.5 w-52 shrink-0">
                  {svc.tags.map(t => (
                    <span key={t} className="text-[10px] px-2.5 py-1 rounded-full font-medium"
                      style={{ border: `1px solid rgba(17,17,17,0.12)`, color: T.muted, background: 'rgba(17,17,17,0.04)', fontFamily: 'Inter, sans-serif' }}>
                      {t}
                    </span>
                  ))}
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 ml-auto md:ml-0 opacity-25 group-hover:opacity-70 transition-opacity">
                  <path d="M3 13L13 3M13 3H6M13 3V10" stroke="#0A0F1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer row */}
        <div className="py-8 flex items-center justify-between">
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: T.muted }}>6 core services</span>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/contact"
              className="nav-label flex items-center gap-2.5 px-6 py-3 rounded-full transition-colors text-white"
              style={{ background: '#111111', fontSize: '11px' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#5BC8E8]" />
              LET'S BUILD TOGETHER
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
