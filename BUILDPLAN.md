# zeoenix / GoFlow — Build Plan & Changelog

> **Project:** Fork of `keepware-website` → fully rebuilt as **zeoenix** platform for **GoFlow** (macOS)
> **Builder:** zeoenix (Tanuj Purohit)
> **Build Date:** 2026-09-28
> **Status:** ✅ Phase 1–9 Complete

---

## What We Built

A complete brand and product transformation from:
- **keepware** (Windows-only TypeMaster speech-to-text)

To:
- **zeoenix** (macOS-native GoFlow speech-to-text, open source, free)

---

## Brand Decisions

| Field | Old (keepware) | New (zeoenix) |
|---|---|---|
| Brand | keepware | **zeoenix** |
| App | TypeMaster | **GoFlow** |
| Tagline | "Pay once. Keep it forever." | **"Go once. Flow forever."** |
| Platform | Windows-only | **macOS (Apple Silicon + Intel)** |
| Installer | .exe / .msi | **.dmg (separate Apple Silicon + Intel builds)** |
| Engine | CUDA / DirectML / NVIDIA | **Core ML / Neural Engine / Metal** |
| Model size | 1.9 GB raw Whisper | **~380 MB Core ML 4-bit quantized** |
| RAM | 8 GB minimum | **8 GB works perfectly (Apple Silicon unified memory)** |
| Pricing | Free | **Free & Open Source** |
| Data | Not specified | **Zero collected — nothing stored, nothing sent** |
| Email (support) | support@keepware.app | **support@zeoenix.app** |
| Email (build) | build@keepware.app | **build@zeoenix.app** |

---

## Tech Stack (Unchanged)

- **Frontend:** React 19 + TypeScript
- **Router:** React Router v7
- **Styling:** Tailwind CSS v4 via `@tailwindcss/vite`
- **Animation:** Motion (Framer Motion v12)
- **Icons:** Lucide React
- **Backend:** Express.js + flat-file JSON DB
- **Build:** Vite v6 + esbuild

---

## Files Changed

### New Files Created
| File | Purpose |
|---|---|
| `src/lib/goflowDownload.ts` | Apple Silicon + Intel GitHub Release URLs + `downloadGoFlow()` |
| `src/components/ZeoenixLogo.tsx` | Brand logo component (placeholder — replace when final logo ready) |
| `src/components/goflow/Hero.tsx` | Full-screen hero with dual download buttons |
| `src/components/goflow/ProofSection.tsx` | Social proof + 3D tilt video |
| `src/components/goflow/TheProblem.tsx` | Problem framing (macOS cloud dictation) |
| `src/components/goflow/ComparisonTable.tsx` | GoFlow vs Cloud Dictation (6 rows) |
| `src/components/goflow/ProductDemo.tsx` | 3D tilt walkthrough video |
| `src/components/goflow/UsageGuide.tsx` | 6-step macOS setup guide |
| `src/components/goflow/WhyLocalFirst.tsx` | 3 feature cards (Core ML, Neural Engine, offline) |
| `src/components/goflow/FaqSection.tsx` | 6-item macOS FAQ accordion |
| `src/components/goflow/PricingBlock.tsx` | Dual download buttons + live counter |
| `src/components/goflow/FinalCta.tsx` | Dark CTA section wrapping PricingBlock |
| `src/pages/GoFlowPage.tsx` | Full GoFlow product landing page |
| `BUILDPLAN.md` | This file |

### Files Fully Rewritten
| File | Key Changes |
|---|---|
| `src/data/appsData.ts` | `GOFLOW_APP` with macOS features, Core ML guide, macOS issues, macOS roadmap |
| `src/App.tsx` | Route `/goflow`, `downloadGoFlow`, `GOFLOW_APP`, `GoFlowPage` |
| `src/components/Navbar.tsx` | zeoenix brand, ZeoenixLogo, GoFlow route |
| `src/components/Footer.tsx` | zeoenix copy, GoFlow links, correct emails |
| `src/components/Modals.tsx` | zeoenix/GoFlow copy throughout |
| `src/components/FaqSection.tsx` | Full macOS/GoFlow FAQ set |
| `src/pages/HomePage.tsx` | zeoenix hero, GoFlow card with Apple chip badges |
| `src/pages/KnownIssuesPage.tsx` | 4 macOS-specific issues (Gatekeeper, Accessibility, mic, punctuation) |
| `src/pages/SupportPage.tsx` | zeoenix email, macOS framing |
| `index.html` | zeoenix/GoFlow title, meta, OG tags |

