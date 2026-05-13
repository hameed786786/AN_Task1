import React from "react";
import Image from "next/image";

const plans = [
  {
    title: "Basic",
    subtitle: "For freelancers and small teams",
    price: "$34",
    icon: "/pricing/basic.png",
    features: [
      "Invoice creation",
      "Expense tracking",
      "Basic reports",
      "Up to 100 invoices/mo",
      "Email support",
    ],
    highlighted: false,
  },
  {
    title: "Business",
    subtitle: "For growing teams and businesses",
    price: "$56",
    icon: "/pricing/business.png",
    badge: "Best offer",
    features: [
      "Full billing system",
      "Automation workflows",
      "Advanced reports",
      "AI features",
      "Unlimited invoices",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    title: "Enterprise",
    subtitle: "Unleash the Power of Your Business with Pro Plan.",
    price: "Custom",
    icon: "/pricing/enterprise.png",
    features: [
      "Custom workflows",
      "Advanced analytics",
      "Multi-organization support",
      "Dedicated support",
      "Custom integrations",
      "SLA guarantee",
    ],
    highlighted: false,
  },
];

export default function PricingSection() {
  return (
    <section className="w-full bg-white py-20 px-4 md:px-8">
      <div className="max-w-[1380px] mx-auto px-4 md:px-8">

        {/* HEADING */}
        <div className="mb-14 text-center">

          <h2
            className="
              font-[var(--font-clash)]
              text-[42px]
              md:text-[64px]
              leading-[1]
              tracking-[-0.05em]
              text-[#1f2740]
            "
          >
            Simple, transparent pricing for
            <br />
            every business
          </h2>

          <p
            className="
              mt-5
              text-[16px]
              leading-[1.6]
              text-[#727b8f]
              font-[var(--font-clash)]
            "
          >
            Flexible plans designed to scale with your financial needs.
          </p>

        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">

          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`
                relative overflow-hidden rounded-[22px]
                border border-[#e6e8f0]
                min-h-[590px]
                px-7 pt-7 pb-6
                shadow-[0_2px_6px_rgba(15,23,42,0.06),0_10px_20px_rgba(15,23,42,0.04)]
                transition-all duration-300
                ${
                  plan.highlighted
                    ? "bg-[#bcc9ff]"
                    : "bg-white"
                }
              `}
            >

              {/* BACKGROUND SHAPES */}
              {plan.highlighted && (
                <>
                  <div className="absolute top-[-8%] right-[-34%] w-[92%] h-[138%] rounded-full bg-white/18 border border-white/10" />
                  <div className="absolute bottom-[-8%] left-[-10%] w-[180px] h-[180px] rounded-full bg-white/20 blur-[1px]" />
                </>
              )}

              <div className="relative z-10 flex flex-col h-full">

                {/* ICON */}
                <div
                  className={`
                    mb-10 flex items-center justify-center
                    rounded-[18px]
                    ${
                      plan.highlighted
                        ? "bg-white/90"
                        : "bg-[#6f83ff]"
                    }
                    w-[64px] h-[64px]
                  `}
                >

                  <Image
                    src={plan.icon}
                    alt={plan.title}
                    width={32}
                    height={32}
                    className="w-[32px] h-[32px] object-contain"
                  />

                </div>

                {/* TITLE */}
                <div className="flex items-center gap-3 mb-3">

                  <h3
                    className="
                      font-[var(--font-clash)]
                      text-[24px]
                      leading-none
                      tracking-[-0.03em]
                      font-semibold
                      text-[#1f2740]
                    "
                  >
                    {plan.title}
                  </h3>

                  {plan.badge && (
                    <span
                      className="
                        h-[22px]
                        px-3
                        rounded-[7px]
                        bg-black
                        text-white
                        text-[10px]
                        font-medium
                        flex
                        items-center
                        justify-center
                      "
                    >
                      {plan.badge}
                    </span>
                  )}

                </div>

                {/* SUBTITLE */}
                <p
                  className="
                    text-[15px]
                    leading-[1.6]
                    text-[#727b8f]
                    max-w-[260px]
                    font-[var(--font-clash)]
                  "
                >
                  {plan.subtitle}
                </p>

                {/* PRICE */}
                <div className="mt-9 flex items-end gap-2">

                  <span
                    className="
                      font-[var(--font-clash)]
                      text-[58px]
                      leading-none
                      tracking-[-0.05em]
                      font-semibold
                      text-[#1f2740]
                    "
                  >
                    {plan.price}
                  </span>

                  {plan.price !== "Custom" && (
                    <span
                      className="
                        text-[15px]
                        text-[#727b8f]
                        mb-[8px]
                        font-[var(--font-clash)]
                      "
                    >
                      per month
                    </span>
                  )}

                </div>

                {/* DIVIDER */}
                <div className="w-full h-[1px] bg-[#dfe3ee] mt-8 mb-8" />

                {/* FEATURES */}
                <ul className="space-y-5 flex-1">

                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="
                        text-[15px]
                        leading-[1.5]
                        text-[#232b45]
                        font-medium
                        font-[var(--font-clash)]
                      "
                    >
                      {feature}
                    </li>
                  ))}

                </ul>

                {/* BUTTON */}
                <button
                  className={`
                    mt-9 h-[52px] w-full rounded-[12px]
                    border text-[15px] font-medium
                    transition-all duration-300
                    font-[var(--font-clash)]
                    ${
                      plan.highlighted
                        ? "bg-[#1d2550] border-[#1d2550] text-white hover:opacity-95"
                        : "bg-white border-[#b9c0d1] text-[#202020] hover:bg-[#fafafa]"
                    }
                  `}
                >
                  Get Started
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}