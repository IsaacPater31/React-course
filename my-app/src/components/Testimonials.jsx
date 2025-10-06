function Testimonials() {
  const testimonials = [
    {
      name: "Sophia Martinez",
      location: "New York, USA",
      rating: 5,
      text: "Mi familia y yo tuvimos la estadía más maravillosa. El apartamento estaba impecable, con vistas impresionantes. El personal fue más allá para hacer especial nuestras vacaciones.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "Marco Rodriguez",
      location: "Barcelona, España",
      rating: 5,
      text: "Una experiencia excepcional desde el momento de la llegada. La atención al detalle y la elegancia del lugar superaron todas nuestras expectativas. Definitivamente regresaremos.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "Emma Thompson",
      location: "Londres, Reino Unido",
      rating: 5,
      text: "El diseño y la calidad de las instalaciones son impresionantes. Cada rincón refleja elegancia y sofisticación. Un lugar perfecto para una escapada de lujo.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index} 
        className={`star ${index < rating ? 'active' : ''}`}
      >
        ★
      </span>
    ))
  }

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">Lo Que Dicen Nuestros Clientes</h2>
          <p className="testimonials-subtitle">
            Descubre por qué nuestros clientes siguen regresando por su experiencia de elegancia atemporal.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-rating">
                {renderStars(testimonial.rating)}
              </div>
              
              <blockquote className="testimonial-quote">
                "{testimonial.text}"
              </blockquote>
              
              <div className="testimonial-author">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="author-image"
                />
                <div className="author-info">
                  <p className="author-name">{testimonial.name}</p>
                  <p className="author-location">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
