'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Phone, Sparkles, X } from 'lucide-react'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Button from '@/components/Button'
import { NAV_LINKS, SITE_CONFIG } from '@/lib/data'
import { cn, formatPhoneHref } from '@/lib/utils'

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-[1.8rem] border border-white/10 bg-[rgba(7,17,31,0.72)] px-4 py-3 backdrop-blur-xl">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#2AB4D0]/25 bg-[#2AB4D0]/10">
              <span className="font-display text-sm font-bold tracking-[0.25em] text-[#7de7ff]">XM</span>
            </div>
            <div>
              <p className="font-display text-sm font-semibold tracking-[0.26em] text-white">XPONANCE</p>
              <p className="text-[11px] uppercase tracking-[0.36em] text-[#7de7ff]">Media</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'rounded-full px-4 py-2 text-sm transition-colors',
                    active ? 'bg-[#2AB4D0]/12 text-white' : 'text-white/58 hover:text-white'
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={formatPhoneHref(SITE_CONFIG.phone[0])}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white/64"
            >
              <Phone size={14} className="text-[#7de7ff]" />
              {SITE_CONFIG.phone[0]}
            </a>
            <Button href="/contact">Book a strategy call</Button>
          </div>

          <button
            onClick={() => setOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 text-white lg:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/55 backdrop-blur-md lg:hidden"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 flex h-full w-[82vw] max-w-sm flex-col border-l border-white/10 bg-[#0c1423] p-5"
            >
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="font-display text-lg text-white">Navigation</p>
                  <p className="mt-1 text-sm text-white/45">Explore the experience</p>
                </div>
                <Sparkles size={18} className="text-[#7de7ff]" />
              </div>

              <div className="grid gap-2">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'rounded-2xl px-4 py-4 text-base',
                      pathname === link.href ? 'bg-[#2AB4D0]/12 text-white' : 'bg-white/[0.03] text-white/68'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="mt-auto rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs uppercase tracking-[0.26em] text-[#7de7ff]">Need clarity fast?</p>
                <p className="mt-3 text-sm leading-6 text-white/56">
                  Talk to the team about your current funnel, creative bottlenecks, and scale plan.
                </p>
                <div className="mt-5">
                  <Button href="/contact" className="w-full">
                    Contact Xponance
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
