import { SiteFooter } from '@/components/layout/SiteFooter';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { GsapAnimations } from '@/components/motion/GsapAnimations';
import { AboutSection } from '@/features/home/components/sections/AboutSection';
import { FaqSection } from '@/features/home/components/sections/FaqSection';
import { HeroSection } from '@/features/home/components/sections/HeroSection';
import { PricingSection } from '@/features/home/components/sections/PricingSection';
import { StatsSection } from '@/features/home/components/sections/StatsSection';
import { TestimonialsSection } from '@/features/home/components/sections/TestimonialsSection';
import { TrustedSection } from '@/features/home/components/sections/TrustedSection';
import { UseCasesSection } from '@/features/home/components/sections/UseCasesSection';
export default function Home() {
  return (
    <div id='landing-root'>
      <SiteHeader />
      <main>
        <HeroSection />
        <TrustedSection />
        <UseCasesSection />
        <AboutSection />
        <StatsSection />
        <PricingSection />
        <TestimonialsSection />
        <FaqSection />
      </main>
      <SiteFooter />
      <GsapAnimations />
    </div>
  );
}
