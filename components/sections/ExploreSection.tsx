import React from "react";

export default function ExploreSection(): React.ReactElement {
  return (
    <section className="w-full bg-white pt-24 pb-20 px-4 sm:px-6 lg:px-12 overflow-x-hidden">
      <div className="mx-auto max-w-[1380px] px-6 md:px-8">

        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-[48px] font-normal font-[var(--font-clash)] leading-[1.3] text-[#111827]">
            Explore the Billing platform
          </h2>
          <h2 className="text-[48px] font-normal font-[var(--font-clash)] leading-[1.3] text-[#111827]">
            Experience in Real Time
          </h2>
        </div>

        {/* CONTAINER WITH OVERFLOW HIDDEN FOR INTERNAL DECORATIVE ELEMENTS */}
        <div className="relative mx-auto w-full max-w-[1188px] h-[830px] bg-gradient-to-br from-white via-white to-[#e3f2ff] rounded-[64px] border border-[#e5e7eb] shadow-[0_10px_30px_rgba(15,23,42,0.08)] overflow-hidden">

          {/* ISSUE FIX: These ellipses are positioned with negative/overflow values - overflow-hidden on parent clips them properly */}
          <div className="absolute pointer-events-none w-[751px] h-[403px] top-[92px] left-[-142px] bg-[rgba(179,209,255,1)] rounded-full blur-[300px] opacity-50 z-0" />

          {/* Ellipse 50 — bottom-right blurred glow - ISSUE: left-[948px] on 1188px container extends beyond */}
          <div className="absolute pointer-events-none w-[751px] h-[403px] top-[542px] left-[948px] bg-[rgba(179,209,255,1)] rounded-full blur-[300px] opacity-50 z-0" />

          {/* Inner white card */}
          <div className="absolute top-[24px] left-[24px] right-[24px] bottom-[96px] bg-white border border-[#e5e7eb] rounded-[40px] shadow-[0_2px_16px_rgba(15,23,42,0.06)] z-[1]" />

          {/* Bottom buttons */}
          <div className="absolute bottom-[24px] left-0 right-0 flex items-center justify-center gap-4 z-[2]">
            <button className="w-[181px] h-[48px] font-semibold bg-black text-white text-[15px] font-medium hover:bg-gray-900 transition-colors rounded-[20px] pt-[15px] pr-[6px] pb-[15px] pl-[6px] border-0 cursor-pointer flex items-center justify-center opacity-100">
              Video
            </button>
            <button className="w-[181px] h-[48px] font-semibold text-[#374151] text-[15px] font-medium hover:text-black transition-colors bg-transparent border-0 cursor-pointer pt-[3px] pr-[6px] pb-[3px] pl-[6px] flex items-center justify-center opacity-100">
              Try a demo
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
