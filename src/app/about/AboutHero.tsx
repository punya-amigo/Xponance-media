'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { cn } from '@/lib/utils'

export default function AboutHero() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 })

  return (
    <section className="relative pt-36 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[#141421]" />
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#2AB4D0]/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={cn(
            'max-w-3xl mx-auto text-center transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <span className="section-tag mb-5 inline-flex">About Xponance Media</span>
          <h1 className="font-display font-700 text-4xl sm:text-5xl md:text-6xl text-white mb-5 leading-tight">
            Your Trusted Partner In{' '}
            <span className="gradient-text">Digital Growth</span>
          </h1>
          <p className="text-white/50 text-lg md:text-xl leading-relaxed">
            We are a dedicated digital marketing company focused on delivering measurable results
            that drive growth, increase visibility and connect your brand meaningfully with audiences.
          </p>
        </div>
      </div>
    </section>
  )
}
