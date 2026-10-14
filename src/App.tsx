import { useEffect, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Cursor from './components/Cursor'

const Home          = lazy(() => import('./pages/Home'))
const CaseStudies   = lazy(() => import('./pages/CaseStudies'))
const ServicesPage  = lazy(() => import('./pages/ServicesPage'))
const AboutPage     = lazy(() => import('./pages/About'))
const ContactPage   = lazy(() => import('./pages/ContactPage'))

function ScrollReset() {
  const { pathname } = useLocation()
  useEffect(() => {
    const lenis = (window as unknown as Record<string, unknown>).lenis as { scrollTo: (t: number, o: object) => void } | undefined
    if (lenis) lenis.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)
  }, [pathname])
  return null
}

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  enter:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, y: -10, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } },
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <Suspense fallback={
          <div className="min-h-screen bg-[#0A0F1A] flex items-center justify-center">
            <div className="w-5 h-5 border border-[#5BC8E8] border-t-transparent rounded-full animate-spin" />
          </div>
        }>
          <Routes location={location}>
            <Route path="/"             element={<Home />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/services"     element={<ServicesPage />} />
            <Route path="/about"        element={<AboutPage />} />
            <Route path="/contact"      element={<ContactPage />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollReset />
      <Cursor />
      <div className="bg-navy text-white overflow-x-hidden">
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  )
}
