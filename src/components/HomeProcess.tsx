import React, { useEffect, useRef, useState } from "react";

const STEPS = [
  { num: 1, title: "Integrate", desc: "Connect via Shopify app or other platform integrations in minutes." },
  { num: 2, title: "Sell", desc: "Insurance option appears at checkout automatically - customers opt in." },
  { num: 3, title: "Relax", desc: "Claims go directly to PARCELIS - you stay focused on growth." },
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

const HomeProcess: React.FC = () => {
  const { ref, visible } = useReveal();

  return (
    <section className="bg-white" style={{ padding: "96px 0" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-heading text-[30px] md:text-[40px] font-bold text-ds-neutral-900 tracking-[-0.02em] leading-[1.2] text-center mb-16">
          Simple Process, Zero Hassle
        </h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector lines (desktop only) */}
          <div className="hidden md:block absolute top-8 left-[calc(33.33%+8px)] right-[calc(66.66%-8px)] border-t-2 border-dashed border-ds-neutral-300 z-0" />
          <div className="hidden md:block absolute top-8 left-[calc(66.66%+8px)] right-[calc(33.33%-8px)] border-t-2 border-dashed border-ds-neutral-300 z-0" />

          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className={`flex flex-col items-center text-center relative z-10 transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
              }`}
              style={{ transitionDelay: visible ? `${i * 200}ms` : "0ms" }}
            >
              {/* Mobile connector line (between steps) */}
              {i > 0 && (
                <div className="md:hidden w-px h-8 border-l-2 border-dashed border-ds-neutral-300 -mt-4 mb-4" />
              )}

              {/* Step circle */}
              <div className="w-16 h-16 rounded-full bg-ds-primary flex items-center justify-center mb-5">
                <span className="font-heading text-[28px] font-bold text-white">{step.num}</span>
              </div>

              {/* Title */}
              <h3 className="text-[20px] font-semibold text-ds-neutral-900 mb-3">{step.title}</h3>

              {/* Description */}
              <p className="text-[15px] text-ds-neutral-500 leading-[1.6] max-w-[280px]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeProcess;
