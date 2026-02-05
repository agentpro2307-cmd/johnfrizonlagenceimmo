
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="grid grid-cols-2 gap-0.5">
            <div className="w-2 h-2 rounded-full bg-slate-800"></div>
            <div className="w-2 h-2 rounded-full bg-slate-800"></div>
            <div className="w-2 h-2 rounded-full bg-slate-400"></div>
            <div className="w-2 h-2 rounded-full bg-slate-800"></div>
          </div>
          <span className="text-xl font-bold tracking-tight">Horizon Immo</span>
        </div>

        <div className="flex gap-8 text-sm text-slate-500">
          <a href="#" className="hover:text-slate-900 transition-colors">Mentions Légales</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Politique de confidentialité</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Recrutement</a>
        </div>

        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Horizon Immo. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
