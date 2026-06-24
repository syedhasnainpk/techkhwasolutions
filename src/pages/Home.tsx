import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import StatsBar from '../components/StatsBar'
import Services from '../components/Services'
import WhyTechKhwa from '../components/WhyTechKhwa'
import Process from '../components/Process'
import Portfolio from '../components/Portfolio'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import CTABanner from '../components/CTABanner'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsBar />
      <Services />
      <WhyTechKhwa />
      <Process />
      <Portfolio />
      <Testimonials />
      <Contact />
      <CTABanner />
      <Footer />
    </>
  )
}
