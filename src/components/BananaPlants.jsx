import { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import bananaimg1 from '../assets/GrandeNain02.jpg'
import bananaimg2 from '../assets/yellkibanana.jpg'
import bananaimg3 from '../assets/banan23.jpeg'
import bannervideo from '../assets/videos/homehero.mp4' // ✅ ADD YOUR VIDEO
import CTABanner from "../components/CTABanner"; // Corrected path

/* ─── Shared scroll-reveal hook ─── */
function useReveal(threshold = 0.1) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.reveal,.reveal-left,.reveal-right')
              .forEach((t, i) => setTimeout(() => t.classList.add('visible'), i * 80))
            obs.unobserve(e.target)
          }
        })
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

/* ─────────────────────────────────────────────────────
   BANANA VARIETIES DATA
───────────────────────────────────────────────────── */
const VARIETIES = [
  {
    id: 'williams',
    name: 'Grand Nain Variety:',
    tag: 'Standard Cavendish',
    color: '#2b8c3e',
    img: bananaimg1,
    description:
      ' Bananas for high yield Plantation. Elevate your banana cultivation with the Grand Nain variety – Asia’s preferred table-top banana renowned for its exceptional qualities. Tissue Culture Grand Nain thrives in high-density planting, offering a delightful combination of taste and better yield.',
    features: [
      'Abundant Harvest: Each bunch boasts 10 to 12 hands, carrying 175 to 225 fruits, ensuring a plentiful yield.',
      'Delicious Taste: Recognized as a preferred dessert banana, the Grand Nain variety delights with its exquisite flavor.',
      'High Yielding: Achieve an impressive average yield of 25 kg to 45 per plant, making it a productive choice for commercial cultivation.',
      'Distinct Fruit Characteristics: Enjoy long cylindrical fruits with minimal curvature, measuring approximately 7 to 11 inches in length.',
      'Good Keeping Quality: Grand Nain offers excellent storage potential, maintaining its freshness for an extended period.',
      'Versatile Use: Internationally accepted both as fresh fruit and for various processing applications, owing to its greater pulp to peel ratio.',
      'Aesthetic Appeal: With attractive yellowish-green coloration at maturity, Grand Nain adds a touch of elegance to your plantation.',
    ],
  },
  {
    id: 'asdia',
    name: 'Yelakki Banana Variety : ',
    tag: 'Improved Williams Selection',
    color: '#1a6e2e',
    img: bananaimg2,
    description:
      'India’s Beloved Elachi Banana. Indulge in the exquisite taste of Yelakki, India’s favorite banana, affectionately known as Elachi Banana. Celebrated for its extraordinary flavor, firm texture, and vibrant yellow hue, Yelakki is a commercial staple in regions, especially Tamil Nadu and Karnataka.',
    features: [
      'Cultivation Prowess: Widely cultivated commercially, Yelakki stands tall as the preferred banana in Tamil Nadu and Karnataka.',
      'Elegant Appearance: The slender, medium-tall plant bears dark green fruits, transforming into a resplendent golden yellow or bright yellow upon ripening.',
      'Aromatic Delight: Recognized for its highly fragrant and tasty fruits, Yelakki earns its popular moniker, the “Elaichi Banana.”',
      'Unique Plant Appearance: The plants carrying Yelakki fruits are smaller, with a distinctive windblown appearance due to closely packed, beak-like structures around the axis.',
      'Ivory White Pulp: Delight in the ivory white pulp of Yelakki, enhancing its visual and culinary appeal.',
      'Transportation Suitability: Specially suited for long-distance transportation, making it a practical choice for various markets.',
      'Abundant Harvest: Yelakki has the capacity to produce 10-14 hands and 12-15 fingers, comprising 100-150 fruits per plant.',
      'Optimal Fruit Length: Enjoy fruits of ideal length, measuring 4 to 5 inches, offering a perfect bite-sized delight.',
    ],
  },
]

