import { useReveal } from '../hooks/useReveal'

import bananaimg1 from '../assets/bnv3.jpg'

export default function WorldClass() {
  const ref = useReveal({ threshold: 0.15 })

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: 'clamp(160px,28vw,280px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
      ref={ref}
    >
      {/* Background image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url('${bananaimg1}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
        }}
      />

      {/* Green overlay — uses global .overlay-green */}
      <div className="overlay-green" />

      {/* Heading */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          padding: '0 var(--sp-6)',
        }}
      >
        <h2 className="heading-cursive-white reveal">
        World class technology from India
        </h2>
      </div>
    </section>
  )
}
