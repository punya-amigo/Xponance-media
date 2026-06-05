'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { FAQS } from '@/lib/data'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { cn } from '@/lib/utils'

function FAQItem({ faq, index }: { faq: typeof FAQS[0]; index: number }) {
  const [open, setOpen] = useState(false)
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={cn(
        'border border-white/8 rounded-xl overflow-hidden transition-all duration-500',
        open ? 'border-[#2AB4D0]/30 bg-[#2AB4D0]/5' : 'bg-[#1C1C2E]/40 hover:border-white/15',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      )}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
        aria-expanded={open}
      >
        <span className={cn('font-medium text-sm md:text-base leading-snug transition-colors', open ? 'text-[#2AB4D0]' : 'text-white')}>
          {faq.question}
        </span>
        <div className={cn('w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors', open ? 'bg-[#2AB4D0]/20 text-[#2AB4D0]' : 'bg-white/8 text-white/40')}>
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>

      <div
        className={cn(
          'overflow-hidden transition-all duration-300 ease-in-out',
          open ? 'max-h-48' : 'max-h-0'
        )}
      >
        <p className="px-5 md:px-6 pb-5 text-sm text-white/50 leading-relaxed">
          {faq.answer}
        </p>
      </div>
    </div>
  )
}

export default function FAQSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0E0E1A]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2AB4D0]/15 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={cn(
            'text-center mb-12 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <span className="section-tag mb-4 inline-flex">FAQ</span>
          <h2 className="font-display font-700 text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-white/50 text-lg">
            Everything you need to know before partnering with us.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
