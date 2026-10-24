import Link from "next/link";
import { modulos } from "@/data/modulos";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Para Professores | Tem Luz Aí?",
  description:
    "Materiais educativos completos sobre Poluição Luminosa para professores — orientações didáticas, gabaritos comentados, conexão com a BNCC e propostas de atividades.",
};

function renderTextBlock(text: string) {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      elements.push(<div key={key++} className="h-2" />);
    } else if (trimmed.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="text-xl font-bold text-white mt-6 mb-3 border-b border-slate-700 pb-2">
          {trimmed.replace("## ", "")}
        </h2>
      );
    } else if (trimmed.startsWith("### ")) {
      elements.push(
        <h3 key={key++} className="text-base font-semibold text-indigo-300 mt-4 mb-2">
          {trimmed.replace("### ", "")}
        </h3>
      );
    } else if (trimmed.startsWith("#### ")) {
      elements.push(
        <h4 key={key++} className="text-sm font-semibold text-slate-200 mt-3 mb-1">
          {trimmed.replace("#### ", "")}
        </h4>
      );
    } else if (trimmed.startsWith("- ") || trimmed.startsWith("* ") || trimmed.startsWith("● ")) {
      elements.push(
        <li key={key++} className="text-slate-300 text-sm ml-4 mb-1 list-disc">
          {trimmed.replace(/^[-*●] /, "")}
        </li>
      );
    } else if (/^\d+[\)\.] /.test(trimmed)) {
      elements.push(
        <li key={key++} className="text-slate-300 text-sm ml-4 mb-1 list-decimal">
          {trimmed.replace(/^\d+[\)\.] /, "")}
        </li>
      );
    } else {
      const processed = trimmed
        .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>');
      elements.push(
        <p
          key={key++}
          className="text-slate-300 text-sm leading-relaxed mb-2"
          dangerouslySetInnerHTML={{ __html: processed }}
        />
      );
    }
  }

  return elements;
}

