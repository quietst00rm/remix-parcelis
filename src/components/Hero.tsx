import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import ParallaxParcels from './ParallaxParcels';

const Hero: React.FC = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  
  const quotes = [
    "Many merchants 'self-insure' by promising to replace lost or damaged packages out of pocket. It feels simple and cheap — until loss rates creep up and margins erode.",
    "When you handle claims manually, you're not just losing money on replacement goods — you're losing valuable operational time and degrading customer trust.",
    "Regulatory fines for unlicensed insurance can reach tens of thousands of dollars per violation in states like California and New York.",
    "Self-insurance is an invisible liability on your balance sheet. Parcelis turns that unpredictable risk into a fixed, manageable cost."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [quotes.length]);

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length);
  };

  const scrollToCalculator = () => {
    const element = document.getElementById('calculator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-x-clip pt-20" style={{ background: "linear-gradient(135deg, #101155 0%, #1e22aa 50%, #2e32d4 100%)" }}>
      {/* 3D Parcel Background */}
      <ParallaxParcels />
      
      {/* Decorative background elements (Static Blobs) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none z-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#4a4eff] rounded-full mix-blend-screen filter blur-3xl opacity-60 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#6a6eff] rounded-full mix-blend-screen filter blur-3xl opacity-60 animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#3a3eff] rounded-full mix-blend-screen filter blur-3xl opacity-60 animate-blob" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Content */}
        <div className="md:w-3/5 text-left">
            <span className="inline-block px-5 py-2 rounded-xl bg-white/10 text-blue-50 text-sm font-semibold mb-8 backdrop-blur-sm shadow-sm">
                Merchant Risk Assessment
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            The Hidden Risks of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-white">
                Self-Insuring Your Shipments
            </span>
            </h1>
            
            <p className="mt-4 text-lg text-blue-50 font-light leading-relaxed mb-8 max-w-xl">
            Saving a dollar on "free" shipping protection can quietly turn into thousands in losses — and, in many states, potential regulatory penalties.
            </p>

            <div className="space-y-4 mb-12">
                <div className="flex items-center gap-4 text-white/90 w-fit">
                    <div className="w-2 h-2 rounded-full bg-blue-300 flex-shrink-0 ml-2"></div>
                    <p className="text-sm md:text-base"><strong className="text-white">Operational risk:</strong> replacement product, shipping, & support time.</p>
                </div>
                <div className="flex items-center gap-4 text-white/90 w-fit">
                    <div className="w-2 h-2 rounded-full bg-blue-300 flex-shrink-0 ml-2"></div>
                    <p className="text-sm md:text-base"><strong className="text-white">Margin risk:</strong> small loss rates silently cut dollars from every order.</p>
                </div>
                <div className="flex items-center gap-4 text-white/90 w-fit">
                    <div className="w-2 h-2 rounded-full bg-blue-300 flex-shrink-0 ml-2"></div>
                    <p className="text-sm md:text-base"><strong className="text-white">Compliance risk:</strong> each shipment can count as a separate violation.</p>
                </div>
            </div>

            <button 
                onClick={scrollToCalculator}
                className="bg-white text-brand hover:bg-blue-50 hover:text-brand-dark font-bold py-4 px-10 rounded-lg shadow-xl transition-all transform hover:-translate-y-1"
            >
                Check Your Risk
            </button>
        </div>

        {/* Right Content - Carousel Card */}
        <div className="hidden md:flex md:w-2/5 items-center justify-center relative perspective-1000 w-full">
            {/* Floating 3D Parcel Placeholder Effect */}
             <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-300 to-brand rounded-2xl transform rotate-12 opacity-40 blur-lg animate-pulse"></div>

            {/* Added 'group' class to enable hover effect for the button */}
            <div className="bg-white/10 backdrop-blur-xl rounded-xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col w-full aspect-square group">
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                 
                 {/* Navigation Button - Appears on hover */}
                 <button 
                    onClick={nextQuote}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 z-30"
                    aria-label="Next quote"
                 >
                    <ChevronRight size={24} />
                 </button>

                 {/* Carousel Content Container */}
                 <div className="relative w-full flex-grow">
                     {quotes.map((quote, index) => (
                        <div 
                            key={index}
                            className={`absolute inset-0 flex items-center justify-center text-center p-4 transition-all duration-700 ${
                                index === currentQuote 
                                ? 'opacity-100 translate-x-0 scale-100' 
                                : 'opacity-0 translate-x-12 scale-95 pointer-events-none'
                            }`}
                        >
                            <p className="text-xl md:text-2xl font-medium leading-relaxed italic">
                                "{quote}"
                            </p>
                        </div>
                     ))}
                 </div>

                 {/* Indicators */}
                 <div className="flex gap-2 pt-6 justify-center z-20 flex-shrink-0">
                    {quotes.map((_, idx) => (
                        <button 
                            key={idx}
                            onClick={() => setCurrentQuote(idx)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                                idx === currentQuote ? 'w-8 bg-white' : 'w-2 bg-white/30 hover:bg-white/50'
                            }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                 </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
