'use client'

import { Handshake, Target, LineChart, Check, TrendingUp, ShieldCheck, Zap } from 'lucide-react'
import { WHY_US } from '@/lib/data'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { cn } from '@/lib/utils'

const ICON_MAP = { Handshake, Target, LineChart }

const DIFFERENTIATORS = [
  { icon: TrendingUp, title: 'Growth-Obsessed', desc: 'We measure success in revenue, not likes. Every tactic is chosen for its growth impact.' },
  { icon: ShieldCheck, title: 'Transparent Reporting', desc: 'Monthly reports with real data. No smoke and mirrors — you always know where your money goes.' },
  { icon: Zap, title: 'Agile Execution', desc: 'We move fast, adapt faster. Market changes don\'t catch us off guard — they\'re part of our playbook.' },
]

export default function WhyUsPageContent() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#141421]" />
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#2AB4D0]/6 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            ref={ref}
            className={cn(
              'max-w-3xl mx-auto transition-all duration-700',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
          >
            <span className="section-tag mb-5 inline-flex">Why Choose Us</span>
            <h1 className="font-display font-700 text-4xl sm:text-5xl md:text-6xl text-white mb-5 leading-tight">
              Why <span className="gradient-text">Xponance Media</span>{' '}
              Is Different
            </h1>
            <p className="text-white/50 text-lg md:text-xl leading-relaxed">
              We don't believe in being just another vendor. We are invested in your success — as partners, as strategists, as growth accelerators.
            </p>
          </div>
        </div>
      </section>

      {/* 3 pillars */}
      <section className="relative py-20 bg-[#0E0E1A]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2AB4D0]/15 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {WHY_US.map((item, i) => {
              // @ts-ignore
              const Icon = ICON_MAP[item.icon]
              const { ref: cRef, isVisible: cVis } = useScrollReveal()
              return (
                <div
                  key={item.id}
                  ref={cRef}
                  className={cn(
                    'relative rounded-2xl p-8 border border-white/8 bg-[#141421]/60 transition-all duration-500',
                    cVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  )}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#2AB4D0]/30 to-transparent" />
                  <div className="w-16 h-16 rounded-2xl bg-[#2AB4D0]/10 border border-[#2AB4D0]/20 flex items-center justify-center mb-6">
                    <Icon size={28} className="text-[#2AB4D0]" />
                  </div>
                  <p className="text-xs text-[#2AB4D0] font-600 tracking-widest uppercase mb-2">{item.subtitle}</p>
                  <h2 className="font-display font-700 text-2xl text-white mb-4">{item.title}</h2>
                  <p className="text-white/45 leading-relaxed mb-6">{item.description}</p>
                  <ul className="space-y-3">
                    {item.points.map((p) => (
                      <li key={p} className="flex items-center gap-3 text-sm text-white/50">
                        <div className="w-5 h-5 rounded-full bg-[#2AB4D0]/15 flex items-center justify-center flex-shrink-0">
                          <Check size={11} className="text-[#2AB4D0]" />
                        </div>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Extra differentiators */}
      <section className="relative py-20 bg-[#141421]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2AB4D0]/15 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {DIFFERENTIATORS.map((d, i) => {
              const Icon = d.icon
              const { ref: dRef, isVisible: dVis } = useScrollReveal()
              return (
                <div
                  key={d.title}
                  ref={dRef}
                  className={cn(
                    'flex items-start gap-4 p-6 rounded-2xl bg-[#0E0E1A]/60 border border-white/6 hover:border-[#2AB4D0]/25 transition-all duration-500',
                    dVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  )}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-[#2AB4D0]/10 border border-[#2AB4D0]/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-[#2AB4D0]" />
                  </div>
                  <div>
                    <h3 className="font-display font-600 text-white text-[15px] mb-1.5">{d.title}</h3>
                    <p className="text-sm text-white/40 leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
