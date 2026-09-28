import React from 'react';

export const TheProblem: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 relative z-10">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif-display text-display tracking-tight mb-6">
          Cloud dictation tools are broken.
        </h2>
        <p className="text-gr-title leading-relaxed">
          Siri Dictation drops words, struggles with technical vocabulary, and requires an internet connection. Cloud-based alternatives upload every word you speak to external servers, introduce noticeable network lag that breaks your flow, and charge $12 a month for a feature your Mac can already run locally — faster, privately, and completely offline.
        </p>
      </div>
    </section>
  );
};
