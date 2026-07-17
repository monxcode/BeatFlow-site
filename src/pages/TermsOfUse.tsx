import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LegalFooter from '../components/LegalFooter'

const sections = [
  { id: 'acceptance-of-terms', label: 'Acceptance of Terms' },
  { id: 'application-purpose', label: 'Application Purpose' },
  { id: 'license-grant', label: 'License Grant' },
  { id: 'eligibility', label: 'Eligibility' },
  { id: 'user-responsibilities', label: 'User Responsibilities' },
  { id: 'acceptable-use', label: 'Acceptable Use' },
  { id: 'music-ownership', label: 'Music Ownership' },
  { id: 'copyright-notice', label: 'Copyright Notice' },
  { id: 'intellectual-property-rights', label: 'Intellectual Property Rights' },
  { id: 'restrictions', label: 'Restrictions' },
  { id: 'disclaimer-of-warranties', label: 'Disclaimer of Warranties' },
  { id: 'limitation-of-liability', label: 'Limitation of Liability' },
  { id: 'indemnification', label: 'Indemnification' },
  { id: 'suspension-termination', label: 'Suspension & Termination' },
  { id: 'updates-to-these-terms', label: 'Updates to These Terms' },
  { id: 'governing-terms', label: 'Governing Terms' },
  { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
  { id: 'contact-information', label: 'Contact Information' },
  { id: 'closing-statement', label: 'Closing Statement' },
]

const scaleIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
)

function SectionHeading({ label }: { label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
      <div className="tu-icon-box" style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {scaleIcon}
      </div>
      <h2 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.3px' }}>
        {label}
      </h2>
    </div>
  )
}

const contentStyles: Record<string, React.CSSProperties> = {
  wrapper: {
    padding: '28px 32px',
    borderRadius: 16,
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.06)',
    color: '#D4D4D8',
    fontSize: 15,
    lineHeight: 1.8,
  },
  p: { marginBottom: 16, color: '#D4D4D8', fontSize: 15, lineHeight: 1.8 },
  strong: { color: '#fff', fontWeight: 600 },
  ul: { margin: '0 0 16 0', paddingLeft: 24, listStyle: 'none' as const },
  li: { marginBottom: 10, color: '#D4D4D8', fontSize: 15, lineHeight: 1.7, position: 'relative' as const, paddingLeft: 20 },
  liDot: {
    content: '""',
    position: 'absolute' as const,
    left: 0,
    top: 10,
    width: 6,
    height: 6,
    borderRadius: '50%',
    background: '#7C3AED',
  },
}

function Li({ children }: { children: React.ReactNode }) {
  return (
    <li style={contentStyles.li}>
      <span style={contentStyles.liDot} />
      {children}
    </li>
  )
}

