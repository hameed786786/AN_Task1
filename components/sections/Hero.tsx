import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-50 pb-24 flex flex-col items-center text-center min-h-screen">
      <div className="absolute inset-0 -z-10 bg-[#f5f5f5]" />

      <div className="mx-auto w-full max-w-310 px-4 sm:px-6 lg:px-0 z-10 flex flex-col items-center">
        <h1
          style={{ fontFamily: "var(--font-hero)", letterSpacing: "0px" }}
          className="w-full max-w-297 text-[40px] sm:text-[54px] md:text-[76px] leading-[1.1] md:leading-21.5 font-normal text-[#111827]"
        >
          <span className="lg:block">Take Control of Your Finances</span>{" "}
          <span className="lg:block">
            with{" "}
            <span className="text-[#0052FF] font-semibold md:inline-block md:align-baseline md:text-[84px] md:leading-21.5">
              AI
            </span>
            -Powered Billing
          </span>
        </h1>

        <p className="mt-6 text-[16px] sm:text-[18px] md:text-[20px] leading-[1.65] text-[#c2c8d4] max-w-215 text-center">
          Create invoices, track expenses, automate workflows, and gain real-time financial insights<br className="hidden md:block"/>
          — all in one intelligent platform built for modern businesses.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/signup"
            className="inline-flex w-full sm:w-auto items-center justify-center h-12 px-10 text-[15px] font-medium text-white bg-[#0f0f0f] rounded-xl shadow-[0_12px_30px_rgba(0,0,0,0.18)] hover:bg-[#1f1f1f] transition-colors"
          >
            Get Started for free
          </Link>
          <Link
            href="/demo"
            className="inline-flex w-full sm:w-auto items-center justify-center h-12 px-10 text-[15px] font-medium text-[#111827] bg-white border border-[#AAB0BC] rounded-xl shadow-[0_10px_24px_rgba(0,0,0,0.06)] hover:bg-gray-50 transition-colors"
          >
            Book a Demo
          </Link>
        </div>
      </div>
<div className="  w-full px-4 sm:px-6 lg:px-12 bg-white py-12  ">
  <div className="relative mx-auto aspect-[16/9] w-full max-w-[1200px]">
    
    <Image
      src="/dashboard-preview.png"
      alt="FinBook Dashboard Preview"
      fill
      priority
      quality={95}
      className="
        object-contain
        rounded-[34px]
        border border-white
        mt-4
      "
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
    />

  </div>
</div>

    </section>
  );
}
