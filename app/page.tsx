import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import ExploreSection from "@/components/sections/ExploreSection";
import ModulesSection from "@/components/sections/ModulesSection";
import AISection from "@/components/sections/AISection";
import WhyChooseSection from "@/components/sections/Whychoosesection";
import PricingSection from "@/components/sections/PricingSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/ui/CTASection";
import FooterSection from "@/components/sections/FooterSection";
import FeaturesGridSection from "@/components/sections/FeaturesGridSection";
export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Header />
      <Hero />
      <TrustedBy />
      <ExploreSection />
      <FeaturesGridSection />
      <ModulesSection />
      <AISection />
      <WhyChooseSection />
      <PricingSection />
      <TestimonialsSection />
        <CTASection
        title="Take control of your business finances today"
        description="Start using a smarter system designed to simplify accounting and improve financial visibility."
        primaryButtonText="Get Started for free"
        secondaryButtonText="Book a Demo"
        backgroundImage="/cta/cta-bg.png"
      />
      <FooterSection />
    </main>
  );
}
