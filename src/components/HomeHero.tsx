import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Shield, Users, Award, CheckCircle } from "lucide-react";

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
            const eased = 1 - Math.pow(1 - t, 3);
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

const STATS = [
  { icon: Shield, end: 50, prefix: "$", suffix: "M+", label: "Packages Protected" },
  { icon: Users, end: 10, prefix: "", suffix: "K+", label: "Active Merchants" },
  { icon: Award, end: 99, prefix: "", suffix: "%", label: "Satisfaction Rate" },
];

const HomeHero: React.FC = () => {
  return (
    <section
      className="relative overflow-x-clip -mt-[76px]"
      style={{
        background: "linear-gradient(135deg, #0F172A 0%, #1E3A8A 40%, #1E40AF 60%, #172554 100%)",
      }}
    >
      {/* Hero area */}
      <div
        className="relative min-h-[500px] md:min-h-[560px] flex flex-col items-center justify-start pt-[200px] md:pt-[220px] pb-16 md:pb-20"
      >
        {/* Noise overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "256px 256px",
          }}
        />

        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            background: "radial-gradient(ellipse at 60% 50%, rgba(59,130,246,0.15) 0%, transparent 60%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-[800px] mx-auto px-5 sm:px-6 text-center flex flex-col items-center">
          <h1 className="font-heading text-[40px] md:text-[64px] font-bold text-white leading-[1.1] tracking-[-0.03em] mb-6">
            Deliver Confidence with Every Shipment.
          </h1>

          <p className="max-w-[620px] text-[16px] md:text-[18px] text-white/75 leading-[1.7] mb-9">
            A tech-enabled package protection platform that keeps customers happy, support teams
            unburdened, and your brand reputation intact — powered by InsureShip.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-6 w-full sm:w-auto">
            <a
              href="https://apps.shopify.com/parcelis"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#1E3A8A] font-semibold text-[17px] px-9 py-4 rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.15)] hover:shadow-xl transition-all duration-200 hover:-translate-y-[1px] active:translate-y-0 w-full sm:w-auto text-center"
            >
              Get Parcelis
            </a>
            <Link
              to="/how-it-works"
              className="border-2 border-white/30 text-white font-medium text-[17px] px-9 py-4 rounded-xl transition-all duration-200 hover:border-white hover:bg-white/10 hover:-translate-y-[1px] active:translate-y-0 w-full sm:w-auto text-center"
            >
              See How It Works
            </Link>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-2 text-[14px] text-white/45">
            <CheckCircle size={16} className="text-ds-teal" />
            <span>Trusted by 10,000+ merchants</span>
          </div>

          {/* Spacer to push content toward upper-center */}
          <div className="flex-grow" />
        </div>

      </div>

      {/* Stats bar */}
      <div className="relative z-20 -mt-12 pb-8 px-5 sm:px-6">
        <div className="max-w-[900px] mx-auto bg-white rounded-2xl px-6 py-8 md:px-12 md:py-10" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.05)" }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
            {STATS.map((stat, i) => (
              <StatItem key={stat.label} stat={stat} showDivider={i < STATS.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

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
          ? "md:border-r md:border-ds-neutral-200 pb-6 md:pb-0"
          : ""
      }`}
    >
      {/* Mobile horizontal divider */}
      {showDivider && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60px] h-px bg-ds-neutral-200 md:hidden" />
      )}
      <Icon size={24} className="text-ds-teal mb-3" />
      <span className="font-heading text-[40px] md:text-[48px] font-bold text-ds-primary leading-none mb-1">
        {stat.prefix}
        {value}
        {stat.suffix}
      </span>
      <span className="text-[13px] text-ds-neutral-500 uppercase tracking-[0.05em] font-medium">
        {stat.label}
      </span>
    </div>
  );
};

export default HomeHero;
