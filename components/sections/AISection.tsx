import React from "react";
import Image from "next/image";

export default function AISection() {
  return (
    <section className="w-full bg-white py-[90px] px-4 md:px-8">

      <div className="mx-auto max-w-[1280px]">

        {/* HEADING */}
        <div className="mb-[52px] text-center">

          <h2
            className="
              font-[var(--font-clash)]
              text-[34px]
              md:text-[56px]
              leading-[1]
              tracking-[-0.05em]
              text-[#1A1A1A]
            "
          >
            AI that simplifies your financial
            <br />
            operations
          </h2>

          <p
            className="
              mt-5
              font-[var(--font-clash)]
              text-[15px]
              leading-[1.5]
              text-[#7D8593]
            "
          >
            Automate workflows, gain insights, and make smarter financial decisions
            <br />
            with AI.
          </p>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-12 gap-5">

          {/* TOP BIG CARD */}
          <div
            className="
              col-span-12
              overflow-hidden
              rounded-[28px]
              border
              border-[#ECECEC]
              bg-white
              p-[26px]
              shadow-[0_2px_12px_rgba(0,0,0,0.03)]
            "
          >

            <div className="grid grid-cols-2 gap-6 items-center">

              {/* LEFT */}
              <div className="pl-2">

                <h3
                  className="
                    font-[var(--font-clash)]
                    text-[46px]
                    leading-[0.95]
                    tracking-[-0.05em]
                    text-[#121212]
                  "
                >
                  Smart Expense
                  <br />
                  Categorization
                </h3>

                <p
                  className="
                    mt-5
                    max-w-[260px]
                    font-[var(--font-clash)]
                    text-[15px]
                    leading-[1.5]
                    text-[#777F8E]
                  "
                >
                  Automatically organize and
                  <br />
                  classify expenses
                </p>

              </div>

              {/* RIGHT IMAGE */}
              <div
                className="
                  relative
                  h-[320px]
                  overflow-hidden
                  rounded-[20px]
                  border
                  border-[#ECECEC]
                "
              >

                <Image
                  src="/ai/expense-table.png"
                  alt="Expense Table"
                  fill
                  priority
                  className="object-cover"
                />

              </div>

            </div>

          </div>

          {/* LEFT CARD */}
          <div
            className="
              col-span-12
              md:col-span-7
              overflow-hidden
              rounded-[28px]
              border
              border-[#ECECEC]
              bg-[#FAFAFA]
              p-[28px]
              min-h-[370px]
              shadow-[0_2px_12px_rgba(0,0,0,0.03)]
            "
          >

            <h3
              className="
                font-[var(--font-clash)]
                text-[38px]
                leading-[1]
                tracking-[-0.05em]
                text-[#121212]
              "
            >
              AI Invoice Assistance
            </h3>

            <p
              className="
                mt-4
                font-[var(--font-clash)]
                text-[15px]
                leading-[1.5]
                text-[#777F8E]
              "
            >
              Generate invoices and suggestions instantly
            </p>

            <div className="relative mt-8 h-[210px] w-full">

              <Image
                src="/ai/invoice-tags.png"
                alt="Invoice Tags"
                fill
                className="object-contain"
              />

            </div>

          </div>

          {/* RIGHT CARD */}
          <div
            className="
              col-span-12
              md:col-span-5
              overflow-hidden
              rounded-[28px]
              border
              border-[#ECECEC]
              bg-white
              p-[28px]
              min-h-[370px]
              shadow-[0_2px_12px_rgba(0,0,0,0.03)]
            "
          >

            <h3
              className="
                font-[var(--font-clash)]
                text-[38px]
                leading-[1]
                tracking-[-0.05em]
                text-[#121212]
              "
            >
              Voice-based Insights
            </h3>

            <p
              className="
                mt-4
                max-w-[250px]
                font-[var(--font-clash)]
                text-[15px]
                leading-[1.5]
                text-[#777F8E]
              "
            >
              Access financial insights using voice commands
            </p>

            <div className="mt-10 flex justify-center">

              <Image
                src="/ai/mic-wave.png"
                alt="Mic Wave"
                width={240}
                height={240}
                className="object-contain"
              />

            </div>

          </div>

          {/* BOTTOM LEFT */}
          <div
            className="
              col-span-12
              md:col-span-5
              overflow-hidden
              rounded-[28px]
              border
              border-[#ECECEC]
              bg-white
              p-[28px]
              min-h-[330px]
              shadow-[0_2px_12px_rgba(0,0,0,0.03)]
            "
          >

            <h3
              className="
                font-[var(--font-clash)]
                text-[36px]
                leading-[1]
                tracking-[-0.05em]
                text-[#121212]
              "
            >
              CashFlow Predictions
            </h3>

            <p
              className="
                mt-4
                font-[var(--font-clash)]
                text-[15px]
                leading-[1.5]
                text-[#777F8E]
              "
            >
              Forecast revenue and expenses with AI
            </p>

            <div className="relative mt-8 h-[190px] w-full">

              <Image
                src="/ai/cashflow-cards.png"
                alt="Cashflow Cards"
                fill
                className="object-contain"
              />

            </div>

          </div>

          {/* BOTTOM RIGHT */}
          <div
            className="
              col-span-12
              md:col-span-7
              overflow-hidden
              rounded-[28px]
              border
              border-[#ECECEC]
              bg-white
              p-[28px]
              min-h-[330px]
              shadow-[0_2px_12px_rgba(0,0,0,0.03)]
            "
          >

            <h3
              className="
                font-[var(--font-clash)]
                text-[36px]
                leading-[1]
                tracking-[-0.05em]
                text-[#121212]
              "
            >
              Collaboration & Alerts
            </h3>

            <p
              className="
                mt-4
                font-[var(--font-clash)]
                text-[15px]
                leading-[1.5]
                text-[#777F8E]
              "
            >
              Get smart reminders and notifications
            </p>

            <div
              className="
                relative
                mt-8
                h-[210px]
                overflow-hidden
                rounded-[18px]
                border
                border-[#ECECEC]
              "
            >

              <Image
                src="/ai/notifications.png"
                alt="Notifications"
                fill
                className="object-cover"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}