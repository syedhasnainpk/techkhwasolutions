import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { X, Menu } from 'lucide-react'

const links = [
  { label: 'SERVICES',     href: '/services' },
  { label: 'CASE STUDIES', href: '/case-studies' },
  { label: 'ABOUT',        href: '/about' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-400 ${
        scrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-8 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0 group">
          <img src="/logo.png" alt="TechKhwa" className="h-10 w-auto object-contain" />
          <div>
            <span className="font-bold text-[16px] tracking-tight text-white leading-none block">
              Tech<span className="text-[#5BC8E8]">Khwa</span>
            </span>
            <span className="text-[8px] tracking-[0.25em] text-white/30 uppercase block mt-0.5">
              Solutions
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              className={`nav-label group relative flex items-center gap-1.5 transition-colors duration-200 pb-0.5 ${
                pathname === l.href ? 'text-white' : 'text-white/40 hover:text-white/80'
              }`}
            >
              <span className="text-[#5BC8E8] opacity-60">+</span>
              {l.label}
              {/* Underline sweep */}
              <span className={`absolute bottom-0 left-0 h-px bg-[#5BC8E8] transition-all duration-300 ease-out group-hover:w-full ${pathname === l.href ? 'w-full' : 'w-0'}`} />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center shrink-0">
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/contact"
              className="nav-label flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-200"
              style={{
                background: pathname === '/contact' ? '#5BC8E8' : 'rgba(91,200,232,0.1)',
                color: pathname === '/contact' ? '#111111' : '#5BC8E8',
                border: '1px solid rgba(91,200,232,0.3)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              GET IN TOUCH
            </Link>
          </motion.div>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-white/50 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="lg:hidden overflow-hidden border-t border-white/5"
            style={{ background: 'rgba(10,15,26,0.97)', backdropFilter: 'blur(20px)' }}
          >
            <div className="px-8 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <Link
                  key={l.label}
                  to={l.href}
                  className="nav-label flex items-center gap-2 text-white/50 hover:text-white transition-colors border-b border-white/5 pb-5"
                >
                  <span className="text-[#5BC8E8]">+</span> {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="nav-label flex items-center gap-2 justify-center py-3 rounded-full"
                style={{ background: '#5BC8E8', color: '#111111' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                GET IN TOUCH
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
