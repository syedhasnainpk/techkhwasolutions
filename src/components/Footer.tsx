import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react'

const cols = [
  {
    title: 'Services',
    links: ['Software Development', 'App Development', 'Website Development', 'Datacenter Maintenance', 'Cloud Computing', 'IT Consulting'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Our Team', 'Careers', 'Partners', 'Press Kit', 'Blog'],
  },
  {
    title: 'Resources',
    links: ['Case Studies', 'White Papers', 'Tech Blog', 'Documentation', 'Privacy Policy', 'Terms of Service'],
  },
]

const socials = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="relative bg-navy overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-8 relative z-10">

        {/* ─── Top ─── */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-5 gap-12 border-b border-white/6">

          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <a href="#" className="flex items-center gap-3">
              <img src="/logo.png" alt="TechKhwa Solutions" className="h-10 w-auto object-contain" />
              <div>
                <span className="font-display font-bold text-[17px] tracking-tight text-white block">
                  Tech<span className="text-accent">Khwa</span>
                </span>
                <span className="font-body text-[9px] tracking-[0.22em] text-white/30 uppercase block mt-0.5">
                  Solutions
                </span>
              </div>
            </a>

            <p className="font-body text-body-sm text-white/35 max-w-xs leading-relaxed">
              Engineering tomorrow's digital infrastructure for businesses across the globe.
            </p>

            <div className="flex gap-2.5">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ y: -2, scale: 1.1 }}
                  whileTap={{ scale: 0.92 }}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/8 text-white/30 hover:text-accent hover:border-accent/30 transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                >
                  <Icon size={14} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav cols */}
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="font-body font-semibold text-[11px] tracking-[0.14em] uppercase text-white/30 mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="font-body text-body-sm text-white/40 hover:text-white/80 transition-colors duration-150">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ─── Bottom ─── */}
        <div className="py-7 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body text-[12px] text-white/20">
            © {new Date().getFullYear()} TechKhwa Solutions · All rights reserved
          </p>
          <div className="flex items-center gap-6">
            {['Privacy', 'Terms', 'Cookies'].map((item) => (
              <a key={item} href="#" className="font-body text-[12px] text-white/20 hover:text-white/50 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
