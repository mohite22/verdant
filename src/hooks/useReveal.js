import { useEffect, useRef } from 'react'

/**
 * Accepts either:
 *   useReveal(0.1)                          — number threshold
 *   useReveal({ threshold: 0.1, stagger })  — options object (legacy callers)
 */
export function useReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const threshold = typeof options === 'number' ? options : (options.threshold ?? 0.08)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          const targets = entry.target.querySelectorAll(
            '.reveal, .reveal-left, .reveal-right'
          )

          if (targets.length > 0) {
            targets.forEach((t, i) => setTimeout(() => t.classList.add('visible'), i * 70))
          } else if (
            entry.target.classList.contains('reveal') ||
            entry.target.classList.contains('reveal-left') ||
            entry.target.classList.contains('reveal-right')
          ) {
            entry.target.classList.add('visible')
          }

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

export default useReveal
