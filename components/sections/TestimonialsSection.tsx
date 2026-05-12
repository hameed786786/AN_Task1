"use client";
import React from "react";
import TestimonialCard from "@/components/ui/TestimonialCard";

const testimonials = [
  {
    quote:
      '"Our financial processes became faster, more accurate, and easier to manage with this platform."',
    name: "Sarah Ace",
    role: "Marketing Head",
    company: "Scope Co.",
    icon: "/testimonials/company1.png",
  },
  {
    quote:
      '"The AI features have transformed how we handle invoicing and expense categorization. Saves us hours every week."',
    name: "Emily Shanks",
    role: "Chief Data Officer",
    company: "Scope Co.",
    icon: "/testimonials/company1.png",
  },
  {
    quote:
      '"Finally a billing platform that’s both powerful and simple. Our team adopted it within days."',
    name: "Monke Garp",
    role: "CEO",
    company: "Scope Co.",
    icon: "/testimonials/company1.png",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-white py-24 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-16 px-4">
          <h2 className="text-[36px] md:text-[58px] leading-[1.05] tracking-[-0.04em] font-medium text-[#1f2740]">
            What our customers say
          </h2>

          <p className="mt-5 text-[15px] md:text-[16px] leading-[1.7] text-[#777]">
            Businesses trust our platform to simplify and manage their finances
            <br />
            effectively.
          </p>
        </div>
        <div className="flex gap-5 mb-5 w-max animate-[marquee_20s_linear_infinite]">

          {[...testimonials, ...testimonials].map((item, index) => (
            <TestimonialCard
              key={index}
              quote={item.quote}
              name={item.name}
              role={item.role}
              company={item.company}
              icon={item.icon}
            />
          ))}

        </div>
        <div className="flex gap-5 w-max ml-[-180px] animate-[marqueeReverse_20s_linear_infinite]">

          {[...testimonials.slice().reverse(), ...testimonials.slice().reverse()].map((item, index) => (
            <TestimonialCard
              key={index}
              quote={item.quote}
              name={item.name}
              role={item.role}
              company={item.company}
              icon={item.icon}
            />
          ))}

        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-20%);
          }
        }

        @keyframes marqueeReverse {
          0% {
            transform: translateX(-20%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </section>
  );
}