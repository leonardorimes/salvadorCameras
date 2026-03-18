import './ComoFunciona.css'

const steps = [
  {
    id: 'step-contato',
    num: '01',
    icon: '📞',
    title: 'Entre em Contato',
    desc: 'Fale com nossa equipe via WhatsApp ou telefone. Fazemos uma visita técnica gratuita para avaliar o melhor sistema para você.',
  },
  {
    id: 'step-projeto',
    num: '02',
    icon: '📐',
    title: 'Projeto Personalizado',
    desc: 'Desenvolvemos um projeto customizado para o seu espaço, escolhendo o número e posicionamento ideal de câmeras e equipamentos.',
  },
  {
    id: 'step-instalacao',
    num: '03',
    icon: '🔌',
    title: 'Instalação Profissional',
    desc: 'Nossa equipe técnica realiza a instalação completa de forma rápida e organizada, sem danos à estrutura do seu imóvel.',
  },
  {
    id: 'step-monitoramento',
    num: '04',
    icon: '📱',
    title: 'Monitore de Qualquer Lugar',
    desc: 'Acesse suas câmeras em tempo real pelo celular ou computador. Receba alertas e gravações sempre que precisar.',
  },
]

const ComoFunciona = () => (
  <section className="como-funciona section" id="como-funciona">
    <div className="container">
      <div className="como-funciona__header">
        <div className="section-label">
          <span>⚙️</span>
          Processo Simples
        </div>
        <h2 className="section-title">
          Como funciona a{' '}
          <span className="gradient-text">nossa locação?</span>
        </h2>
        <p className="section-subtitle como-funciona__subtitle">
          Em poucos passos, você já estará com seu estabelecimento protegido
          com tecnologia de última geração.
        </p>
      </div>

      <div className="como-funciona__steps">
        {steps.map((step, i) => (
          <div key={step.id} id={step.id} className="como-funciona__step">
            <div className="como-funciona__step-connector">
              <div className="como-funciona__step-num">{step.num}</div>
              {i < steps.length - 1 && (
                <div className="como-funciona__step-line">
                  <div className="como-funciona__step-line-fill" />
                </div>
              )}
            </div>
            <div className="como-funciona__step-content card">
              <div className="como-funciona__step-icon">{step.icon}</div>
              <h3 className="como-funciona__step-title">{step.title}</h3>
              <p className="como-funciona__step-desc">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="como-funciona__cta">
        <div className="como-funciona__cta-inner">
          <div className="como-funciona__cta-glow" />
          <h3 className="como-funciona__cta-title">
            Pronto para proteger o seu negócio?
          </h3>
          <p className="como-funciona__cta-sub">
            Solicite uma visita técnica gratuita agora mesmo. Sem compromisso.
          </p>
          <button
            id="como-funciona-cta"
            className="btn-primary"
            onClick={() => window.open('https://wa.me/5571999999999?text=Olá! Gostaria de agendar uma visita técnica gratuita.', '_blank')}
          >
            <span>📅 Agendar Visita Gratuita</span>
          </button>
        </div>
      </div>
    </div>
  </section>
)

export default ComoFunciona
