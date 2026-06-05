import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PORTFOLIO_DATA } from '@/lib/data'

const featuredCase = PORTFOLIO_DATA[1]

export default function CasePreview() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div data-reveal className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(16,23,37,0.96),rgba(10,15,26,0.98))] p-6 sm:p-8 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        <div className="lg:pr-6">
          <p className="text-xs uppercase tracking-[0.3em] text-[#7de7ff]">Case Preview</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
            Hospitality campaigns engineered for direct bookings and repeat demand.
          </h2>
          <p className="mt-5 text-base leading-7 text-white/58">{featuredCase.howWeHelped}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-[#7de7ff]">Revenue Mix</p>
              <p className="mt-3 font-display text-3xl text-white">3x</p>
              <p className="mt-2 text-sm text-white/56">Increase in direct, commission-free footfall.</p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-[#7de7ff]">Creative Output</p>
              <p className="mt-3 font-display text-3xl text-white">12+</p>
              <p className="mt-2 text-sm text-white/56">High-retention reels mapped to campaign goals.</p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-[#7de7ff]">Media Focus</p>
              <p className="mt-3 font-display text-3xl text-white">Meta</p>
              <p className="mt-2 text-sm text-white/56">Targeted reach optimized around direct intent.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-[1.8rem] border border-white/10 bg-[#0d1625] p-6 lg:mt-0">
          <p className="text-sm uppercase tracking-[0.24em] text-white/42">{featuredCase.genre}</p>
          <div className="mt-5 grid gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[#7de7ff]">Challenge</p>
              <p className="mt-2 text-sm leading-7 text-white/58">{featuredCase.challenge}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[#7de7ff]">Strategy</p>
              <p className="mt-2 text-sm leading-7 text-white/58">{featuredCase.strategy}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[#7de7ff]">Client Set</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {featuredCase.clients.slice(0, 5).map((client) => (
                  <span key={client.id} className="rounded-full bg-white/[0.04] px-3 py-1.5 text-xs text-white/58">
                    {client.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/case-studies"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#7de7ff]"
          >
            Explore all case studies
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
