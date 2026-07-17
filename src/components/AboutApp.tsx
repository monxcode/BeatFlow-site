const icons = {
  lock: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0110 0v4"/>
    </svg>
  ),
  cloudOff: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 0 1 3.17 7.5"/>
      <line x1="3" y1="3" x2="21" y2="21"/>
    </svg>
  ),
  noAds: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 5L6 9H2v6h4l5 4V5z"/>
      <line x1="22" y1="9" x2="16" y2="15"/>
      <line x1="16" y1="9" x2="22" y2="15"/>
    </svg>
  ),
  music: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18V5l12-2v13"/>
      <circle cx="6" cy="18" r="3"/>
      <circle cx="18" cy="16" r="3"/>
    </svg>
  ),
};

export default function AboutApp() {
  return (
    <section style={{ padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(34,211,238,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 100, background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.25)', marginBottom: 24 }}>
          <span style={{ fontSize: 12, fontWeight: 600, color: '#22D3EE', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Privacy First</span>
        </div>

        <h2 className="reveal heading-font" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-1px', marginBottom: 24 }}>
          Built for <span className="text-gradient">Privacy</span>
        </h2>

        <div
          className="reveal glass"
          style={{ borderRadius: 24, padding: '48px 40px', position: 'relative', overflow: 'hidden' }}
        >
          <div style={{ position: 'absolute', top: -60, right: -60, width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(34,211,238,0.1), transparent)', pointerEvents: 'none' }} />

          <p style={{ fontSize: 19, color: '#E4E4E7', lineHeight: 1.8, marginBottom: 32 }}>
            BeatFlow is designed with a <strong style={{ color: '#22D3EE' }}>privacy-first approach</strong>.
            Everything stays on your device.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 16 }}>
            {[
              { icon: icons.lock, title: 'No Account', desc: 'No sign-up required' },
              { icon: icons.cloudOff, title: 'No Cloud', desc: 'Nothing uploaded' },
              { icon: icons.noAds, title: 'No Ads', desc: 'Zero advertisements' },
              { icon: icons.music, title: 'Just Music', desc: 'Pure listening' },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  padding: '20px 16px',
                  borderRadius: 14,
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  textAlign: 'center',
                }}
              >
                <div style={{ width: 24, height: 24, margin: '0 auto 8px', color: '#22D3EE' }}>{item.icon}</div>
                <div style={{ fontWeight: 800, fontSize: 13, color: '#fff', marginBottom: 4 }}>{item.title}</div>
                <div style={{ fontSize: 12, color: '#A1A1AA' }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
