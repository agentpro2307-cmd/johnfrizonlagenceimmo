import React from "react";
import { Testimonial } from "../types";

function StarRating({ value = 5 }: { value?: number }) {
  return (
    <div
      className="mt-6 flex justify-center gap-1 text-yellow-400"
      aria-label={`Note : ${value} sur 5`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          aria-hidden="true"
          className={i < value ? "" : "text-slate-200"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function Avatar({ name, src }: { name: string; src?: string }) {
  const initial = (name?.trim()?.[0] ?? "?").toUpperCase();

  if (src && src.trim().length > 0) {
    return (
      <img
        src={src}
        alt={name}
        className="w-14 h-14 rounded-full object-cover border-4 border-slate-50"
        loading="lazy"
      />
    );
  }

  return (
    <div className="w-14 h-14 rounded-full flex items-center justify-center bg-slate-100 text-slate-700 font-bold border-4 border-slate-50">
      {initial}
    </div>
  );
}

type TestimonialUI = Testimonial & { rating?: number };

const TESTIMONIALS: TestimonialUI[] = [
  {
    id: "1",
    companyLogo: "",
    quote:
      "Rapidité et professionnalisme. Contact facile et humain. Je recommande à 100% !",
    author: "Willis Herfort",
    role: "Acheteur",
    avatar: "",
    rating: 5,
  },
  {
    id: "2",
    companyLogo: "",
    quote:
      "Pro et sympathique. Estimation complète et rapide. Je suis très satisfaite et je recommande vivement !",
    author: "Léonore Giuggiola",
    role: "Vendeuse",
    avatar: "",
    rating: 5,
  },
  {
    id: "3",
    companyLogo: "",
    quote: "",
    author: "Sophie Hollies",
    role: "Vendeuse",
    avatar: "",
    rating: 5,
  },
  {
    id: "4",
    companyLogo: "",
    quote: "",
    author: "Lionel Bouvier",
    role: "Vendeur",
    avatar: "",
    rating: 5,
  },
  {
    id: "5",
    companyLogo: "",
    quote: "",
    author: "Hubert Lechien",
    role: "Acheteur",
    avatar: "",
    rating: 5,
  },
  {
    id: "6",
    companyLogo: "",
    quote: "Je recommande viviement Mr Frizon. Notre projet a été facile grâce à lui. Disponibilité, rapidité, à l'écoute...super pro. Nous n'avons pas eu par le passé de tels compliments à faire sur un agent , tellement nous étions considérés comme un produit et non des personnes avec un beau projet humain. Merci Mr Frizon de nous avoir aidé à réaliser notre rêve avec cette belle villa qui nous régale tous les jours.",
    author: "Esther Wonder",
    role: "Acheteur",
    avatar: "",
    rating: 5,
  },
   {
    id: "7",
    companyLogo: "",
    quote: "",
    author: "Surriya Pascucci",
    role: "Acheteur",
    avatar: "",
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-slate-400 uppercase mb-4">
            Témoignages
          </h2>
          <p className="text-4xl font-bold text-slate-900">
            Ils nous ont fait confiance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="relative bg-white p-10 pt-16 rounded-[40px] apple-shadow-hover transition-all"
            >
              {t.quote ? (
                <p className="text-slate-600 italic leading-relaxed mb-4 text-center">
                  "{t.quote}"
                </p>
              ) : (
                <p className="text-slate-400 italic leading-relaxed mb-4 text-center">
                  ""
                </p>
              )}

              {/* ✅ 5 étoiles jaunes (ou note personnalisée si tu changes rating) */}
              <StarRating value={t.rating ?? 5} />

              <div className="flex flex-col items-center gap-3 border-t border-slate-100 pt-8 mt-6">
                <Avatar name={t.author} src={t.avatar} />

                <div className="text-center">
                  <p className="font-bold text-slate-900">{t.author}</p>
                  <p className="text-sm text-slate-400">{t.role}</p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <a
                  href="#"
                  className="text-slate-900 font-bold text-sm inline-flex items-center gap-1 group"
                >
                  Lire le témoignage complet
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
