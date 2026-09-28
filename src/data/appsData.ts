import { AppItem, ProblemItem, UpdateRequestItem } from '../types';

export const GOFLOW_APP: AppItem = {
  id: 'goflow',
  name: 'GoFlow',
  tagline: '100% Local, On-Device AI Speech-to-Text for Every Mac App',
  description: 'GoFlow brings instant, 100% on-device voice dictation to every app on your Mac. Press a hotkey, speak naturally, and watch your words flow in real time — no cloud, no subscription, no data collected. Free, open source, and yours forever.',
  longDescription: 'Built for Mac users who refuse to compromise on privacy or performance. GoFlow runs a compact neural speech model directly on your Apple Silicon chip using the Neural Engine and Core ML — transcribing your voice in under 100ms, fully offline. Unlike cloud-based dictation tools, GoFlow never sends a single byte of your audio anywhere. No accounts, no telemetry, no tracking. Everything stays on your machine, exactly as it should. Open source so you can inspect every line, free so there\'s no barrier to entry — and lean enough to run beautifully on any Mac with 8 GB of unified memory.',
  priceUsd: 0,
  platforms: ['macOS'],
  version: 'v1.0.0',
  rating: 4.9,
  reviewsCount: 12,
  developer: 'zeoenix',
  accentColor: 'var(--text)',
  badge: 'Open Source',
  size: '~15 MB (Apple Silicon) · ~18 MB (Intel) · ~380 MB model',
  releasedYear: 2026,
  updatesIncluded: 'Lifetime core binary updates + continuous Core ML model improvements included',
  features: [
    '100% On-Device Neural Processing: Zero audio leaves your Mac. Ever.',
    'Universal Global Hotkey: Press ⌥Space to dictate into any app — Notion, Slack, VS Code, Notes, Terminal, anything.',
    'Apple Silicon Native: Core ML + Neural Engine. Sub-100ms latency on M1 through M4+.',
    'Intel Mac Support: Optimized CPU inference via AVX2, with Compact Model Mode for smooth performance.',
    '8 GB Optimized: Engineered to run perfectly on 8 GB Apple Silicon. Compact Model Mode available for 8 GB Intel Macs.',
    'Smart Auto-Punctuation: Strips "um/ah", auto-capitalises, formats naturally as you speak.',
    '99+ Languages & Accents: Local multi-dialect switching with no settings change needed.',
    'Custom Vocabulary: Add camelCase variables, project names, jargon — phonetically boosted instantly.',
    'Fully Offline: Works in airplane mode, air-gapped networks, and everywhere in between.',
    'Open Source: Every line is public. Trust nothing you cannot verify.',
    'Zero Data Collection: No logs, no analytics, no telemetry. Nothing stored. Nothing sent.'
  ],
  usageGuide: [
    {
      id: 'install',
      step: '01',
      title: 'Download & Install — free',
      description: 'Open the .dmg and drag GoFlow to your Applications folder. If macOS shows a Gatekeeper warning ("GoFlow can\'t be opened"), go to System Settings → Privacy & Security → Open Anyway. No account, email, or licence key required.',
      hint: 'Deploying to a fleet of Macs? A .pkg build for scripted installs is on the same GitHub Release page.'
    },
    {
      id: 'model',
      step: '02',
      title: 'Download the local Core ML model — once',
      description: 'On first launch GoFlow fetches the ~380 MB Core ML speech model and stores it on your disk. This is the only time an internet connection is needed. On 8 GB Macs, GoFlow asks whether you prefer Standard or Compact model — either works great.',
      hint: 'Keep ~420 MB of free space for the model weights and local index cache.'
    },
    {
      id: 'permissions',
      step: '03',
      title: 'Grant Microphone & Accessibility',
      description: 'Allow Microphone and Accessibility in System Settings → Privacy & Security. Both are required — Accessibility enables GoFlow\'s global hotkey to work inside every app on your Mac. You only do this once.',
      hint: 'Accessibility permission is what lets GoFlow type into VS Code, Notion, Slack, and any other app — not just Apple\'s own apps.'
    },
    {
      id: 'setup',
      step: '04',
      title: 'Choose your mic & hotkey',
      description: 'Click the GoFlow icon in your menu bar, pick your input device, and set your global hotkey. The default is ⌥Space (Option + Space) and can be remapped to any combination you prefer.',
      hint: 'Works with built-in microphones, AirPods, USB headsets, and any Bluetooth microphone.'
    },
    {
      id: 'dictate',
      step: '05',
      title: 'Dictate into any window',
      description: 'Put your cursor in any text field — Slack, VS Code, Notes, Terminal, an email, anywhere — hold the hotkey and speak. Text lands in under 100ms on Apple Silicon, punctuated and correctly cased.',
      hint: 'Filler words like "um" and "ah" are stripped automatically as you talk.'
    },
    {
      id: 'vocabulary',
      step: '06',
      title: 'Teach it your vocabulary',
      description: 'Open Menu Bar → Custom Dictionary. Add camelCase variables, project names, client names, or technical jargon. You can also upload a plain .txt list. GoFlow boosts those terms\' phonetic probability immediately.',
      hint: 'Perfect for terms like useCallback, tRPC, SwiftUI, or your own product and client names.'
    }
  ],
  systemRequirements: {
    os: 'macOS 13 Ventura or later (macOS 14 Sonoma+ recommended)',
    ram: '8 GB unified memory — works perfectly on Apple Silicon · 8 GB RAM on Intel (enable Compact Model Mode)',
    recommendedRam: '16 GB unified memory',
    processor: 'Apple Silicon (M1, M2, M3, M4 and all Pro/Max/Ultra variants) · Intel 64-bit with AVX2',
    gpuAcceleration: 'Apple Silicon: Neural Engine + Core ML (primary) · Intel Mac: CPU inference via AVX2',
    storage: '~400 MB total (~18 MB app + ~380 MB Core ML model, downloaded once)',
    microphone: 'Any built-in, USB, or Bluetooth microphone',
    network: '0 kbps — fully offline after the one-time model download'
  },
  problems: [
    {
      id: 'gatekeeper',
      title: 'macOS Gatekeeper warning on first launch',
      description: 'macOS may show "GoFlow can\'t be opened because Apple cannot verify it" since GoFlow is distributed outside the Mac App Store.',
      solution: 'Right-click GoFlow in Applications and choose Open, then click Open in the dialog. Alternatively go to System Settings → Privacy & Security → scroll down and click "Open Anyway" next to GoFlow.',
      platform: 'macOS',
      badge: 'Permissions'
    },
    {
      id: 'accessibility',
      title: 'Global hotkey not working in some apps',
      description: 'GoFlow\'s global hotkey requires Accessibility permission to inject text into third-party apps like VS Code, Slack, or browsers.',
      solution: 'Go to System Settings → Privacy & Security → Accessibility and toggle GoFlow ON. If GoFlow is already listed but toggled off, toggle it off and back on, then restart GoFlow.',
      platform: 'macOS',
      badge: 'Permissions'
    },
    {
      id: 'mic-sleep',
      title: 'Microphone not detected after Mac wakes from sleep',
      description: 'macOS occasionally revokes microphone access for menu bar apps after the display sleeps or the Mac locks.',
      solution: 'Toggle Microphone permission off and back on in System Settings → Privacy & Security → Microphone, then restart GoFlow. Enabling "Keep GoFlow running on login" prevents this on most machines.',
      platform: 'macOS',
      badge: 'Quick Fix'
    },
    {
      id: 'intel-cold-start',
      title: 'First-press delay (~1.5s) on Intel Macs',
      description: 'On Intel Macs, loading the neural model from disk into RAM on first use takes up to 1.5 seconds.',
      solution: 'Enable "Keep Model Resident in RAM" under GoFlow → Settings → Advanced. This primes the model on launch so every subsequent hotkey press is instant.',
      platform: 'macOS',
      badge: 'Quick Fix'
    },
    {
      id: 'bluetooth-drop',
      title: 'Bluetooth mic drops during dictation in low battery mode',
      description: 'When a Bluetooth headset enters power-saving mode due to low battery or extended silence, macOS may hand off the audio source mid-sentence.',
      solution: 'Keep your Bluetooth mic charged above 20% for dictation sessions, or switch to the built-in microphone as a fallback in GoFlow → Menu Bar → Input Device.',
      platform: 'macOS',
      badge: 'Hardware'
    }
  ]
};

