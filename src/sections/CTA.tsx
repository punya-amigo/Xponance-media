import { ArrowRight } from 'lucide-react'
import Button from '@/components/Button'

export default function CTA() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#2AB4D0]/18 bg-[linear-gradient(180deg,rgba(14,22,34,0.98),rgba(8,13,23,1))] px-6 py-12 text-center sm:px-10 sm:py-14">
        <p className="text-xs uppercase tracking-[0.3em] text-[#7de7ff]">Ready to scale</p>
        <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
          Build a homepage, funnel, and growth system that actually feels premium.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/58 sm:text-lg">
          One clear next step: let’s map the fastest way to stronger positioning and more profitable conversion.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/contact" className="gap-2">
            Start your growth audit
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  )
}
