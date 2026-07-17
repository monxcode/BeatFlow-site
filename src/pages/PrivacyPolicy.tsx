import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LegalFooter from '../components/LegalFooter'

const sections = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'information-we-collect', label: 'Information We Collect' },
  { id: 'information-we-do-not-collect', label: 'Information We Do Not Collect' },
  { id: 'how-beatflow-uses-information', label: 'How BeatFlow Uses Information' },
  { id: 'offline-music-library', label: 'Offline Music Library' },
  { id: 'permissions', label: 'Permissions' },
  { id: 'no-tracking', label: 'No Tracking' },
  { id: 'no-ads', label: 'No Ads' },
  { id: 'no-analytics', label: 'No Analytics' },
  { id: 'no-third-party-advertising', label: 'No Third-Party Advertising' },
  { id: 'data-security', label: 'Data Security' },
  { id: 'user-control', label: 'User Control' },
  { id: 'childrens-privacy', label: "Children's Privacy" },
  { id: 'changes-to-this-privacy-policy', label: 'Changes to This Privacy Policy' },
  { id: 'frequently-asked-questions', label: 'Frequently Asked Questions' },
  { id: 'contact-information', label: 'Contact Information' },
  { id: 'closing-statement', label: 'Closing Statement' },
]

const shieldIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

