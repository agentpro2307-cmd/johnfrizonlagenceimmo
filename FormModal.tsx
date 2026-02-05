import React, { useEffect, useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  type: string; // "short" | "qualifying" | "estimation"
};

export default function FormModal({ isOpen, onClose, type }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Estimation fields
  const [city, setCity] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [surface, setSurface] = useState("");
  const [rooms, setRooms] = useState("");
  const [timeline, setTimeline] = useState("");

  const isEstimation = type === "estimation";

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const title =
    type === "short"
      ? "Prendre rendez-vous"
      : isEstimation
      ? "Estimer mon bien"
      : "Nous contacter";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: brancher vers Formspree ou n8n (on fera après)
    // Pour l'instant : juste log
    console.log({
      type,
      name,
      phone,
      email,
      message,
      ...(isEstimation
        ? { city, propertyType, surface, rooms, timeline }
        : {}),
    });

    alert("Merci ! Votre demande a été envoyée.");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center px-4"
      aria-modal="true"
      role="dialog"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div
        className="relative w-full max-w-2xl rounded-3xl bg-white p-6 md:p-8 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900">
            {title}
          </h3>

          <button
            type="button"
            onClick={onClose}
            className="rounded-xl px-3 py-2 text-slate-600 hover:bg-slate-100"
            aria-label="Fermer"
          >
            ✕
          </button>
        </div>

        {/* ✅ “Estimation” cochée automatiquement */}
        <div className="mt-4 flex items-center gap-2 text-sm text-slate-700">
          <input
            type="checkbox"
            checked={isEstimation}
            readOnly
            className="h-4 w-4"
          />
          <span>Demande d’estimation</span>
        </div>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              className="w-full rounded-2xl border border-slate-200 px-4 py-3"
              placeholder="Nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className="w-full rounded-2xl border border-slate-200 px-4 py-3"
              placeholder="Téléphone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <input
            className="w-full rounded-2xl border border-slate-200 px-4 py-3"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* ✅ Champs en plus uniquement si estimation */}
          {isEstimation && (
            <div className="rounded-2xl border border-slate-200 p-4 space-y-4">
              <p className="font-semibold text-slate-900">
                Informations pour l’estimation
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3"
                  placeholder="Commune"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <input
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3"
                  placeholder="Type de bien (appartement, maison...)"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <input
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3"
                  placeholder="Surface (m²)"
                  inputMode="numeric"
                  value={surface}
                  onChange={(e) => setSurface(e.target.value)}
                />
                <input
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3"
                  placeholder="Pièces"
                  inputMode="numeric"
                  value={rooms}
                  onChange={(e) => setRooms(e.target.value)}
                />
                <input
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3"
                  placeholder="Délai (optionnel)"
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                />
              </div>
            </div>
          )}

          <textarea
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 min-h-[120px]"
            placeholder={
              isEstimation
                ? "Détails utiles (travaux, charges, vue, expo...)"
                : "Votre message"
            }
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button className="w-full rounded-2xl bg-slate-900 text-white font-semibold py-3 hover:opacity-90">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}
