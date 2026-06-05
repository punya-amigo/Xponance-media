'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Play, TrendingUp, Users, Award } from 'lucide-react'

const ROTATING_WORDS = ['Growth', 'Visibility', 'Conversion', 'ROI', 'Results']

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % ROTATING_WORDS.length)
        setIsTransitioning(false)
      }, 300)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Layered background */}
      <div className="absolute inset-0 bg-[#141421]" />
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 dot-grid opacity-40" />

      {/* Glowing orb top right */}
      <div className="absolute top-[15%] right-[8%] w-[380px] h-[380px] rounded-full bg-[#2AB4D0]/8 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-[280px] h-[280px] rounded-full bg-[#1A8BA3]/6 blur-[80px] pointer-events-none" />

      {/* Floating decorative elements */}
      <div className="absolute top-[25%] right-[12%] hidden lg:block">
        <div className="relative w-16 h-16 animate-float">
          <div className="absolute inset-0 rounded-2xl bg-[#2AB4D0]/15 border border-[#2AB4D0]/20 backdrop-blur-sm flex items-center justify-center">
            <TrendingUp size={24} className="text-[#2AB4D0]" />
          </div>
          <div className="absolute -inset-1 rounded-2xl bg-[#2AB4D0]/10 blur-md" />
        </div>
      </div>

      <div className="absolute top-[55%] right-[6%] hidden lg:block" style={{ animationDelay: '2s' }}>
        <div className="relative w-14 h-14 animate-float" style={{ animationDelay: '1s' }}>
          <div className="absolute inset-0 rounded-xl bg-[#2AB4D0]/10 border border-[#2AB4D0]/15 flex items-center justify-center">
            <Users size={18} className="text-[#4ECDE8]" />
          </div>
        </div>
      </div>

      {/* Star field */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() > 0.7 ? '2px' : '1px',
              height: Math.random() > 0.7 ? '2px' : '1px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
            }}
          />
        ))}
        {/* Cyan accent dots */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`cyan-${i}`}
            className="absolute rounded-full bg-[#2AB4D0]"
            style={{
              width: '2px',
              height: '2px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.4,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-4xl">
          {/* Tag */}
          <div
            className="inline-flex items-center gap-2 mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
          >
            <span className="section-tag">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2AB4D0] animate-pulse" />
              A Digital Marketing Company
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display font-700 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            <span className="text-white block mb-1">Drive</span>
            <span
              className="gradient-text block transition-all duration-300"
              style={{
                opacity: isTransitioning ? 0 : 1,
                transform: isTransitioning ? 'translateY(-8px)' : 'translateY(0)',
              }}
            >
              {ROTATING_WORDS[wordIndex]}
            </span>
            <span className="text-white block mt-1">That Matters</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg sm:text-xl text-white/55 max-w-2xl leading-relaxed mb-10 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
          >
            Xponance Media is a full-service digital marketing agency combining data-backed insights with
            innovative storytelling — connecting brands with audiences that convert.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 mb-14 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.45s', animationFillMode: 'forwards' }}
          >
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold"
            >
              Get a Free Strategy Call
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/services"
              className="btn-outline inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base"
            >
              <Play size={16} fill="currentColor" />
              Explore Our Services
            </Link>
          </div>

          {/* Mini stats */}
          <div
            className="flex flex-wrap gap-8 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.55s', animationFillMode: 'forwards' }}
          >
            {[
              { value: '50+', label: 'Happy Clients' },
              { value: '3+', label: 'Years Experience' },
              { value: '8', label: 'Core Services' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <span className="font-display text-2xl font-700 gradient-text">{stat.value}</span>
                <span className="text-sm text-white/40 leading-tight max-w-[80px]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs text-white/60 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#2AB4D0]/60 to-transparent" />
      </div>
    </section>
  )
}
