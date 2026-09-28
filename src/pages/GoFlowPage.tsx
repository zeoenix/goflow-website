import React from 'react';
import { Hero } from '../components/goflow/Hero';
import { ProofSection } from '../components/goflow/ProofSection';
import { TheProblem } from '../components/goflow/TheProblem';
import { ComparisonTable } from '../components/goflow/ComparisonTable';
import { ProductDemo } from '../components/goflow/ProductDemo';
import { UsageGuide } from '../components/goflow/UsageGuide';
import { WhyLocalFirst } from '../components/goflow/WhyLocalFirst';
import { FaqSection } from '../components/goflow/FaqSection';
import { FinalCta } from '../components/goflow/FinalCta';

interface GoFlowPageProps {
  onDownload: () => void;
  onOpenDetailsModal?: () => void;
}

export default function GoFlowPage({ onDownload, onOpenDetailsModal }: GoFlowPageProps) {
  return (
    <div className="flex flex-col w-full relative">
      <Hero onDownload={onDownload} onOpenDetailsModal={onOpenDetailsModal || (() => {})} />
      <ProofSection />
      <TheProblem />
      <ComparisonTable />
      <ProductDemo />
      <UsageGuide />
      <WhyLocalFirst />
      <FaqSection />
      <FinalCta onDownload={onDownload} />
    </div>
  );
}
