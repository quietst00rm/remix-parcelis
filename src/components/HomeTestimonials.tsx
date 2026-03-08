import React from "react";

/* TODO: Add more testimonials to fill a 3-column grid */

const HomeTestimonials: React.FC = () => {
  return (
    <section className="bg-ds-neutral-50" style={{ padding: "96px 0" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-heading text-[30px] md:text-[40px] font-bold text-ds-neutral-900 tracking-[-0.02em] leading-[1.2] text-center mb-14">
          Trusted by Growing Brands
        </h2>

        {/* Single featured testimonial – centered */}
        <div className="max-w-[700px] mx-auto">
          <div className="bg-white rounded-2xl p-10 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.06)] relative">
            {/* Decorative quote mark */}
            <span
              className="absolute top-6 left-8 font-heading text-[72px] leading-none text-ds-teal select-none pointer-events-none"
              style={{ opacity: 0.2 }}
              aria-hidden="true"
            >
              &ldquo;
            </span>

            {/* Quote */}
            <p className="text-[18px] italic text-ds-neutral-700 leading-[1.7] mt-8 mb-6">
              "Our customer service team used to spend hours dealing with lost package claims. Now with PARCELIS, those issues are handled automatically and our customers are happier than ever."
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-6 border-t border-ds-neutral-200">
              <div className="w-12 h-12 rounded-full bg-ds-primary flex items-center justify-center text-white font-bold text-lg flex-shrink-0 border-2 border-white shadow-sm">
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
