import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const cases = [
  {
    id: '01',
    client: 'Labour Department — KP',
    industry: 'Government & Public Sector',
    tag: 'Digital Transformation',
    headline: 'Took a paper-driven government department fully online — 86% reduction in paper use, zero unnecessary office visits.',
    summary:
      'The Labour Department of Khyber Pakhtunkhwa ran entirely on paper. Citizens had to visit government offices multiple times — often travelling long distances — just to submit forms, follow up on applications, and collect approvals. Files were stored physically, retrieval was slow, and records were at constant risk of loss or damage. TechKhwa digitalized the entire workflow: from citizen-facing application portals to internal case management, secure document storage, and real-time status tracking.',
    challenge:
      'Every application required physical presence — sometimes 4–5 office visits per case. Paper files were stored across multiple locations with no unified search. Data loss from misplaced files was a recurring problem. Department staff spent the majority of their day managing paper rather than serving citizens.',
    solution: [
      'Citizen-facing web portal where all applications, forms, and document submissions are completed online — no office visit required.',
      'Secure document management system with encrypted storage, role-based access, and full audit trail for every file and action.',
      'Real-time application status tracking with automated SMS and email notifications so citizens always know where their case stands.',
      'Internal case management dashboard for department staff — assign, review, approve, and route cases digitally with full history.',
      'Searchable centralized database replacing physical file rooms — any record retrievable in seconds.',
      'Admin reporting panel giving leadership visibility into case volumes, processing times, and departmental workload.',
    ],
    results: [
      { label: 'Paper use reduced', value: '86%', period: 'vs. pre-digitalization baseline' },
      { label: 'Office visits eliminated', value: '~100%', period: 'all submissions now fully online' },
      { label: 'Record retrieval', value: 'Seconds', period: 'down from hours searching physical files' },
      { label: 'Data security', value: 'Encrypted', period: 'secure storage with role-based access control' },
    ],
    stack: ['React', 'Node.js', 'PostgreSQL', 'AWS S3', 'SMS Gateway', 'RBAC', 'REST API'],
    duration: 'Ongoing',
    teamSize: '5 engineers + 1 designer',
  },
  {
    id: '02',
    client: 'Auto Accounting',
    industry: 'Chartered Accountancy & Finance',
    tag: 'Workflow Automation',
    headline: 'Replaced paper, Excel, and chaos with one platform — 68% productivity boost and million-dollar clients won.',
    summary:
      'Auto Accounting, a chartered accountancy firm, was doing everything manually — auditing on paper, taxation in Excel, and client communication over email. Every engagement meant stacks of physical documents, hours of spreadsheet work, and constant risk of errors or lost files. TechKhwa replaced the entire fragmented workflow with a single unified platform covering auditing, taxation, client management, and reporting. The result: the same team closed significantly more work and used the platform itself as proof of capability to win enterprise clients.',
    challenge:
      'Every core CA function — audit preparation, tax filing, client reporting — was split across paper files and Excel sheets with no connection between them. Data had to be re-entered multiple times across different spreadsheets. A single tax filing or audit report could take days to compile manually. Version control was nonexistent — the latest figures lived in someone\'s inbox or on a physical desk. The firm was capable of far more, but the tools were the bottleneck.',
    solution: [
      'Unified CA platform replacing all paper and Excel workflows — auditing, taxation, and client reporting in one system.',
      'Digital audit module: structured checklists, document uploads, working paper trails, and sign-off workflows — fully paperless.',
      'Taxation module handling return preparation, computation, and filing — pre-built templates for common tax scenarios eliminate repetitive data entry.',
      'Automated financial report generation: pull figures once, generate client-ready reports in minutes instead of days.',
      'Client portal where each client uploads documents, views their financials, and tracks the status of ongoing engagements.',
      'Deadline calendar with automated alerts ensuring no filing deadline is ever missed across the entire client portfolio.',
      'Role-based access for partners, senior accountants, and juniors — work flows through proper review and approval stages.',
    ],
    results: [
      { label: 'Productivity boost', value: '+68%', period: 'work rate per accountant per month' },
      { label: 'Tools replaced', value: '1 platform', period: 'paper + Excel + email → single system' },
      { label: 'Clients acquired', value: 'Million-$', period: 'enterprise clients won using the platform' },
      { label: 'Report prep time', value: 'Minutes', period: 'down from days of manual spreadsheet work' },
    ],
    stack: ['React', 'Node.js', 'PostgreSQL', 'PDF Generation', 'Excel Import/Export', 'Automated Reminders', 'RBAC'],
    duration: '5 months',
    teamSize: '3 engineers + 1 designer',
  },
  {
    id: '03',
    client: 'Confidential — Dubai Real Estate',
    industry: 'Real Estate & Property Sales · Dubai, UAE',
    tag: 'Omnichannel AI Platform',
    headline: 'Unified 8 communication channels into one AI-powered sales platform — no lead goes unanswered, day or night.',
    summary:
      'A fast-growing real estate firm in Dubai was running their entire sales operation across a patchwork of disconnected tools — WhatsApp, 3CX, SMS, email, Facebook Messenger, Instagram DMs, Zoom calls, and a separate CRM. In Dubai\'s hyper-competitive property market, response speed is the difference between a deal and a lost client. Agents were switching between 6–8 apps constantly, leads were falling through cracks between platforms, supervisors had no visibility into agent conversations, and after-hours enquiries went cold until the next morning. TechKhwa built a unified omnichannel sales platform that brought every channel into one dashboard — and layered an AI agent on top that handles calls, texts, and messages whenever a human agent is unavailable.',
    challenge:
      'Eight separate communication tools with no unified inbox meant agents spent more time switching apps than talking to clients. A lead that came in on Instagram at 9 PM sat unread until 9 AM — a 12-hour cold window in a market where response time is everything. Supervisors had no way to review calls or monitor agent conversations for quality without manually chasing recordings stored in different systems. And with no AI fallback, any gap in agent availability meant lost enquiries.',
    solution: [
      'Unified omnichannel inbox: WhatsApp, 3CX, SMS, email, Facebook Messenger, Instagram DMs, and web chat — all in a single real-time dashboard.',
      'AI voice agent that automatically picks up inbound calls when no human agent is available — answers property queries, captures lead details, and books viewings.',
      'AI text agent handles WhatsApp, SMS, and social DMs after hours — responds to enquiries, qualifies leads, and routes hot leads to the on-call agent.',
      'Automatic call recording with AI-generated transcriptions — supervisors can search, review, and annotate every call from one panel.',
      'Supervisor monitoring dashboard: live agent activity, conversation history across all channels, response time metrics, and lead stage tracking.',
      'Smart lead routing — incoming enquiries are scored by intent and automatically assigned to the most suitable available agent.',
      'Full conversation history per contact: one timeline showing every WhatsApp message, call, email, and DM regardless of which channel it came through.',
    ],
    results: [
      { label: 'Channels unified', value: '8', period: 'WhatsApp, 3CX, SMS, email, FB, IG, Zoom, web chat' },
      { label: 'After-hours leads', value: '100%', period: 'captured by AI agent — zero cold enquiries' },
      { label: 'Supervisor visibility', value: 'Full', period: 'recordings + transcriptions across all channels' },
      { label: 'Response time', value: 'Instant', period: 'AI responds within seconds, 24/7' },
    ],
    stack: ['React', 'Node.js', 'PostgreSQL', 'Twilio', 'WhatsApp Business API', '3CX API', 'OpenAI', 'WebSockets', 'AWS'],
    duration: '6 months',
    teamSize: '4 engineers + 1 AI specialist',
  },
  {
    id: '04',
    client: 'RetailEdge',
    industry: 'E-Commerce & Retail',
    tag: 'Full-Stack Platform',
    headline: 'From fragmented tools to one unified commerce engine — 312% revenue uplift in 8 months.',
    summary:
      'RetailEdge operated across three disconnected platforms — Shopify, a custom inventory tool, and a legacy ERP. Orders fell through cracks, stock was miscounted, and the team spent 40+ hours per week reconciling data. TechKhwa replaced the stack with a unified Next.js + Node.js + PostgreSQL platform, real-time inventory sync, and an ML-powered demand forecast module.',
    challenge:
      'Three siloed systems created constant data drift. The legacy ERP API was XML-only with no documentation. Live inventory updates lagged by 2–4 hours, causing frequent overselling and refunds.',
    solution: [
      'Custom GraphQL aggregation layer that spoke to all three legacy systems simultaneously during the 12-week migration window — zero downtime.',
      'Real-time WebSocket inventory sync across 6 warehouses with conflict-resolution logic.',
      'Demand forecast module trained on 3 years of SKU data — reduced overstock by 38%.',
      'Admin dashboard with one-click markdown automation and profit-margin overlays per product.',
    ],
    results: [
      { label: 'Revenue growth', value: '+312%', period: 'within 8 months' },
      { label: 'Order processing time', value: '−74%', period: 'from 18 min → 4.7 min per order' },
      { label: 'Overstock reduction', value: '−38%', period: 'via ML demand forecasting' },
      { label: 'Manual reconciliation hours', value: '−97%', period: '40 hrs/week → 1.2 hrs/week' },
    ],
    stack: ['Next.js 14', 'Node.js', 'PostgreSQL', 'Redis', 'WebSockets', 'Python (ML)', 'AWS'],
    duration: '8 months',
    teamSize: '4 engineers',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] } }),
}

