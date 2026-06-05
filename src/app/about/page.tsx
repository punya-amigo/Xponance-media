import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CTASection from '@/components/sections/CTASection'
import AboutHero from './AboutHero'
import AboutContent from './AboutContent'

export const metadata: Metadata = {
  title: 'About Us – Your Trusted Digital Growth Partner',
  description: 'Learn about Xponance Media – a full-service digital marketing agency in Jaipur. Our team of strategists, creatives, and digital experts are passionate about your success.',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <AboutContent />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
