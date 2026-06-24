import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react'

const serviceItems = [
  { label: 'Web Application', sub: 'Full-stack & SaaS platforms' },
  { label: 'Mobile App', sub: 'iOS & Android' },
  { label: 'AI Integration', sub: 'LLMs, automation, ML' },
  { label: 'E-Commerce', sub: 'Custom & Shopify' },
  { label: 'DevOps / Cloud', sub: 'AWS, GCP, Azure' },
  { label: 'UI/UX Design', sub: 'Branding & design systems' },
]

const navLinks = [
  { label: 'Services', href: '/services', mega: true },
  { label: 'Work', href: '/case-studies' },
  { label: 'About', href: '/about' },
]

const mobileLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [location.pathname])

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-400 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}
    >
      <div className="max-w-[1440px] mx-auto px-8 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img src="/logo.png" alt="TechKhwa Solutions" className="h-14 w-auto object-contain" />
          <div>
            <span className="font-display font-bold text-[17px] tracking-tight text-white leading-none block">
              Tech<span className="text-accent">Khwa</span>
            </span>
            <span className="font-body text-[9px] tracking-[0.22em] text-white/35 uppercase block mt-0.5">
              Solutions
            </span>
          </div>
        </Link>

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
                <Link
                  to={link.href}
                  className="flex items-center gap-1.5 px-4 py-2 font-body text-[13px] font-medium text-white/55 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                >
                  {link.label}
                  <ChevronDown size={13} className={`transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`} />
                </Link>

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
                          {serviceItems.map((s) => (
                            <Link
                              key={s.label}
                              to="/services"
                              className="group flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-150"
                              onClick={() => setMegaOpen(false)}
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-2 group-hover:bg-accent transition-colors shrink-0" />
                              <div>
                                <div className="font-display text-sm font-semibold text-white/85 group-hover:text-white transition-colors">{s.label}</div>
                                <div className="font-body text-xs text-white/35 mt-0.5">{s.sub}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="px-5 py-3 flex items-center justify-between" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                        <Link to="/services" className="font-body text-xs text-white/30 hover:text-white/60 transition-colors">All services →</Link>
                        <Link to="/contact" className="font-body text-xs font-semibold text-accent hover:underline">Get a free quote</Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className="px-4 py-2 font-body text-[13px] font-medium text-white/55 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/contact" className="font-body text-[13px] font-medium text-white/50 hover:text-white transition-colors">
            Contact
          </Link>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-body text-[13px] font-semibold bg-accent text-navy btn-glow transition-all"
            >
              Get in Touch <ArrowUpRight size={14} />
            </Link>
          </motion.div>
        </div>

        {/* Mobile toggle */}
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
              {mobileLinks.map((l) => (
                <Link key={l.label} to={l.href} className="py-2.5 font-body text-sm text-white/60 hover:text-white transition-colors">
                  {l.label}
                </Link>
              ))}
              <Link to="/contact" className="mt-3 text-center py-3 rounded-full font-body font-semibold bg-accent text-navy text-sm">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
