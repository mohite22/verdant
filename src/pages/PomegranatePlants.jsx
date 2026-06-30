import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import usePageReveal from '../hooks/usePageReveal'
import pomeimg1 from '../assets/pomePM-400x700.jpeg'
import CTABanner from '../components/CTABanner'
import CTAbgimg from '../assets/pomocta.jpg'
import wwpimage from '../assets/pomegranate/pomegranate.jpg'
import pomovideo from '../assets/videos/pomovideo.mp4'
import SEO from '../components/SEO'



const VARIETIES = [
  {
    name: 'High Productivity',
    color: '#43A047',
    tag: 'Most Popular',
    desc: 'Experience the benefits of highly productive pomegranate orchards, thanks to the superior quality of Bhagva and Super Bhagva varieties.',
  },
  {
    name: 'Distinct Saffron Color',
    color: '#F4C430',
    tag: 'Early Season',
    desc: 'The large fruits exhibit a distinct deep saffron color, enhancing their visual appeal and attracting attention in the orchard.',
  },
  {
    name: 'Deep Red Arils',
    color: '#960000',
    tag: 'Premium Export',
    desc: 'Revel in the richness of deep red arils within each pomegranate, a hallmark of the superior quality and taste these varieties offer.',
  },
  {
    name: 'Export Suitability',
    color: '#2E7D32',
    tag: 'Premium Export',
    desc: 'Cater to international markets with confidence, as the exceptional attributes of Bhagva and Super Bhagva make them highly suitable for export.',
  },
  {
    name: 'Innovative Development',
    color: '#3F51B5',
    tag: 'Premium Export',
    desc: 'Bhagva, developed by Rahuri Agriculture University, Maharashtra, stands as an innovative and superior selection from the Bagava variety.',
  },
]

const BENEFITS = [
  {
    icon: '🧬',
    title: 'True-to-Type Plants',
    desc: 'Every plant is propagated from elite mother stock through tissue culture, guaranteeing genetic uniformity, consistent fruit quality and predictable yields across your entire orchard.',
  },
  {
    icon: '🛡️',
    title: 'Disease-Free Guarantee',
    desc: 'All plants are virus-indexed and certified pathogen-free by DBT accredited third-party laboratories before leaving our facility — protecting your investment from day one.',
  },
  {
    icon: '📈',
    title: 'Earlier Bearing',
    desc: 'Tissue culture pomegranate plants typically reach first commercial harvest 12–18 months earlier than conventionally propagated material, accelerating your return on investment.',
  },
  {
    icon: '🌍',
    title: 'Seedlings Supply',
    desc: 'We supply tissue cultured pomegranates plantlets in Karnataka, Maharashtra, Gujarat, Rajasthan, Andhra Pradesh and we are ready to export plants globally.',
  },
]

const PROCESS = [
  { step: 1, title: 'Elite Mother Block', desc: 'Plants selected from our certified foundation block — evaluated for fruit quality, yield consistency, disease resistance and commercial viability.' },
  { step: 2, title: 'Meristem Extraction', desc: 'Shoot tips harvested and surface-sterilised before transfer to sterile culture media under laminar flow conditions in our ISO-certified State of the Art laboratory.' },
  { step: 3, title: 'In Vitro Multiplication', desc: 'Cultures multiplied through multiple sub-culture cycles under controlled temperature, light and humidity — maintaining genetic fidelity throughout.' },
  { step: 4, title: 'Rooting & Weaning', desc: 'Rooted plants grown in our on-site nurseries until field-ready. Full traceability records maintained from mother block to dispatch.' },
  { step: 5, title: 'Nursery Grow-Out', desc: 'Rooted plants grown in our on-site nurseries until field-ready. Full traceability records maintained from mother block to dispatch.' },
  { step: 6, title: 'Quality & Dispatch', desc: 'Final inspection, grading and quality check before packing and dispatch — ensuring every plant meets our strict quality standards..' },
]

