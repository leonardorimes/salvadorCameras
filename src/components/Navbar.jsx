import './Navbar.css'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Início', href: '#hero' },
    { label: 'Quem Somos', href: '#sobre' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'FAQ', href: '#faq' },
  ]

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <div className="navbar__logo" onClick={() => scrollTo('#hero')}>
          <img src="/logo.png" alt="Salvador CFTV - Locação de Câmeras" className="navbar__logo-img" />
        </div>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {links.map(l => (
            <li key={l.href}>
              <button className="navbar__link" onClick={() => scrollTo(l.href)}>
                {l.label}
              </button>
            </li>
          ))}
          <li>
            <button
              className="btn-primary navbar__cta"
              onClick={() => window.open('https://wa.me/5527999086420?text=Olá! Quero saber mais sobre locação de câmeras.', '_blank')}
            >
              <span>Solicitar Orçamento</span>
            </button>
          </li>
        </ul>

        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
