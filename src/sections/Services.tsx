'use client'

import type { ComponentType } from 'react'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { SERVICES } from '@/lib/data'

export default function Services() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-[#7de7ff]">Services</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
              Six focused capabilities. One unified growth system.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-white/58">
            The goal is not more activity. It is better positioning, cleaner execution, and stronger conversion economics.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {SERVICES.slice(0, 6).map((service) => {
            const Icon = Icons[service.icon as keyof typeof Icons] as ComponentType<{
              size?: number
              className?: string
            }>

            return (
              <motion.article
                key={service.id}
                whileHover={{
                  y: -8,
                  boxShadow: '0 24px 54px rgba(42,180,208,0.12)',
                  borderColor: 'rgba(42,180,208,0.24)',
                }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,36,0.96),rgba(8,14,24,0.98))] p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2AB4D0]/10 text-[#7de7ff]">
                    <Icon size={22} />
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-white/42">
                    {service.shortTitle}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-2xl font-semibold text-white">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/58">{service.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {service.features.slice(0, 2).map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full bg-white/[0.04] px-3 py-1.5 text-xs text-white/56"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
