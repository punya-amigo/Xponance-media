import type { Metadata } from 'next'
import { Space_Grotesk, DM_Sans } from 'next/font/google'
import '@/styles/globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Xponance Media | Digital Marketing Agency – Growth, Visibility & Conversion',
    template: '%s | Xponance Media',
  },
  description:
    'Xponance Media is a full-service digital marketing agency in Jaipur specializing in SEO, Performance Marketing, Social Media, Web Development, Branding & more. Drive exponential growth with data-backed strategies.',
  keywords: [
    'digital marketing agency Jaipur',
    'SEO company India',
    'performance marketing',
    'social media marketing',
    'branding agency',
    'web development',
    'Xponance Media',
  ],
  authors: [{ name: 'Xponance Media', url: 'https://xponancemedia.com' }],
  creator: 'Xponance Media',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://xponancemedia.com',
    siteName: 'Xponance Media',
    title: 'Xponance Media | Digital Marketing Agency',
    description: 'Drive exponential digital growth with Xponance Media – your trusted partner for SEO, Ads, Social Media, Web Development & more.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Xponance Media – Digital Marketing Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xponance Media | Digital Marketing Agency',
    description: 'Drive exponential digital growth with Xponance Media.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-[#141421] text-[#F0F4FF] font-body antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
