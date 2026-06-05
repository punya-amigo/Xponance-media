'use client'

import type { ButtonHTMLAttributes, ReactNode } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type ButtonProps = {
  href?: string
  children: ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'ghost'
} & ButtonHTMLAttributes<HTMLButtonElement>

const variants = {
  primary:
    'bg-gradient-to-r from-[#2AB4D0] to-[#1A8BA3] text-[#04131d] shadow-[0_16px_36px_rgba(42,180,208,0.24)]',
  secondary:
    'border border-white/12 bg-white/[0.04] text-white hover:border-[#2AB4D0]/40 hover:bg-[#2AB4D0]/10',
  ghost: 'text-white/78 hover:text-white',
}

export default function Button({
  href,
  children,
  className,
  variant = 'primary',
  ...props
}: ButtonProps) {
  const isDisabled = Boolean(props.disabled)
  const shared = cn(
    'inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60',
    variants[variant],
    className
  )

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2, ease: 'easeOut' }}>
        <Link href={href} className={shared}>
          {children}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.div
      whileHover={isDisabled ? undefined : { scale: 1.03 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      <button className={shared} {...props}>
        {children}
      </button>
    </motion.div>
  )
}
