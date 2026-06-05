import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import StatsSection from '@/components/sections/StatsSection'
import WhyUsSection from '@/components/sections/WhyUsSection'
import ProcessSection from '@/components/sections/ProcessSection'
import FAQSection from '@/components/sections/FAQSection'
import CTASection from '@/components/sections/CTASection'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <ProcessSection />
        <WhyUsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