function SectionHeading({ label }: { label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
      <div className="pp-icon-box" style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {shieldIcon}
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
    case 'introduction':
      return (
        <div className="pp-content" style={contentStyles.wrapper}>
          <p style={contentStyles.p}>
            At BeatFlow, your privacy is at the core of everything we build. This Privacy Policy explains how we handle information when you use the BeatFlow music player application. BeatFlow is designed as an <strong style={contentStyles.strong}>offline-first local music player</strong> — it scans and indexes audio files stored directly on your device and plays them back entirely offline.
          </p>
          <p style={contentStyles.p}>
            We believe in transparency, simplicity, and putting you in full control of your data. Unlike streaming services that require accounts, track your activity, and collect extensive personal information, BeatFlow operates entirely on your device. There are no accounts, no cloud uploads, and no data collection.
          </p>
          <p style={contentStyles.p}>
            Please read this policy carefully to understand our practices regarding the limited information BeatFlow accesses to provide its functionality.
          </p>
        </div>
      )

    case 'information-we-collect':
      return (
        <div className="pp-content" style={contentStyles.wrapper}>
          <p style={contentStyles.p}>
            BeatFlow accesses the following information locally on your device <strong style={contentStyles.strong}>solely</strong> to provide music playback and library organization functionality:
          </p>
          <ul className="pp-ul" style={contentStyles.ul}>
            <Li>Metadata from audio files — song titles, artist names, album names, track numbers, genre, duration, and cover art embedded in your music files</Li>
            <Li>File paths and filenames of audio files stored on your device</Li>
            <Li>Playlists you create within the app, stored locally on your device</Li>
            <Li>App preferences and settings — theme choice, audio settings (equalizer, volume), sorting preferences, and layout options</Li>
            <Li>Basic device information necessary for app operation, such as OS version and device model, used solely for compatibility</Li>
            <Li>Now Playing history and recently played tracks, stored locally for your convenience</Li>
          </ul>
          <p style={contentStyles.p}>
            <strong style={contentStyles.strong}>All of this information remains on your device.</strong> We do not transmit, upload, or store any of this data on any remote server. No music files, metadata, playlists, or settings ever leave your device.
          </p>
        </div>
      )

    case 'information-we-do-not-collect':
      return (
        <div className="pp-content" style={contentStyles.wrapper}>
          <p style={contentStyles.p}>We want to be explicit about what BeatFlow does <strong style={contentStyles.strong}>not</strong> collect:</p>
          <ul className="pp-ul" style={contentStyles.ul}>
            <Li>Personal identifiers — we do not collect your name, email address, phone number, physical address, or date of birth</Li>
            <Li>Account information — BeatFlow does not create user accounts and does not require any form of login or registration</Li>
            <Li>Payment information — we do not collect credit card details, billing addresses, or any financial data</Li>
            <Li>Location data — we do not collect GPS coordinates, IP-based location, or any geolocation information</Li>
            <Li>Contacts or social network data — we do not access your contacts, friends list, or social media accounts</Li>
            <Li>Browsing history or online activity — we do not track which websites you visit or apps you use</Li>
            <Li>Biometric or health data — we do not collect fingerprints, facial recognition data, or health information</Li>
            <Li>Device identifiers for tracking — we do not collect IMEI, advertising ID, or any persistent device identifiers for tracking purposes</Li>
            <Li>Network usage data — since BeatFlow works offline, we do not monitor or log network activity</Li>
          </ul>
          <p style={contentStyles.p}>
            You can download and use BeatFlow immediately without providing any personal information. There is no sign-up screen, no account creation flow, and no data-sharing consent request — because none of that is necessary for an offline music player.
          </p>
        </div>
      )

    case 'how-beatflow-uses-information':
      return (
        <div className="pp-content" style={contentStyles.wrapper}>
          <p style={contentStyles.p}>
            The limited information BeatFlow accesses is used exclusively for the following purposes:
          </p>
          <ul className="pp-ul" style={contentStyles.ul}>
            <Li>Scanning and indexing your local music library to display your audio files within the app</Li>
            <Li>Organizing your music library by artist, album, genre, year, and other metadata for easy browsing</Li>
            <Li>Enabling playlist creation, editing, shuffle, repeat, queue management, and other playback features</Li>
            <Li>Remembering your app preferences and settings between sessions — such as theme, sorting, and audio configurations</Li>
            <Li>Providing search functionality across your local music library by song, artist, album, or genre</Li>
            <Li>Displaying Now Playing information, including track progress, album art, and playback controls</Li>
            <Li>Generating automatic playlists such as &ldquo;Recently Played&rdquo; and &ldquo;Most Played&rdquo; based on your local listening history</Li>
          </ul>
          <p style={contentStyles.p}>
            <strong style={contentStyles.strong}>BeatFlow does not use your information for any purpose beyond providing core music playback functionality.</strong> We do not analyze your listening habits for profiling, we do not monetize your data, and we do not share any information with third parties.
          </p>
        </div>
      )

    case 'offline-music-library':
      return (
        <div className="pp-content" style={contentStyles.wrapper}>
          <p style={contentStyles.p}>
            BeatFlow is built around an <strong style={contentStyles.strong}>offline-first architecture</strong>. Your music library exists entirely on your device, and the app is designed to function without an internet connection. Here is how it works:
          </p>
          <ul className="pp-ul" style={contentStyles.ul}>
            <Li>All audio files remain stored on your local device — BeatFlow reads metadata but never moves, modifies, or duplicates your music files</Li>
            <Li>Playlists, favorites, listening history, and app preferences are stored locally using platform-standard secure storage</Li>
            <Li>Metadata indexing happens entirely on-device — no data is sent to external servers or cloud services</Li>
            <Li>No music files are uploaded to any server under any circumstances</Li>
            <Li>BeatFlow does not stream music from any online source — all playback is local</Li>
            <Li>The app functions fully without an internet connection — no features require connectivity</Li>
          </ul>
          <p style={contentStyles.p}>
            You maintain <strong style={contentStyles.strong}>complete ownership and control</strong> over your music library at all times. Uninstalling BeatFlow will delete all locally stored app data — playlists, preferences, and settings — while your original audio files remain completely unaffected on your device.
          </p>
        </div>
      )

    case 'permissions':
      return (
        <div className="pp-content" style={contentStyles.wrapper}>
          <p style={contentStyles.p}>
            BeatFlow requests certain device permissions to fulfill its purpose as a local music player. All permissions are used strictly for app functionality and can be managed or revoked at any time through your device settings.
          </p>

          <p style={{ ...contentStyles.p, marginTop: 20 }}>
            <strong style={contentStyles.strong}>Media & Audio Library</strong>
          </p>
          <p style={contentStyles.p}>
            BeatFlow requires access to your device&rsquo;s media and audio library to scan for supported audio files (MP3, FLAC, AAC, WAV, OGG, and others depending on platform support). This permission allows the app to read metadata from your music files so it can organize and display your library. BeatFlow <strong style={contentStyles.strong}>never</strong> modifies, deletes, or transmits your audio files.
          </p>

          <p style={{ ...contentStyles.p, marginTop: 20 }}>
            <strong style={contentStyles.strong}>Notifications</strong>
          </p>
          <p style={contentStyles.p}>
            BeatFlow may request notification permissions to display Now Playing information and provide playback controls from the notification shade or lock screen. These notifications are optional and can be customized or disabled entirely in your device settings without affecting core playback functionality.
          </p>

          <p style={{ ...contentStyles.p, marginTop: 20 }}>
            <strong style={contentStyles.strong}>Storage</strong>
          </p>
          <p style={contentStyles.p}>
            On certain platforms, BeatFlow may request storage permissions to access audio files stored on internal or external storage, including SD cards. This permission is used <strong style={contentStyles.strong}>solely</strong> for reading audio file metadata and does not grant BeatFlow access to other file types such as documents, photos, or personal data.
          </p>
        </div>
      )

    case 'no-tracking':
      return (
        <div className="pp-content" style={contentStyles.wrapper}>
          <p style={contentStyles.p}>
            BeatFlow <strong style={contentStyles.strong}>does not track</strong> your behavior within the app or across other applications. We do not use any of the following:
          </p>
          <ul className="pp-ul" style={contentStyles.ul}>
            <Li>Tracking cookies or similar storage mechanisms</Li>
            <Li>Device fingerprinting techniques</Li>
            <Li>Persistent device tracking identifiers (advertising IDs, IDFA, etc.)</Li>
            <Li>Cross-app tracking or attribution frameworks</Li>
            <Li>Web beacons, pixels, or similar tracking technologies</Li>
          </ul>
          <p style={contentStyles.p}>
            Your listening habits, music preferences, and usage patterns remain private to you. There is no tracking dashboard, no user profiling, and no behavioral analysis associated with BeatFlow.
          </p>
        </div>
      )

    case 'no-ads':
      return (
        <div className="pp-content" style={contentStyles.wrapper}>
          <p style={contentStyles.p}>
            BeatFlow is <strong style={contentStyles.strong}>completely ad-free</strong>. We do not display any form of advertising within the application, including:
          </p>
          <ul className="pp-ul" style={contentStyles.ul}>
            <Li>Banner ads or display advertisements</Li>
            <Li>Interstitial or full-screen ads</Li>
            <Li>Video or audio advertisements</Li>
            <Li>Sponsored content or promoted listings</Li>
            <Li>Promotional notifications or offers</Li>
            <Li>Affiliate links or referral programs</Li>
          </ul>
          <p style={contentStyles.p}>
            Your music listening experience is never interrupted, influenced, or monetized through advertising. We believe that an ad-free environment is essential for an enjoyable music player.
          </p>
        </div>
      )

    case 'no-analytics':
      return (
        <div className="pp-content" style={contentStyles.wrapper}>
          <p style={contentStyles.p}>
            BeatFlow <strong style={contentStyles.strong}>does not integrate any analytics services</strong>. We do not use:
          </p>
          <ul className="pp-ul" style={contentStyles.ul}>
            <Li>Google Analytics or Firebase Analytics</Li>
            <Li>Mixpanel, Amplitude, or Segment</Li>
            <Li>Crash reporting SDKs (Crashlytics, Sentry, etc.)</Li>
            <Li>Heatmap or session recording tools</Li>
            <Li>Any other third-party analytics or telemetry SDKs</Li>
          </ul>
          <p style={contentStyles.p}>
            We do not collect usage statistics, session duration data, feature interaction metrics, or crash reports. If you choose to send us feedback or a bug report via email, any information you provide is entirely voluntary and used solely to address your specific inquiry. We have no automated data collection mechanisms of any kind.
          </p>
        </div>
      )

    case 'no-third-party-advertising':
      return (
        <div className="pp-content" style={contentStyles.wrapper}>
          <p style={contentStyles.p}>
            BeatFlow <strong style={contentStyles.strong}>does not integrate any third-party advertising SDKs or frameworks</strong>. We do not partner with advertising networks, data brokers, marketing platforms, or any other entities that engage in data collection for advertising purposes.
          </p>
          <p style={contentStyles.p}>
            Since BeatFlow does not collect or share user data, there is no behavioral profiling, no ad targeting, no audience segmentation, and no retargeting associated with using the app. Your privacy is not a commodity — it is a fundamental design principle of BeatFlow.
          </p>
        </div>
      )

    case 'data-security':
      return (
        <div className="pp-content" style={contentStyles.wrapper}>
          <p style={contentStyles.p}>
            Although BeatFlow does not collect or store user data on remote servers — eliminating the most common data security risks — we implement security best practices for all locally stored information:
          </p>
          <ul className="pp-ul" style={contentStyles.ul}>
            <Li>All locally stored data — playlists, preferences, and settings — is stored using platform-standard secure storage APIs with proper encryption where available</Li>
            <Li>BeatFlow does not transmit any data over networks, eliminating risks associated with data interception during transmission</Li>
            <Li>We follow platform-specific security guidelines for permission handling, data access, and sandboxing</Li>
            <Li>Regular security reviews and code audits are conducted to identify and address potential vulnerabilities</Li>
            <Li>Minimal data access principle — BeatFlow only accesses the minimum data necessary for music playback functionality</Li>
          </ul>
          <p style={contentStyles.p}>
            While no method of data storage is 100% secure, BeatFlow&rsquo;s offline-first architecture inherently minimizes data exposure risks. Your music library is protected by the same security measures that safeguard all data on your device.
          </p>
        </div>
      )

    case 'user-control':
      return (
        <div className="pp-content" style={contentStyles.wrapper}>
          <p style={contentStyles.p}>
            You maintain <strong style={contentStyles.strong}>complete control</strong> over your data and your BeatFlow experience:
          </p>
          <ul className="pp-ul" style={contentStyles.ul}>
            <Li>Create, edit, rename, or delete playlists at any time — no limits or restrictions</Li>
            <Li>Modify app preferences and settings — theme, audio configuration, sorting, and layout options</Li>
            <Li>Clear app data or uninstall BeatFlow to remove all locally stored app data, including playlists and preferences</Li>
            <Li>Your original audio files remain untouched and unaffected regardless of any action taken within BeatFlow</Li>
            <Li>Grant or revoke any permission at any time via your device settings</Li>
            <Li>Manage which folders and directories BeatFlow scans for audio files — exclude folders you do not want indexed</Li>
            <Li>Export or back up your playlists using standard file formats (where supported)</Li>
          </ul>
          <p style={contentStyles.p}>
            Because BeatFlow does not hold any of your data remotely, there is no account deletion process, no data export request procedure, and no third-party data erasure to coordinate. All your data is already in your possession, on your device, under your control.
          </p>
        </div>
      )

    case 'childrens-privacy':
      return (
        <div className="pp-content" style={contentStyles.wrapper}>
          <p style={contentStyles.p}>
            BeatFlow is not directed at children under the age of 13, and we do not knowingly collect any personal information from children. Because BeatFlow does not collect any personal information from any user regardless of age — no accounts, no registration, no data uploads — children are not at risk of having their data collected, stored, or processed by our application.
          </p>
          <p style={contentStyles.p}>
            If you are a parent or guardian and have concerns about your child&rsquo;s use of BeatFlow, we encourage you to supervise their app usage and contact us with any questions. We take children&rsquo;s privacy seriously and are committed to complying with all applicable laws, including the Children&rsquo;s Online Privacy Protection Act (COPPA).
          </p>
        </div>
      )

    case 'changes-to-this-privacy-policy':
      return (
        <div className="pp-content" style={contentStyles.wrapper}>
          <p style={contentStyles.p}>
            We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or improvements to our application. When we make material changes, we will update the &ldquo;Last updated&rdquo; date at the top of this page and may provide additional notice through the application or our website.
          </p>
          <p style={contentStyles.p}>
            We encourage you to review this Privacy Policy periodically. Your continued use of BeatFlow after any changes to this policy constitutes your acceptance of the updated terms. If you do not agree with any changes, you may stop using the application at any time.
          </p>
        </div>
      )

    case 'frequently-asked-questions':
      return (
        <div className="pp-content" style={contentStyles.wrapper}>
          <p style={{ ...contentStyles.p, fontWeight: 600, color: '#fff' }}>Does BeatFlow need an internet connection?</p>
          <p style={contentStyles.p}>No. BeatFlow is designed to work fully offline. An internet connection is not required for any functionality, including music playback, library scanning, or playlist management.</p>

          <p style={{ ...contentStyles.p, fontWeight: 600, color: '#fff' }}>Does BeatFlow upload my music to the cloud?</p>
          <p style={contentStyles.p}>No. BeatFlow never uploads your music files, metadata, playlists, or any other data to any server. Everything stays on your device.</p>

          <p style={{ ...contentStyles.p, fontWeight: 600, color: '#fff' }}>Does BeatFlow require an account or registration?</p>
          <p style={contentStyles.p}>No. BeatFlow does not require any account creation, login, email, or registration. You can download and use the app immediately with no personal information required.</p>

          <p style={{ ...contentStyles.p, fontWeight: 600, color: '#fff' }}>Can I use BeatFlow on multiple devices?</p>
          <p style={contentStyles.p}>Yes, but each installation is independent. Music libraries, playlists, and settings are stored locally on each device and are not synced across devices.</p>

          <p style={{ ...contentStyles.p, fontWeight: 600, color: '#fff' }}>What audio formats does BeatFlow support?</p>
          <p style={contentStyles.p}>BeatFlow supports common audio formats including MP3, FLAC, AAC, WAV, OGG, and others depending on your device platform. Format support is determined by the underlying operating system&rsquo;s media framework.</p>

          <p style={{ ...contentStyles.p, fontWeight: 600, color: '#fff' }}>Can I revoke permissions after granting them?</p>
          <p style={contentStyles.p}>Yes. You can manage, modify, or revoke any permission at any time through your device&rsquo;s application settings. BeatFlow will continue to function with the permissions you grant.</p>

          <p style={{ ...contentStyles.p, fontWeight: 600, color: '#fff' }}>Does BeatFlow share my data with third parties?</p>
          <p style={contentStyles.p}>No. BeatFlow does not collect, share, sell, or transfer any user data to any third party under any circumstances.</p>

          <p style={{ ...contentStyles.p, fontWeight: 600, color: '#fff' }}>What happens to my playlists if I uninstall BeatFlow?</p>
          <p style={contentStyles.p}>Playlists, preferences, and all app data are deleted when you uninstall the app. Your original audio files remain on your device and are not affected.</p>

          <p style={{ ...contentStyles.p, fontWeight: 600, color: '#fff' }}>Is BeatFlow really free of ads, tracking, and analytics?</p>
          <p style={contentStyles.p}>Yes. BeatFlow contains no advertising SDKs, no analytics services, no tracking mechanisms, and no third-party data collection of any kind. This is a fundamental design principle, not a feature that can be changed.</p>
        </div>
      )

    case 'contact-information':
      return (
        <div className="pp-content" style={contentStyles.wrapper}>
          <p style={contentStyles.p}>
            If you have any questions, concerns, or feedback regarding this Privacy Policy or BeatFlow&rsquo;s privacy practices, please do not hesitate to contact us:
          </p>
          <p style={contentStyles.p}>
            <strong style={contentStyles.strong}>Email:</strong> privacy@beatflow.app
          </p>
          <p style={contentStyles.p}>
            <strong style={contentStyles.strong}>Website:</strong> https://beatflow.app
          </p>
          <p style={contentStyles.p}>
            We are committed to responding to your inquiry promptly and transparently. Whether you have a question about how BeatFlow works, want to report a concern, or simply want to learn more about our privacy practices, we are here to help.
          </p>
        </div>
      )

    case 'closing-statement':
      return (
        <div className="pp-content" style={contentStyles.wrapper}>
          <p style={contentStyles.p}>
            At BeatFlow, we believe that <strong style={contentStyles.strong}>privacy is a fundamental right</strong>. Our commitment is simple: your music, your device, your data. We have designed BeatFlow from the ground up to respect your privacy by keeping everything local and never collecting, tracking, or sharing your information.
          </p>
          <p style={contentStyles.p}>
            We do not have access to your music. We do not know what you listen to, when you listen, or how often. We do not serve you ads, profile your behavior, or monetize your attention. BeatFlow simply plays the music you already own, on your device, under your control.
          </p>
          <p style={contentStyles.p}>
            BeatFlow is intended for the lawful playback of audio files that you own or have obtained permission to access. We trust our users to respect copyright and intellectual property laws.
          </p>
          <p style={contentStyles.p}>
            Thank you for trusting BeatFlow as your music player. Enjoy your music — knowing that your privacy is protected, your data stays yours, and your listening experience is truly private.
          </p>
        </div>
      )

    default:
      return (
        <div className="pp-content" style={contentStyles.wrapper}>
          <p style={contentStyles.p}>Content coming soon.</p>
        </div>
      )
  }
}

