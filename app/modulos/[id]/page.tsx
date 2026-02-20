import { notFound } from "next/navigation";
import Link from "next/link";
import { modulos } from "@/data/modulos";
import Quiz from "@/components/Quiz";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const modulo = modulos.find((m) => m.slug === id);
  if (!modulo) return {};
  return {
    title: `Módulo ${modulo.id}: ${modulo.titulo} | Tem Luz Aí?`,
    description: modulo.resumo,
  };
}

function renderMarkdown(text: string) {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      elements.push(<br key={key++} />);
    } else if (trimmed.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="text-2xl font-bold text-white mt-8 mb-4 border-b border-slate-700 pb-2">
          {trimmed.replace("## ", "")}
        </h2>
      );
    } else if (trimmed.startsWith("### ")) {
      elements.push(
        <h3 key={key++} className="text-xl font-semibold text-indigo-300 mt-6 mb-3">
          {trimmed.replace("### ", "")}
        </h3>
      );
    } else if (trimmed.startsWith("#### ")) {
      elements.push(
        <h4 key={key++} className="text-base font-semibold text-slate-200 mt-4 mb-2">
          {trimmed.replace("#### ", "")}
        </h4>
      );
    } else if (trimmed.startsWith("> ")) {
      elements.push(
        <blockquote key={key++} className="border-l-4 border-indigo-500 pl-4 py-2 bg-slate-800/50 rounded-r-lg my-4 text-slate-300 italic">
          {trimmed.replace("> ", "")}
        </blockquote>
      );
    } else if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      elements.push(
        <li key={key++} className="text-slate-300 ml-4 mb-1 list-disc">
          {trimmed.replace(/^[-*] /, "")}
        </li>
      );
    } else if (/^\d+\. /.test(trimmed)) {
      elements.push(
        <li key={key++} className="text-slate-300 ml-4 mb-1 list-decimal">
          {trimmed.replace(/^\d+\. /, "")}
        </li>
      );
    } else if (trimmed.startsWith("| ")) {
      // Simple table row
      const cells = trimmed.split("|").filter((c) => c.trim() && c.trim() !== "---");
      const isHeader = lines[lines.indexOf(line) + 1]?.includes("---");
      if (isHeader) {
        elements.push(
          <tr key={key++} className="bg-slate-700">
            {cells.map((c, i) => (
              <th key={i} className="px-4 py-2 text-left text-white font-semibold border border-slate-600 text-sm">
                {c.trim()}
              </th>
            ))}
          </tr>
        );
      } else if (!trimmed.includes("---")) {
        elements.push(
          <tr key={key++} className="border-b border-slate-700">
            {cells.map((c, i) => (
              <td key={i} className="px-4 py-2 text-slate-300 border border-slate-700 text-sm">
                {c.trim()}
              </td>
            ))}
          </tr>
        );
      }
    } else {
      // Regular paragraph with basic markdown
      const processed = trimmed
        .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
        .replace(/\*(.+?)\*/g, '<em class="text-slate-200 italic">$1</em>')
        .replace(/`(.+?)`/g, '<code class="bg-slate-700 text-indigo-300 px-1 py-0.5 rounded text-sm font-mono">$1</code>');
      
      elements.push(
        <p
          key={key++}
          className="text-slate-300 leading-relaxed mb-3"
          dangerouslySetInnerHTML={{ __html: processed }}
        />
      );
    }
  }

  // Wrap tables
  const wrapped = [];
  let tableRows: React.ReactNode[] = [];
  let inTable = false;
  for (const el of elements) {
    const elType = (el as React.ReactElement)?.type;
    if (elType === "tr") {
      if (!inTable) {
        inTable = true;
        tableRows = [];
      }
      tableRows.push(el);
    } else {
      if (inTable) {
        wrapped.push(
          <div key={Math.random()} className="overflow-x-auto mb-4">
            <table className="w-full border-collapse text-sm">{tableRows}</table>
          </div>
        );
        inTable = false;
        tableRows = [];
      }
      wrapped.push(el);
    }
  }
  if (inTable && tableRows.length > 0) {
    wrapped.push(
      <div key={Math.random()} className="overflow-x-auto mb-4">
        <table className="w-full border-collapse text-sm">{tableRows}</table>
      </div>
    );
  }

  return wrapped;
}

