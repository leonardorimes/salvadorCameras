import './Footer.css'

const Footer = () => {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer__top-bar">
        <div className="footer__top-bar-inner container">
          <span>Precisa de proteção agora? Fale conosco imediatamente</span>
          <button
            id="footer-cta"
            className="btn-primary footer__top-btn"
            onClick={() => window.open('https://wa.me/5527999086420?text=Olá! Preciso de um sistema de câmeras.', '_blank')}
          >
            <span>💬 WhatsApp</span>
          </button>
        </div>
      </div>

      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            <img src="/logo.png" alt="Salvador CFTV - Locação de Câmeras" className="footer__logo-img" />
          </div>
          <p className="footer__desc">
            Especialistas em sistemas de câmeras de segurança e acesso facial há mais de 30 anos.
            Servindo 497+ clientes em todo o estado com excelência e dedicação.
          </p>
          <div className="footer__badges">
            <div className="footer__badge">
              <span className="footer__badge-dot" />
              <span>Desde 1994</span>
            </div>
            <div className="footer__badge">
              <span className="footer__badge-dot" />
              <span>497+ Clientes</span>
            </div>
            <div className="footer__badge">
              <span className="footer__badge-dot" />
              <span>Vila Velha — ES</span>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="footer__social">
            <a
              href="https://www.instagram.com/salvadorcftv/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-btn"
              id="footer-instagram"
              aria-label="Instagram Salvador CFTV"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>@salvadorcftv</span>
            </a>
            <a
              href="https://www.facebook.com/people/Salvador-C%C3%A2meras-CFTV/61575132240389/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-btn"
              id="footer-facebook"
              aria-label="Facebook Salvador Câmeras CFTV"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Salvador Câmeras CFTV</span>
            </a>
          </div>
        </div>

        <div className="footer__nav">
          <h4 className="footer__nav-title">Navegação</h4>
          <ul className="footer__nav-list">
            {[
              { label: 'Início', href: '#hero' },
              { label: 'Quem Somos', href: '#sobre' },
              { label: 'Diferenciais', href: '#diferenciais' },
              { label: 'Como Funciona', href: '#como-funciona' },
              { label: 'Perguntas Frequentes', href: '#faq' },
            ].map(l => (
              <li key={l.href}>
                <button className="footer__nav-link" onClick={() => scrollTo(l.href)}>
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__contact">
          <h4 className="footer__nav-title">Contato</h4>
          <div className="footer__contact-items">
            <a
              href="https://wa.me/5527999086420"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__contact-item"
              id="footer-whatsapp"
            >
              <span className="footer__contact-icon">📱</span>
              <div>
                <div className="footer__contact-label">WhatsApp / Celular</div>
                <div className="footer__contact-value">(27) 99908-6420</div>
              </div>
            </a>
            <a
              href="tel:+5527332976588"
              className="footer__contact-item"
              id="footer-phone"
            >
              <span className="footer__contact-icon">📞</span>
              <div>
                <div className="footer__contact-label">Telefone Fixo</div>
                <div className="footer__contact-value">(27) 3329-7588</div>
              </div>
            </a>
            <a
              href="mailto:salvadorcameras@hotmail.com"
              className="footer__contact-item"
              id="footer-email"
            >
              <span className="footer__contact-icon">✉️</span>
              <div>
                <div className="footer__contact-label">E-mail</div>
                <div className="footer__contact-value">salvadorcameras@hotmail.com</div>
              </div>
            </a>
            <div className="footer__contact-item">
              <span className="footer__contact-icon">📍</span>
              <div>
                <div className="footer__contact-label">Endereço</div>
                <div className="footer__contact-value">
                  Av. Luciano das Neves, 2423<br/>
                  Centro de Vila Velha — ES<br/>
                  CEP: 29101-603
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="divider" />

      <div className="container footer__bottom">
        <p>© 2024 Salvador Câmeras CFTV. Todos os direitos reservados.</p>
        <p>Locação de câmeras de segurança há mais de 30 anos 🎥</p>
      </div>
    </footer>
  )
}

export default Footer
