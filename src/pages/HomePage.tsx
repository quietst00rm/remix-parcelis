import React from 'react';
import HomeHero from '@/components/HomeHero';
import HomeValueProps from '@/components/HomeValueProps';
import HomeSplitFeature from '@/components/HomeSplitFeature';
import HomeFeatures from '@/components/HomeFeatures';
import HomeProcess from '@/components/HomeProcess';
import HomeIntegrations from '@/components/HomeIntegrations';
import HomeTrust from '@/components/HomeTrust';
import HomeCarriers from '@/components/HomeCarriers';
import HomeTestimonials from '@/components/HomeTestimonials';
import HomeCTA from '@/components/HomeCTA';

const HomePage: React.FC = () => {

  return (
    <div className="flex flex-col w-full">
      <HomeHero />
      <HomeValueProps />
      <HomeSplitFeature />
      <HomeFeatures />
      <HomeTrust />
      <HomeIntegrations />
      <HomeCarriers />
      <HomeProcess />
      <HomeTestimonials />
      <HomeCTA />
    </div>
  );
};

export default HomePage;
