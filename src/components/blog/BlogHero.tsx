const BlogHero = () => {
  return (
    <section
      className="relative overflow-x-clip -mt-[76px] w-full"
      style={{
        background: "linear-gradient(135deg, #0F172A 0%, #1E3A8A 50%, #172554 100%)",
      }}
    >
      {/* Noise texture */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 65% 40%, rgba(59,130,246,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[720px] mx-auto px-6 text-center pt-[200px] md:pt-[220px] pb-20 md:pb-24">
        <h1 className="font-heading text-[40px] md:text-[64px] font-bold text-white leading-[1.1] tracking-[-0.03em] mb-4">
          Parcelis Blog
        </h1>
        <p className="text-[16px] md:text-[18px] text-white/70 leading-[1.7] max-w-[580px] mx-auto">
          Shipping protection insights for Shopify merchants
        </p>
      </div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 right-0 z-[2]">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px] block">
          <path d="M0,60 L0,20 Q720,60 1440,20 L1440,60 Z" fill="#F8FAFC" />
        </svg>
      </div>
    </section>
  );
};

export default BlogHero;
