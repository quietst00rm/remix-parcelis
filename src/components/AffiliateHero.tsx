import React, { useState, useEffect } from 'react';

const AffiliateHero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative overflow-x-clip pt-20" style={{ background: "linear-gradient(135deg, #101155 0%, #1e22aa 50%, #2e32d4 100%)" }}>
      {/* Decorative background elements (Static Blobs) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none z-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#4a4eff] rounded-full mix-blend-screen filter blur-3xl opacity-60 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#6a6eff] rounded-full mix-blend-screen filter blur-3xl opacity-60 animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#3a3eff] rounded-full mix-blend-screen filter blur-3xl opacity-60 animate-blob" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Animated Parallax Squares & Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
         <div 
          className="absolute top-[15%] left-[5%] w-32 h-32 bg-white/5 rounded-lg backdrop-blur-3xl"
          style={{ 
              transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.1}deg)`,
              transition: 'transform 0.1s linear'
          }}
        ></div>
        <div 
          className="absolute bottom-[20%] right-[5%] w-48 h-48 bg-blue-400/10 rounded-lg backdrop-blur-3xl"
          style={{ 
              transform: `translateY(${scrollY * 0.2}px) rotate(-${scrollY * 0.1}deg)`,
              transition: 'transform 0.1s linear'
          }}
        ></div>
        <div 
          className="absolute top-[60%] left-[15%] w-24 h-24 bg-blue-300/10 rounded-lg backdrop-blur-md"
          style={{ 
              transform: `translateY(${scrollY * 0.25}px) rotate(${scrollY * 0.15}deg)`,
              transition: 'transform 0.1s linear'
          }}
        ></div>
        <div 
          className="absolute bottom-[10%] right-[35%] w-40 h-40 bg-white/5 rounded-lg backdrop-blur-xl"
          style={{ 
              transform: `translateY(-${scrollY * 0.1}px) rotate(${scrollY * 0.05}deg)`,
              transition: 'transform 0.1s linear'
          }}
        ></div>
        <div 
          className="absolute top-[30%] right-[20%] w-16 h-16 bg-indigo-500/20 rounded-lg backdrop-blur-sm"
          style={{ 
              transform: `translateY(${scrollY * 0.4}px) rotate(-${scrollY * 0.3}deg)`,
              transition: 'transform 0.1s linear'
          }}
        ></div>
        <div 
          className="absolute bottom-[40%] left-[5%] w-28 h-28 bg-blue-500/10 rounded-lg backdrop-blur-md"
          style={{ 
              transform: `translateY(${scrollY * 0.15}px) rotate(-${20 + scrollY * 0.1}deg)`,
              transition: 'transform 0.1s linear'
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Become a Parcelis Affiliate
          </h1>
          
          <p className="mt-4 text-lg text-blue-50 font-light leading-relaxed">
            Fill out the form below to apply to become an affiliate. Once submitted, our team will review your details and contact you by email.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AffiliateHero;
