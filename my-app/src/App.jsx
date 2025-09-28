import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import HeroLema from './components/HeroLema'
import Carousel from './components/Carousel'
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import Blog from './components/Blog'
import Contact from './components/Contact'

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
            <HeroLema />
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
