import React from "react";

const modules = [
  {
    title: "Finance",
    items: ["Invoices", "Bills", "Expenses", "Payments"],
  },
  {
    title: "Manage",
    items: ["Customers", "Vendors", "Products", "Price Lists"],
  },
  {
    title: "Operations",
    items: ["Tax (GST)", "Banking", "Audit Logs", "Data Import/Export"],
  },
];

export default function ModulesSection() {
  return (
    <section className="px-4 py-10 md:px-8">
      <div className="mx-auto max-w-[1180px] rounded-[36px] bg-[#bdd2f3] px-5 py-8 md:px-10 md:py-12">
        <div className="mb-10 text-center">
          <h2 className="text-[38px] md:text-[48px] leading-[1.05] font-medium tracking-[-0.03em] text-[#202020]">
            A complete billing and
            <br />
            accounting system
          </h2>

          <p className="mt-4 text-[15px] leading-[1.5] text-[#5f6675]">
            Structured modules designed to manage
            <br />
            every financial operation efficiently.
          </p>
        </div>
        <div className="mb-10 flex justify-center">
          <div className="overflow-hidden rounded-[28px] border-[4px] border-white shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
            <img
              src="/dashboard.png"
              alt="Dashboard Preview"
              className="w-full max-w-[980px] object-cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

          {modules.map((module) => (
            <div
              key={module.title}
              className="relative overflow-hidden rounded-[22px] bg-[#d9ddf3] px-8 py-10 min-h-[250px]"
            >
              <div className="absolute left-0 top-0 h-[130px] w-[130px] rounded-br-[120px] bg-white/20" />
              <div className="absolute right-[-35%] top-[-15%] h-[150%] w-[95%] rounded-full bg-white/10" />
              <div className="relative z-10">
                <h3 className="mb-10 text-[13px] font-extrabold uppercase tracking-[0.28em] text-black">
                  {module.title}
                </h3>
                <ul className="space-y-6">
                  {module.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-5"
                    >
                      <div className="flex h-[26px] w-[26px] flex-shrink-0 items-center justify-center rounded-full border-[2px] border-[#6b63ff]">
                        <svg
                          className="h-3.5 w-3.5 text-[#6b63ff]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-[18px] font-medium text-black">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}