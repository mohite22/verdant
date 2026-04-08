import { useReveal } from '../hooks/useReveal'

const LOGOS = [
  {
    name: 'Cederberg Tree Nursery',
    url:  'https://cederbergtreenursery.co.za/',
    src:  'https://duroihalls.co.za/wp-content/uploads/2023/01/Cederberg-Logo-1024x367-1.png',
    alt:  'Cederberg Tree Nursery',
  },
  {
    name: 'Du Roi Halls',
    url:  'https://www.duroihalls.co.za/',
    src:  'https://duroilab.co.za/wp-content/uploads/2024/11/HALLS057-DuRoi-logo-FA-PANTONE.png',
    alt:  'Du Roi Halls Nursery',
  },
  {
    name: 'Du Roi Nursery',
    url:  'http://www.duroinursery.co.za/',
    src:  'https://duroilab.co.za/wp-content/uploads/2024/11/Du-Roi-Nursery_Final-Logo.jpg',
    alt:  'Du Roi Nursery',
  },
  {
    name: 'Du Roi Multiplant',
    url:  'https://www.duroimultiplant.co.za/',
    src:  'https://duroilab.co.za/wp-content/uploads/2024/04/Du-Roi-Multiplant_Final-Logo.jpg',
    alt:  'Du Roi Multiplant',
  },
]

export default function GroupLogos() {
  const ref = useReveal({ threshold: 0.1, stagger: true })

  return (
    <section
      className="section-pad"
      id="group"
      style={{ borderTop: '1px solid var(--clr-border-light)' }}
      ref={ref}
    >
      <div className="container">

        {/* Intro text */}
        <p
          className="body-text reveal"
          style={{ marginBottom: 'var(--sp-10)' }}
        >
          Visit our associate nursery websites within the{' '}
          <strong style={{ fontWeight: 700, color: 'var(--clr-text)' }}>
            Du Roi Group:
          </strong>
        </p>

        {/* 4-column logo grid — uses global .grid-4 and .card */}
        <div className="grid-4">
          {LOGOS.map((logo, i) => (
            <a
              key={logo.name}
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              title={logo.name}
              className={`card card-logo reveal delay-${i}`}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                style={{
                  maxWidth: '100%',
                  maxHeight: 60,
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                  filter: 'grayscale(10%)',
                  transition: 'filter var(--tr-slow)',
                }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  const fb = e.currentTarget.nextElementSibling
                  if (fb) fb.style.display = 'block'
                }}
              />
              {/* Fallback text if image fails */}
              <span
                style={{
                  display: 'none',
                  fontSize: 'var(--fs-xs)',
                  fontWeight: 600,
                  color: 'var(--clr-green-mid)',
                  textAlign: 'center',
                }}
              >
                {logo.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
