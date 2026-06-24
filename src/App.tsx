import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CaseStudiesPage from './pages/CaseStudies'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/About'
import ContactPage from './pages/ContactPage'

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-navy text-white overflow-x-hidden">
        <Routes>
          <Route path="/"              element={<Home />} />
          <Route path="/case-studies"  element={<CaseStudiesPage />} />
          <Route path="/services"      element={<ServicesPage />} />
          <Route path="/about"         element={<AboutPage />} />
          <Route path="/contact"       element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