### Files Partially Updated
| File | Key Changes |
|---|---|
| `src/components/AskForUpdatesSection.tsx` | Copy: keepware → zeoenix/GoFlow |
| `src/components/RequestProjectSection.tsx` | Copy + emails: keepware → zeoenix, Core ML engine references |
| `src/components/SubmitAppSection.tsx` | Copy: keepware/TypeMaster → zeoenix/GoFlow |
| `src/pages/CustomWorkPage.tsx` | Heading: zeoenix team branding |
| `src/pages/ForDevelopersPage.tsx` | Heading: zeoenix platform |
| `src/pages/RoadmapPage.tsx` | Subheading: GoFlow features |

### Files Deleted
| File | Reason |
|---|---|
| `src/lib/typemasterDownload.ts` | Replaced by `goflowDownload.ts` |
| `src/components/KeepwareLogo.tsx` | Replaced by `ZeoenixLogo.tsx` |
| `src/pages/TypeMasterPage.tsx` | Replaced by `GoFlowPage.tsx` |
| `src/components/typemaster/` (entire folder) | Replaced by `src/components/goflow/` |

### Files Untouched (no changes needed)
- `src/types.ts` — Platform type already includes macOS
- `src/index.css` — Design system tokens unchanged
- `src/main.tsx` — Entry point unchanged
- `src/components/Surface.tsx` — Generic utility
- `src/components/Chip.tsx` — Generic utility
- `server/` — All backend routes, DB, rate limiting unchanged
- `server.ts` — Unchanged
- `vite.config.ts` — Unchanged

---

## Architecture Notes

### Download Strategy
Two separate `.dmg` files hosted on GitHub Releases:
```
GoFlow-1.0.0-AppleSilicon.dmg  (~15 MB)  → M1, M2, M3, M4 all variants
GoFlow-1.0.0-Intel.dmg         (~18 MB)  → Intel 64-bit Macs
```
- Apple Silicon is the **primary** download (shown first everywhere)
- Intel is always visible as a secondary option
- Both trigger `/api/downloads` counter

### RAM Strategy (8 GB)
- Apple Silicon 8 GB: **works perfectly** — Core ML model uses ~300-380 MB unified memory
- Intel 8 GB: auto-suggests **Compact Model Mode** (~220 MB) on first launch
- No compromise on accuracy — same neural model, optimized memory layout

### Logo
- `ZeoenixLogo.tsx` uses the same SVG shape as the original keepware logo
- **Replace when final zeoenix logo is ready** — just update `ZeoenixLogo.tsx`

---

## Routes

| URL | Page |
|---|---|
| `/` | Home (zeoenix storefront) |
| `/goflow` | GoFlow product landing page |
| `/support` | Support & FAQ |
| `/roadmap` | Community roadmap + voting |
| `/custom-work` | Custom engineering inquiries |
| `/for-developers` | Indie dev submission portal |
| `/docs/known-issues` | macOS bug tracker |

---

## Next Steps (When Ready)

- [ ] Replace `ZeoenixLogo.tsx` SVG with final zeoenix logo
- [ ] Replace `/public/typemaster.webp` and `/public/front-page.webp` with macOS GoFlow screenshots
- [ ] Replace `/public/video1.1.mp4` and `/public/video2.mp4` with macOS GoFlow demo recordings
- [ ] Update GitHub Release URLs in `src/lib/goflowDownload.ts` when actual builds are uploaded
- [ ] Set up `zeoenix/goflow` GitHub repository for open source release
- [ ] Configure Cloudflare Pages deployment
- [ ] Add real Terms of Service and Privacy Policy pages (currently both link to `/support`)
