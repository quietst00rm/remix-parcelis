import React from 'react';
import { Link } from 'react-router-dom';
import ParallaxParcels from './ParallaxParcels';

const FAQHero: React.FC = () => {
  return (
    <div className="relative overflow-x-clip pt-24 md:pt-40 pb-32 flex flex-col items-center justify-center text-center" style={{ background: "linear-gradient(135deg, #101155 0%, #1e22aa 50%, #2e32d4 100%)" }}>
      
      {/* 3D Parcel Background */}
      <ParallaxParcels />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white leading-tight mb-8">
          Frequently Asked Questions
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-light mb-12">
          Everything you need to know about protecting your packages with PARCELIS
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <a href="https://apps.shopify.com/parcelis" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-100 text-[#1e22aa] font-bold py-4 px-10 rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 text-lg">
            Get Parcelis
          </a>
          <Link to="/contact" className="bg-white/10 text-white hover:bg-white/20 font-bold py-4 px-10 rounded-lg backdrop-blur-sm transition-all text-lg">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQHero;
