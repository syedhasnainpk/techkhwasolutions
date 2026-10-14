import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Github, Linkedin } from 'lucide-react'

const navLinks = [
  { label: 'About',        href: '/about' },
  { label: 'Services',     href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Contact',      href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: '#111111' }}>
      {/* Column grid */}
      <div className="col-grid absolute inset-0">
        {[0,1,2,3,4].map(i => <span key={i} />)}
      </div>

      <div className="relative z-10">

        {/* ── Giant brand text — Dylan's signature footer ── */}
        <div
          className="w-full overflow-hidden select-none"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '3vw' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.01 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Line 1: © TECHKHWA */}
            <div
              className="display-xl w-full leading-none whitespace-nowrap"
              style={{
                fontSize: 'clamp(4rem, 14vw, 18rem)',
                color: 'rgba(255,255,255,0.06)',
                paddingLeft: '2vw',
              }}
            >
              © TECHKHWA
            </div>
            {/* Line 2: SOLUTIONS — italic, slight offset */}
            <div
              className="display-xl italic w-full leading-none whitespace-nowrap"
              style={{
                fontSize: 'clamp(4rem, 14vw, 18rem)',
                color: 'rgba(255,255,255,0.04)',
                paddingLeft: '8vw',
                marginTop: '-0.5vw',
              }}
            >
              SOLUTIONS
            </div>
          </motion.div>
        </div>

        {/* ── Bottom content ── */}
        <div
          className="max-w-[1440px] mx-auto px-8 pb-10"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '3rem' }}
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">

            {/* Left: nav + meta */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {navLinks.map((l) => (
                  <Link
                    key={l.label}
                    to={l.href}
                    className="nav-label text-white/30 hover:text-white/70 transition-colors duration-200"
                    style={{ fontSize: '11px' }}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/syedhasnainpk/techkhwasolutions"
                  target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full text-white/25 hover:text-white/60 transition-colors"
                  style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <Github size={13} />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-full text-white/25 hover:text-white/60 transition-colors"
                  style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <Linkedin size={13} />
                </a>
                <a
                  href="mailto:techkhwasolutions@gmail.com"
                  className="nav-label text-white/20 hover:text-white/50 transition-colors ml-2"
                  style={{ fontSize: '11px' }}
                >
                  techkhwasolutions@gmail.com
                </a>
              </div>
              <p className="nav-label text-white/15" style={{ fontSize: '10px' }}>
                © {new Date().getFullYear()} TECHKHWA SOLUTIONS · ALL RIGHTS RESERVED
              </p>
            </div>

            {/* Right: CTA */}
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="nav-label flex items-center gap-2.5 px-6 py-3.5 rounded-full transition-all btn-glow"
                style={{ background: '#5BC8E8', color: '#111111' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                GET IN TOUCH
              </Link>
            </motion.div>
          </div>
        </div>

      </div>
    </footer>
  )
}
