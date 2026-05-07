import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react'

const services = [
  { label: 'Software Development', sub: 'Web & enterprise apps' },
  { label: 'App Development', sub: 'iOS & Android' },
  { label: 'Website Development', sub: 'Marketing & e-commerce' },
  { label: 'Cloud Computing', sub: 'AWS, Azure, GCP' },
  { label: 'Datacenter Maintenance', sub: 'On-prem & hybrid' },
  { label: 'IT Consulting', sub: 'Strategy & support' },
]

const navLinks = [
  { label: 'Services', mega: true },
  { label: 'Work', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Careers', href: '#careers' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-400 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}
    >
      <div className="max-w-[1440px] mx-auto px-8 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img src="/logo.png" alt="TechKhwa Solutions" className="h-14 w-auto object-contain" />
          <div>
            <span className="font-display font-bold text-[17px] tracking-tight text-white leading-none block">
              Tech<span className="text-accent">Khwa</span>
            </span>
            <span className="font-body text-[9px] tracking-[0.22em] text-white/35 uppercase block mt-0.5">
              Solutions
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.mega ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
              >
                <button className="flex items-center gap-1.5 px-4 py-2 font-body text-[13px] font-medium text-white/55 hover:text-white transition-colors rounded-lg hover:bg-white/5">
                  {link.label}
                  <ChevronDown size={13} className={`transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {megaOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.97 }}
                      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[520px] rounded-2xl overflow-hidden shadow-2xl"
                      style={{ background: 'rgba(11,16,28,0.98)', border: '1px solid rgba(91,200,232,0.1)' }}
                    >
                      <div className="p-5">
                        <p className="section-label mb-4 pl-1">Our Services</p>
                        <div className="grid grid-cols-2 gap-1">
                          {services.map((s) => (
                            <a
                              key={s.label}
                              href="#services"
                              className="group flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-150"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-2 group-hover:bg-accent transition-colors shrink-0" />
                              <div>
                                <div className="font-display text-sm font-semibold text-white/85 group-hover:text-white transition-colors">{s.label}</div>
                                <div className="font-body text-xs text-white/35 mt-0.5">{s.sub}</div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                      <div className="px-5 py-3 flex items-center justify-between" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                        <span className="font-body text-xs text-white/30">All services →</span>
                        <a href="#contact" className="font-body text-xs font-semibold text-accent hover:underline">Get a free quote</a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 font-body text-[13px] font-medium text-white/55 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="#contact" className="font-body text-[13px] font-medium text-white/50 hover:text-white transition-colors">
            Contact
          </a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-body text-[13px] font-semibold bg-accent text-navy btn-glow transition-all"
          >
            Get in Touch <ArrowUpRight size={14} />
          </motion.a>
        </div>

        {/* Mobile */}
        <button className="lg:hidden p-2 text-white/50 hover:text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-white/5 overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-1">
              {['Services', 'Work', 'About', 'Careers', 'Contact'].map((l) => (
                <a key={l} href="#" onClick={() => setMobileOpen(false)} className="py-2.5 font-body text-sm text-white/60 hover:text-white transition-colors">
                  {l}
                </a>
              ))}
              <a href="#contact" onClick={() => setMobileOpen(false)} className="mt-3 text-center py-3 rounded-full font-body font-semibold bg-accent text-navy text-sm">
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
