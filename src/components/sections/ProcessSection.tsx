'use client'

import { Search, Map, Rocket, BarChart2 } from 'lucide-react'
import { PROCESS_STEPS } from '@/lib/data'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { cn } from '@/lib/utils'

const ICON_MAP = { Search, Map, Rocket, BarChart2 }

export default function ProcessSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#141421]" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#2AB4D0]/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={cn(
            'text-center max-w-2xl mx-auto mb-16 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <span className="section-tag mb-4 inline-flex">How We Work</span>
          <h2 className="font-display font-700 text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Our <span className="gradient-text">Proven Process</span>
          </h2>
          <p className="text-white/50 text-lg">
            A structured, data-driven approach that consistently delivers results for our clients.
          </p>
        </div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#2AB4D0]/30 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, i) => {
              // @ts-ignore
              const Icon = ICON_MAP[step.icon]
              return (
                <div
                  key={step.step}
                  className={cn(
                    'relative transition-all duration-500',
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  )}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  {/* Step number & icon */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <div className="absolute inset-0 rounded-full bg-[#2AB4D0]/15 border border-[#2AB4D0]/25" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon size={24} className="text-[#2AB4D0]" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#2AB4D0] flex items-center justify-center">
                        <span className="text-[9px] font-700 text-[#0E0E1A] font-display">{step.step}</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="font-display font-600 text-white text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-white/45 leading-relaxed">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
