'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'
import { NAV_LINKS, SITE_CONFIG } from '@/lib/data'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'nav-blur bg-[#141421]/80 border-b border-[#2AB4D0]/10 py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 bg-[#2AB4D0] rounded-lg opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative w-9 h-9 flex items-center justify-center">
                  <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
                    <path d="M6 6L16 18L6 30H10L18 20.4L26 30H30L20 18L30 6H26L18 15.6L10 6H6Z" fill="#2AB4D0"/>
                    <path d="M18 15.6L22 10.8L26 6H30L22 15.6L18 20.4L14 15.6L6 6H10L14 10.8L18 15.6Z" fill="#4ECDE8" opacity="0.7"/>
                    <path d="M26 4H32L20 18L32 32H26L18 22.5L10 32H4L16 18L4 4H10L18 13.5L26 4Z" fill="none" stroke="#2AB4D0" strokeWidth="0" />
                    <circle cx="28" cy="8" r="3" fill="#2AB4D0" opacity="0.8"/>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-700 text-[15px] text-white tracking-wide">XPONANCE</span>
                <span className="font-display font-500 text-[11px] text-[#2AB4D0] tracking-[0.2em]">MEDIA</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                      isActive
                        ? 'text-[#2AB4D0]'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#2AB4D0] rounded-full" />
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={`tel:${SITE_CONFIG.phone[0].replace(/\s|-/g, '')}`}
                className="flex items-center gap-2 text-sm text-[#2AB4D0] hover:text-white transition-colors"
              >
                <Phone size={14} />
                <span className="font-medium">{SITE_CONFIG.phone[0]}</span>
              </a>
              <Link
                href="/contact"
                className="btn-primary px-5 py-2.5 text-sm rounded-lg font-semibold"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          'fixed inset-0 z-40 md:hidden transition-all duration-300',
          isMobileOpen ? 'visible' : 'invisible'
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            'absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300',
            isMobileOpen ? 'opacity-100' : 'opacity-0'
          )}
          onClick={() => setIsMobileOpen(false)}
        />

        {/* Drawer */}
        <div
          className={cn(
            'absolute top-0 right-0 h-full w-72 bg-[#1C1C2E] border-l border-[#2AB4D0]/15 transition-transform duration-300 flex flex-col',
            isMobileOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex items-center justify-between p-5 border-b border-white/10">
            <span className="font-display font-600 text-white">Menu</span>
            <button onClick={() => setIsMobileOpen(false)} className="text-white/60 hover:text-white">
              <X size={20} />
            </button>
          </div>
          <nav className="flex flex-col p-5 gap-1 flex-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-4 py-3 rounded-lg text-base font-medium transition-all',
                    isActive
                      ? 'bg-[#2AB4D0]/10 text-[#2AB4D0] border border-[#2AB4D0]/20'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>
          <div className="p-5 border-t border-white/10 space-y-3">
            <a
              href={`tel:${SITE_CONFIG.phone[0].replace(/\s|-/g, '')}`}
              className="flex items-center gap-2 text-sm text-[#2AB4D0]"
            >
              <Phone size={14} />
              {SITE_CONFIG.phone[0]}
            </a>
            <Link href="/contact" className="btn-primary w-full py-3 rounded-lg text-sm text-center block font-semibold">
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
