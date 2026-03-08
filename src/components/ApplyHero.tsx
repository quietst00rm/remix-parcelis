import React from "react";
import { Link } from "react-router-dom";

const NOISE_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`;

const ApplyHero: React.FC = () => {
  return (
    <section
      className="relative overflow-x-clip -mt-[76px]"
      style={{
        background: "linear-gradient(135deg, #0F172A 0%, #1E3A8A 50%, #172554 100%)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none z-[1]" style={{ backgroundImage: NOISE_SVG, backgroundRepeat: "repeat", backgroundSize: "256px 256px" }} />
      <div className="absolute inset-0 pointer-events-none z-[1]" style={{ background: "radial-gradient(ellipse 60% 50% at 65% 40%, rgba(59,130,246,0.15) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-[720px] mx-auto px-6 text-center pt-[200px] md:pt-[220px] pb-28 md:pb-32 flex flex-col items-center">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
          Get Started with Parcelis
        </h1>
        <p className="text-lg text-white/70 mt-2 max-w-[580px] mx-auto leading-relaxed mb-9">
          Start protecting packages and generating profit. Complete the application below to get started.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="https://apps.shopify.com/parcelis"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#1E3A8A] font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto text-center"
          >
            Get Parcelis
          </a>
          <Link
            to="/pricing"
            className="border-2 border-white/30 text-white font-medium px-8 py-4 rounded-xl text-lg hover:bg-white/10 hover:border-white transition-all duration-200 w-full sm:w-auto text-center"
          >
            See Pricing
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[2]">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-[30px] sm:h-[40px] md:h-[60px] block">
          <path d="M0,60 L0,20 Q720,60 1440,20 L1440,60 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
};

export default ApplyHero;
