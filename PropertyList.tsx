import React from "react";

type Property = {
  id: number;
  title: string;
  price: number;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  type: string;
  imageUrl: string;
  url: string;
  status?: string;     // ex: "Sous offre"
  badges?: string[];   // ex: ["Exclusivité", "Nouveauté"]
};

type Filters = { type?: string; location?: string };

type Props = {
  filters?: Filters;
  onResetFilters?: () => void;
};

const MOCK_PROPERTIES: Property[] = [
  {
    id: 1,
    title: "Chalet 6 pièces 160 m²",
    price: 395000,
    location: "Échallon (01130)",
    beds: 0,
    baths: 0,
    sqft: 160,
    type: "Chalet",
    imageUrl: "/images/escarnot.jpeg",
    url: "https://www.leboncoin.fr/ad/ventes_immobilieres/3079918529",
    badges: ["Exclusivité"],
  },
  {
    id: 2,
    title: "Appartement 4 pièces 84 m²",
    price: 375000,
    location: "Péron (01630)",
    beds: 0,
    baths: 0,
    sqft: 84,
    type: "Appartement",
    imageUrl: "/images/studer.jpg",
    url: "https://www.leboncoin.fr/ad/ventes_immobilieres/3136453554",
    status: "Sous offre",
    badges: ["Exclusivité"],
  },
  {
    id: 7,
    title: "Appartement 5 pièces 112 m²",
    price: 550000,
    location: "Péron (01630)",
    beds: 0,
    baths: 0,
    sqft: 112,
    type: "Appartement",
    imageUrl: "/images/piller.png",
    url: "https://www.leboncoin.fr/ad/ventes_immobilieres/3089369842",
       badges: ["Exclusivité"],
     status: "Sous offre",
  },
  {
    id: 3,
    title: "Appartement 2 pièces 51 m²",
    price: 190000,
    location: "Annemasse 74100 · Quartier Vernand",
    beds: 0,
    baths: 0,
    sqft: 51,
    type: "Appartement",
    imageUrl: "/images/traitée.jpg",
    url: "https://www.leboncoin.fr/ad/ventes_immobilieres/3115340035",
     badges: ["Exclusivité"],
  },
  {
    id: 4,
    title: "Maison 5 pièces 113 m²",
    price: 435000,
    location: "Collonges 01550",
    beds: 0,
    baths: 0,
    sqft: 113,
    type: "Maison mitoyenne",
    imageUrl: "/images/pereira_00001_2.jpg",
    url: "https://www.leboncoin.fr/ad/ventes_immobilieres/3056257502",
    badges: ["Nouveauté"],
  },
  {
    id: 5,
    title: "Villa 8 pièces 228 m²",
    price: 697000,
    location: "Farges 01550",
    beds: 0,
    baths: 0,
    sqft: 228,
    type: "Villa",
    imageUrl: "/images/majetniak.png",
    url: "https://www.leboncoin.fr/ad/ventes_immobilieres/3079918531",
     badges: ["Coup de coeur"],
  },
  {
    id: 6,
    title: "Appartement 2 pièces 34 m²",
    price: 215000,
    location: "Saint-Jean-de-Gonville 01630",
    beds: 0,
    baths: 0,
    sqft: 34,
    type: "Appartement",
    imageUrl: "/images/st-jean.png",
    url: "https://www.leboncoin.fr/ad/ventes_immobilieres/3097744101",
     badges: ["Spécial investissement"],
  },
  {
    id: 8, // ✅ (avant 7) pour éviter doublon
    title: "Appartement 3 pièces 61m²",
    price: 345000,
    location: "Saint Genis Pouilly (01630)",
    beds: 0,
    baths: 0,
    sqft: 61,
    type: "Appartement",
    imageUrl: "/images/guyot.png",
    url: "https://www.leboncoin.fr/ad/ventes_immobilieres/3105580714",
    status: "Sous offre",
    badges: ["Exclusivité"],
  },
];

function badgeClass(label: string) {
  const l = label.toLowerCase();
  if (l.includes("sous offre"))
    return "bg-amber-500/95 text-white border border-amber-400/50";
  if (l.includes("exclu"))
    return "bg-slate-900/90 text-white border border-white/20";
  if (l.includes("nouveau"))
    return "bg-blue-600/90 text-white border border-white/20";
  if (l.includes("spécial investissement"))
    return "bg-blue-600/90 text-white border border-white/20";
  if (l.includes("coup"))
    return "bg-rose-600/90 text-white border border-white/20";
  return "bg-white/90 text-slate-900 border border-slate-200";
}

const PropertyList: React.FC<Props> = ({ filters, onResetFilters }) => {
  const filtered = MOCK_PROPERTIES.filter((p) => {
    const okType = !filters?.type || p.type === filters.type;
    const okLoc =
      !filters?.location ||
      p.location.toLowerCase().includes(filters.location.toLowerCase());
    return okType && okLoc;
  });

  const handleViewAll = () => {
    onResetFilters?.();
    document.getElementById("nos-biens")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="nos-biens" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Dernières pépites du catalogue
            </h2>
            <p className="text-slate-500">
              Une sélection rigoureuse de biens dans les communes les plus
              prisées du Pays de Gex.
            </p>
          </div>

          <button
            type="button"
            onClick={handleViewAll}
            className="flex items-center gap-2 text-slate-900 font-bold hover:text-blue-600 transition-colors"
          >
            Voir tout le catalogue
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filtered.map((prop) => {
            const tags = [
              ...(prop.badges ?? []),
              ...(prop.status ? [prop.status] : []),
            ];

            return (
              <a
                key={`${prop.id}-${prop.url}`}
                href={prop.url}
                target="_blank"
                rel="noreferrer"
                className="group cursor-pointer block"
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-4 apple-shadow group-hover:shadow-lg transition-all">
                  <img
                    src={`${import.meta.env.BASE_URL}${prop.imageUrl.replace(
                      /^\//,
                      ""
                    )}`}
                    alt={prop.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* ✅ badges (type + autres) */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-slate-900 shadow-sm">
                      {prop.type}
                    </div>

                    {tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {tags.map((b) => (
                          <div
                            key={b}
                            className={`px-2 py-1 rounded-lg text-[11px] font-bold shadow-sm backdrop-blur-sm ${badgeClass(
                              b
                            )}`}
                          >
                            {b}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  
                </div>

                <div className="space-y-1">
                  <p className="text-lg font-bold text-slate-900">
                    {new Intl.NumberFormat("fr-FR", {
                      style: "currency",
                      currency: "EUR",
                      maximumFractionDigits: 0,
                    }).format(prop.price)}
                  </p>

                  <h3 className="text-slate-800 font-medium truncate">
                    {prop.title}
                  </h3>

                  <p className="text-sm text-slate-500 flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19.5 10.5c0 7-7.5 11-7.5 11s-7.5-4-7.5-11a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                    {prop.location}
                  </p>

                  <p className="text-xs text-slate-400">{prop.sqft} m²</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PropertyList;
