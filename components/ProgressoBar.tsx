"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { modulos } from "@/data/modulos";

interface ProgressoData {
  [key: string]: {
    score: number;
    total: number;
    data: string;
    lido?: boolean;
  };
}

export default function ProgressoBar() {
  const [progresso, setProgresso] = useState<ProgressoData>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("tem_luz_ai_progresso");
    if (saved) {
      setProgresso(JSON.parse(saved));
    }
  }, []);

  if (!mounted) return null;

  const quizzesCompletos = modulos.filter(
    (m) => progresso[`quiz_modulo_${m.id}`]
  ).length;
  const quizGeralFeito = !!progresso["quiz_geral"];
  const total = modulos.length + 1; // 7 módulos + quiz geral
  const completos = quizzesCompletos + (quizGeralFeito ? 1 : 0);
  const percentual = Math.round((completos / total) * 100);

  return (
    <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-5">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white font-semibold text-sm flex items-center gap-2">
          📊 Seu Progresso
        </h3>
        <span className="text-indigo-400 font-bold text-sm">{percentual}%</span>
      </div>

      <div className="w-full bg-slate-700 rounded-full h-3 mb-4">
        <div
          className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all duration-500"
          style={{ width: `${percentual}%` }}
        />
      </div>

      <div className="grid grid-cols-4 gap-2">
        {modulos.map((m) => {
          const feito = !!progresso[`quiz_modulo_${m.id}`];
          const quizData = progresso[`quiz_modulo_${m.id}`];
          return (
            <Link
              key={m.id}
              href={`/modulos/${m.slug}`}
              title={`Módulo ${m.id}: ${m.titulo}`}
              className={`group relative p-2 rounded-lg text-center text-xs transition-all ${
                feito
                  ? "bg-emerald-700/30 border border-emerald-500/30 text-emerald-400"
                  : "bg-slate-700/30 border border-slate-600 text-slate-500 hover:border-indigo-500/30"
              }`}
            >
              <div className="text-lg mb-1">{m.icone}</div>
              <div className="font-medium">M{m.id}</div>
              {feito && quizData && (
                <div className="text-emerald-500 text-[10px]">
                  {quizData.score}/{quizData.total}
                </div>
              )}
              {/* Tooltip */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                {m.titulo}
              </div>
            </Link>
          );
        })}
        {/* Quiz Geral */}
        <Link
          href="/quiz"
          title="Quiz Geral"
          className={`group relative p-2 rounded-lg text-center text-xs transition-all ${
            quizGeralFeito
              ? "bg-indigo-700/30 border border-indigo-500/30 text-indigo-400"
              : "bg-slate-700/30 border border-slate-600 text-slate-500 hover:border-indigo-500/30"
          }`}
        >
          <div className="text-lg mb-1">🎯</div>
          <div className="font-medium">Geral</div>
          {quizGeralFeito && progresso["quiz_geral"] && (
            <div className="text-indigo-400 text-[10px]">
              {progresso["quiz_geral"].score}/{progresso["quiz_geral"].total}
            </div>
          )}
        </Link>
      </div>

      {completos > 0 && (
        <p className="text-slate-400 text-xs mt-3">
          {completos} de {total} quizzes completados
        </p>
      )}
    </div>
  );
}
