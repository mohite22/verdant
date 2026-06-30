import { useReveal } from '../hooks/useReveal'

export default function Specialists() {
  const ref = useReveal({ threshold: 0.2 })

  return (
    <section className="section-pad text-center" id="specialists">
      <div className="container">
        <div className="reveal" ref={ref} style={{ maxWidth: 560, marginInline: 'auto' }}>
          <p className="body-text" style={{ fontSize: 'var(--fs-md)', lineHeight: 1.85 }}>
            <span
              className="heading-cursive-lg page-em"
              style={{ marginRight: 6, verticalAlign: 'middle', lineHeight: 1 }}
            >
              Specialists
            </span>
            in the production and distribution of high-quality, elite, disease-free, virus-indexed planting material—offering high-yielding tissue culture Banana and Pomegranate plants, along with premium single eye bud Sugarcane seedlings.

{/* 
            <br />
            high-quality, elite selection disease-free, virus-indexed
            <br />
            high yielding tissue culture{' '}
            <em style={{ fontStyle: 'italic' }}>banana plants</em>. */}
          </p>
        </div>
      </div>
    </section>
  )
}
