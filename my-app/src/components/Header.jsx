import { useState } from 'react'
import moilogo from '../assets/moilogo.png'

function Header({ active, onChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const items = [
    { id: 'home', label: 'Inicio' },
    { id: 'about', label: 'Nosotros' },
    { id: 'productos', label: 'Productos' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contacto' }
  ]

  const handleNavClick = (id) => {
    onChange(id)
    setIsMenuOpen(false)
  }

  return (
    <>
      <header className="top-nav">
        <div className="nav-inner">
          <div className="brand">
            <div className="brand-logo">
              <img src={moilogo} alt="Fashion Logo" />
            </div>
          </div>
          
          {/* Hamburger Menu Button */}
          <button 
            className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul className="nav-list">
              {items.map((it) => (
                <li key={it.id}>
                  <button
                    className={"nav-link" + (active === it.id ? ' active' : '')}
                    onClick={() => onChange(it.id)}
                  >
                    {it.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Mobile Sidebar Menu - Outside header */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-overlay" onClick={() => setIsMenuOpen(false)}></div>
        <div className="mobile-menu-content">
          <div className="mobile-menu-header">
            <button 
              className="close-menu"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <span></span>
              <span></span>
            </button>
          </div>
          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              {items.map((it) => (
                <li key={it.id}>
                  <button
                    className={"mobile-nav-link" + (active === it.id ? ' active' : '')}
                    onClick={() => handleNavClick(it.id)}
                  >
                    {it.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Header
