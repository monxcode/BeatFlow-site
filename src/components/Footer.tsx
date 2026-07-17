import logo from '@/imports/logo.png'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '56px 24px 32px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 48, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <img src={logo} alt="BeatFlow logo" style={{ width: 36, height: 36, objectFit: 'contain' }} />
              <span style={{ fontWeight: 800, fontSize: 18, color: '#fff' }}>Beat<span style={{ color: '#7C3AED' }}>Flow</span></span>
            </div>
            <p style={{ fontSize: 13, color: '#A1A1AA', lineHeight: 1.7, maxWidth: 220 }}>
              Premium offline music player for Android. Privacy first, always.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <div style={{ fontWeight: 700, fontSize: 13, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 16 }}>Quick Links</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { label: 'Download', href: '/#download' },
                { label: 'Features', href: '/#features' },
                { label: 'Screenshots', href: '/#screenshots' },
                { label: 'Developer', href: '/#developer' },
              ].map((l) => (
                <Link key={l.label} to={l.href} style={{ fontSize: 14, color: '#A1A1AA', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')} onMouseLeave={(e) => (e.currentTarget.style.color = '#A1A1AA')}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* External */}
          <div>
            <div style={{ fontWeight: 700, fontSize: 13, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 16 }}>External</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a
                href="https://github.com/monxcode/BeatFlow"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: 14, color: '#A1A1AA', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#A1A1AA')}
              >
                GitHub
              </a>
              <Link
                to="/privacy"
                style={{ fontSize: 14, color: '#A1A1AA', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#A1A1AA')}
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                style={{ fontSize: 14, color: '#A1A1AA', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#A1A1AA')}
              >
                Terms of Use
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div>
            <div style={{ fontWeight: 700, fontSize: 13, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 16 }}>Get The App</div>
            <a
              href="/BeatFlow.apk"
              download="BeatFlow.apk"
              className="btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '10px 20px',
                borderRadius: 12,
                fontSize: 14,
                fontWeight: 700,
                color: '#fff',
                textDecoration: 'none',
                marginBottom: 12,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Download APK
            </a>
            <p style={{ fontSize: 12, color: '#52525B' }}>Android 10+ · Free forever</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 13, color: '#52525B' }}>
            Made with ❤️ by <a href="https://github.com/monxcode" target="_blank" rel="noopener noreferrer" style={{ color: '#A78BFA', textDecoration: 'none' }}>Mohan Singh Parmar</a>
          </p>
          <p style={{ fontSize: 13, color: '#52525B' }}>
            © {new Date().getFullYear()} BeatFlow · Open Source
          </p>
        </div>

        {/* Back to top */}
        <div style={{ textAlign: 'center', marginTop: 24 }}>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              background: 'rgba(124,58,237,0.1)',
              border: '1px solid rgba(124,58,237,0.3)',
              borderRadius: 100,
              padding: '8px 20px',
              fontSize: 12,
              fontWeight: 600,
              color: '#A78BFA',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(124,58,237,0.2)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(124,58,237,0.1)')}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 15l-6-6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to top
          </button>
        </div>
      </div>
    </footer>
  )
}
