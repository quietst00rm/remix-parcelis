import React, { useEffect, useRef, useState } from "react";
import { Shield, Award, Clock } from "lucide-react";

const ITEMS = [
  {
    icon: Shield,
    title: "Powered by InsureShip",
    text: "Industry-leading insurance infrastructure. Real underwriting, real coverage, real payouts.",
    badge: "Licensed Reinsurance Provider",
  },
  {
    icon: Award,
    title: "Regulatory Compliance",
    text: "Not a tech workaround. Licensed in all operating states. Full DOI oversight.",
    badge: "State-Regulated Coverage",
  },
  {
    icon: Clock,
    title: "5-7 Day Claims",
    text: "Faster than carriers. Professional claim adjusters. Zero merchant involvement.",
    badge: "Industry-Leading Speed",
  },
];

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

const NOISE_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`;

const HomeTrust: React.FC = () => {
  const { ref, visible } = useReveal();

  return (
    <section className="relative overflow-hidden" style={{ background: "#0F172A" }}>
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 z-[2]">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-[30px] sm:h-[40px] md:h-[60px] block">
          <path d="M0,0 L0,40 Q720,0 1440,40 L1440,0 Z" fill="#F8FAFC" />
        </svg>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-[2]">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-[30px] sm:h-[40px] md:h-[60px] block">
          <path d="M0,60 L0,20 Q720,60 1440,20 L1440,60 Z" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Noise overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{ backgroundImage: NOISE_SVG, backgroundRepeat: "repeat", backgroundSize: "256px 256px" }}
      />

      <div
        ref={ref}
        className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-6 text-center py-20 md:py-[120px]"
      >
        <h2 className="font-heading text-[30px] md:text-[40px] font-bold text-white tracking-[-0.02em] leading-[1.2] mb-14">
          Licensed. Legitimate. Reliable.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`bg-ds-surface-elevated border border-ds-surface-border rounded-2xl p-6 md:p-8 flex flex-col items-center text-center hover:border-ds-primary-light transition-all duration-200 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{
                  transitionDelay: visible ? `${i * 100}ms` : "0ms",
                  transitionProperty: "opacity, transform, border-color",
                  transitionDuration: "500ms, 500ms, 200ms",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(59,130,246,0.1)" }}
                >
                  <Icon size={24} className="text-ds-primary-light" />
                </div>
                <h3 className="font-heading text-[20px] font-semibold text-white leading-[1.3] mb-3">{item.title}</h3>
                <p className="font-dm text-[15px] text-white/60 leading-[1.6] mb-6">{item.text}</p>
                <div className="mt-auto border border-white/20 rounded-full px-4 py-2 text-[10px] font-bold text-white tracking-widest uppercase">
                  {item.badge}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeTrust;
