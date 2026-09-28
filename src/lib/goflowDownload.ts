/**
 * GoFlow download (zeoenix).
 *
 * GoFlow is free and open source. Installers are hosted as GitHub Release assets.
 * Two separate builds are provided: Apple Silicon (ARM64) and Intel (x86_64).
 * Cloudflare Pages rejects files over 25 MiB, so installers live on GitHub Releases.
 */

const RELEASE_TAG = 'v1.0.0';
const RELEASE_BASE = `https://github.com/zeoenix/goflow/releases/download/${RELEASE_TAG}`;

export const GOFLOW_APPLE_SILICON_URL = `${RELEASE_BASE}/GoFlow-1.0.0-AppleSilicon.dmg`;
export const GOFLOW_INTEL_URL = `${RELEASE_BASE}/GoFlow-1.0.0-Intel.dmg`;

/**
 * Opens the GoFlow installer download in a new tab.
 * Defaults to Apple Silicon. Pass 'intel' for the Intel build.
 */
export function downloadGoFlow(variant: 'apple-silicon' | 'intel' = 'apple-silicon'): void {
  const url = variant === 'intel' ? GOFLOW_INTEL_URL : GOFLOW_APPLE_SILICON_URL;
  window.open(url, '_blank', 'noopener,noreferrer');
  reportDownload();
}

/**
 * Fire-and-forget ping to bump the public download counter.
 * Never blocks or delays the actual download; failures are silently ignored.
 */
function reportDownload(): void {
  fetch('/api/downloads', { method: 'POST' }).catch(() => {});
}
