import Navbar    from '../components/Navbar'
import Footer    from '../components/Footer'
import PageHero  from '../components/PageHero'
import usePageReveal from '../hooks/usePageReveal'

const STRENGTHS = [
  { icon: '🔬', title: 'Advanced Laboratory Facilities',
    desc: '28 laminar flow benches and 10 controlled growth rooms — among the most advanced tissue culture facilities on the continent.' },
  { icon: '🏭', title: 'Fully Automated Weaning',
    desc: 'State-of-the-art automated weaning greenhouses ensure consistent, high-quality plant establishment at scale.' },
  { icon: '🌿', title: 'On-Site Nurseries',
    desc: 'On-site nurseries harden plants for local markets, ensuring field-ready material that performs from day one.' },
  { icon: '🌍', title: 'Global Export Capability',
    desc: 'ISO-compliant phytosanitary processes enable seamless supply into 50+ countries across five continents.' },
  { icon: '👩‍🔬', title: 'Expert Technical Team',
    desc: 'Our professional team provides post-delivery technical support and farm consultation to every client worldwide.' },
  { icon: '🏆', title: 'ISO 9001 Certified',
    desc: 'ISO 9001 certified since 2011 — one of the first banana tissue culture labs in Africa to achieve this standard.' },
]

const TIMELINE = [
  { year: '1989', event: 'Du Roi Nursery established in Letsitele, specialising in certified citrus cultivars.' },
  { year: '1998', event: 'Du Roi Multiplant founded, expanding into micro-propagation of tropical fruit crops.' },
  { year: '2007', event: 'Cederberg Tree Nursery established in Citrusdal, a greening-free citrus zone.' },
  { year: '2011', event: 'Du Roi Laboratory receives ISO 9001 certification for banana tissue culture production.' },
  { year: '2017', event: 'Halls and Du Roi Nursery combine expertise to launch premium avocado tree production.' },
  { year: '2024', event: 'Du Roi Laboratory produces 10 million+ banana plants annually, exporting to 50+ countries.' },
]

function SectionTitle({ tag, title, italic, centre }) {
  return (
    <div style={centre ? { textAlign: 'center', marginBottom: 56 } : { marginBottom: 16 }} className="reveal">
      <p className="page-tag" style={centre ? { justifyContent: 'center' } : {}}>{tag}</p>
      <h2 className="page-h2">{title} {italic && <em className="page-em">{italic}</em>}</h2>
      <div className="page-rule" style={centre ? { margin: '0 auto 28px' } : {}} />
      {centre && null}
    </div>
  )
}

