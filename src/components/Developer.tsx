import DeveloperImage from "../assets/developer.png";

interface SocialLink {
  href: string
  label: string
  icon: React.ReactNode
  hoverColor: string
}

function SocialButton({ href, label, icon, hoverColor }: SocialLink) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={label}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        padding: '10px 18px',
        borderRadius: 12,
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.10)',
        color: '#A1A1AA',
        fontSize: 14,
        fontWeight: 600,
        textDecoration: 'none',
        transition: 'all 0.25s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = `${hoverColor}15`
        e.currentTarget.style.borderColor = hoverColor
        e.currentTarget.style.color = '#fff'
        e.currentTarget.style.transform = 'translateY(-2px)'
        e.currentTarget.style.boxShadow = `0 6px 20px ${hoverColor}30`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'
        e.currentTarget.style.color = '#A1A1AA'
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {icon}
      <span>{label}</span>
    </a>
  )
}

export default function Developer() {
  const socialLinks: SocialLink[] = [
    {
      href: 'https://monxcode.vercel.app/',
      label: 'Portfolio',
      hoverColor: '#7C3AED',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        </svg>
      ),
    },
    {
      href: 'https://www.linkedin.com/in/mohan-singh-parmar',
      label: 'LinkedIn',
      hoverColor: '#0A66C2',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      href: 'https://github.com/monxcode',
      label: 'GitHub',
      hoverColor: '#fff',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
    {
      href: 'https://www.instagram.com/ur.mohan_',
      label: 'Instagram',
      hoverColor: '#E4405F',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
  ]

  return (
    <section id="developer" className="dv-root" style={{ padding: '80px 24px' }}>
      <style>{`
        @media (max-width: 768px) {
          .dv-root {
            padding: 56px 16px !important;
          }
          .dv-root .dv-card {
            padding: 28px 20px !important;
            border-radius: 20px !important;
          }
          .dv-root .dv-avatar {
            width: 64px !important;
            height: 64px !important;
            margin-bottom: 16px !important;
          }
          .dv-root .dv-name {
            font-size: 20px !important;
          }
          .dv-root .dv-badge {
            font-size: 11px !important;
            padding: 3px 12px !important;
          }
          .dv-root .dv-badge-wrap {
            margin-bottom: 20px !important;
            gap: 6px !important;
          }
          .dv-root .dv-bio-wrap {
            margin-bottom: 24px !important;
          }
          .dv-root .dv-bio-wrap p {
            font-size: 13px !important;
            margin-bottom: 12px !important;
          }
          .dv-root .dv-hero-badge {
            margin-bottom: 18px !important;
          }
          .dv-root .dv-heading {
            margin-bottom: 32px !important;
          }
          .dv-root .dv-social {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 8px !important;
          }
          .dv-root .dv-social a {
            width: 100% !important;
            padding: 12px 10px !important;
            font-size: 13px !important;
            justify-content: center !important;
          }
          .dv-root .dv-social a svg {
            width: 16px !important;
            height: 16px !important;
          }
        }

        @media (max-width: 480px) {
          .dv-root {
            padding: 48px 12px !important;
          }
          .dv-root .dv-card {
            padding: 24px 16px !important;
            border-radius: 16px !important;
          }
          .dv-root .dv-avatar {
            width: 56px !important;
            height: 56px !important;
          }
          .dv-root .dv-name {
            font-size: 18px !important;
          }
          .dv-root .dv-bio-wrap p {
            font-size: 12.5px !important;
          }
          .dv-root .dv-social a {
            padding: 10px 8px !important;
          }
        }

        @media (max-width: 360px) {
          .dv-root {
            padding: 40px 10px !important;
          }
          .dv-root .dv-card {
            padding: 20px 12px !important;
          }
          .dv-root .dv-social a {
            font-size: 12px !important;
            padding: 10px 6px !important;
          }
          .dv-root .dv-social a svg {
            width: 14px !important;
            height: 14px !important;
          }
          .dv-root .dv-badge {
            font-size: 10px !important;
            padding: 2px 10px !important;
          }
        }
      `}</style>

      <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
        <div className="dv-hero-badge reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 100, background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.25)', marginBottom: 24 }}>
          <span style={{ fontSize: 12, fontWeight: 600, color: '#A78BFA', letterSpacing: '0.5px', textTransform: 'uppercase' }}>The Creator</span>
        </div>

        <h2 className="dv-heading reveal" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.8px', marginBottom: 40 }}>
          About the <span className="text-gradient">Developer</span>
        </h2>

        <div className="dv-card reveal glass" style={{ borderRadius: 24, padding: '40px 32px' }}>
          {/* Avatar */}
          <img
            src={DeveloperImage}
            alt="Mohan Singh Parmar"
            loading="lazy"
            className="dv-avatar"
            style={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              objectFit: 'cover',
              margin: '0 auto 20px',
              boxShadow: '0 0 30px rgba(124,58,237,0.4)',
            }}
          />

          <h3 className="dv-name" style={{ fontSize: 22, fontWeight: 800, color: '#fff', marginBottom: 8 }}>Mohan Singh Parmar</h3>

          {/* Badges */}
          <div className="dv-badge-wrap" style={{ display: 'flex', justifyContent: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
            <span className="dv-badge" style={{ padding: '4px 14px', borderRadius: 100, background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.25)', fontSize: 12, fontWeight: 600, color: '#22D3EE' }}>Cybersecurity Enthusiast</span>
            <span className="dv-badge" style={{ padding: '4px 14px', borderRadius: 100, background: 'rgba(236,72,153,0.1)', border: '1px solid rgba(236,72,153,0.25)', fontSize: 12, fontWeight: 600, color: '#F472B6' }}>AI Enthusiast</span>
          </div>

          {/* Bio */}
          <div className="dv-bio-wrap" style={{ textAlign: 'left', marginBottom: 28 }}>
            <p style={{ color: '#D4D4D8', fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>
              I am a <strong style={{ color: '#fff', fontWeight: 600 }}>Cybersecurity Learner</strong> and <strong style={{ color: '#fff', fontWeight: 600 }}>AI Enthusiast</strong> with a deep passion for modern software development. I enjoy exploring how technology can be used to build secure, efficient, and beautifully designed applications that respect user privacy.
            </p>
            <p style={{ color: '#D4D4D8', fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>
              BeatFlow is a passion project that I built from the ground up to deliver a clean, fast, and privacy-first offline music experience. The entire project was <strong style={{ color: '#fff', fontWeight: 600 }}>fully vibe coded</strong> — combining AI-assisted development with my own ideas, design decisions, testing, and customization to create something truly polished.
            </p>
            <p style={{ color: '#D4D4D8', fontSize: 14, lineHeight: 1.8 }}>
              I believe the best products are those that are both functional and visually refined. Every detail in BeatFlow — from the AMOLED interface to the glassmorphism effects — was crafted with care to deliver a premium, distraction-free listening experience.
            </p>
          </div>

          {/* Social Links */}
          <div className="dv-social" style={{ display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap' }}>
            {socialLinks.map((link) => (
              <SocialButton key={link.label} {...link} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
