'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { STATS } from '@/lib/data'

function Counter({ value, suffix, start }: { value: number; suffix: string; start: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return

    const startedAt = performance.now()
    let frame = 0

    const tick = (time: number) => {
      const progress = Math.min((time - startedAt) / 1200, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(value * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [start, value])

  return (
    <span className="font-display text-4xl font-semibold text-white sm:text-5xl">
      {count}
      <span className="text-[#2AB4D0]">{suffix}</span>
    </span>
  )
}

export default function Stats() {
  const [started, setStarted] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[#7de7ff]">Stats</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            Signals that make the right clients lean in.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {STATS.map((stat) => {
            const Icon = stat.icon

            return (
              <div
                key={stat.label}
                className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,36,0.96),rgba(9,14,24,0.98))] p-6"
              >
                <motion.div
                  whileHover={{ y: -6, boxShadow: '0 18px 40px rgba(42,180,208,0.12)' }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="rounded-[1.5rem]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2AB4D0]/10 text-[#7de7ff]">
                    <Icon size={22} />
                  </div>
                  <div className="mt-8">
                    <Counter value={stat.value} suffix={stat.suffix} start={started} />
                    <p className="mt-3 text-sm uppercase tracking-[0.22em] text-white/42">{stat.label}</p>
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
