import React from 'react';
import PricingHero from '@/components/PricingHero';
import PricingCalculator from '@/components/PricingCalculator';
import PricingFeatures from '@/components/PricingFeatures';
import PricingCoverage from '@/components/PricingCoverage';
import PricingProcess from '@/components/PricingProcess';
import PricingIntegrations from '@/components/PricingIntegrations';
import HomeCarriers from '@/components/HomeCarriers';
import PricingCTA from '@/components/PricingCTA';

const PricingPage: React.FC = () => {

  return (
    <div className="flex flex-col w-full">
      <PricingHero />
      <PricingCalculator />
      <PricingFeatures />
      <PricingCoverage />
      <PricingProcess />
      <HomeCarriers />
      <PricingIntegrations />
      <PricingCTA />
    </div>
  );
};

export default PricingPage;
