function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-title">Elegancia Redefinida. Disponible Ahora.</h2>
          <p className="cta-subtitle">
            Descubre una nueva forma de experimentar la moda con nuestro estilo atemporal y sofisticado.
          </p>
          
          <div className="cta-buttons">
            <button className="cta-button primary">
              Comenzar Ahora <span className="arrow">→</span>
            </button>
            <button className="cta-button secondary">
              Contactar <span className="arrow">→</span>
            </button>
          </div>
        </div>
        
        <div className="cta-background-text">
          <span className="background-word">ELEGANCIA</span>
        </div>
      </div>
    </section>
  )
}

export default CTASection
