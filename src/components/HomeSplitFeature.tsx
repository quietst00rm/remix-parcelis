import React, { useEffect, useRef, useState } from "react";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ITEMS = ["Lost Packages", "Damaged Shipments", "Porch Piracy", "All Global Carriers"];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

const HomeSplitFeature: React.FC = () => {
  const { ref, visible } = useReveal();

  return (
    <section className="bg-white" style={{ padding: "96px 0" }}>
      <div ref={ref} className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* ── Left column (55%) ──────────────────────────────── */}
          <div
            className={`lg:col-span-7 transition-all duration-[600ms] ease-out ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h2 className="font-heading text-[30px] md:text-[40px] font-bold text-ds-neutral-900 tracking-[-0.02em] leading-[1.2] mb-6">
              Comprehensive Protection
            </h2>

            <div className="flex flex-col gap-4 mb-8">
              {ITEMS.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <ShieldCheck size={24} className="text-ds-teal flex-shrink-0" />
                  <span className="text-[18px] font-medium text-ds-neutral-700">{item}</span>
                </div>
              ))}
            </div>

            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-1.5 text-[15px] font-medium text-ds-primary-light hover:underline transition-colors"
            >
              Learn More <ArrowRight size={16} />
            </Link>
          </div>

          {/* ── Right column (45%) ─────────────────────────────── */}
          <div
            className={`lg:col-span-5 transition-all duration-[600ms] ease-out ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: visible ? "150ms" : "0ms" }}
          >
            <div
              className="rounded-2xl p-10 md:p-12 text-center relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #1E3A8A 0%, #172554 100%)",
                boxShadow: "0 0 80px rgba(59,130,246,0.3), 0 20px 60px rgba(0,0,0,0.15)",
              }}
            >
              {/* Subtle inner glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center">
                <span className="text-[72px] font-bold text-white leading-none tracking-tight">
                  5-7
                </span>
                <span className="text-[24px] font-semibold text-white/90 mt-1">
                  Business Days
                </span>
                <span className="text-[14px] text-white/60 mt-3">
                  Average claim resolution
                </span>

                <div className="w-16 h-px bg-white/20 my-5" />

                <p className="text-[14px] text-white/50 italic">
                  Carrier insurance: 30-60 days
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeSplitFeature;
