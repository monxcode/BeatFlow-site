# BeatFlow Site

Official landing page for **BeatFlow** — a premium offline music player for Android, built with privacy and speed in mind.

## Tech Stack

- **React 19** + TypeScript
- **Vite 8** (build tool)
- **React Router v7** (client-side routing)
- **Tailwind CSS v4** (utility-first CSS)
- **React 19 Strict Mode**

## Pages

| Route       | Page            |
|-------------|-----------------|
| `/`         | Home (landing)  |
| `/privacy`  | Privacy Policy  |
| `/terms`    | Terms of Use    |

The homepage is a single-page layout with sections: Hero, Features, SmartScan, Formats, Screenshots, WhyBeatFlow, About, Developer, Download, FAQ, and Footer.

## Development

```bash
npm run dev      # Start dev server at https://localhost:8443
npm run build    # Production build to dist/
npm run preview  # Preview production build
npm run format   # Format code with oxfmt
```

## Project Structure

```
BeatFlow-site/
├── src/
│   ├── components/    # Reusable sections (Hero, Features, FAQ, etc.)
│   ├── pages/         # Route pages (PrivacyPolicy, TermsOfUse)
│   ├── assets/        # Images (screenshots, developer photo)
│   ├── imports/       # Imported assets (logo)
│   ├── App.tsx        # Root component with routing
│   ├── main.tsx       # Entry point
│   └── index.css      # Global styles + Tailwind
├── public/
│   ├── BeatFlow.apk   # Downloadable APK
│   └── logo.png       # Favicon
├── index.html         # HTML shell
├── vite.config.ts     # Vite config + Figma Make plugins
├── tsconfig.json      # TypeScript config
└── package.json       # Dependencies & scripts
```

## Features

- **100% offline** — no internet required
- **Zero tracking** — all data stays on-device
- **Smart scan engine** — filters ringtones, duplicates, hidden files
- **9+ audio formats** — MP3, FLAC, AAC, M4A, OGG, WAV, OPUS, AMR, 3GP
- **Background playback**, sleep timer, playlists, queue, mini player, search, favorites, folder browser, notification & Bluetooth controls, theme customization

## License

Open source. Built by [Mohan Singh Parmar](https://github.com/monxcode).
