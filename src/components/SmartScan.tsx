const scanFeatures = [
  { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', title: 'Duration Filter', desc: 'Skips audio files under 1 minute — no ringtones or snippets in your library.' },
  { icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 4 4-3.582 4-8 4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4', title: 'Size Filter', desc: 'Ignores files under 100 KB to keep your library clean of corrupted or incomplete tracks.' },
  { icon: 'M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z', title: 'Duplicate Detection', desc: 'Automatically finds and removes duplicate songs from your music library.' },
  { icon: 'M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21', title: 'Hidden Folder Filter', desc: 'Respects system hidden folders and excludes their contents automatically.' },
]

export default function SmartScan() {
  return (
    <section style={{ padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 0%, rgba(124,58,237,0.05) 50%, transparent 100%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center' }}>
          {/* Left */}
          <div>
            <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 100, background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.25)', marginBottom: 20 }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: '#A78BFA', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Intelligent Scanning</span>
            </div>
            <h2 className="reveal" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, letterSpacing: '-0.8px', marginBottom: 16 }}>
              Smart Music<br /><span className="text-gradient">Scan Engine</span>
            </h2>
            <p className="reveal" style={{ color: '#A1A1AA', fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
              BeatFlow intelligently scans your device for real music — filtering out noise, duplicates, and hidden system files automatically.
            </p>
            <div className="reveal" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {['Under 1 min', 'Under 100 KB', 'Duplicates', 'Hidden files'].map((tag) => (
                <span key={tag} style={{ padding: '6px 14px', borderRadius: 100, background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.3)', fontSize: 12, fontWeight: 600, color: '#A78BFA' }}>
                  Ignores: {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {scanFeatures.map((f, i) => (
              <div
                key={f.title}
                className="reveal glass"
                style={{ padding: '18px 20px', borderRadius: 14, display: 'flex', gap: 16, alignItems: 'flex-start', transitionDelay: `${i * 80}ms` }}
              >
                <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d={f.icon} />
                  </svg>
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: '#fff', marginBottom: 4 }}>{f.title}</div>
                  <div style={{ fontSize: 13, color: '#A1A1AA', lineHeight: 1.5 }}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