/* ─────────────────────────────────────────────────────
   PLANT STAGES DATA (3 stages sold)
───────────────────────────────────────────────────── */
const STAGES = [
  {
    num: '01',
    title: 'In Vitro',
    subtitle: 'Laboratory Stage',
    icon: '🧪',
    desc: 'Tiny plantlets sold in batches of 50 (+ 10% extra). Transported cost-effectively by air freight. Requires the receiver to wean and harden off the plants before field planting.',
    note: 'Suitable for buyers with weaning facilities',
    color: '#2b8c3e',
  },
  {
    num: '02',
    title: 'In Vivo (5 cm)',
    subtitle: 'Weaning Stage',
    icon: '🌱',
    desc: 'Plants at 5 cm height, fully weaned and hardened off in our automated greenhouse facilities. Ready for transplanting into the nursery or directly into prepared planting sites.',
    note: 'Most popular export stage',
    color: '#b8972a',
  },
  {
    num: '03',
    title: 'Field-Ready (20 cm)',
    subtitle: 'Nursery Stage',
    icon: '🌿',
    desc: 'Fully hardened plants at 20 cm, grown through our on-site nursery. These plants are immediately ready for planting in the land — 6 to 8 weeks from the weaning stage.',
    note: 'Ready for direct field planting',
    color: '#c0392b',
  },
]

/* ─────────────────────────────────────────────────────
   PROCESS STEPS
───────────────────────────────────────────────────── */
const PROCESS = [
  { step: 1, title: 'Mother Block Selection', desc: 'Plants sourced from our 4-hectare foundation block — evaluated with world-renowned banana specialist Dr. John Robinson for vigorous growth, high commercial yield, plant stability and uniformity.' },
  { step: 2, title: 'Meristem Extraction', desc: 'Suckers are harvested and tissue extracted by skilled technicians working in ultra-sterile laminar flow benches. Each piece must contain meristematic tissue to generate new shoots.' },
  { step: 3, title: 'Controlled Multiplication', desc: 'Plant material multiplied over five rounds (four weeks each) in 10 controlled growth rooms — stopping at round five to keep mutation below 1%, ensuring genetic stability.' },
  { step: 4, title: 'Virus Indexing', desc: 'Every meristem is virus-indexed by an accredited third-party laboratory for all known banana viruses before multiplication begins — guaranteeing disease-free planting material.' },
  { step: 5, title: 'Weaning & Hardening', desc: 'Rooting hormone applied, then plants transplanted into trays in fully automated weaning greenhouses. After 4 weeks, plants reach the 5 cm in vivo stage.' },
  { step: 6, title: 'Nursery Grow-Out', desc: 'Plants grown on in our on-site nurseries for 6–8 weeks until field-ready at 20 cm. Full traceability maintained from foundation block to the grower.' },
]

/* ─────────────────────────────────────────────────────
   WHY TC PLANTS
───────────────────────────────────────────────────── */
const BENEFITS = [
  { icon: '✓', title: 'Disease-Free Guarantee', desc: 'Every plant virus-indexed and certified pathogen-free by accredited third-party laboratories.' },
  { icon: '✓', title: 'Complete Traceability', desc: 'Full traceability from the foundation block through to the grower — backed by ISO 9001 certification since 2011.' },
  { icon: '✓', title: 'Plantation Uniformity', desc: 'Plants grow at the same pace and are ready to harvest simultaneously — dramatically reducing labour costs.' },
  { icon: '✓', title: 'Faster Maturity', desc: 'Tissue culture plants typically reach first harvest 6–8 weeks earlier than conventional planting material.' },
  { icon: '✓', title: 'Rapid Expansion', desc: 'Convert or expand plantations quickly and efficiently with millions of identical, superior selections.' },
  { icon: '✓', title: 'True to Type', desc: 'Less than 1% mutation rate — our reputation for true-to-type, high quality plants is maintained through meticulous tissue-culture techniques.' },
]

/* ═════════════════════════════════════════════════════
   SECTION COMPONENTS
═════════════════════════════════════════════════════ */

