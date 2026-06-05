import { Search, Map, Rocket, TrendingUp } from 'lucide-react'

const steps = [
  {
    title: 'Discover',
    description:
      'We audit your category, funnel, offers, and current blind spots before deciding what to scale.',
    icon: Search,
  },
  {
    title: 'Strategize',
    description:
      'We define the message, channel mix, and conversion path that fits your growth stage and budget.',
    icon: Map,
  },
  {
    title: 'Execute',
    description:
      'Campaigns, landing pages, creative systems, and reporting all move together with clean ownership.',
    icon: Rocket,
  },
  {
    title: 'Scale',
    description:
      'We optimize spend, sharpen creative, and improve conversion efficiency instead of chasing vanity metrics.',
    icon: TrendingUp,
  },
]

export default function Process() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[#7de7ff]">Process</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            A simple growth process that keeps strategy and execution aligned.
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <article
                key={step.title}
                className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(14,22,34,0.96),rgba(8,13,23,0.98))] p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2AB4D0]/10 text-[#7de7ff]">
                    <Icon size={22} />
                  </div>
                  <span className="text-xs uppercase tracking-[0.24em] text-white/34">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-white">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/58">{step.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
