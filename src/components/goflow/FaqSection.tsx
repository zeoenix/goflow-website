import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Mail, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Surface } from '../../components/Surface';
import { Chip } from '../../components/Chip';

interface FaqItem { q: string; a: string; }

const FAQS: FaqItem[] = [
  {
    q: 'How does GoFlow achieve 100% offline speech recognition without sending audio to the cloud?',
    a: 'GoFlow runs a Core ML optimized neural speech model directly on your Mac using the Apple Neural Engine (Apple Silicon) or CPU inference (Intel). When you press your global hotkey, your audio is converted into text entirely inside your Mac\'s memory. Not a single byte of audio reaches the internet.'
  },
  {
    q: 'Is GoFlow really free? Are there any subscriptions?',
    a: 'Yes — completely free and open source. Forever. Download GoFlow and use it for life, including all future updates and Core ML model improvements. No DRM, no licence keys, no account required.'
  },
  {
    q: 'Does GoFlow work on my 8 GB Mac?',
    a: 'Yes, perfectly. Apple Silicon\'s unified memory architecture makes 8 GB far more capable than traditional systems. GoFlow\'s Core ML model uses only ~300–380 MB of memory. For 8 GB Intel Macs, GoFlow auto-suggests Compact Model Mode on first launch for the smoothest experience.'
  },
  {
    q: 'Can I install GoFlow on multiple Macs?',
    a: 'Yes. Install GoFlow on as many personal Macs as you own — your desktop, laptop, and work machine. It\'s open source and completely DRM-free.'
  },
  {
    q: 'What if GoFlow\'s global hotkey does not work in a specific app?',
    a: 'The most common cause is a missing Accessibility permission. Go to System Settings → Privacy & Security → Accessibility and make sure GoFlow is toggled ON. If already listed, toggle it off and back on, then restart GoFlow.'
  },
  {
    q: 'Can I commission a custom offline Mac app or request specialized features?',
    a: 'Yes. zeoenix actively builds custom local-first Mac software for teams and power users. Visit the Custom Work page or email build@zeoenix.app directly.'
  }
];

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const toggleFaq = (idx: number) => setOpenIdx(openIdx === idx ? null : idx);

  return (
    <section id="faq" className="py-20 sm:py-24 px-4 sm:px-6 max-w-4xl mx-auto relative z-10">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <Chip surface="light" icon={<HelpCircle className="w-4 h-4" />} className="mb-3">
          Answers & Details
        </Chip>
        <h2 className="font-serif-display text-display font-bold tracking-tight mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-gr-base text-muted leading-relaxed">
          Everything you need to know about GoFlow, zeoenix's offline architecture, open source licensing, and macOS support.
        </p>
      </div>

      <div className="space-y-3.5 mb-10">
        {FAQS.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all overflow-hidden ${
                isOpen ? 'bg-border border-border shadow-sm' : 'bg-transparent border-transparent hover:border-border'
              }`}
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full px-5 sm:px-6 py-4 flex items-center justify-between text-left gap-4 cursor-pointer focus-ring"
              >
                <span className="font-semibold text-gr-base">{faq.q}</span>
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
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-gr-base text-muted leading-relaxed border-t border-border">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <Surface tone="dark" className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-border">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-border text-muted flex items-center justify-center shrink-0">
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-serif-display text-gr-sub font-bold mb-1">Have a question not answered here?</h3>
            <p className="text-gr-base text-muted max-w-md leading-relaxed">
              Drop the zeoenix team an email. We reply within 24 hours.
            </p>
          </div>
        </div>
        <a
          href="mailto:support@zeoenix.app?subject=Question%20about%20GoFlow"
          className="w-full sm:w-auto px-6 py-3 bg-border hover:bg-border font-bold text-gr-base rounded-xl organic-transition shadow-md flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer focus-ring"
        >
          <span>support@zeoenix.app</span>
          <ArrowRight className="w-4 h-4 text-muted" />
        </a>
      </Surface>
    </section>
  );
};
