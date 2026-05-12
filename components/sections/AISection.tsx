import React from "react";

export default function AISection() {
  return (
    <section className="w-full bg-white py-24 px-4 md:px-8">
      <div className="max-w-[1180px] mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[34px] md:text-[52px] leading-[1.05] tracking-[-0.04em] font-medium text-[#202020]">
            AI that simplifies your financial
            <br />
            operations
          </h2>

          <p className="mt-5 text-[15px] leading-[1.6] text-[#7a7a7a]">
            Automate workflows, gain insights, and make smarter financial decisions
            <br />
            with AI.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">

          {/* TOP LARGE CARD */}
          <div className="md:col-span-12 rounded-[28px] border border-[#ececec] bg-white p-6 shadow-sm">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

              {/* LEFT */}
              <div className="pl-2">
                <h3 className="text-[36px] leading-[1] tracking-[-0.04em] font-semibold text-black">
                  Smart Expense
                  <br />
                  Categorization
                </h3>

                <p className="mt-5 text-[15px] leading-[1.6] text-[#777] max-w-[280px]">
                  Automatically organize and
                  <br />
                  classify expenses
                </p>
              </div>

              {/* RIGHT IMAGE */}
              <div className="overflow-hidden rounded-[18px] border border-[#ececec]">
                <img
                  src="/ai/expense-table.png"
                  alt="Expense Categorization"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>

          {/* AI Invoice */}
          <div className="md:col-span-7 rounded-[28px] border border-[#ececec] bg-white p-6 shadow-sm min-h-[360px] flex flex-col justify-between">

            <div>
              <h3 className="text-[34px] leading-[1.05] tracking-[-0.04em] font-semibold text-black">
                AI Invoice Assistance
              </h3>

              <p className="mt-4 text-[15px] text-[#777]">
                Generate invoices and suggestions instantly
              </p>
            </div>

            {/* IMAGE */}
            <div className="mt-10">
              <img
                src="/ai/invoice-tags.png"
                alt="AI Invoice"
                className="w-full object-contain"
              />
            </div>
          </div>

          {/* Voice Insights */}
          <div className="md:col-span-5 rounded-[28px] border border-[#ececec] bg-white p-6 shadow-sm min-h-[360px] flex flex-col justify-between">

            <div>
              <h3 className="text-[34px] leading-[1.05] tracking-[-0.04em] font-semibold text-black">
                Voice-based Insights
              </h3>

              <p className="mt-4 text-[15px] leading-[1.6] text-[#777] max-w-[240px]">
                Access financial insights using voice commands
              </p>
            </div>

            {/* IMAGE */}
            <div className="flex justify-center mt-8">
              <img
                src="/ai/mic-wave.png"
                alt="Voice Insights"
                className="w-[240px] object-contain"
              />
            </div>
          </div>

          {/* CashFlow */}
          <div className="md:col-span-5 rounded-[28px] border border-[#ececec] bg-white p-6 shadow-sm min-h-[320px] flex flex-col justify-between">

            <div>
              <h3 className="text-[32px] leading-[1.05] tracking-[-0.04em] font-semibold text-black">
                CashFlow Predictions
              </h3>

              <p className="mt-4 text-[15px] text-[#777]">
                Forecast revenue and expenses with AI
              </p>
            </div>

            {/* IMAGE */}
            <div className="mt-8">
              <img
                src="/ai/cashflow-cards.png"
                alt="CashFlow"
                className="w-full object-contain"
              />
            </div>
          </div>

          {/* Collaboration */}
          <div className="md:col-span-7 rounded-[28px] border border-[#ececec] bg-white p-6 shadow-sm min-h-[320px] flex flex-col justify-between">

            <div>
              <h3 className="text-[32px] leading-[1.05] tracking-[-0.04em] font-semibold text-black">
                Collaboration & Alerts
              </h3>

              <p className="mt-4 text-[15px] text-[#777]">
                Get smart reminders and notifications
              </p>
            </div>

            {/* IMAGE */}
            <div className="mt-8 overflow-hidden rounded-[18px] border border-[#ececec]">
              <img
                src="/ai/notifications.png"
                alt="Notifications"
                className="w-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}