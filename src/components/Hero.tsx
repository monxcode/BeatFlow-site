export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 100,
        paddingBottom: 80,
      }}
    >
      {/* Ambient glow blobs */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          left: '10%',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '30%',
          right: '5%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            alignItems: 'center',
            gap: 64,
          }}
        >
          {/* Left content */}
          <div>
            <div
              className="reveal"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 16px',
                borderRadius: 100,
                background: 'rgba(124,58,237,0.12)',
                border: '1px solid rgba(124,58,237,0.3)',
                marginBottom: 28,
              }}
            >
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#7C3AED', animation: 'pulse-glow 2s infinite' }} />
              <span style={{ fontSize: 12, fontWeight: 600, color: '#A78BFA', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                Now Available for Android
              </span>
            </div>

            <h1
              className="reveal"
              style={{
                fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-1.5px',
                marginBottom: 24,
              }}
            >
              Your Music.<br />
              Your Privacy.<br />
              <span className="text-gradient">Your Beat.</span>
            </h1>

            <p
              className="reveal"
              style={{
                fontSize: 18,
                color: '#A1A1AA',
                lineHeight: 1.7,
                marginBottom: 40,
                maxWidth: 480,
              }}
            >
              BeatFlow is a premium offline local music player built for speed, privacy, and a beautiful listening experience.
            </p>

            <div className="reveal" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a
                href="app/BeatFlow.apk"
                download="BeatFlow.apk"
                className="btn-primary ripple"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '14px 28px',
                  borderRadius: 14,
                  fontSize: 15,
                  fontWeight: 700,
                  color: '#fff',
                  textDecoration: 'none',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Download APK
              </a>
              <a
                href="https://github.com/monxcode/BeatFlow"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary ripple"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '14px 28px',
                  borderRadius: 14,
                  fontSize: 15,
                  fontWeight: 700,
                  color: '#fff',
                  textDecoration: 'none',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                View Source
              </a>
            </div>

            {/* Stats row */}
            <div className="reveal" style={{ display: 'flex', gap: 32, marginTop: 48, flexWrap: 'wrap' }}>
              {[
                { label: 'Audio Formats', value: '9+' },
                { label: 'Features', value: '20+' },
                { label: 'Ads & Trackers', value: '0' },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{ fontSize: 28, fontWeight: 800, color: '#7C3AED' }}>{s.value}</div>
                  <div style={{ fontSize: 13, color: '#A1A1AA', fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — phone mockup */}
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            {/* Glow ring */}
            <div
              className="floating-slow"
              style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  width: 320,
                  height: 320,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 70%)',
                  filter: 'blur(40px)',
                }}
              />
              {/* Phone shell */}
              <div
                style={{
                  width: 260,
                  height: 520,
                  borderRadius: 40,
                  background: 'linear-gradient(145deg, #1a1a2e 0%, #16213e 50%, #0f0f1a 100%)',
                  border: '1.5px solid rgba(255,255,255,0.15)',
                  boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 60px rgba(124,58,237,0.2)',
                  position: 'relative',
                  overflow: 'hidden',
                  padding: 16,
                }}
              >
                {/* Notch */}
                <div style={{ width: 80, height: 26, borderRadius: 13, background: '#09090B', margin: '0 auto 16px' }} />

                {/* Screen content — player UI */}
                <div style={{ textAlign: 'center' }}>
                  {/* Album art */}
                  <div
                    style={{
                      width: 140,
                      height: 140,
                      borderRadius: 20,
                      background: 'linear-gradient(135deg, #7C3AED 0%, #22D3EE 100%)',
                      margin: '0 auto 16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 20px 40px rgba(124,58,237,0.4)',
                    }}
                  >
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18V5l12-2v13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="6" cy="18" r="3" stroke="white" strokeWidth="1.5"/>
                      <circle cx="18" cy="16" r="3" stroke="white" strokeWidth="1.5"/>
                    </svg>
                  </div>

                  <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 4 }}>Midnight Dreams</div>
                  <div style={{ fontSize: 11, color: '#A1A1AA', marginBottom: 20 }}>Artist Name</div>

                  {/* Progress bar */}
                  <div style={{ height: 3, background: 'rgba(255,255,255,0.15)', borderRadius: 2, margin: '0 8px 16px', position: 'relative' }}>
                    <div style={{ height: '100%', width: '40%', background: 'linear-gradient(90deg, #7C3AED, #22D3EE)', borderRadius: 2 }} />
                  </div>

                  {/* Controls */}
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 20 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#A1A1AA">
                      <path d="M19 20L9 12l10-8v16zM5 19V5h2v14H5z"/>
                    </svg>
                    <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg, #7C3AED, #6D28D9)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(124,58,237,0.5)' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#A1A1AA">
                      <path d="M5 4l10 8-10 8V4zm14 1h-2v14h2V5z"/>
                    </svg>
                  </div>
                </div>

                {/* Bottom nav bar */}
                <div style={{ position: 'absolute', bottom: 16, left: 16, right: 16, height: 40, borderRadius: 12, background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                  {['M12 2a10 10 0 100 20A10 10 0 0012 2z', 'M9 18V5l12-2v13M6 18a3 3 0 100-6 3 3 0 000 6z', 'M4 6h16M4 10h16M4 14h16M4 18h16', 'M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 3a4 4 0 100 8 4 4 0 000-8z'].map((d, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={i === 1 ? '#7C3AED' : '#555'} strokeWidth="1.5">
                      <path d={d} strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating glass cards */}
            <div
              className="floating glass"
              style={{
                position: 'absolute',
                top: '10%',
                right: '-5%',
                padding: '10px 14px',
                borderRadius: 12,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                minWidth: 130,
              }}
            >
              <div style={{ width: 28, height: 28, borderRadius: 8, background: 'linear-gradient(135deg, #7C3AED, #6D28D9)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#fff' }}>100% Private</div>
                <div style={{ fontSize: 10, color: '#A1A1AA' }}>No tracking</div>
              </div>
            </div>

            <div
              className="floating-fast glass"
              style={{
                position: 'absolute',
                bottom: '15%',
                left: '-8%',
                padding: '10px 14px',
                borderRadius: 12,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                minWidth: 120,
              }}
            >
              <div style={{ width: 28, height: 28, borderRadius: 8, background: 'linear-gradient(135deg, #22D3EE, #0EA5E9)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#fff' }}>Blazing Fast</div>
                <div style={{ fontSize: 10, color: '#A1A1AA' }}>Offline first</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
