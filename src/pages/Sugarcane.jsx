import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import usePageReveal from '../hooks/usePageReveal'
import CTABanner from '../components/CTABanner'

/* ── Sugarcane images (Unsplash) ── */
const IMG_HERO    = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80'
const IMG_INTRO   = 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80'
const IMG_NURSERY = 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80'
const IMG_FIELD   = 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80'

/* ── Data ── */
const ADVANTAGES = [
  {
    icon: '🛡️',
    title: 'Disease-Free Material',
    desc: 'One of the primary advantages is the availability of disease-free planting material, ensuring a healthy crop from the very start.',
  },
  {
    icon: '🌱',
    title: '90–95% Germination Rate',
    desc: 'High germination and survival rates — typically above 90–95% — far exceeding conventional methods, leading to uniform crop stand and better tillering.',
  },
  {
    icon: '📦',
    title: 'Reduced Seed Requirement',
    desc: 'Only 5,000–5,500 plants per acre needed. Single bud seedlings reduce seed rate, transportation costs, and handling difficulties significantly.',
  },
  {
    icon: '📈',
    title: '15–25% Higher Yield',
    desc: 'Early vigor and better root development enhances nutrient uptake, resulting in higher cane yields (15–25% increase) and improved sugar recovery.',
  },
  {
    icon: '🚜',
    title: 'Mechanization Friendly',
    desc: 'Planting distance of 5×1.5 ft to 8×1 ft supports mechanization and efficient use of land and water resources.',
  },
  {
    icon: '🧬',
    title: 'Improved Varieties',
    desc: 'New and improved varieties available: Co 86032, PDN 15012, PDN 13007, CoM 265, Co11015 (with advance booking).',
  },
]

const STAGES = [
  {
    num: '01',
    title: 'Tissue Culture (TC)',
    subtitle: 'Laboratory Stage',
    icon: '🧪',
    color: '#2b8c3e',
    desc: 'Plants produced in a lab from meristem (growing tip) under sterile conditions — disease-free and genetically uniform.',
  },
  {
    num: '02',
    title: 'Single Eye Bud',
    subtitle: 'Bud Extraction',
    icon: '🌿',
    color: '#b8972a',
    desc: 'Instead of planting whole cane setts (2–3 buds), only one bud per plant is used, derived from tissue cultured sugarcane plants grown in the field.',
  },
  {
    num: '03',
    title: 'Nursery Seedlings',
    subtitle: 'Controlled Growth',
    icon: '🪴',
    color: '#c0392b',
    desc: 'Buds are raised as seedlings in 10-cavity trays with low EC cocopeat for 30–40 days under controlled conditions, then transplanted into the field.',
  },
]

const VARIETIES = [
  { name: 'Co 86032',   color: '#2b8c3e' },
  { name: 'PDN 15012',  color: '#b8972a' },
  { name: 'PDN 13007',  color: '#1a6e2e' },
  { name: 'CoM 265',    color: '#c0392b' },
  { name: 'Co11015',    color: '#6d4c41' },
]

const PROCESS = [
  {
    step: 1,
    title: 'Mother Plant Selection',
    desc: 'Selection of elite, true-to-type, and disease-free sugarcane plants. Authentic source material is procured from recognized institutes such as the Sugarcane Breeding Institute, Coimbatore, ensuring genetic purity and high performance.',
  },
  {
    step: 2,
    title: 'Tissue Culture Multiplication',
    desc: 'Selected plant material is multiplied under sterile laboratory conditions using tissue culture techniques, ensuring rapid multiplication of uniform, disease-free plants under controlled environmental conditions.',
  },
  {
    step: 3,
    title: 'Acclimatization & Growing in Soil',
    desc: 'Tissue culture plantlets are transferred to greenhouses for acclimatization (primary hardening). Once stabilized, they are transplanted into soil in controlled seed plots to promote natural growth and adaptation.',
  },
  {
    step: 4,
    title: 'Nursery Hardening & Bud Seedling Production',
    desc: 'Healthy canes are selected for single eye bud extraction. Buds are treated and planted in 10-cavity trays with cocopeat and grown under controlled nursery conditions for 30–40 days, ensuring strong root development.',
  },
  {
    step: 5,
    title: 'Field Transplantation',
    desc: 'Fully developed and well-rooted seedlings are transplanted into the main field. Properly hardened seedlings ensure higher survival rates, uniform crop stand, and improved yield potential.',
  },
]

