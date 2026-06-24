import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react'

const MotionLink = motion(Link)

const serviceItems = [
  { label: 'Web Application', sub: 'Full-stack & SaaS platforms' },
  { label: 'Mobile App', sub: 'iOS & Android' },
  { label: 'AI Integration', sub: 'LLMs, automation, ML' },
  { label: 'E-Commerce', sub: 'Custom & Shopify' },
  { label: 'DevOps / Cloud', sub: 'AWS, GCP, Azure' },
  { label: 'UI/UX Design', sub: 'Branding & design systems' },
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
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <img src="/logo.png" alt="TechKhwa Solutions" className="h-12 w-auto object-contain" />
          <div>
            <span className="font-bold text-[17px] tracking-tight text-white leading-none block">
              Tech<span className="text-[#5BC8E8]">Khwa</span>
            </span>
            <span className="text-[9px] tracking-[0.22em] text-white/35 uppercase block mt-0.5 font-medium">
              Solutions
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {/* Services mega */}
          <div
            className="relative"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <Link
              to="/services"
              className="flex items-center gap-1.5 px-4 py-2 text-[13px] font-medium text-white/55 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
            >
              Services
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`}
              />
            </Link>

            <AnimatePresence>
              {megaOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[500px] rounded-2xl overflow-hidden shadow-2xl border border-[rgba(91,200,232,0.1)]"
                  style={{ background: 'rgba(11,16,28,0.98)' }}
                >
                  <div className="p-5">
                    <p className="section-label mb-4 pl-1">Our Services</p>
                    <div className="grid grid-cols-2 gap-1">
                      {serviceItems.map((s) => (
                        <Link
                          key={s.label}
                          to="/services"
                          onClick={() => setMegaOpen(false)}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors duration-150 group"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[rgba(91,200,232,0.4)] mt-2 group-hover:bg-[#5BC8E8] transition-colors shrink-0" />
                          <div>
                            <div className="text-sm font-semibold text-white/85 group-hover:text-white transition-colors">{s.label}</div>
                            <div className="text-xs text-white/35 mt-0.5">{s.sub}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="px-5 py-3 flex items-center justify-between border-t border-white/5">
                    <Link to="/services" onClick={() => setMegaOpen(false)} className="text-xs text-white/30 hover:text-white/60 transition-colors">
                      All services →
                    </Link>
                    <Link to="/contact" onClick={() => setMegaOpen(false)} className="text-xs font-semibold text-[#5BC8E8] hover:underline">
                      Get a free quote
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/case-studies" className="px-4 py-2 text-[13px] font-medium text-white/55 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5">
            Case Studies
          </Link>
          <Link to="/about" className="px-4 py-2 text-[13px] font-medium text-white/55 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5">
            About
          </Link>
          <Link to="/contact" className="px-4 py-2 text-[13px] font-medium text-white/55 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5">
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <MotionLink
            to="/contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold bg-[#5BC8E8] text-[#0A0F1A] btn-glow transition-colors"
          >
            Get in Touch <ArrowUpRight size={14} />
          </MotionLink>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-white/50 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
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
            transition={{ duration: 0.25 }}
            className="lg:hidden border-t border-white/5 overflow-hidden"
            style={{ background: 'rgba(10,15,26,0.97)', backdropFilter: 'blur(20px)' }}
          >
            <div className="px-6 py-5 flex flex-col gap-1">
              {mobileLinks.map((l) => (
                <Link
                  key={l.label}
                  to={l.href}
                  className="py-3 text-sm font-medium text-white/60 hover:text-white transition-colors border-b border-white/5 last:border-0"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-4 text-center py-3.5 rounded-full font-semibold bg-[#5BC8E8] text-[#0A0F1A] text-sm"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
