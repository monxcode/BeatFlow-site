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
        /* ── Mobile Layout (< 1024px) ── */
        .dv-mobile {
          display: block;
        }
        .dv-desktop {
          display: none;
        }

        .dv-mobile-inner {
          max-width: 500px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 14px;
          text-align: left;
        }

        .dv-mobile-img-wrap {
          width: 100%;
          align-self: center;
          border-radius: 22px;
          padding: 6px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(124,58,237,0.2);
          box-shadow: 0 0 35px rgba(124,58,237,0.15);
        }

        .dv-mobile-img-wrap img {
          width: 100%;
          aspect-ratio: 1/1;
          object-fit: cover;
          border-radius: 18px;
          display: block;
        }

        .dv-mobile-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 16px;
          border-radius: 100px;
          background: rgba(124,58,237,0.1);
          border: 1px solid rgba(124,58,237,0.25);
        }

        .dv-mobile-badge span {
          font-size: 11px;
          font-weight: 700;
          color: #A78BFA;
          letter-spacing: 0.8px;
          text-transform: uppercase;
        }

        .dv-mobile-badge svg {
          width: 12px;
          height: 12px;
        }

        .dv-mobile-heading {
          font-family: var(--ff-heading);
          font-size: clamp(1.8rem, 5vw, 2.2rem);
          font-weight: 900;
          letter-spacing: -1px;
          line-height: 1.05;
          margin: 0;
        }

        .dv-mobile-heading .l1 {
          display: block;
          color: #fff;
        }

        .dv-mobile-heading .l2 {
          display: block;
          background: linear-gradient(135deg, #7C3AED, #22D3EE);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .dv-mobile-sub {
          font-size: 14px;
          font-weight: 700;
          color: #22D3EE;
          letter-spacing: 1.5px;
        }

        .dv-mobile-bio {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .dv-mobile-bio p {
          color: #A1A1AA;
          font-size: 13px;
          line-height: 1.7;
          margin: 0;
        }

        .dv-mobile-bio strong {
          color: #fff;
          font-weight: 600;
        }

        .dv-mobile-vibe {
          padding: 14px 18px;
          border-radius: 14px;
          background: rgba(124,58,237,0.06);
          border: 1px solid rgba(124,58,237,0.18);
          backdrop-filter: blur(10px);
          width: 100%;
        }

        .dv-mobile-vibe-hdr {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 6px;
        }

        .dv-mobile-vibe-hdr span {
          font-size: 14px;
          font-weight: 800;
          color: #fff;
        }

        .dv-mobile-vibe p {
          font-size: 12px;
          color: #A1A1AA;
          line-height: 1.6;
          margin: 0;
        }

        .dv-mobile-row {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          width: 100%;
        }

        .dv-mobile-social {
          display: flex;
          gap: 6px;
          flex-wrap: nowrap;
        }

        .dv-mobile-social a {
          padding: 8px 12px !important;
          font-size: 12px !important;
          gap: 6px !important;
        }

        .dv-mobile-social a svg {
          width: 14px !important;
          height: 14px !important;
        }

        .dv-mobile-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 28px;
          border-radius: 12px;
          background: linear-gradient(135deg, #7C3AED, #6D28D9);
          border: none;
          font-size: 14px;
          font-weight: 700;
          color: #fff;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dv-mobile-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 35px rgba(124,58,237,0.45);
        }

        /* Tablet (768-1023px) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .dv-root {
            padding: 80px 32px !important;
          }
          .dv-mobile-inner {
            max-width: 600px;
            gap: 18px !important;
          }
          .dv-mobile-heading {
            font-size: clamp(2rem, 4vw, 2.5rem) !important;
          }
          .dv-mobile-bio p {
            font-size: 14px !important;
          }
          .dv-mobile-vibe p {
            font-size: 13px !important;
          }
          .dv-mobile-social a {
            padding: 10px 16px !important;
            font-size: 13px !important;
          }
          .dv-mobile-social a svg {
            width: 16px !important;
            height: 16px !important;
          }
        }

        /* Small phones */
        @media (max-width: 480px) {
          .dv-root {
            padding: 48px 16px !important;
          }
          .dv-mobile-inner {
            gap: 12px !important;
          }
          .dv-mobile-img-wrap {
            padding: 4px !important;
          }
          .dv-mobile-vibe {
            padding: 12px 14px !important;
          }
          .dv-mobile-social a {
            padding: 6px 10px !important;
            font-size: 11px !important;
            gap: 4px !important;
          }
          .dv-mobile-social a svg {
            width: 12px !important;
            height: 12px !important;
          }
        }

        /* Very small phones */
        @media (max-width: 360px) {
          .dv-root {
            padding: 40px 12px !important;
          }
          .dv-mobile-inner {
            gap: 10px !important;
          }
          .dv-mobile-heading {
            font-size: 1.5rem !important;
          }
          .dv-mobile-social a {
            padding: 5px 8px !important;
            font-size: 10px !important;
            gap: 3px !important;
          }
          .dv-mobile-social a svg {
            width: 11px !important;
            height: 11px !important;
          }
        }

        /* ── Desktop Layout (≥ 1024px) ── */
        @media (min-width: 1024px) {
          .dv-mobile {
            display: none !important;
          }
          .dv-desktop {
            display: block !important;
          }

          .dv-root {
            padding: 64px 48px !important;
          }

          .dv-desktop-inner {
            max-width: 1200px;
            margin: 0 auto;
          }

          .dv-desktop-grid {
            display: grid;
            grid-template-columns: 42% 54%;
            gap: 4%;
            align-items: center;
          }

          .dv-desk-img {
            position: relative;
            border-radius: 24px;
            padding: 8px;
            background: rgba(255,255,255,0.03);
            border: 1px solid rgba(124,58,237,0.2);
            box-shadow: 0 0 40px rgba(124,58,237,0.15);
            transition: all 0.4s ease;
          }

          .dv-desk-img img {
            width: 100%;
            height: 460px;
            object-fit: cover;
            border-radius: 18px;
            display: block;
            transition: transform 0.5s ease;
          }

          .dv-desk-img:hover {
            box-shadow: 0 0 60px rgba(124,58,237,0.3), 0 0 100px rgba(34,211,238,0.08);
          }

          .dv-desk-img:hover img {
            transform: scale(1.02);
          }

          .dv-desk-content {
            display: flex;
            flex-direction: column;
            gap: 14px;
          }

          .dv-desk-badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 5px 16px;
            border-radius: 100px;
            background: rgba(124,58,237,0.1);
            border: 1px solid rgba(124,58,237,0.25);
            align-self: flex-start;
          }

          .dv-desk-badge span {
            font-size: 11px;
            font-weight: 700;
            color: #A78BFA;
            letter-spacing: 0.8px;
            text-transform: uppercase;
          }

          .dv-desk-badge svg {
            width: 12px;
            height: 12px;
          }

          .dv-desk-heading {
            font-family: var(--ff-heading);
            font-size: clamp(2.2rem, 3vw, 3.2rem);
            font-weight: 900;
            letter-spacing: -1.5px;
            line-height: 1.05;
            margin: 0;
          }

          .dv-desk-heading .l1 {
            display: block;
            color: #fff;
          }

          .dv-desk-heading .l2 {
            display: block;
            background: linear-gradient(135deg, #7C3AED, #22D3EE);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .dv-desk-sub {
            font-size: 15px;
            font-weight: 700;
            color: #22D3EE;
            letter-spacing: 1.5px;
          }

          .dv-desk-bio {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          .dv-desk-bio p {
            color: #A1A1AA;
            font-size: 14px;
            line-height: 1.75;
            margin: 0;
          }

          .dv-desk-bio strong {
            color: #fff;
            font-weight: 600;
          }

          .dv-desk-vibe {
            padding: 16px 20px;
            border-radius: 14px;
            background: rgba(124,58,237,0.06);
            border: 1px solid rgba(124,58,237,0.18);
            backdrop-filter: blur(10px);
          }

          .dv-desk-vibe-hdr {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 6px;
          }

          .dv-desk-vibe-hdr span {
            font-size: 14px;
            font-weight: 800;
            color: #fff;
          }

          .dv-desk-vibe p {
            font-size: 13px;
            color: #A1A1AA;
            line-height: 1.65;
            margin: 0;
          }

          .dv-desk-row {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
          }

          .dv-desk-social {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
          }

          .dv-desk-cta {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 12px 28px;
            border-radius: 12px;
            background: linear-gradient(135deg, #7C3AED, #6D28D9);
            border: none;
            font-size: 14px;
            font-weight: 700;
            color: #fff;
            text-decoration: none;
            cursor: pointer;
            transition: all 0.3s ease;
            align-self: flex-start;
          }

          .dv-desk-cta:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 35px rgba(124,58,237,0.45);
          }
        }

        @media (min-width: 1024px) and (max-width: 1200px) {
          .dv-desk-img img {
            height: 400px !important;
          }
          .dv-desktop-grid {
            grid-template-columns: 40% 56% !important;
            gap: 4% !important;
          }
        }
      `}</style>

      {/* ── Mobile Layout ── */}
      <div className="dv-mobile">
        <div className="dv-mobile-inner reveal">
          <div className="dv-mobile-img-wrap">
            <img
              src={DeveloperImage}
              alt="Mohan Singh Parmar"
              loading="lazy"
            />
          </div>

          <div className="dv-mobile-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span>Meet the Developer</span>
          </div>

          <h1 className="dv-mobile-heading">
            <span className="l1">Mohan Singh</span>
            <span className="l2">Parmar</span>
          </h1>

          <div className="dv-mobile-sub">Cybersecurity Enthusiast</div>

          <div className="dv-mobile-bio">
            <p>
              I am a <strong>Cybersecurity Learner</strong> and <strong>AI Enthusiast</strong> passionate about building secure, efficient, and beautifully designed software. I believe great products respect user privacy while delivering a premium experience.
            </p>
            <p>
              BeatFlow was built using AI-assisted development combined with personal ideas, design decisions, testing, and customization to create a polished, production-ready offline music experience.
            </p>
          </div>

          <div className="dv-mobile-vibe">
            <div className="dv-mobile-vibe-hdr">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              <span>100% Vibe Coded</span>
            </div>
            <p>
              BeatFlow was built using AI-assisted development combined with personal ideas, design decisions, testing, and customization to create a polished, production-ready application.
            </p>
          </div>

          <div className="dv-mobile-row">
            <div className="dv-mobile-social">
              {socialLinks.map((link) => (
                <SocialButton key={link.label} {...link} />
              ))}
            </div>

            <a
              href="https://monxcode.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="dv-mobile-cta"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Visit Portfolio
            </a>
          </div>
        </div>
      </div>

      {/* ── Desktop Layout ── */}
      <div className="dv-desktop">
        <div className="dv-desktop-inner">
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="dv-desktop-grid">
              {/* Left Column - Image */}
              <div className="dv-desk-img reveal">
                <img
                  src={DeveloperImage}
                  alt="Mohan Singh Parmar"
                  loading="lazy"
                />
              </div>

              {/* Right Column - Content */}
              <div className="dv-desk-content reveal" style={{ transitionDelay: '100ms' }}>
                <div className="dv-desk-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <span>Meet the Developer</span>
                </div>

                <h1 className="dv-desk-heading">
                  <span className="l1">Mohan Singh</span>
                  <span className="l2">Parmar</span>
                </h1>

                <div className="dv-desk-sub">Cybersecurity Enthusiast</div>

                <div className="dv-desk-bio">
                  <p>
                    I am a <strong>Cybersecurity Learner</strong> and <strong>AI Enthusiast</strong> passionate about building secure, efficient, and beautifully designed software. I believe great products respect user privacy while delivering a premium experience — and that technology should be both functional and visually refined.
                  </p>
                  <p>
                    BeatFlow is a passion project that I built from the ground up to deliver a clean, fast, and privacy-first offline music experience. The entire project was <strong>fully vibe coded</strong> — combining AI-assisted development with my own ideas, design decisions, testing, and customization to create something truly polished.
                  </p>
                  <p>
                    Every detail in BeatFlow — from the AMOLED interface to the glassmorphism effects — was crafted with care. This philosophy drives everything I build: combining technical precision with thoughtful design to create software people genuinely enjoy using.
                  </p>
                </div>

                {/* Vibe Coded Card */}
                <div className="dv-desk-vibe">
                  <div className="dv-desk-vibe-hdr">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                    <span>100% Vibe Coded</span>
                  </div>
                  <p>
                    BeatFlow was built using AI-assisted development combined with personal ideas, design decisions, testing, and customization to create a polished, production-ready application.
                  </p>
                </div>

                {/* Social + CTA */}
                <div className="dv-desk-row">
                  <div className="dv-desk-social">
                    {socialLinks.map((link) => (
                      <SocialButton key={link.label} {...link} />
                    ))}
                  </div>

                  <a
                    href="https://monxcode.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dv-desk-cta"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Visit Portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
