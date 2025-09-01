import './App.css'
import { useState } from 'react'
import moilogo from './assets/moilogo.png'

const products = [
  { id: 1, name: 'Playera Oversize', price: '$29.99', img: 'https://picsum.photos/seed/shirt1/600/600' },
  { id: 2, name: 'Chaqueta Denim', price: '$79.00', img: 'https://picsum.photos/seed/shirt2/600/600' },
  { id: 3, name: 'Vestido Floral', price: '$59.50', img: 'https://picsum.photos/seed/shirt3/600/600' },
  { id: 4, name: 'Pantalón Slim', price: '$49.00', img: 'https://picsum.photos/seed/shirt4/600/600' },
  { id: 5, name: 'Sudadera con capucha', price: '$39.99', img: 'https://picsum.photos/seed/shirt5/600/600' },
  { id: 6, name: 'Blazer Casual', price: '$99.00', img: 'https://picsum.photos/seed/shirt6/600/600' }
]

function ProductCard({ product }) {
  return (
    <article className="card">
      <div className="card-media">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="card-body">
        <h3>{product.name}</h3>
        <p className="price">{product.price}</p>
        <p className="desc">Diseño cómodo y moderno — disponible en varias tallas.</p>
        <div className="card-actions">
          <button className="btn">Ver</button>
          <button className="btn outline">Añadir</button>
        </div>
      </div>
    </article>
  )
}

function Home() {
  return (
    <section className="home">
      <div className="hero">
        <div className="hero-content">
          <h2>Eleva Tu Estilo Con Nuestra</h2>
          <p className="lead">Tu compañero de moda definitivo. Transforma tu guardarropa con nuestra colección exclusiva de elegancia atemporal y diseño sofisticado.</p>
          <div style={{ marginTop: '2rem' }}>
            <button className="btn primary">Explorar Colección</button>
          </div>
        </div>
      </div>

      <section className="info-grid">
        <div className="info-card">
          <h3>Calidad Premium</h3>
          <p>Nuestros materiales son seleccionados meticulosamente para ofrecer durabilidad excepcional y confort superior.</p>
        </div>
        <div className="info-card">
          <h3>Diseño Exclusivo</h3>
          <p>Prendas con corte sofisticado que combinan elegancia atemporal con modernidad.</p>
        </div>
        <div className="info-card">
          <h3>Artesanía Excepcional</h3>
          <p>Cada pieza es creada con atención al detalle y técnicas de confección tradicionales.</p>
        </div>
      </section>
    </section>
  )
}

function About() {
  return (
    <section className="about">
      <h2>Quiénes somos</h2>
      <p>Somos una marca de moda de lujo centrada en crear prendas elegantes y sofisticadas, enfocada en la excelencia en el diseño y la calidad premium. Nuestra filosofía se basa en la elegancia atemporal y la artesanía excepcional.</p>
    </section>
  )
}

function Products() {
  return (
    <section className="products">
      <h2 className="section-title">Productos destacados</h2>
      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact">
      <h2>Contáctanos</h2>
      <p>¿Tienes preguntas? Déjanos un mensaje.</p>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <label>
          Nombre
          <input type="text" name="name" />
        </label>
        <label>
          Correo
          <input type="email" name="email" />
        </label>
        <label>
          Mensaje
          <textarea name="message" rows="4" />
        </label>
        <div>
          <button className="btn primary" type="submit">Enviar</button>
        </div>
      </form>
    </section>
  )
}

function Header({ active, onChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const items = [
    { id: 'home', label: 'Inicio' },
    { id: 'about', label: 'Nosotros' },
    { id: 'productos', label: 'Productos' },
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

function App() {
  const [section, setSection] = useState('home')

  return (
    <div className="shop-root">
      <Header active={section} onChange={setSection} />

      <main>
        {section === 'home' && <Home />}
        {section === 'about' && <About />}
        {section === 'productos' && <Products />}
        {section === 'contact' && <Contact />}
      </main>
    </div>
  )
}

export default App
