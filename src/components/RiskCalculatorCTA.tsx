import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const NOISE_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`;

const RiskCalculatorCTA: React.FC = () => {
  return (
    <section
      className="relative overflow-visible"
      style={{
        background: "linear-gradient(135deg, #1E3A8A 0%, #0F172A 100%)",
      }}
    >
      <div className="absolute top-0 left-0 right-0 z-[2]">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-[30px] sm:h-[40px] md:h-[60px] block">
          <path d="M0,0 L0,40 Q720,0 1440,40 L1440,0 Z" fill="white" />
        </svg>
      </div>

      <div className="absolute inset-0 pointer-events-none z-[1]" style={{ backgroundImage: NOISE_SVG, backgroundRepeat: "repeat", backgroundSize: "256px 256px" }} />
      <div className="absolute inset-0 pointer-events-none z-[1]" style={{ background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(13,148,136,0.1) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-[600px] mx-auto px-6 text-center pt-20 sm:pt-24 pb-20 md:pt-[160px] md:pb-24">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white leading-[1.2] mb-5">
          Ready to Secure Your Shipments?
        </h2>
        <p className="text-lg text-white/70 leading-relaxed mb-9">
          Don't let hidden risks sink your business. Get real protection today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a
            href="https://apps.shopify.com/parcelis"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#1E3A8A] font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-[1px] w-full sm:w-auto text-center"
          >
            Get Parcelis
          </a>
          <Link
            to="/how-it-works"
            className="border-2 border-white/30 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-200 hover:border-white hover:bg-white/10 hover:-translate-y-[1px] w-full sm:w-auto text-center"
          >
            See How It Works
          </Link>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[13px] text-white/50">
          <span className="flex items-center gap-1.5">
            <CheckCircle size={14} />
            Licensed Reinsurance Provider
          </span>
          <span aria-hidden="true" className="hidden sm:inline">·</span>
          <span>Comprehensive Protection</span>
        </div>
      </div>
    </section>
  );
};

export default RiskCalculatorCTA;
