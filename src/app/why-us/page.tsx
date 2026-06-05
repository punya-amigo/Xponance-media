import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CTASection from '@/components/sections/CTASection'
import StatsSection from '@/components/sections/StatsSection'
import ProcessSection from '@/components/sections/ProcessSection'
import FAQSection from '@/components/sections/FAQSection'
import WhyUsPageContent from './WhyUsPageContent'

export const metadata: Metadata = {
  title: 'Why Choose Xponance Media',
  description: 'Discover why businesses across India trust Xponance Media. We are your partners, result-focused, and data-driven — delivering real ROI on every campaign.',
}

export default function WhyUsPage() {
  return (
    <>
      <Navbar />
      <main>
        <WhyUsPageContent />
        <StatsSection />
        <ProcessSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