/* ── Page Hero Banner ── */
function PageHero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { const t = setTimeout(() => setMounted(true), 80); return () => clearTimeout(t) }, [])
  return (
    <section style={{
      position: 'relative', width: '100%',
      height: 'clamp(260px,45vw,480px)', minHeight: 260,
      overflow: 'hidden',
      display: 'flex', alignItems: 'center',
    }}>
      {/* BG Video */}
      <video autoPlay muted loop playsInline
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}>
        <source src={bannervideo} type="video/mp4" />
      </video>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(110deg, rgba(15,40,20,0.82) 0%, rgba(25,60,30,0.55) 60%, rgba(15,40,20,0.45) 100%)', zIndex: 1 }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          opacity: mounted ? 1 : 0, transform: mounted ? 'none' : 'translateY(24px)',
          transition: 'opacity .8s ease .2s, transform .8s ease .2s',
        }}>
          {/* Breadcrumb */}
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>
            Home &nbsp;/&nbsp; Banana Plants
          </p>
          <h1 style={{
            fontFamily: 'var(--font-cursive)', fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 700, color: '#fff', lineHeight: 1.15, marginBottom: 20,
            textShadow: '0 2px 20px rgba(0,0,0,0.3)',
          }}>
            Banana Plants
          </h1>
          <p style={{
            fontSize: 'clamp(14px, 1.6vw, 18px)', fontWeight: 300,
            color: 'rgba(255,255,255,0.85)', lineHeight: 1.75,
            maxWidth: 560, marginBottom: 32,
          }}>
            Elevate Your Harvest with Excellence
          </p>
          {/* ISO badge */}
          {/* <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.25)', borderRadius: 'var(--radius-pill)',
            padding: '8px 20px',
          }}>
            <span style={{ fontSize: 18 }}>🏆</span>
            <span style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.9)', letterSpacing: '0.06em' }}>
              ISO 9001 Certified Since 2011
            </span>
          </div> */}
        </div>
      </div>
    </section>
  )
}

/* ── Intro / What is TC ── */
function TissueIntro() {
  const ref = useReveal()
  return (
    <section className="section-pad" ref={ref}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-16)', alignItems: 'center' }} className="intro-grid">

          {/* Text */}
          <div className="reveal-left">
            <p className="section-tag">What We Produce</p>
            <h2 className="section-title">
              Tissue Culture<br />
              <em>Banana Plants</em>
            </h2>
            <div className="section-divider-line" />
            <p style={{ fontSize: 15, color: 'var(--clr-text-mid)', lineHeight: 1.85, marginBottom: 20 }}>
            Tissue culture is the rapid multiplication of plant selections and offers the benefit of converting or expanding plantations quickly and efficiently with superior selections of disease-free plants. All laboratory varieties are selected for their vigorous growth, high commercial yield potential, plant stability and uniformity.
            </p>
            <p style={{ fontSize: 15, color: 'var(--clr-text-mid)', lineHeight: 1.85, marginBottom: 20 }}>
            Unlock the potential of superior banana cultivation with our quality tissue culture banana plants. Embrace the advantages of tissue culture, including uniform yields, precise variety selection, disease resistance, and accelerated, abundant harvests compared to traditional planting methods.
            </p>
            <p style={{ fontSize: 15, color: 'var(--clr-text-mid)', lineHeight: 1.85 }}>
              All laboratory varieties are selected for their <strong>vigorous growth, high commercial
              yield potential, plant stability and uniformity</strong>.
            </p>
          </div>

          {/* Image */}
          <div className="reveal-right" style={{ position: 'relative' }}>
            <img
              // src="https://duroilab.co.za/wp-content/uploads/2024/04/IMG_1954.jpg"
              src={bananaimg3}
              alt="Banana tissue culture plant with roots"
              style={{
                width: '100%', height: 'clamp(240px,40vw,460px)',
                objectFit: 'cover', borderRadius: 'var(--radius-lg)',
                display: 'block', boxShadow: 'var(--shadow-lg)',
              }}
            />
            {/* Floating stat card */}
            <div style={{
              position: 'absolute', bottom: 16, left: 16,
              background: '#fff', borderRadius: 'var(--radius-md)',
              padding: '18px 24px', boxShadow: 'var(--shadow-lg)',
              border: '1px solid rgba(43,140,62,0.15)',
              minWidth: 190,
            }}>
              <p style={{ fontFamily: 'var(--font-cursive)', fontSize: 36, fontWeight: 700, color: 'var(--clr-green-mid)', lineHeight: 1 }}>10M+</p>
              <p style={{ fontSize: 12, color: 'var(--clr-text-light)', marginTop: 4, fontWeight: 500, letterSpacing: '0.04em' }}>Plants produced annually</p>
            </div>
          </div>

        </div>
      </div>
      <style>{`
        @media(max-width:820px){ .intro-grid{ grid-template-columns:1fr !important; gap:var(--sp-10) !important; } }
      `}</style>
    </section>
  )
}

