# 🌠 Tem Luz Aí? — Site Educacional sobre Poluição Luminosa

Site educacional MVP desenvolvido para o projeto de pesquisa **"Tem Luz Aí? Investigações quanto à presença de abordagens acerca da poluição luminosa nas ementas do ensino básico dos municípios da Região Metropolitana de Salvador"**.

- **Autor:** Joabe Carmo de Santana (IFBA)
- **Orientação:** Gorhan Freitas Noronha (UFBA)
- **Coorientação:** Júlia Oliveira dos Santos (IFBA)
- **Grupo:** CientificAção

---

## 📋 Funcionalidades Implementadas

### ✅ Navegação
- Navbar fixa com links: Home, Desafio, Módulos, Quiz Geral, Para Professores
- Menu mobile responsivo (hover)
- Rodapé com links rápidos e créditos

### ✅ Home (`/`)
- Mural de destaque com dois convites:
  - **Professor(a):** link para entrevista semiestruturada (Google Forms)
  - **Desafio Fotográfico:** link para a página `/desafio`
- Conteúdo principal sobre Poluição Luminosa (público geral):
  - O que é PL
  - Os 4 tipos (Glare, Skyglow, Light Trespass, Clutter)
  - Impactos (saúde, fauna, flora)
- Barra de progresso (localStorage)
- Índice lateral de módulos

### ✅ Módulos (`/modulos` e `/modulos/[slug]`)
- Índice com cards dos 7 módulos
- Cada módulo contém:
  - Texto principal
  - Glossário rápido
  - Exemplos práticos
  - Mini-revisão
  - Quiz interativo (8 questões por módulo)
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
- Quiz por módulo (8 questões cada)
- Quiz Geral em `/quiz` (20 questões)
- Tipos: Múltipla escolha e Verdadeiro/Falso
- Cada questão tem enunciado, alternativas, resposta e explicação
- Navegação por questões com índice visual
- Resultado com pontuação e percentual
- Modo revisão após finalizar
- **Progresso salvo no localStorage**

### ✅ Barra de Progresso
- Exibida na Home (sidebar)
- Mostra quizzes completados por módulo + quiz geral
- Clicável: leva ao módulo correspondente
- Salvo no localStorage (`tem_luz_ai_progresso`)

### ✅ Desafio Fotográfico (`/desafio`)
- Explicação completa de como funciona
- Critérios de avaliação (impacto da PL, estrelas visíveis, qualidade, criatividade)
- Tutorial de fotografia noturna:
  - Modo PRO (exposição longa, ISO alto)
  - Estabilidade e dicas
  - Recomendação: DeepSkyCamera (sem Modo PRO)
  - Edição básica com Snapseed
