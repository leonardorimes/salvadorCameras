import './Diferenciais.css'

const cards = [
  {
    id: 'diff-locacao',
    icon: '📋',
    title: 'Contrato de Locação',
    desc: 'Sem investimento inicial. Pague apenas uma mensalidade acessível com tudo já incluso. Zero burocracia, instalação imediata.',
    highlight: 'Sem custo de entrada',
  },
  {
    id: 'diff-manutencao',
    icon: '🔧',
    title: 'Manutenção Total',
    desc: 'Troca de câmeras, atualização de sistema, suporte técnico presencial e remoto. Tudo incluso, sem surpresas na fatura.',
    highlight: 'Sem cobranças extras',
  },
  {
    id: 'diff-hd',
    icon: '🎥',
    title: 'Câmeras Alta Definição',
    desc: 'Imagens nítidas em resolução Full HD e 4K com visão noturna, detecção de movimento e zoom digital avançado.',
    highlight: 'Full HD & 4K',
  },
  {
    id: 'diff-facial',
    icon: '🆔',
    title: 'Acesso Facial',
    desc: 'Controle de acesso por reconhecimento facial com alta precisão. Gerencie entradas e saídas de forma inteligente.',
    highlight: 'Tecnologia biométrica',
  },
  {
    id: 'diff-gravacao',
    icon: '💾',
    title: 'Gravação em Nuvem',
    desc: 'Acesse suas câmeras de qualquer lugar pelo celular ou computador. Gravações seguras disponíveis quando precisar.',
    highlight: 'Acesso remoto 24/7',
  },
  {
    id: 'diff-suporte',
    icon: '⚡',
    title: 'Suporte Especializado',
    desc: 'Equipe técnica dedicada com mais de 30 anos de experiência. Atendimento rápido e eficiente em todo o estado.',
    highlight: '497 clientes satisfeitos',
  },
]

const Diferenciais = () => (
  <section className="diferenciais section" id="diferenciais">
    <div className="diferenciais__bg-decor" aria-hidden="true">
      <div className="diferenciais__blob diferenciais__blob--1" />
      <div className="diferenciais__blob diferenciais__blob--2" />
    </div>
    <div className="container">
      <div className="diferenciais__header">
        <div className="section-label">
          <span>⭐</span>
          Nossos Diferenciais
        </div>
        <h2 className="section-title">
          Por que escolher a{' '}
          <span className="gradient-text">Salvador Câmeras?</span>
        </h2>
        <p className="section-subtitle diferenciais__subtitle">
          Trabalhamos com contratos de locação que incluem tudo. Você não paga nada a mais
          por manutenção, atualização ou reparo — nunca.
        </p>
      </div>

      <div className="diferenciais__grid">
        {cards.map((card, i) => (
          <div
            key={card.id}
            id={card.id}
            className="diferenciais__card card"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="diferenciais__card-icon">{card.icon}</div>
            <div className="diferenciais__card-highlight">{card.highlight}</div>
            <h3 className="diferenciais__card-title">{card.title}</h3>
            <p className="diferenciais__card-desc">{card.desc}</p>
            <div className="diferenciais__card-line" />
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Diferenciais
