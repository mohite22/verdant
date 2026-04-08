import { useReveal } from '../hooks/useReveal'
import mapimage from '../assets/mapimag.png'

export default function IsoSection() {
  const ref = useReveal({ threshold: 0.1 })

  return (
    <section className="section-pad" id="world" ref={ref}>
      <div className="container">

        {/* Subtitle */}
        <p
          className="body-text reveal"
          style={{ marginBottom: 'var(--sp-12)' }}
        >
          Experienced in supplying into various countries and ensuring a seamless process.
        </p>

        {/* Two-column layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '260px 1fr',
            gap: 'var(--sp-16)',
            alignItems: 'flex-start',
          }}
          className="iso-grid"
        >
          {/* Left — SGS badge + certification text */}
          <div
            className="reveal-left flex-col gap-4"
            style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)' }}
          >
            <img
              src="https://duroilab.co.za/wp-content/uploads/2024/11/sgs-logo-9001-iso-zertifikat_817_2-3995511386-scaled-1.jpg"
              alt="SGS ISO 9001 Certification badge"
              style={{ width: 130, height: 'auto', objectFit: 'contain' }}
              onError={(e) => { e.currentTarget.style.display = 'none' }}
            />
            <div>
              <p
                className="body-text-sm"
                style={{
                  fontWeight: 700,
                  color: 'var(--clr-red-check)',
                  marginBottom: 'var(--sp-1)',
                  fontSize: 'var(--fs-sm)',
                }}
              >
                <strong>Du Roi Laboratory</strong>
              </p>
              <p className="body-text-sm">
                is ISO 9001 certified since 2011 for the management system for
                the production of banana tissue culture plants.
              </p>
            </div>
          </div>

          {/* Right — world map */}
          <div className="reveal-right" style={{ position: 'relative' }}>
            <img
              src={mapimage}
              alt="World map showing Du Roi export countries"
              style={{
                width: '100%',
                height: 'auto',
                opacity: 0.55,
                filter: 'grayscale(20%)',
                display: 'block',
              }}
              onError={(e) => {
                e.currentTarget.outerHTML = `
                  <div style="
                    width:100%;height:200px;
                    background:linear-gradient(135deg,#e8f5e9,#c8e6c9);
                    border-radius:var(--radius-md);
                    display:flex;align-items:center;justify-content:center;
                    color:#2b8c3e;font-family:var(--font-body);font-size:14px;font-weight:600;
                  ">🌍 Supplying to 50+ countries worldwide</div>
                `
              }}
            />

            {/* Map badge */}
            <div
              style={{
                position: 'absolute',
                bottom: 12,
                right: 12,
                background: 'rgba(255,255,255,0.92)',
                border: '1px solid #c8e6c9',
                borderRadius: 'var(--radius-pill)',
                padding: '5px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--sp-1)',
                fontSize: 'var(--fs-xs)',
                fontWeight: 600,
                color: 'var(--clr-green-mid)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--clr-green-mid)">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              India &amp; Global
            </div>
          </div>
        </div>
      </div>

      {/* Responsive: stack on mobile */}
      <style>{`
        @media (max-width: 760px) {
          .iso-grid { grid-template-columns: 1fr !important; gap: var(--sp-8) !important; }
        }
      `}</style>
    </section>
  )
}
