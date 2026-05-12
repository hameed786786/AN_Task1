import React from "react";

type FeatureCardProps = {
  title: string;
  description: string;
  image: string;
  className?: string;
  imageClassName?: string;
};

export default function FeatureCard({
  title,
  description,
  image,
  className,
  imageClassName,
}: FeatureCardProps) {
  return (
    <div
      className={`
        overflow-hidden
        rounded-[28px]
        border border-[#e7e7e7]
        bg-white
        shadow-[0_4px_12px_rgba(15,23,42,0.05)]
        flex flex-col
        ${className}
      `}
    >

      {/* Content */}
      <div className="px-8 pt-7 shrink-0">
        <h3 className="text-[26px] leading-[1.05] tracking-[-0.04em] font-medium text-[#222]">
          {title}
        </h3>

        <p className="mt-4 text-[16px] leading-[1.55] text-[#4f4f4f] max-w-[420px]">
          {description}
        </p>
      </div>

      {/* Image */}
      <div className="mt-auto w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className={`w-full object-cover object-top ${imageClassName}`}
        />
      </div>

    </div>
  );
}