function sectionContent(id: string): React.ReactNode {
  switch (id) {
    case 'acceptance-of-terms':
      return (
        <div className="tu-content" style={contentStyles.wrapper}>
          <p style={contentStyles.p}>
            By downloading, installing, or using BeatFlow in any manner, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use (the &ldquo;Terms&rdquo;). These Terms form a legally binding agreement between you (&ldquo;User&rdquo; or &ldquo;you&rdquo;) and the BeatFlow developer (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) regarding your access to and use of the BeatFlow application.
          </p>
          <p style={contentStyles.p}>
            If you do not agree with any provision of these Terms, you must immediately cease all use of BeatFlow and uninstall the application from your devices. Your continued use of BeatFlow following any updates to these Terms constitutes your acceptance of the revised Terms.
          </p>
        </div>
      )

    case 'application-purpose':
      return (
        <div className="tu-content" style={contentStyles.wrapper}>
          <p style={contentStyles.p}>
            BeatFlow is an <strong style={contentStyles.strong}>offline-first local music player</strong> designed specifically to scan, index, organize, and play audio files that are stored locally on your device. The application reads metadata — such as song titles, artist names, album information, and genre tags — from your existing audio files to present them in an organized, browsable music library interface.
          </p>
          <p style={contentStyles.p}>
            BeatFlow does <strong style={contentStyles.strong}>not</strong> provide, host, stream, download, or distribute any copyrighted music, audio content, or media files. It does not connect to any online music service, streaming platform, content delivery network, or peer-to-peer network. The sole and exclusive function of BeatFlow is to play audio files that you have already obtained and stored on your local device through lawful means.
          </p>
          <p style={contentStyles.p}>
            BeatFlow does not verify, authenticate, or validate the ownership or legal status of any audio files played through the application. That responsibility rests entirely with you, the user.
          </p>
        </div>
      )

    case 'license-grant':
      return (
        <div className="tu-content" style={contentStyles.wrapper}>
          <p style={contentStyles.p}>
            Subject to your strict compliance with these Terms, the BeatFlow developer grants you a <strong style={contentStyles.strong}>limited, non-exclusive, non-transferable, revocable license</strong> to download, install, and use BeatFlow on devices that you own or control. This license is granted for personal, non-commercial use only, unless otherwise expressly authorized in writing by the BeatFlow developer.
          </p>
          <p style={contentStyles.p}>
            This license does not grant you any ownership interest in BeatFlow or any associated intellectual property. All rights not expressly granted to you under these Terms are expressly reserved by the BeatFlow developer.
          </p>
        </div>
      )

    case 'eligibility':
      return (
        <div className="tu-content" style={contentStyles.wrapper}>
          <p style={contentStyles.p}>
            By using BeatFlow, you represent and warrant that you are at least <strong style={contentStyles.strong}>13 years of age</strong>. If you are under the age of 13, you are not permitted to use BeatFlow under any circumstances. If you are between 13 and 18 years of age, you represent that you have obtained the consent of your parent or legal guardian to use the application and be bound by these Terms.
          </p>
          <p style={contentStyles.p}>
            You further represent that you have not been previously suspended, banned, or prohibited from using BeatFlow, and that your use of BeatFlow complies with all applicable laws and regulations in your jurisdiction.
          </p>
        </div>
      )

    case 'user-responsibilities':
      return (
        <div className="tu-content" style={contentStyles.wrapper}>
          <p style={contentStyles.p}>
            As a user of BeatFlow, you accept the following responsibilities:
          </p>
          <ul className="tu-ul" style={contentStyles.ul}>
            <Li>Ensuring that you have the <strong style={contentStyles.strong}>legal right</strong> to access, play, and listen to all audio files stored on your device that you choose to play through BeatFlow</Li>
            <Li>Complying with all applicable copyright laws, intellectual property laws, and regulations in your jurisdiction regarding the use of audio content</Li>
            <Li>Maintaining the security and integrity of your device and any locally stored data, including regular backups of your music library</Li>
            <Li>Ensuring your device meets the minimum technical requirements necessary to run BeatFlow effectively</Li>
            <Li>Not using BeatFlow for any unlawful, fraudulent, or prohibited purpose</Li>
            <Li>Any and all consequences resulting from the modification, reverse engineering, misuse, or unauthorized distribution of BeatFlow</Li>
          </ul>
        </div>
      )

    case 'acceptable-use':
      return (
        <div className="tu-content" style={contentStyles.wrapper}>
          <p style={contentStyles.p}>
            You agree to use BeatFlow solely for its intended purpose as a local music playback tool. You agree <strong style={contentStyles.strong}>not</strong> to:
          </p>
          <ul className="tu-ul" style={contentStyles.ul}>
            <Li>Use BeatFlow to violate any applicable local, national, or international law or regulation</Li>
            <Li>Attempt to access, stream, download, or retrieve content from unauthorized or illegal sources through or in connection with BeatFlow</Li>
            <Li>Use BeatFlow to infringe upon the copyrights, trademarks, or other intellectual property rights of any third party</Li>
            <Li>Interfere with, disrupt, or circumvent the normal operation, security features, or technical limitations of BeatFlow</Li>
            <Li>Use any automated means, bots, scripts, or scrapers to interact with BeatFlow except through the standard user interface provided</Li>
            <Li>Distribute, share, or disseminate any portion of BeatFlow, including its code, design, or assets, without prior written authorization</Li>
          </ul>
        </div>
      )

    case 'music-ownership':
      return (
        <div className="tu-content" style={contentStyles.wrapper}>
          <p style={contentStyles.p}>
            BeatFlow does <strong style={contentStyles.strong}>not</strong> claim any ownership right, title, or interest in any music, audio files, podcasts, or other media content that you play, organize, or access using the application. All ownership rights, copyrights, and intellectual property rights in and to the audio files remain exclusively with their respective rightful owners.
          </p>
          <p style={contentStyles.p}>
            You are solely and entirely responsible for ensuring that you have obtained all necessary permissions, licenses, clearances, or legal rights required to play, listen to, and organize any audio files using BeatFlow. The application is a playback tool only. Neither the downloading nor the use of BeatFlow transfers or grants any rights, express or implied, to the media content you choose to play through it.
          </p>
        </div>
      )

    case 'copyright-notice':
      return (
        <div className="tu-content" style={contentStyles.wrapper}>
          <p style={contentStyles.p}>
            All audio files, music tracks, and other media content played through BeatFlow are the property of their respective owners and are protected by applicable copyright laws, international treaties, and other intellectual property laws. BeatFlow does not host, store, distribute, transmit, or make available any copyrighted content.
          </p>
          <p style={contentStyles.p}>
            You acknowledge that BeatFlow is a <strong style={contentStyles.strong}>local playback tool</strong> and that any unauthorized use of copyrighted material — including but not limited to playing pirated or unlicensed audio files — may violate applicable copyright laws and subject you to legal liability. If you believe that any content accessible in connection with BeatFlow infringes upon your copyright, please contact us at the address provided in the Contact Information section.
          </p>
        </div>
      )

    case 'intellectual-property-rights':
      return (
        <div className="tu-content" style={contentStyles.wrapper}>
          <p style={contentStyles.p}>
            All trademarks, service marks, trade names, branding, logos, trade dress, user interface design, visual elements, icons, graphics, source code, object code, software architecture, algorithms, documentation, and any other intellectual property associated with BeatFlow are the <strong style={contentStyles.strong}>exclusive property</strong> of the BeatFlow developer unless otherwise expressly stated.
          </p>
          <p style={contentStyles.p}>
            You acknowledge and agree that BeatFlow and all related intellectual property rights are and will remain the sole and exclusive property of the BeatFlow developer. Nothing in these Terms grants or shall be construed as granting you any right, title, interest, or license in or to any of BeatFlow&rsquo;s intellectual property beyond the limited, revocable license expressly set forth in the License Grant section above.
          </p>
        </div>
      )

    case 'restrictions':
      return (
        <div className="tu-content" style={contentStyles.wrapper}>
          <p style={contentStyles.p}>
            You may not, and you may not permit any third party to, engage in any of the following activities with respect to BeatFlow:
          </p>
          <ul className="tu-ul" style={contentStyles.ul}>
            <Li><strong style={contentStyles.strong}>Reverse engineer</strong>, decompile, disassemble, decrypt, or attempt to derive the source code or underlying algorithms of BeatFlow, except to the extent expressly permitted by applicable law notwithstanding this restriction</Li>
            <Li>Modify, adapt, translate, patch, or create any derivative works based upon BeatFlow, in whole or in part</Li>
            <Li>Copy, reproduce, republish, upload, transmit, distribute, or publicly display any portion of BeatFlow, including its code, design, or visual assets</Li>
            <Li>Rent, lease, lend, sell, sublicense, assign, or otherwise transfer BeatFlow or any rights therein to any third party</Li>
            <Li>Remove, alter, conceal, or obscure any copyright, trademark, patent, or other proprietary rights notices affixed to or contained within BeatFlow</Li>
            <Li>Use BeatFlow for any commercial purpose, including but not limited to public performance, broadcasting, or generating revenue, without the prior written consent of the BeatFlow developer</Li>
            <Li>Circumvent, disable, or tamper with any security-related features, digital rights management mechanisms, or usage restrictions incorporated into BeatFlow</Li>
          </ul>
        </div>
      )

    case 'disclaimer-of-warranties':
      return (
        <div className="tu-content" style={contentStyles.wrapper}>
          <p style={contentStyles.p}>
            <strong style={contentStyles.strong}>BeatFlow is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis, without any warranties of any kind, either express or implied.</strong> To the fullest extent permitted by applicable law, the BeatFlow developer expressly disclaims all warranties, whether statutory, express, or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, title, quiet enjoyment, accuracy, and non-infringement.
          </p>
          <p style={contentStyles.p}>
            The BeatFlow developer does <strong style={contentStyles.strong}>not</strong> warrant that:
          </p>
          <ul className="tu-ul" style={contentStyles.ul}>
            <Li>BeatFlow will meet your specific requirements or expectations</Li>
            <Li>The operation of BeatFlow will be uninterrupted, timely, secure, or free from errors, defects, or viruses</Li>
            <Li>Any defects or issues in BeatFlow will be corrected or patched</Li>
            <Li>BeatFlow is compatible with all devices, operating systems, or hardware configurations</Li>
            <Li>The results obtained from using BeatFlow will be accurate, reliable, or fit for any particular purpose</Li>
          </ul>
          <p style={contentStyles.p}>
            No advice or information, whether oral or written, obtained by you from BeatFlow or through the BeatFlow developer shall create any warranty not expressly stated in these Terms. You assume all responsibility and risk for your use of BeatFlow.
          </p>
        </div>
      )

    case 'limitation-of-liability':
      return (
        <div className="tu-content" style={contentStyles.wrapper}>
          <p style={contentStyles.p}>
            <strong style={contentStyles.strong}>To the maximum extent permitted by applicable law, in no event shall the BeatFlow developer, its affiliates, or their respective officers, directors, employees, or agents be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages</strong>, including but not limited to damages for loss of profits, goodwill, use, data, data breach, device damage, or other intangible losses, arising out of or in any way relating to:
          </p>
          <ul className="tu-ul" style={contentStyles.ul}>
            <Li>Your use or inability to use BeatFlow</Li>
            <Li>Any unauthorized access to or use of your device or data</Li>
            <Li>Any loss or corruption of your music library, playlists, or other locally stored data</Li>
            <Li>Any copyright infringement, intellectual property violation, or legal claim arising from the audio files you play using BeatFlow</Li>
            <Li>Any bugs, errors, or omissions in the operation of BeatFlow</Li>
            <Li>Any conduct or content of any third party on or related to BeatFlow</Li>
          </ul>
          <p style={contentStyles.p}>
            This limitation of liability applies regardless of the legal theory under which liability is asserted — whether in contract, tort (including negligence), strict liability, or otherwise — and even if the BeatFlow developer has been advised of the possibility of such damages. The developer&rsquo;s total cumulative liability to you for all claims arising from or relating to these Terms or your use of BeatFlow shall not exceed the amount paid by you, if any, to use BeatFlow.
          </p>
        </div>
      )

    case 'indemnification':
      return (
        <div className="tu-content" style={contentStyles.wrapper}>
          <p style={contentStyles.p}>
            You agree to <strong style={contentStyles.strong}>indemnify, defend, and hold harmless</strong> the BeatFlow developer, its affiliates, and their respective officers, directors, employees, contractors, and agents from and against any and all claims, demands, actions, damages, losses, liabilities, judgments, settlements, costs, and expenses, including reasonable attorneys&rsquo; fees, arising out of or in any way relating to:
          </p>
          <ul className="tu-ul" style={contentStyles.ul}>
            <Li>Your use of BeatFlow in violation of any provision of these Terms</Li>
            <Li>Your violation of any applicable law, regulation, or third-party right, including copyright or other intellectual property rights</Li>
            <Li>Any audio files or other content that you play, organize, or access using BeatFlow</Li>
            <Li>Any dispute between you and a third party arising from your use of BeatFlow</Li>
            <Li>Your intentional misconduct, gross negligence, or willful violation of these Terms</Li>
          </ul>
        </div>
      )

    case 'suspension-termination':
      return (
        <div className="tu-content" style={contentStyles.wrapper}>
          <p style={contentStyles.p}>
            The BeatFlow developer reserves the right, in its sole discretion, to <strong style={contentStyles.strong}>suspend, restrict, or terminate</strong> your access to or use of BeatFlow at any time, with or without prior notice, for any reason or no reason, including without limitation if you breach any term or condition of these Terms.
          </p>
          <p style={contentStyles.p}>
            Upon any suspension or termination:
          </p>
          <ul className="tu-ul" style={contentStyles.ul}>
            <Li>The license granted to you under these Terms shall immediately and automatically terminate</Li>
            <Li>You must immediately cease all use of BeatFlow and delete all copies of the application from your devices</Li>
            <Li>Any provisions of these Terms that by their nature are intended to survive termination — including but not limited to Intellectual Property Rights, Disclaimer of Warranties, Limitation of Liability, and Indemnification — shall survive and remain in full force and effect</Li>
          </ul>
        </div>
      )

    case 'updates-to-these-terms':
      return (
        <div className="tu-content" style={contentStyles.wrapper}>
          <p style={contentStyles.p}>
            The BeatFlow developer reserves the right to update, amend, modify, or revise these Terms at any time, in its sole discretion and without individual notice to users. When material changes are made, the &ldquo;Last updated&rdquo; date at the top of this page will be revised accordingly. Additional notice may be provided through the application or the BeatFlow website where appropriate.
          </p>
          <p style={contentStyles.p}>
            Your continued use of BeatFlow following the effective date of any changes constitutes your acceptance of and agreement to the updated Terms. If you do not agree with any modification, you must immediately stop using BeatFlow and uninstall the application. We encourage you to review these Terms periodically for any updates.
          </p>
        </div>
      )

    case 'governing-terms':
      return (
        <div className="tu-content" style={contentStyles.wrapper}>
          <p style={contentStyles.p}>
            These Terms shall be governed by and construed in accordance with the applicable laws, without regard to its conflict of law principles. Any disputes arising out of or relating to these Terms or your use of BeatFlow shall first be attempted to be resolved through good-faith negotiations between the parties.
          </p>
          <p style={contentStyles.p}>
            If a dispute cannot be resolved through negotiation, it shall be resolved through binding arbitration or in the competent courts. You agree that any cause of action arising out of or related to BeatFlow must commence within one year after the cause of action accrues; otherwise, such cause of action is permanently barred.
          </p>
          <p style={contentStyles.p}>
            If any provision of these Terms is held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, that provision shall be enforced to the maximum extent possible and the remaining provisions shall continue in full force and effect. The failure of the BeatFlow developer to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.
          </p>
        </div>
      )

    case 'frequently-asked-questions':
      return (
        <div className="tu-content" style={contentStyles.wrapper}>
          <p style={{ ...contentStyles.p, fontWeight: 600, color: '#fff' }}>Is BeatFlow a music streaming service?</p>
          <p style={contentStyles.p}>No. BeatFlow is an <strong style={contentStyles.strong}>offline-first local music player</strong>. It only plays audio files that are stored locally on your device. It does not stream, download, or cache music from any online source.</p>

          <p style={{ ...contentStyles.p, fontWeight: 600, color: '#fff' }}>Does BeatFlow provide or host copyrighted music?</p>
          <p style={contentStyles.p}>No. BeatFlow does not provide, host, distribute, bundle, or make available any music, audio content, or media files. It is solely a playback tool for files you already possess on your device.</p>

          <p style={{ ...contentStyles.p, fontWeight: 600, color: '#fff' }}>Am I allowed to play any audio file with BeatFlow?</p>
          <p style={contentStyles.p}>You are solely responsible for ensuring you have the <strong style={contentStyles.strong}>legal right</strong> to access and play any audio file you use with BeatFlow. The application does not verify, authenticate, or validate the ownership or legal status of any media files.</p>

          <p style={{ ...contentStyles.p, fontWeight: 600, color: '#fff' }}>Can I use BeatFlow for commercial purposes?</p>
          <p style={contentStyles.p}>BeatFlow is licensed for personal, non-commercial use only. Commercial use — including public performance, broadcasting, or revenue-generating activities — requires prior written consent from the BeatFlow developer.</p>

          <p style={{ ...contentStyles.p, fontWeight: 600, color: '#fff' }}>Does BeatFlow collect or store my personal data?</p>
          <p style={contentStyles.p}>No. BeatFlow does not collect, store, transmit, or share any personal information. The application operates entirely offline and does not require accounts, registration, or any form of data collection.</p>

          <p style={{ ...contentStyles.p, fontWeight: 600, color: '#fff' }}>What happens if I violate these Terms?</p>
          <p style={contentStyles.p}>Your license to use BeatFlow may be immediately terminated. You may also be held legally responsible for any damages, losses, or liabilities resulting from your violation of these Terms or applicable law.</p>

          <p style={{ ...contentStyles.p, fontWeight: 600, color: '#fff' }}>Can I modify or redistribute BeatFlow?</p>
          <p style={contentStyles.p}>No. You may not modify, reverse engineer, redistribute, or create derivative works based on BeatFlow. All intellectual property rights are reserved by the BeatFlow developer.</p>

          <p style={{ ...contentStyles.p, fontWeight: 600, color: '#fff' }}>Is BeatFlow really free to use?</p>
          <p style={contentStyles.p}>Please refer to the official application store listing or the BeatFlow website for current pricing and licensing information. Any changes to pricing will be communicated through those official channels.</p>
        </div>
      )

    case 'contact-information':
      return (
        <div className="tu-content" style={contentStyles.wrapper}>
          <p style={contentStyles.p}>
            If you have any questions, concerns, or feedback regarding these Terms of Use or any other aspect of BeatFlow, please do not hesitate to contact us:
          </p>
          <p style={contentStyles.p}>
            <strong style={contentStyles.strong}>Email:</strong> legal@beatflow.app
          </p>
          <p style={contentStyles.p}>
            <strong style={contentStyles.strong}>Website:</strong> https://beatflow.app
          </p>
          <p style={contentStyles.p}>
            We are committed to responding to your inquiries promptly and transparently. Whether you have a legal question, a licensing inquiry, or simply want to provide feedback, we welcome your communication.
          </p>
        </div>
      )

    case 'closing-statement':
      return (
        <div className="tu-content" style={contentStyles.wrapper}>
          <p style={contentStyles.p}>
            Thank you for choosing BeatFlow. We have designed and built this application with a steadfast commitment to <strong style={contentStyles.strong}>simplicity, privacy, and respect for intellectual property</strong>. Our goal has always been to create a beautiful, distraction-free music listening experience that puts you — and your music — first.
          </p>
          <p style={contentStyles.p}>
            By using BeatFlow as intended — as a tool for organizing and playing your locally stored audio files — you contribute to a fair, responsible, and respectful digital ecosystem. We trust our users to respect the rights of content creators and to comply with all applicable laws.
          </p>
          <p style={contentStyles.p}>
            We hope you enjoy using BeatFlow as much as we enjoyed building it. Happy listening.
          </p>
        </div>
      )

    default:
      return (
        <div className="tu-content" style={contentStyles.wrapper}>
          <p style={contentStyles.p}>Content coming soon.</p>
        </div>
      )
  }
}

