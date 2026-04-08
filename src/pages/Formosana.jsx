import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import usePageReveal from '../hooks/usePageReveal'

const FACTS = [
  { label: 'Variety Type',        value: 'Cavendish' },
  { label: 'Disease Tolerance',   value: 'Foc TR4 (High)' },
  { label: 'Origin',              value: 'Taiwan Banana Research Institute' },
  { label: 'Method',              value: 'Somaclonal Variation' },
  { label: 'Exclusive Licence',   value: 'Africa, Middle East, Caribbean, S. America' },
  { label: 'Fruit Quality',       value: 'Cavendish export-grade' },
]

const BENEFITS = [
  { icon: '🛡️', title: 'TR4 Tolerance',
    desc: 'Shows less severe symptoms or damage than susceptible varieties when grown under similar environmental conditions and inoculum pressure from Fusarium Tropical Race 4.' },
  { icon: '🍌', title: 'Cavendish Quality',
    desc: 'Produces Cavendish-type fruit that meets international export grade standards — maintaining the commercial value growers expect from this variety group.' },
  { icon: '📜', title: 'Exclusive Supply Rights',
    desc: 'Du Roi holds the exclusive licence from the Taiwan Banana Research Institute (TBRI) to supply Formosana into Africa, the Middle East, Caribbean Islands, French West Indies and South & Central America.' },
  { icon: '🌏', title: 'TBRI Pedigree',
    desc: 'Developed by the Taiwan Banana Research Institute through somaclonal variation — a globally recognised centre of excellence in banana variety development and disease management.' },
]

export default function Formosana() {
  const r1 = usePageReveal()
  const r2 = usePageReveal()
  const r3 = usePageReveal()

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Formosana"
          subtitle="The Cavendish banana variety with high tolerance to Fusarium Tropical Race 4 — exclusively supplied by Du Roi Laboratory."
          badge={{ icon: '🛡️', text: 'TR4 Tolerant Variety' }}
        />

        {/* Overview */}
        <section className="section-pad" ref={r1}>
          <div className="container">
            <div className="pg-two-col">
              <div className="reveal-left">
                <p className="page-tag">What Is Formosana</p>
                <h2 className="page-h2">TR4-Tolerant <em className="page-em">Cavendish Banana</em></h2>
                <div className="page-rule" />
                <p className="pg-body">
                  Formosana is a Cavendish banana variety with a <strong>high tolerance to
                  Fusarium oxysporum f. sp. cubense Tropical Race 4 (Foc TR4)</strong>, acquired
                  through somaclonal variation by the Taiwan Banana Research Institute (TBRI).
                </p>
                <p className="pg-body">
                  With TR4 now present in northern Mozambique and spreading across multiple
                  continents, Formosana represents a critical tool for sustainable banana
                  production in at-risk regions. It is important to note that Formosana has an
                  <strong> intermediate resistance to TR4</strong> — it shows less severe
                  symptoms and damage than susceptible varieties under similar conditions.
                </p>
                <p className="pg-body">
                  Du Roi Laboratory holds the exclusive licence to supply Formosana plants
                  into Africa, the Middle East, Caribbean Islands, French West Indies and
                  South and Central America.
                </p>
              </div>

              <div className="reveal-right" style={{ position: 'relative' }}>
                <img src="https://duroilab.co.za/wp-content/uploads/2024/04/2019-05-28-16.36.24_2.jpg"
                  alt="Formosana banana plants"
                  style={{ width: '100%', height: 460, objectFit: 'cover',
                    borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', display: 'block' }} />
                <div style={{ position: 'absolute', top: 24, right: -12,
                  background: 'var(--clr-red-check)', color: '#fff',
                  borderRadius: 'var(--radius-md)', padding: '14px 20px',
                  boxShadow: 'var(--shadow-md)', textAlign: 'center', maxWidth: 160 }}>
                  <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.10em',
                    textTransform: 'uppercase', opacity: .85, marginBottom: 4 }}>Exclusive</p>
                  <p style={{ fontFamily: 'var(--font-cursive)', fontSize: 17, fontWeight: 700, lineHeight: 1.2 }}>TBRI Licence Holder</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick facts */}
        <section style={{ background: 'var(--clr-green-dark)', padding: '64px 0' }} ref={r2}>
          <div className="container">
            <div className="pg-grid-3" style={{ gap: 2 }}>
              {FACTS.map((f, i) => (
                <div key={i} className={`reveal delay-${i + 1}`}>
                  <div style={{ padding: '24px 32px', background: 'rgba(255,255,255,.07)',
                    borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,.10)' }}>
                    <p style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,.42)',
                      letterSpacing: '.15em', textTransform: 'uppercase', marginBottom: 8 }}>{f.label}</p>
                    <p style={{ fontFamily: 'var(--font-cursive)', fontSize: 20, fontWeight: 700, color: '#fff' }}>{f.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-pad" ref={r3}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 56 }} className="reveal">
              <p className="page-tag" style={{ justifyContent: 'center' }}>Why Formosana</p>
              <h2 className="page-h2">Key <em className="page-em">Advantages</em></h2>
              <div className="page-rule" style={{ margin: '0 auto' }} />
            </div>
            <div className="pg-grid-2">
              {BENEFITS.map((b, i) => (
                <div key={i} className={`reveal delay-${i + 1}`}>
                  <div style={{ background: 'var(--clr-offwhite)', borderRadius: 'var(--radius-xl)',
                    padding: '32px', border: '1px solid var(--clr-border)',
                    display: 'flex', gap: 24, alignItems: 'flex-start' }}>
                    <div style={{ fontSize: 32, flexShrink: 0 }}>{b.icon}</div>
                    <div>
                      <h4 style={{ fontSize: 17, fontWeight: 700, color: 'var(--clr-green-dark)', marginBottom: 8 }}>{b.title}</h4>
                      <p style={{ fontSize: 14, color: 'var(--clr-text-mid)', lineHeight: 1.78 }}>{b.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
