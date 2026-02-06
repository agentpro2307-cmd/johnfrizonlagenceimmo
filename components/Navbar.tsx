import React, { useEffect, useState } from "react";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsPhotoOpen(false);
    };
    if (isPhotoOpen) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isPhotoOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mt-4 rounded-3xl bg-white/80 backdrop-blur border border-slate-200 shadow-sm px-6 py-3 flex items-center justify-between">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex items-center gap-3"
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/logo.png`}
                  alt="L'agence Immo"
                  className="h-10 w-10 rounded-xl object-contain"
                />
              </button>

              {/* ✅ Photo plus grande + cliquable */}
              <button
                type="button"
                onClick={() => setIsPhotoOpen(true)}
                className="relative"
                aria-label="Agrandir la photo de John Frizon"
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/john.jpg`}
                  alt="John Frizon"
                  className="h-12 w-12 rounded-xl object-cover border border-slate-200 shadow-sm hover:shadow-md transition"

                  loading="eager"
                />
              </button>

              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="leading-tight text-left"
              >
                <div className="font-bold text-slate-900">John Frizon</div>
                <div className="text-sm text-slate-500">L’agence Immo</div>
              </button>
            </div>

            {/* Menu */}
            <nav>
              <ul className="hidden md:flex items-center gap-8">
                <li>
                  <button
                    type="button"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="text-slate-900 hover:text-slate-700 font-medium"
                  >
                    Accueil
                  </button>
                </li>

                <li>
                  <button
                    type="button"
                    onClick={() => {
                      window.dispatchEvent(new CustomEvent("reset-property-filters"));
                      scrollToId("nos-biens");
                    }}
                    className="text-slate-900 hover:text-slate-700 font-medium"
                  >
                    Nos Biens
                  </button>
                </li>

                <li>
                  <button
                    type="button"
                    onClick={() => scrollToId("nos-services")}
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
              onClick={() => window.dispatchEvent(new CustomEvent("open-contact-modal"))}
              className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
            >
              Nous Contacter <span>→</span>
            </button>
          </div>
        </div>
      </header>

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

