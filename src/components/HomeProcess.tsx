import React, { useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";

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
    <section className="bg-white py-14 md:py-24">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
        <h2 className="font-heading text-[30px] md:text-[40px] font-bold text-ds-neutral-900 tracking-[-0.02em] leading-[1.2] text-center mb-16">
          Simple Process, Zero Hassle
        </h2>

        <div ref={ref} className="max-w-[1000px] mx-auto">
          {/* Desktop layout */}
          <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr_auto_1fr] items-start gap-0">
            {STEPS.map((step, i) => (
              <React.Fragment key={step.num}>
                <div
                  className={`flex flex-col items-center text-center transition-all duration-500 ease-out ${
                    visible ? "opacity-100 scale-100" : "opacity-0 scale-[0.9]"
                  }`}
                  style={{ transitionDelay: visible ? `${i * 200}ms` : "0ms" }}
                >
                  <div className="w-[72px] h-[72px] rounded-full bg-ds-primary flex items-center justify-center mb-6">
                    <span className="font-heading text-[28px] font-bold text-white">{step.num}</span>
                  </div>
                  <h3 className="font-heading text-[22px] font-semibold text-ds-neutral-900 mb-3">{step.title}</h3>
                  <p className="font-dm text-[15px] text-ds-neutral-500 leading-[1.6] max-w-[280px]">{step.desc}</p>
                </div>

                {i < STEPS.length - 1 && (
                  <div
                    className={`flex items-center self-start mt-[34px] px-2 transition-all duration-500 ease-out ${
                      visible ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ transitionDelay: visible ? "600ms" : "0ms" }}
                  >
                    <div className="w-16 lg:w-24 border-t-2 border-dashed border-ds-neutral-300" />
                    <ChevronRight size={16} className="text-ds-neutral-300 -ml-1 flex-shrink-0" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile layout */}
          <div className="flex flex-col items-center gap-0 md:hidden">
            {STEPS.map((step, i) => (
              <React.Fragment key={step.num}>
                {i > 0 && (
                  <div
                    className={`w-px h-8 border-l-2 border-dashed border-ds-neutral-300 my-2 transition-all duration-500 ease-out ${
                      visible ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ transitionDelay: visible ? "600ms" : "0ms" }}
                  />
                )}
                <div
                  className={`flex flex-col items-center text-center transition-all duration-500 ease-out ${
                    visible ? "opacity-100 scale-100" : "opacity-0 scale-[0.9]"
                  }`}
                  style={{ transitionDelay: visible ? `${i * 200}ms` : "0ms" }}
                >
                  <div className="w-[60px] h-[60px] rounded-full bg-ds-primary flex items-center justify-center mb-5">
                    <span className="font-heading text-[24px] font-bold text-white">{step.num}</span>
                  </div>
                  <h3 className="font-heading text-[20px] font-semibold text-ds-neutral-900 mb-3">{step.title}</h3>
                  <p className="font-dm text-[15px] text-ds-neutral-500 leading-[1.6] max-w-[280px]">{step.desc}</p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProcess;