const PAGE_STYLES = `
  .sc-section-tag {
    display: inline-flex; align-items: center; gap: 8px;
    font-size: 11px; font-weight: 700; letter-spacing: 0.22em;
    text-transform: uppercase; color: var(--clr-green-mid); margin-bottom: 14px;
  }
  .sc-section-tag::before {
    content: ''; display: block; width: 22px; height: 2px;
    background: var(--clr-red-check); border-radius: 2px;
  }
  .sc-title {
    font-family: var(--font-cursive);
    font-size: clamp(28px, 3.5vw, 46px);
    font-weight: 700; color: var(--clr-green-dark); line-height: 1.2; margin-bottom: 16px;
  }
  .sc-title em { font-style: italic; color: var(--clr-green-mid); }
  .sc-rule { width: 52px; height: 3px; background: var(--clr-red-check); border-radius: 2px; margin-bottom: 28px; }
  .sc-adv-card:hover { transform: translateY(-5px) !important; box-shadow: var(--shadow-md) !important; border-color: #c8e6c9 !important; }
  .sc-stage-card:hover { transform: translateY(-4px) !important; box-shadow: var(--shadow-md) !important; }
  .sc-process-card:hover { background: rgba(255,255,255,0.10) !important; }
  @media(max-width:820px){
    .sc-intro-grid { grid-template-columns: 1fr !important; gap: var(--sp-8) !important; }
    .sc-adv-grid   { grid-template-columns: 1fr 1fr !important; }
    .sc-stage-grid { grid-template-columns: 1fr 1fr !important; }
    .sc-process-grid { grid-template-columns: 1fr 1fr !important; }
    .sc-var-grid   { grid-template-columns: 1fr 1fr 1fr !important; }
  }
  @media(max-width:560px){
    .sc-adv-grid   { grid-template-columns: 1fr !important; }
    .sc-stage-grid { grid-template-columns: 1fr !important; }
    .sc-process-grid { grid-template-columns: 1fr !important; }
    .sc-var-grid   { grid-template-columns: 1fr 1fr !important; }
  }
  @media(max-width:380px){
    .sc-var-grid   { grid-template-columns: 1fr !important; }
  }
`

