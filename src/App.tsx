import { useEffect, useRef, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Preloader from './components/Preloader'
import Hero from './components/Hero'
import Features from './components/Features'
import SmartScan from './components/SmartScan'
import Formats from './components/Formats'
import Screenshots from './components/Screenshots'
import WhyBeatFlow from './components/WhyBeatFlow'
import AboutApp from './components/AboutApp'
import Developer from './components/Developer'
import DownloadSection from './components/DownloadSection'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfUse from './pages/TermsOfUse'

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

function AppContent() {
  const location = useLocation()
  const [scrollProgress, setScrollProgress] = useState(0)
  const preloaderShown = useRef(false)
  const [showPreloader, setShowPreloader] = useState(
    location.pathname === '/' && !preloaderShown.current
  )

  const handlePreloaderFinish = () => {
    preloaderShown.current = true
    setShowPreloader(false)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement
      const progress = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100
      setScrollProgress(progress)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0, rootMargin: '0px 0px 25% 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [location.pathname])

  return (
    <div style={{ backgroundColor: '#09090B', minHeight: '100vh' }}>
      {showPreloader && <Preloader onFinish={handlePreloaderFinish} />}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfUse />} />
      </Routes>
    </div>
  )
}

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <SmartScan />
      <Formats />
      <Screenshots />
      <WhyBeatFlow />
      <AboutApp />
      <Developer />
      <DownloadSection />
      <FAQ />
      <Footer />
    </>
  )
}
