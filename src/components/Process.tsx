import { motion } from 'framer-motion'

const steps = [
  { num: '01', title: 'Discovery',    body: 'Deep-dive workshops to map goals, constraints, and success metrics.' },
  { num: '02', title: 'Design',       body: 'Wireframes, prototypes, and system architecture aligned with your vision.' },
  { num: '03', title: 'Development',  body: 'Agile sprints with CI/CD pipelines, code reviews, and daily standups.' },
  { num: '04', title: 'Testing',      body: 'Automated test suites, load testing, and rigorous QA before any release.' },
  { num: '05', title: 'Deployment',   body: 'Zero-downtime rollouts with blue/green deploys and instant rollback.' },
  { num: '06', title: 'Support',      body: '24/7 monitoring, SLA-backed incident response, and proactive optimization.' },
]

const T = { border: 'rgba(10,15,26,0.07)', body: '#4B5563', muted: '#9CA3AF', accent: '#5BC8E8' }

export default function Process() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#F0F4F8' }}>
      <div className="col-grid col-grid-light absolute inset-0">
        {[0,1,2,3,4].map(i => <span key={i} />)}
      </div>

      <div className="max-w-[1440px] mx-auto px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.01 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="pt-24 pb-14 flex flex-col lg:flex-row lg:items-end justify-between gap-8"
          style={{ borderBottom: `1px solid ${T.border}` }}
        >
          <div>
            <span className="nav-label block mb-4" style={{ fontSize: '10px', color: T.accent, opacity: 0.7 }}>HOW WE WORK</span>
            <h2 className="display-xl" style={{ fontSize: 'clamp(2.8rem,6vw,6.5rem)', color: '#0A0F1A' }}>
              OUR PROVEN<br />
              <span style={{ background: 'linear-gradient(135deg,#5BC8E8,#9BE4F5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                PROCESS
              </span>
            </h2>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.7, color: T.body, maxWidth: '20rem' }}>
            A battle-tested framework that consistently ships on time and on budget.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="py-2" style={{ borderBottom: `1px solid ${T.border}` }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.01 }}
              transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="group grid grid-cols-12 gap-4 md:gap-6 py-8 hover:pl-2 transition-all duration-300"
              style={{ borderTop: `1px solid ${T.border}` }}
            >
              <div className="col-span-2 lg:col-span-1">
                <span className="display-xl" style={{ fontSize: 'clamp(2rem,5vw,4rem)', color: 'rgba(10,15,26,0.06)' }}>
                  {step.num}
                </span>
              </div>
              <h3 className="col-span-10 lg:col-span-4 font-display font-bold leading-tight group-hover:text-[#5BC8E8] transition-colors duration-200"
                style={{ fontSize: 'clamp(1.2rem,2.2vw,1.65rem)', letterSpacing: '-0.02em', color: '#0A0F1A', alignSelf: 'center' }}>
                {step.title}
              </h3>
              <div className="hidden lg:flex col-span-1 items-center">
                <div className="w-full h-px" style={{ background: 'rgba(91,200,232,0.15)' }} />
              </div>
              <p className="col-span-12 lg:col-span-6 text-[0.9rem] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', color: T.body, alignSelf: 'center' }}>
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
