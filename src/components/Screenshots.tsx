import { useState } from 'react'

const screens = [
  {
    label: 'Home',
    color: '#7C3AED',
    content: (
      <>
        <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 12 }}>My Music</div>
        {['Recently Played', 'Top Artists', 'Favorites', 'All Songs'].map((item, i) => (
          <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
            <div style={{ width: 38, height: 38, borderRadius: 10, background: `linear-gradient(135deg, hsl(${260 + i * 30}, 70%, 50%), hsl(${280 + i * 30}, 70%, 40%))`, flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, color: '#fff' }}>{item}</div>
              <div style={{ fontSize: 10, color: '#A1A1AA' }}>{12 + i * 8} songs</div>
            </div>
          </div>
        ))}
      </>
    ),
  },
  {
    label: 'Player',
    color: '#22D3EE',
    content: (
      <>
        <div style={{ width: 100, height: 100, borderRadius: 16, background: 'linear-gradient(135deg, #7C3AED, #22D3EE)', margin: '0 auto 14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none"><path d="M9 18V5l12-2v13" stroke="white" strokeWidth="1.5" strokeLinecap="round"/><circle cx="6" cy="18" r="3" stroke="white" strokeWidth="1.5"/><circle cx="18" cy="16" r="3" stroke="white" strokeWidth="1.5"/></svg>
        </div>
        <div style={{ textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#fff', marginBottom: 4 }}>Midnight Dreams</div>
        <div style={{ textAlign: 'center', fontSize: 10, color: '#A1A1AA', marginBottom: 16 }}>Unknown Artist</div>
        <div style={{ height: 2, background: 'rgba(255,255,255,0.1)', borderRadius: 1, marginBottom: 14 }}>
          <div style={{ width: '45%', height: '100%', background: 'linear-gradient(90deg, #7C3AED, #22D3EE)', borderRadius: 1 }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, alignItems: 'center' }}>
          {['◀◀', '▶', '▶▶'].map((c, i) => (
            <div key={c} style={{ width: i === 1 ? 36 : 28, height: i === 1 ? 36 : 28, borderRadius: '50%', background: i === 1 ? 'linear-gradient(135deg,#7C3AED,#6D28D9)' : 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, color: '#fff' }}>{c}</div>
          ))}
        </div>
      </>
    ),
  },
  {
    label: 'Profile',
    color: '#EC4899',
    content: (
      <>
        <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'linear-gradient(135deg, #7C3AED, #EC4899)', margin: '0 auto 10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>🎵</div>
        <div style={{ textAlign: 'center', fontSize: 12, fontWeight: 700, color: '#fff', marginBottom: 2 }}>Music Lover</div>
        <div style={{ textAlign: 'center', fontSize: 10, color: '#A1A1AA', marginBottom: 14 }}>BeatFlow User</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          {[['Songs', '342'], ['Playlists', '12'], ['Hours', '840'], ['Artists', '56']].map(([k, v]) => (
            <div key={k} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 10, padding: '8px', textAlign: 'center' }}>
              <div style={{ fontSize: 14, fontWeight: 800, color: '#7C3AED' }}>{v}</div>
              <div style={{ fontSize: 10, color: '#A1A1AA' }}>{k}</div>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    label: 'Settings',
    color: '#10B981',
    content: (
      <>
        <div style={{ fontSize: 12, fontWeight: 700, color: '#fff', marginBottom: 12 }}>Settings</div>
        {[
          ['Theme', 'Dark AMOLED'],
          ['Scan Folders', '3 folders'],
          ['Sleep Timer', 'Off'],
          ['Equalizer', 'Custom'],
          ['Notifications', 'Enabled'],
        ].map(([k, v]) => (
          <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <span style={{ fontSize: 11, color: '#fff' }}>{k}</span>
            <span style={{ fontSize: 10, color: '#A1A1AA' }}>{v}</span>
          </div>
        ))}
      </>
    ),
  },
]

export default function Screenshots() {
  const [active, setActive] = useState(0)

  return (
    <section id="screenshots" style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 100, background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.25)', marginBottom: 20 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: '#22D3EE', letterSpacing: '0.5px', textTransform: 'uppercase' }}>App Previews</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.8px' }}>
            Beautiful <span className="text-gradient">Screens</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="reveal" style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 48, flexWrap: 'wrap' }}>
          {screens.map((s, i) => (
            <button
              key={s.label}
              onClick={() => setActive(i)}
              style={{
                padding: '8px 22px',
                borderRadius: 100,
                border: 'none',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: 14,
                transition: 'all 0.25s',
                background: active === i ? s.color : 'rgba(255,255,255,0.06)',
                color: active === i ? '#fff' : '#A1A1AA',
              }}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Phones row */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
          {screens.map((s, i) => (
            <div
              key={s.label}
              onClick={() => setActive(i)}
              style={{
                cursor: 'pointer',
                transition: 'all 0.4s ease',
                transform: active === i ? 'scale(1.08) translateY(-8px)' : 'scale(0.92)',
                opacity: active === i ? 1 : 0.5,
              }}
            >
              <div
                style={{
                  width: 180,
                  height: 360,
                  borderRadius: 28,
                  background: 'linear-gradient(145deg, #1a1a2e, #0f0f1a)',
                  border: `1.5px solid ${active === i ? s.color + '60' : 'rgba(255,255,255,0.10)'}`,
                  boxShadow: active === i ? `0 30px 60px rgba(0,0,0,0.5), 0 0 40px ${s.color}30` : '0 10px 30px rgba(0,0,0,0.3)',
                  padding: 14,
                  overflow: 'hidden',
                }}
              >
                {/* Notch */}
                <div style={{ width: 50, height: 16, borderRadius: 8, background: '#09090B', margin: '0 auto 14px' }} />
                {s.content}
              </div>
              <div style={{ textAlign: 'center', marginTop: 12, fontSize: 13, fontWeight: 600, color: active === i ? '#fff' : '#A1A1AA', transition: 'color 0.3s' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
