import "./Sobre.css";

const Sobre = () => {
  const features = [
    { icon: "🎯", label: "Especialistas em câmeras" },
    { icon: "🔒", label: "Acesso facial avançado" },
    { icon: "📡", label: "Monitoramento 24/7" },
    { icon: "🛠️", label: "Manutenção incluída" },
  ];

  return (
    <section className="sobre section" id="sobre">
      <div className="container sobre__inner">
        <div className="sobre__image-wrap">
          <div className="sobre__image-glow" />
          <div className="sobre__image-border">
            <img
              src="/foto.jpeg"
              alt="Técnico Salvador Câmeras instalando sistema"
              className="sobre__image"
            />
          </div>
          <div className="sobre__experience-badge">
            <span className="sobre__badge-num">
              30<span>+</span>
            </span>
            <span className="sobre__badge-label">
              Anos de
              <br />
              Experiência
            </span>
          </div>
        </div>

        <div className="sobre__content">
          <div className="section-label">
            <span>📍</span>
            Quem Somos
          </div>

          <h2 className="section-title">
            Salvador Câmeras —{" "}
            <span className="gradient-text">referência em monitoramento</span>
          </h2>

          <p className="sobre__text">
            Somos uma empresa que trabalha{" "}
            <strong>exclusivamente com sistemas de vídeo monitoramento</strong>,
            câmeras de alta definição e sistema de acesso facial. Com mais de
            três décadas de experiência, nos tornamos a escolha de confiança
            para empresas que priorizam a segurança e a inovação.
          </p>

          <p className="sobre__text">
            Atualmente prestamos serviço para <strong>497 clientes</strong>,
            oferecendo contratos de locação e manutenção com suporte completo.
            Nossa missão é garantir a sua segurança com tecnologia de ponta e
            atendimento humanizado.
          </p>

          <div className="sobre__features">
            {features.map((f, i) => (
              <div key={i} className="sobre__feature">
                <span className="sobre__feature-icon">{f.icon}</span>
                <span className="sobre__feature-label">{f.label}</span>
              </div>
            ))}
          </div>

          <button
            id="sobre-cta"
            className="btn-primary"
            onClick={() =>
              window.open(
                "https://wa.me/5527999086420?text=Quero saber mais sobre a Salvador Câmeras CFTV!",
                "_blank",
              )
            }
          >
            <span>Fale Conosco pelo WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
