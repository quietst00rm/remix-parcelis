import React from 'react';
import AboutHero from '@/components/AboutHero';
import AboutMission from '@/components/AboutMission';
import AboutWhyChoose from '@/components/AboutWhyChoose';
import AboutCarriers from '@/components/AboutCarriers';
import AboutAdvantage from '@/components/AboutAdvantage';
import AboutTrust from '@/components/AboutTrust';
import AboutCTA from '@/components/AboutCTA';
import AboutLogos from '@/components/AboutLogos';

const AboutPage: React.FC = () => {

  return (
    <div className="flex flex-col w-full">
      <AboutHero />
      <AboutMission />
      <AboutWhyChoose />
      <AboutCarriers />
      <AboutAdvantage />
      <AboutTrust />
      <AboutCTA />
      <AboutLogos />
    </div>
  );
};

export default AboutPage;
