import type { ReactNode } from 'react'
import type { AiStrategyResponse } from '@/lib/ai-strategy'

type StrategyResponseProps = {
  data: AiStrategyResponse
}

function Section({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <section className="rounded-[1.35rem] border border-white/8 bg-white/[0.03] p-4">
      <p className="text-xs uppercase tracking-[0.22em] text-[#7de7ff]">{title}</p>
      <div className="mt-3">{children}</div>
    </section>
  )
}

export default function StrategyResponse({ data }: StrategyResponseProps) {
  return (
    <div className="grid gap-4">
      <Section title="Strategy">
        <p className="text-sm leading-7 text-white/72">{data.strategy}</p>
      </Section>

      <Section title="Platforms">
        <div className="flex flex-wrap gap-2">
          {data.platforms.map((platform) => (
            <span
              key={platform}
              className="rounded-full border border-white/10 bg-[#0d1625] px-3 py-1.5 text-xs text-white/70"
            >
              {platform}
            </span>
          ))}
        </div>
      </Section>

      <Section title="Budget Split">
        <div className="grid gap-3">
          {data.budgetSplit.map((item) => (
            <div
              key={`${item.channel}-${item.percent}`}
              className="rounded-2xl border border-white/8 bg-[#0d1625] p-3"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-medium text-white">{item.channel}</p>
                <p className="font-display text-lg text-[#7de7ff]">{item.percent}%</p>
              </div>
              <p className="mt-2 text-xs leading-6 text-white/54">{item.reason}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Content Ideas">
        <ul className="grid gap-2 text-sm text-white/72">
          {data.contentIdeas.map((idea) => (
            <li key={idea} className="rounded-2xl border border-white/8 bg-[#0d1625] px-3 py-3 leading-6">
              {idea}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Quick Win">
        <p className="text-sm leading-7 text-white/72">{data.quickWin}</p>
      </Section>
    </div>
  )
}
