import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import LineReveal from './LineReveal'

const steps = [
  { num: '01', title: 'Discovery',   body: 'Deep-dive workshops to map goals, constraints, and success metrics.' },
  { num: '02', title: 'Design',      body: 'Wireframes, prototypes, and system architecture aligned with your vision.' },
  { num: '03', title: 'Development', body: 'Agile sprints with CI/CD pipelines, code reviews, and daily standups.' },
  { num: '04', title: 'Testing',     body: 'Automated test suites, load testing, and rigorous QA before any release.' },
  { num: '05', title: 'Deployment',  body: 'Zero-downtime rollouts with blue/green deploys and instant rollback.' },
  { num: '06', title: 'Support',     body: '24/7 monitoring, SLA-backed incident response, and proactive optimization.' },
]

const T = { border: 'rgba(17,17,17,0.08)', body: '#4B5563', muted: '#9CA3AF', accent: '#5BC8E8' }

function ProgressLine() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'end 20%'],
  })
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])
  return (
    <div
      ref={ref}
      className="hidden lg:block absolute left-[calc(8.33%+1rem)] top-0 bottom-0 w-px"
      style={{ background: 'rgba(17,17,17,0.06)', transformOrigin: 'top' }}
    >
      <motion.div
        className="absolute inset-x-0 top-0"
        style={{
          scaleY,
          transformOrigin: 'top',
          bottom: 0,
          background: 'linear-gradient(to bottom, #5BC8E8, rgba(91,200,232,0.1))',
        }}
      />
    </div>
  )
}

const stepVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Process() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#EEEDE9' }}>
      <div className="col-grid col-grid-light absolute inset-0">
        {[0, 1, 2, 3, 4].map((i) => <span key={i} />)}
      </div>

      <div className="max-w-[1440px] mx-auto px-8 relative z-10">

        {/* Header */}
        <div
          className="pt-36 pb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-8"
          style={{ borderBottom: `1px solid ${T.border}` }}
        >
          <div>
            <motion.span
              className="nav-label block mb-4"
              style={{ fontSize: '10px', color: T.accent, opacity: 0.7 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 0.7, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              HOW WE WORK
            </motion.span>
            <h2 className="display-xl" style={{ fontSize: 'clamp(2.8rem,6vw,6.5rem)', color: '#111111' }}>
              <LineReveal delay={0.05} trigger="view">OUR PROVEN</LineReveal>
              <LineReveal delay={0.18} trigger="view">
                <span
                  style={{
                    background: 'linear-gradient(135deg,#5BC8E8,#9BE4F5)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  PROCESS
                </span>
              </LineReveal>
            </h2>
          </div>
          <motion.p
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.7, color: T.body, maxWidth: '20rem' }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            A battle-tested framework that consistently ships on time and on budget.
          </motion.p>
        </div>

        {/* Steps with animated connecting line */}
        <div className="py-2 relative" style={{ borderBottom: `1px solid ${T.border}` }}>
          <ProgressLine />
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              custom={i}
              variants={stepVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="group grid grid-cols-12 gap-4 md:gap-6 py-10 hover:pl-2 transition-all duration-300"
              style={{ borderTop: `1px solid ${T.border}` }}
            >
              <div className="col-span-2 lg:col-span-1 flex items-center">
                {/* Animated step dot */}
                <motion.div
                  className="relative hidden lg:flex w-5 h-5 items-center justify-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 + 0.2, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: i === 0 ? '#5BC8E8' : 'rgba(17,17,17,0.2)' }}
                  />
                </motion.div>
                <span className="display-xl lg:hidden" style={{ fontSize: 'clamp(2rem,5vw,4rem)', color: 'rgba(17,17,17,0.08)' }}>
                  {step.num}
                </span>
              </div>
              <h3
                className="col-span-10 lg:col-span-4 font-display font-bold leading-tight group-hover:text-[#5BC8E8] transition-colors duration-200"
                style={{ fontSize: 'clamp(1.2rem,2.2vw,1.65rem)', letterSpacing: '-0.02em', color: '#111111', alignSelf: 'center' }}
              >
                {step.title}
              </h3>
              <div className="hidden lg:flex col-span-1 items-center">
                <motion.div
                  className="w-full h-px"
                  style={{ background: 'rgba(91,200,232,0.15)' }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 + 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <p
                className="col-span-12 lg:col-span-6 text-[0.9rem] leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif', color: T.body, alignSelf: 'center' }}
              >
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