export default function PrivacyPolicy() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    document.title = 'Privacy Policy - BeatFlow'
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
    <div className="pp-root" style={{ backgroundColor: '#09090B', minHeight: '100vh' }}>
      <style>{`
        /* ── Privacy Policy Mobile Responsive ── */
        @media (max-width: 768px) {
          .pp-root .pp-back-wrap {
            left: 12px !important;
            top: 10px !important;
          }
          .pp-root .pp-back-link {
            padding: 8px 12px !important;
            font-size: 13px !important;
            min-height: 44px !important;
          }
          .pp-root .pp-back-link svg {
            width: 14px !important;
            height: 14px !important;
          }
          .pp-root .pp-container {
            padding-left: 12px !important;
            padding-right: 12px !important;
          }
          .pp-root .pp-sections {
            gap: 20px !important;
          }
          .pp-root .pp-hero {
            padding-top: 56px !important;
            padding-bottom: 10px !important;
          }
          .pp-root .pp-hero-badge {
            padding: 5px 14px !important;
          }
          .pp-root .pp-hero-badge span {
            font-size: 11px !important;
          }
          .pp-root .pp-hero p {
            font-size: 0.95rem !important;
            padding: 0 4px !important;
          }
          .pp-root .pp-hero-date {
            padding: 8px 16px !important;
            font-size: 12px !important;
          }
          .pp-root .pp-hero-date svg {
            width: 12px !important;
            height: 12px !important;
          }
          .pp-root .pp-card {
            padding: 24px 16px !important;
            border-radius: 16px !important;
          }
          .pp-root .pp-content {
            padding: 20px 14px !important;
            font-size: 14px !important;
          }
          .pp-root .pp-content p {
            font-size: 14px !important;
          }
          .pp-root .pp-content li {
            font-size: 14px !important;
            margin-bottom: 8px !important;
            padding-left: 16px !important;
          }
          .pp-root .pp-content li > span {
            width: 5px !important;
            height: 5px !important;
            top: 8px !important;
          }
          .pp-root .pp-ul {
            padding-left: 6px !important;
          }
          .pp-root .pp-icon-box {
            width: 32px !important;
            height: 32px !important;
            min-width: 32px !important;
            border-radius: 8px !important;
          }
          .pp-root .pp-icon-box svg {
            width: 14px !important;
            height: 14px !important;
          }
          .pp-root .pp-card h2 {
            font-size: 1.1rem !important;
          }
          .pp-root .pp-back-bottom {
            padding: 10px 20px !important;
            font-size: 12px !important;
            min-height: 44px !important;
          }
          .pp-root .pp-back-bottom svg {
            width: 12px !important;
            height: 12px !important;
          }
          .pp-root .pp-fab {
            right: 16px !important;
            bottom: 16px !important;
            padding: 10px 12px !important;
            min-height: 44px !important;
            min-width: 44px !important;
          }
          .pp-root .pp-fab svg {
            width: 12px !important;
            height: 12px !important;
          }
          .pp-root .scroll-progress {
            height: 3px !important;
          }
        }

        @media (max-width: 480px) {
          .pp-root .pp-card {
            padding: 20px 12px !important;
          }
          .pp-root .pp-content {
            padding: 16px 12px !important;
          }
          .pp-root .pp-container {
            padding-left: 8px !important;
            padding-right: 8px !important;
          }
          .pp-root .pp-sections {
            gap: 16px !important;
          }
          .pp-root .pp-hero p {
            font-size: 0.875rem !important;
          }
          .pp-root .pp-content p,
          .pp-root .pp-content li {
            font-size: 13.5px !important;
          }
          .pp-root .pp-ul {
            padding-left: 4px !important;
          }
        }

        @media (max-width: 360px) {
          .pp-root .pp-card {
            padding: 16px 10px !important;
          }
          .pp-root .pp-content {
            padding: 14px 10px !important;
          }
          .pp-root .pp-back-link {
            padding: 6px 10px !important;
            font-size: 12px !important;
          }
        }
      `}</style>

      {/* Minimal top header with Back button */}
      <header className="pp-back-wrap" style={{ position: 'fixed', top: 16, left: 24, zIndex: 1100 }}>
        <Link
          className="pp-back-link"
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

      {/* Page-specific reading progress bar */}
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
          className="pp-container"
          style={{
            maxWidth: 1300,
            margin: '0 auto',
            padding: '0 24px',
          }}
        >
          <div className="pp-sections" style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {/* Hero Section */}
            <header className="pp-hero reveal" style={{ textAlign: 'center', paddingTop: 20, paddingBottom: 20 }}>
              <div
                className="pp-hero-badge"
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
                Privacy <span className="text-gradient">Policy</span>
              </h1>

              <p
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                  color: '#A1A1AA',
                  lineHeight: 1.7,
                  marginBottom: 28,
                  maxWidth: 600,
                  margin: '0 auto 28px',
                }}
              >
                Your privacy matters. This policy explains what data BeatFlow collects, how we use it, and your rights.
              </p>

              <div
                className="pp-hero-date"
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

            {/* Policy Sections */}
            {sections.map((item, index) => (
              <section
                key={item.id}
                id={item.id}
                className="pp-card reveal glass"
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
                className="pp-back-bottom"
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
          className="pp-fab reveal floating"
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
