"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { modulos, Modulo } from "@/data/modulos";

function highlight(text: string, query: string): string {
  if (!query.trim()) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return text.replace(
    new RegExp(`(${escaped})`, "gi"),
    '<mark class="bg-yellow-400/30 text-yellow-200 rounded px-0.5">$1</mark>'
  );
}

function truncateAround(text: string, query: string, radius = 80): string {
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text.slice(0, 160) + "…";
  const start = Math.max(0, idx - radius);
  const end = Math.min(text.length, idx + query.length + radius);
  return (start > 0 ? "…" : "") + text.slice(start, end) + (end < text.length ? "…" : "");
}

function matchesQuery(modulo: Modulo, q: string): boolean {
  const lq = q.toLowerCase();
  return (
    modulo.titulo.toLowerCase().includes(lq) ||
    modulo.subtitulo.toLowerCase().includes(lq) ||
    modulo.resumo.toLowerCase().includes(lq) ||
    modulo.conteudo.toLowerCase().includes(lq) ||
    modulo.glossario.some(
      (g) => g.termo.toLowerCase().includes(lq) || g.definicao.toLowerCase().includes(lq)
    ) ||
    modulo.revisao.some((r) => r.toLowerCase().includes(lq))
  );
}

function getSnippet(modulo: Modulo, q: string): string {
  const lq = q.toLowerCase();
  if (modulo.resumo.toLowerCase().includes(lq))
    return truncateAround(modulo.resumo, q);
  if (modulo.conteudo.toLowerCase().includes(lq))
    return truncateAround(modulo.conteudo.replace(/#{1,4} /g, ""), q);
  const gMatch = modulo.glossario.find(
    (g) => g.termo.toLowerCase().includes(lq) || g.definicao.toLowerCase().includes(lq)
  );
  if (gMatch) return `📖 ${gMatch.termo}: ${truncateAround(gMatch.definicao, q)}`;
  return modulo.resumo.slice(0, 160) + "…";
}

export default function ModulosBusca() {
  const [query, setQuery] = useState("");

  const resultados = useMemo(() => {
    const q = query.trim();
    if (!q) return modulos;
    return modulos.filter((m) => matchesQuery(m, q));
  }, [query]);

  const buscando = query.trim().length > 0;

  return (
    <div>
      {/* Campo de busca */}
      <div className="relative mb-8">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <svg
            className="w-5 h-5 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar em todos os módulos — ex: skyglow, BNCC, melatonina…"
          className="w-full bg-slate-800 border border-slate-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder-slate-400 text-sm outline-none transition-all"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            aria-label="Limpar busca"
            className="absolute inset-y-0 right-4 flex items-center text-slate-400 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Resultado da busca */}
      {buscando && (
        <p className="text-slate-400 text-sm mb-5">
          {resultados.length === 0
            ? "Nenhum módulo encontrado para"
            : `${resultados.length} módulo${resultados.length > 1 ? "s" : ""} encontrado${resultados.length > 1 ? "s" : ""} para`}{" "}
          <span className="text-white font-semibold">&ldquo;{query}&rdquo;</span>
        </p>
      )}

      {/* Grid de cards */}
      {resultados.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {resultados.map((modulo) => (
            <Link
              key={modulo.id}
              href={`/modulos/${modulo.slug}`}
              className="group block bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1"
            >
              {/* Header colorido */}
              <div className={`bg-gradient-to-r ${modulo.cor} p-5`}>
                <div className="flex items-start justify-between">
                  <span className="text-4xl">{modulo.icone}</span>
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded-full">
                    Módulo {modulo.id}
                  </span>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-5">
                <h3
                  className="text-white font-bold text-lg mb-1 group-hover:text-indigo-300 transition-colors"
                  dangerouslySetInnerHTML={{
                    __html: buscando ? highlight(modulo.titulo, query) : modulo.titulo,
                  }}
                />
                <p
                  className="text-slate-400 text-sm mb-3"
                  dangerouslySetInnerHTML={{
                    __html: buscando ? highlight(modulo.subtitulo, query) : modulo.subtitulo,
                  }}
                />

                {/* Snippet com contexto da busca */}
                <p
                  className="text-slate-300 text-sm leading-relaxed line-clamp-3"
                  dangerouslySetInnerHTML={{
                    __html: buscando
                      ? highlight(getSnippet(modulo, query), query)
                      : modulo.resumo,
                  }}
                />

                {/* Footer */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-700">
                  <div className="flex gap-3 text-xs text-slate-400">
                    <span>📖 {modulo.glossario.length} termos</span>
                    <span>🎯 {modulo.quiz.length} questões</span>
                  </div>
                  <span className="text-indigo-400 text-sm group-hover:text-indigo-300 font-medium">
                    Estudar →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-slate-500">
          <p className="text-4xl mb-3">🔭</p>
          <p className="text-lg font-medium text-slate-400">Nenhum resultado encontrado</p>
          <p className="text-sm mt-1">Tente palavras diferentes — ex: &ldquo;energia&rdquo;, &ldquo;astronomia&rdquo;, &ldquo;fauna&rdquo;</p>
          <button
            onClick={() => setQuery("")}
            className="mt-4 text-indigo-400 hover:text-indigo-300 text-sm underline"
          >
            Ver todos os módulos
          </button>
        </div>
      )}
    </div>
  );
}
