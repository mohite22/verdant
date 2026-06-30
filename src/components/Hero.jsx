import { useState, useEffect } from 'react'
import video from '../assets/videos/homehero.mp4' // ✅ ADD YOUR VIDEO
import logo from '../assets/logo-1.png'
/* ── Du Roi SVG Logo Mark — shared between Hero & Navbar ── */
function LogoMark({ size = 115 }) {
  return (
    <div>
      <img src={logo} alt="logo" />
    </div>
  )
}

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > window.innerHeight * 0.8)
        ticking = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const anim = (delay, from) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'none' : from,
    transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
  })

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: 560,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* ✅ VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          transform: 'scale(1.05)', // slight zoom
        }}
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* ✅ DARK OVERLAY */}
      <div
        className="overlay-dark"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.35)',
          zIndex: 1,
        }}
      />

      {/* HERO LOGO */}
      <div
        id="home-logo"
        style={{
          position: 'absolute',
          bottom: 52,
          left: 60,
          zIndex: 10,
          display: 'flex',
          alignItems: 'flex-end',
          ...anim(0.35, 'translateX(-28px)'),
          ...(mounted ? {
            opacity: scrolled ? 0 : 1,
            transform: scrolled ? 'translateX(-20px) scale(0.92)' : 'none',
            transition: scrolled
              ? 'opacity 0.4s ease, transform 0.4s ease'
              : 'opacity 0.75s ease 0.35s, transform 0.75s ease 0.35s',
            pointerEvents: scrolled ? 'none' : 'auto',
          } : {}),
        }}
      >
        <LogoMark size={115} />

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          paddingBottom: 5,
          paddingLeft: 2,
        }}>
        </div>
      </div>

      {/* QUOTE CARD */}
      <div id="home-quote" style={{
        position: 'absolute',
        bottom: 52,
        right: 60,
        zIndex: 10,
        maxWidth: 400,
        ...anim(0.55, 'translateY(22px)'),
      }}>
        <div className="glass" style={{
          borderRadius: 'var(--radius-xl)',
          padding: '22px 30px 20px',
        }}>
          <p style={{
            fontFamily: 'Georgia, serif',
            fontSize: 17,
            fontWeight: 500,
            textAlign:'center',
            color: '#192a1e',
            lineHeight: 1.45,
            marginBottom: 8,
          }}>
            "।। वृक्षाणां कदली श्रेष्ठा उपयोगे सर्वदा स्थिता ।।"
          </p>
          {/* <p className="body-text-sm" style={{ color: '#4a5f4e' }}>
            – Og Mandino
          </p> */}
        </div>
      </div>

      {/* MOUSE SCROLL INDICATOR */}
      <div
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        style={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          cursor: 'pointer',
          opacity: scrolled ? 0 : 1,
          transition: 'opacity 0.4s ease',
          animation: 'mouseFloat 2.4s ease-in-out infinite',
        }}
      >
        {/* SCROLL label */}
        <span style={{
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.55)',
        }}>Scroll</span>

        {/* Mouse body */}
        <div style={{
          width: 26,
          height: 42,
          border: '2px solid rgba(255,255,255,0.6)',
          borderRadius: 13,
          display: 'flex',
          justifyContent: 'center',
          paddingTop: 6,
          position: 'relative',
          boxShadow: '0 0 12px rgba(255,255,255,0.15)',
        }}>
          {/* Scroll dot inside mouse */}
          <div style={{
            width: 4,
            height: 8,
            background: 'rgba(255,255,255,0.9)',
            borderRadius: 2,
            animation: 'mouseDot 1.8s ease-in-out infinite',
          }} />
          {/* Left button line */}
          <div style={{
            position: 'absolute',
            top: 0, left: '50%',
            width: 1,
            height: 14,
            background: 'rgba(255,255,255,0.25)',
            transform: 'translateX(-50%)',
          }} />
        </div>

        {/* Animated chevrons */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          {[0, 1, 2].map(i => (
            <svg key={i} width="12" height="7" viewBox="0 0 12 7" fill="none"
              style={{ animation: `chevronSeq 1.8s ease-in-out ${i * 0.2}s infinite` }}>
              <path d="M1 1l5 5 5-5" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ))}
        </div>
      </div>

      {/* RESPONSIVE */}
      <style>{`
        @keyframes mouseFloat {
          0%,100% { transform: translateX(-50%) translateY(0); }
          50%      { transform: translateX(-50%) translateY(6px); }
        }
        @keyframes mouseDot {
          0%     { transform: translateY(0); opacity: 1; }
          60%    { transform: translateY(10px); opacity: 0; }
          61%    { transform: translateY(0); opacity: 0; }
          100%   { transform: translateY(0); opacity: 1; }
        }
        @keyframes chevronSeq {
          0%,100% { opacity: 0.2; }
          50%     { opacity: 1; }
        }
        @media (max-width: 680px) {
          #home-logo  { left: 16px !important; bottom: 130px !important; }
          #home-quote { right: 12px !important; left: 12px !important; bottom: 20px !important; max-width: 100% !important; }
        }
        @media (max-width: 440px) {
          #home-logo  { left: 12px !important; bottom: 140px !important; }
        }
      `}</style>
    </section>
  )
}