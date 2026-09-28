import React, { useState } from 'react';
import { ShieldCheck, Mic, ArrowRight, CheckCircle2, Apple } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubscribing) return;

    setIsSubscribing(true);
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error('Subscribe failed');
      setIsSubscribed(true);
    } catch (err) {
      console.error('Failed to subscribe:', err);
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-start pt-28 sm:pt-36 pb-20 px-4 sm:px-6 overflow-hidden">
      {/* Immersive Background Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
        <picture>
          <source srcSet="/front-page.webp" type="image/webp" />
          <img
            src="/front-page.webp"
            alt="zeoenix Background"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.src.includes('front-page.png')) {
                target.src = '/front-page.png';
              }
            }}
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/35" />
        <div className="noise-overlay opacity-30" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">

        {/* Hero Pitch Box */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-3xl mx-auto rounded-3xl p-6 sm:p-10 bg-[#17532F]/85 backdrop-blur-xl border border-white/20 shadow-2xl text-center mb-8 sm:mb-12 flex flex-col items-center"
        >
          {/* Philosophy Badge */}
          <div className="mb-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/25 text-white border border-white/20 shadow-md backdrop-blur-md text-xs sm:text-sm font-medium tracking-wide">
            <ShieldCheck className="w-4 h-4 text-[#E8A33D] shrink-0" />
            <span>The zeoenix philosophy</span>
          </div>

          <h1 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-sm mb-4 leading-tight">
            Go once. Flow forever.
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto font-medium">
            We are building open source, local-first Mac utilities that respect your privacy, run fully offline, and never charge a subscription. Your data stays on your machine. Always.
          </p>
        </motion.div>

        {/* Product Showcase & Subscription Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full max-w-3xl">

          {/* GoFlow Product Card */}
          <Link to="/goflow" className="block group focus-ring rounded-2xl h-full">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="h-full rounded-2xl p-6 sm:p-8 bg-[#17532F]/85 hover:bg-[#17532F]/90 backdrop-blur-xl border border-white/20 shadow-2xl text-white flex flex-col justify-between organic-transition"
            >
              <div>
                <div className="w-11 h-11 rounded-full bg-white/10 border border-white/15 flex items-center justify-center mb-5">
                  <Mic className="w-5 h-5 text-[#E8A33D]" />
                </div>

                <div className="flex items-center gap-2.5 mb-2.5">
                  <h2 className="font-serif-display text-2xl font-bold tracking-tight">
                    GoFlow
                  </h2>
                  <span className="text-[11px] uppercase tracking-wider font-mono px-2.5 py-0.5 rounded-full bg-[#E8A33D] text-[#111815] font-bold">
                    Open Source
                  </span>
                </div>

                <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-4 font-medium">
                  Voice-to-text dictation that runs 100% locally on your Mac — Apple Silicon native, sub-100ms, zero data collected.
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 border border-white/15 text-white/70">
                    <Apple className="w-2.5 h-2.5 inline mr-1" />M1–M4+
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 border border-white/15 text-white/70">
                    Intel Mac
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 border border-white/15 text-white/70">
                    macOS 13+
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-white/15 pt-4 mt-2">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-base text-white">Free</span>
                </div>
                <span className="flex items-center gap-1.5 text-sm font-bold text-[#E8A33D] group-hover:translate-x-1 organic-transition">
                  View details <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Email Capture */}
          <div className="rounded-2xl p-6 sm:p-8 bg-[#17532F]/85 backdrop-blur-xl border border-white/20 shadow-2xl text-white flex flex-col justify-between text-center">
            <div>
              <h2 className="font-serif-display text-2xl font-bold mb-2 tracking-tight">
                Get told when the next tool ships
              </h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6">
                Be the first to get early builds of our upcoming offline Mac utilities.
              </p>
            </div>

            {isSubscribed ? (
              <div className="py-6 flex flex-col items-center gap-2 bg-white/10 rounded-xl border border-white/15">
                <CheckCircle2 className="w-8 h-8 text-[#E8A33D]" />
                <p className="font-bold text-white">You're on the early list!</p>
                <p className="text-xs text-white/70">We will notify you only when a new standalone Mac app ships.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-full bg-black/25 border border-white/25 text-white placeholder:text-white/60 focus-ring text-sm"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubscribing}
                  className="w-full px-5 py-3 rounded-full bg-[#E8A33D] hover:bg-[#d99530] text-[#111815] font-bold text-sm sm:text-base organic-transition shadow-md focus-ring cursor-pointer disabled:opacity-60"
                >
                  {isSubscribing ? 'Subscribing...' : 'Subscribe for updates'}
                </button>
              </form>
            )}

            <p className="text-white/60 text-xs mt-4 font-mono">
              One email per release. No marketing spam.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
