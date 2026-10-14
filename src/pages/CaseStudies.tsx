import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CTABanner from '../components/CTABanner'

const cases = [
  {
    id: '01',
    client: 'KP Labour Department',
    category: 'GOVERNMENT Â· DIGITAL PLATFORM',
    headline: 'DIGITALIZING A / GOVERNMENT DEPARTMENT.',
    summary: 'Replaced 100% paper-based labour management processes with a unified digital platform â€” reducing paper usage by 86% and cutting processing time from days to minutes.',
    challenge: 'The Khyber Pakhtunkhwa Labour Department managed all worker registrations, dispute filings, and inspection workflows through physical paperwork and manual records. The process was slow, error-prone, and inaccessible to workers outside major cities.',
    solution: [
      'End-to-end web portal for worker registration and document management',
      'Digital dispute filing and case tracking system',
      'Inspector dashboard with mobile-first data collection',
      'Automated approval workflows with role-based access control',
      'Reporting dashboard for departmental management',
    ],
    results: [
      { value: '86%', label: 'PAPER REDUCTION' },
      { value: '12Ã—', label: 'FASTER PROCESSING' },
      { value: '100%', label: 'AUDIT TRAIL' },
    ],
    stack: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
    duration: '5 months',
    teamSize: '4 engineers',
    accent: '#5BC8E8',
    gradient: 'linear-gradient(135deg, #060E1A 0%, #0A2440 50%, #0E3D5C 100%)',
  },
  {
    id: '02',
    client: 'Auto Accounting',
    category: 'FINANCE Â· SAAS PLATFORM',
    headline: 'REPLACING EXCEL / WITH A REAL SYSTEM.',
    summary: 'Built a purpose-built accounting platform for a CA firm that was running client audits, payroll, and tax workflows from spreadsheets â€” eliminating errors and boosting team productivity by 68%.',
    challenge: 'Auto Accounting, a growing chartered accountancy firm, was managing 80+ client accounts using a patchwork of Excel sheets, shared drives, and manual email chains. Version conflicts, data loss, and hours wasted on manual reconciliation were limiting growth.',
    solution: [
      'Multi-client accounting dashboard with real-time P&L views',
      'Automated payroll processing with statutory deduction calculations',
      'Tax filing workflow with document attachment and status tracking',
      'Client portal for document submission and statement access',
      'Audit trail and approval chain for all financial transactions',
    ],
    results: [
      { value: '68%', label: 'PRODUCTIVITY BOOST' },
      { value: '80+', label: 'CLIENTS MANAGED' },
      { value: '0', label: 'DATA LOSS INCIDENTS' },
    ],
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Vercel'],
    duration: '4 months',
    teamSize: '3 engineers',
    accent: '#9BE4F5',
    gradient: 'linear-gradient(135deg, #0A0618 0%, #1A1040 50%, #2A1860 100%)',
  },
  {
    id: '03',
    client: 'Dubai Real Estate',
    category: 'REAL ESTATE Â· AI PLATFORM',
    headline: 'AI-POWERED SALES / ACROSS EVERY CHANNEL.',
    summary: 'Designed and built an omnichannel AI sales platform for a Dubai real estate firm â€” unifying WhatsApp, email, and web leads into one pipeline with AI-assisted follow-up. Lead conversion tripled within 90 days of launch.',
    challenge: 'The client was managing property inquiries across WhatsApp Business, email, web forms, and in-person visits with zero integration between channels. Leads fell through the cracks. Agents duplicated effort. Follow-up was inconsistent and manually tracked.',
    solution: [
      'Unified CRM integrating WhatsApp, email, and web inquiry channels',
      'AI-powered lead scoring and automated follow-up sequencing',
      'Property matching engine based on buyer preference profiles',
      'Agent performance dashboard with deal pipeline visibility',
      'Automated document generation for proposals and contracts',
    ],
    results: [
      { value: '3Ã—', label: 'LEAD CONVERSION' },
      { value: '4', label: 'CHANNELS UNIFIED' },
      { value: '90', label: 'DAYS TO IMPACT' },
    ],
    stack: ['React', 'Python', 'OpenAI', 'WhatsApp Business API', 'MongoDB'],
    duration: '6 months',
    teamSize: '5 engineers',
    accent: '#F0C040',
    gradient: 'linear-gradient(135deg, #0E0A04 0%, #2A1E08 50%, #3D2C0E 100%)',
  },
  {
    id: '04',
    client: 'HomeCuras',
    category: 'HEALTHCARE Â· MOBILE & WEB',
    headline: 'A MARKETPLACE FOR / HOME HEALTHCARE.',
    summary: 'Built HomeCuras from the ground up â€” a two-sided marketplace connecting home healthcare providers with patients needing in-home medical care. 400+ bookings completed in the first quarter post-launch.',
    challenge: 'The healthcare market lacked a trusted, easy-to-use platform for patients to find and book home nursing, physiotherapy, and elder care services. Providers had no digital presence. Patients had no way to verify credentials or book in real time.',
    solution: [
      'Patient-facing app (iOS + Android) for browsing and booking care providers',
      'Provider app for managing availability, bookings, and patient records',
      'Admin dashboard for credential verification and dispute management',
      'Secure in-app payment with escrow for service completion',
      'Review and rating system with identity-verified patient feedback',
    ],
    results: [
      { value: '400+', label: 'BOOKINGS COMPLETED' },
      { value: '2', label: 'PLATFORMS (iOS + Android)' },
      { value: 'Q1', label: 'LIVE POST-LAUNCH' },
    ],
    stack: ['React Native', 'Expo', 'Node.js', 'Stripe', 'Firebase'],
    duration: '7 months',
    teamSize: '5 engineers',
    accent: '#5BC8E8',
    gradient: 'linear-gradient(135deg, #04100A 0%, #08261A 50%, #0D3828 100%)',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } }),
}

