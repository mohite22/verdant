import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import usePageReveal from '../hooks/usePageReveal'

const TEAM = [
  {
    name: 'Suné Wiltshire',
    role: 'General Manager',
    initial: 'S',
    color: 'var(--clr-green-mid)',
    img: 'https://duroilab.co.za/wp-content/uploads/2024/04/2019-05-28-16.36.24_2.jpg',
    desc: 'Suné leads the Du Roi Laboratory operations with extensive experience in tissue culture, quality management and international plant export. She oversees all production, quality control and client relations.',
  },
  {
    name: 'Dr. John Robinson',
    role: 'Banana Specialist (Advisory)',
    initial: 'J',
    color: 'var(--clr-red-check)',
    img: 'https://duroilab.co.za/wp-content/uploads/2024/04/IMG_1954.jpg',
    desc: 'World-renowned banana specialist who helped establish and evaluate the Du Roi foundation block — ensuring all varieties meet the highest commercial and agronomic standards globally.',
  },
  {
    name: 'Laboratory Team',
    role: 'Tissue Culture Technicians',
    initial: 'L',
    color: 'var(--clr-green-dark)',
    img: 'https://duroilab.co.za/wp-content/uploads/2024/04/IMG_1699.jpg',
    desc: 'Our highly skilled team of technicians performs meticulous dissection and multiplication of plant material across four daily shifts in ultra-sterile conditions, never touching plants with their hands.',
  },
]

const VALUES = [
  { icon: '🎯', title: 'Customer First',
    desc: 'We have a strong customer focus and value excellent client relationships. Our customers always come first.' },
  { icon: '🔬', title: 'Scientific Excellence',
    desc: 'Over 30 years of continuous R&D investment keeps our techniques, varieties and quality at the global frontier.' },
  { icon: '🌱', title: 'Sustainable Agriculture',
    desc: 'We invest in developing new elite varieties and disease-resistant selections to future-proof the banana industry.' },
  { icon: '🤝', title: 'Community Investment',
    desc: 'Through our CSI programme, we invest in surrounding communities — including on-site crèche facilities for staff.' },
]

export default function OurPeople() {
  const r1 = usePageReveal()
  const r2 = usePageReveal()
  const r3 = usePageReveal()

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Our People"
          breadcrumb="Our Company"
          subtitle="The dedicated team behind every disease-free, high-quality banana plant we produce."
          bgImage="https://duroilab.co.za/wp-content/uploads/2024/04/IMG_1699.jpg"
        />

        {/* Intro */}
        <section className="section-pad" ref={r1}>
          <div className="container">
            <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }} className="reveal">
              <p className="page-tag" style={{ justifyContent: 'center' }}>Our Team</p>
              <h2 className="page-h2">People Who Make It <em className="page-em">Possible</em></h2>
              <div className="page-rule" style={{ margin: '0 auto 28px' }} />
              <p style={{ fontSize: 16, color: 'var(--clr-text-mid)', lineHeight: 1.85 }}>
                Multiplying banana plants is an intense and rigorous task requiring skill, precision and
                passion. Our team works across four daily shifts — from 3&nbsp;am to 10&nbsp;pm — in an
                immaculately sterile environment, never touching the plants with their hands.
              </p>
            </div>
          </div>
        </section>

        {/* Team cards */}
        <section style={{ background: 'var(--clr-offwhite)', padding: '80px 0' }} ref={r2}>
          <div className="container">
            <div className="pg-grid-3">
              {TEAM.map((p, i) => (
                <div key={i} className={`reveal delay-${i + 1}`}>
                  <div style={{ background: '#fff', borderRadius: 'var(--radius-xl)', overflow: 'hidden',
                    boxShadow: 'var(--shadow-sm)', border: '1px solid var(--clr-border)',
                    transition: 'all var(--tr-slow)' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)' }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)' }}>
                    <div style={{ height: 4, background: p.color }} />
                    <div style={{ height: 220, overflow: 'hidden' }}>
                      <img src={p.img} alt={p.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }} />
                    </div>
                    <div style={{ padding: 'var(--sp-6)' }}>
                      <div style={{ width: 52, height: 52, borderRadius: '50%', background: p.color,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        marginBottom: 16, border: '3px solid #fff', boxShadow: '0 2px 8px rgba(0,0,0,.15)',
                        marginTop: -42, position: 'relative', zIndex: 1 }}>
                        <span style={{ fontFamily: 'var(--font-cursive)', fontSize: 22, fontWeight: 700, color: '#fff' }}>
                          {p.initial}
                        </span>
                      </div>
                      <h3 style={{ fontSize: 20, fontWeight: 700, color: 'var(--clr-green-dark)', marginBottom: 4 }}>{p.name}</h3>
                      <p style={{ fontSize: 11, fontWeight: 700, color: p.color, letterSpacing: '.12em',
                        textTransform: 'uppercase', marginBottom: 14 }}>{p.role}</p>
                      <p style={{ fontSize: 13.5, color: 'var(--clr-text-mid)', lineHeight: 1.75 }}>{p.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-pad" ref={r3}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 56 }} className="reveal">
              <p className="page-tag" style={{ justifyContent: 'center' }}>What Drives Us</p>
              <h2 className="page-h2">Our Core <em className="page-em">Values</em></h2>
              <div className="page-rule" style={{ margin: '0 auto' }} />
            </div>
            <div className="pg-grid-4">
              {VALUES.map((v, i) => (
                <div key={i} className={`reveal delay-${i + 1}`}>
                  <div style={{ textAlign: 'center', padding: '40px 24px', background: 'var(--clr-offwhite)',
                    borderRadius: 'var(--radius-lg)', border: '1px solid var(--clr-border)',
                    height: '100%' }}>
                    <div style={{ fontSize: 36, marginBottom: 16 }}>{v.icon}</div>
                    <h4 style={{ fontSize: 16, fontWeight: 700, color: 'var(--clr-green-dark)', marginBottom: 8 }}>{v.title}</h4>
                    <p style={{ fontSize: 13.5, color: 'var(--clr-text-mid)', lineHeight: 1.7 }}>{v.desc}</p>
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
