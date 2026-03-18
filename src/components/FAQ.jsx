import './FAQ.css'
import { useState } from 'react'

const faqs = [
  {
    id: 'faq-1',
    q: 'Por que alugar câmeras em vez de comprar?',
    a: 'Ao alugar, a responsabilidade da manutenção é totalmente da Salvador Câmeras. Fazemos troca de câmeras, atualização do sistema sem custo adicional. O valor mensal já inclui tudo isso. Você não precisa se preocupar com equipamentos defasados ou custos inesperados de reparo.',
  },
  {
    id: 'faq-2',
    q: 'O que está incluso no contrato de locação?',
    a: 'O contrato inclui: instalação completa e profissional, câmeras de alta definição, DVR/NVR de gravação, suporte técnico 24/7, manutenção preventiva e corretiva, troca de equipamentos defeituosos, atualização de firmware e software, e atendimento presencial quando necessário.',
  },
  {
    id: 'faq-3',
    q: 'Há fidelidade ou prazo mínimo de contrato?',
    a: 'Sim, trabalhamos com contratos a partir de 12 meses, o que nos permite oferecer um valor mensal extremamente competitivo e garantir a qualidade e continuidade do serviço. Entre em contato para conhecer os planos disponíveis.',
  },
  {
    id: 'faq-4',
    q: 'Posso acessar as câmeras pelo celular?',
    a: 'Sim! Disponibilizamos acesso remoto via aplicativo para smartphone (Android e iOS) e também pelo computador. Você visualiza suas câmeras em tempo real de onde estiver, 24 horas por dia.',
  },
  {
    id: 'faq-5',
    q: 'Vocês atendem em toda a Bahia?',
    a: 'Atualmente atendemos a todo o estado da Bahia, com mais de 497 clientes em diferentes cidades. Entre em contato e verifique a disponibilidade na sua região.',
  },
  {
    id: 'faq-6',
    q: 'O que é o sistema de acesso facial?',
    a: 'O acesso facial utiliza biometria por reconhecimento de rosto para controlar entradas e saídas em portões, catracas ou portas. Elimina a necessidade de cartões, senhas ou chaves, sendo mais seguro e prático para empresas e condomínios.',
  },
]

const FAQItem = ({ faq }) => {
  const [open, setOpen] = useState(false)
  return (
    <div
      id={faq.id}
      className={`faq__item ${open ? 'faq__item--open' : ''}`}
      onClick={() => setOpen(!open)}
    >
      <div className="faq__question">
        <span>{faq.q}</span>
        <div className={`faq__icon ${open ? 'faq__icon--open' : ''}`}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      <div className="faq__answer">
        <p>{faq.a}</p>
      </div>
    </div>
  )
}

const FAQ = () => (
  <section className="faq section" id="faq">
    <div className="container">
      <div className="faq__header">
        <div className="section-label">
          <span>❓</span>
          Perguntas Frequentes
        </div>
        <h2 className="section-title">
          Tire suas <span className="gradient-text">dúvidas</span>
        </h2>
        <p className="section-subtitle faq__subtitle">
          Se não encontrar sua resposta, fale diretamente com nossa equipe pelo WhatsApp.
        </p>
      </div>

      <div className="faq__list">
        {faqs.map(faq => (
          <FAQItem key={faq.id} faq={faq} />
        ))}
      </div>

      <div className="faq__contact">
        <p>Ainda tem dúvidas? Nossa equipe está pronta para te ajudar!</p>
        <button
          id="faq-whatsapp-btn"
          className="btn-primary"
          onClick={() => window.open('https://wa.me/5571999999999?text=Olá! Tenho dúvidas sobre a Salvador Câmeras.', '_blank')}
        >
          <span>💬 Falar com Especialista</span>
        </button>
      </div>
    </div>
  </section>
)

export default FAQ
