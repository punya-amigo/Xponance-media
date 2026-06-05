'use client'

import { motion } from 'framer-motion'
import { Bot, Sparkles, User2 } from 'lucide-react'
import type { AiStrategyRequest, AiStrategyResponse } from '@/lib/ai-strategy'
import { cn } from '@/lib/utils'
import StrategyResponse from '@/components/ai/StrategyResponse'

export type StrategyChatMessageData =
  | {
      id: string
      kind: 'welcome'
      role: 'assistant'
    }
  | {
      id: string
      kind: 'user'
      role: 'user'
      payload: AiStrategyRequest
    }
  | {
      id: string
      kind: 'loading'
      role: 'assistant'
    }
  | {
      id: string
      kind: 'response'
      role: 'assistant'
      payload: AiStrategyResponse
    }
  | {
      id: string
      kind: 'error'
      role: 'assistant'
      message: string
    }

type StrategyChatMessageProps = {
  message: StrategyChatMessageData
}

export default function StrategyChatMessage({
  message,
}: StrategyChatMessageProps) {
  const isUser = message.role === 'user'

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={cn('flex gap-3', isUser ? 'justify-end' : 'justify-start')}
    >
      {!isUser ? (
        <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl border border-[#2AB4D0]/20 bg-[#2AB4D0]/10 text-[#7de7ff]">
          {message.kind === 'welcome' ? <Sparkles size={18} /> : <Bot size={18} />}
        </div>
      ) : null}

      <div
        className={cn(
          'max-w-3xl rounded-[1.6rem] border p-4 sm:p-5',
          isUser
            ? 'border-[#2AB4D0]/20 bg-[#122235] text-white'
            : 'border-white/10 bg-[linear-gradient(180deg,rgba(18,26,40,0.96),rgba(10,16,28,0.98))] text-white'
        )}
      >
        {message.kind === 'welcome' ? (
          <div>
            <p className="text-sm leading-7 text-white/72">
              Tell me what kind of business you run, the monthly budget you can commit, and the goal you care about most. I&apos;ll return a focused growth plan, not a generic marketing checklist.
            </p>
          </div>
        ) : null}

        {message.kind === 'user' ? (
          <div className="space-y-3">
            <p className="text-sm font-medium text-white">Strategy request</p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs text-white/78">
                {message.payload.businessType}
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs text-white/78">
                {message.payload.budget}
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs text-white/78">
                {message.payload.goal}
              </span>
            </div>
          </div>
        ) : null}

        {message.kind === 'loading' ? (
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#7de7ff]" />
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#7de7ff] [animation-delay:120ms]" />
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#7de7ff] [animation-delay:240ms]" />
            </div>
            <p className="text-sm text-white/62">Generating strategy...</p>
          </div>
        ) : null}

        {message.kind === 'response' ? (
          <StrategyResponse data={message.payload} />
        ) : null}

        {message.kind === 'error' ? (
          <div>
            <p className="text-sm font-medium text-white">Unable to generate strategy</p>
            <p className="mt-2 text-sm leading-7 text-white/62">{message.message}</p>
          </div>
        ) : null}
      </div>

      {isUser ? (
        <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white/72">
          <User2 size={18} />
        </div>
      ) : null}
    </motion.div>
  )
}
