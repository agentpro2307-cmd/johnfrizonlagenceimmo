import React from "react";

type SoldProperty = {
  id: number;
  title: string;           // ex: "Appartement 3 pièces 61 m²"
  commune: string;         // ex: "Saint-Genis-Pouilly (01630)"
  priceListed: number;     // prix affiché
  priceSold: number;       // prix vendu
  soldInDays: number;      // délai de vente en jours
  exclusivite: boolean;    // true = Exclusivité / false = Simple
  imageUrl: string;        // ex: "/images/vendus/vendu-01.jpg" (dans public/images/...)
};

const SOLD_PROPERTIES: SoldProperty[] = [
  {
    id: 1,
    title: "Maison de standing T8 de 328m²",
    commune: "Péron (01630)",
    priceListed: 895000,
    priceSold: 895000,
    soldInDays: 60,
    exclusivite: false,
    imageUrl: "/images/vendus/peron.jpg", // ✅ mets ton image ici
  },
];

function badgeClass(label: string) {
  const l = label.toLowerCase();
  if (l.includes("vendu"))
    return "bg-emerald-600/95 text-white border border-emerald-500/40";
  if (l.includes("exclu"))
    return "bg-slate-900/90 text-white border border-white/20";
  if (l.includes("simple"))
    return "bg-white/90 text-slate-900 border border-slate-200";
  return "bg-white/90 text-slate-900 border border-slate-200";
}

function formatEUR(value: number) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatDelay(days: number) {
  // simple et lisible
  if (days < 14) return `${days} jours`;
  const weeks = Math.round(days / 7);
  if (weeks <= 8) return `${weeks} sem.`;
  const months = Math.round(days / 30);
  return `${months} mois`;
}

const SoldProperties: React.FC = () => {
  return (
    <section id="biens-vendus" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Biens vendus
          </h2>
          <p className="mt-3 text-slate-500 max-w-2xl">
            Preuves concrètes : prix, délai, et stratégie (exclusivité ou simple).
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SOLD_PROPERTIES.map((p) => {
            const tags = [
              p.exclusivite ? "Exclusivité" : "Simple",
              "Vendu",
            ];

            return (
              <div key={p.id} className="group">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-4 apple-shadow group-hover:shadow-lg transition-all">
                  <img
                    src={`${import.meta.env.BASE_URL}${p.imageUrl.replace(/^\//, "")}`}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* voile vendu */}
                  <div className="absolute inset-0 bg-black/25" />

                  {/* badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {tags.map((b) => (
                      <span
                        key={`${p.id}-${b}`}
                        className={`px-2 py-1 rounded-lg text-[11px] font-bold shadow-sm backdrop-blur-sm ${badgeClass(b)}`}
                      >
                        {b}
                      </span>
                    ))}
                  </div>

                  {/* delay */}
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-slate-900">
                    ⏱ {formatDelay(p.soldInDays)}
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-baseline gap-3">
                    <p className="text-lg font-bold text-slate-900">
                      {formatEUR(p.priceSold)}
                    </p>
                    <p className="text-sm text-slate-500 line-through">
                      {formatEUR(p.priceListed)}
                    </p>
                  </div>

                  <h3 className="text-slate-900 font-semibold truncate">
                    {p.title}
                  </h3>

                  <p className="text-sm text-slate-500 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 10.5c0 7-7.5 11-7.5 11s-7.5-4-7.5-11a7.5 7.5 0 1115 0z" />
                    </svg>
                    {p.commune}
                  </p>

                  <p className="text-xs text-slate-400">
                    Prix affiché → prix vendu • Délai : {p.soldInDays} jours
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SoldProperties;
