import React from "react";
import Image from "next/image";

type FeatureCardProps = {
  title: string;
  description: string;
  image: string;
  className?: string;
  imageClassName?: string;
  reverseLayout?: boolean;
  horizontalLayout?: boolean;
};

export default function FeatureCard({
  title,
  description,
  image,
  className,
  imageClassName,
  reverseLayout = false,
  horizontalLayout = false,
}: FeatureCardProps) {
  const textContent = (
    <div className={`px-6 pt-7 shrink-0 ${reverseLayout ? 'pb-3' : ''} ${horizontalLayout ? 'flex-1' : ''}`}>
      <h3 className="text-[26px] leading-[1.05] tracking-[-0.04em] font-medium text-[#222]">
        {title}
      </h3>

      <p className={`mt-4 text-[16px] leading-[1.55] text-[#4f4f4f] max-w-[420px] ${reverseLayout ? 'mb-3' : ''}`}>
        {description}
      </p>
    </div>
  );

  const imageContent = (
    <div className={`${horizontalLayout ? 'w-1/2' : 'w-full'} overflow-hidden relative ${horizontalLayout ? '' : 'flex-1'}`}>
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        className={`object-contain object-center ${imageClassName}`}
      />
    </div>
  );

  return (
    <div
      className={`
        
        rounded-[28px]
        border border-[#e7e7e7]
        bg-white
        shadow-[0_4px_12px_rgba(15,23,42,0.05)]
        flex ${horizontalLayout ? 'flex-row' : 'flex-col'}
        ${className}
      `}
    >
      {horizontalLayout ? (
        <>
          {textContent}
          {imageContent}
        </>
      ) : reverseLayout ? (
        <>
          {imageContent}
          {textContent}
        </>
      ) : (
        <>
          {textContent}
          {imageContent}
        </>
      )}
    </div>
  );
}