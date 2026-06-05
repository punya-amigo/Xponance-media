'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote:
      'They brought product-level thinking to our marketing. Every ad, page, and creative decision suddenly made more sense.',
    name: 'Founder, Hospitality Brand',
  },
  {
    quote:
      'The team helped us look more premium within weeks, and our campaign performance improved because the brand finally felt coherent.',
    name: 'Director, Real Estate Group',
  },
  {
    quote:
      'Fast execution, clean communication, and better reporting than agencies twice the size.',
    name: 'Marketing Lead, Consumer Brand',
  },
] as const

export default function Testimonials() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div data-reveal className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-[#7de7ff]">Testimonials</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            What clients say when execution actually feels sharp.
          </h2>
        </div>

        <div className="flex gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {testimonials.map((testimonial) => (
            <motion.article
              key={testimonial.name}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="min-w-[320px] flex-1 rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(16,24,39,0.95),rgba(10,16,27,0.98))] p-6 sm:min-w-[380px]"
            >
              <p className="text-lg leading-8 text-white/78">“{testimonial.quote}”</p>
              <p className="mt-8 text-sm uppercase tracking-[0.22em] text-[#7de7ff]">{testimonial.name}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
