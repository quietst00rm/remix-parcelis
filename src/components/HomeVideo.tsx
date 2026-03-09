import React from "react";

const HomeVideo: React.FC = () => {
  return (
    <section
      className="py-14 md:py-24"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.03) 0%, transparent 50%), #F8FAFC",
      }}
    >
      <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center">
        <span className="inline-block text-[13px] font-medium uppercase tracking-[0.04em] text-ds-teal mb-4">
          See It in Action
        </span>
        <h2 className="font-heading text-[30px] md:text-[40px] font-bold text-ds-neutral-900 leading-[1.2] tracking-[-0.02em] mb-12 md:mb-14">
          How Parcelis Works
        </h2>

        <div
          className="relative rounded-2xl overflow-hidden shadow-lg"
          style={{ aspectRatio: "16 / 9" }}
        >
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/TkN1HsoIGhc?modestbranding=1&rel=0&controls=0&showinfo=0&si=2EMEJXldSbsiFQBq"
            title="How Parcelis Works"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            loading="lazy"
            style={{ border: 0 }}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeVideo;
