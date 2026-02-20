import Link from "next/link";
import { modulos } from "@/data/modulos";
import ModuloCard from "@/components/ModuloCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Módulos | Tem Luz Aí?",
  description:
    "7 módulos sobre Poluição Luminosa — com glossário, exemplos e quiz interativo. Aprenda sobre energia, astronomia, fauna e mais.",
};

export default function ModulosPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-indigo-950/60 border border-indigo-800/50 rounded-full px-4 py-1.5 text-indigo-300 text-sm mb-4">
          📚 Conteúdo completo
        </div>
        <h1 className="text-4xl font-black text-white mb-4">Módulos de Estudo</h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          7 módulos baseados na Apostila de Poluição Luminosa. Cada módulo inclui texto principal,
          glossário, exemplos, mini-revisão e quiz interativo.
        </p>
      </div>

      {/* Grid de módulos */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {modulos.map((modulo) => (
          <ModuloCard key={modulo.id} modulo={modulo} />
        ))}
      </div>

      {/* CTA Quiz Geral */}
      <div className="text-center bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-700/30 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-white mb-3">
          Já estudou todos os módulos?
        </h2>
        <p className="text-slate-400 mb-6">
          Teste seus conhecimentos com o Quiz Geral — 20 questões cobrindo todos os temas!
        </p>
        <Link
          href="/quiz"
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-8 py-3 rounded-xl transition-colors text-lg"
        >
          🎯 Iniciar Quiz Geral
        </Link>
      </div>
    </div>
  );
}
export const runtime = 'edge';
