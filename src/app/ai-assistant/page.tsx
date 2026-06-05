'use client'

import type { FormEvent } from 'react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Sparkles } from 'lucide-react'
import Button from '@/components/Button'
import StrategyChatMessage, {
  type StrategyChatMessageData,
} from '@/components/ai/StrategyChatMessage'
import StrategyPresets from '@/components/ai/StrategyPresets'
import {
  aiStrategyRequestSchema,
  type AiStrategyRequest,
  type AiStrategyResponse,
  budgetOptions,
  businessTypePresets,
  goalOptions,
} from '@/lib/ai-strategy'

const initialMessages: StrategyChatMessageData[] = [
  {
    id: 'welcome',
    kind: 'welcome',
    role: 'assistant',
  },
]

export default function AIAssistantPage() {
  const [businessType, setBusinessType] = useState<string>(businessTypePresets[0])
  const [budget, setBudget] = useState<string>(budgetOptions[2])
  const [goal, setGoal] = useState<string>(goalOptions[0])
  const [messages, setMessages] = useState<StrategyChatMessageData[]>(initialMessages)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [messages])

  const helperText = useMemo(
    () =>
      'Choose a starting business type, adjust budget and goal, then generate a grounded media and content plan.',
    []
  )

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const parsed = aiStrategyRequestSchema.safeParse({
      businessType,
      budget,
      goal,
    })

    if (!parsed.success || isSubmitting) {
      return
    }

    const payload: AiStrategyRequest = parsed.data
    const loadingId = crypto.randomUUID()

    setIsSubmitting(true)
    setMessages((current) => [
      ...current,
      {
        id: crypto.randomUUID(),
        kind: 'user',
        role: 'user',
        payload,
      },
      {
        id: loadingId,
        kind: 'loading',
        role: 'assistant',
      },
    ])

    try {
      const response = await fetch('/api/ai-strategy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
        body: JSON.stringify(payload),
      })

      const body = (await response.json()) as
        | { data: AiStrategyResponse }
        | { error?: string }

      if (!response.ok || !('data' in body)) {
        throw new Error(
          'error' in body && body.error
            ? body.error
            : 'Something went wrong while generating the strategy.'
        )
      }

      setMessages((current) =>
        current.map((message) =>
          message.id === loadingId
            ? {
                id: loadingId,
                kind: 'response',
                role: 'assistant',
                payload: body.data,
              }
            : message
        )
      )
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : 'Something went wrong while generating the strategy.'

      setMessages((current) =>
        current.map((entry) =>
          entry.id === loadingId
            ? {
                id: loadingId,
                kind: 'error',
                role: 'assistant',
                message,
              }
            : entry
        )
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.28em] text-[#7de7ff]">
            <Sparkles size={14} />
            AI Growth Assistant
          </div>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Founder-ready strategy guidance in one clean workflow.
          </h1>
          <p className="mt-4 text-base leading-8 text-white/58 sm:text-lg">{helperText}</p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,38,0.96),rgba(10,16,27,0.98))]">
          <div className="border-b border-white/8 px-5 py-4 sm:px-6">
            <p className="text-sm font-medium text-white">Strategy chat</p>
            <p className="mt-1 text-sm text-white/46">
              Minimal UI, structured output, and advice shaped for real budget decisions.
            </p>
          </div>

          <div className="max-h-[60vh] overflow-y-auto px-4 py-5 sm:px-6">
            <div className="grid gap-4">
              {messages.map((message) => (
                <StrategyChatMessage key={message.id} message={message} />
              ))}
              <div ref={bottomRef} />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="border-t border-white/8 px-4 py-5 sm:px-6">
            <div className="grid gap-5">
              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.22em] text-[#7de7ff]">
                  Quick start
                </p>
                <StrategyPresets
                  options={businessTypePresets}
                  selected={businessType}
                  onSelect={setBusinessType}
                />
              </div>

              <div className="grid gap-4 md:grid-cols-[1.2fr_0.9fr_0.9fr]">
                <label className="grid gap-2">
                  <span className="text-sm font-medium text-white">Business type</span>
                  <input
                    value={businessType}
                    onChange={(event) => setBusinessType(event.target.value)}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition focus:border-[#2AB4D0]/40"
                    placeholder="Describe the business"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-medium text-white">Monthly budget</span>
                  <select
                    value={budget}
                    onChange={(event) => setBudget(event.target.value)}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition focus:border-[#2AB4D0]/40"
                  >
                    {budgetOptions.map((option) => (
                      <option key={option} value={option} className="bg-[#0d1625] text-white">
                        {option}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-medium text-white">Primary goal</span>
                  <select
                    value={goal}
                    onChange={(event) => setGoal(event.target.value)}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition focus:border-[#2AB4D0]/40"
                  >
                    {goalOptions.map((option) => (
                      <option key={option} value={option} className="bg-[#0d1625] text-white">
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-white/44">
                  Generates strategy, platform mix, budget split, content ideas, and one immediate quick win.
                </p>
                <Button type="submit" disabled={isSubmitting} className="min-w-[220px] justify-center">
                  {isSubmitting ? 'Generating strategy...' : 'Generate strategy'}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
