'use client'

import { useEffect, useRef, useState } from 'react'
import { Users, Award, Heart, Zap } from 'lucide-react'
import { STATS } from '@/lib/data'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { cn } from '@/lib/utils'

const ICON_MAP = { Users, Award, Heart, Zap }

function AnimatedCounter({ end, suffix, duration = 1800 }: { end: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [triggered, setTriggered] = useState(false)
  const { ref, isVisible } = useScrollReveal({ threshold: 0.5 })

  useEffect(() => {
    if (isVisible && !triggered) {
      setTriggered(true)
      let start = 0
      const startTime = performance.now()
      const step = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount(Math.round(eased * end))
        if (progress < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }
  }, [isVisible, triggered, end, duration])

  return (
    <span ref={ref} className="stat-number font-display text-4xl md:text-5xl font-700 gradient-text">
      {count}{suffix}
    </span>
  )
}

export default function StatsSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[#0E0E1A]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2AB4D0]/15 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2AB4D0]/15 to-transparent" />
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={cn(
            'text-center mb-12 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <span className="section-tag mb-4 inline-flex">By The Numbers</span>
          <h2 className="font-display font-700 text-3xl md:text-4xl text-white">
            Results That Speak For Themselves
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {STATS.map((stat, i) => {
            // @ts-ignore
            const Icon = ICON_MAP[stat.icon]
            return (
              <div
                key={stat.label}
                className={cn(
                  'relative rounded-2xl p-6 md:p-8 text-center glow-border bg-[#141421]/60 transition-all duration-500',
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-[#2AB4D0]/10 flex items-center justify-center mx-auto mb-4">
                  <Icon size={20} className="text-[#2AB4D0]" />
                </div>
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                <p className="text-sm text-white/45 mt-2 font-medium">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
