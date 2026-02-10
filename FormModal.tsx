import React, { useEffect, useState } from "react";

type Mode = "short" | "qualifying" | "estimation";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  type: Mode;
};

export default function FormModal({ isOpen, onClose, type }: Props) {
  const FORM_ENDPOINT = "https://formspree.io/f/xojnaypn";

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [wantsEstimation, setWantsEstimation] = useState(false);

  const [city, setCity] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [surface, setSurface] = useState("");
  const [rooms, setRooms] = useState("");
  const [timeline, setTimeline] = useState("");

  useEffect(() => {
    if (!isOpen) return;
    setWantsEstimation(type === "estimation");
  }, [isOpen, type]);

  const isEstimation = wantsEstimation;

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const title =
    type === "short"
      ? "Prendre rendez-vous"
      : isEstimation
      ? "Estimer mon bien"
      : "Nous contacter";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload: Record<string, string> = {
      type,
      name,
      phone,
      email,
      _replyto: email,
      message,
      estimation: isEstimation ? "oui" : "non",
      _subject: `[Site] ${
        isEstimation ? "Demande d'estimation" : type === "short" ? "RDV" : "Contact"
      } - ${name}`,
    };

    if (isEstimation) {
      payload.city = city;
      payload.propertyType = propertyType;
      payload.surface = surface;
      payload.rooms = rooms;
      payload.timeline = timeline;
    }

    try {
      console.log("Posting to:", FORM_ENDPOINT);

      const formData = new FormData();
      Object.entries(payload).forEach(([k, v]) => formData.append(k, v));

      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        console.log("Formspree error:", res.status, data);
        throw new Error("Formspree error");
      }

      alert("Merci ! Votre demande a bien été envoyée.");
      onClose();
    } catch (err) {
      console.log(err);
      alert("Oups… impossible d’envoyer pour le moment. Réessaie ou appelle-moi.");
    }
  };

  return (
    <div
      className="fixed inset-0 z-[999] flex items-end md:items-center justify-center"
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/50"
        aria-label="Fermer"
        onClick={onClose}
      />

      <div
        className="relative w-full md:max-w-2xl bg-white md:rounded-3xl shadow-xl
                   h-[100dvh] md:h-auto md:max-h-[85dvh]
                   flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-slate-100 px-6 py-4 md:rounded-t-3xl flex items-start justify-between gap-4">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900">{title}</h3>

          <button
            type="button"
            onClick={onClose}
            className="rounded-xl px-3 py-2 text-slate-600 hover:bg-slate-100"
            aria-label="Fermer"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          <label className="inline-flex items-center gap-2 text-sm text-slate-700 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={wantsEstimation}
              onChange={(e) => setWantsEstimation(e.target.checked)}
              className="h-4 w-4 accent-slate-900"
            />
            <span>Demande d’estimation</span>
          </label>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="name"
                className="w-full rounded-2xl border border-slate-200 px-4 py-3"
                placeholder="Nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                name="phone"
                className="w-full rounded-2xl border border-slate-200 px-4 py-3"
                placeholder="Téléphone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <input
              name="email"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            {isEstimation && (
              <div className="rounded-2xl border border-slate-200 p-4 space-y-4">
                <p className="font-semibold text-slate-900">Informations pour l’estimation</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    name="city"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3"
                    placeholder="Commune"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                  <input
                    name="propertyType"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3"
                    placeholder="Type de bien (appartement, maison...)"
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <input
                    name="surface"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3"
                    placeholder="Surface (m²)"
                    inputMode="numeric"
                    value={surface}
                    onChange={(e) => setSurface(e.target.value)}
                  />
                  <input
                    name="rooms"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3"
                    placeholder="Pièces"
                    inputMode="numeric"
                    value={rooms}
                    onChange={(e) => setRooms(e.target.value)}
                  />
                  <input
                    name="timeline"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3"
                    placeholder="Délai (optionnel)"
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                  />
                </div>
              </div>
            )}

            <textarea
              name="message"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 min-h-[120px]"
              placeholder={isEstimation ? "Détails utiles (travaux, charges, vue, expo...)" : "Votre message"}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <div className="sticky bottom-0 bg-white pt-3 pb-2">
              <button
                className="w-full rounded-2xl bg-slate-900 text-white font-semibold py-3 hover:opacity-90"
                type="submit"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
