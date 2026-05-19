# Estrutura do Projeto Neovate Systems

## Organização de Pastas Recomendada

### `/assets/` — Recursos Estáticos

```
assets/
├── images/           # Imagens do projeto (PNG, JPG, WebP)
│   ├── hero-mockup.png
│   ├── trajetto-screenshot.png
│   └── team-photos/
│       ├── membro-1.jpg
│       ├── membro-2.jpg
│       └── ...
├── icons/           # Ícones e SVGs reutilizáveis
│   ├── logo.svg
│   ├── nav-icons.svg
│   └── social-media.svg
├── fonts/           # Fontes customizadas (se houver)
│   ├── custom-font.woff2
│   └── custom-font.woff
└── animations/      # Arquivos de animação (Lottie JSON, etc)
    └── loading-animation.json
```

### `/css/` — Estilos

```
css/
├── styles.css       # CSS principal (atualmente tudo em um arquivo)
│                    # Possível dividir em:
│                    # - reset.css (reset e variáveis)
│                    # - components.css (botões, cards, etc)
│                    # - sections.css (seções específicas)
│                    # - responsive.css (media queries)
└── responsive.css   # Media queries (opcional, separado)
```

### `/js/` — Scripts

```
js/
├── script.js        # Script principal
│                    # Possível dividir em:
│                    # - menu.js (menu mobile)
│                    # - scroll-reveal.js (animações)
│                    # - form.js (validação de formulário)
│                    # - analytics.js (rastreamento)
├── utils.js         # Funções utilitárias reutilizáveis
└── config.js        # Configurações globais
```

## Próximas Melhorias Sugeridas

### 1. **Modularizar CSS**
Dividir `styles.css` em arquivos menores e importar com `@import`:
```css
@import url('reset.css');
@import url('components.css');
@import url('sections.css');
@import url('responsive.css');
```

### 2. **Modularizar JavaScript**
Usar módulos ES6 com `import/export`:
```javascript
// script.js
import { toggleMenu } from './modules/menu.js';
import { setupScrollReveal } from './modules/scroll-reveal.js';
```

### 3. **Adicionar Build Tool (opcional)**
- **Webpack** — Bundlear CSS e JS
- **Vite** — Build tool mais rápido
- **Gulp** — Automatizar tarefas

### 4. **Otimizações de Performance**
- Minificar CSS e JS
- Compactar imagens (TinyPNG, ImageOptim)
- Lazy loading de imagens
- Service Worker para PWA

### 5. **Versionamento**
```
├── v1.0/
│   ├── index.html
│   ├── css/
│   ├── js/
│   └── assets/
└── current/ → index.html
```

## Convenções de Nomenclatura

### Arquivos HTML
- Nome descritivo: `index.html`, `about.html`
- Sempre minúsculo, sem espaços

### Arquivos CSS
- Escopo por componente: `button.css`, `card.css`
- Classes com BEM: `.card__header`, `.card__title`

### Arquivos JavaScript
- Ação em camelCase: `toggleMenu()`, `setupScrollReveal()`
- Constantes em UPPER_CASE: `MAX_WIDTH = 1200`

### Assets
- Descritivos: `logo-neovate.svg`, `team-lucas.jpg`
- Sem caracteres especiais (exceto hífen)
- Sempre minúsculo

## Fluxo de Desenvolvimento

1. **Criação** → Editar `index.html`, `css/styles.css`, `js/script.js`
2. **Teste Local** → Abrir `index.html` no navegador
3. **Adicionar Assets** → Colocar em `/assets/`
4. **Atualizar Referências** → Caminho relativo: `assets/images/file.jpg`
5. **Deploy** → Fazer upload para servidor web

## Links Úteis

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [JavaScript Info](https://javascript.info/)
- [Google Fonts](https://fonts.google.com/)
