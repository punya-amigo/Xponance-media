'use client'

import gsap from 'gsap'

export function initLoaderAnimation(scope: Element, onComplete: () => void) {
  const timeline = gsap.timeline({
    defaults: { ease: 'power3.out' },
    onComplete,
  })

  timeline
    .fromTo(
      scope.querySelector('[data-loader="panel"]'),
      { opacity: 1 },
      { opacity: 1, duration: 0.3 }
    )
    .fromTo(
      scope.querySelector('[data-loader="logo"]'),
      { y: 18, opacity: 0, scale: 0.96 },
      { y: 0, opacity: 1, scale: 1, duration: 0.7 }
    )
    .to(scope.querySelector('[data-loader="bar"]'), {
      scaleX: 1,
      transformOrigin: 'left center',
      duration: 0.9,
    })
    .to(scope.querySelector('[data-loader="panel"]'), {
      yPercent: -100,
      duration: 0.9,
      delay: 0.1,
    })

  return timeline
}
