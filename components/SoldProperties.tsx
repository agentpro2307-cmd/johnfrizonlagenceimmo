import React from "react";

type SoldProperty = {
  id: number;
  title: string;
  commune: string;
  priceListed: number;
  priceSold: number;
  soldInDays: number;
  exclusivite: boolean;
  images: string[];
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
    images: [
      "/images/peron5.jpeg",
      "/images/peron4.jpg",
      "/images/peron3.jpg",
      "/images/peron2.jpeg",
      "/images/peron1.jpg",
      "/images/peron7.jpg",
    ],
  },
  {
    id: 4,
    title: "Appartement T3 de 90m²",
    commune: "Péron (01630)",
    priceListed: 380000,
    priceSold: 370000,
    soldInDays: 5,
    exclusivite: true,
    images: [
      "/images/stay_00401.jpeg",
      "/images/stay_00404.jpeg",
      "/images/stay_00402.jpeg",
      "/images/stay_00403.jpeg",
      "/images/stay_00407.jpeg",
      "/images/stay_00406.jpeg",
    ],
  },
  {
    id: 3,
    title: "Maison T5 Piscine 800m²",
    commune: "Thoiry (01710)",
    priceListed: 817000,
    priceSold: 810000,
    soldInDays: 2,
    exclusivite: false,
    images: [
      "/images/vendus/leo1.jpeg",
      "/images/vendus/leo2.jpeg",
      "/images/vendus/leo3.jpeg",
      "/images/vendus/leo4.jpeg",
      "/images/vendus/leo5.jpeg",
      "/images/vendus/leo6.jpeg",
    ],
  },
  {
    id: 2,
    title: "Maison T5 2017 242m² Dpe A & A",
    commune: "Challex (01630)",
    priceListed: 695000,
    priceSold: 680000,
    soldInDays: 14,
    exclusivite: true,
    images: [
      "/images/vendus/cha1.jpg",
      "/images/vendus/cha2.jpeg",
      "/images/vendus/cha3.jpg",
      "/images/vendus/cha4.jpg",
      "/images/vendus/cha5.jpg",
      "/images/vendus/cha6.jpg",
    ],
  },
];

const resolveImg = (path: string) => {
  const clean = path.replace(/^\//, "");
  return `${import.meta.env.BASE_URL}${clean}`;
};

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
  if (days < 14) return `${days} jours`;
  const weeks = Math.round(days / 7);
  if (weeks <= 8) return `${weeks} sem.`;
  const months = Math.round(days / 30);
  return `${months} mois`;
}

function ImageCarousel({ images, alt }: { images: string[]; alt: string }) {
  const safeImages = Array.isArray(images) ? images.filter(Boolean) : [];
  const [idx, setIdx] = React.useState(0);

  const hasImages = safeImages.length > 0;
  const current = hasImages ? safeImages[Math.min(idx, safeImages.length - 1)] : "";
  const placeholder = `${import.meta.env.BASE_URL}images/placeholder.jpg`;

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/50 bg-white apple-shadow">
      <div className="aspect-[16/10] w-full bg-slate-100">
        <img
          src={hasImages ? resolveImg(current) : placeholder}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = placeholder;
          }}
        />
      </div>

      {safeImages.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => setIdx((v) => (v - 1 + safeImages.length) % safeImages.length)}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/85 hover:bg-white rounded-full w-9 h-9 font-bold text-slate-900"
            aria-label="Photo précédente"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={() => setIdx((v) => (v + 1) % safeImages.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/85 hover:bg-white rounded-full w-9 h-9 font-bold text-slate-900"
            aria-label="Photo suivante"
          >
            ›
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {safeImages.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIdx(i)}
                className={`h-1.5 w-1.5 rounded-full ${i === idx ? "bg-white" : "bg-white/50"}`}
                aria-label={`Aller à la photo ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function SoldProperties() {
  return (
    <section id="biens-vendus" className="scroll-mt-28 py-24 bg-white border-t border-slate-100">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Biens vendus</h2>
          <p className="mt-3 text-slate-500 max-w-2xl">
            Prix affiché, prix vendu, délai, et stratégie (exclusivité ou simple).
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SOLD_PROPERTIES.map((p) => {
            const tags = [p.exclusivite ? "Exclusivité" : "Simple", "Vendu"];

            return (
              <div key={p.id} className="group">
                <div className="relative">
                  <ImageCarousel images={p.images} alt={p.title} />

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
                </div>

                <div className="space-y-1 mt-4">
                  <div className="flex items-baseline gap-3">
                    <p className="text-lg font-bold text-slate-900">{formatEUR(p.priceSold)}</p>
                    <p className="text-sm text-slate-500 line-through">{formatEUR(p.priceListed)}</p>
                  </div>

                  <h3 className="text-slate-900 font-semibold truncate">{p.title}</h3>

                  <p className="text-sm text-slate-500 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 10.5c0 7-7.5 11-7.5 11s-7.5-4-7.5-11a7.5 7.5 0 1115 0z" />
                    </svg>
                    {p.commune}
                  </p>

                  <p className="text-xs text-slate-400">Délai : {formatDelay(p.soldInDays)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
