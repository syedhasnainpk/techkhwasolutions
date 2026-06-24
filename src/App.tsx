import { useEffect, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

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

function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#0A0F1A] flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-[#5BC8E8] border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      {children}
    </Suspense>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollReset />
      <div className="bg-navy text-white overflow-x-hidden">
        <Routes>
          <Route path="/"             element={<PageShell><Home /></PageShell>} />
          <Route path="/case-studies" element={<PageShell><CaseStudies /></PageShell>} />
          <Route path="/services"     element={<PageShell><ServicesPage /></PageShell>} />
          <Route path="/about"        element={<PageShell><AboutPage /></PageShell>} />
          <Route path="/contact"      element={<PageShell><ContactPage /></PageShell>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
