# GoFlow — by zeoenix

> **Go once. Flow forever.**

GoFlow is a free, open source, 100% on-device voice-to-text app for macOS. It runs a Core ML neural speech model directly on your Mac using the Apple Neural Engine — transcribing your voice in under 100ms, fully offline, with zero data collected.

GoFlow, built with React + Express.

---

<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/d28f6c42-4287-47f5-979a-259f861cc692

## Run Locally

**Prerequisites:**  Node.js 18+


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Pages

| Route | Page |
|---|---|
| `/` | Home — zeoenix storefront |
| `/goflow` | GoFlow product landing page |
| `/support` | Support & troubleshooting |
| `/roadmap` | Community roadmap + voting |
| `/custom-work` | Custom engineering inquiries |
| `/for-developers` | Indie dev submission portal |
| `/docs/known-issues` | macOS bug tracker |

## Download Builds

GoFlow installers are hosted on GitHub Releases — two separate builds:

| Build | File | Target |
|---|---|---|
| Apple Silicon | `GoFlow-1.0.0-AppleSilicon.dmg` | M1, M2, M3, M4 and all variants |
| Intel | `GoFlow-1.0.0-Intel.dmg` | Intel 64-bit Macs |

Update release URLs in `src/lib/goflowDownload.ts` when new builds are uploaded.

## Updating the Logo

- **Browser favicon** → replace `public/logo.svg`
- **Navbar + Footer logo** → already reads from `public/logo.svg` directly via `<img src="/logo.svg">`

## Project Structure

```
src/
├── App.tsx                   # Root router + global modal
├── data/appsData.ts          # GoFlow app data + roadmap seed
├── lib/goflowDownload.ts     # Download URLs + trigger function
├── components/
│   ├── goflow/               # 10 product page section components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ...
└── pages/                    # 7 route-level pages
server/
├── routes/                   # API endpoints
├── db.ts                     # Data access layer
└── store.ts                  # Flat-file JSON persistence
```

## License

MIT — free and open source.

---

Made by **zeoenix**
