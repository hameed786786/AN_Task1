import React from "react";

export default function Features(): React.ReactElement {
  const features = [
    {
      title: "Invoice Management",
      description: "Create and send professional invoices with real-time tracking",
    },
    {
      title: "Expenses & Bills",
      description: "Track and manage business expenses effortlessly",
    },
    {
      title: "Payment Management",
      description: "Track incoming payments and outstanding dues",
    },
    {
      title: "Financial Reports",
      description: "Get real-time insights into revenue, expenses, and profits",
    },
    {
      title: "Expense Tracking",
      description: "Categorize and manage business expenses effortlessly",
    },
    {
      title: "Inventory Management",
      description: "Manage products, pricing, and stock levels",
    },
    {
      title: "Workflow Automation",
      description: "Automate recurring invoices and payment reminders",
    },
    {
      title: "Bank & Transactions",
      description: "Sync and reconcile transactions with your accounts",
    },
  ];

  return (
    <section className="w-full bg-white pt-24 pb-24 px-4 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-[48px] md:text-[56px] font-normal leading-[1.1] text-[#111827] mb-6">
            Everything you need to manage your business finances
          </h2>
          <p className="text-[16px] md:text-[18px] font-normal text-[#9ca3af] max-w-[600px] mx-auto leading-[1.6]">
            A complete financial system designed to handle invoicing, expenses, and accounting workflows with ease.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-[20px] border border-[#e5e7eb] bg-white p-6 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-shadow duration-300"
            >
              {/* Feature Preview - Placeholder */}
              <div className="w-full bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6] rounded-[16px] border border-[#e5e7eb] h-[240px] mb-6 flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="w-12 h-12 text-[#d1d5db] mx-auto mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <p className="text-[#9ca3af] text-sm">Feature Preview</p>
                </div>
              </div>

              {/* Feature Content */}
              <h3 className="text-[18px] font-semibold text-[#111827] mb-2">
                {feature.title}
              </h3>
              <p className="text-[14px] font-normal text-[#6b7280]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
