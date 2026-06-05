import { ArrowRight, Bot } from 'lucide-react'
import Button from '@/components/Button'

export default function AISection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,36,0.96),rgba(8,14,24,0.98))] p-6 sm:p-8 lg:grid lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[#7de7ff]">AI Preview</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
            Get faster strategic direction before the first meeting.
          </h2>
          <p className="mt-5 text-base leading-7 text-white/58">
            Our AI Growth Advisor is designed to turn a few business inputs into a sharper channel and messaging starting point.
          </p>
        </div>

        <div className="mt-8 rounded-[1.8rem] border border-white/10 bg-[#0d1625] p-5 lg:mt-0">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#2AB4D0]/10 text-[#7de7ff]">
              <Bot size={20} />
            </div>
            <div>
              <p className="text-sm font-medium text-white">AI Growth Advisor</p>
              <p className="text-xs text-white/42">Preview interface</p>
            </div>
          </div>

          <div className="grid gap-4">
            <label className="grid gap-2">
              <span className="text-xs uppercase tracking-[0.22em] text-[#7de7ff]">Business</span>
              <input
                readOnly
                value="Premium skincare brand"
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/72 outline-none"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-xs uppercase tracking-[0.22em] text-[#7de7ff]">Budget</span>
              <input
                readOnly
                value="₹2,00,000 monthly"
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/72 outline-none"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-xs uppercase tracking-[0.22em] text-[#7de7ff]">Goal</span>
              <input
                readOnly
                value="Increase profitable purchases"
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/72 outline-none"
              />
            </label>

            <div className="rounded-[1.5rem] border border-[#2AB4D0]/12 bg-[#0b1422] px-4 py-4 text-sm leading-7 text-white/58">
              Suggested direction: Meta acquisition, search capture, creator-led content, and a tighter landing-page offer sequence.
            </div>

            <div className="pt-2">
              <Button href="/ai-assistant" className="gap-2">
                Try AI Growth Advisor
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
