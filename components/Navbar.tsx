import React from "react";

type NavbarProps = {
  onContactClick: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  // IMPORTANT pour GitHub Pages (base URL du repo)
  const logoSrc = `${import.meta.env.BASE_URL}images/logo.png`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass-nav rounded-2xl px-8 py-3 apple-shadow">
        {/* LOGO + NOM */}
        <div className="flex items-center gap-3">
          <img
            src={logoSrc}
            alt="John Frizon - L'agence Immo"
            className="h-9 w-9 rounded-xl object-contain bg-white"
          />
          <div className="leading-tight">
            <div className="font-semibold">John Frizon</div>
            <div className="text-xs opacity-70">L’agence Immo</div>
          </div>
        </div>

        {/* MENU */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Accueil
          </a>
          <a href="#biens" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Nos Biens
          </a>
          <a href="#services" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Nos Services
          </a>
          <a href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Blog
          </a>
        </div>

        {/* BOUTON */}
        <button
          onClick={onContactClick}
          className="bg-slate-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-all flex items-center gap-2"
        >
          Nous Contacter
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

