const comparisonData = [
  { label: 'Offline', beatflow: true },
  { label: 'Private', beatflow: true },
  { label: 'Fast', beatflow: true },
  { label: 'No Ads', beatflow: true },
  { label: 'Beautiful', beatflow: true },
  { label: 'Modern UI', beatflow: true },
  { label: 'Free Forever', beatflow: true },
  { label: 'No Account', beatflow: true },
]

export default function WhyBeatFlow() {
  return (
    <section style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 60 }}>
          <h2 className="heading-font" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.8px', marginBottom: 12 }}>
            Why Choose <span className="text-gradient">BeatFlow?</span>
          </h2>
          <p style={{ color: '#A1A1AA', fontSize: 16 }}>Everything others charge for. Completely free.</p>
        </div>

        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {/* BeatFlow card */}
          <div
            className="glow-purple"
            style={{
              borderRadius: 20,
              background: 'linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(109,40,217,0.08) 100%)',
              border: '1px solid rgba(124,58,237,0.35)',
              padding: '28px 28px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
              <div style={{ width: 42, height: 42, borderRadius: 12, background: 'linear-gradient(135deg, #7C3AED, #22D3EE)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 18V5l12-2v13" stroke="white" strokeWidth="1.8" strokeLinecap="round" /><circle cx="6" cy="18" r="3" stroke="white" strokeWidth="1.8" /><circle cx="18" cy="16" r="3" stroke="white" strokeWidth="1.8" /></svg>
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: 17, color: '#fff' }}>BeatFlow</div>
                <div style={{ fontSize: 12, color: '#A78BFA' }}>The better choice</div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {comparisonData.map((item) => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 22, height: 22, borderRadius: 6, background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(124,58,237,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="3" strokeLinecap="round">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span style={{ fontSize: 14, fontWeight: 600, color: '#fff' }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Others */}
          <div
            style={{
              borderRadius: 20,
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              padding: '28px 28px',
            }}
          >
            <div style={{ fontWeight: 800, fontSize: 17, color: '#A1A1AA', marginBottom: 24 }}>Other Players</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['Offline Support', 'Privacy', 'Performance', 'Ad-Free', 'Good Design', 'Modern UI', 'Free', 'No Sign-in'].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 22, height: 22, borderRadius: 6, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#52525B" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </div>
                  <span style={{ fontSize: 14, color: '#52525B', textDecoration: 'line-through' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
