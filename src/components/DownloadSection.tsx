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

          <img src={logo} alt="BeatFlow" style={{ width: 72, height: 72, objectFit: 'contain', margin: '0 auto 24px', display: 'block', filter: 'drop-shadow(0 0 20px rgba(0,200,100,0.4))' }} />

          <div style={{ fontSize: 13, fontWeight: 600, color: '#A78BFA', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: 12 }}>Latest Version</div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-1px', marginBottom: 8 }}>
            BeatFlow
          </h2>
          <p style={{ color: '#A1A1AA', fontSize: 15, marginBottom: 36 }}>
            The premium offline music player for Android
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 36 }}>
            {[
              { icon: '🤖', label: 'Android 10+' },
              { icon: '📶', label: 'Works Offline' },
              { icon: '🆓', label: 'Completely Free' },
            ].map((item) => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 16px', borderRadius: 100, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)' }}>
                <span style={{ fontSize: 14 }}>{item.icon}</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>{item.label}</span>
              </div>
            ))}
          </div>

          <a
            href="/BeatFlow.apk"
            download="BeatFlow.apk"
            className="btn-primary ripple"
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
