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
    <section className="bg-ds-neutral-50" style={{ padding: "80px 0" }}>
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <h2 className="font-heading text-[30px] md:text-[40px] font-bold text-ds-neutral-900 tracking-[-0.02em] leading-[1.2] mb-4">
          All Major Carriers Covered
        </h2>
        <p className="text-[18px] text-ds-neutral-500 leading-[1.7] max-w-[640px] mx-auto mb-14">
          Comprehensive protection across USPS, UPS, FedEx, DHL, and all regional and international carriers.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {CARRIERS.map((c) => (
            <div
              key={c.alt}
              className="h-10 md:h-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img src={c.src} alt={c.alt} className="h-full w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCarriers;
