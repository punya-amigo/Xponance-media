'use client'

import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/data'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { cn } from '@/lib/utils'

export default function CTASection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#141421]" />

      {/* Gradient blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2AB4D0]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#1A8BA3]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          ref={ref}
          className={cn(
            'transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <span className="section-tag mb-6 inline-flex">Ready to Scale?</span>
          <h2 className="font-display font-700 text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Let's Build Your{' '}
            <span className="gradient-text">Digital Success</span>{' '}
            Story
          </h2>
          <p className="text-white/50 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Connect with us today for a free strategy consultation. No commitment, just a conversation about how we can grow your business together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold"
            >
              Get a Free Consultation
              <ArrowRight size={18} />
            </Link>
            <a
              href={`tel:${SITE_CONFIG.phone[0].replace(/\s|-/g, '')}`}
              className="btn-outline inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base"
            >
              <Phone size={16} />
              {SITE_CONFIG.phone[0]}
            </a>
          </div>

          <p className="text-sm text-white/25">
            Jaipur-based agency serving clients across India 🇮🇳
          </p>
        </div>
      </div>
    </section>
  )
}
