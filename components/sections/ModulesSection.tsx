import React from "react";
import Image from "next/image";

const modules = [
  {
    title: "FINANCE",
    items: ["Invoices", "Bills", "Expenses", "Payments"],
    bgImage: "/bg-images/bg-img1.png",
  },
  {
    title: "MANAGE",
    items: ["Customers", "Vendors", "Products", "Price Lists"],
    bgImage: "/bg-images/bg-img1.png",
  },
  {
    title: "OPERATIONS",
    items: ["Tax (GST)", "Banking", "Audit Logs", "Data Import/Export"],
    bgImage: "/bg-images/bg-img1.png",
  },
];

export default function ModulesSection() {
  return (
    <section className="relative w-full px-4 py-10 md:px-8 overflow-hidden">

      {/* MAIN CONTAINER */}
      <div
        className="
          relative
          mx-auto
          max-w-[1500px]
          overflow-hidden
          rounded-[42px]
          bg-[#B3D1FF]
          px-5
          pb-[48px]
          pt-[56px]
          md:px-[60px]
        "
      >

        {/* TITLE */}
        <div className="mb-12 text-center">

          <h2
            className="
              font-[var(--font-clash)]
              text-[38px]
              font-normal
              leading-[1.05]
              tracking-[-0.04em]
              text-[#1A1A1A]
              md:text-[52px]
            "
          >
            A complete billing and
            <br />
            accounting system
          </h2>

          <p
            className="
              mt-5
              font-[var(--font-clash)]
              text-[16px]
              leading-[1.55]
              text-[#5B6473]
            "
          >
            Structured modules designed to manage
            <br />
            every financial operation efficiently.
          </p>

        </div>

        {/* DASHBOARD IMAGE */}
        <div className="relative z-20 mb-12 flex justify-center">

          <div
            className="
              relative
              w-full
              max-w-[1245px]
              aspect-[1245/722]
              overflow-hidden
              rounded-[34px]
              border-[5px]
              border-[#dce9ff]
              shadow-[0_35px_90px_rgba(15,23,42,0.22)]
              bg-white
            "
          >

            <Image
              src="/dashboard.png"
              alt="Dashboard Preview"
              fill
              priority
              quality={95}
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 1245px"
            />

          </div>

        </div>

        {/* MODULE CARDS */}
        <div className="mt-2 flex flex-wrap justify-center gap-6">

          {modules.map((module) => (
            <div
              key={module.title}
              className="
                relative
                w-[396px]
                h-[360px]
                overflow-hidden
                rounded-[24px]
                bg-[#DCE5FF]
                px-[40px]
                pt-[48px]
                shadow-[0_8px_30px_rgba(0,0,0,0.04)]
              "
            >

              {/* BG IMAGE */}
              <Image
                src={module.bgImage}
                alt={module.title}
                fill
                className="
                  absolute
                  inset-0
                  object-cover
                  opacity-90
                "
                sizes="310px"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-[#DCE5FF]/70" />

              {/* CONTENT */}
              <div className="relative z-10">

                {/* TITLE */}
                <h3
                  className="
                    font-[var(--font-clash)]
                    text-[20px]
                    font-semibold
                    tracking-[0.22em]
                    text-black
                  "
                >
                  {module.title}
                </h3>

                {/* ITEMS */}
                <ul className="mt-12 space-y-7">

                  {module.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-4"
                    >

                      {/* ICON */}
                      <div
                        className="
                          flex
                          h-[28px]
                          w-[28px]
                          items-center
                          justify-center
                          rounded-full
                          border-2
                          border-[#6C63FF]
                          bg-white
                        "
                      >

                        <svg
                          className="h-[13px] w-[13px] text-[#6C63FF]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>

                      </div>

                      {/* TEXT */}
                      <span
                        className="
                          font-[var(--font-clash)]
                          text-[19px]
                          text-[#111111]
                        "
                      >
                        {item}
                      </span>

                    </li>
                  ))}

                </ul>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}