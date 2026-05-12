import React from "react";

const features = [
  {
    title: "AI-powered automation",
    description:
      "Automate repetitive financial tasks like invoicing, expense tracking, and payment reminders, reducing manual work and improving efficiency across your operations.",
    icon: "/icons/automation.png",
  },
  {
    title: "Clean and intuitive UI",
    description:
      "Designed with simplicity in mind, our interface ensures your team can navigate, manage, and execute tasks quickly without a steep learning curve.",
    icon: "/icons/ui.png",
  },
  {
    title: "Scalable for growing businesses",
    description:
      "Built to grow with your business, the platform adapts to increasing transactions, users, and operational complexity without compromising performance.",
    icon: "/icons/scalable.png",
  },
  {
    title: "Centralized financial control",
    description:
      "Manage all your financial activities — invoices, expenses, payments, and records — from a single, unified platform.",
    icon: "/icons/control.png",
  },
  {
    title: "Real-time reporting",
    description:
      "Access accurate financial data instantly with live dashboards and reports, enabling faster and more informed decision-making.",
    icon: "/icons/reporting.png",
  },
  {
    title: "Secure and Reliable Platform",
    description:
      "Ensure your financial data is protected with enterprise-grade security, reliable infrastructure, and consistent system performance you can trust.",
    icon: "/icons/security.png",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="w-full bg-white py-24 px-4 md:px-8">
      <div className="max-w-[1180px] mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[34px] md:text-[54px] leading-[1.05] tracking-[-0.04em] font-medium text-[#202020]">
            Why choose our billing platform
          </h2>

          <p className="mt-5 text-[15px] md:text-[16px] leading-[1.7] text-[#7a7a7a]">
            A powerful, AI-driven financial system designed to simplify operations and
            <br className="hidden md:block" />
            support business growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-[20px] bg-[#f8f8f8] border border-[#eeeeee] p-8 min-h-[260px] transition-all duration-300 hover:shadow-lg"
            >

              {/* Icon */}
              <div className="mb-7">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-[46px] h-[46px] object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-[24px] leading-[1.15] tracking-[-0.03em] font-semibold text-black">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-5 text-[14px] md:text-[15px] leading-[1.7] text-[#666666]">
                {feature.description}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}