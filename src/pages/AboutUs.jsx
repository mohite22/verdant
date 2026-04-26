import Navbar    from '../components/Navbar'
import Footer    from '../components/Footer'
import PageHero  from '../components/PageHero'
import usePageReveal from '../hooks/usePageReveal'
import CTABanner from "../components/CTABanner"; // Corrected path
const STRENGTHS = [
  { icon: '🔬', title: 'Advanced Laboratory Facilities',
    desc: 'Among the most advanced tissue culture facilities in India. ' },
  { icon: '🏭', title: 'Green House Facility',
    desc: 'We have State-of-the-art Green House facility for acclimatization and growing of seedlings.' },
  { icon: '🌿', title: 'Multi Location Nuseries',
    desc: 'We have multi location nursery set ups for harden the seedlings and easy to carry for the farming community.' },
  { icon: '🌍', title: 'Global Export Capability',
    desc: 'Phytosanitary processes enable seamless supply for export of seedlings.' },
  { icon: '👩‍🔬', title: 'Expert Technical Team',
    desc: 'Our professional team provides post-delivery technical support and farm consultation to every client worldwide.' },
  { icon: '🏆', title: 'DBT Certifications',
    desc: 'Our tissue culture laboratory is certified by Department of Biotechnology, Ministry of Science and Technology, Government of India. ' },
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
           breadcrumb="About Us"
          subtitle="Growing stronger farms, sustainably. Verdant bioAgri LLP, a proud part of the esteemed Kanoria Group, stands for trust, quality, and continuous innovation in agriculture. "
          // badge={{ icon: '🏆', text: 'ISO 9001 Certified Since 2011' }}
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
                Verdant bioAgri LLP, a proud part of the esteemed Kanoria Group, stands for trust, quality, and continuous innovation in agriculture. As a leading producer of premium tissue-cultured Banana, Pomegranate, Teak, and Ornamental plants, we are committed to delivering planting material that supports healthy growth, higher productivity, and long-term sustainability.
                At Verdant bioAgri, we think like farmers. Our approach is rooted in understanding the real needs of growers and developing solutions that work in the field. Through advanced tissue culture technology and strict quality standards, we provide uniform, disease-free plants that help ensure reliable performance and consistent yields.
                </p>
                <p className="pg-body">
                Our mission goes beyond supplying plants. We continuously work to introduce innovative agricultural solutions that enhance farm productivity, improve grower profitability, and reduce environmental impact. By combining scientific expertise with practical farming insight, Verdant BioAgri strives to support farmers in building more productive and sustainable farms.
                </p>
                {/* <p className="pg-body">
                  The Laboratory forms part of the <strong>ANB Group</strong> — the holding company
                  of a diverse group of entities that comprehensively serve the agricultural value chain
                  through research, technical support, laboratory facilities, nurseries, farming and
                  fruit marketing.
                </p> */}
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
        
                {/* ── Vision, Mission, and Excellence ── */}
                <section className="section-pad" ref={r3}>
                  <div className="container">
                    <SectionTitle tag="Our Philosophy" title="Vision, Mission &" italic="Excellence" centre />
                    <div className="pg-grid-3">
                      <div className="reveal">
                        <div className="pg-strength-card"
                          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.borderColor = '#c8e6c9' }}
                          onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.borderColor = 'var(--clr-border)' }}>
                          <h4 style={{ fontSize: 16, fontWeight: 700, color: 'var(--clr-green-dark)', marginBottom: 8 }}>Our Vision</h4>
                          <p style={{ fontSize: 13.5, color: 'var(--clr-text-mid)', lineHeight: 1.75 }}>
                            To be the leader in agriculture sector and build a world class enterprise in harmony with community and environment by applying most modern technologies and exploit the untapped potential of rural India in creating wealth for the nation.
                          </p>
                        </div>
                      </div>
                      <div className="reveal">
                        <div className="pg-strength-card"
                          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.borderColor = '#c8e6c9' }}
                          onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.borderColor = 'var(--clr-border)' }}>
                          <h4 style={{ fontSize: 16, fontWeight: 700, color: 'var(--clr-green-dark)', marginBottom: 8 }}>Our Mission</h4>
                          <p style={{ fontSize: 13.5, color: 'var(--clr-text-mid)', lineHeight: 1.75 }}>
                            At Verdant bioagri, our mission is to empower Indian farmers by providing superior tissue culture plants that enhance agricultural productivity, improve crop quality, and promote sustainable farming practices.
                          </p>
                        </div>
                      </div>
                      <div className="reveal">
                        <div className="pg-strength-card"
                          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.borderColor = '#c8e6c9' }}
                          onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.borderColor = 'var(--clr-border)' }}>
                          <h4 style={{ fontSize: 16, fontWeight: 700, color: 'var(--clr-green-dark)', marginBottom: 8 }}>Excellence from Production to Distribution</h4>
                          <p style={{ fontSize: 13.5, color: 'var(--clr-text-mid)', lineHeight: 1.75 }}>
                            We take pride in our meticulous approach to plant production, hardening, packaging, and delivery. Our commitment is to provide the highest quality tissue culture plants, ensuring each plant meets stringent criteria in terms of size, leaf count, and overall health.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                
                        {/* ── Our Process ── */}
                        <section className="section-pad" style={{ background: 'var(--clr-offwhite)' }} ref={r4}>
                          <div className="container">
                            <SectionTitle tag="Our Process" title="From Mother Selection to" italic="Field-Ready Plants" centre />
                            <div className="pg-grid-2">
                              <div className="reveal">
                                <div className="pg-process-step">
                                  <h4 style={{ fontSize: 16, fontWeight: 700, color: 'var(--clr-green-dark)', marginBottom: 8 }}>01. Mother Selection</h4>
                                  <p style={{ fontSize: 13.5, color: 'var(--clr-text-mid)', lineHeight: 1.75 }}>
                                    Plants sourced from our 5-hectare foundation block, with vigorous growth, high commercial yield, plant stability, and uniformity.
                                  </p>
                                </div>
                              </div>
                              <div className="reveal">
                                <div className="pg-process-step">
                                  <h4 style={{ fontSize: 16, fontWeight: 700, color: 'var(--clr-green-dark)', marginBottom: 8 }}>02. Meristem Extraction</h4>
                                  <p style={{ fontSize: 13.5, color: 'var(--clr-text-mid)', lineHeight: 1.75 }}>
                                    Suckers are harvested and tissue extracted by skilled technicians working in ultra-sterile laminar flow benches. Each piece contains meristematic tissue to generate new shoots.
                                  </p>
                                </div>
                              </div>
                              <div className="reveal">
                                <div className="pg-process-step">
                                  <h4 style={{ fontSize: 16, fontWeight: 700, color: 'var(--clr-green-dark)', marginBottom: 8 }}>03. Controlled Multiplication</h4>
                                  <p style={{ fontSize: 13.5, color: 'var(--clr-text-mid)', lineHeight: 1.75 }}>
                                    Plant material multiplied over six rounds (four weeks each) in controlled growth rooms — stopping at round six to keep mutation below 1%, ensuring genetic stability.
                                  </p>
                                </div>
                              </div>
                              <div className="reveal">
                                <div className="pg-process-step">
                                  <h4 style={{ fontSize: 16, fontWeight: 700, color: 'var(--clr-green-dark)', marginBottom: 8 }}>04. Virus Indexing</h4>
                                  <p style={{ fontSize: 13.5, color: 'var(--clr-text-mid)', lineHeight: 1.75 }}>
                                    Meristem samples are virus-indexed by an NCS TCP accredited third-party laboratory for all known banana viruses before multiplication begins, guaranteeing disease-free planting material.
                                  </p>
                                </div>
                              </div>
                              <div className="reveal">
                                <div className="pg-process-step">
                                  <h4 style={{ fontSize: 16, fontWeight: 700, color: 'var(--clr-green-dark)', marginBottom: 8 }}>05. Primary Hardening</h4>
                                  <p style={{ fontSize: 13.5, color: 'var(--clr-text-mid)', lineHeight: 1.75 }}>
                                    Plants are transplanted into 8 cavity trays or in 72 cavity trays in greenhouses. After 4 to 5 weeks, plants reach the 5 cm in vivo (Primary hardened) stage.
                                  </p>
                                </div>
                              </div>
                              <div className="reveal">
                                <div className="pg-process-step">
                                  <h4 style={{ fontSize: 16, fontWeight: 700, color: 'var(--clr-green-dark)', marginBottom: 8 }}>06. Secondary Hardening</h4>
                                  <p style={{ fontSize: 13.5, color: 'var(--clr-text-mid)', lineHeight: 1.75 }}>
                                    Plants grown on in our on-site nurseries for 6–8 weeks until field-ready at 20 to 25 cm. Full traceability maintained from sucker selection to the grower.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
