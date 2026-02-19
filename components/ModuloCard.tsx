import Link from "next/link";
import { Modulo } from "@/data/modulos";

interface ModuloCardProps {
  modulo: Modulo;
}

export default function ModuloCard({ modulo }: ModuloCardProps) {
  return (
    <Link
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
        <h3 className="text-white font-bold text-lg mb-1 group-hover:text-indigo-300 transition-colors">
          {modulo.titulo}
        </h3>
        <p className="text-slate-400 text-sm mb-3">{modulo.subtitulo}</p>
        <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
          {modulo.resumo}
        </p>

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
  );
}
