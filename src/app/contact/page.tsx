import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ContactPageContent from './ContactPageContent'

export const metadata: Metadata = {
  title: 'Contact Us – Let\'s Grow Together',
  description: 'Get in touch with Xponance Media for a free strategy consultation. We\'re based in Jaipur and serve clients across India.',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactPageContent />
      </main>
      <Footer />
    </>
  )
}