export const INITIAL_UPDATE_REQUESTS: UpdateRequestItem[] = [
  {
    id: 'req-1',
    title: 'macOS Shortcuts App Integration — trigger GoFlow flows via Shortcuts',
    description: 'Native Shortcuts actions to start/stop dictation, switch languages, and insert vocabulary expansions from any Shortcut or Focus mode.',
    category: 'Integration',
    votes: 201,
    status: 'Planned',
    tag: 'v1.2 Roadmap'
  },
  {
    id: 'req-2',
    title: 'Whisper Large v3 Turbo — Core ML 4-bit quantized (~200 MB)',
    description: 'Add an optional ultra-compact Core ML model pack that halves disk usage to ~200 MB while maintaining 99.1% accuracy on Apple Silicon.',
    category: 'Model',
    votes: 256,
    status: 'In Progress',
    tag: 'Performance'
  },
  {
    id: 'req-3',
    title: 'Multi-Language Auto-Switching (Spanish, French, Japanese, Hindi)',
    description: 'Real-time multilingual detection and switching without manually changing the active model or language setting between sentences.',
    category: 'Language',
    votes: 338,
    status: 'In Progress',
    tag: 'Localization'
  },
  {
    id: 'req-4',
    title: 'Raycast Extension — stream transcription directly into Raycast',
    description: 'A native Raycast extension that pipes GoFlow voice output directly into the Raycast search bar and any Raycast-compatible action.',
    category: 'Integration',
    votes: 114,
    status: 'Under Review',
    tag: 'Ecosystem'
  }
];

export const FEATURED_APP = GOFLOW_APP;
