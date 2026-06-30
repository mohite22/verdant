import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import SEO from '../components/SEO'
import bnvimg1 from '../assets/bnv1.jpg'
import bnvimg2 from '../assets/bnv2.jpg'
import bnvimg3 from '../assets/bnv3.jpg'
import pnvimg1 from '../assets/pnv1.jpg'
import pnvimg2 from '../assets/pnv2.jpg'
import pnvimg3 from '../assets/pnv3.jpeg'
import scimg1  from '../assets/IMG_4058.jpg'
import scimg2  from '../assets/IMG_4059.jpg'
import scimg3  from '../assets/IMG_4060.jpg'
import scimg4  from '../assets/IMG_4061.jpg'
//import bananaimg1 from '../assets/GrandeNain02.jpg'
import bananaimg2 from '../assets/yellkibanana.jpg'
import bananaimg3 from '../assets/banan23.jpeg'
//import bananaimg4 from '../assets/Bnan22.jpg'
//import aboutimg  from '../assets/aboutus-imag.jpg'
import homebanana from '../assets/home-banana.jpg'
import labimg1 from '../assets/lab/DSC02195.jpg'
import labimg2 from '../assets/lab/DSC_1469.jpg'
import labimg3 from '../assets/lab/DSC_1475.jpg'
import labimg4 from '../assets/lab/DSC_1477.jpg'
import labimg5 from '../assets/lab/DSC_1495.jpg'
import labimg6 from '../assets/lab/DSC_1549.jpg'
import labimg7 from '../assets/lab/DSC_1869.jpg'
import sugimg1 from '../assets/pomegranate/IMG_3143.jpg'
import sugimg2 from '../assets/pomegranate/IMG_3146.jpg'
import sugimg3 from '../assets/pomegranate/IMG_3147.jpg'
import sugimg4 from '../assets/pomegranate/IMG_3148.jpg'
import sugimg5 from '../assets/pomegranate/IMG_3150.jpg'
import sugimg6 from '../assets/pomegranate/IMG_3165.jpg'
import sugimg7 from '../assets/pomegranate/IMG_3166.jpg'
import sugimg8 from '../assets/pomegranate/IMG_3764.jpg'
import fieldvisite1 from '../assets/IMG_3288.jpg'
import fieldvisite2 from '../assets/IMG_3295.jpg'
import fieldvisite3 from '../assets/IMG_3312.jpg'
import fieldvisite4 from '../assets/IMG_3323.jpg'
import fieldvisite5 from '../assets/IMG_3670.jpg'
import fieldvisite6 from '../assets/IMG_3674.jpg'
import fieldvisite7 from '../assets/IMG_3678.jpg'
import fieldvisite8 from '../assets/IMG_3680.jpg'

const CATS = ['All', 'Banana', 'Pomegranate', 'Sugarcane', 'Laboratory', 'Visits']

