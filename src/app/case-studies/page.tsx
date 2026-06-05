import type { Metadata } from 'next'
import { PORTFOLIO_DATA } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Selected Xponance Media projects across hospitality, real estate, retail, healthcare, and more.',
}

export default function CaseStudiesPage() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[#7de7ff]">Case Studies</p>
          <h1 className="mt-4 font-display text-5xl font-semibold text-white">Proof built from real sectors, not generic templates.</h1>
          <p className="mt-5 text-lg leading-8 text-white/58">
            A quick view of the categories, strategic challenges, and growth stories Xponance Media has worked across.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {PORTFOLIO_DATA.map((item) => (
            <article
              key={item.genre}
              className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,38,0.96),rgba(10,16,27,0.98))] p-6"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-[#7de7ff]">{item.genre}</p>
              <div className="mt-5 grid gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-white/45">Challenge</p>
                  <p className="mt-2 text-sm leading-7 text-white/58">{item.challenge}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-white/45">Strategy</p>
                  <p className="mt-2 text-sm leading-7 text-white/58">{item.strategy}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-white/45">Impact</p>
                  <p className="mt-2 text-sm leading-7 text-white/58">{item.impact}</p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.clients.slice(0, 6).map((client) => (
                  <span key={client.id} className="rounded-full bg-white/[0.04] px-3 py-1.5 text-xs text-white/56">
                    {client.name}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
