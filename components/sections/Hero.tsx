import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[linear-gradient(145deg,#B3D1FF_0%,#B3D1FF_20%,#FFFFFF_50%)]
        pt-[190px]
        min-h-[1180px]
        w-full
      "
    >

      {/* DECORATIVE BLUR - CLIPPED TO CONTAINER */}
      <div
        className="
          absolute
          w-[407px]
          h-[1181px]
          top-[-66px]
          left-[-337px]
          bg-gradient-to-br
          from-[#B3D1FF]
          to-transparent
          rounded-full
          blur-[80px]
          opacity-100
          -z-10
          pointer-events-none
        "
        style={{ transform: 'rotate(45deg)' }}
      />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1500px] flex-col items-center px-4 text-center sm:px-6 lg:px-8">

        {/* HEADING */}
        <h1
          className="
            max-w-[1450px]
            text-center
            font-[var(--font-clash)]
            font-normal
            text-[#1f1f1f]
            text-[44px]
            sm:text-[58px]
            md:text-[76px]
            leading-[86px]
            tracking-[-3px]
          "
        >

          {/* LINE 1 */}
          <span className="block">
            Take Control of Your Finances
          </span>

          {/* LINE 2 */}
          <span className="block">

            with{" "}

            {/* AI BOX */}
            <span
              className="
                relative
                mx-[8px]
                inline-flex
                h-[85px]
                w-[153px]
                items-center
                justify-center
                align-middle
                bg-white
              "
            >

              {/* BORDER */}
              <span className="absolute inset-0 border-[2px] border-[#8BB3FF]" />

              {/* HANDLES */}
              <span className="absolute -left-[5px] -top-[5px] h-[12px] w-[12px] border-[2px] border-[#8BB3FF] bg-white" />

              <span className="absolute -right-[5px] -top-[5px] h-[12px] w-[12px] border-[2px] border-[#8BB3FF] bg-white" />

              <span className="absolute -bottom-[5px] -left-[5px] h-[12px] w-[12px] border-[2px] border-[#8BB3FF] bg-white" />

              <span className="absolute -bottom-[5px] -right-[5px] h-[12px] w-[12px] border-[2px] border-[#8BB3FF] bg-white" />

              {/* AI TEXT */}
              <span
                className="
                  relative
                  z-10
                  font-[var(--font-clash)]
                  font-bold
                  text-[84px]
                  leading-[86px]
                  tracking-[-3px]
                  text-[#0052FF]
                "
              >
                AI
              </span>

            </span>

            <span className="font-[var(--font-clash)] text-[84px] leading-[86px] tracking-[-3px]">
              -Powered Billing
            </span>

          </span>

        </h1>

        {/* DESCRIPTION */}
        <p
          className="
            mt-8
            max-w-[1050px]
            font-[var(--font-clash)]
            font-normal
            text-[20px]
            leading-[140%]
            tracking-[0]
            text-center
            text-[#b6bcc8]
          "
        >
          Create invoices, track expenses, automate workflows, and gain
          real-time financial insights
          <br className="hidden md:block" />
          — all in one intelligent platform built for modern businesses.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

          {/* PRIMARY BUTTON */}
          <Link
            href="/signup"
            className="
              inline-flex
              items-center
              justify-center
              w-[244px]
              h-[53px]
              rounded-[12px]
              bg-[#111111]
              px-[36px]
              font-[var(--font-poppins)]
              font-medium
              text-[16px]
              text-white
              transition-all
              duration-300
              hover:bg-black
            "
          >
            Get Started for free
          </Link>

          {/* SECONDARY BUTTON */}
          <Link
            href="/demo"
            className="
              inline-flex
              items-center
              justify-center
              w-[192px]
              h-[53px]
              rounded-[12px]
              border
              border-[#b8bec8]
              bg-white
              px-[36px]
              font-[var(--font-poppins)]
              font-medium
              text-[16px]
              text-[#1f1f1f]
              transition-all
              duration-300
              hover:bg-[#fafafa]
            "
          >
            Book a Demo
          </Link>

        </div>

      </div>

      {/* DASHBOARD IMAGE */}
      <div
        className="
          absolute
          left-1/2
          bottom-[-100px]
          z-20
          w-full
          max-w-[1320px]
          -translate-x-1/2
          px-4
          
        "
      >

        <div className="relative aspect-[16/9] w-full">

          <Image
            src="/dashboard-preview.png"
            alt="Dashboard Preview"
            fill
            priority
            className="
              object-contain
              drop-shadow-[0_40px_80px_rgba(0,0,0,0.12)]
            "
            sizes="(max-width: 768px) 100vw, 1320px"
          />

        </div>

      </div>

    </section>
  );
}