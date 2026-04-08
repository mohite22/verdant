import { useState, useEffect } from 'react'

import logo from '../assets/logo-1.png'


const NAV_ITEMS = [
  { label: 'Home', hash: '#/' },
  {
    label: 'Our Company', hash: '#/about-us',
    dropdown: [
      { label: 'About Us',                    hash: '#/about-us'  },
      { label: 'Our People',                  hash: '#/our-people' },
      { label: 'Corporate Social Investment', hash: '#/csi'        },
    ],
  },
  { label: 'Banana Plants',        hash: '#/banana-plants'      },
  { label: 'Formosana',            hash: '#/formosana'          },
  { label: 'Media & Publications', hash: '#/media-publications' },
  { label: 'Gallery',              hash: '#/gallery'            },
  { label: 'Contact',              hash: '#/contact'            },
]

export function navigate(hash) {
  window.location.hash = hash
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function Caret() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24"
      style={{ fill: '#999', marginLeft: -3, flexShrink: 0 }}>
      <path d="M7 10l5 5 5-5z" />
    </svg>
  )
}

function LogoMark({ size = 36 }) {
  return (
    <div>
      <img src={logo} alt="logo" style={{ width: "50px" }} />
    </div>
  )
}

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDrop,   setOpenDrop]   = useState(null)
  const [activeHash, setActiveHash] = useState(window.location.hash || '#/')

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > window.innerHeight * 0.8)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    const fn = () => { setActiveHash(window.location.hash || '#/'); setMobileOpen(false) }
    window.addEventListener('hashchange', fn)
    return () => window.removeEventListener('hashchange', fn)
  }, [])

  useEffect(() => {
    const fn = () => { if (window.innerWidth > 900) setMobileOpen(false) }
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])

  const isActive = item => {
    if (item.hash === '#/') return activeHash === '' || activeHash === '#/' || activeHash === '#home'
    if (item.dropdown) return item.dropdown.some(d => activeHash === d.hash)
    return activeHash === item.hash
  }

  const goTo = (hash, e) => {
    e?.preventDefault()
    navigate(hash)
    setMobileOpen(false)
    setOpenDrop(null)
  }

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999,
        width: '100%', display: 'flex', alignItems: 'center',
        justifyContent: scrolled ? 'space-between' : 'center',
        padding:    scrolled ? '0 40px' : '22px 24px 0',
        height:     scrolled ? '68px'   : 'auto',
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
        backdropFilter:       scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        boxShadow:    scrolled ? '0 2px 0 rgba(0,0,0,.06),0 4px 24px rgba(0,0,0,.08)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,.06)' : 'none',
        pointerEvents: 'none',
        transition: 'background .35s,box-shadow .35s,padding .35s,height .35s,justify-content .35s',
      }}>

        {/* Sticky logo */}
        <a href="#/" onClick={e => goTo('#/', e)} style={{
          display: 'flex', alignItems: 'center', gap: 10,
          pointerEvents: 'all', textDecoration: 'none',
          opacity: scrolled ? 1 : 0, transform: scrolled ? 'translateX(0)' : 'translateX(-16px)',
          visibility: scrolled ? 'visible' : 'hidden',
          transition: 'opacity .35s ease .05s,transform .35s ease .05s',
          flexShrink: 0,
        }}>
          <LogoMark size={40} />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="desktop-nav" style={{
          pointerEvents: 'all',
          background:    scrolled ? 'transparent' : 'rgba(255,255,255,.90)',
          backdropFilter:       scrolled ? 'none' : 'blur(20px)',
          WebkitBackdropFilter: scrolled ? 'none' : 'blur(20px)',
          borderRadius:  scrolled ? 0 : 'var(--radius-pill)',
          padding:       scrolled ? '0' : '8px 20px',
          boxShadow:     scrolled ? 'none' : 'var(--shadow-hero),inset 0 1px 0 rgba(255,255,255,.7)',
          border:        scrolled ? 'none' : '1px solid rgba(255,255,255,.70)',
          display: 'flex', alignItems: 'center',
          transition: 'all .35s ease',
        }}>
          <ul style={{ display: 'flex', alignItems: 'center', gap: 2, listStyle: 'none' }}>
            {NAV_ITEMS.map(item => (
              <li key={item.label} className="nav-item" style={{ position: 'relative' }}
                onMouseEnter={() => item.dropdown && setOpenDrop(item.label)}
                onMouseLeave={() => setOpenDrop(null)}>
                <a href={item.hash} onClick={e => goTo(item.hash, e)}
                  className={`btn-nav${isActive(item) ? ' active' : ''}`}
                  style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  {item.label}
                  {item.dropdown && <Caret />}
                </a>
                {item.dropdown && openDrop === item.label && (
                  <div className="nav-dropdown" style={{ display: 'flex' }}>
                    {item.dropdown.map(sub => (
                      <a key={sub.label} href={sub.hash} onClick={e => goTo(sub.hash, e)} className="drop-link">{sub.label}</a>
                    ))}
                  </div>
                )}
              </li>
            ))}
            <li style={{ marginLeft: 4 }}>
              <a href="#" className="btn-lang" style={{ display: 'flex', alignItems: 'center' }}>
                <img src="https://duroilab.co.za/wp-content/plugins/translatepress-multilingual/assets/images/flags/en_US.png"
                  alt="EN" style={{ width: 18, height: 12, objectFit: 'cover', borderRadius: 2 }}
                  onError={e => { e.currentTarget.style.display = 'none' }} />
                <span style={{ marginLeft: 5 }}>EN</span>
                <Caret />
              </a>
            </li>
          </ul>
        </nav>

        {/* Hamburger */}
        <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu" className="hamburger-btn"
          style={{ display: 'none', pointerEvents: 'all', background: 'rgba(255,255,255,.92)',
            border: '1px solid rgba(0,0,0,.10)', borderRadius: 'var(--radius-md)',
            padding: 8, flexDirection: 'column', gap: 4, cursor: 'pointer' }}>
          {[mobileOpen ? 'rotate(45deg) translate(4px,4px)' : 'none', null,
            mobileOpen ? 'rotate(-45deg) translate(4px,-4px)' : 'none'].map((tf, i) => (
            <span key={i} style={{ display: 'block', width: 22, height: 2, background: '#333',
              borderRadius: 2, transform: tf || 'none', opacity: i === 1 && mobileOpen ? 0 : 1, transition: 'all .3s' }} />
          ))}
        </button>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, background: 'rgba(255,255,255,.98)',
          padding: '72px 24px 28px', boxShadow: 'var(--shadow-lg)',
          display: 'flex', flexDirection: 'column', gap: 0,
          zIndex: 9998, maxHeight: '100vh', overflowY: 'auto' }}>
          {NAV_ITEMS.map(item => (
            <div key={item.label}>
              <a href={item.hash} onClick={e => goTo(item.hash, e)}
                style={{ display: 'block', padding: '12px 16px', fontSize: 14,
                  fontWeight: isActive(item) ? 700 : 500,
                  color: isActive(item) ? 'var(--clr-green-mid)' : 'var(--clr-text)',
                  borderBottom: '1px solid var(--clr-border-light)', fontFamily: 'var(--font-body)' }}>
                {item.label}
              </a>
              {item.dropdown && item.dropdown.map(sub => (
                <a key={sub.label} href={sub.hash} onClick={e => goTo(sub.hash, e)}
                  style={{ display: 'block', padding: '10px 32px', fontSize: 13,
                    fontWeight: activeHash === sub.hash ? 600 : 400,
                    color: activeHash === sub.hash ? 'var(--clr-green-mid)' : 'var(--clr-text-mid)',
                    borderBottom: '1px solid var(--clr-border-light)',
                    background: 'rgba(0,0,0,.02)', fontFamily: 'var(--font-body)' }}>
                  {sub.label}
                </a>
              ))}
            </div>
          ))}
          <a href="#" style={{ padding: '12px 16px', fontSize: 14, fontWeight: 500, color: 'var(--clr-text)', fontFamily: 'var(--font-body)' }}>🇺🇸 EN</a>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav   { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}
