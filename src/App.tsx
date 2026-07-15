import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
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

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0)

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
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div style={{ backgroundColor: '#09090B', minHeight: '100vh' }}>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
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
    </div>
  )
}
