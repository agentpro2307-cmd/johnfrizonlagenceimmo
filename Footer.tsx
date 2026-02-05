
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
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
        <div className="flex gap-8 text-sm text-slate-500">
          <a href="#" className="hover:text-slate-900 transition-colors">Mentions Légales</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Politique de confidentialité</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Recrutement</a>
        </div>

        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} John Frizon L’agence Immo. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
