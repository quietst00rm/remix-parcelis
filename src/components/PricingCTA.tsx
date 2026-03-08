import React from 'react';
import { Link } from 'react-router-dom';

const PricingCTA: React.FC = () => {
  return (
    <div className="bg-brand py-24 relative overflow-hidden">
      {/* Background Gradients/Texture - Static, no spinning squares */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-transparent to-black/10"></div>
          <div className="absolute top-10 right-10 w-64 h-64 border border-white/5 rounded-3xl backdrop-blur-3xl opacity-50"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 border border-white/5 rounded-3xl backdrop-blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Ready to Protect Your Customers and Your Brand?
        </h2>
        <p className="text-blue-100 text-lg mb-12">
            Join merchants who trust Parcelis for fast, fair, comprehensive package protection.
        </p>
        
        <div className="flex flex-col items-center gap-6">
            <a href="https://apps.shopify.com/parcelis" target="_blank" rel="noopener noreferrer" className="bg-white text-brand hover:bg-blue-50 font-bold py-4 px-12 rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 text-lg">
                Get Parcelis
            </a>
            <Link to="/how-it-works" className="text-white underline underline-offset-4 hover:text-blue-200 text-sm">
                Or learn more about how it works
            </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingCTA;