const PHOTOS = [
  { src: bnvimg1,    cat: 'Banana',       caption: 'Banana nursery — healthy plants in the field' },
  { src: bnvimg2,    cat: 'Banana',       caption: 'Banana plants ready for field planting' },
  { src: bnvimg3,    cat: 'Banana',       caption: 'Banana plantation — uniform crop stand' },
  //{ src: bananaimg1, cat: 'Banana',       caption: 'Grand Nain variety — tissue culture banana' },
  { src: bananaimg2, cat: 'Banana',       caption: 'Yelakki banana variety — Elachi banana' },
  { src: bananaimg3, cat: 'Banana',       caption: 'Banana tissue culture plants with roots' },
  //{ src: bananaimg4, cat: 'Banana',       caption: 'Banana plants at nursery stage' },
  { src: homebanana, cat: 'Banana',       caption: 'Tissue culture banana — field ready' },
  { src: pnvimg1,    cat: 'Pomegranate',  caption: 'Pomegranate tissue culture plant' },
  { src: pnvimg2,    cat: 'Pomegranate',  caption: 'Pomegranate plants in hardening nursery' },
  { src: pnvimg3,    cat: 'Pomegranate',  caption: 'Field-ready pomegranate plants' },
  { src: scimg1,     cat: 'Sugarcane',    caption: 'Sugarcane single eye bud seedlings' },
  { src: scimg2,     cat: 'Sugarcane',    caption: 'Sugarcane nursery tray seedlings' },
  { src: scimg3,     cat: 'Sugarcane',    caption: 'Sugarcane seedlings — 30 days growth' },
  { src: scimg4,     cat: 'Sugarcane',    caption: 'Sugarcane field transplantation' },
  { src: sugimg1,    cat: 'Pomegranate',  caption: 'Pomegranate plants in the field' },
  { src: sugimg2,    cat: 'Pomegranate',  caption: 'Pomegranate nursery seedlings' },
  { src: sugimg3,    cat: 'Pomegranate',  caption: 'Pomegranate plants — controlled conditions' },
  { src: sugimg4,    cat: 'Pomegranate',  caption: 'Pomegranate tissue culture plants' },
  { src: sugimg5,    cat: 'Pomegranate',  caption: 'Pomegranate seedlings ready for field' },
  { src: sugimg6,    cat: 'Pomegranate',  caption: 'Pomegranate plantation — uniform stand' },
  { src: sugimg7,    cat: 'Pomegranate',  caption: 'Pomegranate crop — healthy growth' },
  { src: sugimg8,    cat: 'Pomegranate',  caption: 'Pomegranate field — tissue culture derived' },
  //{ src: aboutimg,   cat: 'Laboratory',   caption: 'Verdant BioAgri tissue culture laboratory' },
  { src: labimg1,    cat: 'Laboratory',   caption: 'Laboratory — tissue culture facility' },
  { src: labimg2,    cat: 'Laboratory',   caption: 'Sterile laminar flow bench operations' },
  { src: labimg3,    cat: 'Laboratory',   caption: 'Meristem extraction under sterile conditions' },
  { src: labimg4,    cat: 'Laboratory',   caption: 'Tissue culture multiplication stage' },
  { src: labimg5,    cat: 'Laboratory',   caption: 'Controlled growth room — plant multiplication' },
  { src: labimg6,    cat: 'Laboratory',   caption: 'Weaning greenhouse — primary hardening' },
  { src: labimg7,    cat: 'Laboratory',   caption: 'Laboratory technicians at work' },
  { src: fieldvisite1,    cat: 'Visits',   caption: 'Field Visit' },
  { src: fieldvisite2,    cat: 'Visits',   caption: 'Field Visit' },
  { src: fieldvisite3,    cat: 'Visits',   caption: 'Field Visit' },
  { src: fieldvisite4,    cat: 'Visits',   caption: 'Field Visit' },
  { src: fieldvisite5,    cat: 'Visits',   caption: 'Field Visit' },
  { src: fieldvisite6,    cat: 'Visits',   caption: 'Field Visit' },
  { src: fieldvisite7,    cat: 'Visits',   caption: 'Field Visit' },
  { src: fieldvisite8,    cat: 'Visits',   caption: 'Field Visit' },
]