export default function Sugarcane() {
  const r1 = usePageReveal()
  const r2 = usePageReveal()
  const r3 = usePageReveal()
  const r4 = usePageReveal()
  const r5 = usePageReveal()

  return (
    <>
      <style>{PAGE_STYLES}</style>
      <Navbar />
      <main>

        {/* ── Hero Banner ── */}
        <PageHero
          title="Sugarcane Plants"
          subtitle="Tissue Culture Derived Single Eye Bud Sugarcane Seedlings"
          bgImage={IMG_HERO}
          badge={{ icon: '🌾', text: 'वृक्षाणां कदली श्रेष्ठा उपयोगे सर्वदा स्थिता ।' }}
        />

        {/* ── Intro ── */}
        <section className="section-pad" ref={r1}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-16)', alignItems: 'center' }} className="sc-intro-grid">

              <div className="reveal-left">
                <p className="sc-section-tag">What We Produce</p>
                <h2 className="sc-title">Tissue Culture<br /><em>Sugarcane Plants</em></h2>
                <div className="sc-rule" />
                <p style={{ fontSize: 15, color: 'var(--clr-text-mid)', lineHeight: 1.85, marginBottom: 16 }}>
                  Tissue culture–derived single eye bud sugarcane seedlings are an advanced planting material used in modern sugarcane cultivation to improve yield, uniformity, and disease resistance.
                </p>
                <p style={{ fontSize: 15, color: 'var(--clr-text-mid)', lineHeight: 1.85 }}>
                  These seedlings ensure high germination and survival rates, typically above <strong>90–95%</strong>, which is much higher than conventional methods — leading to a uniform crop stand, better tillering, and consistent growth across the field.
                </p>
              </div>

              <div className="reveal-right" style={{ position: 'relative' }}>
                <img
                  src={IMG_INTRO}
                  alt="Sugarcane field"
                  style={{
                    width: '100%', height: 'clamp(260px,45vw,460px)',
                    objectFit: 'cover', borderRadius: 'var(--radius-xl)',
                    boxShadow: 'var(--shadow-lg)', display: 'block',
                  }}
                />
                {/* Stat badge */}
                <div style={{
                  position: 'absolute', bottom: 16, left: 16,
                  background: '#fff', borderRadius: 'var(--radius-md)',
                  padding: '16px 22px', boxShadow: 'var(--shadow-lg)',
                  border: '1px solid rgba(43,140,62,0.15)',
                }}>
                  <p style={{ fontFamily: 'var(--font-cursive)', fontSize: 34, fontWeight: 700, color: 'var(--clr-green-mid)', lineHeight: 1 }}>95%+</p>
                  <p style={{ fontSize: 12, color: 'var(--clr-text-light)', marginTop: 4, fontWeight: 500 }}>Germination Rate</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Advantages ── */}
        <section className="section-pad" style={{ background: 'var(--clr-offwhite)' }} ref={r2}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--sp-16)' }} className="reveal">
              <p className="sc-section-tag" style={{ justifyContent: 'center', display: 'flex' }}>Key Benefits</p>
              <h2 className="sc-title">Advantages of<br /><em>TC Sugarcane</em></h2>
              <div className="sc-rule" style={{ margin: '0 auto 0' }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--sp-5)' }} className="sc-adv-grid">
              {ADVANTAGES.map((a, i) => (
                <div key={i} className={`reveal delay-${i + 1}`}>
                  <div className="sc-adv-card" style={{
                    background: '#fff', borderRadius: 'var(--radius-lg)',
                    padding: 'var(--sp-6)', height: '100%',
                    border: '1px solid var(--clr-border)', boxShadow: 'var(--shadow-sm)',
                    transition: 'all var(--tr-slow)',
                  }}>
                    <div style={{ fontSize: 32, marginBottom: 14 }}>{a.icon}</div>
                    <h4 style={{ fontSize: 15, fontWeight: 700, color: 'var(--clr-green-dark)', marginBottom: 8 }}>{a.title}</h4>
                    <p style={{ fontSize: 13.5, color: 'var(--clr-text-mid)', lineHeight: 1.75 }}>{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Stages ── */}
        <section className="section-pad" ref={r3}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--sp-16)' }} className="reveal">
              <p className="sc-section-tag" style={{ justifyContent: 'center', display: 'flex' }}>Development</p>
              <h2 className="sc-title">Stages of Seedling<br /><em>Development</em></h2>
              <div className="sc-rule" style={{ margin: '0 auto 0' }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--sp-6)' }} className="sc-stage-grid">
              {STAGES.map((s, i) => (
                <div key={s.num} className={`reveal delay-${i + 1}`}>
                  <div className="sc-stage-card" style={{
                    background: '#fff', borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden', boxShadow: 'var(--shadow-sm)',
                    border: '1px solid var(--clr-border)',
                    height: '100%', display: 'flex', flexDirection: 'column',
                    transition: 'all var(--tr-slow)',
                  }}>
                    <div style={{ height: 5, background: s.color }} />
                    <div style={{ padding: 'var(--sp-8) var(--sp-6)', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--sp-4)' }}>
                        <span style={{ fontFamily: 'var(--font-cursive)', fontSize: 48, fontWeight: 700, color: s.color, lineHeight: 1 }}>{s.num}</span>
                        <span style={{ fontSize: 34 }}>{s.icon}</span>
                      </div>
                      <h3 style={{ fontSize: 20, fontWeight: 700, color: 'var(--clr-green-dark)', marginBottom: 4 }}>{s.title}</h3>
                      <p style={{ fontSize: 11, fontWeight: 700, color: s.color, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 'var(--sp-4)' }}>{s.subtitle}</p>
                      <p style={{ fontSize: 14, color: 'var(--clr-text-mid)', lineHeight: 1.75, flex: 1 }}>{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Available Varieties ── */}
        <section style={{ background: 'var(--clr-offwhite)', padding: 'var(--sp-16) 0' }} ref={r4}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-16)', alignItems: 'center' }} className="sc-intro-grid">

              <div className="reveal-left">
                <p className="sc-section-tag">Our Selection</p>
                <h2 className="sc-title">Available<br /><em>Varieties</em></h2>
                <div className="sc-rule" />
                <p style={{ fontSize: 15, color: 'var(--clr-text-mid)', lineHeight: 1.85, marginBottom: 'var(--sp-6)' }}>
                  All varieties are sourced from recognized institutes ensuring genetic purity and high performance. Co11015 is available with advance booking.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--sp-3)' }} className="sc-var-grid">
                  {VARIETIES.map((v, i) => (
                    <div key={i} className={`reveal delay-${i + 1}`} style={{
                      background: '#fff', borderRadius: 'var(--radius-md)',
                      padding: '14px 16px', border: `2px solid ${v.color}22`,
                      boxShadow: 'var(--shadow-sm)', textAlign: 'center',
                    }}>
                      <div style={{ width: 10, height: 10, borderRadius: '50%', background: v.color, margin: '0 auto 8px' }} />
                      <p style={{ fontSize: 13, fontWeight: 700, color: v.color }}>{v.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="reveal-right">
                <img
                  src={IMG_NURSERY}
                  alt="Sugarcane nursery seedlings"
                  style={{
                    width: '100%', height: 'clamp(260px,45vw,460px)',
                    objectFit: 'cover', borderRadius: 'var(--radius-xl)',
                    boxShadow: 'var(--shadow-lg)', display: 'block',
                  }}
                />
              </div>

            </div>
          </div>
        </section>

        {/* ── Process Flow ── */}
        <section className="section-pad" style={{ background: 'var(--clr-green-dark)', position: 'relative', overflow: 'hidden' }} ref={r5}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '36px 36px', pointerEvents: 'none',
          }} />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--sp-16)' }} className="reveal">
              <p className="sc-section-tag" style={{ color: 'rgba(200,168,75,0.8)', justifyContent: 'center', display: 'flex' }}>Our Process</p>
              <h2 className="sc-title" style={{ color: '#fff' }}>
                From Mother Plant<br /><em style={{ color: 'var(--clr-green-mid)' }}>to Field-Ready Seedling</em>
              </h2>
              <div className="sc-rule" style={{ margin: '0 auto 0', background: 'rgba(200,168,75,0.5)' }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--sp-5)' }} className="sc-process-grid">
              {PROCESS.map((p, i) => (
                <div key={p.step} className={`reveal delay-${i + 1}`}>
                  <div className="sc-process-card" style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.10)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--sp-6)', height: '100%',
                    transition: 'background var(--tr-slow)',
                  }}>
                    <div style={{
                      width: 44, height: 44, background: 'var(--clr-green-mid)',
                      borderRadius: 'var(--radius-md)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginBottom: 'var(--sp-4)',
                    }}>
                      <span style={{ fontWeight: 700, fontSize: 16, color: '#fff' }}>{String(p.step).padStart(2, '0')}</span>
                    </div>
                    <h4 style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 'var(--sp-3)' }}>{p.title}</h4>
                    <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.60)', lineHeight: 1.75 }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Field image strip */}
            
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