/* ── Plant Stages (3 stages) ── */
function PlantStages() {
  const ref = useReveal()
  return (
    <section className="section-pad" style={{ background: 'var(--clr-offwhite)' }} ref={ref}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--sp-16)' }} className="reveal">
          <p className="section-tag">Availability</p>
          <h2 className="section-title">
            3 Stages of<br /><em>Development</em>
          </h2>
          <div className="section-divider-line" style={{ margin: '0 auto var(--sp-4)' }} />
          <p style={{ fontSize: 15, color: 'var(--clr-text-light)', maxWidth: 520, margin: '0 auto' }}>
            Our banana plants are available at three stages — choose the stage that best suits
            your infrastructure and planting programme.
          </p>
        </div>

        {/* Stage cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--sp-6)' }} className="stages-grid">
          {STAGES.map((s, i) => (
            <div
              key={s.num}
              className="reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div style={{
                background: '#fff', borderRadius: 'var(--radius-lg)',
                overflow: 'hidden', boxShadow: 'var(--shadow-sm)',
                border: '1px solid var(--clr-border)',
                height: '100%', display: 'flex', flexDirection: 'column',
                transition: 'box-shadow var(--tr-slow), transform var(--tr-slow)',
              }}
                className="stage-card"
              >
                {/* Top colour bar */}
                <div style={{ height: 5, background: s.color }} />
                <div style={{ padding: 'var(--sp-8) var(--sp-6)', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  {/* Number + icon */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--sp-5)' }}>
                    <span style={{ fontFamily: 'var(--font-cursive)', fontSize: 48, fontWeight: 700, color: s.color, lineHeight: 1 }}>{s.num}</span>
                    <span style={{ fontSize: 36 }}>{s.icon}</span>
                  </div>
                  <h3 style={{ fontSize: 22, fontWeight: 700, color: 'var(--clr-green-dark)', marginBottom: 4 }}>{s.title}</h3>
                  <p style={{ fontSize: 12, fontWeight: 600, color: s.color, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 'var(--sp-4)' }}>{s.subtitle}</p>
                  <p style={{ fontSize: 14, color: 'var(--clr-text-mid)', lineHeight: 1.75, flex: 1 }}>{s.desc}</p>
                  {/* Badge */}
                  <div style={{
                    marginTop: 'var(--sp-5)', display: 'inline-flex', alignItems: 'center', gap: 6,
                    background: `${s.color}12`, border: `1px solid ${s.color}30`,
                    borderRadius: 'var(--radius-pill)', padding: '5px 14px',
                  }}>
                    <span style={{ width: 6, height: 6, background: s.color, borderRadius: '50%', flexShrink: 0 }} />
                    <span style={{ fontSize: 11, fontWeight: 600, color: s.color }}>{s.note}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .stage-card:hover{ box-shadow:var(--shadow-md) !important; transform:translateY(-4px) !important; }
        @media(max-width:820px){ .stages-grid{ grid-template-columns:1fr 1fr !important; } }
        @media(max-width:560px){ .stages-grid{ grid-template-columns:1fr !important; } }
      `}</style>
    </section>
  )
}

/* ── Varieties Grid ── */
function VarietiesSection() {
  const ref = useReveal(0.06)
  const [activeVar, setActiveVar] = useState(null)

  return (
    <section className="section-pad" ref={ref} id="varieties">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--sp-16)' }} className="reveal">
          <p className="section-tag">Our Selection</p>
          <h2 className="section-title">
            Available <em>Varieties</em>
          </h2>
          <div className="section-divider-line" style={{ margin: '0 auto var(--sp-4)' }} />
          <p style={{ fontSize: 15, color: 'var(--clr-text-light)', maxWidth: 560, margin: '0 auto' }}>
            All varieties are selected from our elite foundation block for vigorous growth,
            high commercial yield potential, plant stability and uniformity.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 'var(--sp-6)', alignItems: 'stretch' }} className="varieties-grid">
          {VARIETIES.map((v, i) => (
            <div
              key={v.id}
              className="reveal"
              style={{ transitionDelay: `${i * 0.08}s`, height: '100%' }}
            >
              <div
                style={{
                  background: '#fff', borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  border: `1px solid ${activeVar === v.id ? v.color : 'var(--clr-border)'}`,
                  cursor: 'pointer',
                  transition: 'all var(--tr-slow)',
                  transform: activeVar === v.id ? 'translateY(-6px)' : 'none',
                  boxShadow: activeVar === v.id ? `0 12px 40px ${v.color}25` : 'var(--shadow-sm)',
                  height: '100%', display: 'flex', flexDirection: 'column',
                }}
                onMouseEnter={() => setActiveVar(v.id)}
                onMouseLeave={() => setActiveVar(null)}
              >
                {/* Image */}
                <div style={{ position: 'relative', overflow: 'hidden', height: 'clamp(180px,30vw,400px)' }}>
                  <img
                    src={v.img} alt={v.name}
                    style={{
                      width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                      transition: 'transform 0.5s ease',
                      transform: activeVar === v.id ? 'scale(1.05)' : 'scale(1)',
                    }}
                  />
                  {/* Tag overlay */}
                  <div style={{
                    position: 'absolute', top: 12, left: 12,
                    background: v.color, color: '#fff',
                    fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                    padding: '4px 12px', borderRadius: 'var(--radius-pill)',
                  }}>
                    {v.tag}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: 'var(--sp-6)', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-cursive)', fontSize: 28, fontWeight: 700,
                    color: 'var(--clr-green-dark)', marginBottom: 'var(--sp-3)',
                  }}>
                    {v.name}
                  </h3>
                  <p style={{ fontSize: 13.5, color: 'var(--clr-text-mid)', lineHeight: 1.75, marginBottom: 'var(--sp-4)' }}>
                    {v.description}
                  </p>
                  {/* Feature list */}
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {v.features.map((f, fi) => (
                      <li key={fi} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: 'var(--clr-text-mid)', lineHeight: 1.5 }}>
                        <svg width="16" height="16" viewBox="0 0 22 22" style={{ flexShrink: 0, marginTop: 1 }}>
                          <rect width="22" height="22" rx="3" fill={v.color} />
                          <path d="M5 11.5l4 4 8-8" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:580px){ .varieties-grid{ grid-template-columns:1fr !important; } }
      `}</style>
    </section>
  )
}

