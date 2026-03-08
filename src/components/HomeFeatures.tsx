import React, { useEffect, useRef, useState } from "react";
import { Shield, Zap, TrendingUp, Smile } from "lucide-react";

const FEATURES = [
  {
    icon: Shield,
    title: "Comprehensive Coverage",
    text: "Every order is covered against loss, damage, and porch piracy, across USPS, UPS, FedEx, DHL, and international carriers — ensuring peace of mind for your customers worldwide.",
  },
  {
    icon: Zap,
    title: "Zero Merchant Involvement",
    text: "Customers submit claims directly through our self-service portal. Parcelis handles resolution in 5–7 days, reducing tickets and freeing your support team.",
  },
  {
    icon: TrendingUp,
    title: "Boost Conversions and Loyalty",
    text: "When customers see 'Protected by Parcelis' at checkout, they feel secure completing their purchase — leading to higher conversion rates and repeat buyers.",
  },
  {
    icon: Smile,
    title: "Fewer Refunds, Happier Customers",
    text: "Eliminate time-consuming back-and-forth over missing or damaged shipments. Parcelis keeps customers satisfied and protects your bottom line.",
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
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

const HomeFeatures: React.FC = () => {
  const { ref, visible } = useReveal();

  return (
    <section
      className="relative"
      style={{
        background: "radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.03) 0%, transparent 50%), #F8FAFC",
        paddingTop: "96px",
        paddingBottom: "96px",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="font-heading text-[30px] md:text-[40px] font-bold text-ds-neutral-900 tracking-[-0.02em] leading-[1.2] mb-4">
            Protection That Builds Trust.
            <br />
            Automation That Saves Time.
          </h2>
          <p className="font-dm text-[16px] md:text-[18px] text-ds-neutral-500 leading-[1.7] max-w-[620px] mx-auto">
            From checkout to claim resolution, Parcelis ensures a smooth, worry-free experience for both merchants and customers.
          </p>
        </div>

        {/* Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className={`bg-white border border-ds-neutral-200 rounded-2xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-[2px] hover:border-transparent transition-all duration-300 flex flex-col ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{
                  transitionDelay: visible ? `${i * 100}ms` : "0ms",
                  transitionProperty: "opacity, transform, box-shadow, border-color",
                  transitionDuration: "500ms, 500ms, 300ms, 300ms",
                }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-ds-neutral-100 flex items-center justify-center mb-5">
                  <Icon size={24} className="text-ds-primary" />
                </div>

                {/* Title */}
                <h3 className="font-heading text-[20px] font-semibold text-ds-neutral-900 leading-[1.3] mb-3">
                  {f.title}
                </h3>

                {/* Body */}
                <p className="text-[15px] text-ds-neutral-700 leading-[1.6]">
                  {f.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;
