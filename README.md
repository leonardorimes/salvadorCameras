<div align="center">

# 🎥 Salvador CFTV — Landing Page

**Landing page profissional para a Salvador Câmeras CFTV**, empresa especializada em locação de sistemas de videomonitoramento com mais de 30 anos de experiência.

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![CSS3](https://img.shields.io/badge/CSS3-Vanilla-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

</div>

---

## 📋 Sobre o Projeto

Site de apresentação institucional da **Salvador CFTV**, desenvolvido com React + Vite e estilização 100% em Vanilla CSS. O design transmite modernidade, confiança e profissionalismo — com paleta em tons de verde escuro (#0D5734) e verde vibrante (#02A959), tema dark e elementos de glassmorphism.

---

## 🚀 Tecnologias

| Tecnologia | Versão | Função |
|---|---|---|
| **React** | 19 | Biblioteca de componentes UI |
| **Vite** | 8 | Build tool e dev server |
| **Vanilla CSS** | — | Estilização sem frameworks externos |
| **Google Fonts** | Inter | Tipografia moderna |
| **HTML5** | — | Estrutura semântica com SEO |

---

## 🗂️ Estrutura do Projeto

```
salvadorCameras/
├── public/
│   ├── logo.png              # Logo oficial da empresa
│   ├── favicon.svg           # Ícone da aba do navegador
│   └── icons.svg             # Ícones auxiliares
│
├── src/
│   ├── assets/
│   │   ├── hero_cameras.png          # Foto principal (hero)
│   │   └── technician_maintenance.png # Foto do técnico (seção Sobre)
│   │
│   ├── components/
│   │   ├── Navbar.jsx / .css         # Barra de navegação fixa com scroll
│   │   ├── Hero.jsx / .css           # Seção principal com CTA
│   │   ├── Sobre.jsx / .css          # Quem somos + imagem do técnico
│   │   ├── Diferenciais.jsx / .css   # 6 cards de benefícios
│   │   ├── ComoFunciona.jsx / .css   # Passo a passo da locação
│   │   ├── FAQ.jsx / .css            # Perguntas frequentes (accordion)
│   │   └── Footer.jsx / .css         # Rodapé com contato e redes sociais
│   │
│   ├── App.jsx               # Composição das seções + botão WhatsApp flutuante
│   ├── index.css             # Design system: variáveis, animações e utilitários
│   └── main.jsx              # Ponto de entrada React
│
├── index.html                # HTML base com meta tags SEO
├── vite.config.js            # Configuração do Vite
└── package.json
```

---

## 🎨 Design System

O projeto usa **CSS Custom Properties** centralizadas no `index.css`:

```css
--green-dark:   #0D5734   /* Fundo de elementos de destaque */
--green-bright: #02A959   /* Cor de ação, bordas e acentos  */
--dark-bg:      #060e0a   /* Background principal           */
--gradient-main: linear-gradient(135deg, #0D5734, #02A959)
```

### Animações presentes
- `fadeInUp / fadeInLeft / fadeInRight` — entrada dos elementos
- `float` — levitação suave da imagem do técnico
- `scan` — linha de varredura no Hero (referência a câmera de segurança)
- `pulse-glow` — pulsação do botão flutuante de WhatsApp
- `scroll-wheel` — indicador de scroll no Hero

---

## 📄 Seções da Landing Page

| # | Seção | Descrição |
|---|---|---|
| 1 | **Navbar** | Fixa no topo, transparente → glass ao rolar; menu hambúrguer no mobile |
| 2 | **Hero** | Imagem de câmeras com overlay, stats (497+ clientes, 30+ anos), CTA para WhatsApp |
| 3 | **Sobre** | Texto institucional + foto do técnico + badge "30+ anos" |
| 4 | **Diferenciais** | Grid de 6 cards: Locação, Manutenção, HD, Facial, Nuvem, Suporte |
| 5 | **Como Funciona** | 4 passos: Contato → Projeto → Instalação → Monitoramento |
| 6 | **FAQ** | Accordion com 6 perguntas frequentes, incluindo "Por que alugar?" |
| 7 | **Footer** | Logo, nav, contatos reais, Instagram, Facebook, endereço |
| ✦ | **WhatsApp Float** | Botão flutuante fixo com animação de pulso |

---

## ⚙️ Como Rodar Localmente

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build
```

O servidor sobe por padrão em **http://localhost:5173**

---

## 📞 Contato da Empresa

| Canal | Informação |
|---|---|
| 📱 WhatsApp / Celular | (27) 99908-6420 |
| ☎️ Telefone Fixo | (27) 3329-7588 |
| ✉️ E-mail | salvadorcameras@hotmail.com |
| 📍 Endereço | Av. Luciano das Neves, 2423 — Vila Velha/ES |
| 📸 Instagram | [@salvadorcftv](https://www.instagram.com/salvadorcftv/) |
| 👍 Facebook | [Salvador Câmeras CFTV](https://www.facebook.com/people/Salvador-C%C3%A2meras-CFTV/61575132240389/) |

---

<div align="center">
  <sub>Desenvolvido com ❤️ para a <strong>Salvador CFTV</strong> — Locação de Câmeras desde 1994</sub>
</div>
