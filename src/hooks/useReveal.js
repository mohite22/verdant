import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to `ref`.
 * When the element (or its children bearing .reveal / .reveal-left / .reveal-right)
 * enters the viewport, the class `.visible` is added.
 *
 * @param {object}  options              - IntersectionObserver options
 * @param {number}  options.threshold    - default 0.10
 * @param {boolean} options.stagger      - if true, children get staggered delays
 */
export function useReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const { threshold = 0.10, stagger = false } = options

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          const targets = entry.target.querySelectorAll(
            '.reveal, .reveal-left, .reveal-right'
          )

          if (targets.length > 0) {
            targets.forEach((t, i) => {
              if (stagger) {
                setTimeout(() => t.classList.add('visible'), i * 70)
              } else {
                t.classList.add('visible')
              }
            })
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
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
