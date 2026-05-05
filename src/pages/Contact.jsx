import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import usePageReveal from '../hooks/usePageReveal'
import { MdEmail, MdPhone, MdHeadsetMic } from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'

const CONTACT_CARDS = [
  { icon: MdEmail,      label: 'Email',          value: 'head-marketing@verdantbioagri.com', link: 'mailto:head-marketing@verdantbioagri.com', sub: 'We aim to respond within 24 hours' },
  { icon: MdPhone,      label: 'Office',         value: '+91 9945356478',  link: 'tel:+919945356478',  sub: 'Mon–Sat: 08:00–18:00' },
  { icon: MdHeadsetMic, label: 'Marketing Head', value: '+91 7507135999',  link: 'tel:+917507135999',  sub: 'Quick queries & order enquiries' },
  { icon: FaWhatsapp,   label: 'WhatsApp',       value: '+91 7507135999',  link: 'https://wa.me/917507135999', sub: 'Quick queries & order enquiries' },
]
console.log(CONTACT_CARDS)
const SUBJECTS = [
  'General Enquiry', 'Order / Quote Request', 'Technical Support',
  'Export & Logistics', 'Media & Partnerships', 'Other',
]

const HOURS = [
  ['Monday – Saturday', '08 AM – 06 PM', false],
  ['Sunday',          'Closed',         true],
]

function Field({ label, required, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--clr-green-dark)', letterSpacing: '.02em' }}>
        {label}{required && <span style={{ color: 'var(--clr-red-check)', marginLeft: 2 }}>*</span>}
      </label>
      {children}
    </div>
  )
}

