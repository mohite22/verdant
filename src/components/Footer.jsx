import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa'

const SOCIALS = [
  { name: 'Facebook',  url: 'https://www.facebook.com/people/Verdant-BioAgri-LLP/61582971058162/', icon: FaFacebookF },
  // { name: 'Instagram', url: '#', icon: FaInstagram },
  // { name: 'YouTube',   url: '#', icon: FaYoutube },
  // { name: 'WhatsApp',  url: '#', icon: FaWhatsapp },
  // { name: 'LinkedIn',  url: '#', icon: FaLinkedinIn },
]

export default function Footer() {
  return (
    <footer className="footer-root" id="contact">

      {/* ── Main body ── */}
      <div className="footer-body">
        <div className="container">
          <div className="footer-grid">

            {/* Tagline */}
            <div>
              <p className="footer-tagline">
              Quality is an investment in the future.
              </p>
            </div>

            {/* Contact links */}
            <div className="footer-contact-col">
              <a href="mailto:head-marketing@verdantbioagri.com" className="footer-link">
              head-marketing@verdantbioagri.com
              </a>
              <a href="tel:+91 7507135999" className="footer-link">
              +91 7507135999
              </a>
              <a href="tel:+91 9945356478" className="footer-link">
              +91 9945356478
              </a>
              
            </div>

            {/* Social icons — uses global .soc-btn */}
            <div className="footer-social-row">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="soc-btn"
                  title={s.name}
                  aria-label={s.name}
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p className="footer-copyright">© Copyright – Verdant Bio Agri LLP</p>

            {/* <div className="footer-bottom-links">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-bottom-link"
              >
                POPI Policy
              </a>
              <span className="footer-sep">|</span>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-bottom-link"
              >
                Site Credits
              </a>
            </div> */}
          </div>
        </div>
      </div>

    </footer>
  )
}