export default async function ModuloPage({ params }: Props) {
  const { id } = await params;
  const modulo = modulos.find((m) => m.slug === id);
  if (!modulo) notFound();

  const moduloIndex = modulos.findIndex((m) => m.slug === id);
  const anterior = modulos[moduloIndex - 1] || null;
  const proximo = modulos[moduloIndex + 1] || null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-white transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/modulos" className="hover:text-white transition-colors">
          Módulos
        </Link>
        <span>/</span>
        <span className="text-slate-200">
          Módulo {modulo.id}
        </span>
      </nav>

      {/* Header do módulo */}
      <div className={`bg-gradient-to-r ${modulo.cor} rounded-2xl p-8 mb-8`}>
        <div className="flex items-start justify-between mb-4">
          <span className="text-6xl">{modulo.icone}</span>
          <span className="bg-white/20 backdrop-blur-sm text-white font-bold px-3 py-1 rounded-full text-sm">
            Módulo {modulo.id}
          </span>
        </div>
        <h1 className="text-3xl font-black text-white mb-2">{modulo.titulo}</h1>
        <p className="text-white/80 text-lg">{modulo.subtitulo}</p>
      </div>

      {/* Resumo */}
      <div className="bg-slate-800/60 border border-indigo-800/30 rounded-xl p-5 mb-8">
        <p className="text-slate-300 leading-relaxed italic">{modulo.resumo}</p>
      </div>

      {/* Conteúdo principal */}
      <article className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          📖 Conteúdo
        </h2>
        <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
          {renderMarkdown(modulo.conteudo)}
        </div>
      </article>

      {/* Glossário */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-5 flex items-center gap-2">
          📖 Glossário Rápido
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {modulo.glossario.map((item, i) => (
            <div
              key={i}
              className="bg-slate-800/60 border border-slate-700 rounded-xl p-4 hover:border-indigo-500/30 transition-colors"
            >
              <dt className="text-indigo-300 font-bold text-sm mb-1">{item.termo}</dt>
              <dd className="text-slate-400 text-sm leading-relaxed">{item.definicao}</dd>
            </div>
          ))}
        </div>
      </section>

      {/* Exemplos */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-5 flex items-center gap-2">
          💡 Exemplos Práticos
        </h2>
        <div className="space-y-4">
          {modulo.exemplos.map((ex, i) => (
            <div
              key={i}
              className="bg-slate-800/60 border border-slate-700 rounded-xl p-5"
            >
              <h4 className="text-yellow-300 font-semibold mb-2 flex items-center gap-2">
                <span className="bg-yellow-500/20 text-yellow-400 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                  {i + 1}
                </span>
                {ex.titulo}
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">{ex.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mini-revisão */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-5 flex items-center gap-2">
          📝 Mini-Revisão
        </h2>
        <div className="bg-slate-800/60 border border-emerald-800/30 rounded-xl p-5">
          <p className="text-slate-400 text-sm mb-4">
            Os principais pontos deste módulo:
          </p>
          <ul className="space-y-2">
            {modulo.revisao.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                <span className="text-emerald-400 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Quiz do módulo */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-5 flex items-center gap-2">
          🎯 Quiz do Módulo {modulo.id}
        </h2>
        <div className="bg-slate-900/70 border border-slate-700 rounded-xl p-6">
          <Quiz
            questoes={modulo.quiz}
            titulo={`Quiz — ${modulo.titulo}`}
            moduloId={modulo.id}
          />
        </div>
      </section>

      {/* Navegação entre módulos */}
      <nav className="flex justify-between gap-4 pt-6 border-t border-slate-800">
        {anterior ? (
          <Link
            href={`/modulos/${anterior.slug}`}
            className="group flex items-center gap-3 bg-slate-800 border border-slate-700 rounded-xl p-4 hover:border-indigo-500/50 transition-all flex-1"
          >
            <span className="text-2xl">{anterior.icone}</span>
            <div>
              <div className="text-slate-400 text-xs mb-1">← Anterior</div>
              <div className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">
                Módulo {anterior.id}: {anterior.titulo}
              </div>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {proximo ? (
          <Link
            href={`/modulos/${proximo.slug}`}
            className="group flex items-center gap-3 bg-slate-800 border border-slate-700 rounded-xl p-4 hover:border-indigo-500/50 transition-all flex-1 text-right justify-end"
          >
            <div>
              <div className="text-slate-400 text-xs mb-1">Próximo →</div>
              <div className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">
                Módulo {proximo.id}: {proximo.titulo}
              </div>
            </div>
            <span className="text-2xl">{proximo.icone}</span>
          </Link>
        ) : (
          <Link
            href="/quiz"
            className="group flex items-center gap-3 bg-indigo-900/30 border border-indigo-700/50 rounded-xl p-4 hover:border-indigo-500 transition-all flex-1 text-right justify-end"
          >
            <div>
              <div className="text-indigo-400 text-xs mb-1">Concluiu os módulos?</div>
              <div className="text-white text-sm font-medium">
                🎯 Quiz Geral →
              </div>
            </div>
          </Link>
        )}
      </nav>
    </div>
  );
}

export const runtime = 'edge';
export const dynamic = 'force-dynamic';
