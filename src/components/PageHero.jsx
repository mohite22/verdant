import { useState, useEffect } from 'react'

export default function PageHero({ title, subtitle, breadcrumb, bgImage, bgVideo, badge }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(t)
  }, [])

  const bg = bgImage || 'https://duroilab.co.za/wp-content/uploads/2024/04/2019-05-28-16.36.24_2.jpg'

  const go = (hash) => {
    window.location.hash = hash
    window.scrollTo(0, 0)
  }

  return (
    <section style={{
      position: 'relative', width: '100%',
      height: 'clamp(260px,45vw,420px)', minHeight: 260,
      overflow: 'hidden', display: 'flex', alignItems: 'center',
    }}>
      {bgVideo ? (
        <video autoPlay muted loop playsInline style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', zIndex: 0,
        }}>
          <source src={bgVideo} type="video/mp4" />
        </video>
      ) : (
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url('${bg}')`,
          backgroundSize: 'cover', backgroundPosition: 'center 35%',
          animation: 'heroZoom 22s ease-in-out infinite alternate', zIndex: 0,
        }} />
      )}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(110deg,rgba(10,28,14,.86) 0%,rgba(22,55,28,.60) 55%,rgba(10,28,14,.50) 100%)',
        zIndex: 1,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'none' : 'translateY(22px)',
          transition: 'opacity .8s ease .15s, transform .8s ease .15s',
        }}>
          {/* Breadcrumb */}
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,.48)', letterSpacing: '.14em', textTransform: 'uppercase', marginBottom: 14, display: 'flex', gap: 6, alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="#/" onClick={e => { e.preventDefault(); go('#/') }}
               style={{ color: 'rgba(255,255,255,.48)', transition: 'color .2s', cursor: 'pointer' }}
               onMouseOver={e => e.target.style.color = 'rgba(255,255,255,.85)'}
               onMouseOut={e  => e.target.style.color = 'rgba(255,255,255,.48)'}>
              Home
            </a>
            {breadcrumb && <><span style={{ opacity: .4 }}>/</span> {breadcrumb}</>}
            <span style={{ opacity: .4 }}>/</span>
            <span style={{ color: 'rgba(255,255,255,.75)' }}>{title}</span>
          </p>

          <h1 style={{
            fontFamily: 'var(--font-cursive)',
            fontSize: 'clamp(32px,5vw,62px)',
            fontWeight: 700, color: '#fff', lineHeight: 1.12,
            marginBottom: subtitle ? 16 : 0,
            textShadow: '0 2px 20px rgba(0,0,0,.28)',
          }}>
            {title}
          </h1>

          {subtitle && (
            <p style={{
              fontSize: 'clamp(14px,1.5vw,17px)', fontWeight: 300,
              color: 'rgba(255,255,255,.80)', lineHeight: 1.78,
              maxWidth: 540, marginBottom: badge ? 28 : 0,
            }}>
              {subtitle}
            </p>
          )}

          {badge && (
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'rgba(255,255,255,.12)', backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,.24)', borderRadius: 'var(--radius-pill)',
              padding: '8px 20px',
            }}>
              <span style={{ fontSize: 16 }}>{badge.icon}</span>
              <span style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,.90)', letterSpacing: '.06em' }}>
                {badge.text}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
