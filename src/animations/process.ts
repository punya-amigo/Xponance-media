'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let registered = false

function ensurePlugin() {
  if (!registered) {
    gsap.registerPlugin(ScrollTrigger)
    registered = true
  }
}

export function initProcessAnimation(
  container: HTMLElement,
  steps: HTMLElement[],
  progressBar: HTMLElement,
  setActiveStep: (index: number) => void
) {
  ensurePlugin()

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: 'top top',
      end: '+=2200',
      scrub: true,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const nextIndex = Math.min(steps.length - 1, Math.floor(self.progress * steps.length))
        setActiveStep(nextIndex)
      },
    },
  })

  steps.forEach((step, index) => {
    timeline.to(
      progressBar,
      {
        scaleY: (index + 1) / steps.length,
        transformOrigin: 'top center',
        duration: 1,
        ease: 'none',
      },
      index
    )

    timeline.fromTo(
      step,
      { y: 28, opacity: 0.2 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      index
    )
  })

  return timeline
}

export function initRevealAnimation(scope: Element) {
  ensurePlugin()

  const elements = Array.from(scope.querySelectorAll('[data-reveal]'))

  elements.forEach((element) => {
    gsap.fromTo(
      element,
      { y: 28, opacity: 0, filter: 'blur(6px)' },
      {
        y: 0,
        opacity: 1,
        filter: 'blur(0px)',
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 88%',
        },
      }
    )
  })

  return () => {
    ScrollTrigger.getAll().forEach((trigger) => {
      if (scope.contains(trigger.trigger as Node)) {
        trigger.kill()
      }
    })
  }
}
