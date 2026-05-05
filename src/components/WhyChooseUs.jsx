import { useReveal } from '../hooks/useReveal'
import { BsCheckSquareFill } from 'react-icons/bs'

const REASONS = [
  'Quality products backed by proven research and development trials',
  'Renowned technical expertise',
  'Proven experience in exporting tissue culture seedlings',
  'DBT-certified tissue culture laboratory',
  'Hardening centers across Gujarat, Maharashtra, and Karnataka',
]

/* Red checkbox SVG — reusable inline component */
function CheckIcon() {
  return <BsCheckSquareFill size={22} color="var(--clr-red-check)" style={{ flexShrink: 0, marginTop: 1 }} />
}

export default function WhyChooseUs() {
  const ref = useReveal({ threshold: 0.08, stagger: true })

  return (
    <section className="section-pad text-center" id="why" ref={ref}>
      <div className="container">

        {/* Heading */}
        <h2 className="reveal" style={{ marginBottom: 'var(--sp-10)' }}>
          <span className="text-italic-bold" style={{ fontSize: 'var(--fs-xl)' }}>
            Why{' '}
          </span>
          <span className="heading-cursive-red">Choose Us?</span>
        </h2>

        {/* Checklist */}
        <ul
          className="check-list"
          style={{ maxWidth: 680, marginInline: 'auto', textAlign: 'left' }}
        >
          {REASONS.map((reason, i) => (
            <li key={i} className={`check-item reveal delay-${Math.min(i, 6)}`}>
              <CheckIcon />
              <span className="check-item-text">{reason}</span>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}
