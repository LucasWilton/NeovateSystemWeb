# Neovate Systems

Projeto web moderno e responsivo para a Neovate Systems — Software que transforma.

## Estrutura de Pastas

```
Projeto Fabrica de Software/
├── index.html              # Arquivo principal HTML
├── css/
│   └── styles.css         # Estilos globais (CSS)
├── js/
│   └── script.js          # Scripts JavaScript
├── assets/                # Pasta para imagens, ícones e outros arquivos
│   ├── images/           # Imagens do projeto
│   ├── icons/            # Ícones e SVGs
│   └── fonts/            # Fontes customizadas (opcional)
└── README.md             # Este arquivo
```

## Como Usar

1. **Abra o arquivo `index.html`** no navegador
2. O arquivo carrega automaticamente:
   - `css/styles.css` → Estilos da página
   - `js/script.js` → Funcionalidades interativas

## Seções da Página

- **Hero** — Apresentação principal com chamada para ação
- **Sobre** — Informações sobre a Neovate Systems
- **Trajetto** — Apresentação do produto principal
- **Funcionalidades** — Recursos do Trajetto
- **Stack Tecnológica** — Tecnologias utilizadas
- **Equipe** — Membros da equipe
- **Contato** — Formulário de contato
- **Footer** — Rodapé com links e informações

## Funcionalidades JavaScript

- **Menu Mobile** — Abertura/fechamento do menu em dispositivos móveis
- **Scroll Reveal** — Animações ao rolar a página
- **Active Navigation** — Destaque de seção ativa na navegação
- **Formulário de Contato** — Validação e envio de mensagens

## Customizações

### Adicionar Imagens

Coloque imagens na pasta `assets/images/` e referencie no HTML:
```html
<img src="assets/images/sua-imagem.jpg" alt="Descrição">
```

### Modificar Cores

As cores principais estão definidas em `css/styles.css` na seção `:root`:
```css
:root {
  --accent: #3b82f6;      /* Azul principal */
  --accent2: #06b6d4;     /* Ciano */
  --green: #10b981;       /* Verde */
  /* ... outras cores */
}
```

### Adicionar Novas Seções

Crie uma nova `<section>` no `index.html` e adicione os estilos correspondentes em `css/styles.css`.

## Compatibilidade

- ✅ Chrome/Edge (versões recentes)
- ✅ Firefox (versões recentes)
- ✅ Safari (versões recentes)
- ✅ Responsivo em dispositivos móveis

## Performance

- CSS minificado em uma única folha
- JavaScript otimizado e sem dependências externas
- Uso de CSS variables para fácil customização
- Google Fonts integradas (Montserrat, DM Sans)

## Licença

© 2026 Neovate Systems. Todos os direitos reservados.
