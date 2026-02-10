import React, { useState } from "react";

interface HeroProps {
  onFindHome: () => void;
  onEstimate: () => void;
  onSearch: (filters: { type?: string; location?: string }) => void;
}

const COMMUNES = [
  "Cessy",
  "Challex",
  "Chevry",
  "Chézery-Forens",
  "Collonges",
  "Crozet",
  "Divonne-les-Bains",
  "Échenevex",
  "Farges",
  "Ferney-Voltaire",
  "Gex",
  "Grilly",
  "Léaz",
  "Lélex",
  "Mijoux",
  "Ornex",
  "Péron",
  "Pougny",
  "Prévessin-Moëns",
  "Saint-Genis-Pouilly",
  "Saint-Jean-de-Gonville",
  "Sauverny",
  "Ségny",
  "Sergy",
  "Thoiry",
  "Versonnex",
  "Vesancy",
] as const;

const Hero: React.FC<HeroProps> = ({ onFindHome, onEstimate, onSearch }) => {
  const [typeBien, setTypeBien] = useState("Tous les types");
  const [zone, setZone] = useState<string>("Toutes les communes");

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="top" className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-slate-50">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000"
          className="w-full h-full object-cover"
          alt="Luxury Home Background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent" />
      </div>

      {/* Main grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-slate-900">
            Trouvez le{" "}
            <span className="relative">
              <span className="relative z-10 text-white px-4 py-1 bg-slate-900 rounded-lg">
                logement idéal
              </span>
            </span>{" "}
            <br /> pour votre budget.
          </h1>

          <p className="text-lg text-slate-600 max-w-md leading-relaxed">
            Expertise immobilière dans le Pays de Gex, l&apos;Ain et la Haute-Savoie. Découvrez toutes nos propriétés et
            vendez au meilleur prix.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onFindHome}
              className="bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold apple-shadow flex items-center justify-center gap-2 hover:bg-slate-50 transition-all"
              type="button"
            >
              Trouver mon logement idéal 🏡
            </button>

            <button
              onClick={onEstimate}
              className="bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-slate-800 transition-all"
              type="button"
            >
              Estimer mon bien gratuitement
            </button>
          </div>

          {/* Bloc rassurant (sans bouton “Faisons connaissance” à gauche) */}
          <div className="rounded-2xl bg-white/80 backdrop-blur border border-white/60 apple-shadow p-4">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-xl bg-slate-900 text-white text-xs font-bold">
                📍 Pays de Gex • Frontière Genève
              </span>
              <span className="px-3 py-1 rounded-xl bg-white text-slate-900 text-xs font-bold border border-slate-200">
                🏠 Appart • Villa • Chalet • Invest
              </span>
              <span className="px-3 py-1 rounded-xl bg-white text-slate-900 text-xs font-bold border border-slate-200">
                ⚡ Réponse sous 2h
              </span>
            </div>

            <p className="mt-3 text-sm text-slate-600">
              Une approche claire, réactive et locale — pour vendre au meilleur prix ou trouver le bon bien.
            </p>
          </div>
        </div>

        {/* RIGHT (desktop) */}
        <div className="hidden lg:block relative animate-in fade-in zoom-in duration-1000">
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden glass-nav p-5 apple-shadow">
            <img
              src={`${import.meta.env.BASE_URL}images/escarnot.jpeg`}
              className="w-full h-full object-cover rounded-2xl"
              alt="Featured Property"
            />

            <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/50">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-red-500 text-lg">❤️</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Exclusivité</span>
              </div>
              <h3 className="text-lg font-bold">Chalet 6 pièces</h3>
              <p className="text-xl font-medium text-slate-900">395 000€</p>
            </div>
          </div>

          {/* Petit cadre sous la photo + bouton Découvrir (scroll vers services) */}
          <div className="mt-8 rounded-2xl bg-white/85 backdrop-blur border border-white/60 apple-shadow p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-sm font-bold text-slate-900">Faisons connaissance</div>
                <div className="text-xs text-slate-500">Votre conseiller immobilier — Pays de Gex</div>
              </div>

             <button
  type="button"
  onClick={() => scrollTo("faisons-connaissance")}
  className="rounded-xl bg-slate-900 px-4 py-2 text-xs font-bold text-white hover:bg-slate-800"
>
  Découvrir →
</button>

            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-xl bg-white text-slate-900 text-xs font-bold border border-slate-200">
                🤝 Suivi personnalisé
              </span>
              <span className="px-3 py-1 rounded-xl bg-white text-slate-900 text-xs font-bold border border-slate-200">
                📸 Mise en valeur premium
              </span>
              <span className="px-3 py-1 rounded-xl bg-white text-slate-900 text-xs font-bold border border-slate-200">
                📍 Pays de Gex • Genève
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Search bar */}
      <div className="max-w-5xl mx-auto px-6 mt-16 relative z-10">
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 apple-shadow border border-white/40 flex flex-wrap lg:flex-nowrap gap-4 items-end">
          <div className="flex-1 min-w-[200px] space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase ml-1">Type de bien 🏠</label>

            <select
              className="w-full bg-slate-50 border-none rounded-xl p-3 text-slate-700 outline-none"
              value={typeBien}
              onChange={(e) => setTypeBien(e.target.value)}
            >
              <option value="Tous les types">Tous les types</option>
              <option value="Maison">Maison</option>
              <option value="Appartement">Appartement</option>
              <option value="Chalet">Chalet</option>
              <option value="Villa">Villa</option>
              {/* Propriété supprimé */}
            </select>
          </div>

          <div className="flex-1 min-w-[200px] space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase ml-1">Localisation 📍</label>

            <select
              className="w-full bg-slate-50 border-none rounded-xl p-3 text-slate-700 outline-none"
              value={zone}
              onChange={(e) => setZone(e.target.value)}
            >
              <option value="Toutes les communes">Toutes les communes</option>
              {COMMUNES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <button
            type="button"
            onClick={() => {
              const type = typeBien === "Tous les types" ? undefined : typeBien;
              const location = zone === "Toutes les communes" ? undefined : zone;
              onSearch({ type, location });
            }}
            className="w-full lg:w-auto bg-slate-900 text-white px-10 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all"
          >
            Rechercher
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
