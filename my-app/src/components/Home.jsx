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

export default Home
