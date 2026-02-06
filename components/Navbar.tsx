import React from "react";

type NavbarProps = {
  onContactClick?: () => void;
  onGoHome?: () => void;
  onGoProperties?: () => void;
  onGoServices?: () => void;
};

export default function Navbar({
  onContactClick,
  onGoHome,
  onGoProperties,
  onGoServices,
}: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 rounded-3xl bg-white/80 backdrop-blur border border-slate-200 shadow-sm px-6 py-3 flex items-center justify-between">
          {/* Brand */}
          <button type="button" onClick={onGoHome} className="flex items-center gap-3">
            <img
              src={`${import.meta.env.BASE_URL}images/logo.png`}
              alt="John Frizon - L'agence Immo"
              className="h-10 w-10 rounded-xl object-contain"
            />
            <div className="leading-tight text-left">
              <div className="font-bold text-slate-900">John Frizon</div>
              <div className="text-sm text-slate-500">L’agence Immo</div>
            </div>
          </button>

          {/* Menu */}
          <nav>
            <ul className="hidden md:flex items-center gap-8">
              <li>
                <button
                  type="button"
                  onClick={onGoHome}
                  className="text-slate-900 hover:text-slate-700 font-medium"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onGoProperties}
                  className="text-slate-900 hover:text-slate-700 font-medium"
                >
                  Nos Biens
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onGoServices}
                  className="text-slate-900 hover:text-slate-700 font-medium"
                >
                  Nos Services
                </button>
              </li>

              {/* Réseaux sociaux */}
              <li className="relative group">
                <button
                  type="button"
                  className="text-slate-900 hover:text-slate-700 font-medium inline-flex items-center gap-2"
                >
                  Réseaux sociaux <span className="text-slate-500">▾</span>
                </button>

                <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                  <div className="min-w-[240px] rounded-2xl bg-white border border-slate-200 shadow-lg p-2">
                    <a
                      href="https://www.facebook.com/share/1J8bsPv9qG/?mibextid=wwXIfr"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-slate-900 hover:bg-slate-50"
                    >
                      Facebook
                    </a>
                    <a
                      href="https://www.instagram.com/john_lagence_immo"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-slate-900 hover:bg-slate-50"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://www.linkedin.com/in/john-frizon-l%E2%80%99agence-immo-8a749a2b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-slate-900 hover:bg-slate-50"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://www.lagenceimmo01.fr/conseiller/john.frizon,118"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-slate-900 hover:bg-slate-50"
                    >
                      Profil L'agence immo
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </nav>

          {/* CTA */}
          <button
            type="button"
            onClick={onContactClick}
            className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
          >
            Nous Contacter <span>→</span>
          </button>
        </div>
      </div>
    </header>
  );
}
