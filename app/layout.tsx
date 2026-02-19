import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tem Luz Aí? | Poluição Luminosa",
  description:
    "Site educacional sobre Poluição Luminosa — conceitos, impactos, leis e como preservar o nosso céu noturno. Projeto de pesquisa CientificAção / IFBA.",
  keywords: "poluição luminosa, astroturismo, céu noturno, astronomia, educação",
  openGraph: {
    title: "Tem Luz Aí? | Poluição Luminosa",
    description:
      "Aprenda sobre Poluição Luminosa de forma interativa. 7 módulos, quizzes e materiais para professores.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-slate-950 min-h-screen`}>
        <Navbar />
        <main className="pt-16">{children}</main>
        <footer className="mt-24 border-t border-slate-800 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 py-10">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🌠</span>
                  <span className="text-white font-bold text-lg">Tem Luz Aí?</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Site educacional sobre Poluição Luminosa, desenvolvido como parte do projeto de
                  pesquisa CientificAção.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3">Sobre o Projeto</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Desenvolvido por{" "}
                  <span className="text-indigo-400">Joabe Carmo de Santana</span> (IFBA), sob
                  orientação de Gorhan Freitas Noronha (UFBA) e coorientação de Júlia Oliveira dos
                  Santos (IFBA).
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3">Links Rápidos</h4>
                <div className="space-y-1">
                  {[
                    { href: "/modulos", label: "📚 Módulos" },
                    { href: "/quiz", label: "🎯 Quiz Geral" },
                    { href: "/desafio", label: "📸 Desafio Fotográfico" },
                    { href: "/para-professores", label: "👩‍🏫 Para Professores" },
                  ].map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      className="block text-slate-400 hover:text-indigo-400 text-sm transition-colors"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-800 text-center text-slate-500 text-sm">
              <p>
                © 2025 Tem Luz Aí? — Projeto CientificAção · IFBA · UFBA · Conteúdo baseado
                exclusivamente nos documentos de pesquisa do projeto.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
