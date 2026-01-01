import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { FeaturesSection } from "@/components/features-section";
import { InteractiveDemo } from "@/components/interactive-demo";
import { SuccessVault } from "@/components/success-vault";
import { ComparisonSection } from "@/components/comparison-section";
import { PricingPreview } from "@/components/pricing-preview";
import { PhilosophyPreview } from "@/components/philosophy-preview";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-12 px-6 pb-24 pt-12 md:px-10 lg:px-16">
      <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1abc9c]/20 text-2xl text-[#48e3c7] shadow-[0_20px_45px_rgba(26,188,156,0.35)]">
            ز
          </span>
          <div>
            <p className="text-lg font-semibold text-white">زخم</p>
            <p className="text-xs text-white/60">
              إنتاجية إنسانية لأيامك المشرقة والرمادية
            </p>
          </div>
        </div>
        <nav className="flex flex-wrap items-center gap-4 text-sm text-white/70">
          <a href="#how-it-works" className="hover:text-white">
            كيف يعمل
          </a>
          <a href="#features" className="hover:text-white">
            المميزات
          </a>
          <a href="#demo" className="hover:text-white">
            جرب الآن
          </a>
          <a href="/pricing" className="hover:text-white">
            الأسعار
          </a>
          <a href="/about" className="hover:text-white">
            عن زخم
          </a>
        </nav>
      </header>

      <Hero />
      <HowItWorks />
      <FeaturesSection />
      <InteractiveDemo />
      <SuccessVault />
      <ComparisonSection />
      <PricingPreview />
      <PhilosophyPreview />
      <SiteFooter />
    </main>
  );
}
