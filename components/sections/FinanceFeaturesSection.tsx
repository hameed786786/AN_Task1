import React from "react";

export default function FinanceFeaturesSection(): React.ReactElement {
  const features = [
    {
      title: "Real-time Financial Reports",
      description: "Access comprehensive financial reports instantly with automated calculations and insights.",
    },
    {
      title: "Multi-currency Support",
      description: "Handle international transactions seamlessly with automatic currency conversion.",
    },
    {
      title: "Tax Compliance",
      description: "Stay compliant with tax regulations with automated tax calculations and reporting.",
    },
    {
      title: "Financial Forecasting",
      description: "Make data-driven decisions with predictive analytics and financial forecasting tools.",
    },
    {
      title: "Expense Management",
      description: "Track and categorize expenses automatically with receipt scanning and approval workflows.",
    },
    {
      title: "Budget Tracking",
      description: "Set budgets and monitor spending in real-time to maintain financial control.",
    },
  ];

  return (
    <section className="w-full bg-white pt-24 pb-24 px-4 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center mb-20">
          <h2 className="text-[48px] md:text-[56px] font-normal leading-[1.1] text-[#111827] mb-6">
            Advanced Finance Features
          </h2>
          <p className="text-[16px] md:text-[18px] font-normal text-[#9ca3af] max-w-[600px] mx-auto leading-[1.6]">
            Powerful tools designed to simplify your financial management and drive business growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-lg border border-[#e5e7eb] bg-white hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-[20px] font-semibold text-[#111827] mb-3">
                {feature.title}
              </h3>
              <p className="text-[14px] md:text-[16px] font-normal text-[#6b7280] leading-[1.6]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
