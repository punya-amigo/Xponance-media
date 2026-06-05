import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CTASection from '@/components/sections/CTASection'
import ServicesPageContent from './ServicesPageContent'

export const metadata: Metadata = {
  title: 'Our Services – Full-Service Digital Marketing',
  description: 'From SEO and Performance Marketing to Web Development, Social Media, Branding, and Creative Production — Xponance Media covers every dimension of your digital growth.',
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesPageContent />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
