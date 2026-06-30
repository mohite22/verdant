import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import usePageReveal from '../hooks/usePageReveal'
import SEO from '../components/SEO'

const INITIATIVES = [
  { icon: '👶', color: 'var(--clr-green-mid)', title: 'On-Site Crèche Facility',
    desc: 'Du Roi Laboratory operates a crèche open from 3 am — enabling our night-shift technicians (predominantly mothers) to work with peace of mind. This reflects our deep commitment to employee wellbeing.' },
  { icon: '📚', color: 'var(--clr-red-check)', title: 'Skills Development & Training',
    desc: 'We invest continuously in training and upskilling our staff — from laboratory technique and quality management to agronomic knowledge — helping individuals grow alongside the business.' },
  { icon: '🏘️', color: 'var(--clr-green-dark)', title: 'Community Development',
    desc: 'Situated in Letsitele, Limpopo, Du Roi Laboratory actively invests in surrounding communities through job creation, local procurement and participation in development initiatives.' },
  { icon: '🌱', color: '#b8972a', title: 'Agricultural Education',
    desc: 'We partner with agricultural institutions, schools and farmer organisations to promote knowledge of tissue culture, food security and sustainable banana production across southern Africa.' },
]

export default function CSI() {
  const r1 = usePageReveal()
  const r2 = usePageReveal()
  const r3 = usePageReveal()

  return (
    <>
      <SEO
        title="Corporate Social Investment"
        description="Verdant BioAgri LLP invests in communities through on-site crèche facilities, skills development, agricultural education and local job creation."
        keywords="verdant bioagri CSI, corporate social investment agriculture India, community development tissue culture"
        url="/csi"
      />
      <Navbar />
      <main>
        <PageHero
          title="Corporate Social Investment"
          breadcrumb="Our Company"
          subtitle="Investing in the people and communities that make our work possible."
        />

        {/* Intro */}
        <section className="section-pad" ref={r1}>
          <div className="container">
            <div className="pg-two-col">
              <div className="reveal-left">
                <p className="page-tag">Our Commitment</p>
                <h2 className="page-h2">Growing People,<br /><em className="page-em">Growing Communities</em></h2>
                <div className="page-rule" />
                <p className="pg-body">
                  At Du Roi Laboratory, we believe our responsibility extends well beyond the
                  laboratory bench. We are committed to making a meaningful, lasting difference in
                  the lives of our employees and the communities in which we operate.
                </p>
                <p className="pg-body">
                  Located in the Letsitele valley of Limpopo Province, we are deeply embedded in
                  the fabric of a predominantly rural community. Through intentional investment in
                  people, education and infrastructure, we aim to uplift those around us.
                </p>
                <p className="pg-body">
                  Our CSI philosophy is simple: <strong>thriving communities produce thriving
                  businesses</strong>. When our employees succeed, the whole community succeeds.
                </p>
              </div>
              <div className="reveal-right">
                <img src="https://duroilab.co.za/wp-content/uploads/2024/04/IMG_1699.jpg"
                  alt="Community investment at Verdant BioAgri"
                  loading="lazy"
                  style={{ width: '100%', height: 'clamp(240px,40vw,460px)', objectFit: 'cover',
                    borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', display: 'block' }} />
              </div>
            </div>
          </div>
        </section>

        {/* Initiatives */}
        <section style={{ background: 'var(--clr-offwhite)', padding: '80px 0' }} ref={r2}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 56 }} className="reveal">
              <p className="page-tag" style={{ justifyContent: 'center' }}>What We Do</p>
              <h2 className="page-h2">Our CSI <em className="page-em">Initiatives</em></h2>
              <div className="page-rule" style={{ margin: '0 auto' }} />
            </div>
            <div className="pg-grid-2">
              {INITIATIVES.map((item, i) => (
                <div key={i} className={`reveal delay-${i + 1}`}>
                  <div style={{ background: '#fff', borderRadius: 'var(--radius-xl)',
                    padding: '28px 24px', boxShadow: 'var(--shadow-sm)',
                    border: '1px solid var(--clr-border)',
                    display: 'flex', gap: 20, alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    transition: 'all var(--tr-slow)' }}
                    onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
                    onMouseLeave={e => { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.transform = 'none' }}>
                    <div style={{ width: 60, height: 60, borderRadius: 'var(--radius-lg)',
                      background: `${item.color}18`, display: 'flex', alignItems: 'center',
                      justifyContent: 'center', flexShrink: 0, fontSize: 28 }}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 style={{ fontSize: 17, fontWeight: 700, color: 'var(--clr-green-dark)', marginBottom: 8 }}>{item.title}</h4>
                      <p style={{ fontSize: 14, color: 'var(--clr-text-mid)', lineHeight: 1.78 }}>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote */}
        <section style={{ background: 'var(--clr-green-dark)', padding: '80px 0', position: 'relative', overflow: 'hidden' }} ref={r3}>
          <div style={{ position: 'absolute', inset: 0,
            backgroundImage: 'radial-gradient(rgba(255,255,255,.04) 1px,transparent 1px)',
            backgroundSize: '36px 36px', pointerEvents: 'none' }} />
          <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <div className="reveal">
              <p style={{ fontFamily: 'var(--font-cursive)', fontSize: 'clamp(22px,3.5vw,40px)',
                fontWeight: 700, color: '#fff', lineHeight: 1.4,
                maxWidth: 700, margin: '0 auto 20px' }}>
                "Thriving communities produce thriving businesses."
              </p>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,.45)',
                letterSpacing: '.14em', textTransform: 'uppercase' }}>
                — Du Roi Laboratory CSI Philosophy
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
