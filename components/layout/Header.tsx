import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex justify-center w-full pt-8">
      <nav className="w-full px-6">
        <div className="mx-auto flex h-18 w-full max-w-310 items-center rounded-full bg-white px-6 shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
          <div className="flex items-center">
            <div className="flex items-center gap-3">
              <img
                src="/footer/logo.png"
                alt="Logo"
                className="w-[34px] h-[31px] object-contain shrink-0"
              />
              <div className="flex flex-col justify-center">
                <span className="text-[17px] font-semibold leading-none tracking-tight text-[#111827]">
                  FinBook
                </span>
                <span className="mt-0.75 text-[11px] font-medium leading-none text-[#6B7280]">
                  by Anthill Networks
                </span>
              </div>
            </div>

            <div className="hidden md:block w-px h-7 bg-black/10 mx-10" />

            <div className="hidden md:flex items-center gap-9 text-[15px] font-medium text-[#4B5563]">
              <button
                type="button"
                className="inline-flex items-center gap-1.5 hover:text-gray-900 transition-colors"
              >
                Pages
                <svg
                  className="h-3.5 w-3.5 text-gray-400 stroke-[3px]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <button
                type="button"
                className="inline-flex items-center gap-1.5 hover:text-gray-900 transition-colors"
              >
                Product
                <svg
                  className="h-3.5 w-3.5 text-gray-400 stroke-[3px]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <Link href="/blogs" className="hover:text-gray-900 transition-colors">
                Blogs
              </Link>
            </div>
          </div>
          <div className="ml-auto flex items-center gap-6">
            <Link
              href="/login"
              className="hidden sm:block text-[15px] font-medium text-[#374151] hover:text-gray-900 transition-colors"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="inline-flex h-11 items-center justify-center rounded-2xl bg-[#0f0f0f] px-8 text-[15px] font-medium text-white shadow-[0_8px_18px_rgba(0,0,0,0.18)] transition-colors hover:bg-black"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
