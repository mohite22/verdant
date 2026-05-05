import React from 'react'

export default function CTAButton({ href, label, variant = 'primary', icon, ...props }) {
  const styles = {
    base: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '14px 36px',
      borderRadius: 'var(--radius-pill)',
      fontSize: 14,
      fontWeight: variant === 'primary' ? 700 : 600,
      transition: 'background var(--tr-base), transform var(--tr-base)',
      textDecoration: 'none',
    },
    primary: {
      background: 'var(--clr-green-mid)',
      color: '#fff',
      boxShadow: '0 4px 20px rgba(43,140,62,0.4)',
    },
    ghost: {
      background: 'rgba(255,255,255,0.12)',
      color: '#fff',
      border: '1.5px solid rgba(255,255,255,0.35)',
      backdropFilter: 'blur(4px)',
    },
  }

  const hoverStyles = {
    primary: { background: 'var(--clr-green-dark)', transform: 'translateY(-2px)' },
    ghost: { background: 'rgba(255,255,255,0.22)' },
  }

  return (
    <a
      href={href}
      style={{ ...styles.base, ...(variant === 'primary' ? styles.primary : styles.ghost) }}
      onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverStyles[variant])}
      onMouseLeave={(e) => Object.assign(e.currentTarget.style, variant === 'primary' ? styles.primary : styles.ghost)}
      {...props}
    >
      {icon && <span>{icon}</span>}
      {label}
    </a>
  )
}