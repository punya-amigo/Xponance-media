'use client'

import gsap from 'gsap'

export function initHeroAnimation(scope: Element) {
  const tl = gsap.timeline({ defaults: { duration: 0.9, ease: 'power3.out' } })

  tl.fromTo(
    scope.querySelectorAll('[data-hero="eyebrow"], [data-hero="title"], [data-hero="subtitle"], [data-hero="actions"], [data-hero="card"]'),
    { y: 32, opacity: 0, filter: 'blur(8px)' },
    { y: 0, opacity: 1, filter: 'blur(0px)', stagger: 0.12 }
  ).fromTo(
    scope.querySelectorAll('[data-hero="bar"]'),
    { scaleY: 0.35, transformOrigin: 'bottom center' },
    { scaleY: 1, stagger: 0.08, duration: 0.7 },
    '-=0.55'
  )

  return tl
}
