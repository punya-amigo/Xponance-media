'use client'

import { Lightbulb, Target, Rocket, Users } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { cn } from '@/lib/utils'

const VALUES = [
  { icon: Lightbulb, title: 'Creative Excellence', description: 'We push the boundaries of creative storytelling to craft campaigns that don\'t just get seen — they get remembered.' },
  { icon: Target, title: 'Results First', description: 'Every strategy, every creative decision, every rupee of your budget is measured against one standard: does it drive growth?' },
  { icon: Rocket, title: 'Innovation Always', description: 'We stay ahead of algorithm changes, platform shifts, and emerging trends so your brand always leads, never lags.' },
  { icon: Users, title: 'True Partnership', description: 'We invest in understanding your business as deeply as you do — your goals become our goals, your wins become our wins.' },
]

export default function AboutContent() {
  const { ref: storyRef, isVisible: storyVisible } = useScrollReveal()
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollReveal()

  return (
    <>
      {/* Story section */}
      <section className="relative py-20 bg-[#0E0E1A]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2AB4D0]/15 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div
              ref={storyRef}
              className={cn(
                'transition-all duration-700',
                storyVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              )}
            >
              <span className="section-tag mb-5 inline-flex">Our Story</span>
              <h2 className="font-display font-700 text-3xl sm:text-4xl text-white mb-5 leading-tight">
                Founded to Help Businesses{' '}
                <span className="gradient-text">Scale Digitally</span>
              </h2>
              <div className="space-y-4 text-white/50 text-[15px] leading-relaxed">
                <p>
                  At Xponance Media, we were founded with a clear vision: to help businesses of all sizes thrive in the ever-evolving digital landscape. In today's fast-paced world, a strong online presence isn't a luxury — it's a necessity.
                </p>
                <p>
                  We are a full-service digital marketing agency driven by creativity, strategy, and performance. We combine data-backed insights with innovative storytelling to create impactful brand experiences that connect, engage, and convert.
                </p>
                <p>
                  From startups launching their first product to established enterprises looking to dominate new markets — we partner with brands that are ready to grow, disrupt, and lead in their industries.
                </p>
              </div>
            </div>

            {/* Visual element */}
            <div
              className={cn(
                'transition-all duration-700',
                storyVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              )}
              style={{ transitionDelay: '150ms' }}
            >
              <div className="relative rounded-2xl overflow-hidden glow-border bg-[#141421]/60 p-8">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2AB4D0]/40 to-transparent" />

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { value: '50+', label: 'Clients Served' },
                    { value: '3+', label: 'Years of Excellence' },
                    { value: '8', label: 'Services Offered' },
                    { value: '95%', label: 'Client Retention' },
                  ].map((s) => (
                    <div key={s.label} className="rounded-xl bg-[#2AB4D0]/6 border border-[#2AB4D0]/12 p-4 text-center">
                      <div className="font-display font-700 text-2xl gradient-text mb-1">{s.value}</div>
                      <div className="text-xs text-white/40">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <div className="rounded-xl bg-[#2AB4D0]/5 border border-[#2AB4D0]/15 p-5">
                  <p className="text-sm text-white/60 leading-relaxed italic">
                    "Every campaign we craft is designed with a purpose — to maximize visibility, boost engagement, and accelerate business growth."
                  </p>
                  <p className="text-xs text-[#2AB4D0] font-600 mt-3">— Xponance Media Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="relative py-20 bg-[#141421]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2AB4D0]/15 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={valuesRef}
            className={cn(
              'text-center max-w-xl mx-auto mb-12 transition-all duration-700',
              valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
          >
            <span className="section-tag mb-4 inline-flex">Our Values</span>
            <h2 className="font-display font-700 text-3xl sm:text-4xl text-white">
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value, i) => {
              const Icon = value.icon
              const { ref: vRef, isVisible: vVisible } = useScrollReveal()
              return (
                <div
                  key={value.title}
                  ref={vRef}
                  className={cn(
                    'rounded-2xl p-6 border border-white/8 bg-[#0E0E1A]/60 hover:border-[#2AB4D0]/25 transition-all duration-500 hover:-translate-y-1',
                    vVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  )}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#2AB4D0]/10 border border-[#2AB4D0]/20 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-[#2AB4D0]" />
                  </div>
                  <h3 className="font-display font-600 text-white text-[15px] mb-2">{value.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team intro */}
      <section className="relative py-20 bg-[#0E0E1A]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2AB4D0]/15 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-tag mb-5 inline-flex">Who We Are</span>
          <h2 className="font-display font-700 text-3xl sm:text-4xl text-white mb-5">
            A Team of <span className="gradient-text">Strategists, Creatives & Digital Experts</span>
          </h2>
          <p className="text-white/50 text-lg leading-relaxed">
            We are passionate about turning ideas into powerful digital success stories. Headquartered in Jaipur, Rajasthan, we serve clients across India — bringing the energy and creativity of a startup with the discipline and rigor of an enterprise agency.
          </p>
        </div>
      </section>
    </>
  )
}
