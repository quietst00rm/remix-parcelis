import React, { useEffect, useRef, useState } from "react";
import { Clock, ShieldCheck } from "lucide-react";

const CARDS = [
  {
    icon: Clock,
    heading: "Zero Hassle",
    stat: "0 minutes",
    statSuffix: "merchant involvement",
    body: "Zero merchant involvement in claims. Direct customers to our portal and never think about it again.",
  },
  {
    icon: ShieldCheck,
    heading: "Protect Customers",
    stat: "5-7 days",
    statSuffix: "claim resolution",
    body: "Comprehensive coverage including porch piracy with fast claim resolution.",
  },
];

function useScrollReveal() {
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

const HomeValueProps: React.FC = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      className="relative"
      style={{
        background: "radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.03) 0%, transparent 50%), #F8FAFC",
        paddingTop: "56px",
        paddingBottom: "56px",
      }}
    >
      <div ref={ref} className="max-w-[1200px] mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={card.heading}
                className={`bg-white rounded-2xl p-6 md:p-9 transition-all duration-300 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{
                  border: "1px solid rgba(226,232,240,0.6)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                  transitionDelay: visible ? `${i * 100}ms` : "0ms",
                  transitionProperty: "opacity, transform, box-shadow",
                  transitionDuration: "500ms, 500ms, 300ms",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.1)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.07)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div className="w-[52px] h-[52px] rounded-xl bg-ds-neutral-100 flex items-center justify-center mb-5">
                  <Icon size={24} className="text-ds-primary" />
                </div>
                <h3 className="font-heading text-[20px] font-semibold text-ds-neutral-900 leading-[1.3] mb-2">
                  {card.heading}
                </h3>
                <div className="flex items-baseline gap-2 mb-5">
                  <span className="text-[30px] font-bold text-ds-teal leading-none">
                    {card.stat}
                  </span>
                  <span className="text-[14px] text-ds-neutral-500 font-medium">
                    {card.statSuffix}
                  </span>
                </div>
                <p className="font-dm text-[15px] text-ds-neutral-700 leading-[1.6]">
                  {card.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeValueProps;
