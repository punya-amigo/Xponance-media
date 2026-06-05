'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import * as Icons from 'lucide-react'
import { SERVICES } from '@/lib/data'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { cn } from '@/lib/utils'

function ServiceCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 })
  // @ts-ignore
  const IconComponent = Icons[service.icon] as React.FC<{ size?: number; className?: string }>

  return (
    <div
      ref={ref}
      className={cn(
        'service-card p-6 group cursor-pointer transition-all duration-500',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-[#2AB4D0]/10 border border-[#2AB4D0]/20 flex items-center justify-center mb-4 group-hover:bg-[#2AB4D0]/20 group-hover:border-[#2AB4D0]/40 transition-all">
        <IconComponent size={22} className="text-[#2AB4D0]" />
      </div>

      {/* Content */}
      <h3 className="font-display font-600 text-[15px] text-white mb-2 leading-snug group-hover:text-[#2AB4D0] transition-colors">
        {service.shortTitle}
      </h3>
      <p className="text-sm text-white/45 leading-relaxed mb-4 line-clamp-2">
        {service.description}
      </p>

      {/* Learn more */}
      <div className="flex items-center gap-1.5 text-xs font-medium text-[#2AB4D0]/60 group-hover:text-[#2AB4D0] transition-colors">
        <span>Learn more</span>
        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  )
}

export default function ServicesSection() {
  const { ref: headRef, isVisible: headVisible } = useScrollReveal()

  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#141421]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2AB4D0]/20 to-transparent" />
      <div className="absolute right-0 top-1/3 w-64 h-64 bg-[#2AB4D0]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headRef}
          className={cn(
            'max-w-2xl mb-14 transition-all duration-700',
            headVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <span className="section-tag mb-4 inline-flex">Our Services</span>
          <h2 className="font-display font-700 text-3xl sm:text-4xl lg:text-5xl text-white mb-4 leading-tight">
            Everything Your Brand Needs to{' '}
            <span className="gradient-text">Dominate Online</span>
          </h2>
          <p className="text-white/50 text-lg leading-relaxed">
            From strategy to execution, we cover every dimension of digital growth under one roof.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {SERVICES.map((service, i) => (
            <Link key={service.id} href={`/services#${service.id}`}>
              <ServiceCard service={service} index={i} />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/services"
            className="btn-outline inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium"
          >
            View All Services
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