- Política de uso das fotos
- Botão "Enviar Minha Foto" → [Google Forms](https://forms.gle/mM4mUtY59ZzoKDYA9)

### ✅ Para Professores (`/para-professores`)
- Convite à pesquisa (entrevista)
- Índice de módulos com âncoras
- Para cada módulo (em accordion expansível):
  - Texto completo
  - Orientações didáticas
  - Perguntas de revisão com gabarito comentado
  - Atividade prática
  - Conexão com a BNCC
  - Link para o quiz do módulo
- Seção de downloads/referências listando todos os documentos do projeto

---

## 🛠️ Tecnologias

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **React 19**

---

## 🚀 Como Rodar Localmente

### Pré-requisitos
- Node.js 18+
- npm

### Instalação

```bash
# Clonar o repositório
git clone <URL_DO_REPOSITORIO>
cd webapp

# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Abrir no navegador
# http://localhost:3000
```

### Build de produção

```bash
npm run build
npm start
```

---

## 📁 Estrutura de Pastas

```
webapp/
├── app/
│   ├── page.tsx              # Home
│   ├── layout.tsx            # Layout global + Navbar
│   ├── globals.css           # Estilos globais
│   ├── modulos/
│   │   ├── page.tsx          # Índice de módulos
│   │   └── [id]/
│   │       └── page.tsx      # Módulo individual
│   ├── desafio/
│   │   └── page.tsx          # Desafio fotográfico
│   ├── para-professores/
│   │   └── page.tsx          # Área para professores
│   └── quiz/
│       └── page.tsx          # Quiz geral
├── components/
│   ├── Navbar.tsx            # Barra de navegação
│   ├── Quiz.tsx              # Componente de quiz
│   ├── ProgressoBar.tsx      # Barra de progresso
│   └── ModuloCard.tsx        # Card de módulo
├── data/
│   ├── modulos.ts            # Conteúdo completo dos 7 módulos
│   └── quizGeral.ts          # 20 questões do quiz geral
└── public/                   # Assets estáticos
```

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

## 📝 Links Importantes

- **Entrevista para Professores:** https://docs.google.com/forms/d/e/1FAIpQLSdpSUsaZ5vPI0m6CtxzmgR4cpSHmqB69vZpurNoNpHYd9-5AA/viewform
- **Envio de Fotos:** https://forms.gle/mM4mUtY59ZzoKDYA9

---

## ⚠️ Lista de Pendências (MVP)

### Conteúdo
- [ ] **Quizzes expandidos:** O sistema suporta mais questões — os módulos 1-7 têm atualmente 8 questões cada (o mínimo solicitado era 8-12). Podem ser expandidos para 12.
- [ ] **Quiz Geral expandido:** Atualmente com 20 questões. Pode ser expandido até 25.
- [ ] **Conteúdo Para Professores — perguntas de revisão:** Módulos mais simples têm ~3-5 perguntas. O solicitado era 10-20. **[PREENCHER com perguntas adicionais por módulo]**
- [ ] **Galeria do Desafio:** Ainda não implementada (prevista para versão futura quando houver fotos submetidas).
- [ ] **Mural das 10 melhores fotos:** Previsto para versão futura.

### Técnico
- [ ] **SEO avançado:** Open Graph com imagem, Twitter Card
- [ ] **Favicon personalizado:** Usar ícone do projeto
- [ ] **Animações de estrelas:** As estrelas na Home usam `Math.random()` — isso pode gerar inconsistência entre SSR e CSR; pode ser movido para um componente `"use client"` se necessário.
- [ ] **Menu mobile:** Atualmente usa CSS hover, pode ser melhorado com state React para melhor acessibilidade em touch.
- [ ] **Busca:** Sistema de busca por conteúdo nos módulos e glossário.
- [ ] **Modo claro/escuro:** Atualmente apenas dark mode.

### Conteúdo Faltante (marcado como [PREENCHER])
- Nenhum `[PREENCHER]` explícito foi encontrado, mas os seguintes conteúdos podem ser aprofundados:
  - Análise detalhada da BNCC (o arquivo "Análise da BNCC -Ver. 1-.pdf" está incompleto)
  - Categorização de Bardin (arquivo Anexo_I_Categorizacao_PL_Bardin.docx)
  - Resultados das entrevistas (quando disponíveis)

---

## 📚 Fontes dos Documentos de Pesquisa

Todo o conteúdo foi extraído exclusivamente dos seguintes arquivos do projeto:

1. **Apostila PL.docx** — Base principal de conteúdo dos 7 módulos
2. **Revisão da PL FINALIZADO'.docx** — Revisão bibliográfica complementar
3. **Apresentação dos Objetivos do Projeto.pdf** — Contexto e objetivos
4. **Minha Proposta De Intervenção.pdf** — Proposta de Ciências Urbanas + conexões BNCC
5. **Entrevista Semiestruturada Versão Entrevistador.pdf** — Instrumento de pesquisa
6. **Roteiro da Entrevista Semiestruturada (Para Validar).pdf** — Versão validada
7. **Roteiro da Entrevista Semiestruturada (Original).pdf** — Versão original
8. **Busca por Palavras-Chave na BNCC.pdf** — Análise BNCC
9. **Análise da BNCC -Ver. 1-.pdf** — Análise completa BNCC
10. **Minha Revisão Geral Sobre Meu Projeto.docx** — Revisão geral do projeto
11. **Diário de Bordo (Registros 0-12)** — Processo de pesquisa
