import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { JsonLd } from "@/components/JsonLd";

const BASE_URL = "https://tem-luz-ai.pages.dev";

export const metadata: Metadata = {
  // ── Título e descrição ──────────────────────────────────────────────────
  title: {
    default: "Tem Luz Aí? | Poluição Luminosa",
    template: "%s | Tem Luz Aí?",
  },
  description:
    "Site educacional sobre Poluição Luminosa — conceitos, impactos na fauna e flora, leis brasileiras e como preservar o céu noturno. Projeto CientificAção / IFBA.",

  // ── Palavras-chave ───────────────────────────────────────────────────────
  keywords: [
    "poluição luminosa",
    "light pollution",
    "céu noturno",
    "astronomia educação",
    "skyglow",
    "glare",
    "light trespass",
    "clutter",
    "astroturismo",
    "IFBA",
    "CientificAção",
    "educação ambiental",
    "via láctea",
    "melatonina",
    "fauna noturna",
  ],

  // ── Autoria ──────────────────────────────────────────────────────────────
  authors: [{ name: "Joabe Carmo de Santana", url: BASE_URL }],
  creator: "Joabe Carmo de Santana — Projeto CientificAção / IFBA",

  // ── Canonical e metadados de robôs ──────────────────────────────────────
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Open Graph (Facebook, WhatsApp, LinkedIn) ────────────────────────────
  openGraph: {
    title: "Tem Luz Aí? | Poluição Luminosa",
    description:
      "Aprenda sobre Poluição Luminosa de forma interativa. 7 módulos, quizzes e materiais para professores. Projeto de pesquisa CientificAção / IFBA.",
    url: BASE_URL,
    siteName: "Tem Luz Aí?",
    locale: "pt_BR",
    type: "website",
  },

  // ── Twitter / X Card ────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Tem Luz Aí? | Poluição Luminosa",
    description:
      "Site educacional sobre Poluição Luminosa — 7 módulos, quiz interativo e materiais para professores.",
    creator: "@temLuzAi",
  },

  // ── Verificação de propriedade (preencher depois do Search Console) ──────
  // verification: {
  //   google: "COLE_AQUI_O_CODIGO_DO_GOOGLE_SEARCH_CONSOLE",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Tem Luz Aí?",
    url: "https://tem-luz-ai.pages.dev",
    description:
      "Site educacional sobre Poluição Luminosa — conceitos, impactos, leis e como preservar o céu noturno.",
    inLanguage: "pt-BR",
    author: {
      "@type": "Person",
      name: "Joabe Carmo de Santana",
      affiliation: {
        "@type": "EducationalOrganization",
        name: "IFBA — Instituto Federal da Bahia",
      },
    },
    publisher: {
      "@type": "EducationalOrganization",
      name: "Projeto CientificAção / IFBA",
      url: "https://tem-luz-ai.pages.dev",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://tem-luz-ai.pages.dev/modulos?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const educationalOrgJsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Tem Luz Aí? — Projeto CientificAção",
    url: "https://tem-luz-ai.pages.dev",
    description:
      "Projeto de pesquisa educacional sobre Poluição Luminosa desenvolvido no IFBA.",
    knowsAbout: [
      "Poluição Luminosa",
      "Astronomia",
      "Educação Ambiental",
      "Céu Noturno",
      "Astroturismo",
    ],
    member: [
      { "@type": "Person", name: "Joabe Carmo de Santana", jobTitle: "Pesquisador" },
      { "@type": "Person", name: "Gorhan Freitas Noronha", jobTitle: "Orientador (UFBA)" },
      { "@type": "Person", name: "Júlia Oliveira dos Santos", jobTitle: "Coorientadora (IFBA)" },
    ],
  };

  return (
    <html lang="pt-BR">
      <head>
        <JsonLd data={websiteJsonLd} />
        <JsonLd data={educationalOrgJsonLd} />
      </head>
      <body className={`bg-slate-950 min-h-screen font-sans`}>
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
