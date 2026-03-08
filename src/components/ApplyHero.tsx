import React from "react";
import ParallaxParcels from "./ParallaxParcels";
import ScrollReveal from "./ScrollReveal";

const ApplyHero: React.FC = () => {
  return (
    <div className="relative overflow-x-clip pt-40 pb-32 flex flex-col items-center justify-center text-center" style={{ background: "linear-gradient(135deg, #101155 0%, #1e22aa 50%, #2e32d4 100%)" }}>

      {/* 3D Parcel Background */}
      <ParallaxParcels />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white leading-tight mb-8">
            Apply for PARCELIS
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-light mb-12">
            Start protecting packages and generating profit. Complete the application below to get started.
          </p>
        </ScrollReveal>

      </div>
    </div>
  );
};

export default ApplyHero;