export default function ParaProfessoresPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 bg-blue-950/60 border border-blue-800/50 rounded-full px-4 py-1.5 text-blue-300 text-sm mb-4">
          👩‍🏫 Acesso público e gratuito
        </div>
        <h1 className="text-4xl font-black text-white mb-4">Para Professores</h1>
        <p className="text-slate-400 text-lg max-w-3xl">
          Material educativo completo sobre Poluição Luminosa — orientações didáticas, textos
          aprofundados, gabaritos comentados, atividades práticas e conexão com a BNCC para cada
          módulo.
        </p>
      </div>

      {/* Índice de módulos */}
      <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-6 mb-10">
        <h2 className="text-white font-bold text-lg mb-4">📚 Índice dos Módulos</h2>
        <div className="grid sm:grid-cols-2 gap-2">
          {modulos.map((m) => (
            <a
              key={m.id}
              href={`#modulo-${m.id}`}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-700/50 transition-colors group"
            >
              <span className="text-2xl">{m.icone}</span>
              <div>
                <div className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">
                  Módulo {m.id}: {m.titulo}
                </div>
                <div className="text-slate-500 text-xs">{m.subtitulo}</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Downloads e Referências */}
      <div className="bg-slate-800/40 border border-emerald-700/30 rounded-2xl p-6 mb-12">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <h2 className="text-white font-bold text-lg flex items-center gap-2">
            📥 Downloads e Referências
          </h2>
          <a
            href="https://drive.google.com/drive/folders/1rzp-7sb0mTKkx9WTD6kVc3yBCvVaODcc?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-4 py-2 rounded-xl transition-colors text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 87.3 78" fill="currentColor" className="flex-shrink-0">
              <path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8H0c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/>
              <path d="M43.65 25L29.9 1.2C28.55 2 27.4 3.1 26.6 4.5L1.2 48.5C.4 49.9 0 51.45 0 53h27.5z" fill="#00ac47"/>
              <path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5H60.1l5.85 11.2z" fill="#ea4335"/>
              <path d="M43.65 25L57.4 1.2C56.05.4 54.5 0 52.95 0H34.35c-1.55 0-3.1.4-4.45 1.2z" fill="#00832d"/>
              <path d="M60.1 53H27.5L13.75 76.8c1.35.8 2.9 1.2 4.45 1.2h50.9c1.55 0 3.1-.4 4.45-1.2z" fill="#2684fc"/>
              <path d="M73.4 26.5l-12.65-21.9C59.95 3.2 58.8 2.1 57.45 1.3L43.7 25 60.1 53h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/>
            </svg>
            Baixar material no Google Drive
          </a>
        </div>
        <p className="text-slate-400 text-sm mb-5">
          Materiais do projeto de pesquisa disponíveis para consulta e download:
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            {
              nome: "Apostila PL",
              desc: "Abordagem geral da poluição luminosa dentro de seus principais tópicos",
              autor: "Joabe Carmo de Santana",
              tipo: "Apostila",
            },
            {
              nome: "Revisão da PL",
              desc: "Revisão bibliográfica completa sobre poluição luminosa",
              autor: "Joabe Carmo de Santana",
              tipo: "Revisão",
            },
            {
              nome: "Busca por Palavras-Chave na BNCC",
              desc: "Análise das ocorrências de termos relacionados à PL na Base Nacional Curricular",
              autor: "Joabe Carmo de Santana",
              tipo: "BNCC",
            },
            {
              nome: "Análise da BNCC",
              desc: "Análise sistemática das competências e habilidades relacionáveis à PL na BNCC",
              autor: "Joabe Carmo de Santana",
              tipo: "BNCC",
            },
            {
              nome: "Proposta de Intervenção",
              desc: "Proposta de criação da disciplina interdisciplinar 'Ciências Urbanas'",
              autor: "Joabe Carmo de Santana",
              tipo: "Proposta",
            },
            {
              nome: "Roteiro de Entrevista Semiestruturada",
              desc: "Instrumento de pesquisa para entrevistas com professores sobre PL",
              autor: "Joabe Carmo de Santana",
              tipo: "Instrumento",
            },
            {
              nome: "Entrevista — Versão Entrevistador",
              desc: "Roteiro completo para aplicação da entrevista semiestruturada",
              autor: "Joabe Carmo de Santana",
              tipo: "Instrumento",
            },
            {
              nome: "Revisão Geral do Projeto",
              desc: "Revisão geral sobre o projeto de pesquisa 'Tem Luz Aí?'",
              autor: "Joabe Carmo de Santana",
              tipo: "Revisão",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex gap-3 bg-slate-700/30 border border-slate-600 rounded-xl p-4"
            >
              <div className="flex-shrink-0">
                <span
                  className={`inline-block px-2 py-0.5 rounded text-xs font-bold ${
                    item.tipo === "BNCC"
                      ? "bg-blue-700/40 text-blue-300"
                      : item.tipo === "Instrumento"
                      ? "bg-orange-700/40 text-orange-300"
                      : item.tipo === "Proposta"
                      ? "bg-emerald-700/40 text-emerald-300"
                      : "bg-indigo-700/40 text-indigo-300"
                  }`}
                >
                  {item.tipo}
                </span>
              </div>
              <div>
                <div className="text-white text-sm font-medium mb-1">{item.nome}</div>
                <div className="text-slate-400 text-xs mb-1">{item.desc}</div>
                <div className="text-slate-500 text-xs">Autor: {item.autor}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-slate-500 text-xs mt-4 italic">
          * Os documentos originais (DOCX e PDF) estão disponíveis no repositório do projeto no GitHub.
          Acesse o link acima para baixar os materiais completos.
        </p>
      </div>

      {/* Conteúdo por módulo */}
      {modulos.map((modulo) => (
        <ModuloSection key={modulo.id} modulo={modulo} />
      ))}
    </div>
  );
}

function ModuloSection({ modulo }: { modulo: (typeof modulos)[0] }) {
  return (
    <section
      id={`modulo-${modulo.id}`}
      className="mb-16 scroll-mt-20"
    >
      {/* Header do módulo */}
      <div className={`bg-gradient-to-r ${modulo.cor} rounded-2xl p-6 mb-6`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-4xl">{modulo.icone}</span>
            <div>
              <div className="text-white/70 text-sm font-medium">Módulo {modulo.id}</div>
              <h2 className="text-white text-2xl font-bold">{modulo.titulo}</h2>
              <p className="text-white/80 text-sm">{modulo.subtitulo}</p>
            </div>
          </div>
          <Link
            href={`/modulos/${modulo.slug}`}
            className="hidden sm:flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white text-sm font-medium px-4 py-2 rounded-xl transition-colors"
          >
            📖 Ver módulo
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        {/* Texto Completo */}
        <Accordion titulo="📖 Texto Completo" defaultOpen>
          <div className="space-y-1">
            {renderTextBlock(modulo.textoCompleto)}
          </div>
        </Accordion>

        {/* Orientações Didáticas */}
        <Accordion titulo="🎓 Orientações Didáticas">
          <div className="space-y-1">
            {renderTextBlock(modulo.orientacoesDidaticas)}
          </div>
        </Accordion>

        {/* Perguntas de Revisão */}
        <Accordion titulo={`❓ Perguntas de Revisão (${modulo.perguntasRevisao.length})`}>
          <div className="space-y-4">
            {modulo.perguntasRevisao.map((pq, i) => (
              <div key={i} className="bg-slate-700/40 rounded-xl p-4">
                <p className="text-white font-medium text-sm mb-3">
                  {i + 1}. {pq.pergunta}
                </p>
                <div className="bg-emerald-900/30 border border-emerald-700/30 rounded-lg p-3">
                  <p className="text-emerald-200 text-xs font-semibold mb-1">✓ Gabarito:</p>
                  <p className="text-emerald-100 text-sm leading-relaxed">{pq.gabarito}</p>
                </div>
              </div>
            ))}
          </div>
        </Accordion>

        {/* Atividade Prática */}
        <Accordion titulo="🔬 Atividade Prática">
          <div className="space-y-1">
            {renderTextBlock(modulo.atividadePratica)}
          </div>
        </Accordion>

        {/* Conexão BNCC */}
        <Accordion titulo="📋 Conexão com a BNCC">
          <div className="space-y-1">
            {renderTextBlock(modulo.conexaoBNCC)}
          </div>
        </Accordion>

        {/* Quiz */}
        <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <span>🎯</span>
              <span>
                Quiz com <strong className="text-white">{modulo.quiz.length} questões</strong> disponível no
                módulo
              </span>
            </div>
            <Link
              href={`/modulos/${modulo.slug}#quiz`}
              className="text-indigo-400 hover:text-indigo-300 text-sm transition-colors"
            >
              Ver quiz →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Accordion({
  titulo,
  children,
  defaultOpen = false,
}: {
  titulo: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  return (
    <details
      className="bg-slate-800/40 border border-slate-700 rounded-xl overflow-hidden group"
      open={defaultOpen}
    >
      <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-slate-700/30 transition-colors select-none">
        <span className="text-white font-semibold text-sm">{titulo}</span>
        <span className="text-slate-400 text-sm transition-transform group-open:rotate-180">
          ▼
        </span>
      </summary>
      <div className="px-5 pb-5 pt-2 border-t border-slate-700">{children}</div>
    </details>
  );
}
export const runtime = 'edge';
