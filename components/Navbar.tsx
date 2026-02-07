export default function Navbar({ onContactClick }: { onContactClick?: () => void }) {

import React from "react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 rounded-3xl bg-white/80 backdrop-blur border border-slate-200 shadow-sm px-6 py-3 flex items-center justify-between">
          {/* Brand */}
          <a href="#top" className="flex items-center gap-3">
            <img
              src={`${import.meta.env.BASE_URL}images/logo.png`}
              alt="John Frizon - L'agence Immo"
              className="h-10 w-10 rounded-xl object-contain"
            />
            <div className="leading-tight">
              <div className="font-bold text-slate-900">John Frizon</div>
              <div className="text-sm text-slate-500">L’agence Immo</div>
            </div>
          </a>

          {/* Menu */}
          <nav>
            <ul className="hidden md:flex items-center gap-8">
              <li>
                <a href="#top" className="text-slate-900 hover:text-slate-700 font-medium">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#nos-biens" className="text-slate-900 hover:text-slate-700 font-medium">
                  Nos Biens
                </a>
              </li>
              <li>
                <a href="#nos-services" className="text-slate-900 hover:text-slate-700 font-medium">
                  Nos Services
                </a>
              </li>

              {/* WhatsApp */}
              <li>
                <a
                  href="https://wa.me/33634162716?text=Bonjour%20John%2C%20j%E2%80%99ai%20un%20projet%20immobilier%20dans%20le%20Pays%20de%20Gex.%20Pouvez-vous%20me%20rappeler%20%3F"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-900 hover:text-slate-700 font-medium inline-flex items-center gap-2"
                >
                  WhatsApp <span className="text-slate-500">💬</span>
                </a>
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
                      <span className="text-slate-500">f</span> Facebook
                    </a>

                    <a
                      href="https://www.instagram.com/john_lagence_immo"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-slate-900 hover:bg-slate-50"
                    >
                      <span className="text-slate-500">◎</span> Instagram
                    </a>

                    <a
                      href="https://www.linkedin.com/in/john-frizon-l%E2%80%99agence-immo-8a749a2b6"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-slate-900 hover:bg-slate-50"
                    >
                      <span className="text-slate-500">in</span> LinkedIn
                    </a>

                    <a
                      href="https://www.lagenceimmo01.fr/conseiller/john.frizon,118"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-slate-900 hover:bg-slate-50"
                    >
                      <span className="text-slate-500">🌐</span> Profil L’agence immo
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
          >
            Nous Contacter <span>→</span>
            <button
  type="button"
  onClick={onContactClick}
  className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
>
  Nous Contacter <span>→</span>
</button>

          </a>
        </div>
      </div>
    </header>
  );
}

      {/* ✅ Lightbox avec anim */}
      {isPhotoOpen && (
        <div
          className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 animate-fadeIn"
          onClick={() => setIsPhotoOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Photo de John Frizon"
        >
          <div
  className="w-full max-h-[75vh] rounded-3xl object-cover object-top bg-black/10 border border-white/20 shadow-2xl"

  onClick={(e) => e.stopPropagation()}
>

            <button
              type="button"
              onClick={() => setIsPhotoOpen(false)}
              className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-white text-slate-900 font-bold shadow-md hover:opacity-90"
              aria-label="Fermer"
            >
              ×
            </button>

            <img
  src={`${import.meta.env.BASE_URL}images/john.jpg`}
  alt="John Frizon"
  className="w-full max-h-[75vh] rounded-3xl object-contain bg-black/10 border border-white/20 shadow-2xl"
/>


            <div className="mt-4 text-center text-white">
              <div className="font-bold text-lg">John Frizon</div>
              <div className="text-white/80">Conseiller immobilier — Pays de Gex</div>
            </div>
          </div>

          {/* Animations (pas besoin de fichier CSS, on injecte ici) */}
          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes zoomIn {
              from { opacity: 0; transform: scale(0.92) translateY(6px); }
              to { opacity: 1; transform: scale(1) translateY(0); }
            }
            .animate-fadeIn { animation: fadeIn 140ms ease-out; }
            .animate-zoomIn { animation: zoomIn 180ms ease-out; }
          `}</style>
        </div>
      )}
    </>
  );
}


