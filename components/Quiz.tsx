"use client";

import { useState } from "react";
import { QuestaoQuiz } from "@/data/modulos";

interface QuizProps {
  questoes: QuestaoQuiz[];
  titulo?: string;
  moduloId?: number;
  onComplete?: (score: number, total: number) => void;
}

export default function Quiz({ questoes, titulo, moduloId, onComplete }: QuizProps) {
  const [respostas, setRespostas] = useState<Record<string, string | boolean>>({});
  const [enviado, setEnviado] = useState(false);
  const [questaoAtual, setQuestaoAtual] = useState(0);
  const [modoRevisao, setModoRevisao] = useState(false);

  const questao = questoes[questaoAtual];

  const handleResposta = (valor: string | boolean) => {
    if (enviado) return;
    setRespostas((prev) => ({ ...prev, [questao.id]: valor }));
  };

  const calcularScore = () => {
    return questoes.filter((q) => {
      const resp = respostas[q.id];
      if (q.tipo === "verdadeiro_falso") {
        return resp === q.resposta;
      }
      return resp === q.resposta;
    }).length;
  };

  const handleEnviar = () => {
    const score = calcularScore();
    setEnviado(true);
    setModoRevisao(true);
    setQuestaoAtual(0);
    onComplete?.(score, questoes.length);

    // Salvar progresso no localStorage
    if (typeof window !== "undefined") {
      const chave = moduloId ? `quiz_modulo_${moduloId}` : "quiz_geral";
      const progresso = JSON.parse(
        localStorage.getItem("tem_luz_ai_progresso") || "{}"
      );
      progresso[chave] = {
        score,
        total: questoes.length,
        data: new Date().toISOString(),
      };
      localStorage.setItem("tem_luz_ai_progresso", JSON.stringify(progresso));
    }
  };

  const handleReiniciar = () => {
    setRespostas({});
    setEnviado(false);
    setModoRevisao(false);
    setQuestaoAtual(0);
  };

  const isCorreta = (q: QuestaoQuiz) => {
    const resp = respostas[q.id];
    return resp === q.resposta;
  };

  const score = enviado ? calcularScore() : 0;
  const percentual = enviado ? Math.round((score / questoes.length) * 100) : 0;

  return (
    <div className="w-full">
      {titulo && (
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          🎯 {titulo}
        </h3>
      )}

      {/* Progresso */}
      {!enviado && (
        <div className="mb-6">
          <div className="flex justify-between text-sm text-slate-400 mb-2">
            <span>
              Questão {questaoAtual + 1} de {questoes.length}
            </span>
            <span>{Object.keys(respostas).length} respondidas</span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-2">
            <div
              className="bg-indigo-500 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${((questaoAtual + 1) / questoes.length) * 100}%`,
              }}
            />
          </div>
        </div>
      )}

      {/* Resultado final */}
      {enviado && (
        <div
          className={`mb-8 p-6 rounded-xl border text-center ${
            percentual >= 70
              ? "bg-emerald-900/30 border-emerald-500/30"
              : percentual >= 50
              ? "bg-yellow-900/30 border-yellow-500/30"
              : "bg-red-900/30 border-red-500/30"
          }`}
        >
          <div className="text-5xl mb-3">
            {percentual >= 80 ? "🌟" : percentual >= 60 ? "✨" : "📚"}
          </div>
          <div className="text-3xl font-bold text-white mb-2">
            {score}/{questoes.length}
          </div>
          <div className="text-lg text-slate-300 mb-1">{percentual}% de acerto</div>
          <div className="text-slate-400 text-sm">
            {percentual >= 80
              ? "Excelente! Você domina o tema!"
              : percentual >= 60
              ? "Bom trabalho! Revise alguns tópicos."
              : "Continue estudando. Você consegue!"}
          </div>
          <button
            onClick={handleReiniciar}
            className="mt-4 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors text-sm font-medium"
          >
            Tentar novamente
          </button>
        </div>
      )}

      {/* Questão atual */}
      <div className="space-y-4">
        {modoRevisao ? (
          // Modo revisão — mostrar todas as questões
          <div className="space-y-6">
            {questoes.map((q, i) => (
              <QuestaoCard
                key={q.id}
                questao={q}
                index={i}
                resposta={respostas[q.id]}
                enviado={true}
                isCorreta={isCorreta(q)}
                onResponder={() => {}}
              />
            ))}
          </div>
        ) : (
          // Modo quiz — uma questão por vez
          <div>
            <QuestaoCard
              questao={questao}
              index={questaoAtual}
              resposta={respostas[questao.id]}
              enviado={false}
              isCorreta={false}
              onResponder={handleResposta}
            />

            {/* Navegação */}
            <div className="flex gap-3 mt-6 justify-between">
              <button
                onClick={() => setQuestaoAtual((p) => Math.max(0, p - 1))}
                disabled={questaoAtual === 0}
                className="px-4 py-2 bg-slate-700 text-slate-300 rounded-lg hover:bg-slate-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                ← Anterior
              </button>

              {questaoAtual < questoes.length - 1 ? (
                <button
                  onClick={() =>
                    setQuestaoAtual((p) => Math.min(questoes.length - 1, p + 1))
                  }
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Próxima →
                </button>
              ) : (
                <button
                  onClick={handleEnviar}
                  disabled={Object.keys(respostas).length < questoes.length}
                  className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors font-medium"
                >
                  ✅ Finalizar Quiz
                </button>
              )}
            </div>

            {/* Mini-índice de questões */}
            <div className="flex flex-wrap gap-2 mt-4">
              {questoes.map((q, i) => (
                <button
                  key={q.id}
                  onClick={() => setQuestaoAtual(i)}
                  className={`w-8 h-8 rounded-full text-sm font-medium transition-colors ${
                    i === questaoAtual
                      ? "bg-indigo-600 text-white"
                      : respostas[q.id] !== undefined
                      ? "bg-emerald-700 text-white"
                      : "bg-slate-700 text-slate-400 hover:bg-slate-600"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function QuestaoCard({
  questao,
  index,
  resposta,
  enviado,
  isCorreta,
  onResponder,
}: {
  questao: QuestaoQuiz;
  index: number;
  resposta: string | boolean | undefined;
  enviado: boolean;
  isCorreta: boolean;
  onResponder: (val: string | boolean) => void;
}) {
  return (
    <div
      className={`p-5 rounded-xl border transition-all ${
        enviado
          ? isCorreta
            ? "border-emerald-500/50 bg-emerald-900/20"
            : "border-red-500/50 bg-red-900/20"
          : "border-slate-600 bg-slate-800/50"
      }`}
    >
      <div className="flex gap-3 mb-4">
        <span className="text-slate-400 font-mono text-sm mt-0.5">
          {String(index + 1).padStart(2, "0")}.
        </span>
        <p className="text-white font-medium leading-relaxed">{questao.enunciado}</p>
      </div>

      {questao.tipo === "verdadeiro_falso" ? (
        <div className="flex gap-3">
          {[true, false].map((val) => {
            const isSelected = resposta === val;
            const isCorrectAnswer = questao.resposta === val;
            return (
              <button
                key={String(val)}
                onClick={() => onResponder(val)}
                className={`flex-1 py-3 rounded-lg font-medium text-sm transition-all ${
                  enviado
                    ? isCorrectAnswer
                      ? "bg-emerald-600 text-white"
                      : isSelected
                      ? "bg-red-600 text-white"
                      : "bg-slate-700 text-slate-400"
                    : isSelected
                    ? "bg-indigo-600 text-white"
                    : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                }`}
              >
                {val ? "✅ Verdadeiro" : "❌ Falso"}
              </button>
            );
          })}
        </div>
      ) : (
        <div className="space-y-2">
          {questao.alternativas?.map((alt, i) => {
            const isSelected = resposta === alt;
            const isCorrectAnswer = questao.resposta === alt;
            return (
              <button
                key={i}
                onClick={() => onResponder(alt)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all flex items-start gap-3 ${
                  enviado
                    ? isCorrectAnswer
                      ? "bg-emerald-600/30 border border-emerald-500 text-emerald-200"
                      : isSelected
                      ? "bg-red-600/30 border border-red-500 text-red-200"
                      : "bg-slate-700/50 border border-slate-600 text-slate-400"
                    : isSelected
                    ? "bg-indigo-600/30 border border-indigo-500 text-indigo-200"
                    : "bg-slate-700 border border-slate-600 text-slate-300 hover:border-indigo-500/50 hover:text-white"
                }`}
              >
                <span className="font-mono text-xs mt-0.5 opacity-70">
                  {String.fromCharCode(65 + i)}.
                </span>
                {alt}
              </button>
            );
          })}
        </div>
      )}

      {/* Explicação */}
      {enviado && (
        <div
          className={`mt-4 p-3 rounded-lg text-sm ${
            isCorreta
              ? "bg-emerald-900/30 text-emerald-200"
              : "bg-orange-900/30 text-orange-200"
          }`}
        >
          <span className="font-semibold">
            {isCorreta ? "✓ Correto! " : "✗ Incorreto. "}
          </span>
          {questao.explicacao}
        </div>
      )}
    </div>
  );
}
