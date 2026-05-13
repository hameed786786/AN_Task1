import React from "react";
import FeatureCard from "@/components/ui/FeatureCard";

export default function FeaturesGridSection() {
  return (
    <section className="w-full bg-white py-[90px] px-4 md:px-8">

      <div className="max-w-[1380px] mx-auto">

        {/* TOP CONTENT */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-[60px] mb-[42px]">

          {/* LEFT */}
          <div className="max-w-[760px]">
            <h2 className="
              text-[42px]
              md:text-[64px]
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
              className="h-[365px]"
              imageClassName="h-[210px]"
            />

            <FeatureCard
              title="Financial Reports"
              description="Get real-time insights into revenue, expenses, and profits"
              image="/features/reports.png"
              className="h-[200px]"
              imageClassName="h-[110px]"
            />

          </div>

          {/* CENTER COLUMN */}
          <div>

            <FeatureCard
              title="Expense Tracking"
              description="Monitor and categorize business expenses effortlessly"
              image="/features/expenses.png"
              className="h-[583px]"
              imageClassName="h-[430px]"
            />

          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-[18px]">

            <FeatureCard
              title="Payment Management"
              description="Track incoming payments and outstanding dues"
              image="/features/payments.png"
              className="h-[250px]"
              imageClassName="h-[150px]"
            />

            <FeatureCard
              title="Inventory Management"
              description="Manage products, pricing, and stock levels"
              image="/features/inventory.png"
              className="h-[315px]"
              imageClassName="h-[190px]"
            />

          </div>

        </div>

        {/* BOTTOM CARD */}
        <div className="mt-[18px]">

          <FeatureCard
            title="Workflow Automation"
            description="Automate recurring invoices and payment reminders"
            image="/features/workflow.png"
            className="h-[230px]"
            imageClassName="h-[125px]"
          />

        </div>

      </div>
    </section>
  );
}