import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { SITE_CONFIG } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Terms of Service',
}

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="relative pt-36 pb-24">
        <div className="absolute inset-0 bg-[#0E0E1A]" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display font-700 text-4xl text-white mb-3">Terms of Service</h1>
          <p className="text-white/40 text-sm mb-10">Last updated: April 2025</p>

          <div className="space-y-8 text-white/55">
            {[
              { title: '1. Services', body: 'Xponance Media provides digital marketing services including but not limited to SEO, performance marketing, social media management, web development, and branding. Specific deliverables and terms are defined per client agreement.' },
              { title: '2. Client Responsibilities', body: 'Clients agree to provide accurate information, timely feedback, and necessary access to assets and accounts required for service delivery. Delays caused by client non-responsiveness may impact delivery timelines.' },
              { title: '3. Intellectual Property', body: 'All creative assets produced by Xponance Media for a client are owned by the client upon full payment. Internal tools, templates, and methodologies remain the property of Xponance Media.' },
              { title: '4. Confidentiality', body: 'Both parties agree to keep all confidential business information shared during the engagement strictly private and to not disclose it to third parties without prior written consent.' },
              { title: '5. Payment Terms', body: 'Payment terms are defined in each client\'s service agreement. Late payments may incur a delay in service delivery. Xponance Media reserves the right to pause services for overdue accounts.' },
              { title: '6. Governing Law', body: `These terms are governed by the laws of India. Any disputes shall be resolved in the courts of Jaipur, Rajasthan. For questions, contact ${SITE_CONFIG.email}.` },
            ].map((s) => (
              <section key={s.title}>
                <h2 className="font-display font-600 text-white text-xl mb-3">{s.title}</h2>
                <p className="leading-relaxed text-sm">{s.body}</p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
