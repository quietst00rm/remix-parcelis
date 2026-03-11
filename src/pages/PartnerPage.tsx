import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FileText, Share2, BarChart3, DollarSign, ArrowRight, ArrowDown } from "lucide-react";
import PartnerCalculator from "@/components/partner/PartnerCalculator";
import { WhatClientsGet, WhyAgenciesSwitch, IdealPartnerProfile, TrustSignals } from "@/components/partner/PartnerContentSections";
import PartnerFAQ from "@/components/partner/PartnerFAQ";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

/* ─── Fade-up wrapper (scroll-triggered) ─── */
const RevealSection: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
  const { ref, visible } = useScrollReveal(0.1);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
      }}
    >
      {children}
    </div>
  );
};

/* ─── Staggered hero element ─── */
const HeroReveal: React.FC<{ children: React.ReactNode; delay: number; show: boolean }> = ({ children, delay, show }) => (
  <div
    style={{
      opacity: show ? 1 : 0,
      transform: show ? "translateY(0)" : "translateY(20px)",
      transition: `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`,
    }}
  >
    {children}
  </div>
);

/* ─── HERO ─── */
const PartnerHero: React.FC = () => {
  const [show, setShow] = useState(false);
  useEffect(() => { setShow(true); }, []);

  return (
    <section className="relative overflow-hidden -mt-24 pt-24" style={{ border: 'none' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#101155] via-[#1e22aa] to-[#2e32d4] z-0" />
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 py-28 sm:py-32 md:py-40">
        <HeroReveal delay={0} show={show}>
          <span className="inline-block mb-6 px-5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white border border-white/40 bg-white/10 rounded-full">
            Partner Program
          </span>
        </HeroReveal>

        <HeroReveal delay={0.1} show={show}>
          <h1
            className="font-heading font-extrabold text-white leading-tight mb-6 max-w-4xl"
            style={{ fontSize: "clamp(1.875rem, 5vw, 3.5rem)" }}
          >
            Grow Your Agency Revenue.
            <br className="hidden sm:block" /> Protect Your Clients' Shipments.
          </h1>
        </HeroReveal>

        <HeroReveal delay={0.2} show={show}>
          <p className="text-white/80 text-lg sm:text-xl max-w-[700px] mb-10 leading-relaxed">
            Refer merchants to Parcelis and earn $0.10 per insured package across your entire portfolio. Recurring. No cap.
          </p>
        </HeroReveal>

        <HeroReveal delay={0.3} show={show}>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              to="/affiliate-program"
              className="w-full sm:w-auto bg-white text-primary font-semibold rounded-xl px-8 py-3.5 text-base hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 min-h-[44px] inline-flex items-center justify-center gap-2"
            >
              Sign Up
              <ArrowRight size={18} strokeWidth={2.5} />
            </Link>
            <button
              onClick={() => {
                const el = document.getElementById("partner-calculator");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="group w-full sm:w-auto border-2 border-white/30 text-white rounded-xl px-8 py-3.5 font-medium text-base hover:bg-white/10 hover:border-white transition-all duration-200 min-h-[44px] inline-flex items-center justify-center gap-2"
            >
              Revenue Calculator
              <ArrowDown size={18} strokeWidth={2.5} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
            </button>
          </div>
        </HeroReveal>
      </div>

      <div className="h-20 md:h-24 relative z-0" />
    </section>
  );
};

/* ─── STATS BAR ─── */
const stats = [
  { value: "$0.10", label: "Per Insured Package" },
  { value: "43%", label: "Avg. Customer Opt-In Rate" },
  { value: "5–7 Days", label: "Claim Resolution" },
  { value: "$0", label: "Agency Fees or Setup Costs" },
];

const PartnerStatsBar: React.FC = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="relative z-20 -mt-20 md:-mt-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
      }}
    >
      <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.10)] p-8 md:p-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col items-center text-center ${
                i < stats.length - 1 ? "md:border-r md:border-border-gray" : ""
              }`}
            >
              <span className="text-brand font-extrabold text-2xl sm:text-3xl mb-1">{s.value}</span>
              <span className="text-muted-foreground text-sm">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ─── HOW IT WORKS ─── */
const steps = [
  { icon: FileText, title: "Connect", desc: "Reach out to our team to discuss the partner program. We typically respond within 24 hours." },
  { icon: Share2, title: "Refer", desc: "Share your unique partner link or introduce merchants directly. We handle all onboarding." },
  { icon: BarChart3, title: "Track", desc: "Monitor referral activity, insured package volume, and earnings in your partner dashboard." },
  { icon: DollarSign, title: "Earn", desc: "Receive monthly payouts based on insured package volume across your entire referred portfolio." },
];

const PartnerHowItWorks: React.FC = () => (
  <section className="bg-white pt-36 md:pt-44 pb-20 md:pb-28" style={{ border: 'none' }}>
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="font-heading font-extrabold text-brand-900 text-3xl md:text-4xl mb-3">How It Works</h2>
      <p className="text-muted-foreground text-lg mb-16 max-w-xl mx-auto">
        Our simple onboarding process gets you earning in minutes.
      </p>

      <div className="hidden md:block relative">
        <div className="absolute top-7 left-[12.5%] right-[12.5%] h-0.5 bg-border-gray z-0" />
        <div className="grid grid-cols-4 gap-8 relative z-10">
          {steps.map((s) => (
            <div key={s.title} className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-brand text-white flex items-center justify-center mb-5 shadow-md">
                <s.icon size={24} strokeWidth={1.8} />
              </div>
              <h3 className="font-heading font-bold text-text-primary text-lg mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm max-w-[220px]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="md:hidden relative flex flex-col items-center gap-10">
        <div className="absolute top-7 bottom-7 left-1/2 -translate-x-1/2 w-0.5 bg-border-gray z-0" />
        {steps.map((s) => (
          <div key={s.title} className="flex flex-col items-center relative z-10">
            <div className="w-14 h-14 rounded-full bg-brand text-white flex items-center justify-center mb-4 shadow-md">
              <s.icon size={24} strokeWidth={1.8} />
            </div>
            <h3 className="font-heading font-bold text-text-primary text-lg mb-1">{s.title}</h3>
            <p className="text-muted-foreground text-sm max-w-[280px]">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── PAGE ─── */
const PartnerPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Partner Program | Parcelis — Earn Recurring Revenue Referring Merchants</title>
        <meta name="description" content="Parcelis Partner Program. Earn $0.10 per insured package across your entire referred merchant portfolio. Recurring revenue. No cap. No fees." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://www.myparcelis.com/partner-with-us" />
        <meta property="og:title" content="Parcelis Partner Program — Recurring Revenue for Agencies" />
        <meta property="og:description" content="Refer merchants to Parcelis and earn $0.10 per insured package. No cap. No fees. Monthly payouts." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.myparcelis.com/partner-with-us" />
        <meta property="og:image" content="/og-image.png" />
      </Helmet>

      <PartnerHero />
      <PartnerStatsBar />

      <RevealSection><PartnerHowItWorks /></RevealSection>
      <RevealSection><PartnerCalculator /></RevealSection>
      <RevealSection><WhatClientsGet /></RevealSection>
      <RevealSection><WhyAgenciesSwitch /></RevealSection>
      <RevealSection><IdealPartnerProfile /></RevealSection>
      <RevealSection><TrustSignals /></RevealSection>
      <RevealSection><PartnerFAQ /></RevealSection>

      {/* Final CTA */}
      <RevealSection>
        <section
          className="py-20 md:py-28 text-center"
          style={{ background: "linear-gradient(135deg, #101155 0%, #1e22aa 50%, #2e32d4 100%)", border: "none" }}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-extrabold text-white text-3xl md:text-4xl mb-4">
              Ready to Learn More?
            </h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto leading-relaxed">
              See how Parcelis can add a new recurring revenue line to your agency — with zero setup and zero risk.
            </p>
          </div>
        </section>
      </RevealSection>
    </>
  );
};

export default PartnerPage;
