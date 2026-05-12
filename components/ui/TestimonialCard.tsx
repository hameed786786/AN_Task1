import React from "react";

type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
  company: string;
  icon: string;
};

export default function TestimonialCard({
  quote,
  name,
  role,
  company,
  icon,
}: TestimonialCardProps) {
  return (
    <div className="w-[430px] min-h-[260px] rounded-[18px] border border-[#ececec] bg-white px-10 py-10 flex flex-col justify-between shadow-[0_8px_24px_rgba(15,23,42,0.12)]">

      {/* Quote */}
      <p className="text-[30px] leading-[1.35] tracking-[-0.03em] text-[#1f2740] text-center font-medium">
        {quote}
      </p>

      {/* User */}
      <div className="mt-10 text-center">
        <h4 className="text-[24px] font-semibold text-[#1f2740]">
          {name}
          <span className="font-normal text-[#444]">
            , {role}
          </span>
        </h4>

        <div className="mt-4 flex items-center justify-center gap-3">
          <img
            src={icon}
            alt={company}
            className="w-[30px] h-[30px] object-contain"
          />

          <span className="text-[15px] text-[#666]">
            {company}
          </span>
        </div>
      </div>

    </div>
  );
}