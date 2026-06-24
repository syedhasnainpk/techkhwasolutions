import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import CaseStudiesPage from './pages/CaseStudies'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/About'
import ContactPage from './pages/ContactPage'

function ScrollReset() {
  const { pathname } = useLocation()
  useEffect(() => {
    const lenis = (window as unknown as Record<string, unknown>).lenis as { scrollTo: (target: number, opts: object) => void } | undefined
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollReset />
      <div className="bg-navy text-white overflow-x-hidden">
        <Routes>
          <Route path="/"             element={<Home />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/services"     element={<ServicesPage />} />
          <Route path="/about"        element={<AboutPage />} />
          <Route path="/contact"      element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
