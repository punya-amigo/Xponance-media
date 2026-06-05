'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Send, CheckCircle, Instagram, Linkedin, Facebook, Twitter } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/data'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { cn } from '@/lib/utils'

const SERVICES_LIST = [
  'Website / App Development',
  'SEO',
  'Social Media Marketing',
  'Performance Marketing (Ads)',
  'Branding & PR',
  'Creative Design & Video',
  'Influencer & ORM',
  'Event Marketing',
  'Full Digital Strategy',
]

export default function ContactPageContent() {
  const { ref, isVisible } = useScrollReveal()
  const [formState, setFormState] = useState({
    name: '', email: '', phone: '', service: '', budget: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate submission - replace with actual API call or Formspree/Resend
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section className="relative pt-36 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#0E0E1A]" />
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#2AB4D0]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-[#1A8BA3]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={cn(
            'text-center max-w-2xl mx-auto mb-14 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <span className="section-tag mb-5 inline-flex">Let's Talk</span>
          <h1 className="font-display font-700 text-4xl sm:text-5xl md:text-6xl text-white mb-5 leading-tight">
            Start Your{' '}
            <span className="gradient-text">Growth Journey</span>
          </h1>
          <p className="text-white/50 text-lg leading-relaxed">
            Tell us about your project. We'll get back to you within 24 hours with a tailored strategy outline — no commitment required.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact info panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* Info card */}
            <div className="rounded-2xl border border-white/8 bg-[#141421]/60 p-6 space-y-6">
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#2AB4D0]/25 to-transparent" />

              <div>
                <h3 className="font-display font-600 text-white text-lg mb-4">Contact Information</h3>
                <div className="space-y-4">
                  {SITE_CONFIG.phone.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s|-/g, '')}`}
                      className="flex items-center gap-3 text-sm text-white/50 hover:text-[#2AB4D0] transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#2AB4D0]/10 border border-[#2AB4D0]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#2AB4D0]/20 transition-colors">
                        <Phone size={13} className="text-[#2AB4D0]" />
                      </div>
                      {p}
                    </a>
                  ))}
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="flex items-center gap-3 text-sm text-white/50 hover:text-[#2AB4D0] transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#2AB4D0]/10 border border-[#2AB4D0]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#2AB4D0]/20 transition-colors">
                      <Mail size={13} className="text-[#2AB4D0]" />
                    </div>
                    {SITE_CONFIG.email}
                  </a>
                  <div className="flex items-start gap-3 text-sm text-white/50">
                    <div className="w-8 h-8 rounded-lg bg-[#2AB4D0]/10 border border-[#2AB4D0]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin size={13} className="text-[#2AB4D0]" />
                    </div>
                    <span className="leading-relaxed">{SITE_CONFIG.address}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/8">
                <p className="text-xs text-white/30 mb-3 uppercase tracking-widest font-medium">Follow Us</p>
                <div className="flex gap-2">
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
            </div>

            {/* Business hours */}
            <div className="rounded-2xl border border-white/8 bg-[#141421]/60 p-6">
              <h3 className="font-display font-600 text-white text-sm mb-4 uppercase tracking-widest">Response Time</h3>
              <div className="space-y-2.5 text-sm">
                {[
                  { day: 'Mon – Fri', time: 'Within 4 hours' },
                  { day: 'Saturday', time: 'Within 8 hours' },
                  { day: 'Sunday', time: 'Next business day' },
                ].map((r) => (
                  <div key={r.day} className="flex justify-between items-center">
                    <span className="text-white/40">{r.day}</span>
                    <span className="text-[#2AB4D0] font-medium text-xs">{r.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* GSTIN */}
            <div className="rounded-xl border border-white/6 bg-white/2 px-4 py-3 flex items-center justify-between">
              <span className="text-xs text-white/25">GSTIN</span>
              <span className="text-xs font-mono text-white/40">{SITE_CONFIG.gstin}</span>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="relative rounded-2xl border border-white/8 bg-[#141421]/60 p-7 md:p-8">
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#2AB4D0]/25 to-transparent" />

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#2AB4D0]/15 border border-[#2AB4D0]/30 flex items-center justify-center mb-5">
                    <CheckCircle size={28} className="text-[#2AB4D0]" />
                  </div>
                  <h3 className="font-display font-700 text-2xl text-white mb-3">Message Sent!</h3>
                  <p className="text-white/50 max-w-md leading-relaxed">
                    Thank you for reaching out. Our team will review your message and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormState({ name: '', email: '', phone: '', service: '', budget: '', message: '' }) }}
                    className="mt-6 text-sm text-[#2AB4D0] hover:text-white transition-colors underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-display font-700 text-xl text-white mb-6">Send Us a Message</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-white/40 mb-1.5 font-medium uppercase tracking-wider">
                        Full Name <span className="text-[#2AB4D0]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/40 mb-1.5 font-medium uppercase tracking-wider">
                        Email <span className="text-[#2AB4D0]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-white/40 mb-1.5 font-medium uppercase tracking-wider">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/40 mb-1.5 font-medium uppercase tracking-wider">
                        Service Interested In
                      </label>
                      <select
                        name="service"
                        value={formState.service}
                        onChange={handleChange}
                        className="form-input appearance-none"
                      >
                        <option value="" className="bg-[#1C1C2E]">Select a service...</option>
                        {SERVICES_LIST.map((s) => (
                          <option key={s} value={s} className="bg-[#1C1C2E]">{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-white/40 mb-1.5 font-medium uppercase tracking-wider">
                      Monthly Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formState.budget}
                      onChange={handleChange}
                      className="form-input appearance-none"
                    >
                      <option value="" className="bg-[#1C1C2E]">Select budget range...</option>
                      {['Under ₹10,000/mo', '₹10,000–₹25,000/mo', '₹25,000–₹50,000/mo', '₹50,000–₹1,00,000/mo', '₹1,00,000+/mo'].map((b) => (
                        <option key={b} value={b} className="bg-[#1C1C2E]">{b}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-white/40 mb-1.5 font-medium uppercase tracking-wider">
                      Tell Us About Your Project <span className="text-[#2AB4D0]">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Describe your business, goals, and what you're looking to achieve..."
                      className="form-input resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full py-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-xs text-white/25 text-center">
                    By submitting, you agree to our Privacy Policy. We never share your data.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