/* ── Production Process ── */
function ProductionProcess() {
  const ref = useReveal(0.06)
  return (
    <section className="section-pad" style={{ background: 'var(--clr-green-dark)', position: 'relative', overflow: 'hidden' }} ref={ref}>
      {/* Decorative dots */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '36px 36px', pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--sp-16)' }} className="reveal">
          <p className="section-tag" style={{ color: 'rgba(200,168,75,0.8)', justifyContent: 'center', display: 'flex' }}>Our Process</p>
          <h2 className="section-title" style={{ color: '#fff' }}>
            From Mother Block<br /><em style={{ color: 'var(--clr-green-mid)' }}>to Field-Ready Plant</em>
          </h2>
          <div className="section-divider-line" style={{ margin: '0 auto var(--sp-4)', background: 'rgba(200,168,75,0.5)' }} />
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', maxWidth: 520, margin: '0 auto' }}>
            A six-step process over five months — producing 2,000 identical plants from a single sucker
            with less than 1% mutation rate.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--sp-5)' }} className="process-grid">
          {PROCESS.map((p, i) => (
            <div
              key={p.step}
              className="reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.10)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--sp-6)',
                height: '100%',
                transition: 'background var(--tr-slow)',
              }}
                className="process-card"
              >
                {/* Step number */}
                <div style={{
                  width: 44, height: 44, background: 'var(--clr-green-mid)',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 'var(--sp-4)',
                }}>
                  <span style={{ fontWeight: 700, fontSize: 16, color: '#fff' }}>{String(p.step).padStart(2, '0')}</span>
                </div>
                <h4 style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 'var(--sp-3)' }}>{p.title}</h4>
                <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.60)', lineHeight: 1.75 }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .process-card:hover{ background:rgba(255,255,255,0.10) !important; }
        @media(max-width:820px){ .process-grid{ grid-template-columns:1fr 1fr !important; } }
        @media(max-width:560px){ .process-grid{ grid-template-columns:1fr !important; } }
      `}</style>
    </section>
  )
}

/* ── Why TC Plants ── */
function WhyTCPlants() {
  const ref = useReveal()
  return (
    <section className="section-pad" style={{ background: '#fff' }} ref={ref}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-16)', alignItems: 'center' }} className="why-tc-grid">

          {/* Image side */}
          <div className="reveal-left">
            <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <img
                src="https://duroilab.co.za/wp-content/uploads/2024/04/IMG_1699.jpg"
                alt="Du Roi laboratory banana plants"
                style={{ width: '100%', height: 'clamp(240px,40vw,480px)', objectFit: 'cover', display: 'block' }}
              />
              
            </div>
          </div>

          {/* Benefits list */}
          <div className="reveal-right">
            <p className="section-tag">Why Choose TC Plants</p>
            <h2 className="section-title"><em>Advantage</em>
            </h2>
            <div className="section-divider-line" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)' }}>
              {BENEFITS.map((b, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: 'var(--sp-4)',
                    padding: 'var(--sp-4)',
                    background: 'var(--clr-offwhite)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--clr-border-light)',
                    transition: 'background var(--tr-fast), border-color var(--tr-fast)',
                  }}
                  className="benefit-row"
                >
                  <div style={{
                    width: 32, height: 32, background: 'var(--clr-green-mid)',
                    borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', flexShrink: 0,
                  }}>
                    <svg width="14" height="14" viewBox="0 0 22 22">
                      <path d="M5 11.5l4 4 8-8" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 700, color: 'var(--clr-green-dark)', marginBottom: 2 }}>{b.title}</p>
                    <p style={{ fontSize: 13, color: 'var(--clr-text-light)', lineHeight: 1.6 }}>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      <style>{`
        .benefit-row:hover{ background:var(--clr-green-light) !important; border-color:#c8e6c9 !important; }
        @media(max-width:820px){ .why-tc-grid{ grid-template-columns:1fr !important; gap:var(--sp-10) !important; } }
      `}</style>
    </section>
  )
}



/* ═════════════════════════════════════════════════════
   SHARED CSS injected once
═════════════════════════════════════════════════════ */
const PAGE_STYLES = `
  .section-tag {
    display: inline-flex; align-items: center; gap: 8px;
    font-size: 11px; font-weight: 700; letter-spacing: 0.22em;
    text-transform: uppercase; color: var(--clr-green-mid);
    margin-bottom: 14px;
  }
  .section-tag::before {
    content: ''; display: block; width: 22px; height: 2px;
    background: var(--clr-red-check); border-radius: 2px;
  }
  .section-title {
    font-family: var(--font-cursive);
    font-size: clamp(30px, 3.5vw, 46px);
    font-weight: 700; color: var(--clr-green-dark);
    line-height: 1.2; margin-bottom: 16px;
  }
  .section-title em { font-style: italic; color: var(--clr-green-mid); }
  .section-divider-line {
    width: 52px; height: 3px; background: var(--clr-red-check);
    border-radius: 2px; margin-bottom: 28px;
  }
`

/* ═════════════════════════════════════════════════════
   PAGE ROOT
═════════════════════════════════════════════════════ */
export default function BananaPlants() {
  return (
    <>
      <style>{PAGE_STYLES}</style>
      <Navbar />
      <main style={{ paddingTop: 0 }}>
        <PageHero />
        <TissueIntro />
        <PlantStages />
        <VarietiesSection />
        <ProductionProcess />
        <WhyTCPlants />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
