import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#141421]" />
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#2AB4D0]/6 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative text-center px-4">
          <p className="font-display text-[140px] md:text-[180px] font-700 leading-none gradient-text opacity-20 select-none">
            404
          </p>
          <div className="-mt-8 md:-mt-12">
            <h1 className="font-display font-700 text-3xl md:text-4xl text-white mb-4">
              Page Not Found
            </h1>
            <p className="text-white/50 mb-8 max-w-md mx-auto">
              Looks like this page went offline. Let's get you back to growing your business.
            </p>
            <Link href="/" className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm">
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
