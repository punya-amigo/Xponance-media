'use client'

import { useEffect, useRef, useState } from 'react'
import { initLoaderAnimation } from '@/animations/loader'

export default function Loader() {
  const [hidden, setHidden] = useState(false)
  const scopeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scope = scopeRef.current
    if (!scope) return

    let timeline: ReturnType<typeof initLoaderAnimation> | null = null
    const timeout = window.setTimeout(() => {
      timeline = initLoaderAnimation(scope, () => setHidden(true))
    }, 80)

    return () => {
      window.clearTimeout(timeout)
      timeline?.kill()
    }
  }, [])

  if (hidden) return null

  return (
    <div
      ref={scopeRef}
      data-loader="panel"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0b1220]"
    >
      <div className="flex w-full max-w-sm flex-col items-center gap-6 px-6">
        <div data-loader="logo" className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[1.6rem] border border-[#2AB4D0]/25 bg-[#2AB4D0]/10">
            <span className="font-display text-lg font-bold tracking-[0.32em] text-[#7de7ff]">XM</span>
          </div>
          <p className="mt-5 text-xs uppercase tracking-[0.38em] text-white/48">Xponance Media</p>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/8">
          <div data-loader="bar" className="h-full origin-left scale-x-0 rounded-full bg-[#2AB4D0]" />
        </div>
      </div>
    </div>
  )
}
