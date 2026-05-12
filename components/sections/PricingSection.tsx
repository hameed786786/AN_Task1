import React from "react";

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
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">

          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`
                relative overflow-hidden rounded-[22px]
                border border-[#e6e8f0]
                min-h-[590px]
                px-5 pt-5 pb-6
                shadow-[0_2px_6px_rgba(15,23,42,0.06),0_10px_20px_rgba(15,23,42,0.04)]
                transition-all duration-300
                ${
                  plan.highlighted
                    ? "bg-[#bcc9ff]"
                    : "bg-white"
                }
              `}
            >
              {plan.highlighted && (
                <>
                  <div className="absolute top-[-8%] right-[-34%] w-[92%] h-[138%] rounded-full bg-white/18 border border-white/10" />
                  <div className="absolute bottom-[-8%] left-[-10%] w-[180px] h-[180px] rounded-full bg-white/20 blur-[1px]" />
                </>
              )}

              <div className="relative z-10 flex flex-col h-full">
<div
  className={`
    mb-8 flex items-center justify-center
    rounded-[16px]
    ${
      plan.highlighted
        ? "bg-white/90"
        : "bg-[#6f83ff]"
    }
    w-[54px] h-[54px]
  `}
>
  <img
    src={plan.icon}
    alt={plan.title}
    className="w-[28px] h-[28px] object-contain"
  />
</div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-[24px] leading-none tracking-[-0.03em] font-semibold text-[#1f2740]">
                    {plan.title}
                  </h3>

                  {plan.badge && (
                    <span className="h-[20px] px-2 rounded-[6px] bg-black text-white text-[10px] font-medium flex items-center justify-center">
                      {plan.badge}
                    </span>
                  )}
                </div>
                <p className="text-[13px] leading-[1.55] text-[#727b8f] max-w-[240px]">
                  {plan.subtitle}
                </p>
                <div className="mt-7 flex items-end gap-2">
                  <span className="text-[54px] leading-none tracking-[-0.05em] font-semibold text-[#1f2740]">
                    {plan.price}
                  </span>

                  {plan.price !== "Custom" && (
                    <span className="text-[14px] text-[#727b8f] mb-[7px]">
                      per month
                    </span>
                  )}
                </div>
                <div className="w-full h-[1px] bg-[#dfe3ee] mt-7 mb-8" />
                <ul className="space-y-5 flex-1">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-[14px] leading-[1.45] text-[#232b45] font-medium"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`
                    mt-8 h-[48px] w-full rounded-[10px]
                    border text-[14px] font-medium
                    transition-all duration-300
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