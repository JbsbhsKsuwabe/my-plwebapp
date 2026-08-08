# 🌠 Tem Luz Aí? — Site Educacional sobre Poluição Luminosa

Site educacional MVP desenvolvido para o projeto de pesquisa **"Tem Luz Aí? Investigações quanto à presença de abordagens acerca da poluição luminosa nas ementas do ensino básico dos municípios da Região Metropolitana de Salvador"**.

- **Autor:** Joabe Carmo de Santana (IFBA)
- **Orientação:** Gorhan Freitas Noronha (UFBA)
- **Coorientação:** Júlia Oliveira dos Santos (IFBA)
- **Grupo:** CientificAção

---

## 🌐 URLs de Produção

| Destino | URL |
|---------|-----|
| **Produção** | https://tem-luz-ai.pages.dev |
| **Deploy atual** | https://02d98f8d.tem-luz-ai.pages.dev |
| **Sandbox (referência)** | https://3000-i1gzk3k076fcmtc39bb7g-2b54fc91.sandbox.novita.ai/ |

---

## 📋 Funcionalidades Implementadas

### ✅ Navegação
- Navbar fixa com links: Home, Desafio, Módulos, Quiz Geral, Para Professores
- Menu mobile responsivo (hover)
- Rodapé com links rápidos e créditos

### ✅ Home (`/`)
- Mural de destaque com **três convites** (layout responsivo: 3 colunas no desktop, empilhado no mobile):
  - **Professor(a):** link para entrevista semiestruturada (Google Forms)
  - **Desafio Fotográfico:** link para a página `/desafio`
  - **🆕 Público Geral:** link para formulário rápido sobre reconhecimento de PL na cidade
- Conteúdo principal sobre Poluição Luminosa (público geral):
  - O que é PL
  - Os 4 tipos (Glare, Skyglow, Light Trespass, Clutter)
  - Impactos (saúde, fauna, flora)
- Barra de progresso (localStorage)
- Índice lateral de módulos

### ✅ Módulos (`/modulos` e `/modulos/[slug]`)
- Índice com cards dos 7 módulos
- Cada módulo contém texto, glossário, exemplos, mini-revisão e quiz
- Navegação entre módulos (anterior/próximo)

### ✅ Os 7 Módulos
| # | Slug | Título |
|---|------|--------|
| 1 | `introducao` | Introdução à Poluição Luminosa |
| 2 | `gastos-energia` | Gastos com Energia e Eficiência Energética |
| 3 | `observacoes-astronomicas` | Interferência em Observações Astronômicas |
| 4 | `consequencias-socioambientais` | Consequências Socioambientais |
| 5 | `cultura-ceu` | A Cultura Envolvida no Céu |
| 6 | `leis-normas-medidas` | Leis, Normas e Medidas Relacionadas |
| 7 | `conclusoes-propostas` | Conclusões e Propostas |

### ✅ Sistema de Quiz
- Quiz por módulo (8 questões cada) + Quiz Geral (`/quiz`, 20 questões)
- Resultado com pontuação e modo revisão
- **Progresso salvo no localStorage** (`tem_luz_ai_progresso`)

### ✅ Barra de Progresso
- Exibida na Home (sidebar)
- Mostra quizzes completados por módulo + quiz geral
- Salvo no localStorage

