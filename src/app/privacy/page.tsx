import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { SITE_CONFIG } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Xponance Media Privacy Policy – how we collect, use and protect your data.',
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="relative pt-36 pb-24">
        <div className="absolute inset-0 bg-[#0E0E1A]" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display font-700 text-4xl text-white mb-3">Privacy Policy</h1>
          <p className="text-white/40 text-sm mb-10">Last updated: April 2025</p>

          <div className="prose prose-invert prose-sm max-w-none space-y-8 text-white/55">
            <section>
              <h2 className="font-display font-600 text-white text-xl mb-3">1. Information We Collect</h2>
              <p className="leading-relaxed">We collect information you provide directly to us, such as when you fill out our contact form, request a consultation, or communicate with us. This may include your name, email address, phone number, and project details.</p>
            </section>
            <section>
              <h2 className="font-display font-600 text-white text-xl mb-3">2. How We Use Your Information</h2>
              <p className="leading-relaxed">We use the information we collect to provide, maintain, and improve our services, respond to your inquiries, send relevant communications, and comply with legal obligations.</p>
            </section>
            <section>
              <h2 className="font-display font-600 text-white text-xl mb-3">3. Information Sharing</h2>
              <p className="leading-relaxed">We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or to trusted partners who assist in operating our business.</p>
            </section>
            <section>
              <h2 className="font-display font-600 text-white text-xl mb-3">4. Contact Us</h2>
              <p className="leading-relaxed">For privacy-related queries, contact us at <a href={`mailto:${SITE_CONFIG.email}`} className="text-[#2AB4D0] hover:underline">{SITE_CONFIG.email}</a>.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
