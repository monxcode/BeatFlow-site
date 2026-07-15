export default function Developer() {
  return (
    <section id="developer" style={{ padding: '80px 24px' }}>
      <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
        <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 100, background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.25)', marginBottom: 24 }}>
          <span style={{ fontSize: 12, fontWeight: 600, color: '#A78BFA', letterSpacing: '0.5px', textTransform: 'uppercase' }}>The Creator</span>
        </div>

        <h2 className="reveal" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.8px', marginBottom: 40 }}>
          About the <span className="text-gradient">Developer</span>
        </h2>

        <div
          className="reveal glass"
          style={{ borderRadius: 24, padding: '40px 32px' }}
        >
          {/* Avatar */}
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #7C3AED, #22D3EE)',
              margin: '0 auto 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 32,
              boxShadow: '0 0 30px rgba(124,58,237,0.4)',
            }}
          >
            👨‍💻
          </div>

          <h3 style={{ fontSize: 22, fontWeight: 800, color: '#fff', marginBottom: 8 }}>Mohan Singh Parmar</h3>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
            <span style={{ padding: '4px 14px', borderRadius: 100, background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.3)', fontSize: 12, fontWeight: 600, color: '#A78BFA' }}>Android Developer</span>
            <span style={{ padding: '4px 14px', borderRadius: 100, background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.25)', fontSize: 12, fontWeight: 600, color: '#22D3EE' }}>Cybersecurity</span>
            <span style={{ padding: '4px 14px', borderRadius: 100, background: 'rgba(236,72,153,0.1)', border: '1px solid rgba(236,72,153,0.25)', fontSize: 12, fontWeight: 600, color: '#F472B6' }}>AI Enthusiast</span>
          </div>

          <a
            href="https://github.com/monxcode/BeatFlow"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '12px 28px',
              borderRadius: 12,
              fontSize: 14,
              fontWeight: 700,
              color: '#fff',
              textDecoration: 'none',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            @monxcode
          </a>
        </div>
      </div>
    </section>
  )
}
