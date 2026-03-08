import React from 'react';
import ParallaxParcels from './ParallaxParcels';

const AboutHero: React.FC = () => {
  return (
    <div className="relative overflow-x-clip pt-24 md:pt-40 pb-32 flex flex-col items-center justify-center text-center" style={{ background: "linear-gradient(135deg, #101155 0%, #1e22aa 50%, #2e32d4 100%)" }}>
      
      {/* 3D Parcel Background */}
      <ParallaxParcels />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white font-medium text-sm mb-6 backdrop-blur-sm border border-white/10">
            Established 2023
        </span>
        <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white leading-tight mb-6">
          Built for E-Commerce. <br/> Backed by Insurance Expertise.
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-light">
          Parcelis is a technology-driven protection platform powered by InsureShip, the industry leader in e-commerce shipping insurance.
        </p>
      </div>
    </div>
  );
};

export default AboutHero;
