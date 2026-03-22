# 💼 Portfolio Pessoal — Caio Sampaio

<div align="center">

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Responsive](https://img.shields.io/badge/Design-Responsive-green)](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)

**Website profissional showcasing projetos, habilidades e experiência como desenvolvedor.**

[Ver Demo](https://seu-portfolio.vercel.app) · [Código Fonte](https://github.com/CAI0SAMPAI0/portfolio)

</div>

---

## 📋 Sobre o Projeto

Portfolio pessoal moderno e responsivo desenvolvido com HTML5, CSS3 e JavaScript vanilla. Apresenta trabalhos, projetos, habilidades técnicas e informações de contato de forma profissional e visualmente atraente.

---

## 🎯 Problema que Resolve

### Desafios de Apresentação Profissional

**Para Desenvolvedores:**
- ❌ **CV Estático Limitado**: PDFs tradicionais não mostram projetos interativos
- ❌ **Portfólio Disperso**: Trabalhos espalhados em GitHub, LinkedIn, Behance
- ❌ **Falta de Personalização**: Templates genéricos que não destacam individualidade
- ❌ **Baixa Visibilidade**: Difícil ser encontrado por recrutadores online
- ❌ **Sem Demonstração**: Impossível mostrar habilidades front-end em um CV

**Solução Profissional:**

✅ **Showcase Interativo** - Demonstração visual de projetos reais  
✅ **Centralização** - Um único lugar com todas informações profissionais  
✅ **Personalização Total** - Design único refletindo personalidade  
✅ **SEO Otimizado** - Fácil encontro por recrutadores via Google  
✅ **Prova de Habilidades** - O próprio portfolio é um projeto tech  
✅ **Atualização Dinâmica** - Adicione projetos facilmente sem reenviar CVs  

---

## ✨ Funcionalidades

### 🎨 Design Moderno

- Layout responsivo (desktop, tablet, mobile)
- Animações suaves ao scroll
- Tema dark/light opcional
- Tipografia profissional
- Paleta de cores harmoniosa

### 📱 Seções

**Hero/Intro**
- Apresentação impactante
- Call-to-action claro
- Links para redes sociais

**Sobre Mim**
- Bio profissional
- Foto/avatar
- Valores e objetivos

**Habilidades**
- Ícones tecnologias dominadas
- Níveis de proficiência
- Categorias (Front-end, Back-end, Tools)

**Projetos**
- Cards com screenshots
- Descrição e tech stack
- Links para demo/código
- Filtro por categoria

**Experiência**
- Timeline de trabalhos anteriores
- Responsabilidades principais
- Conquistas mensuráveis

**Contato**
- Formulário funcional
- Email direto
- Links redes profissionais (LinkedIn, GitHub)
- Localização (opcional)

### ⚡ Performance

- Código limpo e semântico
- Imagens otimizadas (WebP)
- Lazy loading
- Minificação CSS/JS
- Lighthouse score 90+

---

## 🛠️ Stack Tecnológica

| Camada | Tecnologia | Uso |
|--------|-----------|-----|
| **Estrutura** | HTML5 | Semântica e acessibilidade |
| **Estilização** | CSS3 | Layouts, animações, responsividade |
| **Interatividade** | JavaScript | Navegação smooth, formulário |
| **Ícones** | Font Awesome / SVG | Ícones tecnologias e social |
| **Fontes** | Google Fonts | Tipografia profissional |
| **Deploy** | Vercel / Netlify | Hospedagem gratuita |

---

## 🚀 Instalação e Uso

### Opção 1: Uso Direto (sem instalação)

1. Clone o repositório:
```bash
git clone https://github.com/CAI0SAMPAI0/portfolio.git
cd portfolio
```

2. Abra `index.html` diretamente no navegador ou use Live Server (VS Code):
```bash
# Com Python
python -m http.server 8000

# Com Node.js (http-server)
npx http-server
```

3. Acesse: `http://localhost:8000`

### Opção 2: Deploy Online

**Vercel (Recomendado)**
```bash
npm install -g vercel
vercel --prod
```

**Netlify**
```bash
# Arraste pasta do projeto no site netlify.com
# Ou use Netlify CLI
npm install -g netlify-cli
netlify deploy --prod
```

**GitHub Pages**
```bash
# Em Settings > Pages > Source: main branch
# Site estará em: https://CAI0SAMPAI0.github.io/portfolio
```

---

## ⚙️ Customização

### 1. Informações Pessoais

Edite `index.html` e `js/script.js`:

```html
<!-- Hero Section -->
<h1>Seu Nome Completo</h1>
<p class="subtitle">Desenvolvedor Full Stack</p>

<!-- Sobre -->
<p class="bio">Sua biografia profissional aqui...</p>
```

### 2. Projetos

Adicione em `js/projects.js`:

```javascript
const projects = [
  {
    title: "Nome do Projeto",
    description: "Descrição breve e impactante",
    image: "images/projeto1.jpg",
    tech: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/usuario/repo",
    demo: "https://projeto-demo.vercel.app"
  },
  // ...mais projetos
];
```

### 3. Habilidades

Modifique `data/skills.json`:

```json
{
  "frontend": ["React", "Vue", "TypeScript"],
  "backend": ["Node.js", "Python", "Django"],
  "database": ["PostgreSQL", "MongoDB"],
  "tools": ["Git", "Docker", "AWS"]
}
```

### 4. Tema de Cores

Ajuste em `css/variables.css`:

```css
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --dark-bg: #1a1a2e;
  --light-text: #ecf0f1;
}
```

---

## 📁 Estrutura de Arquivos

```
portfolio/
├── index.html              # Página principal
├── css/
│   ├── style.css          # Estilos principais
│   ├── responsive.css     # Media queries
│   └── animations.css     # Animações
├── js/
│   ├── script.js          # Lógica principal
│   ├── projects.js        # Dados de projetos
│   └── form-handler.js    # Formulário contato
├── images/
│   ├── profile.jpg        # Foto perfil
│   ├── projects/          # Screenshots projetos
│   └── icons/             # Ícones customizados
├── data/
│   └── skills.json        # Habilidades técnicas
└── README.md
```

---

## 🎨 Capturas de Tela

### Desktop
![Desktop View](images/screenshots/desktop.png)

### Mobile
![Mobile View](images/screenshots/mobile.png)

---

## 🌐 SEO e Analytics

### Meta Tags Essenciais

```html
<meta name="description" content="Portfolio de Caio Sampaio - Desenvolvedor Full Stack">
<meta property="og:title" content="Caio Sampaio | Developer">
<meta property="og:image" content="https://seu-site.com/preview.jpg">
<meta name="keywords" content="desenvolvedor, react, node, portfolio">
```

### Google Analytics (Opcional)

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

---

## 📊 Lighthouse Performance

| Métrica | Score |
|---------|-------|
| Performance | 95+ |
| Accessibility | 100 |
| Best Practices | 95+ |
| SEO | 100 |

---

## ✅ Checklist de Lançamento

Antes de publicar seu portfolio:

- [ ] Informações pessoais atualizadas
- [ ] Todos links funcionando (GitHub, LinkedIn, Email)
- [ ] Imagens otimizadas (<200KB cada)
- [ ] Formulário de contato testado
- [ ] Responsividade verificada em 3+ dispositivos
- [ ] SEO meta tags configuradas
- [ ] Favicon adicionado
- [ ] Typos/erros gramaticais corrigidos
- [ ] Lighthouse score verificado
- [ ] Custom domain configurado (opcional)

---

## 🔧 Melhorias Futuras

- [ ] Blog integrado (markdown posts)
- [ ] Modo dark/light toggle
- [ ] Animações mais elaboradas (GSAP, Framer Motion)
- [ ] Seção de certificações
- [ ] Integração com GitHub API (auto-update projetos)
- [ ] Multilíngue (PT/EN)
- [ ] Newsletter signup
- [ ] Analytics dashboard pessoal

---

## 📄 Licença

MIT © 2025 Caio Sampaio - Sinta-se livre para usar como template!

---

## 👨‍💻 Autor

**Caio Sampaio**

[![GitHub](https://img.shields.io/badge/GitHub-CAI0SAMPAI0-181717?logo=github)](https://github.com/CAI0SAMPAI0)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?logo=linkedin)](https://linkedin.com/in/seu-perfil)
[![Email](https://img.shields.io/badge/Email-Contact-D14836?logo=gmail&logoColor=white)](mailto:seu@email.com)

---

## 🙏 Inspirações e Recursos

- [HTML5 Boilerplate](https://html5boilerplate.com/)
- [CSS Tricks](https://css-tricks.com/)
- [Awwwards](https://www.awwwards.com/) - Inspiração de design
- [Dribbble](https://dribbble.com/) - UI/UX references

---

<div align="center">

**⭐ Se gostou, dê uma estrela!**

Made with ❤️ and ☕

</div>
