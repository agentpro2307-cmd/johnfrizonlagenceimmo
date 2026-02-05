import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Left brand */}
          <div className="flex items-center gap-3">
            <img
              src={`${import.meta.env.BASE_URL}images/logo.png`}
              alt="John Frizon - L'agence Immo"
              className="h-10 w-10 rounded-xl object-contain"
            />
            <div className="leading-tight">
              <div className="font-bold text-slate-900">John Frizon</div>
              <div className="text-sm text-slate-500">L’agence Immo</div>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-900">
              Mentions Légales
            </a>
            <a href="#" className="hover:text-slate-900">
              Politique de confidentialité
            </a>
            <a href="#" className="hover:text-slate-900">
              Recrutement
            </a>
          </div>

          {/* Right copyright */}
          <div className="text-sm text-slate-400 md:text-right">
            © 2026 John Frizon L’agence Immo. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
