import React from 'react';
import { Code2, AppWindow, Route, HelpCircle, FileWarning } from 'lucide-react';
import { Link } from 'react-router-dom';


export const Footer: React.FC = () => {
  return (
    <footer className="surface-dark border-t border-border pt-16 pb-24 sm:pb-12 px-4 sm:px-6 text-gr-base">
      <div className="max-w-5xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-border">

          <div className="md:col-span-2 space-y-3">
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-border flex items-center justify-center p-1.5 shadow-sm">
                <img src="/logo.svg" alt="GoFlow logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-serif-display font-bold text-gr-sub">
                GoFlow
              </span>
              <span className="text-sm uppercase font-bold text-muted bg-border px-3 py-0.5 rounded-full border border-border">
                Go once. Flow forever.
              </span>
            </div>
            <p className="text-gr-base text-muted max-w-sm leading-relaxed mt-4">
              Curated home for open source, local-first Mac software. Featuring <strong>GoFlow</strong> — private neural voice-to-text that runs 100% on your Mac with zero cloud subscriptions and zero data collected.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gr-base uppercase tracking-wider mb-3 font-mono">
              Storefront
            </h4>
            <ul className="space-y-3 text-gr-base text-muted">
              <li>
                <Link to="/" className="hover:underline organic-transition focus-ring rounded-sm">
                  Store Home
                </Link>
              </li>
              <li>
                <Link to="/goflow" className="hover:underline organic-transition flex items-center gap-1.5 focus-ring rounded-sm w-max">
                  <AppWindow className="w-4 h-4" />
                  <span>GoFlow App</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gr-base uppercase tracking-wider mb-3 font-mono">
              Services
            </h4>
            <ul className="space-y-3 text-gr-base text-muted">
              <li>
                <Link to="/custom-work" className="hover:underline organic-transition flex items-center gap-1.5 focus-ring rounded-sm w-max">
                  <Code2 className="w-4 h-4" />
                  <span>Custom Work</span>
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:underline organic-transition flex items-center gap-1.5 focus-ring rounded-sm w-max">
                  <HelpCircle className="w-4 h-4" />
                  <span>Support & FAQ</span>
                </Link>
              </li>
              <li>
                <Link to="/roadmap" className="hover:underline organic-transition flex items-center gap-1.5 focus-ring rounded-sm w-max">
                  <Route className="w-4 h-4" />
                  <span>Roadmap</span>
                </Link>
              </li>
              <li>
                <Link to="/for-developers" className="hover:underline organic-transition flex items-center gap-1.5 focus-ring rounded-sm w-max">
                  <Code2 className="w-4 h-4" />
                  <span>For Developers</span>
                </Link>
              </li>
              <li>
                <Link to="/docs/known-issues" className="hover:underline organic-transition flex items-center gap-1.5 focus-ring rounded-sm w-max">
                  <FileWarning className="w-4 h-4" />
                  <span>Known Issues</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-gr-base text-muted">
          <p>© {new Date().getFullYear()} GoFlow · Made by zeoenix · 100% On-Device Local Computing.</p>
          <div className="flex items-center gap-4">
            <Link to="/support" className="hover:underline organic-transition focus-ring rounded-sm">Terms</Link>
            <span>•</span>
            <Link to="/support" className="hover:underline organic-transition focus-ring rounded-sm">Privacy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
