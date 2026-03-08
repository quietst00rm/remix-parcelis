import React from 'react';
import { Link } from 'react-router-dom';
import ParallaxParcels from './ParallaxParcels';

const PricingHero: React.FC = () => {
  return (
    <div className="relative overflow-x-clip pt-24 md:pt-40 pb-32 flex flex-col items-center justify-center text-center" style={{ background: "linear-gradient(135deg, #101155 0%, #1e22aa 50%, #2e32d4 100%)" }}>
      
      {/* 3D Parcel Background */}
      <ParallaxParcels />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight mb-6">
          Simple, Transparent Pricing
        </h1>
        
        <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
          No hidden fees. No surprises. Just straightforward protection for your customers.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://apps.shopify.com/parcelis" target="_blank" rel="noopener noreferrer" className="bg-white text-brand hover:bg-blue-50 font-bold py-3.5 px-8 rounded-lg shadow-lg transition-all transform hover:-translate-y-1">
                Get Parcelis
            </a>
            <Link to="/how-it-works" className="bg-white/10 text-white hover:bg-white/20 font-bold py-3.5 px-8 rounded-lg transition-all">
                See How It Works
            </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingHero;
