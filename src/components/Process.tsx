import { motion } from 'framer-motion'

const steps = [
  { num: '01', title: 'Discovery',    body: 'Deep-dive workshops to map goals, constraints, and success metrics.' },
  { num: '02', title: 'Design',       body: 'Wireframes, prototypes, and system architecture aligned with your vision.' },
  { num: '03', title: 'Development',  body: 'Agile sprints with CI/CD pipelines, code reviews, and daily standups.' },
  { num: '04', title: 'Testing',      body: 'Automated test suites, load testing, and rigorous QA before any release.' },
  { num: '05', title: 'Deployment',   body: 'Zero-downtime rollouts with blue/green deploys and instant rollback.' },
  { num: '06', title: 'Support',      body: '24/7 monitoring, SLA-backed incident response, and proactive optimization.' },
]

const T = {
  heading: '#0A0F1A',
  body:    '#4B5563',
  muted:   '#9CA3AF',
  accent:  '#5BC8E8',
  border:  'rgba(10,15,26,0.08)',
}

export default function Process() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#F0F4F8' }}>
      <div className="absolute inset-0 grid-bg-light pointer-events-none" style={{ opacity: 0.5 }} />

      <div className="max-w-[1440px] mx-auto px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.01 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="py-20 flex flex-col lg:flex-row lg:items-end justify-between gap-8"
          style={{ borderBottom: `1px solid ${T.border}` }}
        >
          <div>
            <span className="font-body font-semibold text-[11px] tracking-[0.14em] uppercase block mb-5" style={{ color: T.accent }}>How We Work</span>
            <h2 className="font-display font-bold leading-none" style={{ fontSize: 'clamp(2.4rem,5vw,4.5rem)', letterSpacing: '-0.03em', color: T.heading }}>
              Our Proven<br />
              <span style={{ background: 'linear-gradient(135deg,#5BC8E8,#9BE4F5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Process
              </span>
            </h2>
          </div>
          <p className="font-body text-[1.05rem] leading-relaxed max-w-xs lg:mb-1" style={{ color: T.body }}>
            A battle-tested framework that consistently ships on time and on budget.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="py-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.01 }}
              transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="group grid grid-cols-12 gap-4 md:gap-6 py-9 hover:pl-2 transition-all duration-300"
              style={{ borderTop: `1px solid ${T.border}` }}
            >
              {/* Big faded number */}
              <div className="col-span-3 md:col-span-2 lg:col-span-1 select-none">
                <span className="font-display font-bold leading-none" style={{ fontSize: 'clamp(3rem,6vw,5.5rem)', letterSpacing: '-0.04em', color: 'rgba(10,15,26,0.07)' }}>
                  {step.num}
                </span>
              </div>

              {/* Title */}
              <h3 className="col-span-9 md:col-span-4 lg:col-span-3 font-display font-bold leading-tight transition-colors duration-200 group-hover:text-[#5BC8E8]"
                style={{ fontSize: 'clamp(1.2rem,2.2vw,1.75rem)', letterSpacing: '-0.02em', color: T.heading, alignSelf: 'center' }}>
                {step.title}
              </h3>

              {/* Connector */}
              <div className="hidden lg:flex col-span-1 items-center">
                <div className="w-full h-px group-hover:opacity-40 transition-opacity" style={{ background: T.accent, opacity: 0.15 }} />
              </div>

              {/* Body */}
              <p className="col-span-12 lg:col-span-7 font-body text-[1rem] leading-relaxed" style={{ color: T.body, alignSelf: 'center' }}>
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
