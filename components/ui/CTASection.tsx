import React from "react";

type CTASectionProps = {
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  backgroundImage: string;
};

export default function CTASection({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  backgroundImage,
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-white/55 backdrop-blur-[1px]" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 text-center">
        <h2 className="text-[52px] md:text-[110px] leading-[0.95] tracking-[-0.06em] font-normal text-[#2a2a2a]">
          {title}
        </h2>
        <p className="mt-10 text-[20px] md:text-[26px] leading-[1.6] text-[#5f6675] max-w-[1000px] mx-auto">
          {description}
        </p>
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="h-[78px] px-14 rounded-[20px] bg-black text-white text-[20px] md:text-[24px] font-medium shadow-lg hover:opacity-90 transition-all duration-300">
            {primaryButtonText}
          </button>
          <button className="h-[78px] px-14 rounded-[20px] border border-[#6d6d6d] bg-white/40 backdrop-blur-md text-[#2a2a2a] text-[20px] md:text-[24px] font-medium hover:bg-white/60 transition-all duration-300">
            {secondaryButtonText}
          </button>
        </div>
      </div>
    </section>
  );
}