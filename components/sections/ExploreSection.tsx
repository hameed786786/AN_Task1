import React from "react";

export default function ExploreSection(): React.ReactElement {
  return (
    <section className="w-full bg-white pt-24 pb-20 px-4 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-20">
          <h2 className="text-[48px] md:text-[56px] font-normal leading-[1.1] text-[#111827] mb-2">
            Explore the Billing platform
          </h2>
          <p className="text-[32px] md:text-[40px] font-normal leading-[1.2] text-[#111827]">
            Experience in Real Time
          </p>
        </div>
        <div className="relative">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -right-40 -bottom-40 w-[700px] h-[700px] bg-gradient-to-tl from-[#dbeafe] via-[#e0e7ff] to-transparent rounded-full blur-[80px] opacity-50 -z-10" />
          </div>
          <div className="relative bg-white rounded-[36px] border border-[#e5e7eb] shadow-[0_10px_30px_rgba(15,23,42,0.16)]">
            <div className="p-8 md:p-12">
              <div
                className="w-full bg-white rounded-[28px] border border-[#e5e7eb] flex items-center justify-center"
                style={{ aspectRatio: "16/9" }}
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f3f4f6] rounded-full mb-4">
                    <svg
                      className="w-8 h-8 text-[#9ca3af]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                  <p className="text-[#d1d5db] text-sm">Video Content</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pb-8 px-8 md:px-12">
              <button className="px-10 py-3.5 bg-black text-white rounded-full font-medium text-[16px] hover:bg-gray-900 transition-colors whitespace-nowrap">
                Video
              </button>
              <button className="px-8 py-3.5 text-[#374151] font-medium text-[16px] hover:text-black transition-colors">
                Try a demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
