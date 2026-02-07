import React, { useEffect, useRef, useState } from "react";

type Props = {
  onContactClick?: () => void;
};

// ✅ Mets tes vrais liens ici
const INSTAGRAM_URL = "https://www.instagram.com/TON_COMPTE/";
const FACEBOOK_URL = "https://www.facebook.com/TON_COMPTE/";
const LINKEDIN_URL = "https://www.linkedin.com/in/TON_COMPTE/";

const PHONE_INTL = "+33634162716";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Bonjour John, j’ai un projet immobilier dans le Pays de Gex. Pouvez-vous me rappeler ?"
);
const WHATSAPP_URL = `https://wa.me/${PHONE_INTL.replace("+", "")}?text=${WHATSAPP_MESSAGE}`;

export default function Navbar({ onContactClick }: Props) {
  const [openSocial, setOpenSocial] = useState(false);
  const socialRef = useRef<HTMLDivElement | null>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goNosBiens = () => {
    window.dispatchEvent(new Event("reset-property-filters"));
    scrollTo("nos-biens");
  };

  // ✅ Ferme le dropdown si clic en dehors
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!openSocial) return;
      const target = e.target as Node;
      if (socialRef.current && !socialRef.current.contains(target)) {
        setOpenSocial(false);
      }
    };
    window.addEventListener("mousedown", onDown);
    return () => window.removeEventListener("mousedown", onDown);
  }, [openSocial]);

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] px-4 pt-4">
      <div className="max-w-7xl mx-auto glass-nav rounded-3xl apple-shadow px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo / Brand */}
        <button
          type="button"
          onClick={() => scrollTo("top")}
          className="flex items-center gap-3"
          aria-label="Accueil"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/logo.png`}
            alt="Logo"
            className="w-10 h-10 rounded-2xl object-cover"
          />
          <div className="text-left leading-tight">
            <div className="font-bold text-slate-900">John Frizon</div>
            <div className="text-xs text-slate-500">L’agence Immo</div>
          </div>
        </button>

        {/* Nav (desktop) */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-700">
          <button type="button" className="hover:text-slate-900" onClick={() => scrollTo("top")}>
            Accueil
          </button>

          <button type="button" className="hover:text-slate-900" onClick={goNosBiens}>
            Nos Biens
          </button>

          {/* ✅ ICI : bon id */}
          <button
            type="button"
            className="hover:text-slate-900"
            onClick={() => scrollTo("nos-services")}
          >
            Nos Services
          </button>

          {/* Réseaux sociaux */}
          <div className="relative" ref={socialRef}>
            <button
              type="button"
              className="hover:text-slate-900 inline-flex items-center gap-2"
              onClick={() => setOpenSocial((v) => !v)}
              aria-expanded={openSocial}
            >
              Réseaux sociaux <span className="text-slate-400">▼</span>
            </button>

            {openSocial && (
              <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-white apple-shadow border border-slate-100 p-2">
                <a
                  className="block px-3 py-2 rounded-xl hover:bg-slate-50"
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpenSocial(false)}
                >
                  Instagram
                </a>
                <a
                  className="block px-3 py-2 rounded-xl hover:bg-slate-50"
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpenSocial(false)}
                >
                  Facebook
                </a>
                <a
                  className="block px-3 py-2 rounded-xl hover:bg-slate-50"
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpenSocial(false)}
                >
                  LinkedIn
                </a>
              </div>
            )}
          </div>

          {/* WhatsApp (bouton direct) */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl px-3 py-2 bg-white/70 hover:bg-white border border-slate-200"
            title="WhatsApp"
          >
            WhatsApp
          </a>
        </nav>

        {/* CTA */}
        <button
          type="button"
          onClick={() => onContactClick?.()}
          className="rounded-2xl bg-slate-900 text-white px-4 py-2 font-bold text-sm hover:bg-slate-800"
        >
          Nous Contacter →
        </button>
      </div>
    </header>
  );
}
