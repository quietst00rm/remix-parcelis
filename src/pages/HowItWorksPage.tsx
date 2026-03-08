import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Settings, Shield, FileCheck, TrendingUp, Zap, CheckCircle } from "lucide-react";

/* ── Scroll reveal hook ──────────────────────────────────────────── */
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

/* ── Data ─────────────────────────────────────────────────────────── */
const STEPS = [
  {
    num: 1,
    icon: Settings,
    title: "Integrate",
    text: "Connect Parcelis via our Shopify, WooCommerce, or API integration in minutes. No coding, no contracts — just instant coverage for your customers.",
  },
  {
    num: 2,
    icon: Shield,
    title: "Offer Protection",
    text: "At checkout, customers can opt-in to protect their order against loss, damage, or theft — giving them confidence to complete their purchase.",
  },
  {
    num: 3,
    icon: FileCheck,
    title: "We Handle Claims",
    text: "If a package goes missing or arrives damaged, customers submit claims directly through our self-service portal. Our team manages resolution and payout in 5–7 days, keeping your inbox clear and your customers satisfied.",
  },
  {
    num: 4,
    icon: TrendingUp,
    title: "You Stay Focused on Growth",
    text: "Parcelis removes the burden of post-delivery issues — freeing your team to focus on sales, not support.",
  },
];

const INTEGRATIONS = [
  {
    name: "Shopify",
    href: "https://apps.shopify.com/parcelis",
    bullets: ["One-click activation via Shopify App Store", "Connect your store in minutes"],
  },
  {
    name: "NEXT Commerce",
    bullets: ["Seamless integration with NEXT Commerce checkout"],
  },
  {
    name: "WooCommerce",
    bullets: ["Plugin available for WordPress"],
  },
  {
    name: "BigCommerce",
    bullets: ["Native integration available"],
  },
  {
    name: "Magento",
    bullets: ["Extension available for Adobe Commerce"],
  },
];

/* ── Page ─────────────────────────────────────────────────────────── */
const HowItWorksPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen">
      {/* Hero is rendered by the page layout via HowItWorksHero import in the page */}
      {/* We import it inline here since the page owns the full layout */}
      <HowItWorksHeroInline />
      <StepsSection />
      <IntegrationsSection />
      <CTASection />
    </div>
  );
};

/* ── Hero (inline to keep single-file page) ──────────────────────── */
import HowItWorksHero from "@/components/HowItWorksHero";

const HowItWorksHeroInline = HowItWorksHero;

/* ── Steps Section ───────────────────────────────────────────────── */
const StepsSection: React.FC = () => {
  const { ref, visible } = useReveal();

  return (
    <section className="bg-white" style={{ padding: "96px 0" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-heading text-[30px] md:text-[40px] font-bold text-ds-neutral-900 tracking-[-0.02em] leading-[1.2] text-center mb-14">
          How Parcelis Works
        </h2>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className={`relative bg-white border border-ds-neutral-200 rounded-2xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-[2px] transition-all duration-300 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{
                  transitionDelay: visible ? `${i * 100}ms` : "0ms",
                  transitionProperty: "opacity, transform, box-shadow",
                  transitionDuration: "500ms, 500ms, 300ms",
                }}
              >
                {/* Step number badge */}
                <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-ds-primary flex items-center justify-center">
                  <span className="text-[13px] font-bold text-white">{step.num}</span>
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-ds-neutral-100 flex items-center justify-center mb-5">
                  <Icon size={24} className="text-ds-primary" />
                </div>

                {/* Title */}
                <h3 className="text-[20px] font-semibold text-ds-neutral-900 mb-3">
                  {step.title}
                </h3>

                {/* Body */}
                <p className="text-[15px] text-ds-neutral-700 leading-[1.6]">
                  {step.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ── Integrations Section ────────────────────────────────────────── */
const IntegrationsSection: React.FC = () => {
  const { ref, visible } = useReveal();

  return (
    <section className="bg-ds-neutral-50" style={{ padding: "96px 0" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-heading text-[30px] md:text-[40px] font-bold text-ds-neutral-900 tracking-[-0.02em] leading-[1.2] text-center mb-14">
          Live Integrations
        </h2>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
          {INTEGRATIONS.map((item, i) => {
            const Tag = item.href ? "a" : "div";
            const linkProps = item.href
              ? { href: item.href, target: "_blank" as const, rel: "noopener noreferrer" }
              : {};

            return (
              <Tag
                key={item.name}
                {...linkProps}
                className={`bg-white border border-ds-neutral-200 rounded-xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-[2px] transition-all duration-300 cursor-pointer ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{
                  transitionDelay: visible ? `${i * 80}ms` : "0ms",
                  transitionProperty: "opacity, transform, box-shadow",
                  transitionDuration: "500ms, 500ms, 300ms",
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[18px] font-semibold text-ds-neutral-900">{item.name}</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-ds-teal live-dot" />
                    <span className="text-[13px] font-medium text-ds-teal">Live</span>
                  </div>
                </div>
                <ul className="flex flex-col gap-2">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-[14px] text-ds-neutral-500">
                      <Zap size={16} className="text-ds-primary flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </Tag>
            );
          })}
        </div>

        <p className="text-center text-[16px] text-ds-neutral-500 mt-10">
          Custom API integration available for other platforms
        </p>
      </div>
    </section>
  );
};

/* ── CTA Section ─────────────────────────────────────────────────── */
const CTASection: React.FC = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1E3A8A 0%, #0F172A 100%)",
        padding: "96px 0",
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
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(13,148,136,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[600px] mx-auto px-6 text-center">
        <h2 className="font-heading text-[30px] md:text-[40px] font-bold text-white leading-[1.2] mb-5">
          Ready to Protect Your Customers?
        </h2>
        <p className="text-[18px] text-white/70 leading-[1.7] mb-9">
          Join merchants using Parcelis to eliminate shipping headaches and build customer trust.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <Link
            to="/apply"
            className="bg-white text-ds-primary font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-[1px] w-full sm:w-auto text-center"
          >
            Apply Now
          </Link>
        </div>
        <div className="flex items-center justify-center gap-4 text-[13px] text-white/50">
          <span className="flex items-center gap-1.5">
            <CheckCircle size={14} />
            Licensed Insurance Provider
          </span>
          <span aria-hidden="true">·</span>
          <span>Zero Merchant Involvement</span>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksPage;
