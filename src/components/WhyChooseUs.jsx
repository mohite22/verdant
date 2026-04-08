import { useReveal } from '../hooks/useReveal'

const REASONS = [
  'More than 30 years of experience in tissue culture',
  'A quality product which is the result of proven research and development trials',
  'World renowned technical expertise',
  'Established international markets',
  'ISO 9001 certification for the management system for the production of banana tissue culture plants',
  'Export support',
  'Technical support',
]

/* Red checkbox SVG — reusable inline component */
function CheckIcon() {
  return (
    <svg
      className="check-svg"
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="22" height="22" rx="3" fill="var(--clr-red-check)" />
      <path
        d="M5 11.5l4 4 8-8"
        stroke="#fff"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
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
