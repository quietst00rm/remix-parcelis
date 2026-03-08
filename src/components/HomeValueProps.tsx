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
      className="bg-ds-neutral-50 py-24"
      style={{ paddingTop: "96px", paddingBottom: "96px" }}
    >
      <div ref={ref} className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={card.heading}
                className={`bg-white rounded-2xl p-8 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] hover:-translate-y-[2px] transition-all duration-300 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
                style={{
                  transitionDelay: visible ? `${i * 100}ms` : "0ms",
                  transitionProperty: "opacity, transform, box-shadow",
                  transitionDuration: "500ms, 500ms, 300ms",
                }}
              >
                {/* Icon container */}
                <div className="w-14 h-14 rounded-xl bg-ds-neutral-100 flex items-center justify-center mb-5">
                  <Icon size={28} className="text-ds-primary" />
                </div>

                {/* Heading */}
                <h3 className="text-[22px] font-semibold text-ds-neutral-900 mb-2">
                  {card.heading}
                </h3>

                {/* Highlighted stat */}
                <div className="flex items-baseline gap-2 mb-5">
                  <span className="text-[32px] font-bold text-ds-teal leading-none">
                    {card.stat}
                  </span>
                  <span className="text-[14px] text-ds-neutral-500 font-medium">
                    {card.statSuffix}
                  </span>
                </div>

                {/* Body */}
                <p className="text-[16px] text-ds-neutral-700 leading-[1.6]">
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
