import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const services = [
  {
    id: 'web',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: 'Web Application Development',
    tagline: 'Production-grade web apps that scale from day one.',
    description:
      'We design and build full-stack web applications with modern architectures — SSR, microservices, real-time capabilities. Every app is built for performance, SEO, and maintainability.',
    deliverables: [
      'Full-stack web application (frontend + backend + database)',
      'Responsive UI/UX design with your brand system',
      'REST or GraphQL API with authentication',
      'Automated CI/CD pipeline (GitHub Actions / Vercel)',
      'Performance audit (Core Web Vitals > 90)',
      'Post-launch 30-day bug fix warranty',
    ],
    timeline: '6–20 weeks',
    techStack: ['React / Next.js', 'Node.js / NestJS', 'PostgreSQL / MongoDB', 'AWS / GCP / Vercel'],
    bestFor: 'SaaS products, internal tools, customer portals, marketplaces',
  },
  {
    id: 'mobile',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <circle cx="12" cy="18" r="1" />
      </svg>
    ),
    title: 'Mobile App Development',
    tagline: 'iOS & Android apps that users actually keep.',
    description:
      'Cross-platform and native mobile apps built for retention. We prioritize offline-first architecture, smooth 60fps animations, and app store approval on first submission.',
    deliverables: [
      'iOS + Android app from a single codebase (React Native)',
      'Custom UI components with brand-consistent design',
      'Push notifications, deep linking, in-app purchases',
      'Backend API + admin panel for content management',
      'App Store + Play Store submission and approval',
      'Analytics integration (Mixpanel / Amplitude)',
    ],
    timeline: '10–24 weeks',
    techStack: ['React Native', 'Expo', 'Firebase', 'Node.js', 'Redux Toolkit'],
    bestFor: 'Consumer apps, field-service tools, fintech, healthcare',
  },
  {
    id: 'ai',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'AI & Automation Integration',
    tagline: 'Make your product 10× more powerful with AI.',
    description:
      'We integrate LLMs, build fine-tuned models, and create automation pipelines that replace repetitive work. From customer-facing chatbots to backend document processors — we\'ve done it across industries.',
    deliverables: [
      'AI feature specification and model selection',
      'LLM integration (OpenAI, Anthropic, open-source)',
      'Fine-tuning on your proprietary data where applicable',
      'RAG (Retrieval Augmented Generation) pipeline',
      'Prompt engineering and guardrails',
      'Cost and latency monitoring dashboard',
    ],
    timeline: '4–12 weeks',
    techStack: ['OpenAI / Anthropic / Mistral', 'LangChain', 'Pinecone / Weaviate', 'Python', 'FastAPI'],
    bestFor: 'SaaS automation, document processing, customer support, content platforms',
  },
  {
    id: 'ecommerce',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>
    ),
    title: 'E-Commerce & Retail Solutions',
    tagline: 'Platforms built to convert, not just display.',
    description:
      'From Shopify custom themes to fully custom commerce engines — we build retail experiences that combine speed, conversion-rate best practices, and seamless inventory management.',
    deliverables: [
      'Custom storefront (Shopify / custom Next.js commerce)',
      'Product catalog + inventory management system',
      'Checkout optimization and payment gateway integration',
      'Multi-warehouse inventory sync',
      'Marketing automation hooks (email, SMS, retargeting)',
      'Reporting dashboard with revenue analytics',
    ],
    timeline: '8–16 weeks',
    techStack: ['Shopify / Shopify Plus', 'Next.js Commerce', 'Stripe', 'PostgreSQL', 'Klaviyo'],
    bestFor: 'D2C brands, multi-channel retailers, subscription commerce',
  },
  {
    id: 'devops',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'DevOps & Cloud Infrastructure',
    tagline: 'Infrastructure that stays up so your team stays focused.',
    description:
      'We design, migrate, and manage cloud infrastructure on AWS, GCP, and Azure. Zero-downtime deployments, auto-scaling, disaster recovery, and cost optimization — all without a dedicated in-house DevOps team.',
    deliverables: [
      'Cloud architecture design (AWS / GCP / Azure)',
      'Docker + Kubernetes setup and configuration',
      'CI/CD pipeline implementation',
      'Auto-scaling and load balancing configuration',
      'Monitoring + alerting (Datadog / Grafana)',
      'Monthly infrastructure cost review and optimization',
    ],
    timeline: '3–8 weeks',
    techStack: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Datadog'],
    bestFor: 'Scaling startups, teams preparing for enterprise clients, regulated industries',
  },
  {
    id: 'design',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" />
        <line x1="12" y1="2" x2="12" y2="9" />
        <line x1="12" y1="15" x2="12" y2="22" />
        <line x1="2" y1="12" x2="9" y2="12" />
        <line x1="15" y1="12" x2="22" y2="12" />
      </svg>
    ),
    title: 'UI/UX Design & Branding',
    tagline: 'Design that earns trust before a word is read.',
    description:
      'Strategic design from brand identity to pixel-perfect UI. We create design systems that scale and interfaces that reduce support tickets — because good UX is a business decision, not decoration.',
    deliverables: [
      'Brand identity (logo, color system, typography)',
      'Design system with reusable component library',
      'UX research and user flow mapping',
      'High-fidelity Figma prototypes',
      'Usability testing with real users',
      'Developer handoff with annotated specs',
    ],
    timeline: '3–10 weeks',
    techStack: ['Figma', 'Framer', 'Lottie', 'Storybook'],
    bestFor: 'Startups pre-launch, companies rebranding, products with high churn',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } }),
}

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<string | null>(null)

  return (
    <div className="bg-[#0A0F1A] text-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 grid-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1A] via-transparent to-[#0A0F1A] pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="section-label mb-4">
            Our Services
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
            What we build<br /><span className="text-gradient">for you.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-[#8899AA] text-lg md:text-xl max-w-2xl leading-relaxed">
            Six specialized practices. Clear deliverables. No vague retainers — you know exactly what you're getting before we start.
          </motion.p>
        </div>
      </section>

      {/* Services grid */}
      <section className="max-w-5xl mx-auto px-6 pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.button
              key={s.id}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              onClick={() => setActiveService(activeService === s.id ? null : s.id)}
              className={`text-left p-6 rounded-2xl border transition-all duration-300 group ${
                activeService === s.id
                  ? 'border-[#5BC8E8] bg-[rgba(91,200,232,0.06)]'
                  : 'border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.02)] hover:border-[rgba(91,200,232,0.3)]'
              }`}
            >
              <div className={`mb-4 w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${activeService === s.id ? 'bg-[#5BC8E8] text-[#0A0F1A]' : 'bg-[rgba(91,200,232,0.1)] text-[#5BC8E8]'}`}>
                {s.icon}
              </div>
              <h3 className="text-base font-bold mb-2 leading-tight">{s.title}</h3>
              <p className="text-xs text-[#667788] mb-4">{s.tagline}</p>
              <div className="mt-3 text-xs text-[#5BC8E8] flex items-center gap-1 font-medium">
                {activeService === s.id ? 'Collapse' : 'See details'}
                <svg
                  width="12" height="12" viewBox="0 0 12 12" fill="none"
                  className={`transition-transform duration-300 ${activeService === s.id ? 'rotate-180' : ''}`}
                >
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Expanded detail panel */}
      <AnimatePresence mode="wait">
        {activeService && (() => {
          const s = services.find(x => x.id === activeService)!
          return (
            <motion.section
              key={activeService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-5xl mx-auto px-6 mb-20"
            >
              <div className="rounded-2xl border border-[rgba(91,200,232,0.2)] bg-[rgba(91,200,232,0.03)] p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-10">
                  {/* Left */}
                  <div>
                    <h2 className="text-2xl font-bold mb-3">{s.title}</h2>
                    <p className="text-[#8899AA] leading-relaxed mb-8">{s.description}</p>
                    <div className="mb-8">
                      <h4 className="section-label mb-4">Deliverables</h4>
                      <ul className="space-y-2.5">
                        {s.deliverables.map((d, i) => (
                          <li key={i} className="flex gap-3 text-sm text-[#AAB8C8]">
                            <svg className="mt-0.5 flex-shrink-0" width="14" height="14" viewBox="0 0 14 14" fill="none">
                              <path d="M2 7l3 3 7-7" stroke="#5BC8E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="section-label mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {s.techStack.map(t => (
                          <span key={t} className="px-2.5 py-1 text-xs rounded border border-[rgba(91,200,232,0.2)] text-[#AAB8C8]">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Right */}
                  <div className="space-y-6">
                    <div className="p-6 rounded-xl bg-[#0A0F1A] border border-[rgba(255,255,255,0.06)]">
                      <h4 className="section-label mb-2">Typical Timeline</h4>
                      <div className="text-2xl font-bold">{s.timeline}</div>
                    </div>
                    <div className="p-6 rounded-xl bg-[#0A0F1A] border border-[rgba(255,255,255,0.06)]">
                      <h4 className="section-label mb-2">Best For</h4>
                      <p className="text-sm text-[#AAB8C8]">{s.bestFor}</p>
                    </div>
                    <a
                      href="/contact"
                      className="flex items-center justify-center gap-2 w-full bg-[#5BC8E8] text-[#0A0F1A] font-semibold py-4 rounded-xl text-sm hover:bg-[#9BE4F5] transition-colors"
                    >
                      Get a Quote for This Service
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.section>
          )
        })()}
      </AnimatePresence>

      {/* Process teaser */}
      <section className="border-t border-[rgba(255,255,255,0.06)] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { num: '01', title: 'Discovery Call', body: 'We learn your business, your users, and your definition of success — not just your feature list.' },
              { num: '02', title: 'Scoped Proposal', body: 'Fixed scope, timeline, and price range. No ambiguity. Signed before a single line of code is written.' },
              { num: '03', title: 'Deliver & Iterate', body: 'Weekly demos. Feedback loops. You see progress — not just a big reveal at the end.' },
            ].map((step) => (
              <div key={step.num} className="relative">
                <div className="step-num mb-2">{step.num}</div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-[#8899AA] leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="/contact" className="inline-flex items-center gap-3 bg-[#5BC8E8] text-[#0A0F1A] font-semibold px-8 py-4 rounded-full text-sm hover:bg-[#9BE4F5] transition-colors btn-glow">
              Let's Business
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
