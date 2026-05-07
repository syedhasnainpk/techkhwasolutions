import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const services = [
  { num: '01', title: 'Software Development', description: 'End-to-end custom software — from enterprise platforms to SaaS products built on modern stacks.', tags: ['React', 'Node.js', 'Python', '.NET'] },
  { num: '02', title: 'App Development', description: 'Native-quality iOS and Android applications with offline-first architecture and deep integrations.', tags: ['React Native', 'Flutter', 'Swift', 'Kotlin'] },
  { num: '03', title: 'Website Development', description: 'High-performance marketing sites, portals, and e-commerce platforms built for speed and conversion.', tags: ['Next.js', 'Tailwind', 'Shopify', 'WordPress'] },
  { num: '04', title: 'Datacenter Maintenance', description: 'Proactive monitoring, hardware lifecycle management, and 24/7 on-site support for critical infrastructure.', tags: ['VMware', 'Cisco', 'HPE', 'Dell EMC'] },
  { num: '05', title: 'Cloud Computing', description: 'Multi-cloud migrations, Kubernetes orchestration, serverless architectures, and FinOps optimization.', tags: ['AWS', 'Azure', 'GCP', 'Terraform'] },
  { num: '06', title: 'IT Consulting & Support', description: 'Technology roadmaps, security audits, compliance consulting, and round-the-clock helpdesk support.', tags: ['ISO 27001', 'SOC 2', 'GDPR', 'ITSM'] },
]

const T = {
  heading:   '#0A0F1A',
  body:      '#4B5563',
  muted:     '#9CA3AF',
  accent:    '#5BC8E8',
  border:    'rgba(10,15,26,0.08)',
}

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden" style={{ background: '#F7F8FA' }}>
      <div className="absolute inset-0 dot-grid-light pointer-events-none" style={{ opacity: 0.6 }} />

      <div className="max-w-[1440px] mx-auto px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.01 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="py-20 flex flex-col lg:flex-row lg:items-end justify-between gap-8"
          style={{ borderBottom: `1px solid ${T.border}` }}
        >
          <div>
            <span className="font-body font-semibold text-[11px] tracking-[0.14em] uppercase block mb-5" style={{ color: T.accent }}>What We Do</span>
            <h2 className="font-display font-bold leading-none" style={{ fontSize: 'clamp(2.4rem,5vw,4.5rem)', letterSpacing: '-0.03em', color: T.heading }}>
              Everything You Need<br />
              <span style={{ background: 'linear-gradient(135deg,#5BC8E8,#9BE4F5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                to Scale
              </span>
            </h2>
          </div>
          <p className="font-body text-[1.05rem] leading-relaxed max-w-sm lg:mb-1" style={{ color: T.body }}>
            A full-spectrum technology partner — from a single sprint to a multi-year digital transformation.
          </p>
        </motion.div>

        {/* Rows */}
        <div style={{ borderBottom: `1px solid ${T.border}` }}>
          {services.map((svc, i) => (
            <motion.div
              key={svc.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.01 }}
              transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ borderTop: `1px solid ${T.border}` }}
            >
              <a href="#" className="group flex flex-col md:flex-row md:items-center gap-5 py-7 hover:pl-2 transition-all duration-300">
                <span className="font-display font-bold w-10 shrink-0 text-[11px] tracking-[0.18em]" style={{ color: T.muted }}>{svc.num}</span>

                <h3 className="font-display font-bold md:w-64 shrink-0 leading-tight transition-colors duration-200 group-hover:text-[#5BC8E8]"
                  style={{ fontSize: 'clamp(1.1rem,2vw,1.5rem)', letterSpacing: '-0.015em', color: T.heading }}>
                  {svc.title}
                </h3>

                <p className="font-body text-[0.9rem] leading-relaxed flex-1" style={{ color: T.body }}>{svc.description}</p>

                <div className="hidden xl:flex flex-wrap gap-1.5 w-52 shrink-0">
                  {svc.tags.map(t => (
                    <span key={t} className="font-body text-[11px] px-2.5 py-1 rounded-full font-medium"
                      style={{ border: `1px solid rgba(10,15,26,0.12)`, color: T.muted, background: 'rgba(10,15,26,0.04)' }}>
                      {t}
                    </span>
                  ))}
                </div>

                <ArrowUpRight size={18} className="shrink-0 ml-auto md:ml-0 transition-all duration-250 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ color: T.muted }} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="py-8 flex items-center justify-between">
          <span className="font-body text-[0.85rem]" style={{ color: T.muted }}>6 core services</span>
          <motion.a href="#contact" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-body font-semibold text-[13px] text-white transition-colors"
            style={{ background: T.heading }}>
            Let's Business <ArrowUpRight size={13} />
          </motion.a>
        </div>
      </div>
    </section>
  )
}
