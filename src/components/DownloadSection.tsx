import logo from '@/imports/logo.png'

export default function DownloadSection() {
  return (
    <section id="download" style={{ padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 700, margin: '0 auto' }}>
        <div
          className="reveal glow-purple"
          style={{
            borderRadius: 28,
            background: 'linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(24,24,27,0.9) 100%)',
            border: '1px solid rgba(124,58,237,0.3)',
            padding: '56px 48px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative ring */}
          <div style={{ position: 'absolute', top: -60, left: '50%', transform: 'translateX(-50%)', width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.2), transparent)', pointerEvents: 'none' }} />

          <img src={logo} alt="BeatFlow" style={{ width: 'clamp(80px, 10vw, 120px)', height: 'clamp(80px, 10vw, 120px)', objectFit: 'contain', margin: '0 auto 28px', display: 'block', filter: 'drop-shadow(0 0 30px rgba(0,200,100,0.45))' }} />

          <div style={{ fontSize: 13, fontWeight: 600, color: '#A78BFA', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: 12 }}>Latest Version</div>
          <h2 className="heading-font" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-1px', marginBottom: 8 }}>
            BeatFlow
          </h2>
          <p style={{ color: '#A1A1AA', fontSize: 15, marginBottom: 36 }}>
            The premium offline music player for Android
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 36 }}>
            {[
              {
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3a7 7 0 00-7 7v5a2 2 0 002 2h10a2 2 0 002-2v-5a7 7 0 00-7-7z"/>
                    <circle cx="9" cy="11" r="1.5" fill="currentColor"/>
                    <circle cx="15" cy="11" r="1.5" fill="currentColor"/>
                    <path d="M8 18v3M16 18v3"/>
                  </svg>
                ),
                label: 'Android 10+',
              },
              {
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="2" y1="2" x2="22" y2="22"/>
                    <path d="M8.5 16.5a5 5 0 017 0"/>
                    <path d="M5 13a9 9 0 0114 0"/>
                    <path d="M1.5 9.5a13 13 0 0121 0"/>
                  </svg>
                ),
                label: 'Works Offline',
              },
              {
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="8" width="18" height="4" rx="1"/>
                    <path d="M12 8v13"/>
                    <path d="M12 8H7.5a2.5 2.5 0 010-5C11 3 12 8 12 8z"/>
                    <path d="M12 8h4.5a2.5 2.5 0 000-5C13 3 12 8 12 8z"/>
                  </svg>
                ),
                label: 'Completely Free',
              },
            ].map((item) => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 16px', borderRadius: 100, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)' }}>
                <span style={{ display: 'flex', alignItems: 'center', color: '#22D3EE' }}>{item.icon}</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>{item.label}</span>
              </div>
            ))}
          </div>

          <a
            href="/BeatFlow.apk"
            download="BeatFlow.apk"
            className="btn-primary ripple max-md:!flex max-md:!w-full max-md:justify-center"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              padding: '16px 40px',
              borderRadius: 16,
              fontSize: 16,
              fontWeight: 800,
              color: '#fff',
              textDecoration: 'none',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Download BeatFlow
          </a>

          <p style={{ fontSize: 12, color: '#52525B', marginTop: 20 }}>
            Free forever · No ads · No tracking · Open source
          </p>
        </div>
      </div>
    </section>
  )
}
