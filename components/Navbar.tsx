import Link from "next/link";
import { modulos } from "@/data/modulos";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl">🌠</span>
            <div>
              <span className="text-white font-bold text-lg leading-none block">
                Tem Luz Aí?
              </span>
              <span className="text-slate-400 text-xs leading-none hidden sm:block">
                Poluição Luminosa
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/desafio">Desafio</NavLink>
            <NavLink href="/modulos">Módulos</NavLink>
            <NavLink href="/quiz">Quiz Geral</NavLink>
            <NavLink href="/para-professores">Para Professores</NavLink>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-all duration-200 text-sm font-medium"
    >
      {children}
    </Link>
  );
}

function MobileMenu() {
  return (
    <div className="relative group">
      <button className="p-2 text-slate-300 hover:text-white">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div className="absolute right-0 mt-2 w-48 bg-slate-800 rounded-lg shadow-xl border border-slate-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        <div className="py-2">
          <MobileLink href="/">🏠 Home</MobileLink>
          <MobileLink href="/desafio">📸 Desafio</MobileLink>
          <MobileLink href="/modulos">📚 Módulos</MobileLink>
          <MobileLink href="/quiz">🎯 Quiz Geral</MobileLink>
          <MobileLink href="/para-professores">👩‍🏫 Para Professores</MobileLink>
        </div>
      </div>
    </div>
  );
}

function MobileLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-700 text-sm"
    >
      {children}
    </Link>
  );
}
