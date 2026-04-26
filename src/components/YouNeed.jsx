import { useReveal } from '../hooks/useReveal'
import bananaimg from '../assets/Bnan22.jpg'

const NEEDS = [
  'A reliable and trustworthy supplier',
  'Vigorous, healthy plant growth',
  'Pest- and disease-free plants',
  'Timely availability for plantation',
  'Maximized yields',
  'Uniform, consistent plantations',
]

export default function YouNeed() {
  const ref = useReveal({ threshold: 0.1 })

  return (
    <section className="section-pad" id="needs" ref={ref}>
      <div className="container">
        <div className="grid-2-wide">

          {/* Left — heading + bullet list */}
          <div className="reveal-left">
            <h2 style={{ marginBottom: 'var(--sp-8)' }}>
              <span className="heading-cursive-md">You Need:</span>
            </h2>
            <ul className="bullet-list">
              {NEEDS.map((item, i) => (
                <li key={i} className="bullet-item">
                  <span className="bullet-dot">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — photo */}
          <div className="reveal-right">
            {/* <img
              // src="https://duroilab.co.za/wp-content/uploads/2024/04/IMG_1954.jpg"
              src={bananaimg}
              alt="Banana tissue culture plant with roots"
              style={{
                width: '100%',
                height: 400,
                objectFit: 'cover',
                borderRadius: 'var(--radius-sm)',
                display: 'block',
              }}
            /> */}
            <img
                          // src="https://duroilab.co.za/wp-content/uploads/2024/04/IMG_1954.jpg"
                          src={bananaimg}
                          alt="Banana tissue culture plant with roots"
                          style={{
                            width: '100%', height: 460,
                            objectFit: 'cover', borderRadius: 'var(--radius-lg)',
                            display: 'block', boxShadow: 'var(--shadow-lg)',
                          }}
                        />
          </div>

        </div>
      </div>
    </section>
  )
}
