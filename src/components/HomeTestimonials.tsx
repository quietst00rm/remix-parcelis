import React from "react";

const HomeTestimonials: React.FC = () => {
  return (
    <section
      className="relative py-14 md:py-24"
      style={{
        background: "radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.03) 0%, transparent 50%), #F8FAFC",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
        <h2 className="font-heading text-[30px] md:text-[40px] font-bold text-ds-neutral-900 tracking-[-0.02em] leading-[1.2] text-center mb-14">
          Trusted by Growing Brands
        </h2>

        <div className="max-w-[680px] mx-auto">
          <div className="bg-white rounded-[20px] p-8 sm:p-10 md:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.06)] relative">
            <span
              className="absolute top-4 sm:top-6 left-6 sm:left-8 font-heading text-[80px] leading-none text-ds-teal select-none pointer-events-none"
              style={{ opacity: 0.15 }}
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <p className="font-dm text-[16px] sm:text-[18px] italic text-ds-neutral-700 leading-[1.8] mt-8 mb-6">
              "Our customer service team used to spend hours dealing with lost package claims. Now with PARCELIS, those issues are handled automatically and our customers are happier than ever."
            </p>

            <div className="flex items-center gap-3 pt-6 border-t border-ds-neutral-200">
              <div
                className="w-12 h-12 rounded-full bg-ds-primary flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                style={{
                  border: "3px solid white",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
              >
                S
              </div>
              <div>
                <p className="text-[16px] font-semibold text-ds-neutral-900">Sarah Chen</p>
                <p className="text-[14px] text-ds-neutral-500">Founder &amp; CEO, ModernGoods</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
