'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type StrategyPresetsProps = {
  options: readonly string[]
  selected: string
  onSelect: (value: string) => void
}

export default function StrategyPresets({
  options,
  selected,
  onSelect,
}: StrategyPresetsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => {
        const active = selected === option

        return (
          <motion.button
            key={option}
            type="button"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            onClick={() => onSelect(option)}
            className={cn(
              'rounded-full border px-3.5 py-2 text-sm transition-colors',
              active
                ? 'border-[#2AB4D0]/40 bg-[#2AB4D0]/12 text-white'
                : 'border-white/10 bg-white/[0.03] text-white/58 hover:border-[#2AB4D0]/20 hover:text-white'
            )}
          >
            {option}
          </motion.button>
        )
      })}
    </div>
  )
}
