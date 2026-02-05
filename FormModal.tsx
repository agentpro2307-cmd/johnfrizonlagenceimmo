import React, { useMemo, useState } from "react";

type Mode = "contact" | "estimation" | "rdv";

export default function ContactForm({ defaultMode = "contact" }: { defaultMode?: Mode }) {
  const [mode, setMode] = useState<Mode>(defaultMode);

  const isEstimation = mode === "estimation";

  return (
    <section id="contact" className="scroll-mt-28 py-24 bg-white border-t border-slate-100">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900">Contact</h2>
        <p className="mt-2 text-slate-500">
          Laissez vos coordonnées, je vous rappelle rapidement.
        </p>

        {/* Choix */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={() => setMode("contact")}
            className={`rounded-2xl px-4 py-3 text-sm font-semibold border ${
              mode === "contact" ? "bg-slate-900 text-white border-slate-900" : "border-slate-200 text-slate-900 hover:bg-slate-50"
            }`}
          >
            Contact
          </button>
          <button
            type="button"
            onClick={() => setMode("estimation")}
            className={`rounded-2xl px-4 py-3 text-sm font-semibold border ${
              mode === "estimation" ? "bg-slate-900 text-white border-slate-900" : "border-slate-200 text-slate-900 hover:bg-slate-50"
            }`}
          >
            Estimation
          </button>
          <button
            type="button"
            onClick={() => setMode("rdv")}
            className={`rounded-2xl px-4 py-3 text-sm font-semibold border ${
              mode === "rdv" ? "bg-slate-900 text-white border-slate-900" : "border-slate-200 text-slate-900 hover:bg-slate-50"
            }`}
          >
            Rendez-vous
          </button>
        </div>

        {/* Form */}
        <form
          className="mt-8 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Formulaire envoyé (à connecter)"); // on branchera ensuite (email / Formspree / n8n)
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input className="w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="Nom" required />
            <input className="w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="Téléphone" required />
          </div>

          <input className="w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="Email" type="email" required />

          {/* Champs en plus si Estimation */}
          {isEstimation && (
            <div className="rounded-2xl border border-slate-200 p-4 space-y-4">
              <p className="font-semibold text-slate-900">Informations pour l’estimation</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input className="w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="Commune" />
                <input className="w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="Type de bien (appartement, maison…)" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <input className="w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="Surface (m²)" inputMode="numeric" />
                <input className="w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="Pièces" inputMode="numeric" />
                <input className="w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="Étage / terrain (optionnel)" />
              </div>

              <input className="w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="Délai de vente souhaité (optionnel)" />
            </div>
          )}

          <textarea
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 min-h-[120px]"
            placeholder={isEstimation ? "Détails utiles (travaux, charges, vue, expo…)" : "Votre message"}
          />

          <button className="w-full rounded-2xl bg-slate-900 text-white font-semibold py-3 hover:opacity-90">
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}
