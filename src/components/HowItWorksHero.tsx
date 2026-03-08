import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const HowItWorksHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden -mt-[76px]">
      <div
        className="relative min-h-[400px] md:min-h-[480px] flex flex-col items-center justify-center pt-[76px] pb-28 md:pb-32"
        style={{
          background: "linear-gradient(135deg, #0F172A 0%, #1E3A8A 50%, #172554 100%)",
        }}
      >
        {/* Noise */}
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "256px 256px",
          }}
        />
        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 65% 40%, rgba(59,130,246,0.15) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-[720px] mx-auto px-6 text-center flex flex-col items-center">
          <h1 className="font-heading text-[40px] md:text-[64px] font-bold text-white leading-[1.1] tracking-[-0.03em] mb-5">
            Protection That Works — So You Don't Have To.
          </h1>
          <p className="max-w-[580px] text-[16px] md:text-[18px] text-white/80 leading-[1.7] mb-9">
            Seamlessly integrate Parcelis into your store, offer coverage at checkout, and let us handle every claim from start to finish.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              to="/apply"
              className="bg-white text-ds-primary font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-[1px] active:translate-y-0 hero-cta-glow"
            >
              Get Started
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-white/30 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-200 hover:border-white hover:bg-white/10 hover:-translate-y-[1px] active:translate-y-0"
            >
              See Pricing
            </Link>
          </div>
        </div>

        {/* Bottom curve */}
        <div className="absolute bottom-0 left-0 right-0 z-[2]">
          <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px] block">
            <path d="M0,60 L0,20 Q720,60 1440,20 L1440,60 Z" fill="white" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksHero;
