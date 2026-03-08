import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Shield, Users, Award, CheckCircle } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Animated counter hook – fires once on intersection                */
/* ------------------------------------------------------------------ */
function useCountUp(end: number, duration = 1500) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
            setValue(Math.floor(end * eased));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return { value, ref };
}

/* ------------------------------------------------------------------ */
/*  Stats data                                                        */
/* ------------------------------------------------------------------ */
const STATS = [
  { icon: Shield, end: 50, prefix: "$", suffix: "M+", label: "Packages Protected" },
  { icon: Users, end: 10, prefix: "", suffix: "K+", label: "Active Merchants" },
  { icon: Award, end: 99, prefix: "", suffix: "%", label: "Satisfaction Rate" },
];

/* ------------------------------------------------------------------ */
/*  HomeHero                                                          */
/* ------------------------------------------------------------------ */
const HomeHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden -mt-[76px]">
      {/* ── Hero area ────────────────────────────────────────────── */}
      <div
        className="relative min-h-[600px] sm:min-h-[500px] flex flex-col items-center justify-center pt-[76px] pb-32 md:pb-40"
        style={{
          background: "linear-gradient(135deg, #0F172A 0%, #1E3A8A 50%, #172554 100%)",
        }}
      >
        {/* Noise / grain overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "256px 256px",
          }}
        />

        {/* Radial glow – offset right */}
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 65% 40%, rgba(59,130,246,0.15) 0%, transparent 70%)",
          }}
        />

        {/* ── Content ────────────────────────────────────────────── */}
        <div className="relative z-10 max-w-[720px] mx-auto px-6 text-center flex flex-col items-center">
          {/* Headline */}
          <h1 className="font-heading text-[40px] md:text-[64px] font-bold text-white leading-[1.1] tracking-[-0.03em] mb-5">
            Deliver Confidence with Every Shipment.
          </h1>

          {/* Subtext */}
          <p className="max-w-[580px] text-[16px] md:text-[18px] text-white/80 leading-[1.7] mb-9">
            A tech-enabled package protection platform that keeps customers happy, support teams
            unburdened, and your brand reputation intact — powered by InsureShip.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
            <Link
              to="/apply"
              className="bg-white text-ds-primary font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-[1px] active:translate-y-0 hero-cta-glow"
            >
              Protect Your Customers Today
            </Link>
            <Link
              to="/how-it-works"
              className="border-2 border-white/30 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-200 hover:border-white hover:bg-white/10 hover:-translate-y-[1px] active:translate-y-0"
            >
              See How It Works
            </Link>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-2 text-[14px] text-white/50">
            <CheckCircle size={16} className="text-ds-teal" />
            <span>Trusted by 10,000+ merchants</span>
          </div>
        </div>

        {/* ── Bottom curve ───────────────────────────────────────── */}
        <div className="absolute bottom-0 left-0 right-0 z-[2]">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            preserveAspectRatio="none"
            className="w-full h-[40px] md:h-[60px] block"
          >
            <path
              d="M0,60 L0,20 Q720,60 1440,20 L1440,60 Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      {/* ── Stats bar (overlapping) ──────────────────────────────── */}
      <div className="relative z-20 -mt-10 md:-mt-14 pb-8 px-6">
        <div className="max-w-[900px] mx-auto bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] px-8 py-8 md:px-12 md:py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
            {STATS.map((stat, i) => (
              <StatItem key={stat.label} stat={stat} showDivider={i < STATS.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/*  Stat item with counter                                            */
/* ------------------------------------------------------------------ */
interface StatItemProps {
  stat: (typeof STATS)[number];
  showDivider: boolean;
}

const StatItem: React.FC<StatItemProps> = ({ stat, showDivider }) => {
  const { value, ref } = useCountUp(stat.end, 1500);
  const Icon = stat.icon;

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center text-center relative ${
        showDivider
          ? "md:border-r md:border-ds-neutral-200 border-b md:border-b-0 border-ds-neutral-200 pb-8 md:pb-0"
          : ""
      }`}
    >
      <Icon size={24} className="text-ds-teal mb-3" />
      <span className="font-heading text-[48px] font-bold text-ds-primary leading-none mb-1">
        {stat.prefix}
        {value}
        {stat.suffix}
      </span>
      <span className="text-[14px] text-ds-neutral-500 uppercase tracking-[0.04em] font-medium">
        {stat.label}
      </span>
    </div>
  );
};

export default HomeHero;
