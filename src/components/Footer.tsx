import Link from 'next/link'
import { ArrowUpRight, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import Button from '@/components/Button'
import { NAV_LINKS, SERVICES, SITE_CONFIG } from '@/lib/data'
import { formatPhoneHref } from '@/lib/utils'

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#09111d]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-14 rounded-[2rem] border border-[#2AB4D0]/18 bg-[linear-gradient(180deg,rgba(20,27,43,0.92),rgba(10,16,28,0.94))] p-8 md:flex md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#7de7ff]">Ready to scale?</p>
            <h3 className="mt-3 font-display text-3xl font-semibold text-white">
              Build a sharper marketing system with Xponance Media.
            </h3>
          </div>
          <div className="mt-6 md:mt-0">
            <Button href="/contact" className="gap-2">
              Start a project
              <ArrowUpRight size={16} />
            </Button>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-sm font-semibold tracking-[0.28em] text-white">XPONANCE</p>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/58">{SITE_CONFIG.description}</p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 p-2 text-white/60 transition hover:border-[#2AB4D0]/30 hover:text-white"
              >
                <Instagram size={16} />
              </a>
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 p-2 text-white/60 transition hover:border-[#2AB4D0]/30 hover:text-white"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white">Navigation</p>
            <div className="mt-4 grid gap-3 text-sm text-white/58">
              <Link href="/">Home</Link>
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white">Capabilities</p>
            <div className="mt-4 grid gap-3 text-sm text-white/58">
              {SERVICES.slice(0, 5).map((service) => (
                <span key={service.id}>{service.shortTitle}</span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white">Contact</p>
            <div className="mt-4 grid gap-4 text-sm text-white/58">
              <a href={formatPhoneHref(SITE_CONFIG.phone[0])} className="flex items-start gap-3">
                <Phone size={16} className="mt-1 text-[#7de7ff]" />
                <span>{SITE_CONFIG.phone[0]}</span>
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-start gap-3">
                <Mail size={16} className="mt-1 text-[#7de7ff]" />
                <span>{SITE_CONFIG.email}</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 text-[#7de7ff]" />
                <span>{SITE_CONFIG.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/8 pt-6 text-xs text-white/34 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Xponance Media. All rights reserved.</p>
          <p>GSTIN: {SITE_CONFIG.gstin}</p>
        </div>
      </div>
    </footer>
  )
}
