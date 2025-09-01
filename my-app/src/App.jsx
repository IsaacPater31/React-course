import './App.css'
import { useState, useEffect } from 'react'
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

function Carousel({ onChange }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      id: 'about',
      title: 'Quiénes Somos',
      subtitle: 'Nuestra Historia',
      description: 'Somos una marca de moda de lujo centrada en crear prendas elegantes y sofisticadas, enfocada en la excelencia en el diseño y la calidad premium.',
      image: 'https://picsum.photos/seed/about/800/600',
      buttonText: 'Conoce Nuestra Historia',
      buttonAction: () => onChange('about')
    },
    {
      id: 'productos',
      title: 'Nuestra Colección',
      subtitle: 'Diseños Exclusivos',
      description: 'Explora nuestra colección exclusiva de elegancia atemporal y diseño sofisticado. Cada pieza es creada con atención al detalle y técnicas de confección tradicionales.',
      image: 'https://picsum.photos/seed/products/800/600',
      buttonText: 'Ver Colección',
      buttonAction: () => onChange('productos')
    },
    {
      id: 'contact',
      title: 'Contáctanos',
      subtitle: 'Estamos Aquí Para Ti',
      description: '¿Tienes preguntas sobre nuestra colección o quieres hacer una consulta personalizada? Nuestro equipo está listo para ayudarte.',
      image: 'https://picsum.photos/seed/contact/800/600',
      buttonText: 'Hablemos',
      buttonAction: () => onChange('contact')
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 10000)
    return () => clearInterval(timer)
  }, [slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="carousel-section">
      <div className="carousel-container">
        <div className="carousel-wrapper">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            >
              <div className="carousel-content">
                <div className="carousel-text">
                  <h2 className="carousel-title">{slide.title}</h2>
                  <h3 className="carousel-subtitle">{slide.subtitle}</h3>
                  <p className="carousel-description">{slide.description}</p>
                  <button className="btn primary carousel-btn" onClick={slide.buttonAction}>
                    {slide.buttonText}
                  </button>
                </div>
                <div className="carousel-image">
                  <img src={slide.image} alt={slide.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation Dots */}
        <div className="carousel-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <button className="carousel-arrow carousel-arrow-prev" onClick={goToPrev} aria-label="Previous slide">
          <span>‹</span>
        </button>
        <button className="carousel-arrow carousel-arrow-next" onClick={goToNext} aria-label="Next slide">
          <span>›</span>
        </button>
      </div>
    </section>
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

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Nueva Colección Primavera 2024",
      excerpt: "Descubre nuestra última colección inspirada en la elegancia de la primavera. Diseños frescos y sofisticados que combinan comodidad con estilo.",
      image: "https://picsum.photos/seed/blog1/600/400",
      date: "15 Mar 2024",
      category: "Colecciones",
      likes: 284,
      comments: 32
    },
    {
      id: 2,
      title: "Guía de Estilo: Combinando Colores",
      excerpt: "Aprende los secretos para crear combinaciones de colores perfectas que reflejen tu personalidad y elegancia natural.",
      image: "https://picsum.photos/seed/blog2/600/400",
      date: "12 Mar 2024",
      category: "Estilo",
      likes: 156,
      comments: 18
    },
    {
      id: 3,
      title: "Sostenibilidad en la Moda",
      excerpt: "Conoce nuestro compromiso con la moda sostenible y cómo estamos reduciendo nuestro impacto ambiental.",
      image: "https://picsum.photos/seed/blog3/600/400",
      date: "10 Mar 2024",
      category: "Sostenibilidad",
      likes: 342,
      comments: 45
    },
    {
      id: 4,
      title: "Tendencias Otoño-Invierno",
      excerpt: "Las tendencias más importantes para la temporada otoño-invierno que no puedes perderte.",
      image: "https://picsum.photos/seed/blog4/600/400",
      date: "8 Mar 2024",
      category: "Tendencias",
      likes: 198,
      comments: 27
    },
    {
      id: 5,
      title: "Cuidado de Prendas Premium",
      excerpt: "Consejos expertos para mantener tus prendas premium en perfecto estado por más tiempo.",
      image: "https://picsum.photos/seed/blog5/600/400",
      date: "5 Mar 2024",
      category: "Cuidado",
      likes: 267,
      comments: 38
    },
    {
      id: 6,
      title: "Historia de MOI Fashion",
      excerpt: "Descubre la historia detrás de nuestra marca y cómo hemos evolucionado para convertirnos en referente de elegancia.",
      image: "https://picsum.photos/seed/blog6/600/400",
      date: "3 Mar 2024",
      category: "Historia",
      likes: 423,
      comments: 52
    }
  ]

  return (
    <section className="blog">
      <div className="blog-header">
        <h1 className="blog-title">Blog MOI Fashion</h1>
        <p className="blog-subtitle">Descubre las últimas tendencias, consejos de estilo y novedades de nuestra marca</p>
      </div>
      
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <article key={post.id} className="blog-card">
            <div className="blog-card-image">
              <img src={post.image} alt={post.title} />
              <div className="blog-card-overlay">
                <span className="blog-category">{post.category}</span>
              </div>
            </div>
            <div className="blog-card-content">
              <div className="blog-card-meta">
                <span className="blog-date">{post.date}</span>
                <div className="blog-stats">
                  <span className="blog-likes">❤️ {post.likes}</span>
                  <span className="blog-comments">💬 {post.comments}</span>
                </div>
              </div>
              <h3 className="blog-card-title">{post.title}</h3>
              <p className="blog-card-excerpt">{post.excerpt}</p>
              <button className="blog-read-more">Leer más</button>
            </div>
          </article>
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

function App() {
  const [section, setSection] = useState('home')

  return (
    <div className="shop-root">
      <Header active={section} onChange={setSection} />

              <main>
          {section === 'home' && (
            <>
              <Carousel onChange={setSection} />
              <Home />
            </>
          )}
          {section === 'about' && <About />}
          {section === 'productos' && <Products />}
          {section === 'blog' && <Blog />}
          {section === 'contact' && <Contact />}
        </main>
    </div>
  )
}

export default App
