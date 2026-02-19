import Link from "next/link";
import { modulos } from "@/data/modulos";
import ModuloCard from "@/components/ModuloCard";
import ProgressoBar from "@/components/ProgressoBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tem Luz Aí? | Poluição Luminosa — Home",
  description:
    "Aprenda sobre Poluição Luminosa — conceitos, impactos na fauna e flora, leis e como preservar o nosso céu noturno.",
};

export default function HomePage() {
  return (
    <div>
      {/* === HERO / MURAL === */}
      <section className="relative overflow-hidden bg-slate-950 border-b border-slate-800">
        {/* Fundo estrelado */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950/40 via-slate-950 to-slate-950" />
          {/* Stars */}
          {[...Array(60)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-white rounded-full opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 pt-16 pb-12">
          {/* Título principal */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-indigo-950/60 border border-indigo-800/50 rounded-full px-4 py-1.5 text-indigo-300 text-sm mb-6">
              <span>🌌</span> Projeto de Pesquisa CientificAção · IFBA
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 leading-tight">
              Tem{" "}
              <span className="gradient-text">Luz</span>{" "}
              Aí?
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Descubra o que é <strong className="text-white">Poluição Luminosa</strong> — o
              problema que está apagando as estrelas do nosso céu.
            </p>
          </div>

          {/* Mural de convites */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Convite para Professores */}
            <div className="relative group bg-gradient-to-br from-blue-900/60 to-indigo-900/60 border border-blue-700/40 rounded-2xl p-6 hover:border-blue-500/60 transition-all hover:-translate-y-1">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl">👩‍🏫</span>
                <div>
                  <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-medium px-2 py-1 rounded-full mb-2">
                    PESQUISA
                  </span>
                  <h2 className="text-white text-xl font-bold leading-tight">
                    Professor(a), participe da pesquisa
                  </h2>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-5">
                Você é docente? Queremos conhecer sua familiaridade com a Poluição Luminosa e sua
                opinião sobre o tema no ensino. Responda nossa entrevista semiestruturada — leva
                poucos minutos.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdpSUsaZ5vPI0m6CtxzmgR4cpSHmqB69vZpurNoNpHYd9-5AA/viewform?usp=sharing&ouid=110107342351826830651"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium px-5 py-2.5 rounded-xl transition-colors"
              >
                📋 Responder entrevista
              </a>
            </div>

            {/* Convite para o Desafio */}
            <div className="relative group bg-gradient-to-br from-purple-900/60 to-pink-900/60 border border-purple-700/40 rounded-2xl p-6 hover:border-purple-500/60 transition-all hover:-translate-y-1">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl">📸</span>
                <div>
                  <span className="inline-block bg-purple-500/20 text-purple-300 text-xs font-medium px-2 py-1 rounded-full mb-2">
                    DESAFIO ABERTO
                  </span>
                  <h2 className="text-white text-xl font-bold leading-tight">
                    Desafio Fotográfico do Céu Noturno
                  </h2>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-5">
                Fotografe o céu à noite! As melhores fotos serão destacadas. Qualquer câmera serve
                — veja nosso tutorial e participe. Mostre a poluição luminosa da sua cidade!
              </p>
              <Link
                href="/desafio"
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-medium px-5 py-2.5 rounded-xl transition-colors"
              >
                🌠 Participar do Desafio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* === CONTEÚDO PRINCIPAL === */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Coluna principal */}
          <div className="lg:col-span-2 space-y-12">
            {/* O que é Poluição Luminosa */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-indigo-500 rounded-full" />
                <h2 className="text-2xl font-bold text-white">
                  O que é Poluição Luminosa?
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <InfoCard
                  icone="💡"
                  titulo="O Problema"
                  texto="A poluição luminosa (PL) é causada pelo uso excessivo e descontrolado de luz artificial. Ela afeta o céu noturno, a biodiversidade e a saúde humana."
                />
                <InfoCard
                  icone="🕰️"
                  titulo="Quando Começou?"
                  texto="O problema se intensificou desde a Revolução Industrial. Há 200 mil anos, o céu era límpido e a Via Láctea podia ser vista a olho nu de qualquer lugar."
                />
                <InfoCard
                  icone="🌍"
                  titulo="Escala Global"
                  texto="Cerca de 1/5 da população mundial perdeu a visibilidade da Via Láctea. Mais de 2/3 dos americanos e metade dos europeus não conseguem mais ver a Via Láctea."
                />
                <InfoCard
                  icone="🇧🇷"
                  titulo="No Brasil"
                  texto="Há muito pouca regulamentação e fiscalização. A iluminação pública desperdiça ~20% de energia, equivalente a R$7,5 bilhões/ano que poderiam ser economizados."
                />
              </div>
            </div>

            {/* 4 Tipos de PL */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-yellow-500 rounded-full" />
                <h2 className="text-2xl font-bold text-white">
                  Os 4 Tipos de Poluição Luminosa
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <TipoCard
                  nome="Glare"
                  subtitulo="Brilho ofuscante"
                  cor="yellow"
                  descricao="Clarão excessivo que causa incômodo e desconforto visual, podendo ofuscar a visão de motoristas e pedestres."
                  exemplo="Holofotes mal posicionados, luminosos de shoppings."
                />
                <TipoCard
                  nome="Light Trespass"
                  subtitulo="Luz invasora"
                  cor="orange"
                  descricao="Luz que invade espaços onde não foi projetada para iluminar, como quartos residenciais à noite."
                  exemplo="Poste da rua iluminando seu quarto às 3h."
                />
                <TipoCard
                  nome="Skyglow"
                  subtitulo="Brilho do céu noturno"
                  cor="blue"
                  descricao="Efeito alaranjado ou branco no céu sobre centros urbanos causado por luz mal direcionada que se espalha pela atmosfera."
                  exemplo="O céu alaranjado que você vê nas cidades à noite."
                />
                <TipoCard
                  nome="Clutter"
                  subtitulo="Desordem luminosa"
                  cor="purple"
                  descricao="Agrupamentos excessivos e desordenados de fontes de luz artificial, criando confusão visual."
                  exemplo="Faixadas comerciais com dezenas de anúncios luminosos."
                />
              </div>
            </div>

            {/* Impactos resumidos */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-red-500 rounded-full" />
                <h2 className="text-2xl font-bold text-white">Principais Impactos</h2>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <ImpactoCard
                  icone="🧬"
                  titulo="Saúde Humana"
                  itens={["Distúrbios do sono", "Supressão da melatonina", "Estresse e fadiga", "Risco de acidentes"]}
                />
                <ImpactoCard
                  icone="🐢"
                  titulo="Fauna"
                  itens={["Desorientação de tartarugas", "Aves colidem com prédios", "Vagalumes não se reproduzem", "Rotas migratórias alteradas"]}
                />
                <ImpactoCard
                  icone="🌿"
                  titulo="Flora e Ambiente"
                  itens={["Floração fora de época", "Cadeia alimentar afetada", "Desperdício de energia", "Emissões de CO₂"]}
                />
              </div>
            </div>

            {/* CTA para Módulos */}
            <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border border-indigo-700/30 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">
                Quer aprender mais?
              </h3>
              <p className="text-slate-300 mb-6">
                Explore os 7 módulos completos sobre Poluição Luminosa — com glossário, exemplos e
                quiz interativo em cada um.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  href="/modulos"
                  className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 py-3 rounded-xl transition-colors"
                >
                  📚 Ver todos os módulos
                </Link>
                <Link
                  href="/quiz"
                  className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white font-medium px-6 py-3 rounded-xl transition-colors"
                >
                  🎯 Quiz Geral (20 questões)
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Barra de Progresso */}
            <ProgressoBar />

            {/* Módulos em destaque */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5">
              <h3 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
                📚 Módulos
              </h3>
              <div className="space-y-2">
                {modulos.map((m) => (
                  <Link
                    key={m.id}
                    href={`/modulos/${m.slug}`}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-700/50 transition-colors group"
                  >
                    <span className="text-xl w-7 text-center">{m.icone}</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-slate-300 text-xs group-hover:text-white transition-colors truncate">
                        {m.titulo}
                      </div>
                    </div>
                    <span className="text-slate-500 text-xs">{m.id}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Referência */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5">
              <h3 className="text-white font-semibold text-sm mb-3">📖 Sobre</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Conteúdo baseado na{" "}
                <span className="text-indigo-400">Apostila PL</span> e demais materiais de
                pesquisa do projeto{" "}
                <span className="text-indigo-400">&ldquo;Tem Luz Aí?&rdquo;</span>, de Joabe
                Carmo de Santana (IFBA/CientificAção).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function InfoCard({
  icone,
  titulo,
  texto,
}: {
  icone: string;
  titulo: string;
  texto: string;
}) {
  return (
    <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-4 hover:border-indigo-500/30 transition-colors">
      <div className="flex items-start gap-3">
        <span className="text-2xl">{icone}</span>
        <div>
          <h3 className="text-white font-semibold text-sm mb-1">{titulo}</h3>
          <p className="text-slate-400 text-sm leading-relaxed">{texto}</p>
        </div>
      </div>
    </div>
  );
}

function TipoCard({
  nome,
  subtitulo,
  cor,
  descricao,
  exemplo,
}: {
  nome: string;
  subtitulo: string;
  cor: string;
  descricao: string;
  exemplo: string;
}) {
  const cores: Record<string, string> = {
    yellow: "border-yellow-500/30 bg-yellow-900/10 text-yellow-400",
    orange: "border-orange-500/30 bg-orange-900/10 text-orange-400",
    blue: "border-blue-500/30 bg-blue-900/10 text-blue-400",
    purple: "border-purple-500/30 bg-purple-900/10 text-purple-400",
  };

  return (
    <div className={`border rounded-xl p-4 ${cores[cor]}`}>
      <div className="font-bold text-base mb-0.5">{nome}</div>
      <div className="text-sm opacity-80 mb-2">{subtitulo}</div>
      <p className="text-slate-300 text-sm mb-2 leading-relaxed">{descricao}</p>
      <p className="text-slate-500 text-xs italic">💡 {exemplo}</p>
    </div>
  );
}

function ImpactoCard({
  icone,
  titulo,
  itens,
}: {
  icone: string;
  titulo: string;
  itens: string[];
}) {
  return (
    <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-4">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">{icone}</span>
        <h4 className="text-white font-semibold text-sm">{titulo}</h4>
      </div>
      <ul className="space-y-1">
        {itens.map((item, i) => (
          <li key={i} className="text-slate-400 text-xs flex items-start gap-1.5">
            <span className="text-indigo-500 mt-0.5">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
