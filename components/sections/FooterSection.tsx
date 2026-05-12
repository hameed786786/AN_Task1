import React from "react";

const productLinks = [
  "Scale",
  "Developer",
  "API",
  "Pricing",
];

const companyLinks = [
  "About",
  "Benefits",
];

export default function FooterSection() {
  return (
    <footer className="w-full bg-[#f8f8f8] pt-24 pb-14 px-4 md:px-8">
      <div className="max-w-[1280px] mx-auto">

        {/* Top */}
        <div className="flex flex-col lg:flex-row justify-between gap-20">

          {/* Left */}
          <div className="max-w-[520px]">

            {/* Heading */}
            <h2 className="text-[48px] leading-[1.05] tracking-[-0.04em] font-medium text-[#222]">
              Subscribe to Newsletter
            </h2>

            {/* Description */}
            <p className="mt-5 text-[18px] leading-[1.6] text-[#8a8a8a]">
              Get Monthly insights from founders around the globe.
              <br />
              No spam - promise.
            </p>

            {/* Input */}
            <div className="mt-10 h-[72px] rounded-full bg-[#efefef] p-2 flex items-center justify-between">

              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent outline-none border-none px-6 text-[18px] text-[#222] placeholder:text-[#8a8a8a]"
              />

              <button className="h-[56px] px-10 rounded-full bg-black text-white text-[18px] font-medium hover:opacity-90 transition-all duration-300">
                Subscribe
              </button>

            </div>
          </div>

          {/* Right Links */}
          <div className="flex gap-20 md:gap-32">

            {/* Product */}
            <div>
              <h3 className="text-[36px] font-medium tracking-[-0.03em] text-[#222] mb-8">
                Product
              </h3>

              <ul className="space-y-5">
                {productLinks.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[22px] text-[#8a8a8a] hover:text-black transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-[36px] font-medium tracking-[-0.03em] text-[#222] mb-8">
                Company
              </h3>

              <ul className="space-y-5">
                {companyLinks.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[22px] text-[#8a8a8a] hover:text-black transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom */}
        <div className="mt-28 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">

          {/* Logo + Copyright */}
          <div className="flex flex-col md:flex-row md:items-center gap-8">

            {/* Logo */}
            <div className="flex items-center gap-4">

              <img
                src="/footer/logo.png"
                alt="FinBook Logo"
                className="w-[70px] h-[70px] object-contain"
              />

              <div>
                <h4 className="text-[36px] leading-none font-semibold tracking-[-0.04em] text-[#222]">
                  FinBook
                </h4>

                <p className="mt-2 text-[20px] text-[#8a8a8a]">
                  by Anthill Networks
                </p>
              </div>

            </div>

            {/* Divider */}
            <div className="hidden md:block w-[1px] h-[60px] bg-[#d8d8d8]" />

            {/* Copyright */}
            <p className="text-[20px] text-[#9a9a9a]">
              @2026 FinBook. All rights reserved
            </p>

          </div>

          {/* Policies */}
          <div className="flex items-center gap-5 text-[18px] text-[#8a8a8a]">

            <a
              href="#"
              className="hover:text-black transition-colors duration-300"
            >
              Privacy Policy
            </a>

            <span>•</span>

            <a
              href="#"
              className="hover:text-black transition-colors duration-300"
            >
              Terms & Conditions
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}