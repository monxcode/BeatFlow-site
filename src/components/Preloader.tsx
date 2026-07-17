import { useEffect, useState } from 'react'
import logo from '../imports/logo.png'

interface PreloaderProps {
  onFinish: () => void
}

export default function Preloader({ onFinish }: PreloaderProps) {
  const [phase, setPhase] = useState<'entering' | 'visible' | 'exiting'>('entering')

  useEffect(() => {
    const enter = setTimeout(() => setPhase('visible'), 80)
    const exit = setTimeout(() => setPhase('exiting'), 1700)
    const done = setTimeout(onFinish, 2200)
    return () => { clearTimeout(enter); clearTimeout(exit); clearTimeout(done) }
  }, [onFinish])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const visible = phase !== 'exiting'

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 99999,
      backgroundColor: '#09090B',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: visible ? 1 : 0,
      transform: visible ? 'scale(1)' : 'scale(0.92)',
      transition: 'opacity 0.45s ease, transform 0.45s ease',
    }}>
      <style>{`
        @keyframes preloader-logo {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.04); }
        }
        @keyframes preloader-eq {
          0%, 100% { height: 6px; }
          50% { height: 26px; }
        }
        @keyframes preloader-fade-in {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .preloader-logo {
          animation: preloader-logo 2.4s ease-in-out infinite;
        }
        .preloader-eq {
          animation: preloader-eq 0.7s ease-in-out infinite;
        }
        .preloader-content {
          animation: preloader-fade-in 0.5s ease both;
        }
      `}</style>

      <div className="preloader-content" style={{ textAlign: 'center', opacity: phase === 'entering' ? 0 : 1, transform: phase === 'entering' ? 'translateY(12px)' : 'translateY(0)', transition: 'opacity 0.4s ease, transform 0.4s ease' }}>
        {/* Logo */}
        <div className="preloader-logo" style={{ marginBottom: 28 }}>
          <img src={logo} alt="BeatFlow" draggable={false} style={{ width: 80, height: 80, display: 'block', margin: '0 auto' }} />
        </div>

        {/* App Name */}
        <h1 style={{
          fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
          fontWeight: 800,
          letterSpacing: '-0.5px',
          background: 'linear-gradient(135deg, #7C3AED 0%, #22D3EE 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: 36,
          lineHeight: 1.2,
        }}>
          BeatFlow
        </h1>

        {/* Equalizer bars */}
        <div style={{ display: 'flex', gap: 5, justifyContent: 'center', alignItems: 'center', height: 30 }}>
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="preloader-eq"
              style={{
                width: 4,
                borderRadius: 3,
                background: 'linear-gradient(180deg, #7C3AED, #22D3EE)',
                animationDelay: `${i * 0.12}s`,
              }}
            />
          ))}
        </div>

        {/* Subtle loading text */}
        <p style={{
          marginTop: 32,
          fontSize: 12,
          fontWeight: 500,
          color: '#52525B',
          letterSpacing: '2px',
          textTransform: 'uppercase',
        }}>
          Loading
        </p>
      </div>
    </div>
  )
}
