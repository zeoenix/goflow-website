import React from 'react';
import { FileWarning, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function KnownIssuesPage() {
  return (
    <div className="flex flex-col w-full min-h-screen pt-24 sm:pt-32 pb-16 px-4 sm:px-6 relative z-10">
      <div className="max-w-3xl mx-auto w-full">
        <Link to="/support" className="text-muted hover:underline mb-8 inline-block font-mono text-sm">
          &larr; Back to Support
        </Link>
        <h1 className="font-serif-display text-display font-bold mb-6 flex items-center gap-3">
          <FileWarning className="w-8 h-8 text-btn-bg" />
          Known Issues
        </h1>
        <p className="text-gr-title text-muted mb-12">
          Transparent tracking of current bugs, workarounds, and patch status for GoFlow on macOS.
        </p>

        <div className="space-y-8">

          {/* Issue 1 */}
          <div className="glass-card rounded-2xl p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4 mb-4">
              <h3 className="text-xl font-bold">GoFlow: Gatekeeper quarantine warning on first launch</h3>
              <span className="bg-border text-btn-bg px-3 py-1 rounded-full text-sm font-bold font-mono shrink-0">
                Workaround Available
              </span>
            </div>
            <p className="text-muted mb-4">
              macOS Gatekeeper may block GoFlow on first launch because the app is distributed outside the Mac App Store. You'll see "GoFlow can't be opened because Apple cannot verify it."
            </p>
            <div className="bg-border border border-border rounded-lg p-4 flex gap-3">
              <Info className="w-5 h-5 text-muted shrink-0 mt-0.5" />
              <p className="text-sm text-muted">
                <strong>Fix:</strong> Right-click GoFlow in Applications and choose Open, then click Open in the dialog. Or go to System Settings → Privacy & Security → scroll to the GoFlow entry → click "Open Anyway". You only need to do this once.
              </p>
            </div>
          </div>

          {/* Issue 2 */}
          <div className="glass-card rounded-2xl p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4 mb-4">
              <h3 className="text-xl font-bold">GoFlow: Global hotkey inactive in some third-party apps</h3>
              <span className="bg-border text-muted px-3 py-1 rounded-full text-sm font-bold font-mono shrink-0">
                Permissions Fix
              </span>
            </div>
            <p className="text-muted mb-4">
              On macOS, injecting keystrokes into third-party apps (VS Code, Slack, browsers, etc.) requires explicit Accessibility permission. Without it, the hotkey is heard but text cannot be inserted.
            </p>
            <div className="bg-border border border-border rounded-lg p-4 flex gap-3">
              <Info className="w-5 h-5 text-muted shrink-0 mt-0.5" />
              <p className="text-sm text-muted">
                <strong>Fix:</strong> System Settings → Privacy & Security → Accessibility → toggle GoFlow ON. If already toggled on, toggle off and back on, then restart GoFlow.
              </p>
            </div>
          </div>

          {/* Issue 3 */}
          <div className="glass-card rounded-2xl p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4 mb-4">
              <h3 className="text-xl font-bold">GoFlow: Microphone not detected after Mac wakes from sleep</h3>
              <span className="bg-border text-muted px-3 py-1 rounded-full text-sm font-bold font-mono shrink-0">
                Quick Fix
              </span>
            </div>
            <p className="text-muted mb-4">
              macOS occasionally revokes microphone access for menu bar apps after the display sleeps or the system locks, particularly on macOS 13 Ventura.
            </p>
            <div className="bg-border border border-border rounded-lg p-4 flex gap-3">
              <Info className="w-5 h-5 text-muted shrink-0 mt-0.5" />
              <p className="text-sm text-muted">
                <strong>Workaround:</strong> Toggle Microphone permission off and back on in System Settings → Privacy & Security → Microphone, then restart GoFlow. Enable "Launch GoFlow at Login" to keep the permission active across reboots.
              </p>
            </div>
          </div>

          {/* Issue 4 */}
          <div className="glass-card rounded-2xl p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4 mb-4">
              <h3 className="text-xl font-bold">GoFlow: Missing punctuation in loud environments</h3>
              <span className="bg-border text-muted px-3 py-1 rounded-full text-sm font-bold font-mono shrink-0">
                Investigating
              </span>
            </div>
            <p className="text-muted mb-4">
              When background noise exceeds ~70 dB (busy café, open-plan office), the neural model struggles to detect prosody pauses, resulting in missing periods and commas.
            </p>
            <div className="bg-border border border-border rounded-lg p-4 flex gap-3">
              <Info className="w-5 h-5 text-muted shrink-0 mt-0.5" />
              <p className="text-sm text-muted">
                <strong>Workaround:</strong> Explicitly dictate "period" or "comma" in loud environments. An updated acoustic model with noise cancellation is planned for v1.1.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
