import { useEffect, useRef } from 'react'

export default function usePageReveal(threshold = 0.08) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target
            .querySelectorAll('.reveal, .reveal-left, .reveal-right')
            .forEach((t, i) => setTimeout(() => t.classList.add('visible'), i * 70))
          observer.unobserve(entry.target)
        })
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
