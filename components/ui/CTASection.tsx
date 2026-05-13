import React from "react";
import Image from "next/image";

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
    <section className="relative overflow-hidden py-[120px] md:py-[150px]">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">

        <Image
          src={backgroundImage}
          alt="Background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

      </div>

      {/* LIGHT OVERLAY */}
      <div className="absolute inset-0 bg-white/52" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-[1280px] px-4 text-center">

        {/* TITLE */}
        <h2
          className="
            font-[var(--font-clash)]
            text-[54px]
            sm:text-[72px]
            md:text-[88px]
            lg:text-[96px]
            leading-[0.98]
            tracking-[-0.06em]
            font-normal
            text-[#2A2A2A]
            max-w-[1100px]
            mx-auto
          "
        >
          {title}
        </h2>

        {/* DESCRIPTION */}
        <p
          className="
            mt-7
            max-w-[760px]
            mx-auto
            font-[var(--font-clash)]
            text-[18px]
            md:text-[22px]
            leading-[1.55]
            tracking-[-0.02em]
            text-[#667085]
          "
        >
          {description}
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

          {/* PRIMARY BUTTON */}
          <button
            className="
              w-[244px]
              h-[53px]
              rounded-[14px]
              bg-black
              text-white
              text-[16px]
              md:text-[18px]
              font-medium
              font-[var(--font-clash)]
              shadow-[0_10px_30px_rgba(0,0,0,0.12)]
              transition-all
              duration-300
              hover:opacity-90
              flex
              items-center
              justify-center
            "
          >
            {primaryButtonText}
          </button>

          {/* SECONDARY BUTTON */}
          <button
            className="
              w-[244px]
              h-[53px]
              rounded-[14px]
              border
              border-[#7A7A7A]
              bg-white/35
              backdrop-blur-md
              text-[#2A2A2A]
              text-[16px]
              md:text-[18px]
              font-medium
              font-[var(--font-clash)]
              transition-all
              duration-300
              hover:bg-white/50
              flex
              items-center
              justify-center
            "
          >
            {secondaryButtonText}
          </button>

        </div>

      </div>

    </section>
  );
}