export default function CaseStudiesPage() {
  return (
    <div className="bg-[#0A0F1A] text-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden grid-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1A] via-transparent to-[#0A0F1A] pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="section-label mb-4"
          >Case Studies</motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
          >
            Real problems.<br />
            <span className="text-gradient">Real results.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[#8899AA] text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            We don't build to ship — we build to perform. Here's what that looks like in practice across industries we've transformed.
          </motion.p>
        </div>
      </section>

      {/* Cases */}
      <section className="max-w-5xl mx-auto px-6 pb-32 space-y-32">
        {cases.map((c, idx) => (
          <motion.article
            key={c.id}
            custom={idx}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
          >
            {/* Case header */}
            <div className="flex flex-wrap items-start gap-4 mb-10">
              <span className="step-num leading-none">{c.id}</span>
              <div className="pt-1 flex-1 min-w-0">
                <div className="flex flex-wrap gap-3 mb-2">
                  <span className="section-label">{c.industry}</span>
                  <span className="px-3 py-0.5 rounded-full border border-[rgba(91,200,232,0.2)] text-xs text-[#5BC8E8] font-medium">
                    {c.tag}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-1">{c.client}</h2>
              </div>
            </div>

            {/* Headline */}
            <p className="text-xl md:text-2xl font-semibold text-white/90 leading-snug mb-6 border-l-2 border-[#5BC8E8] pl-5">
              {c.headline}
            </p>

            {/* Summary */}
            <p className="text-[#8899AA] leading-relaxed mb-10">{c.summary}</p>

            {/* Challenge */}
            <div className="mb-8">
              <h3 className="text-xs font-semibold tracking-widest uppercase text-[#5BC8E8] mb-3">The Challenge</h3>
              <p className="text-[#AAB8C8] leading-relaxed">{c.challenge}</p>
            </div>

            {/* Solution */}
            <div className="mb-10">
              <h3 className="text-xs font-semibold tracking-widest uppercase text-[#5BC8E8] mb-4">What We Built</h3>
              <ul className="space-y-3">
                {c.solution.map((s, i) => (
                  <li key={i} className="flex gap-3 text-[#AAB8C8] leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#5BC8E8] flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Results */}
            <div className="mb-10">
              <h3 className="text-xs font-semibold tracking-widest uppercase text-[#5BC8E8] mb-5">The Results</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {c.results.map((r, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-xl border border-[rgba(91,200,232,0.12)] bg-[rgba(91,200,232,0.03)]"
                  >
                    <div className="text-3xl font-bold text-gradient mb-1">{r.value}</div>
                    <div className="text-xs text-[#5BC8E8] font-semibold mb-1">{r.label}</div>
                    <div className="text-xs text-[#667788]">{r.period}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Meta */}
            <div className="flex flex-wrap gap-6 items-center pt-6 border-t border-[rgba(255,255,255,0.06)]">
              <div>
                <p className="text-xs text-[#667788] mb-1">Timeline</p>
                <p className="text-sm font-semibold">{c.duration}</p>
              </div>
              <div>
                <p className="text-xs text-[#667788] mb-1">Team</p>
                <p className="text-sm font-semibold">{c.teamSize}</p>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-[#667788] mb-2">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {c.stack.map(t => (
                    <span key={t} className="px-2 py-0.5 text-xs rounded border border-[rgba(255,255,255,0.1)] text-[#AAB8C8]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </section>

      {/* CTA */}
      <section className="border-t border-[rgba(255,255,255,0.06)] py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="section-label mb-4">Ready to be next?</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's build something<br /><span className="text-gradient">worth writing about.</span></h2>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#5BC8E8] text-[#0A0F1A] font-semibold px-8 py-4 rounded-full text-sm hover:bg-[#9BE4F5] transition-colors btn-glow"
          >
            Start Your Project
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