export default function PomegranatePlants() {
  const r1 = usePageReveal()
  const r2 = usePageReveal()
  const r3 = usePageReveal()
  const r4 = usePageReveal()
  const r5 = usePageReveal()

/* Reusable Card Component */
const Card = ({ v }) => (
    <div
      className="pg-strength-card"
      style={{
        background: '#fff',
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-sm)',
        border: '1px solid var(--clr-border)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ height: 5, background: v.color }} />
  
      <div
        style={{
          padding: 'var(--sp-8) var(--sp-6)',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            alignSelf: 'flex-start',
            background: `${v.color}18`,
            color: v.color,
            fontSize: 10,
            fontWeight: 400,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            padding: '4px 12px',
            borderRadius: 'var(--radius-pill)',
            border: `1px solid ${v.color}30`,
            marginBottom: 'var(--sp-4)',
          }}
        >
          {v.tag}
        </span>
  
        <h3
          style={{
            fontFamily: 'var(--font-cursive)',
            fontSize: 20,
            fontWeight: 400,
            color: 'var(--clr-green-dark)',
            marginBottom: 'var(--sp-3)',
          }}
        >
          {v.name}
        </h3>
  
        <p
          style={{
            fontSize: 14,
            color: 'var(--clr-text-mid)',
            lineHeight: 1.78,
            flex: 1,
          }}
        >
          {v.desc}
        </p>
      </div>
    </div>
  )

  return (
    <>
      <SEO
        title="Tissue Culture Pomegranate Plants"
        description="Verdant BioAgri LLP supplies premium tissue culture pomegranate plants — Bhagva and Super Bhagva varieties. Disease-free, ISO certified, available across India and for export."
        keywords="tissue culture pomegranate plants India, Bhagva pomegranate, Super Bhagva, pomegranate seedlings Karnataka Maharashtra, pomegranate tissue culture"
        url="/pomegranate-plants"
      />
      <Navbar />
      <main>
        <PageHero
          title="Tissue Culture Pomegranate Plants"
          subtitle="Embark on a journey of excellence with Bhagva pomegranate variety, representing the pinnacle of cultivation."
          
          bgVideo={pomovideo}
        />

        {/* ── Overview ── */}
        <section className="section-pad" ref={r1}>
          <div className="container">
            <div className="pg-two-col">
              <div className="reveal-left">
                <p className="page-tag">What We Produce</p>
                <h2 className="page-h2">Tissue Culture <span className="page-em">Pomegranate Plants</span></h2>
                <div className="page-rule" />
                <p className="pg-body">
                Renowned for their remarkable productivity, impressive fruit size, and irresistible market appeal, these varieties redefine success in orchards. The distinctive deep saffron hue of their large fruits, coupled with captivating deep red arils, not only captivates but also meets the discerning demand of global markets, positioning them as ideal choices for export.
                </p>
                <p className="pg-body">
                Grow with Excellence: Tissue Culture Pomegranate Plants – Superior Quality for Bountiful Harvests
                </p>
                <p className="pg-body">
                Elevate your pomegranate orchard with the Bhagva and Super Bhagva varieties, renowned for their exceptional productivity and striking deep saffron color. These tissue culture pomegranate plants promise a superior harvest with large fruit sizes and vibrant, deep red arils, meeting the robust demand of discerning markets. Explore the export potential of these varieties, with Super Bhagva standing as a testament to innovation from Rahuri Agriculture University, Maharashtra.
                </p>
              </div>

              <div className="reveal-right" style={{ position: 'relative' }}>
                <img
                  src={wwpimage}
                  alt="Pomegranate fruit on tree"
                  loading="lazy"
                  style={{
                    width: '100%', height: 'clamp(240px,40vw,560px)', objectFit: 'cover',
                    borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', display: 'block',
                  }}
                />
                {/* <div style={{
                  position: 'absolute', top: 24, right: -12,
                  background: 'var(--clr-red-check)', color: '#fff',
                  borderRadius: 'var(--radius-md)', padding: '14px 20px',
                  boxShadow: 'var(--shadow-md)', textAlign: 'center', maxWidth: 160,
                }}>
                  <p style={{ fontSize: 10, fontWeight: 400, letterSpacing: '.10em', textTransform: 'uppercase', opacity: .85, marginBottom: 4 }}>Certified</p>
                  <p style={{ fontFamily: 'var(--font-cursive)', fontSize: 17, fontWeight: 400, lineHeight: 1.2 }}>ISO 9001 Production</p>
                </div> */}
              </div>
            </div>
          </div>
        </section>


        {/* ── Varieties ── */}
        <section className="section-pad" style={{ background: 'var(--clr-offwhite)' }} ref={r3}>
  <div className="container">
    {/* Header */}
    <div style={{ textAlign: 'center', marginBottom: 56 }} className="reveal">
      <p className="page-tag" style={{ justifyContent: 'center' }}>Our Selection</p>
      <h2 className="page-h2">
        Available <span className="page-em">Varieties</span>
      </h2>
      <div className="page-rule" style={{ margin: '0 auto' }} />
      <p
        style={{
          fontSize: 15,
          color: 'var(--clr-text-light)',
          maxWidth: 540,
          margin: '0 auto',
        }}
      >
        All varieties are selected from our elite foundation block for vigorous
        growth, high commercial yield potential and superior fruit quality.
      </p>
    </div>

    {/* First Row (3 cards) */}
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 'var(--sp-6)',
        marginBottom: 'var(--sp-6)',
      }}
      className="pome-var-grid-3"
    >
      {VARIETIES.slice(0, 3).map((v, i) => (
        <div key={v.name} className={`reveal delay-${i + 1}`}>
          <Card v={v} />
        </div>
      ))}
    </div>

    {/* Second Row (2 cards - 50% each) */}
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 'var(--sp-6)',
        maxWidth: '800px',
        margin: '0 auto',
      }}
      className="pome-var-grid-2"
    >
      {VARIETIES.slice(3, 5).map((v, i) => (
        <div key={v.name} className={`reveal delay-${i + 4}`}>
          <Card v={v} />
        </div>
      ))}
    </div>
  </div>
