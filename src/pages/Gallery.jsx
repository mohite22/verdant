import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import usePageReveal from '../hooks/usePageReveal'
import bnvimg1 from '../assets/bnv1.jpg'
import bnvimg2 from '../assets/bnv2.jpg'
import bnvimg3 from '../assets/bnv3.jpg'

import pnvimg1 from '../assets/pnv1.jpg'
import pnvimg2 from '../assets/pnv2.jpg'
import pnvimg3 from '../assets/pnv3.jpeg'

const CATS = ['All', 'Laboratory', 'Plants', 'Plantation', 'Export']

const PHOTOS = [
  { src: bnvimg1, cat: 'Plantation', caption: 'Banana nursery — Letsitele, Limpopo' },
  { src: bnvimg2, cat: 'Plantation', caption: 'Healthy banana plants in the nursery' },
  { src: bnvimg3, cat: 'Plantation', caption: 'Banana plants ready for field planting' },
  { src: pnvimg1, cat: 'Plants', caption: 'Tissue culture plant with healthy root system' },
  { src: pnvimg2, cat: 'Plants', caption: 'Elite selection plants in hardening nursery' },
  { src: pnvimg3, cat: 'Plants', caption: 'Field-ready plants at the 20 cm stage' },
]

export default function Gallery() {
  const [filter,   setFilter]   = useState('All')
  const [lightbox, setLightbox] = useState(null)
  const [hovIdx,   setHovIdx]   = useState(null)
  const ref = usePageReveal(0.06)

  const filtered = filter === 'All' ? PHOTOS : PHOTOS.filter(p => p.cat === filter)

  useEffect(() => {
    const fn = e => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Gallery"
          subtitle="A visual journey through our laboratory, nurseries and plantations."
          bgImage="https://duroilab.co.za/wp-content/uploads/2024/04/IMG_1699.jpg"
        />

        <section className="section-pad" ref={ref}>
          <div className="container">

            {/* Filter tabs */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap',
              marginBottom: 56, justifyContent: 'center' }} className="reveal">
              {CATS.map(cat => (
                <button key={cat} onClick={() => setFilter(cat)} style={{
                  padding: '9px 22px', borderRadius: 'var(--radius-pill)',
                  fontSize: 13, fontWeight: 600, cursor: 'pointer', border: '1.5px solid',
                  borderColor: filter === cat ? 'var(--clr-green-mid)' : 'var(--clr-border)',
                  background: filter === cat ? 'var(--clr-green-mid)' : '#fff',
                  color: filter === cat ? '#fff' : 'var(--clr-text)',
                  transition: 'all var(--tr-base)',
                }}>
                  {cat}
                </button>
              ))}
            </div>

            {/* Photo grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}
              className="gallery-grid">
              {filtered.map((p, i) => (
                <div key={`${filter}-${i}`}
                  className={`reveal delay-${(i % 6) + 1}`}
                  onClick={() => setLightbox(p)}
                  onMouseEnter={() => setHovIdx(i)}
                  onMouseLeave={() => setHovIdx(null)}
                  style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden',
                    cursor: 'pointer', position: 'relative',
                    aspectRatio: '4/3', boxShadow: 'var(--shadow-sm)' }}>
                  <img src={p.src} alt={p.caption}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                      transform: hovIdx === i ? 'scale(1.06)' : 'scale(1)',
                      transition: 'transform .5s ease' }} />
                  {/* Hover overlay */}
                  <div style={{ position: 'absolute', inset: 0,
                    background: hovIdx === i ? 'rgba(15,40,20,.52)' : 'rgba(15,40,20,0)',
                    transition: 'background .3s', display: 'flex',
                    alignItems: 'flex-end', padding: 16 }}>
                    <p style={{ color: '#fff', fontSize: 12, fontWeight: 500,
                      opacity: hovIdx === i ? 1 : 0, transition: 'opacity .3s' }}>
                      {p.caption}
                    </p>
                  </div>
                  {/* Category pill */}
                  <div style={{ position: 'absolute', top: 12, left: 12,
                    background: 'rgba(255,255,255,.90)', borderRadius: 'var(--radius-pill)',
                    padding: '3px 10px', fontSize: 10, fontWeight: 700,
                    color: 'var(--clr-green-mid)', letterSpacing: '.08em', textTransform: 'uppercase' }}>
                    {p.cat}
                  </div>
                  {/* Zoom icon */}
                  {hovIdx === i && (
                    <div style={{ position: 'absolute', top: '50%', left: '50%',
                      transform: 'translate(-50%,-50%)', width: 44, height: 44,
                      background: 'rgba(255,255,255,.92)', borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 18 }}>
                      🔍
                    </div>
                  )}
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <p style={{ textAlign: 'center', color: 'var(--clr-text-light)',
                padding: '80px 0', fontSize: 15 }}>No photos in this category yet.</p>
            )}
          </div>
        </section>

        {/* Lightbox */}
        {lightbox && (
          <div onClick={() => setLightbox(null)}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.90)',
              zIndex: 99999, display: 'flex', alignItems: 'center',
              justifyContent: 'center', padding: 24 }}>
            <div onClick={e => e.stopPropagation()}
              style={{ position: 'relative', maxWidth: 900, width: '100%' }}>
              <button onClick={() => setLightbox(null)}
                style={{ position: 'absolute', top: -48, right: 0, background: 'none',
                  border: 'none', color: '#fff', fontSize: 30, cursor: 'pointer',
                  lineHeight: 1, padding: 4 }}>✕</button>
              <img src={lightbox.src} alt={lightbox.caption}
                style={{ width: '100%', borderRadius: 'var(--radius-lg)', display: 'block',
                  boxShadow: '0 20px 60px rgba(0,0,0,.5)' }} />
              <p style={{ color: 'rgba(255,255,255,.68)', fontSize: 13,
                marginTop: 14, textAlign: 'center' }}>{lightbox.caption}</p>
            </div>
          </div>
        )}
      </main>
      <Footer />
      <style>{`
        @media(max-width:760px){ .gallery-grid{ grid-template-columns:1fr 1fr !important; } }
        @media(max-width:480px){ .gallery-grid{ grid-template-columns:1fr !important; } }
      `}</style>
    </>
  )
}
