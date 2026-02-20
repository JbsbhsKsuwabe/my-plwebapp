import type { Metadata } from "next";
import Link from "next/link";
import { quizGeral } from "@/data/quizGeral";
import Quiz from "@/components/Quiz";

export const metadata: Metadata = {
  title: "Quiz Geral | Tem Luz Aí?",
  description: "Teste seus conhecimentos sobre Poluição Luminosa com 20 questões cobrindo todos os módulos.",
};

export default function QuizGeralPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="text-6xl mb-4">🎯</div>
        <h1 className="text-4xl font-black text-white mb-3">Quiz Geral</h1>
        <p className="text-slate-400 text-lg max-w-xl mx-auto">
          Teste seus conhecimentos sobre todos os 7 módulos de Poluição Luminosa!
        </p>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-4 text-center">
          <div className="text-3xl font-bold text-indigo-400 mb-1">{quizGeral.length}</div>
          <div className="text-slate-400 text-sm">Questões</div>
        </div>
        <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-4 text-center">
          <div className="text-3xl font-bold text-emerald-400 mb-1">7</div>
          <div className="text-slate-400 text-sm">Temas cobertos</div>
        </div>
        <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-4 text-center">
          <div className="text-3xl font-bold text-yellow-400 mb-1">V/F +</div>
          <div className="text-slate-400 text-sm">Múltipla Escolha</div>
        </div>
      </div>

      {/* Quiz */}
      <div className="bg-slate-900/70 border border-slate-700 rounded-2xl p-6 md:p-8">
        <Quiz questoes={quizGeral} titulo="Quiz Geral — Poluição Luminosa" />
      </div>

      {/* Links de revisão */}
      <div className="mt-8">
        <h3 className="text-white font-semibold mb-4 text-center">
          Quer revisar? Acesse os módulos:
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { slug: "introducao", icone: "💡", titulo: "M1 Introdução" },
            { slug: "gastos-energia", icone: "⚡", titulo: "M2 Energia" },
            { slug: "observacoes-astronomicas", icone: "🔭", titulo: "M3 Astronomia" },
            { slug: "consequencias-socioambientais", icone: "🌿", titulo: "M4 Ambiente" },
            { slug: "cultura-ceu", icone: "🌌", titulo: "M5 Cultura" },
            { slug: "leis-normas-medidas", icone: "⚖️", titulo: "M6 Leis" },
            { slug: "conclusoes-propostas", icone: "🌠", titulo: "M7 Conclusões" },
          ].map((m) => (
            <Link
              key={m.slug}
              href={`/modulos/${m.slug}`}
              className="flex items-center gap-2 bg-slate-800/60 border border-slate-700 rounded-xl p-3 hover:border-indigo-500/50 transition-all text-sm text-slate-300 hover:text-white"
            >
              <span>{m.icone}</span>
              <span className="truncate">{m.titulo}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export const runtime = 'edge';
