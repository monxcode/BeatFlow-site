export default function AboutApp() {
  return (
    <section style={{ padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(34,211,238,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 100, background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.25)', marginBottom: 24 }}>
          <span style={{ fontSize: 12, fontWeight: 600, color: '#22D3EE', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Privacy First</span>
        </div>

        <h2 className="reveal" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-1px', marginBottom: 24 }}>
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
              { icon: '🔒', title: 'No Account', desc: 'No sign-up required' },
              { icon: '☁️', title: 'No Cloud', desc: 'Nothing uploaded' },
              { icon: '📢', title: 'No Ads', desc: 'Zero advertisements' },
              { icon: '🎵', title: 'Just Music', desc: 'Pure listening' },
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
                <div style={{ fontSize: 24, marginBottom: 8 }}>{item.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 13, color: '#fff', marginBottom: 4 }}>{item.title}</div>
                <div style={{ fontSize: 12, color: '#A1A1AA' }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