export default function TermsOfUse() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    document.title = 'Terms of Use - BeatFlow'
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setScrollProgress(progress)
      setShowBackToTop(scrollTop > 300)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="tu-root" style={{ backgroundColor: '#09090B', minHeight: '100vh' }}>
      <style>{`
        /* ── Terms of Use Mobile Responsive ── */
        @media (max-width: 768px) {
          .tu-root .tu-back-wrap {
            left: 12px !important;
            top: 10px !important;
          }
          .tu-root .tu-back-link {
            padding: 8px 12px !important;
            font-size: 13px !important;
            min-height: 44px !important;
          }
          .tu-root .tu-back-link svg {
            width: 14px !important;
            height: 14px !important;
          }
          .tu-root .tu-container {
            padding-left: 12px !important;
            padding-right: 12px !important;
          }
          .tu-root .tu-sections {
            gap: 20px !important;
          }
          .tu-root .tu-hero {
            padding-top: 56px !important;
            margin-bottom: 40px !important;
          }
          .tu-root .tu-hero-badge {
            padding: 5px 14px !important;
          }
          .tu-root .tu-hero-badge span {
            font-size: 11px !important;
          }
          .tu-root .tu-hero p {
            font-size: 0.95rem !important;
            padding: 0 4px !important;
          }
          .tu-root .tu-hero-date {
            padding: 8px 16px !important;
            font-size: 12px !important;
          }
          .tu-root .tu-hero-date svg {
            width: 12px !important;
            height: 12px !important;
          }
          .tu-root .tu-card {
            padding: 24px 16px !important;
            border-radius: 16px !important;
          }
          .tu-root .tu-content {
            padding: 20px 14px !important;
            font-size: 14px !important;
          }
          .tu-root .tu-content p {
            font-size: 14px !important;
          }
          .tu-root .tu-content li {
            font-size: 14px !important;
            margin-bottom: 8px !important;
            padding-left: 16px !important;
          }
          .tu-root .tu-content li > span {
            width: 5px !important;
            height: 5px !important;
            top: 8px !important;
          }
          .tu-root .tu-ul {
            padding-left: 6px !important;
          }
          .tu-root .tu-icon-box {
            width: 32px !important;
            height: 32px !important;
            min-width: 32px !important;
            border-radius: 8px !important;
          }
          .tu-root .tu-icon-box svg {
            width: 14px !important;
            height: 14px !important;
          }
          .tu-root .tu-card h2 {
            font-size: 1.1rem !important;
          }
          .tu-root .tu-back-bottom {
            padding: 10px 20px !important;
            font-size: 12px !important;
            min-height: 44px !important;
          }
          .tu-root .tu-back-bottom svg {
            width: 12px !important;
            height: 12px !important;
          }
          .tu-root .tu-fab {
            right: 16px !important;
            bottom: 16px !important;
            padding: 10px 12px !important;
            min-height: 44px !important;
            min-width: 44px !important;
          }
          .tu-root .tu-fab svg {
            width: 12px !important;
            height: 12px !important;
          }
          .tu-root .scroll-progress {
            height: 3px !important;
          }
        }

        @media (max-width: 480px) {
          .tu-root .tu-container {
            padding-left: 8px !important;
            padding-right: 8px !important;
          }
          .tu-root .tu-card {
            padding: 20px 12px !important;
          }
          .tu-root .tu-content {
            padding: 16px 12px !important;
          }
          .tu-root .tu-sections {
            gap: 16px !important;
          }
          .tu-root .tu-hero p {
            font-size: 0.875rem !important;
          }
          .tu-root .tu-content p,
          .tu-root .tu-content li {
            font-size: 13.5px !important;
          }
          .tu-root .tu-ul {
            padding-left: 4px !important;
          }
        }

        @media (max-width: 360px) {
          .tu-root .tu-card {
            padding: 16px 10px !important;
          }
          .tu-root .tu-content {
            padding: 14px 10px !important;
          }
          .tu-root .tu-back-link {
            padding: 6px 10px !important;
            font-size: 12px !important;
          }
        }
      `}</style>

      {/* Minimal top header with Back button */}
      <header className="tu-back-wrap" style={{ position: 'fixed', top: 16, left: 24, zIndex: 1100 }}>
        <Link
          className="tu-back-link"
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '10px 16px',
            borderRadius: 12,
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.10)',
            fontSize: 14,
            fontWeight: 600,
            color: '#fff',
            textDecoration: 'none',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.10)'
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.20)'
            e.currentTarget.style.transform = 'translateX(-2px)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'
            e.currentTarget.style.transform = 'translateX(0)'
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
      </header>

      {/* Reading progress bar */}
      <div
        className="scroll-progress"
        style={{
          width: `${scrollProgress}%`,
          zIndex: 1100,
          height: 4,
          background: 'linear-gradient(90deg, #7C3AED, #22D3EE)',
        }}
      />

      <main style={{ paddingTop: 120, paddingBottom: 100, minHeight: '100vh' }}>
        <div
          className="tu-container"
          style={{
            maxWidth: 1300,
            margin: '0 auto',
            padding: '0 24px',
          }}
        >
          <div className="tu-sections" style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {/* Hero Section */}
            <header className="tu-hero reveal" style={{ textAlign: 'center', paddingTop: 20, paddingBottom: 20 }}>
              <div
                className="tu-hero-badge"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '6px 16px',
                  borderRadius: 100,
                  background: 'rgba(34,211,238,0.08)',
                  border: '1px solid rgba(34,211,238,0.25)',
                  marginBottom: 20,
                }}
              >
                <span style={{ fontSize: 12, fontWeight: 600, color: '#22D3EE', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                  Legal
                </span>
              </div>

              <h1
                className="heading-font"
                style={{
                  fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.03em',
                  marginBottom: 16,
                  lineHeight: 1.05,
                }}
              >
                Terms of <span className="text-gradient">Use</span>
              </h1>

              <p
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                  color: '#A1A1AA',
                  lineHeight: 1.7,
                  maxWidth: 600,
                  margin: '0 auto 28px',
                }}
              >
                Please read these terms carefully before using BeatFlow.
              </p>

              <div
                className="tu-hero-date"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '10px 20px',
                  borderRadius: 100,
                  background: 'rgba(124,58,237,0.12)',
                  border: '1px solid rgba(124,58,237,0.3)',
                  fontSize: 13,
                  fontWeight: 600,
                  color: '#A78BFA',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <span>Last updated: January 2026</span>
              </div>
            </header>

            {/* Terms Sections */}
            {sections.map((item, index) => (
              <section
                key={item.id}
                id={item.id}
                className="tu-card reveal glass"
                style={{
                  padding: '40px 48px',
                  borderRadius: 24,
                  border: '1px solid rgba(255,255,255,0.10)',
                  transitionDelay: `${Math.min(index * 15, 100)}ms`,
                }}
              >
                <div style={{ maxWidth: 800, margin: '0 auto' }}>
                  <SectionHeading label={item.label} />
                  {sectionContent(item.id)}
                </div>
              </section>
            ))}

            {/* Back to Top Button */}
            <div style={{ textAlign: 'center', marginTop: 16, marginBottom: 32 }}>
              <button
                className="tu-back-bottom"
                onClick={scrollToTop}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '12px 24px',
                  borderRadius: 100,
                  background: 'rgba(124,58,237,0.1)',
                  border: '1px solid rgba(124,58,237,0.3)',
                  fontSize: 13,
                  fontWeight: 600,
                  color: '#A78BFA',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(124,58,237,0.2)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(124,58,237,0.1)')}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 15l-6-6-6 6" />
                </svg>
                Back to top
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="tu-fab reveal floating"
          style={{
            position: 'fixed',
            bottom: 32,
            right: 32,
            zIndex: 1000,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '12px 16px',
            borderRadius: 100,
            background: 'linear-gradient(135deg, #7C3AED, #6D28D9)',
            border: 'none',
            fontSize: 13,
            fontWeight: 600,
            color: '#fff',
            cursor: 'pointer',
            boxShadow: '0 8px 30px rgba(124,58,237,0.4)',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(124,58,237,0.5)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 8px 30px rgba(124,58,237,0.4)'
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </button>
      )}

      <LegalFooter />
    </div>
  )
}