const inputStyle = {
  padding: '12px 16px', border: '1.5px solid var(--clr-border)',
  borderRadius: 'var(--radius-md)', fontSize: 14,
  fontFamily: 'var(--font-body)', color: 'var(--clr-text)',
  background: '#fff', outline: 'none',
  transition: 'border-color var(--tr-fast)',
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', country: '', subject: '', message: '' })
  const [sent, setSent]     = useState(false)
  const [busy, setBusy]     = useState(false)
  const [error, setError]   = useState('')
  const formRef             = useRef(null)

  const r1 = usePageReveal()
  const r2 = usePageReveal()

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = e => {
    e.preventDefault()
    setBusy(true)
    setError('')
    emailjs.sendForm(
      'service_s871b7y',       // 🔁 Replace with your EmailJS Service ID
      'template_pq1st5g',      // 🔁 Replace with your EmailJS Template ID
      formRef.current,
      'MzRdh7xBtrpAzb-hz'        // 🔁 Replace with your EmailJS Public Key
    )
    .then(() => {
      setBusy(false)
      setSent(true)
    })
    .catch(() => {
      setBusy(false)
      setError('Something went wrong. Please try again or email us directly.')
    })
  }

  const focusStyle  = e => { e.target.style.borderColor = 'var(--clr-green-mid)' }
  const blurStyle   = e => { e.target.style.borderColor = 'var(--clr-border)' }

  return (
    <>
    <Helmet>
        <title>Contact Verdant BioAgri Pune</title>
        <meta
          name="description"
          content="Contact us for agriculture solutions in Pune"
        />
      </Helmet>
      <Navbar />
      <main>
        <PageHero
          title="Contact Us"
          subtitle="Get in touch — we're ready to assist with orders, technical queries and export documentation."
        />

        {/* Contact cards */}
        <section style={{ background: 'var(--clr-offwhite)', padding: '56px 0' }} ref={r1}>
          <div className="container">
            <div className="pg-grid-4">
            {CONTACT_CARDS.map((c, i) => (
  <div key={i} className={`reveal delay-${i + 1}`}>
    <div
      style={{
        background: '#fff',
        borderRadius: 'var(--radius-lg)',
        padding: '28px 20px',
        boxShadow: 'var(--shadow-sm)',
        border: c.label === 'WhatsApp'
          ? '1px solid #25D366'
          : '1px solid var(--clr-border)',
        textAlign: 'center',
        height: '100%',
        transition: 'all var(--tr-slow)'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = 'var(--shadow-md)'
        e.currentTarget.style.borderColor = '#c8e6c9'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'none'
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)'
        e.currentTarget.style.borderColor = 'var(--clr-border)'
      }}
    >
      
      {/* ✅ FIXED ICON */}
      <div
        style={{
          fontSize: 28,
          marginBottom: 12,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {typeof c.icon === 'function' ? (
          <c.icon size={28} color={
            c.label === 'WhatsApp' ? '#25D366' :
            c.label === 'Email'    ? 'var(--clr-green-mid)' :
            'var(--clr-green-dark)'
          } />
        ) : (
          <span>{c.icon}</span>
        )}
      </div>

      <p
        style={{
          fontSize: 10,
          fontWeight: 700,
          color: 'var(--clr-green-mid)',
          letterSpacing: '.14em',
          textTransform: 'uppercase',
          marginBottom: 6
        }}
      >
        {c.label}
      </p>

      {c.link ? (
        <a
          href={c.link}
          target={c.link.startsWith('http') ? '_blank' : undefined}
          rel="noopener noreferrer"
          style={{
            fontSize: 14,
            fontWeight: 700,
            color: 'var(--clr-green-dark)',
            display: 'block',
            marginBottom: 4,
            transition: 'color var(--tr-fast)'
          }}
          onMouseOver={e => (e.target.style.color = 'var(--clr-green-mid)')}
          onMouseOut={e => (e.target.style.color = 'var(--clr-green-dark)')}
        >
          {c.value}
        </a>
      ) : (
        <p
          style={{
            fontSize: 14,
            fontWeight: 700,
            color: 'var(--clr-green-dark)',
            marginBottom: 4
          }}
        >
          {c.value}
        </p>
      )}

      <p style={{ fontSize: 12, color: 'var(--clr-text-light)' }}>
        {c.sub}
      </p>
    </div>
  </div>
))}
            </div>
            <div className="pg-grid-4">
  {CONTACT_CARDS.map((c, i) => (
    <div key={i} className={`reveal delay-${i + 1}`}>
      {/* your existing card */}
    </div>
  ))}
</div>
<style>{`
  .span-2 {
    grid-column: span 2;
  }

  @media (max-width: 820px) {
    .span-2 {
      grid-column: span 1;
    }
  }
`}</style>
{/* ✅ 2-COLUMN ADDRESS CARD */}
<div className='container'>
  <div className="pg-grid-4" style={{ marginTop: 20 }}>

    {/* Address Card */}
    <div className="span-2 reveal delay-5">
      <div style={{
        background: '#fff',
        borderRadius: 'var(--radius-lg)',
        padding: '32px',
        boxShadow: 'var(--shadow-sm)',
        border: '1px solid var(--clr-border)',
        textAlign: 'center',
        height: '100%',
        transition: 'all var(--tr-slow)'
      }}>
       

        <p style={{
          fontSize: 11,
          fontWeight: 700,
          color: 'var(--clr-green-mid)',
          letterSpacing: '.14em',
          textTransform: 'uppercase'
        }}>
          Registered Office 
        </p>

        <h3 style={{
          fontSize: 16,
          fontWeight: 500,
          color: 'var(--clr-green-dark)',
          marginTop: 8
        }}>
          Block 1, 6th Floor, Stadium House, Veer Nariman Road, Churchgate, Mumbai, Maharashtra 400020
        </h3>
      </div>
    </div>

    {/* Second Card (Example: Map / Info / Empty placeholder) */}
    <div className="span-2 reveal delay-6">
      <div style={{
        background: '#fff',
        borderRadius: 'var(--radius-lg)',
        padding: '32px',
        boxShadow: 'var(--shadow-sm)',
        border: '1px solid var(--clr-border)',
        textAlign: 'center',
        height: '100%'
      }}>
       

        <p style={{
          fontSize: 11,
          fontWeight: 700,
          color: 'var(--clr-green-mid)',
          letterSpacing: '.14em',
          textTransform: 'uppercase'
        }}>
          Tissue Culture Lab.
        </p>

        <h3 style={{
          fontSize: 16,
          fontWeight: 500,
          color: 'var(--clr-green-dark)',
          marginTop: 8
        }}>
          Bagalkot Cement Factory Premises, Muchakhandi Road, Bagalkote-587111
        </h3>
      </div>
    </div>

  </div>
</div>


          </div>
        </section>

        {/* Form + sidebar */}
        <section className="section-pad" ref={r2}>
          <div className="container">
            
            <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr',
              gap: 48, alignItems: 'flex-start' }} className="contact-grid">

              {/* Form */}
              <div className="reveal-left">
                <p className="page-tag">Send a Message</p>
                <h2 className="page-h2">Get In <em className="page-em">Touch</em></h2>
                <div className="page-rule" />

                {sent ? (
                  <div style={{ background: 'var(--clr-green-light)', border: '1px solid #c8e6c9',
                    borderRadius: 'var(--radius-lg)', padding: '48px 32px', textAlign: 'center' }}>
                    <div style={{ fontSize: 52, marginBottom: 16 }}>✅</div>
                    <h3 style={{ fontFamily: 'var(--font-cursive)', fontSize: 28,
                      color: 'var(--clr-green-dark)', marginBottom: 10 }}>Message Sent!</h3>
                    <p style={{ fontSize: 14, color: 'var(--clr-text-mid)', lineHeight: 1.7 }}>
                      Thank you for contacting Verdant Bio Agri LLP. A member of our team
                      will be in touch with you shortly.
                    </p>
                    <button onClick={() => { setSent(false); setError(''); setForm({ name:'',email:'',phone:'',country:'',subject:'',message:'' }) }}
                      style={{ marginTop: 24, padding: '10px 28px',
                        background: 'var(--clr-green-mid)', color: '#fff',
                        borderRadius: 'var(--radius-pill)', fontSize: 13, fontWeight: 600,
                        cursor: 'pointer', border: 'none' }}>
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={onSubmit}
                    style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                      <Field label="Full Name" required>
                        <input type="text" name="name" value={form.name} onChange={onChange}
                          required placeholder="Your full name"
                          style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
                      </Field>
                      <Field label="Email Address" required>
                        <input type="email" name="email" value={form.email} onChange={onChange}
                          required placeholder="you@example.com"
                          style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
                      </Field>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                      <Field label="Phone Number">
                        <input type="tel" name="phone" value={form.phone} onChange={onChange}
                          placeholder="+1 234 567 8900"
                          style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
                      </Field>
                      <Field label="Country">
                        <input type="text" name="country" value={form.country} onChange={onChange}
                          placeholder="Your country"
                          style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
                      </Field>
                    </div>
                    <Field label="Subject" required>
                      <select name="subject" value={form.subject} onChange={onChange} required
                        style={{ ...inputStyle, cursor: 'pointer',
                          color: form.subject ? 'var(--clr-text)' : 'var(--clr-text-light)' }}
                        onFocus={focusStyle} onBlur={blurStyle}>
                        <option value="">Select a subject…</option>
                        {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </Field>
                    <Field label="Message" required>
                      <textarea name="message" value={form.message} onChange={onChange}
                        required rows={5}
                        placeholder="Tell us about your planting programme, variety interest, quantities and preferred delivery stage…"
                        style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
                        onFocus={focusStyle} onBlur={blurStyle} />
                    </Field>
                    <button type="submit" disabled={busy}
                      style={{ padding: '14px 36px', alignSelf: 'flex-start',
                        background: busy ? '#aaa' : 'var(--clr-green-mid)',
                        color: '#fff', borderRadius: 'var(--radius-pill)',
                        fontSize: 14, fontWeight: 700, border: 'none',
                        cursor: busy ? 'not-allowed' : 'pointer',
                        boxShadow: '0 4px 20px rgba(43,140,62,.30)',
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                        transition: 'background var(--tr-base), transform var(--tr-base)' }}
                      onMouseOver={e => { if (!busy) e.currentTarget.style.background = 'var(--clr-green-dark)' }}
                      onMouseOut={e  => { if (!busy) e.currentTarget.style.background = 'var(--clr-green-mid)' }}>
                      {busy ? (
                        <><span style={{ fontSize: 18 }}>⏳</span> Sending…</>
                      ) : (
                        <><MdEmail size={18} /> Send Message</>
                      )}
                    </button>
                    {error && (
                      <p style={{ fontSize: 13, color: 'var(--clr-red-check)', marginTop: 8 }}>
                        ⚠ {error}
                      </p>
                    )}
                  </form>
                )}
              </div>

              {/* Sidebar */}
              <div className="reveal-right" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {/* Map */}
                <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden',
                  boxShadow: 'var(--shadow-lg)', height: 260 }}>
                  <iframe
    title="Verdant BioAgri Location"
    src="https://www.google.com/maps?q=Verdant+Agro-Horti+LLP&output=embed"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    loading="lazy"
  />
                </div>

                {/* Office hours */}
                <div style={{ background: 'var(--clr-offwhite)', borderRadius: 'var(--radius-lg)',
                  padding: '24px', border: '1px solid var(--clr-border)' }}>
                  <h4 style={{ fontSize: 15, fontWeight: 700, color: 'var(--clr-green-dark)', marginBottom: 16 }}>
                    🕐 Office Hours
                  </h4>
                  {HOURS.map(([day, hrs, closed]) => (
                    <div key={day} style={{ display: 'flex', justifyContent: 'space-between',
                      padding: '8px 0', borderBottom: '1px solid var(--clr-border-light)', fontSize: 13 }}>
                      <span style={{ color: 'var(--clr-text-mid)' }}>{day}</span>
                      <span style={{ fontWeight: 600, color: closed ? 'var(--clr-red-check)' : 'var(--clr-green-dark)' }}>
                        {hrs}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Social */}
                {/* <div style={{ background: 'var(--clr-green-dark)', borderRadius: 'var(--radius-lg)', padding: '24px' }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.45)',
                    letterSpacing: '.14em', textTransform: 'uppercase', marginBottom: 16 }}>
                    Follow Us
                  </p>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {[
                      { label: 'Facebook',  href: 'https://www.facebook.com/DuRoiGroup',           emoji: '📘' },
                      { label: 'Instagram', href: 'https://www.instagram.com/duroigroup/',          emoji: '📸' },
                      { label: 'YouTube',   href: 'https://www.youtube.com/@DuRoiGroup',            emoji: '▶️'  },
                      { label: 'LinkedIn',  href: 'https://www.linkedin.com/company/du-roi-group/', emoji: '💼' },
                    ].map(s => (
                      <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                        style={{ display: 'flex', alignItems: 'center', gap: 6,
                          padding: '7px 14px', background: 'rgba(255,255,255,.10)',
                          border: '1px solid rgba(255,255,255,.18)',
                          borderRadius: 'var(--radius-pill)', fontSize: 12,
                          fontWeight: 600, color: 'rgba(255,255,255,.85)',
                          transition: 'all var(--tr-base)' }}
                        onMouseOver={e => { e.currentTarget.style.background = 'var(--clr-green-mid)'; e.currentTarget.style.borderColor = 'var(--clr-green-mid)' }}
                        onMouseOut={e  => { e.currentTarget.style.background = 'rgba(255,255,255,.10)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.18)' }}>
                        <span>{s.emoji}</span> {s.label}
                      </a>
                    ))}
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <style>{`
            @media(max-width:820px){ .contact-grid{ grid-template-columns:1fr !important; gap:32px !important; } }
            @media(max-width:600px){
              .form-row{ grid-template-columns:1fr !important; }
              .span-2{ grid-column:span 1 !important; }
              .pg-grid-4{ grid-template-columns:1fr 1fr !important; }
            }
            @media(max-width:440px){
              .pg-grid-4{ grid-template-columns:1fr !important; }
            }
          `}</style>
        </section>
      </main>
      <Footer />
    </>
  )
}