export default function Gallery() {
  const [filter,   setFilter]   = useState('All')
  const [lightboxIdx, setLightboxIdx] = useState(null)
  const [hovIdx,   setHovIdx]   = useState(null)

  const filtered = filter === 'All' ? PHOTOS : PHOTOS.filter(p => p.cat === filter)
  const lightbox = lightboxIdx !== null ? filtered[lightboxIdx] : null

  const prev = () => setLightboxIdx(i => (i - 1 + filtered.length) % filtered.length)
  const next = () => setLightboxIdx(i => (i + 1) % filtered.length)

  useEffect(() => {
    const fn = e => {
      if (e.key === 'Escape') setLightboxIdx(null)
      if (e.key === 'ArrowRight') setLightboxIdx(i => i !== null ? (i + 1) % filtered.length : null)
      if (e.key === 'ArrowLeft')  setLightboxIdx(i => i !== null ? (i - 1 + filtered.length) % filtered.length : null)
    }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [])

  return (
    <>
      <SEO
        title="Gallery"
        description="Browse our photo gallery of tissue culture banana, pomegranate and sugarcane plants, laboratory operations, nurseries and field visits at Verdant BioAgri LLP."
        keywords="tissue culture plant gallery, banana nursery photos, pomegranate plants images, sugarcane seedlings gallery, verdant bioagri lab"
        url="/gallery"
      />
      <Navbar />
      <main>
        <PageHero
          title="Gallery"
          subtitle="A visual journey through our laboratory, nurseries and plantations."
          bgImage={bnvimg3}
        />

        <section className="section-pad">
          <div className="container">

            {/* Filter tabs */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap',
              marginBottom: 56, justifyContent: 'center' }}>
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
                  onClick={() => setLightboxIdx(i)}
                  onMouseEnter={() => setHovIdx(i)}
                  onMouseLeave={() => setHovIdx(null)}
                  style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden',
                    cursor: 'pointer', position: 'relative',
                    aspectRatio: '4/3', boxShadow: 'var(--shadow-sm)' }}>
                  <img src={p.src} alt={p.caption} loading="lazy"
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
          <div onClick={() => setLightboxIdx(null)}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.92)',
              zIndex: 99999, display: 'flex', alignItems: 'center',
              justifyContent: 'center', padding: '24px 80px' }}>

            {/* Prev arrow */}
            <button onClick={e => { e.stopPropagation(); prev() }}
              style={{ position: 'fixed', left: 16, top: '50%', transform: 'translateY(-50%)',
                background: 'rgba(255,255,255,.15)', border: '1px solid rgba(255,255,255,.3)',
                borderRadius: '50%', width: 48, height: 48, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', fontSize: 22, transition: 'background .2s', zIndex: 100000 }}
              onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,.30)'}
              onMouseOut={e  => e.currentTarget.style.background = 'rgba(255,255,255,.15)'}>
              ‹
            </button>

            {/* Next arrow */}
            <button onClick={e => { e.stopPropagation(); next() }}
              style={{ position: 'fixed', right: 16, top: '50%', transform: 'translateY(-50%)',
                background: 'rgba(255,255,255,.15)', border: '1px solid rgba(255,255,255,.3)',
                borderRadius: '50%', width: 48, height: 48, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', fontSize: 22, transition: 'background .2s', zIndex: 100000 }}
              onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,.30)'}
              onMouseOut={e  => e.currentTarget.style.background = 'rgba(255,255,255,.15)'}>
              ›
            </button>

            <div onClick={e => e.stopPropagation()}
              style={{ position: 'relative', maxWidth: 900, width: '100%' }}>
              {/* Close */}
              <button onClick={() => setLightboxIdx(null)}
                style={{ position: 'absolute', top: -48, right: 0, background: 'none',
                  border: 'none', color: '#fff', fontSize: 30, cursor: 'pointer',
                  lineHeight: 1, padding: 4 }}>✕</button>
              <img src={lightbox.src} alt={lightbox.caption}
                style={{ width: '100%', borderRadius: 'var(--radius-lg)', display: 'block',
                  boxShadow: '0 20px 60px rgba(0,0,0,.5)' }} />
              {/* Counter */}
              <p style={{ color: 'rgba(255,255,255,.5)', fontSize: 11, marginTop: 8,
                textAlign: 'center', letterSpacing: '.1em' }}>
                {lightboxIdx + 1} / {filtered.length}
              </p>
              <p style={{ color: 'rgba(255,255,255,.68)', fontSize: 13,
                marginTop: 4, textAlign: 'center' }}>{lightbox.caption}</p>
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
