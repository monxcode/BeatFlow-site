import { useState } from 'react'

const faqs = [
  { q: 'Is BeatFlow free?', a: 'Yes, BeatFlow is completely free — no hidden charges, no premium tiers, no subscriptions. It will always be free.' },
  { q: 'Does it work offline?', a: 'Absolutely. BeatFlow is built offline-first. It plays your local music files without any internet connection required.' },
  { q: 'Does it upload my music?', a: 'Never. Your music stays 100% on your device. BeatFlow has no server communication of any kind.' },
  { q: 'Does it show ads?', a: 'Zero ads. BeatFlow has no advertisements, no banners, no popups — just pure music.' },
  { q: 'Which audio formats are supported?', a: 'BeatFlow supports MP3, FLAC, AAC, M4A, OGG, WAV, OPUS, AMR, and 3GP — covering virtually every common audio format.' },
  { q: 'Can I create playlists?', a: 'Yes! BeatFlow has full playlist support. Create, edit, reorder, and manage as many playlists as you want.' },
  { q: 'Does it support dark mode?', a: 'BeatFlow ships with a beautiful AMOLED dark theme by default, which saves battery on OLED screens.' },
  { q: 'Is internet required?', a: 'No. BeatFlow requires no internet connection for any of its features. Everything works fully offline.' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section style={{ padding: '80px 24px' }}>
      <div style={{ maxWidth: 700, margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
          <h2 className="heading-font" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.8px', marginBottom: 12 }}>
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p style={{ color: '#A1A1AA', fontSize: 16 }}>Everything you need to know about BeatFlow.</p>
        </div>

        <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="glass"
              style={{
                borderRadius: 14,
                overflow: 'hidden',
                transition: 'border-color 0.3s',
                borderColor: open === i ? 'rgba(124,58,237,0.4)' : 'rgba(255,255,255,0.12)',
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%',
                  padding: '18px 22px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 16,
                  textAlign: 'left',
                }}
              >
                <span style={{ fontWeight: 700, fontSize: 15, color: '#fff' }}>{faq.q}</span>
                <div
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 6,
                    background: open === i ? 'rgba(124,58,237,0.3)' : 'rgba(255,255,255,0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'all 0.3s',
                  }}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={open === i ? '#7C3AED' : '#A1A1AA'}
                    strokeWidth="2.5"
                    style={{ transition: 'transform 0.3s', transform: open === i ? 'rotate(180deg)' : 'none' }}
                  >
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </button>
              <div
                className={`faq-answer ${open === i ? 'open' : ''}`}
                style={{ paddingLeft: 22, paddingRight: 22, paddingBottom: open === i ? 18 : 0 }}
              >
                <p style={{ color: '#A1A1AA', fontSize: 14, lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