const BD = 'rgba(255,255,255,0.05)'

export default function CaseStudiesPage() {
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
            CASE STUDIES
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.22,1,0.36,1] }}
            className="display-xl text-white" style={{ fontSize: 'clamp(3rem,8.5vw,9.5rem)' }}
          >
            REAL PROBLEMS.<br />
            <span style={{ background: 'linear-gradient(135deg,#5BC8E8,#9BE4F5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              REAL RESULTS.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 max-w-xl text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter,sans-serif' }}
          >
            Four projects. Four industries. Each one started with a real problem that was costing the client
            time, money, or opportunity. Here's how we solved them.
          </motion.p>
        </div>
      </section>

      {/* â”€â”€ CASE STUDIES â”€â”€ */}
      {cases.map((c, cIdx) => {
        const isLight = cIdx % 2 === 1
        const bg = isLight ? '#F5F4F0' : '#111111'
        const textColor = isLight ? '#111111' : '#fff'
        const borderColor = isLight ? 'rgba(10,15,26,0.07)' : BD
        const bodyColor = isLight ? '#4B5563' : 'rgba(255,255,255,0.45)'

        return (
          <section key={c.id} className="relative overflow-hidden" style={{ background: bg }}>
            <div className={`col-grid ${isLight ? 'col-grid-light' : ''} absolute inset-0`}>
              {[0,1,2,3,4].map(i => <span key={i} />)}
            </div>
            <div className="relative z-10 max-w-[1440px] mx-auto px-8 py-24">

              {/* Header row */}
              <motion.div
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}
                className="flex items-start justify-between pb-12 gap-8 flex-wrap" style={{ borderBottom: `1px solid ${borderColor}` }}
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="nav-label" style={{ fontSize: '10px', color: c.accent, opacity: 0.7 }}>{c.id}</span>
                    <span className="nav-label" style={{ fontSize: '10px', color: c.accent, opacity: 0.5 }}>{c.category}</span>
                  </div>
                  <h2 className="display-xl" style={{ fontSize: 'clamp(2.2rem,5.5vw,6rem)', color: textColor }}>
                    {c.headline.split(' / ').map((line, li) => (
                      <span key={li} className={li === 1 ? 'block' : ''}>
                        {li === 1
                          ? <span style={{ background: `linear-gradient(135deg,${c.accent},#9BE4F5)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{line}</span>
                          : line + ' '}
                      </span>
                    ))}
                  </h2>
                </div>
                <div className="flex flex-col gap-1 text-right" style={{ fontFamily: 'Inter,sans-serif', fontSize: '12px', color: bodyColor, opacity: 0.6 }}>
                  <span>{c.duration}</span>
                  <span>{c.teamSize}</span>
                </div>
              </motion.div>

              {/* Results â€” big numbers */}
              <div className="grid grid-cols-3 py-12" style={{ borderBottom: `1px solid ${borderColor}` }}>
                {c.results.map((r, ri) => (
                  <motion.div
                    key={r.label} custom={ri} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
                    className="px-0 pr-8 last:pr-0"
                  >
                    <div className="display-xl mb-2" style={{ fontSize: 'clamp(2rem,4.5vw,5rem)', color: c.accent }}>{r.value}</div>
                    <div className="nav-label" style={{ fontSize: '10px', color: textColor, opacity: 0.3 }}>{r.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Body â€” two columns */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-12" style={{ borderBottom: `1px solid ${borderColor}` }}>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
                  <span className="nav-label block mb-4" style={{ fontSize: '10px', color: c.accent, opacity: 0.6 }}>THE CHALLENGE</span>
                  <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '15px', lineHeight: 1.75, color: bodyColor }}>
                    {c.challenge}
                  </p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.12 }}>
                  <span className="nav-label block mb-4" style={{ fontSize: '10px', color: c.accent, opacity: 0.6 }}>WHAT WE BUILT</span>
                  <ul className="space-y-3">
                    {c.solution.map((s, si) => (
                      <li key={si} className="flex items-start gap-3" style={{ fontFamily: 'Inter,sans-serif', fontSize: '14px', lineHeight: 1.65, color: bodyColor }}>
                        <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: c.accent, opacity: 0.6 }} />
                        {s}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Tech stack */}
              <div className="pt-8 flex items-center gap-6 flex-wrap">
                <span className="nav-label" style={{ fontSize: '10px', color: textColor, opacity: 0.2 }}>STACK</span>
                {c.stack.map((t) => (
                  <span key={t} className="pill-tag" style={{ borderColor: borderColor, color: textColor, opacity: 0.4, fontSize: '10px' }}>{t}</span>
                ))}
              </div>

            </div>
          </section>
        )
      })}

      {/* â”€â”€ BOTTOM CTA â”€â”€ */}
      <section className="relative overflow-hidden" style={{ background: '#111111' }}>
        <div className="col-grid absolute inset-0">{[0,1,2,3,4].map(i => <span key={i} />)}</div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 py-20" style={{ borderTop: `1px solid ${BD}` }}>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <span className="nav-label block mb-3" style={{ fontSize: '10px', color: '#5BC8E8', opacity: 0.6 }}>YOUR PROJECT NEXT</span>
              <h3 className="display-xl text-white" style={{ fontSize: 'clamp(1.8rem,4vw,4.5rem)' }}>
                READY TO BE<br />
                <span style={{ background: 'linear-gradient(135deg,#5BC8E8,#9BE4F5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  CASE STUDY 05?
                </span>
              </h3>
            </div>
            <div className="flex flex-col gap-3">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/contact"
                  className="nav-label flex items-center gap-2.5 px-8 py-4 rounded-full btn-glow"
                  style={{ background: '#5BC8E8', color: '#111111', fontSize: '12px' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  START THE CONVERSATION
                </Link>
              </motion.div>
              <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.18)', textAlign: 'center' }}>
                Free discovery call Â· Reply within 2 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  )
}
