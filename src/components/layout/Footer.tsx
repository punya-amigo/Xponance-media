import Link from 'next/link'
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook, Twitter, ArrowUpRight } from 'lucide-react'
import { SITE_CONFIG, NAV_LINKS, SERVICES } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="relative bg-[#0E0E1A] border-t border-[#2AB4D0]/10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-[#2AB4D0]/40 to-transparent" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#2AB4D0]/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* CTA Banner */}
        <div className="relative rounded-2xl overflow-hidden mb-16 bg-gradient-to-r from-[#1A8BA3] to-[#2AB4D0] p-[1px]">
          <div className="rounded-2xl bg-gradient-to-r from-[#1A1A2E] to-[#0E0E1A] px-8 py-10 md:py-12 md:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-sm font-medium text-[#2AB4D0] mb-1 tracking-widest uppercase">Ready to scale?</p>
              <h3 className="font-display text-2xl md:text-3xl font-700 text-white">
                Connect With Us For <span className="gradient-text">Xponantial Growth</span>
              </h3>
            </div>
            <Link
              href="/contact"
              className="btn-primary flex-shrink-0 px-7 py-3.5 rounded-xl font-semibold text-sm flex items-center gap-2 whitespace-nowrap"
            >
              Start a Project <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#2AB4D0]/15 flex items-center justify-center border border-[#2AB4D0]/25">
                <span className="font-display font-700 text-[#2AB4D0] text-sm">XP</span>
              </div>
              <div>
                <span className="font-display font-700 text-white text-sm tracking-wide block">XPONANCE</span>
                <span className="font-display text-[#2AB4D0] text-[10px] tracking-[0.2em]">MEDIA</span>
              </div>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed mb-5">
              A full-service digital marketing agency driven by creativity, strategy, and performance. Your partner in exponential growth.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-2">
              {[
                { icon: Instagram, href: SITE_CONFIG.social.instagram, label: 'Instagram' },
                { icon: Linkedin, href: SITE_CONFIG.social.linkedin, label: 'LinkedIn' },
                { icon: Facebook, href: SITE_CONFIG.social.facebook, label: 'Facebook' },
                { icon: Twitter, href: SITE_CONFIG.social.twitter, label: 'Twitter' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-[#2AB4D0] hover:border-[#2AB4D0]/40 hover:bg-[#2AB4D0]/10 transition-all"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-600 text-white text-sm tracking-wider mb-4 uppercase">Navigation</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/45 hover:text-[#2AB4D0] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[#2AB4D0] transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-600 text-white text-sm tracking-wider mb-4 uppercase">Services</h4>
            <ul className="space-y-2.5">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services#${s.id}`}
                    className="text-sm text-white/45 hover:text-[#2AB4D0] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[#2AB4D0] transition-all duration-200" />
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-600 text-white text-sm tracking-wider mb-4 uppercase">Contact Us</h4>
            <ul className="space-y-4">
              {SITE_CONFIG.phone.map((p) => (
                <li key={p}>
                  <a
                    href={`tel:${p.replace(/\s|-/g, '')}`}
                    className="flex items-start gap-3 text-sm text-white/45 hover:text-[#2AB4D0] transition-colors group"
                  >
                    <div className="w-7 h-7 rounded-md bg-[#2AB4D0]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#2AB4D0]/20 transition-colors mt-0.5">
                      <Phone size={12} className="text-[#2AB4D0]" />
                    </div>
                    {p}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-start gap-3 text-sm text-white/45 hover:text-[#2AB4D0] transition-colors group"
                >
                  <div className="w-7 h-7 rounded-md bg-[#2AB4D0]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#2AB4D0]/20 transition-colors">
                    <Mail size={12} className="text-[#2AB4D0]" />
                  </div>
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-white/45">
                  <div className="w-7 h-7 rounded-md bg-[#2AB4D0]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={12} className="text-[#2AB4D0]" />
                  </div>
                  <span className="leading-relaxed">{SITE_CONFIG.address}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Xponance Media. All rights reserved. GSTIN: {SITE_CONFIG.gstin}
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="text-xs text-white/30 hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-white/30 hover:text-white/60 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
