import { Link, useLocation } from 'react-router-dom'
import logo from '@/imports/logo.png'

const currentYear = new Date().getFullYear()

const legalLinks = [
  { label: 'Home', path: '/' },
  { label: 'Privacy Policy', path: '/privacy' },
  { label: 'Terms of Use', path: '/terms' },
] as const

export default function LegalFooter() {
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255,255,255,0.08)',
        padding: '40px 24px 24px',
        marginTop: 'auto',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: 32,
            alignItems: 'center',
            marginBottom: 24,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <img src={logo} alt="BeatFlow logo" style={{ width: 28, height: 28, objectFit: 'contain' }} />
            <span style={{ fontWeight: 700, fontSize: 16, color: '#fff' }}>
              Beat<span style={{ color: '#7C3AED' }}>Flow</span>
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                style={{
                  fontSize: 13,
                  fontWeight: currentPath === link.path ? 600 : 500,
                  color: currentPath === link.path ? '#fff' : '#A1A1AA',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  padding: '4px 0',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = currentPath === link.path ? '#fff' : '#A1A1AA')
                }
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://github.com/monxcode/BeatFlow"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: '#A1A1AA',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                padding: '4px 0',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#A1A1AA')}
            >
              GitHub
            </a>
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            paddingTop: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
            textAlign: 'center',
          }}
        >
          <p style={{ fontSize: 12, color: '#52525B', margin: 0 }}>
            © {currentYear} BeatFlow · Open Source
          </p>
          <p style={{ fontSize: 12, color: '#52525B', margin: 0 }}>
            Last updated: January 2026
          </p>
        </div>
      </div>
    </footer>
  )
}