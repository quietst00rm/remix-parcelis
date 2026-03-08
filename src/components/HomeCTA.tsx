import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const HomeCTA: React.FC = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1E3A8A 0%, #0F172A 100%)",
        padding: "96px 0",
      }}
    >
      {/* Noise overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />

      {/* Teal radial glow */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(13,148,136,0.1) 0%, transparent 70%)",
        }}
      />

      {/* Corner decorative shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-white/[0.03] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-white/[0.03] blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-[600px] mx-auto px-6 text-center">
        <h2 className="font-heading text-[30px] md:text-[40px] font-bold text-white leading-[1.2] mb-5">
          Ready to Protect Your Customers?
        </h2>

        <p className="text-[18px] text-white/70 leading-[1.7] mb-9">
          Join the merchants who've chosen the smarter way to deliver confidence with every shipment.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <Link
            to="/apply"
            className="bg-white text-ds-primary font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-[1px] active:translate-y-0 hero-cta-glow w-full sm:w-auto text-center"
          >
            Sign Up Today
          </Link>
          <Link
            to="/how-it-works"
            className="border-2 border-white/30 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-200 hover:border-white hover:bg-white/10 hover:-translate-y-[1px] w-full sm:w-auto text-center"
          >
            See How It Works
          </Link>
        </div>

        {/* Trust line */}
        <div className="flex items-center justify-center gap-4 text-[13px] text-white/50">
          <span className="flex items-center gap-1.5">
            <CheckCircle size={14} />
            Licensed Reinsurance Provider
          </span>
          <span aria-hidden="true">·</span>
          <span>Comprehensive Protection</span>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
