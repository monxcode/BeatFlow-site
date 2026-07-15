const formats = ['MP3', 'FLAC', 'AAC', 'M4A', 'OGG', 'WAV', 'OPUS', 'AMR', '3GP']

const formatColors: Record<string, string> = {
  MP3: '#7C3AED',
  FLAC: '#22D3EE',
  AAC: '#EC4899',
  M4A: '#10B981',
  OGG: '#F59E0B',
  WAV: '#6366F1',
  OPUS: '#EF4444',
  AMR: '#8B5CF6',
  '3GP': '#06B6D4',
}

export default function Formats() {
  return (
    <section style={{ padding: '80px 24px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.8px', marginBottom: 12 }}>
            Supported <span className="text-gradient">Formats</span>
          </h2>
          <p style={{ color: '#A1A1AA', fontSize: 16 }}>Play any audio format without conversion or extra apps.</p>
        </div>

        <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
          {formats.map((fmt) => (
            <div
              key={fmt}
              className="format-badge glass"
              style={{
                padding: '14px 28px',
                borderRadius: 14,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 6,
                minWidth: 80,
                cursor: 'default',
                transition: 'all 0.25s ease',
              }}
            >
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: formatColors[fmt] }} />
              <span style={{ fontWeight: 800, fontSize: 15, color: '#fff', letterSpacing: '0.5px' }}>{fmt}</span>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ textAlign: 'center', marginTop: 32 }}>
          <span style={{ fontSize: 13, color: '#A1A1AA' }}>
            All formats supported natively · No conversion required · No quality loss
          </span>
        </div>
      </div>
    </section>
  )
}
