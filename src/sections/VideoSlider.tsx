'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  {
    title: 'Brand films that feel premium',
    description: 'Cinematic edits and creative direction designed to make your brand look more valuable instantly.',
    src: 'https://cdn.coverr.co/videos/coverr-marketing-team-working-1567792621856?download=1080p',
  },
  {
    title: 'Campaign launches built for velocity',
    description: 'Fast-moving systems for offers, landing pages, ad creative, and measurable reporting.',
    src: 'https://cdn.coverr.co/videos/coverr-startup-team-collaborating-1568802037246?download=1080p',
  },
  {
    title: 'Social content with sharper retention',
    description: 'Reels, motion design, and visual systems that make every impression work harder.',
    src: 'https://cdn.coverr.co/videos/coverr-making-a-video-1571844378327?download=1080p',
  },
] as const

export default function VideoSlider() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActive((value) => (value + 1) % slides.length)
    }, 4200)

    return () => window.clearInterval(interval)
  }, [])

  const current = useMemo(() => slides[active], [active])

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div data-reveal className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#7de7ff]">Creative Preview</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
              Premium creative, shown with restraint.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-white/58">
            Three snapshots of the style language we bring to content, ad systems, and brand storytelling.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1320]">
          <div className="relative aspect-[16/9]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.src}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="absolute inset-0"
              >
                <video
                  className="h-full w-full object-cover"
                  src={current.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,12,20,0.2),rgba(7,12,20,0.72))]" />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-5 p-6 sm:p-8">
              <div className="max-w-xl">
                <p className="text-xs uppercase tracking-[0.3em] text-[#7de7ff]">Slide {active + 1}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">{current.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/62 sm:text-base">{current.description}</p>
              </div>

              <div className="flex gap-2">
                {slides.map((slide, index) => (
                  <button
                    key={slide.title}
                    onClick={() => setActive(index)}
                    className={`h-1.5 rounded-full transition-all ${index === active ? 'w-14 bg-[#2AB4D0]' : 'w-8 bg-white/18'}`}
                    aria-label={`Show slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
