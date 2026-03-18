import './Hero.css'
import heroCameras from '../assets/hero_cameras.png'

const Hero = () => {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero">
      <div className="hero__bg">
        <img src={heroCameras} alt="Sistema de câmeras profissional" className="hero__bg-img" />
        <div className="hero__overlay" />
        <div className="hero__gradient" />
      </div>

      {/* Animated grid lines */}
      <div className="hero__grid" aria-hidden="true">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="hero__grid-line" style={{ animationDelay: `${i * 0.4}s` }} />
        ))}
      </div>

      {/* Scanning line animation */}
      <div className="hero__scan-line" aria-hidden="true" />

      <div className="container hero__content">
        <div className="hero__badge">
          <div className="live-dot" />
          <span>Monitoramento Ativo 24/7</span>
        </div>

        <h1 className="hero__title">
          Segurança de Alta Definição{' '}
          <span className="gradient-text">Para o Seu Negócio</span>
        </h1>

        <p className="hero__subtitle">
          Há mais de <strong>30 anos</strong> protegendo empresas e lares com tecnologia de ponta
          em câmeras HD e acesso facial. Sem custo de manutenção — tudo incluso no contrato.
        </p>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-num">497<span className="hero__stat-plus">+</span></span>
            <span className="hero__stat-label">Clientes Ativos</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">30<span className="hero__stat-plus">+</span></span>
            <span className="hero__stat-label">Anos de Experiência</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">100<span className="hero__stat-plus">%</span></span>
            <span className="hero__stat-label">Manutenção Inclusa</span>
          </div>
        </div>

        <div className="hero__actions">
          <button
            id="hero-cta-primary"
            className="btn-primary"
            onClick={() => window.open('https://wa.me/5527999086420?text=Olá! Quero saber mais sobre locação de câmeras.', '_blank')}
          >
            <span>📹 Solicitar Orçamento Grátis</span>
          </button>
          <button
            id="hero-cta-secondary"
            className="btn-outline"
            onClick={() => scrollTo('#sobre')}
          >
            Saiba Mais ↓
          </button>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
        <span>Role para baixo</span>
      </div>
    </section>
  )
}

export default Hero
