'use client'

import Link from 'next/link'
import { Handshake, Target, LineChart, Check, ArrowRight } from 'lucide-react'
import { WHY_US } from '@/lib/data'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { cn } from '@/lib/utils'

const ICON_MAP = { Handshake, Target, LineChart }

export default function WhyUsSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0E0E1A]" />
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2AB4D0]/15 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={cn(
            'max-w-2xl mb-14 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <span className="section-tag mb-4 inline-flex">Why Choose Us</span>
          <h2 className="font-display font-700 text-3xl sm:text-4xl lg:text-5xl text-white mb-4 leading-tight">
            What Makes Us Your{' '}
            <span className="gradient-text">Ideal Partner?</span>
          </h2>
          <p className="text-white/50 text-lg leading-relaxed">
            We're not just another agency. We're invested in your success like it's our own.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {WHY_US.map((item, i) => {
            // @ts-ignore
            const Icon = ICON_MAP[item.icon]
            const { ref: cardRef, isVisible: cardVisible } = useScrollReveal()

            return (
              <div
                key={item.id}
                ref={cardRef}
                className={cn(
                  'relative rounded-2xl p-7 border border-white/8 bg-[#141421]/60 transition-all duration-500 hover:border-[#2AB4D0]/25 hover:-translate-y-1 group',
                  cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Top accent */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#2AB4D0]/30 to-transparent" />

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-[#2AB4D0]/10 border border-[#2AB4D0]/20 flex items-center justify-center mb-5 group-hover:bg-[#2AB4D0]/20 group-hover:border-[#2AB4D0]/40 transition-all">
                  <Icon size={24} className="text-[#2AB4D0]" />
                </div>

                <p className="text-xs text-[#2AB4D0] font-600 tracking-widest uppercase mb-1">{item.subtitle}</p>
                <h3 className="font-display font-700 text-xl text-white mb-3">{item.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed mb-5">{item.description}</p>

                {/* Points */}
                <ul className="space-y-2">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-center gap-2.5 text-sm text-white/50">
                      <Check size={13} className="text-[#2AB4D0] flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <Link
            href="/why-us"
            className="btn-outline inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium"
          >
            Learn More About Us
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
