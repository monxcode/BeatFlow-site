import Player from "../assets/Player.jpeg";

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
                  color: '#A78BFA',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                  <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5S5 15.33 5 14.5v-5C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5zM15.53 2.16l1.2-1.2a.5.5 0 00-.71-.71l-1.36 1.36C14 1.3 13.03 1 12 1s-2 .3-2.85.85L7.79.55a.5.5 0 00-.71.71l1.2 1.2A5.97 5.97 0 006 6.99V7h12v-.01c0-1.63-.66-3.12-1.71-4.22l1.24-1.23zM10 4.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zm4 0c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5z" />
                </svg>
                <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                  Now Available for Android
                </span>
              </div>

            <h1
              className="reveal heading-font"
              style={{
                fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
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

            <div className="reveal max-md:flex-col" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a
                href="/BeatFlow.apk"
                download="BeatFlow.apk"
                className="btn-primary ripple max-md:!flex max-md:!w-full max-md:justify-center"
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
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Download APK
              </a>
              <a
                href="https://github.com/monxcode/BeatFlow"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary ripple max-md:!flex max-md:!w-full max-md:justify-center"
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
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
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
                  <div style={{ fontSize: 28, fontWeight: 800, color: s.label === 'Ads & Trackers' ? '#EF4444' : '#7C3AED' }}>{s.value}</div>
                  <div style={{ fontSize: 13, color: s.label === 'Ads & Trackers' ? '#EF4444' : '#A1A1AA', fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - phone mockup */}
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
                  height: 570,
                  borderRadius: 40,
                  background: 'linear-gradient(145deg, #1a1a2e 0%, #16213e 50%, #0f0f1a 100%)',
                  border: '1.5px solid rgba(255,255,255,0.15)',
                  boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 60px rgba(124,58,237,0.2)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Screen content - real app screenshot, filling the entire outer shell */}
                <img
                  src={Player}
                  alt="BeatFlow Player"
                  draggable={false}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    userSelect: 'none',
                    borderRadius: 40,
                  }}
                />
              </div>
            </div>

            {/* Floating glass cards */}
            <div
              className="floating absolute top-[10%] right-[-5%] p-[10px_14px] rounded-xl flex items-center gap-2 min-w-[130px] bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl shadow-purple-500/5"
            >
              <div style={{ width: 28, height: 28, borderRadius: 8, background: 'linear-gradient(135deg, #7C3AED, #6D28D9)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#fff' }}>100% Private</div>
                <div style={{ fontSize: 10, color: '#A1A1AA' }}>No tracking</div>
              </div>
            </div>

            <div
              className="floating-fast absolute bottom-[15%] left-[-8%] p-[10px_14px] rounded-xl flex items-center gap-2 min-w-[120px] bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl shadow-cyan-500/5"
            >
              <div style={{ width: 28, height: 28, borderRadius: 8, background: 'linear-gradient(135deg, #22D3EE, #0EA5E9)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" /></svg>
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