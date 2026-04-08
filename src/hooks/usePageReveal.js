import { useEffect, useRef } from 'react'

export default function usePageReveal(threshold = 0.1) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (!e.isIntersecting) return
          e.target
            .querySelectorAll('.reveal, .reveal-left, .reveal-right')
            .forEach((t, i) => setTimeout(() => t.classList.add('visible'), i * 80))
          obs.unobserve(e.target)
        })
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}
