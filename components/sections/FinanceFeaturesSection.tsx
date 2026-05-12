import React from "react";
import Image from "next/image";
import InvoiceManagementPreview from "@/components/previews/InvoiceManagementPreview";
import ExpensesAndBillsPreview from "@/components/previews/ExpensesAndBillsPreview";
import PaymentManagementPreview from "@/components/previews/PaymentManagementPreview";
import FinancialReportsPreview from "@/components/previews/FinancialReportsPreview";
import ExpenseTrackingPreview from "@/components/previews/ExpenseTrackingPreview";
import InventoryManagementPreview from "@/components/previews/InventoryManagementPreview";
import WorkflowAutomationPreview from "@/components/previews/WorkflowAutomationPreview";
import BankTransactionsPreview from "@/components/previews/BankTransactionsPreview";

export default function FinanceFeaturesSection(): React.ReactElement {
  return (
    <section className="w-full bg-[#f7f7f7] pt-32 pb-32 px-4 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20 mb-20 max-w-[1300px] mx-auto">
          {/* Left: Main Heading */}
          <div className="flex-1">
            <h2 className="text-[48px] lg:text-[56px] xl:text-[60px] leading-[1.1] tracking-[-0.02em] font-normal text-[#171717]">
              Everything you need to manage<br className="hidden md:block" />
              your business finances
            </h2>
          </div>

          {/* Right: Supporting Paragraph */}
          <div className="flex-shrink-0 lg:pt-3">
            <p className="text-[18px] lg:text-[20px] leading-[1.6] text-[#9ca3af] font-normal max-w-[480px]">
              A complete financial system designed to handle invoicing, expenses, and accounting workflows with ease.
            </p>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6">
            {/* Invoice Management */}
            <div className="flex-1 bg-white rounded-[32px] border border-black/[0.04] shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col relative group">
              <div className="p-8 pb-4">
                <h3 className="text-[24px] font-medium text-[#171717] mb-2">Invoice Management</h3>
                <p className="text-[16px] text-[#6b7280] leading-[1.6]">Create and send professional invoices with real-time tracking</p>
              </div>
              <div className="relative flex-1 min-h-[280px] w-full overflow-hidden mt-2">
                <div className="absolute top-0 left-6 right-[-10%] bottom-[-10%] pointer-events-none bg-white rounded-tl-[20px] shadow-[0_0_20px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
                  <div className="w-[120%] h-[120%] origin-top-left transform scale-[0.85]">
                     <InvoiceManagementPreview />
                  </div>
                </div>
              </div>
            </div>

            {/* Financial Reports */}
            <div className="h-[280px] bg-white rounded-[32px] border border-black/[0.04] shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden flex relative group">
              <div className="p-8 w-[55%] relative z-10 flex flex-col justify-center">
                <h3 className="text-[22px] font-medium text-[#171717] mb-2">Financial Reports</h3>
                <p className="text-[15px] text-[#6b7280] leading-[1.6] max-w-[200px]">Get real-time insights into revenue, expenses, and profits</p>
              </div>
              <div className="absolute top-6 bottom-[-10%] right-[-10%] w-[55%] pointer-events-none bg-white rounded-tl-[20px] shadow-[0_0_20px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
                <div className="w-[130%] h-[130%] origin-top-left transform scale-[0.8]">
                   <FinancialReportsPreview />
                </div>
              </div>
            </div>
          </div>

          {/* CENTER COLUMN */}
          <div className="flex flex-col gap-6">
            {/* Expense Tracking */}
            <div className="h-[calc(100%-0px)] min-h-[600px] bg-white rounded-[32px] border border-black/[0.04] shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col group">
              <div className="relative flex-1 min-h-[380px] bg-[#f9fafb] m-3 rounded-[24px] border border-black/[0.03] overflow-hidden">
                <div className="absolute inset-0 pointer-events-none flex py-4 px-2 overflow-hidden">
                  <div className="w-full h-full transform scale-[0.9] origin-top">
                    <ExpensesAndBillsPreview />
                  </div>
                </div>
              </div>
              <div className="p-8 pt-4">
                <h3 className="text-[24px] font-medium text-[#171717] mb-2">Expense Tracking</h3>
                <p className="text-[16px] text-[#6b7280] leading-[1.6]">Monitor and categorize business expenses effortlessly</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-6">
            {/* Payment Management */}
            <div className="flex-1 bg-white rounded-[32px] border border-black/[0.04] shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col relative group">
              <div className="p-8 pb-4">
                <h3 className="text-[24px] font-medium text-[#171717] mb-2">Payment Management</h3>
                <p className="text-[16px] text-[#6b7280] leading-[1.6]">Track incoming payments and outstanding dues</p>
              </div>
              <div className="relative flex-1 min-h-[220px] w-full overflow-hidden mt-2">
                <div className="absolute top-0 left-6 right-[-10%] bottom-[-10%] pointer-events-none bg-white rounded-tl-[20px] shadow-[0_0_20px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
                  <div className="w-[120%] h-[120%] origin-top-left transform scale-[0.85]">
                     <PaymentManagementPreview />
                  </div>
                </div>
              </div>
            </div>

            {/* Inventory Management */}
            <div className="flex-1 bg-white rounded-[32px] border border-black/[0.04] shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col relative group">
              <div className="p-8 pb-4">
                <h3 className="text-[24px] font-medium text-[#171717] mb-2">Inventory Management</h3>
                <p className="text-[16px] text-[#6b7280] leading-[1.6]">Manage products, pricing, and stock levels</p>
              </div>
              <div className="relative flex-1 min-h-[220px] w-full overflow-hidden mt-2">
                <div className="absolute top-0 left-6 right-[-10%] bottom-[-10%] pointer-events-none bg-white rounded-tl-[20px] shadow-[0_0_20px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
                  <div className="w-[120%] h-[120%] origin-top-left transform scale-[0.85]">
                     <InventoryManagementPreview />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="mt-6 bg-white rounded-[32px] border border-black/[0.04] shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col md:flex-row group items-center">
          <div className="p-10 lg:pl-12 md:w-[40%] flex flex-col justify-center">
            <h3 className="text-[26px] font-medium text-[#171717] mb-2">Workflow Automation</h3>
            <p className="text-[16px] text-[#6b7280] leading-[1.6] max-w-[340px]">Automate recurring invoices and payment reminders</p>
          </div>
          <div className="relative w-full md:w-[60%] min-h-[280px] bg-[#f9fafb] m-3 md:ml-0 rounded-[28px] border border-black/[0.03] overflow-hidden">
            <div className="absolute inset-0 pointer-events-none w-full h-full flex items-center pt-8 pl-8 overflow-hidden">
              <div className="w-[120%] origin-top-left transform scale-[0.9]">
                <BankTransactionsPreview />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