### ✅ Desafio Fotográfico (`/desafio`)
- Tutorial de fotografia noturna completo
- Botão "Enviar Minha Foto" → [Google Forms](https://forms.gle/mM4mUtY59ZzoKDYA9)

### ✅ Para Professores (`/para-professores`)
- Convite à pesquisa, índice de módulos com accordion
- Orientações didáticas, perguntas de revisão, conexão com BNCC

---

## 🛠️ Tecnologias

- **Next.js 15.3.0** (App Router, Edge Runtime)
- **TypeScript**
- **Tailwind CSS v4**
- **React 19**
- **@cloudflare/next-on-pages** — build para Cloudflare Pages
- **Wrangler** — deploy e gerenciamento Cloudflare

---

## 🔗 Rotas

| Rota | Descrição |
|------|-----------|
| `/` | Home — Mural + Conteúdo Geral |
| `/modulos` | Índice dos 7 módulos |
| `/modulos/[slug]` | Módulo individual |
| `/desafio` | Desafio fotográfico |
| `/para-professores` | Área educativa para professores |
| `/quiz` | Quiz geral (20 questões) |

---

## 📝 Links de Formulários

- **Entrevista para Professores:** https://docs.google.com/forms/d/e/1FAIpQLSdpSUsaZ5vPI0m6CtxzmgR4cpSHmqB69vZpurNoNpHYd9-5AA/viewform
- **Envio de Fotos:** https://forms.gle/mM4mUtY59ZzoKDYA9
- **🆕 Pesquisa Público Geral:** https://forms.gle/RE1v5BR1RsJHCkVW9

---

## 🚀 Como Rodar Localmente

```bash
# Clonar o repositório
git clone <URL_DO_REPOSITORIO>
cd webapp

# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev
# Abrir: http://localhost:3000
```

### Build para Cloudflare Pages

```bash
# Build completo (Next.js → Cloudflare Workers)
npm run build:cf

# Deploy para produção
npm run deploy:prod
```

---

## ✅ Verificações Automatizadas

Scripts na pasta `scripts/` garantem integridade do deploy:

```bash
# Verifica se a Home retorna HTML correto (não favicon/imagem)
npm run verify              # testa https://tem-luz-ai.pages.dev
npm run verify:local        # testa http://localhost:3000

# Corrige bug do @cloudflare/next-on-pages (rota / → favicon)
node scripts/fix-cloudflare-routes.mjs
```

### Checklist Manual de Verificação

Após cada deploy, confirme:

- [ ] `curl -si https://tem-luz-ai.pages.dev/ | grep content-type` retorna `text/html`
- [ ] Abrir `https://tem-luz-ai.pages.dev/` mostra a página "Tem Luz Aí?" (não favicon)
- [ ] 3 cards visíveis no mural: Professor, Desafio Fotográfico, Público Geral
- [ ] Card "Público Geral" tem link `https://forms.gle/RE1v5BR1RsJHCkVW9` com `target="_blank"`
- [ ] Barra de progresso aparece na sidebar (pode estar vazia se não há progresso salvo)
- [ ] Todas as rotas acessíveis: `/`, `/modulos`, `/modulos/introducao`, `/desafio`, `/quiz`, `/para-professores`
- [ ] `npm run verify` retorna 8/8 testes passando

---

## 🐛 Bug Histórico: Rota `/` servindo `favicon.ico`

**Causa:** O `@cloudflare/next-on-pages` processa o `favicon.ico` gerado pelo Next.js App Router (em `app/favicon.ico`) e, por um bug interno, sobrescrevia o mapeamento da rota `"/"` com o do favicon.

**Sintoma:** `curl -si https://tem-luz-ai.pages.dev/ | head` mostrava `Content-Type: image/x-icon`.

**Correção aplicada:**
1. `favicon.ico` movido de `app/` → `public/` (resolução permanente)
2. Script `scripts/fix-cloudflare-routes.mjs` como salvaguarda adicional

---

## 📁 Estrutura de Pastas

```
webapp/
├── app/
│   ├── page.tsx              # Home (3 cards no mural)
│   ├── layout.tsx            # Layout global + Navbar
│   ├── globals.css           # Estilos globais
│   ├── modulos/page.tsx      # Índice de módulos
│   ├── modulos/[id]/page.tsx # Módulo individual (edge runtime)
│   ├── desafio/page.tsx      # Desafio fotográfico
│   ├── para-professores/page.tsx
│   └── quiz/page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Quiz.tsx              # "use client" — hooks React
│   ├── ProgressoBar.tsx      # "use client" — localStorage
│   └── ModuloCard.tsx
├── data/
│   ├── modulos.ts            # 7 módulos completos (~100KB)
│   └── quizGeral.ts          # 20 questões do quiz geral
├── public/
│   └── favicon.ico           # favicon (movido de app/ para corrigir bug)
├── scripts/
│   ├── fix-cloudflare-routes.mjs  # Correção do bug rota / → favicon
│   └── verify-home-route.mjs      # Verificação automatizada (8 testes)
├── next.config.ts
├── wrangler.jsonc
└── package.json
```

---

## ⚠️ Pendências

### Conteúdo
- [ ] Quizzes expandidos (8→12 questões por módulo)
- [ ] Quiz Geral expandido (20→25 questões)
- [ ] Galeria do Desafio (aguardando fotos submetidas)

### Técnico
- [ ] SEO: Open Graph com imagem própria
- [ ] Menu mobile: melhorar com state React para touch
- [ ] Busca por conteúdo nos módulos

---

## 📚 Fontes dos Documentos de Pesquisa

Todo o conteúdo foi extraído exclusivamente dos seguintes arquivos do projeto:
(Todos os Documentos podem ser encontrados na pasta "Joabe")

1. **Apostila PL.docx** — Base principal de conteúdo dos 7 módulos
2. **Revisão da PL FINALIZADO'.docx** — Revisão bibliográfica complementar
3. **Apresentação dos Objetivos do Projeto.pdf** — Contexto e objetivos
4. **Minha Proposta De Intervenção.pdf** — Proposta de Ciências Urbanas + conexões BNCC
5. **Entrevista Semiestruturada Versão Entrevistador.pdf** — Instrumento de pesquisa
6. **Roteiro da Entrevista Semiestruturada** — Versões original e validada
7. **Busca por Palavras-Chave na BNCC.pdf** — Análise BNCC
8. **Diário de Bordo (Registros 0-12)** — Processo de pesquisa
