'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight, LineChart, Sparkles } from 'lucide-react'
import Button from '@/components/Button'
import { initHeroAnimation } from '@/animations/hero'

const metrics = [
  { label: 'ROAS uplift', value: '+38%' },
  { label: 'Lead quality', value: '+27%' },
  { label: 'Cost efficiency', value: '-19%' },
]

export default function Hero() {
  const scopeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scope = scopeRef.current
    if (!scope) return

    const timeline = initHeroAnimation(scope)
    return () => {
      timeline.kill()
    }
  }, [])

  return (
    <section className="relative overflow-hidden px-4 pb-18 pt-12 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(42,180,208,0.18),transparent_30%),radial-gradient(circle_at_82%_16%,rgba(42,180,208,0.1),transparent_22%)]" />
      <div className="absolute left-1/2 top-0 h-px w-[72%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#2AB4D0]/30 to-transparent" />

      <div
        ref={scopeRef}
        className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]"
      >
        <div className="max-w-3xl">
          <div
            data-hero="eyebrow"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.28em] text-[#7de7ff]"
          >
            <Sparkles size={14} />
            Premium growth agency
          </div>

          <h1
            data-hero="title"
            className="mt-7 text-balance font-display text-5xl font-semibold leading-[0.93] text-white sm:text-6xl lg:text-7xl"
          >
            We Engineer Growth,
            <span className="block bg-gradient-to-r from-[#89ecff] to-[#2AB4D0] bg-clip-text text-transparent">
              Not Just Marketing
            </span>
          </h1>

          <p
            data-hero="subtitle"
            className="mt-6 max-w-2xl text-lg leading-8 text-white/62 sm:text-xl"
          >
            Xponance Media builds sharper positioning, better conversion paths, and cleaner acquisition systems for brands ready to scale intelligently.
          </p>

          <div data-hero="actions" className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" className="gap-2">
              Book a strategy call
              <ArrowRight size={18} />
            </Button>
            <Button href="/services" variant="secondary">
              Explore services
            </Button>
          </div>
        </div>

        <div data-hero="card" className="relative">
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,36,0.94),rgba(8,14,25,0.98))] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.3)]">
            <div className="flex items-center justify-between border-b border-white/8 pb-5">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[#7de7ff]">Growth snapshot</p>
                <p className="mt-2 text-sm text-white/48">A cleaner, more profitable acquisition system.</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2AB4D0]/10 text-[#7de7ff]">
                <LineChart size={20} />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-[0.8fr_1.2fr] gap-6">
              <div className="flex items-end gap-3 rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5">
                {[42, 58, 76, 94].map((height, index) => (
                  <div
                    key={height}
                    data-hero="bar"
                    className={`flex-1 rounded-full bg-gradient-to-t from-[#148ca6] to-[#79ebff] ${index === 3 ? 'opacity-100' : 'opacity-70'}`}
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>

              <div className="grid gap-3">
                {metrics.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.4rem] border border-white/8 bg-white/[0.03] px-4 py-4"
                  >
                    <p className="text-xs uppercase tracking-[0.22em] text-white/40">{item.label}</p>
                    <p className="mt-2 font-display text-3xl font-semibold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-[#2AB4D0]/15 bg-[#0d1828] px-4 py-4 text-sm leading-7 text-white/58">
              Brand, media, landing pages, and reporting all aligned around one goal: profitable growth.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
