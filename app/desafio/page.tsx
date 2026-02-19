import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Desafio Fotográfico do Céu Noturno | Tem Luz Aí?",
  description:
    "Fotografe o céu à noite e participe do nosso desafio! As 10 melhores fotos serão destacadas. Veja nosso tutorial de fotografia noturna.",
};

export default function DesafioPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Hero do Desafio */}
      <div className="relative bg-gradient-to-br from-purple-900/70 to-indigo-900/70 border border-purple-700/40 rounded-3xl p-8 md:p-12 mb-12 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
        <div className="relative text-center">
          <span className="text-7xl block mb-4">📸</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Desafio Fotográfico
            <br />
            <span className="text-purple-300">do Céu Noturno</span>
          </h1>
          <p className="text-purple-100 text-lg max-w-xl mx-auto mb-6 leading-relaxed">
            Capture a beleza — e a escuridão — do céu noturno da sua cidade. Mostre a poluição
            luminosa (ou a ausência dela) através das suas lentes!
          </p>
          <a
            href="https://forms.gle/mM4mUtY59ZzoKDYA9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-bold px-8 py-4 rounded-2xl text-lg transition-all hover:scale-105 shadow-lg shadow-purple-900/50"
          >
            🌠 Enviar Minha Foto
          </a>
        </div>
      </div>

      {/* Como Funciona */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="bg-purple-600/30 text-purple-400 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          Como Funciona
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            {
              icone: "📱",
              titulo: "Tire uma foto",
              desc: "Use o celular ou qualquer câmera para fotografar o céu noturno",
            },
            {
              icone: "⭐",
              titulo: "10 melhores",
              desc: "As 10 fotos mais impactantes serão destacadas em um mural futuro",
            },
            {
              icone: "📤",
              titulo: "Envie pelo formulário",
              desc: "Acesse o link de envio e submeta sua fotografia",
            },
          ].map((item, i) => (
            <div key={i} className="bg-slate-800/60 border border-slate-700 rounded-xl p-5">
              <span className="text-3xl block mb-3">{item.icone}</span>
              <h3 className="text-white font-semibold mb-2">{item.titulo}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Critérios */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="bg-yellow-600/30 text-yellow-400 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          Critérios de Avaliação
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              icone: "🌃",
              titulo: "Impacto da Poluição Luminosa",
              desc: "A foto evidencia claramente a presença (ou ausência) de poluição luminosa na cena?",
              cor: "border-orange-500/30 bg-orange-900/10",
            },
            {
              icone: "⭐",
              titulo: "Estrelas Visíveis",
              desc: "Quantas estrelas ou objetos celestes são visíveis na imagem?",
              cor: "border-yellow-500/30 bg-yellow-900/10",
            },
            {
              icone: "🎨",
              titulo: "Qualidade e Criatividade",
              desc: "A foto tem boa qualidade técnica, composição criativa ou elementos interessantes?",
              cor: "border-purple-500/30 bg-purple-900/10",
            },
            {
              icone: "🌌",
              titulo: "Elementos Noturnos",
              desc: "A foto inclui elementos como constelações, horizonte iluminado, Via Láctea ou a Lua?",
              cor: "border-blue-500/30 bg-blue-900/10",
            },
          ].map((item, i) => (
            <div key={i} className={`border rounded-xl p-5 ${item.cor}`}>
              <span className="text-2xl block mb-2">{item.icone}</span>
              <h3 className="text-white font-semibold mb-2">{item.titulo}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tutorial */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="bg-emerald-600/30 text-emerald-400 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          Tutorial de Fotografia Noturna
        </h2>

        <div className="space-y-6">
          {/* Modo PRO */}
          <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6">
            <h3 className="text-emerald-300 font-bold text-lg mb-4 flex items-center gap-2">
              📷 Usando o Modo Profissional (PRO)
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h4 className="text-white font-semibold text-sm mb-2">Configurações recomendadas:</h4>
                <ul className="space-y-2">
                  {[
                    "⏱️ Tempo de exposição: máximo possível (10s–30s)",
                    "📊 ISO: alto (800–3200), mas teste para evitar ruído excessivo",
                    "🔭 Foco: infinito (∞) ou foco manual na lua/estrela brilhante",
                    "📐 Estabilidade: apoiar em superfície firme ou usar tripé",
                  ].map((item, i) => (
                    <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-2">Dicas extras:</h4>
                <ul className="space-y-2">
                  {[
                    "🌙 Prefira noites de lua nova (céu mais escuro)",
                    "🏙️ Afaste-se de luzes próximas se possível",
                    "⏳ Dê tempo para os olhos se adaptarem ao escuro",
                    "📵 Desligue a lanterna do celular antes de fotografar",
                  ].map((item, i) => (
                    <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sem Modo PRO */}
          <div className="bg-slate-800/60 border border-blue-700/30 rounded-2xl p-6">
            <h3 className="text-blue-300 font-bold text-lg mb-3 flex items-center gap-2">
              📱 Sem Modo PRO? Use um App Especializado
            </h3>
            <p className="text-slate-300 text-sm mb-4">
              Se seu celular não tem modo PRO ou manual, recomendamos usar o aplicativo:
            </p>
            <div className="inline-flex items-center gap-3 bg-blue-900/30 border border-blue-700/40 rounded-xl px-5 py-3">
              <span className="text-3xl">🌠</span>
              <div>
                <div className="text-white font-bold">DeepSkyCamera</div>
                <div className="text-blue-300 text-sm">Disponível para Android e iOS</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm mt-3">
              Este aplicativo permite controle manual de exposição e ISO específico para fotografia
              noturna, mesmo em aparelhos mais simples.
            </p>
          </div>

          {/* Edição */}
          <div className="bg-slate-800/60 border border-purple-700/30 rounded-2xl p-6">
            <h3 className="text-purple-300 font-bold text-lg mb-4 flex items-center gap-2">
              ✨ Edição Básica
            </h3>
            <p className="text-slate-300 text-sm mb-4">
              Uma edição básica pode melhorar muito sua foto noturna. Recomendamos o{" "}
              <strong className="text-white">Snapseed</strong> (gratuito, iOS e Android) ou qualquer
              editor de sua preferência.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { label: "Brilho", instrucao: "Diminuir um pouco" },
                { label: "Exposição", instrucao: "Ajustar conforme necessário" },
                { label: "Sombras", instrucao: "Reduzir levemente" },
                { label: "Contraste", instrucao: "Leve aumento" },
                { label: "Saturação", instrucao: "Cuidado — não exagerar" },
                { label: "Nitidez", instrucao: "Leve aumento nas estrelas" },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center bg-slate-700/50 rounded-lg px-3 py-2 text-sm">
                  <span className="text-slate-300 font-medium">{item.label}</span>
                  <span className="text-purple-300">{item.instrucao}</span>
                </div>
              ))}
            </div>
            <p className="text-slate-500 text-xs mt-3 italic">
              * Ou qualquer editor de sua preferência. O objetivo é realçar a cena, não criar uma
              imagem artificial.
            </p>
          </div>
        </div>
      </section>

      {/* Política de uso */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="bg-slate-600/30 text-slate-400 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
          Política de Uso das Fotos
        </h2>
        <div className="bg-slate-800/60 border border-slate-600 rounded-2xl p-6">
          <ul className="space-y-3">
            {[
              "Não haverá galeria pública imediata — as fotos serão avaliadas primeiro.",
              "As fotos enviadas serão de uso interno até eventual publicação no projeto.",
              "Ao participar, o usuário consente com o uso das imagens para fins do projeto 'Tem Luz Aí?'.",
              "As imagens poderão ser usadas em apresentações, publicações e materiais educativos do projeto.",
              "Sempre que possível, o crédito fotográfico será atribuído ao autor.",
              "O projeto reserva-se o direito de não publicar imagens que não atendam aos critérios ou políticas do projeto.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                <span className="text-slate-500 mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA final */}
      <div className="text-center bg-gradient-to-r from-purple-900/40 to-pink-900/40 border border-purple-700/30 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-white mb-3">Pronto para o desafio?</h3>
        <p className="text-slate-300 mb-6">
          Clique abaixo para enviar sua foto e participar do Desafio Fotográfico do Céu Noturno!
        </p>
        <a
          href="https://forms.gle/mM4mUtY59ZzoKDYA9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-500 text-white font-bold px-10 py-4 rounded-2xl text-xl transition-all hover:scale-105 shadow-xl shadow-purple-900/50"
        >
          <span className="text-2xl">🌠</span>
          Enviar Minha Foto
        </a>
      </div>
    </div>
  );
}
