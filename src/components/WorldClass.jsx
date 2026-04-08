import { useReveal } from '../hooks/useReveal'

export default function WorldClass() {
  const ref = useReveal({ threshold: 0.15 })

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: 280,
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
          backgroundImage:
            "url('https://duroilab.co.za/wp-content/uploads/2024/04/IMG_1699.jpg')",
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
          World class technology from Africa
        </h2>
      </div>
    </section>
  )
}
