import React from "react";
import FeatureCard from "@/components/ui/FeatureCard";

export default function FeaturesGridSection() {
  return (
    <section className="w-full bg-white py-14 px-4 md:px-8">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="flex flex-col gap-5">

            <FeatureCard
              title="Invoice Management"
              description="Create and send professional invoices with real-time tracking"
              image="/features/invoice.png"
              className="h-[420px]"
              imageClassName="h-[260px]"
            />

            <FeatureCard
              title="Financial Reports"
              description="Get real-time insights into revenue, expenses, and profits"
              image="/features/reports.png"
              className="h-[270px]"
              imageClassName="h-[140px]"
            />

          </div>
          <div>

            <FeatureCard
              title="Expense Tracking"
              description="Monitor and categorize business expenses effortlessly"
              image="/features/expenses.png"
              className="h-[695px]"
              imageClassName="h-[530px]"
            />

          </div>
          <div className="flex flex-col gap-5">

            <FeatureCard
              title="Payment Management"
              description="Track incoming payments and outstanding dues"
              image="/features/payments.png"
              className="h-[320px]"
              imageClassName="h-[185px]"
            />

            <FeatureCard
              title="Inventory Management"
              description="Manage products, pricing, and stock levels"
              image="/features/inventory.png"
              className="h-[355px]"
              imageClassName="h-[220px]"
            />

          </div>

        </div>
        <div className="mt-5">

          <FeatureCard
            title="Workflow Automation"
            description="Automate recurring invoices and payment reminders"
            image="/features/workflow.png"
            className="h-[270px]"
            imageClassName="h-[150px]"
          />

        </div>

      </div>
    </section>
  );
}