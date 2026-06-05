'use client'

import { Check, ArrowRight } from 'lucide-react'
import * as Icons from 'lucide-react'
import Link from 'next/link'
import { SERVICES } from '@/lib/data'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { cn } from '@/lib/utils'

function ServiceCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 })
  // @ts-ignore
  const IconComp = Icons[service.icon] as React.FC<{ size?: number; className?: string }>

  return (
    <div
      id={service.id}
      ref={ref}
      className={cn(
        'group relative rounded-2xl p-7 border border-white/8 bg-[#141421]/60 hover:border-[#2AB4D0]/30 transition-all duration-500 scroll-mt-28',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
      style={{ transitionDelay: `${(index % 3) * 80}ms` }}
    >
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#2AB4D0]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Icon + number */}
      <div className="flex items-start justify-between mb-5">
        <div className="w-14 h-14 rounded-2xl bg-[#2AB4D0]/10 border border-[#2AB4D0]/20 flex items-center justify-center group-hover:bg-[#2AB4D0]/20 group-hover:border-[#2AB4D0]/40 transition-all">
          <IconComp size={24} className="text-[#2AB4D0]" />
        </div>
        <span className="font-display font-700 text-5xl text-[#2AB4D0]/8 group-hover:text-[#2AB4D0]/15 transition-colors">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <h3 className="font-display font-700 text-xl text-white mb-3 leading-snug group-hover:text-[#4ECDE8] transition-colors">
        {service.title}
      </h3>
      <p className="text-sm text-white/45 leading-relaxed mb-5">
        {service.description}
      </p>

      {/* Features */}
      <ul className="grid grid-cols-2 gap-y-2 gap-x-3">
        {service.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-xs text-white/40">
            <Check size={11} className="text-[#2AB4D0] flex-shrink-0" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 pt-5 border-t border-white/6">
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-[#2AB4D0]/60 hover:text-[#2AB4D0] transition-colors group/link"
        >
          Get started with this service
          <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  )
}

export default function ServicesPageContent() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="relative pt-36 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[#0E0E1A]" />
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-[#2AB4D0]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={cn(
            'text-center max-w-3xl mx-auto mb-16 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <span className="section-tag mb-5 inline-flex">Our Services</span>
          <h1 className="font-display font-700 text-4xl sm:text-5xl md:text-6xl text-white mb-5 leading-tight">
            Everything You Need to{' '}
            <span className="gradient-text">Dominate Online</span>
          </h1>
          <p className="text-white/50 text-lg md:text-xl leading-relaxed">
            Eight core service pillars, fully integrated, all under one roof. From traffic to conversion to retention — we've got every stage of your growth covered.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
