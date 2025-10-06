import { useState, useEffect } from 'react'

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
      id: 'blog',
      title: 'Blog MOI Fashion',
      subtitle: 'Tendencias y Estilo',
      description: 'Descubre las últimas tendencias, consejos de estilo y novedades de nuestra marca. Mantente actualizado con contenido exclusivo sobre moda y elegancia.',
      image: 'https://picsum.photos/seed/blog/800/600',
      buttonText: 'Leer Blog',
      buttonAction: () => onChange('blog')
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
    }, 12000)
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

export default Carousel