</section>


        {/* ── Why TC Plants ── */}
        <section className="section-pad" ref={r4}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 56 }} className="reveal">
              <p className="page-tag" style={{ justifyContent: 'center' }}>Why Choose TC Plants</p>
              <h2 className="page-h2">Verdant Seedlings <span className="page-em">Advantage</span></h2>
              <div className="page-rule" style={{ margin: '0 auto' }} />
            </div>
            <div className="pg-grid-2">
              {BENEFITS.map((b, i) => (
                <div key={i} className={`reveal delay-${i + 1}`}>
                  <div style={{
                    background: 'var(--clr-offwhite)', borderRadius: 'var(--radius-xl)',
                    padding: '32px', border: '1px solid var(--clr-border)',
                    display: 'flex', gap: 24, alignItems: 'flex-start',
                  }}
                    className="benefit-row"
                  >
                    <div style={{ fontSize: 32, flexShrink: 0 }}>{b.icon}</div>
                    <div>
                      <h4 style={{ fontSize: 17, fontWeight: 400, color: 'var(--clr-green-dark)', marginBottom: 8 }}>{b.title}</h4>
                      <p style={{ fontSize: 14, color: 'var(--clr-text-mid)', lineHeight: 1.78 }}>{b.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Production Process ── */}
        <section className="section-pad" style={{ background: 'var(--clr-green-dark)', position: 'relative', overflow: 'hidden' }} ref={r5}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '36px 36px', pointerEvents: 'none',
          }} />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: 56 }} className="reveal">
              <p className="page-tag" style={{ color: 'rgba(200,168,75,0.8)', justifyContent: 'center', display: 'flex' }}>Our Process</p>
              <h2 className="page-h2" style={{ color: '#fff' }}>From Mother Block <span style={{ color: 'var(--clr-green-mid)' }}>to Field-Ready Plant</span></h2>
              <div className="page-rule" style={{ margin: '0 auto 20px', background: 'rgba(200,168,75,0.5)' }} />
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', maxWidth: 520, margin: '0 auto' }}>
                A six-step process ensuring every plant that leaves our facility is healthy,
                vigorous and ready to perform in the field.
              </p>
            </div>
            <div className="pg-grid-3">
              {PROCESS.map((p, i) => (
                <div key={p.step} className={`reveal delay-${i + 1}`}>
                  <div style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.10)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--sp-6)', height: '100%',
                    transition: 'background var(--tr-slow)',
                  }}
                    className="process-card"
                  >
                    <div style={{
                      width: 44, height: 44, background: 'var(--clr-green-mid)',
                      borderRadius: 'var(--radius-md)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginBottom: 'var(--sp-4)',
                    }}>
                      <span style={{ fontWeight: 400, fontSize: 16, color: '#fff' }}>{String(p.step).padStart(2, '0')}</span>
                    </div>
                    <h4 style={{ fontSize: 16, fontWeight: 400, color: '#fff', marginBottom: 'var(--sp-3)' }}>{p.title}</h4>
                    <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.60)', lineHeight: 1.75 }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
         <CTABanner bgImage={CTAbgimg} />
      </main>
      <Footer />
      <style>{`
        @media(max-width:820px){
          .pome-var-grid-3{ grid-template-columns:1fr 1fr !important; }
          .pome-var-grid-2{ grid-template-columns:1fr 1fr !important; max-width:100% !important; }
        }
        @media(max-width:560px){
          .pome-var-grid-3{ grid-template-columns:1fr !important; }
          .pome-var-grid-2{ grid-template-columns:1fr !important; }
        }
      `}</style>
    </>
  )
}
