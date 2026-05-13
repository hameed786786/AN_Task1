import React from "react";
import FeatureCard from "@/components/ui/FeatureCard";

export default function FeaturesGridSection() {
  return (
    <section className="w-full bg-white py-[90px] px-6 md:px-8">

      <div className="max-w-[1380px] mx-auto">

        {/* TOP CONTENT */}
        <div className="w-full flex flex-col md:flex-row  items-start gap-[80px] mb-[42px]">

          {/* LEFT */}
          <div className="max-w-[760px] w-full">
            <h2 className="
              w-full
              text-[42px]
              md:text-[54px]
              leading-[0.95]
              tracking-[-0.06em]
              font-normal
              text-[#2b2b2b]
            ">
              Everything you need to manage your business finances
            </h2>
          </div>

          {/* RIGHT */}
          <div className="max-w-[420px] pt-[8px]">
            <p className="
              text-[18px]
              md:text-[22px]
              leading-[1.45]
              tracking-[-0.03em]
              text-[#b1b1b1]
              font-normal
            ">
              A complete financial system designed to handle invoicing,
              expenses, and accounting workflows with ease.
            </p>
          </div>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px]">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-[18px]">

            <FeatureCard
              title="Invoice Management"
              description="Create and send professional invoices with real-time tracking"
              image="/features/invoice.png"
              className="h-[322px] w-[428]"
              imageClassName="h-[210px] ml-[20px] mt-[10px]"
            />

            <FeatureCard
              title="Financial Reports"
              description="Get real-time insights into revenue, expenses, and profits"
              image="/features/reports.png"
              className="h-[200px] w-[428px]"
              imageClassName="h-[150px]"
              horizontalLayout={true}
            />

          </div>

          {/* CENTER COLUMN */}
          <div>

            <FeatureCard
              title="Expense Tracking"
              description="Monitor and categorize business expenses effortlessly"
              image="/features/expenses.png"
              className="h-[538px] "
              imageClassName="h-[324px] ml-[15px] mt-[15px] p-[10px]"
              reverseLayout={true}
            />

          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-[18px]">

            <FeatureCard
              title="Payment Management"
              description="Track incoming payments and outstanding dues"
              image="/features/payments.png"
              className="h-[253px] w-[385px]"
              imageClassName="h-[166px]  mt-[10px] ml-[57px]opacity-100 rounded-[12px] "
            />

            <FeatureCard
              title="Inventory Management"
              description="Manage products, pricing, and stock levels"
              image="/features/inventory.png"
              className="h-[261px] w-[385px]"
              imageClassName="h-[220px] ml-[18px]  opacity-100 rounded-[12px] mt-[10px] "
            />

          </div>

        </div>

        {/* BOTTOM CARD */}
        <div className="mt-[18px] h-[192px]">

          <FeatureCard
            title="Workflow Automation"
            description="Automate recurring invoices and payment reminders"
            image="/features/workflow.png"
            className="h-[230px] w-[1320px] flex-row gap-[30px] pl-[20px]"
            imageClassName="h-[144px]  mt-[50px] p-[10px] opacity-100 rounded-[12px]"
          />

        </div>

      </div>
    </section>
  );
}