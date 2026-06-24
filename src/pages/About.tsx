import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const team = [
  {
    name: 'Hasnain Ali',
    role: 'Founder & CEO',
    bio: 'Full-stack engineer and product strategist. Led 15+ projects across SaaS, fintech, and health-tech. Obsessed with execution speed without sacrificing engineering quality.',
    initials: 'HA',
    accent: '#5BC8E8',
  },
  {
    name: 'Fatima Zahra',
    role: 'Lead Frontend Engineer',
    bio: 'Expert in React, TypeScript, and design systems. Shipped pixel-perfect UIs for clients that have raised over $40M combined.',
    initials: 'FZ',
    accent: '#9BE4F5',
  },
  {
    name: 'Usman Tariq',
    role: 'Backend & DevOps Lead',
    bio: '10 years managing production infrastructure. Designed systems serving 2M+ daily users. Cloud-agnostic but AWS-certified.',
    initials: 'UT',
    accent: '#5BC8E8',
  },
  {
    name: 'Sara Malik',
    role: 'UI/UX Design Lead',
    bio: 'Former product designer at a Series B fintech. Brings research-backed design thinking to every project — no decoration without purpose.',
    initials: 'SM',
    accent: '#9BE4F5',
  },
]

const credibility = [
  { value: '15+', label: 'Projects delivered', sub: 'across multiple industries' },
  { value: '2+', label: 'Years in business', sub: 'founded 2023' },
  { value: '98%', label: 'Client retention', sub: 'clients who stay come back' },
  { value: '5', label: 'Countries served', sub: 'globally distributed clients' },
]

const values = [
  {
    title: 'Ownership over excuses',
    body: 'If it shipped late, that\'s on us. If there\'s a bug in production, we fix it before you finish typing the message. We treat your product like it\'s our product.',
  },
  {
    title: 'Clarity above all',
    body: 'We don\'t hide behind jargon. You\'ll always know exactly where your project stands, what\'s blocking it, and what\'s coming next.',
  },
  {
    title: 'Speed with quality',
    body: 'Fast doesn\'t mean sloppy. Our processes — code review, automated testing, CI/CD — exist so we can move fast without creating debt that bites you six months later.',
  },
  {
    title: 'No ghost vendors',
    body: 'After launch, we stick around. Bug reports, feature requests, infrastructure scaling — our clients have a direct line to the engineer who built it.',
  },
]

const timeline = [
  { year: '2023', event: 'TechKhwa founded', detail: 'Started with web development — custom websites, business platforms, and digital products. First clients onboarded within weeks of launch.' },
  { year: '2023', event: 'Government sector entry', detail: 'Delivered the KP Labour Department digitalization — paper-based workflows moved fully online, 86% paper reduction.' },
  { year: '2024', event: 'Services expanded', detail: 'Grew beyond web dev into mobile apps, AI integration, DevOps, and UI/UX design as client needs evolved.' },
  { year: '2024', event: 'First international client', detail: 'Delivered an AI-powered omnichannel sales platform for a real estate firm in Dubai, UAE.' },
  { year: '2024', event: 'CA firm digitalization', detail: 'Replaced paper auditing and Excel workflows with a unified platform for Auto Accounting — 68% productivity boost.' },
  { year: '2025', event: 'TechKhwa today', detail: '15+ projects delivered across 5 countries. Full-service technology partner for businesses that treat software as a competitive advantage.' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] } }),
}

export default function AboutPage() {
  return (
    <div className="bg-[#0A0F1A] text-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 grid-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1A] via-transparent to-[#0A0F1A] pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="section-label mb-4">
            About TechKhwa
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
            We build software<br /><span className="text-gradient">that earns its keep.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-[#8899AA] text-lg md:text-xl max-w-2xl leading-relaxed">
            TechKhwa Solutions is a product engineering company. We partner with founders and business leaders to turn technology problems into competitive advantages — not just working code.
          </motion.p>
        </div>
      </section>

      {/* Credibility stats */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {credibility.map((c, i) => (
            <motion.div
              key={c.label}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="p-6 rounded-2xl border border-[rgba(91,200,232,0.12)] bg-[rgba(91,200,232,0.03)]"
            >
              <div className="text-4xl font-bold text-gradient mb-1">{c.value}</div>
              <div className="text-sm font-semibold mb-0.5">{c.label}</div>
              <div className="text-xs text-[#667788]">{c.sub}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <p className="section-label mb-4">Our Story</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Started focused. Grew deliberately.</h2>
          <div className="space-y-5 text-[#8899AA] leading-relaxed">
            <p>
              TechKhwa was founded in 2023 with a clear starting point: web development done properly. No inflated promises, no offshore hand-offs — just a focused team that delivered websites and web platforms that actually worked. Early clients stuck around, referred others, and started asking for more.
            </p>
            <p>
              That demand shaped what we became. As clients grew, so did the problems they brought us — mobile apps, AI integrations, cloud infrastructure, workflow automation. We didn't expand for the sake of it. We expanded because clients we already trusted asked us to solve problems we knew we could solve.
            </p>
            <p>
              Two years in, we've delivered 15+ projects across 5 countries — from digitalizing a government department in KP to building an AI sales platform for a real estate firm in Dubai. We're still the same team that started: direct, accountable, and genuinely invested in what we build.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <p className="section-label mb-10">How We Got Here</p>
        <div className="relative">
          <div className="absolute left-16 top-0 bottom-0 w-px bg-gradient-to-b from-[#5BC8E8] to-transparent opacity-20" />
          <div className="space-y-8">
            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
                className="flex gap-8"
              >
                <div className="w-16 flex-shrink-0 text-right">
                  <span className="text-xs font-bold text-[#5BC8E8] tracking-wider">{t.year}</span>
                </div>
                <div className="pb-8">
                  <div className="h-2 w-2 rounded-full bg-[#5BC8E8] -ml-1 mb-3 mt-0.5" />
                  <h3 className="font-bold mb-1">{t.event}</h3>
                  <p className="text-sm text-[#8899AA]">{t.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[rgba(91,200,232,0.02)] border-t border-b border-[rgba(91,200,232,0.08)] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="section-label mb-4 text-center">How We Work</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">The rules we don't bend.</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-7 rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.02)]"
              >
                <h3 className="font-bold text-lg mb-3">{v.title}</h3>
                <p className="text-sm text-[#8899AA] leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <p className="section-label mb-4">The Team</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">People, not profiles.</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="p-6 rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.02)] group hover:border-[rgba(91,200,232,0.25)] transition-colors"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-bold text-[#0A0F1A] mb-5"
                style={{ background: `linear-gradient(135deg, ${member.accent}, #9BE4F5)` }}
              >
                {member.initials}
              </div>
              <div className="font-bold mb-0.5">{member.name}</div>
              <div className="text-xs text-[#5BC8E8] font-medium mb-3">{member.role}</div>
              <p className="text-xs text-[#8899AA] leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-sm text-[#667788] mt-8">
          A growing team of engineers, designers, and specialists — all senior, all hands-on.
        </p>
      </section>

      {/* CTA */}
      <section className="border-t border-[rgba(255,255,255,0.06)] py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="section-label mb-4">Work With Us</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your technology partner,<br />
            <span className="text-gradient">not just a developer team.</span>
          </h2>
          <p className="text-[#8899AA] mb-8">We respond to every serious inquiry within 4 business hours. Let's figure out if we're the right fit.</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#5BC8E8] text-[#0A0F1A] font-semibold px-8 py-4 rounded-full text-sm hover:bg-[#9BE4F5] transition-colors btn-glow"
          >
            Start the Conversation
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
