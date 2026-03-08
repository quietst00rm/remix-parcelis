import React from "react";
import uspsLogo from "@/assets/carriers/usps.png";
import upsLogo from "@/assets/carriers/ups.png";
import fedexLogo from "@/assets/carriers/fedex.png";
import dhlLogo from "@/assets/carriers/dhl.png";

const CARRIERS = [
  { src: uspsLogo, alt: "USPS" },
  { src: upsLogo, alt: "UPS" },
  { src: fedexLogo, alt: "FedEx" },
  { src: dhlLogo, alt: "DHL" },
];

const HomeCarriers: React.FC = () => {
  return (
    <section
      className="relative py-14 md:py-24"
      style={{
        background: "radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.03) 0%, transparent 50%), #F8FAFC",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 text-center">
        <h2 className="font-heading text-[30px] md:text-[40px] font-bold text-ds-neutral-900 tracking-[-0.02em] leading-[1.2] mb-4">
          All Major Carriers Covered
        </h2>
        <p className="font-dm text-[16px] md:text-[18px] text-ds-neutral-500 leading-[1.7] max-w-[620px] mx-auto mb-14">
          Comprehensive protection across USPS, UPS, FedEx, DHL, and all regional and international carriers.
        </p>

        {/* Desktop: row, Mobile: 2x2 grid */}
        <div className="hidden sm:flex flex-wrap justify-center items-center gap-14">
          {CARRIERS.map((c) => (
            <div
              key={c.alt}
              className="transition-all duration-300"
              style={{ filter: "grayscale(100%)", opacity: 0.45 }}
              onMouseEnter={(e) => { e.currentTarget.style.filter = "grayscale(0%)"; e.currentTarget.style.opacity = "1"; }}
              onMouseLeave={(e) => { e.currentTarget.style.filter = "grayscale(100%)"; e.currentTarget.style.opacity = "0.45"; }}
            >
              <img src={c.src} alt={`${c.alt} logo`} className="h-[44px] w-auto object-contain" />
            </div>
          ))}
        </div>

        {/* Mobile: 2x2 grid */}
        <div className="grid grid-cols-2 gap-6 justify-items-center sm:hidden">
          {CARRIERS.map((c) => (
            <div key={c.alt} style={{ filter: "grayscale(100%)", opacity: 0.45 }}>
              <img src={c.src} alt={`${c.alt} logo`} className="h-[44px] w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCarriers;
