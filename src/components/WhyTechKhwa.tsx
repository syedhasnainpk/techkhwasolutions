import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const pillars = [
  { num: '01', title: 'Expert Team',        body: 'Seasoned engineers with 5–12 years of experience embedded into your workflow.' },
  { num: '02', title: 'Agile Delivery',     body: '2-week sprints. Transparent standups. Zero surprises at go-live.' },
  { num: '03', title: '24 / 7 Support',     body: 'Round-the-clock monitoring and SLA-backed incident response — always on.' },
  { num: '04', title: 'Scalable by Design', body: 'Architectures built to handle 10× growth from day one — no rewrites required.' },
]

const T = {
  heading: '#0A0F1A',
  body:    '#4B5563',
  muted:   '#9CA3AF',
  accent:  '#5BC8E8',
  border:  'rgba(10,15,26,0.08)',
  numBg:   'rgba(10,15,26,0.05)',
}

export default function WhyTechKhwa() {
  return (
    <section id="about" className="relative overflow-hidden" style={{ background: '#FFFFFF' }}>
      <div className="absolute inset-0 dot-grid-light pointer-events-none" style={{ opacity: 0.45 }} />

      <div className="max-w-[1440px] mx-auto px-8 relative z-10">

        {/* Top split */}
        <div className="py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-end" style={{ borderBottom: `1px solid ${T.border}` }}>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.01 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-body font-semibold text-[11px] tracking-[0.14em] uppercase block mb-5" style={{ color: T.accent }}>Why TechKhwa</span>
            <h2 className="font-display font-bold leading-none" style={{ fontSize: 'clamp(2.4rem,5vw,4.5rem)', letterSpacing: '-0.03em', color: T.heading }}>
              We Don't Just Build<br />
              <span style={{ background: 'linear-gradient(135deg,#5BC8E8,#9BE4F5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Software.
              </span>
              <br />
              We Build{' '}
              <span className="relative inline-block">
                Businesses.
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.01 }}
                  transition={{ delay: 0.4, duration: 0.65 }}
                  className="absolute -bottom-1.5 left-0 right-0 h-0.5 origin-left block"
                  style={{ background: T.accent }}
                />
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.01 }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            <p className="font-body text-[1.05rem] leading-relaxed" style={{ color: T.body }}>
              TechKhwa Solutions is your long-term digital growth partner. Our engineers embed into your team, understand your KPIs, and ship technology that moves the needle.
            </p>
            <a href="#contact" className="inline-flex items-center gap-1.5 font-body font-semibold text-[13px] w-fit transition-colors hover:opacity-70"
              style={{ color: T.accent }}>
              Let's Talk <ArrowUpRight size={15} />
            </a>
          </motion.div>
        </div>

        {/* Pillar rows */}
        <div>
          {pillars.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.01 }}
              transition={{ delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="group grid grid-cols-12 gap-6 py-9 hover:pl-1.5 transition-all duration-300"
              style={{ borderTop: `1px solid ${T.border}` }}
            >
              {/* Faded number */}
              <div className="col-span-3 md:col-span-2 lg:col-span-1 select-none">
                <span className="font-display font-bold leading-none" style={{ fontSize: 'clamp(3rem,6vw,5.5rem)', letterSpacing: '-0.04em', color: 'rgba(10,15,26,0.07)' }}>
                  {p.num}
                </span>
              </div>

              {/* Title */}
              <h3 className="col-span-9 md:col-span-4 lg:col-span-3 font-display font-bold leading-tight transition-colors duration-200 group-hover:text-[#5BC8E8]"
                style={{ fontSize: 'clamp(1.2rem,2.2vw,1.75rem)', letterSpacing: '-0.02em', color: T.heading, alignSelf: 'center' }}>
                {p.title}
              </h3>

              {/* Body */}
              <p className="col-span-12 lg:col-span-7 font-body text-[1rem] leading-relaxed" style={{ color: T.body, alignSelf: 'center' }}>
                {p.body}
              </p>

              {/* Arrow */}
              <div className="hidden lg:flex col-span-1 justify-end items-center">
                <ArrowUpRight size={17} className="transition-all duration-250 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ color: T.muted }} />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
