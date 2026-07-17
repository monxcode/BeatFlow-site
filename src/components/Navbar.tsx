import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '@/imports/logo.png'

const links = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/#features' },
  { label: 'Screenshots', href: '/#screenshots' },
  { label: 'Download', href: '/#download' },
  { label: 'Developer', href: '/#developer' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = (href: string) => {
    if (href.startsWith('/#')) {
      const id = href.slice(2)
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setMenuOpen(false)
  }

  return (
    <nav
      style={{
        position: 'fixed',
        top: 16,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'min(900px, calc(100% - 32px))',
        zIndex: 1000,
        background: scrolled ? 'rgba(9,9,11,0.85)' : 'rgba(255,255,255,0.06)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.10)',
        borderRadius: 16,
        padding: '12px 24px',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10, whiteSpace: 'nowrap' }}>
            <img src={logo} alt="BeatFlow logo" style={{ width: 36, height: 36, objectFit: 'contain' }} />
            <span style={{ fontWeight: 700, fontSize: 18, color: '#fff', letterSpacing: '-0.3px' }}>
              Beat<span style={{ color: '#7C3AED' }}>Flow</span>
            </span>
          </Link>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex" style={{ gap: 32 }}>
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              onClick={() => handleLinkClick(l.href)}
              style={{
                color: '#A1A1AA',
                fontSize: 14,
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#A1A1AA')}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://github.com/monxcode/BeatFlow"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#A1A1AA', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#A1A1AA')}
          >
            GitHub
          </a>
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a
            href="/BeatFlow.apk"
            download="BeatFlow.apk"
            className="btn-primary ripple hidden md:block"
            style={{
              padding: '8px 20px',
              borderRadius: 10,
              fontSize: 13,
              fontWeight: 600,
              color: '#fff',
              textDecoration: 'none',
            }}
          >
            Download
          </a>
          {/* Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#fff', padding: 4 }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round"/>
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round"/>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.10)', display: 'flex', flexDirection: 'column', gap: 16 }}>
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              onClick={() => handleLinkClick(l.href)}
              style={{ color: '#A1A1AA', fontSize: 15, fontWeight: 500, textDecoration: 'none' }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="/BeatFlow.apk"
            download="BeatFlow.apk"
            className="btn-primary ripple"
            style={{ padding: '10px 20px', borderRadius: 10, fontSize: 14, fontWeight: 600, color: '#fff', textDecoration: 'none', textAlign: 'center' }}
          >
            Download APK
          </a>
        </div>
      )}
    </nav>
  )
}
