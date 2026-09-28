import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, Mail, MessageSquare, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: 'How does GoFlow achieve 100% offline speech recognition without sending audio to the cloud?',
    a: 'GoFlow runs a Core ML optimized neural speech model directly on your Mac using the Apple Neural Engine (on Apple Silicon) or CPU inference (on Intel). When you press your global hotkey, your audio is transcribed entirely inside your Mac\'s memory. Not a single byte of audio reaches the internet.'
  },
  {
    q: 'Is GoFlow really free? Are there any subscriptions?',
    a: 'Yes — completely free and open source. Forever. Download GoFlow and use it for life, including all future updates, Core ML model improvements, and new language packs. No DRM, no licence keys, no account required.'
  },
  {
    q: 'Does GoFlow work on my 8 GB Mac?',
    a: 'Yes, perfectly. Apple Silicon\'s unified memory architecture makes 8 GB far more capable than traditional 8 GB systems. GoFlow\'s Core ML model uses only ~300–380 MB of memory, leaving the rest free for your other apps. For 8 GB Intel Macs, GoFlow auto-suggests enabling Compact Model Mode on first launch for the smoothest experience.'
  },
  {
    q: 'Can I install GoFlow on multiple Macs?',
    a: 'Yes. Install GoFlow on as many personal Macs as you own — your desktop, laptop, and work machine. It\'s open source and DRM-free.'
  },
  {
    q: 'What should I do if GoFlow\'s global hotkey does not work in a specific app?',
    a: 'The most common cause is a missing Accessibility permission. Go to System Settings → Privacy & Security → Accessibility and make sure GoFlow is toggled ON. If it\'s already listed, toggle it off and back on, then restart GoFlow.'
  },
  {
    q: 'Can I commission a custom offline Mac app or request specialized features?',
    a: 'Yes. zeoenix actively builds custom local-first Mac software for teams and power users. Use the Custom Work page or email build@zeoenix.app directly.'
  }
];

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 px-4 sm:px-6 max-w-4xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-border text-gr-base font-bold uppercase tracking-wider mb-3">
          <HelpCircle className="w-4 h-4 " />
          <span>Answers & Details</span>
        </div>
        <h2 className="font-serif-display text-gr-display font-bold tracking-tight mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-gr-base leading-relaxed">
          Everything you need to know about GoFlow, zeoenix's offline architecture, licensing, and support.
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-3.5 mb-10">
        {FAQS.map((faq, idx) => {
          const isOpen = openIdx === idx;

          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all overflow-hidden ${
                isOpen ? 'surface-light border-border shadow-sm' : 'surface-light border-border/80 hover:border-border'
              }`}
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full px-5 sm:px-6 py-4 flex items-center justify-between text-left gap-4 cursor-pointer"
              >
                <span className="font-semibold text-gr-base ">
                  {faq.q}
                </span>
                <span className="text-muted shrink-0">
                  {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-gr-base leading-relaxed border-t border-border">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Direct Email Support CTA Block */}
      <div className="surface-dark rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-border flex items-center justify-center shrink-0">
            <Mail className="w-6 h-6 " />
          </div>
          <div>
            <h3 className="font-serif-display text-gr-sub font-bold mb-1">
              Have a question not answered here?
            </h3>
            <p className="text-gr-base text-muted max-w-md leading-relaxed">
              Drop our founders and core engineering team an email directly. We reply within 24 hours.
            </p>
          </div>
        </div>

        <a
          href="mailto:support@zeoenix.app?subject=Question%20about%20GoFlow"
          className="w-full sm:w-auto px-6 py-3 surface-light hover:surface-light font-bold text-gr-base rounded-xl transition-all shadow-md flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
        >
          <span>Email support@zeoenix.app</span>
          <ArrowRight className="w-4 h-4 " />
        </a>
      </div>

    </section>
  );
};