export default function AboutUs() {
  const r1 = usePageReveal()
  const r2 = usePageReveal()
  const r3 = usePageReveal()
  const r4 = usePageReveal()

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="About Us"
          subtitle="Southern Africa's leading tissue culture laboratory — built on science, driven by excellence, rooted in agriculture."
          badge={{ icon: '🏆', text: 'ISO 9001 Certified Since 2011' }}
        />

        {/* ── Who We Are ── */}
        <section className="section-pad" ref={r1}>
          <div className="container">
            <div className="pg-two-col">
              <div className="reveal-left">
                <p className="page-tag">Who We Are</p>
                <h2 className="page-h2">The Leading Banana <em className="page-em">Tissue Culture Lab</em></h2>
                <div className="page-rule" />
                <p className="pg-body">
                  Du Roi Laboratory is Southern Africa's only banana tissue culture laboratory,
                  supplying <strong>100% of South Africa's banana plant material</strong> and
                  exporting to over 50 countries across Africa, the Middle East, the Indian Ocean
                  islands and beyond.
                </p>
                <p className="pg-body">
                  The business specialises in the production and distribution of elite selections,
                  virus-indexed and disease-free tissue culture plants, with a focus on the banana
                  industry. We produce approximately <strong>10 million banana plants annually</strong>,
                  available at three stages of development.
                </p>
                <p className="pg-body">
                  The Laboratory forms part of the <strong>ANB Group</strong> — the holding company
                  of a diverse group of entities that comprehensively serve the agricultural value chain
                  through research, technical support, laboratory facilities, nurseries, farming and
                  fruit marketing.
                </p>
              </div>

              <div className="reveal-right" style={{ position: 'relative' }}>
                <img
                  src="https://duroilab.co.za/wp-content/uploads/2024/04/IMG_1954.jpg"
                  alt="Du Roi Laboratory"
                  style={{ width: '100%', height: 480, objectFit: 'cover',
                    borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', display: 'block' }}
                />
                <div style={{
                  position: 'absolute', bottom: 24, left: -20,
                  background: '#fff', borderRadius: 'var(--radius-md)',
                  padding: '18px 24px', boxShadow: 'var(--shadow-lg)',
                  border: '1px solid rgba(43,140,62,.15)',
                }}>
                  <p style={{ fontFamily: 'var(--font-cursive)', fontSize: 34, fontWeight: 700,
                    color: 'var(--clr-green-mid)', lineHeight: 1 }}>10M+</p>
                  <p style={{ fontSize: 11, color: 'var(--clr-text-light)', marginTop: 4,
                    fontWeight: 600, letterSpacing: '.04em' }}>Plants produced annually</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Our Strengths ── */}
        <section className="section-pad" style={{ background: 'var(--clr-offwhite)' }} ref={r2}>
          <div className="container">
            <SectionTitle tag="Our Strengths" title="What Sets Us" italic="Apart" centre />
            <div className="pg-grid-3">
              {STRENGTHS.map((s, i) => (
                <div key={i} className={`reveal delay-${i + 1}`}>
                  <div className="pg-strength-card"
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.borderColor = '#c8e6c9' }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.borderColor = 'var(--clr-border)' }}>
                    <div style={{ fontSize: 32, marginBottom: 16 }}>{s.icon}</div>
                    <h4 style={{ fontSize: 16, fontWeight: 700, color: 'var(--clr-green-dark)', marginBottom: 8 }}>{s.title}</h4>
                    <p style={{ fontSize: 13.5, color: 'var(--clr-text-mid)', lineHeight: 1.75 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Timeline ── */}
        <section className="section-pad" ref={r3}>
          <div className="container">
            <SectionTitle tag="Our Journey" title="Decades of" italic="Excellence" centre />
            <div style={{ maxWidth: 700, margin: '0 auto', position: 'relative' }}>
              <div style={{ position: 'absolute', left: 68, top: 8, bottom: 8,
                width: 2, background: 'var(--clr-border)', borderRadius: 2 }} />
              {TIMELINE.map((t, i) => (
                <div key={i} className={`reveal delay-${Math.min(i + 1, 6)}`}
                  style={{ display: 'flex', gap: 24, marginBottom: 32, position: 'relative', alignItems: 'flex-start' }}>
                  <div style={{ width: 128, flexShrink: 0, textAlign: 'right', paddingRight: 16, paddingTop: 2 }}>
                    <span style={{ fontFamily: 'var(--font-cursive)', fontSize: 22, fontWeight: 700,
                      color: 'var(--clr-green-mid)' }}>{t.year}</span>
                  </div>
                  <div style={{ position: 'absolute', left: 60, top: 6, width: 16, height: 16,
                    background: 'var(--clr-green-mid)', borderRadius: '50%',
                    border: '3px solid #fff', boxShadow: '0 0 0 2px var(--clr-green-mid)' }} />
                  <div style={{ paddingLeft: 24, flex: 1 }}>
                    <p style={{ fontSize: 14.5, color: 'var(--clr-text-mid)', lineHeight: 1.7 }}>{t.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ISO CTA ── */}
        <section style={{ background: 'var(--clr-green-dark)', padding: '64px 0' }} ref={r4}>
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'center', gap: 48,
              flexWrap: 'wrap', justifyContent: 'space-between' }} className="reveal">
              <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
                <img
                  src="https://duroilab.co.za/wp-content/uploads/2024/11/sgs-logo-9001-iso-zertifikat_817_2-3995511386-scaled-1.jpg"
                  alt="ISO 9001"
                  style={{ height: 80, width: 'auto', objectFit: 'contain', flexShrink: 0 }}
                  onError={e => { e.currentTarget.style.display = 'none' }}
                />
                <div>
                  <p style={{ fontFamily: 'var(--font-cursive)', fontSize: 24, fontWeight: 700,
                    color: '#fff', marginBottom: 8 }}>ISO 9001 Certified</p>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,.62)', lineHeight: 1.7, maxWidth: 420 }}>
                    Certified for the management system for the production of banana tissue
                    culture plants since February 2011.
                  </p>
                </div>
              </div>
              <a href="#/contact"
                onClick={e => { e.preventDefault(); window.location.hash = '#/contact'; window.scrollTo(0, 0) }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '14px 32px', background: 'var(--clr-green-mid)', color: '#fff',
                  borderRadius: 'var(--radius-pill)', fontSize: 14, fontWeight: 700,
                  flexShrink: 0, transition: 'background .22s ease, transform .22s ease' }}
                onMouseOver={e => { e.currentTarget.style.background = '#3a9e50'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseOut={e  => { e.currentTarget.style.background = 'var(--clr-green-mid)'; e.currentTarget.style.transform = 'none' }}>
                Contact Us →
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
