const features = [
  { icon: 'M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636', label: 'No Ads', desc: 'Zero advertisements. Pure music.' },
  { icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', label: 'No Tracking', desc: 'Your data never leaves your device.' },
  { icon: 'M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3', label: 'Offline First', desc: 'Works fully without internet.' },
  { icon: 'M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z', label: 'Background Playback', desc: 'Music keeps playing when screen is off.' },
  { icon: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3', label: 'Dynamic Album Art', desc: 'Auto-fetches beautiful artwork.' },
  { icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z', label: 'Smart Scan', desc: 'Finds music instantly, filters junk.' },
  { icon: 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z', label: 'Sleep Timer', desc: 'Automatically stops music at bedtime.' },
  { icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2', label: 'Playlist Support', desc: 'Create and manage your playlists.' },
  { icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z', label: 'Search', desc: 'Find any track in seconds.' },
  { icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z', label: 'Favorites', desc: 'Quick access to loved tracks.' },
  { icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z', label: 'Folder Browser', desc: 'Navigate your music by folder.' },
  { icon: 'M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2', label: 'Queue', desc: 'Manage your listening queue.' },
  { icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z', label: 'Mini Player', desc: 'Persistent mini player on every screen.' },
  { icon: 'M13 10V3L4 14h7v7l9-11h-7z', label: 'Notification Controls', desc: 'Control playback from notifications.' },
  { icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4', label: 'Bluetooth Controls', desc: 'Works with headphones and speakers.' },
  { icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z', label: 'Profile Customization', desc: 'Make it yours with custom themes.' },
]

export default function Features() {
  return (
    <section id="features" style={{ padding: '100px 24px', maxWidth: 1200, margin: '0 auto' }}>
      <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 100, background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.25)', marginBottom: 20 }}>
          <span style={{ fontSize: 12, fontWeight: 600, color: '#22D3EE', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Everything you need</span>
        </div>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-1px', marginBottom: 16 }}>
          Packed with <span className="text-gradient">Features</span>
        </h2>
        <p style={{ color: '#A1A1AA', fontSize: 17, maxWidth: 520, margin: '0 auto' }}>
          Every feature you'd want in a music player — and none of the bloat.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: 16,
        }}
      >
        {features.map((f, i) => (
          <div
            key={f.label}
            className="reveal feature-card glass"
            style={{
              padding: '20px 22px',
              borderRadius: 16,
              transition: 'all 0.3s ease',
              transitionDelay: `${(i % 6) * 50}ms`,
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: 'rgba(124,58,237,0.15)',
                border: '1px solid rgba(124,58,237,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 14,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d={f.icon} />
              </svg>
            </div>
            <div style={{ fontWeight: 700, fontSize: 14, color: '#fff', marginBottom: 4 }}>{f.label}</div>
            <div style={{ fontSize: 12, color: '#A1A1AA', lineHeight: 1.5 }}>{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
