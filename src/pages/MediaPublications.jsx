import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import usePageReveal from '../hooks/usePageReveal'
import SEO from '../components/SEO'

const TYPES = ['All', 'News', 'Feature', 'Technical']

const ARTICLES = [
  {
    type: 'News', date: 'April 2022', source: 'Fresh Plaza', icon: '🌍',
    color: 'var(--clr-green-mid)',
    title: 'Banana tissue culture plants from South Africa set to give Ecuador industry a boost',
    excerpt: 'Following a year of negotiations with the Ecuador government and visits to the Du Roi Laboratory with SA Department of Agriculture officials, Du Roi received accreditation to supply this South American country — expanding its international footprint to over 50 countries.',
  },
  {
    type: 'Feature', date: 'August 2025', source: 'Farmers Weekly', icon: '📰',
    color: 'var(--clr-red-check)',
    title: 'Tissue-cultured bananas: uniform and high-yielding',
    excerpt: 'In South Africa\'s only laboratory of its type, banana plants are cultivated from tissue culture to produce clones that offer farmers vigorous growth and high yield. The starting point is a 4-hectare mother block that includes varieties proven to possess the best characteristics.',
  },
  {
    type: 'Feature', date: 'September 2018', source: 'Fresh Plaza', icon: '🔬',
    color: '#b8972a',
    title: 'Southern Africa\'s only banana tissue culture lab',
    excerpt: 'Du Roi Laboratory supplies 100% of South Africa\'s banana plant material and exports to 25 countries — profiling the unique facility in Letsitele, Limpopo Province, where four daily shifts run from 3 am until 10 pm.',
  },
  {
    type: 'Technical', date: '2011', source: 'Du Roi Laboratory', icon: '🏆',
    color: 'var(--clr-green-dark)',
    title: 'ISO 9001 Certification Achieved for Banana Tissue Culture Production',
    excerpt: 'Du Roi Laboratory becomes one of the first tissue culture facilities in Africa to achieve ISO 9001 certification for its banana plant production management system — a standard the company has maintained continuously since February 2011.',
  },
]

export default function MediaPublications() {
  const [filter, setFilter] = useState('All')
  const r1 = usePageReveal()
  const r2 = usePageReveal()

  const filtered = filter === 'All' ? ARTICLES : ARTICLES.filter(a => a.type === filter)

  return (
    <>
      <SEO
        title="Media & Publications"
        description="News, features and technical publications about Verdant BioAgri LLP and the tissue culture plant industry in India. Read our latest press coverage and research articles."
        keywords="tissue culture news India, banana plant publications, verdant bioagri press, tissue culture research articles"
        url="/media-publications"
      />
      <Navbar />
      <main>
        <PageHero
          title="Media & Publications"
          subtitle="News, features and technical publications about Du Roi Laboratory and the banana tissue culture industry."
          bgImage="https://duroilab.co.za/wp-content/uploads/2024/04/IMG_1699.jpg"
        />

        <section className="section-pad" ref={r1}>
          <div className="container">
            {/* Filter */}
            <div style={{ display: 'flex', gap: 8, marginBottom: 56, flexWrap: 'wrap' }} className="reveal">
              {TYPES.map(t => (
                <button key={t} onClick={() => setFilter(t)} style={{
                  padding: '9px 22px', borderRadius: 'var(--radius-pill)',
                  fontSize: 13, fontWeight: 600, cursor: 'pointer', border: '1.5px solid',
                  borderColor: filter === t ? 'var(--clr-green-mid)' : 'var(--clr-border)',
                  background: filter === t ? 'var(--clr-green-mid)' : '#fff',
                  color: filter === t ? '#fff' : 'var(--clr-text)',
                  transition: 'all var(--tr-base)',
                }}>
                  {t}
                </button>
              ))}
            </div>

            {/* Article cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {filtered.map((a, i) => (
                <div key={i} className={`reveal delay-${Math.min(i + 1, 5)}`}>
                  <div style={{ display: 'flex', gap: 24, background: '#fff',
                    borderRadius: 'var(--radius-xl)', padding: '28px 32px',
                    boxShadow: 'var(--shadow-sm)', border: '1px solid var(--clr-border)',
                    alignItems: 'flex-start', transition: 'all var(--tr-slow)' }}
                    onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.borderColor = '#c8e6c9' }}
                    onMouseLeave={e => { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'var(--clr-border)' }}>
                    {/* Icon */}
                    <div style={{ width: 56, height: 56, borderRadius: 'var(--radius-md)',
                      background: `${a.color}18`, display: 'flex', alignItems: 'center',
                      justifyContent: 'center', flexShrink: 0, fontSize: 24 }}>
                      {a.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12,
                        marginBottom: 10, flexWrap: 'wrap' }}>
                        <span style={{ padding: '3px 12px', background: `${a.color}18`,
                          color: a.color, borderRadius: 'var(--radius-pill)',
                          fontSize: 10, fontWeight: 700, letterSpacing: '.10em',
                          textTransform: 'uppercase' }}>{a.type}</span>
                        <span style={{ fontSize: 12, color: 'var(--clr-text-light)' }}>
                          {a.source} · {a.date}
                        </span>
                      </div>
                      <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--clr-green-dark)',
                        marginBottom: 10, lineHeight: 1.3 }}>{a.title}</h3>
                      <p style={{ fontSize: 14, color: 'var(--clr-text-mid)', lineHeight: 1.75 }}>{a.excerpt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <p style={{ textAlign: 'center', color: 'var(--clr-text-light)', padding: '60px 0' }}>
                No articles in this category yet.
              </p>
            )}
          </div>
        </section>

        {/* Press contact CTA */}
        <section style={{ padding: '0 0 80px' }} ref={r2}>
          <div className="container">
            <div className="reveal">
              <div style={{ background: 'var(--clr-green-dark)', borderRadius: 'var(--radius-xl)',
                padding: '48px', display: 'flex', alignItems: 'center', gap: 48,
                flexWrap: 'wrap', justifyContent: 'space-between' }}>
                <div>
                  <p style={{ fontFamily: 'var(--font-cursive)', fontSize: 28, fontWeight: 700,
                    color: '#fff', marginBottom: 8 }}>Media Enquiries</p>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,.62)', lineHeight: 1.7 }}>
                    For press enquiries, interview requests or technical publications,<br />
                    please contact our team directly.
                  </p>
                </div>
                <a href="mailto:info@duroilab.co.za"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '13px 28px', background: 'var(--clr-green-mid)', color: '#fff',
                    borderRadius: 'var(--radius-pill)', fontSize: 14, fontWeight: 700,
                    flexShrink: 0, transition: 'background var(--tr-base), transform var(--tr-base)' }}
                  onMouseOver={e => { e.currentTarget.style.background = '#3a9e50'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseOut={e  => { e.currentTarget.style.background = 'var(--clr-green-mid)'; e.currentTarget.style.transform = 'none' }}>
                  📧 info@duroilab.co.za
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
