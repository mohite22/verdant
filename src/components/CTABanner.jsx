import React from 'react'
import CTAButton from './CTAButton'
import { useReveal } from '../hooks/useReveal'

export default function CTABanner({ bgImage }) {
  const ref = useReveal()
  const bg = bgImage || 'https://duroilab.co.za/wp-content/uploads/2024/04/2019-05-28-16.36.24_2.jpg'

  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: 'var(--sp-20) 0' }} ref={ref}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url('${bg}')`,
        backgroundSize: 'cover', backgroundPosition: 'center',
      }} />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,40,20,0.82)' }} />
      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <div className="reveal">
          <h2 style={{
            fontFamily: 'var(--font-cursive)', fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 400, color: '#fff', marginBottom: 'var(--sp-4)',
            textShadow: '0 2px 20px rgba(0,0,0,0.3)',
          }}>
            Ready to Order Your Plants?
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, maxWidth: 520, margin: '0 auto var(--sp-8)' }}>
            Contact our team to discuss your planting programme, order quantities and
            preferred delivery stage. We supply globally with full phytosanitary documentation.
          </p>
          <div style={{ display: 'flex', gap: 'var(--sp-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
          <CTAButton
                href="/#/contact" // Link to the contact page
                label="Get in Touch"
                variant="primary"
                />
            <CTAButton
              href="mailto:head-marketing@verdantbioagri.com"
              label="head-marketing@verdantbioagri.com"
              variant="ghost"
            />
          </div>
        </div>
      </div>
    </section>
  )
}