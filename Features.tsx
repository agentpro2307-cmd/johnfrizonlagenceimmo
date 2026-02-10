import React, { useMemo, useState } from "react";

type FeatureId = "expertise" | "premium" | "transparence" | "connaissance";

type Feature = {
  id: FeatureId;
  icon: string;
  title: string;
  excerpt: string;
  modalTitle: string;
  modalBody: React.ReactNode;
};

function Modal({
  open,
  title,
  children,
  onClose,
}: {
  open: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      aria-label={title}
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
            onClick={onClose}
            className="rounded-xl px-3 py-2 text-slate-600 hover:bg-slate-100"
            aria-label="Fermer"
            type="button"
          >
            ✕
          </button>
        </div>

        <div className="mt-4 text-slate-700 leading-relaxed">{children}</div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:justify-end">
          <button
            onClick={onClose}
            className="rounded-2xl px-5 py-3 font-semibold border border-slate-200 text-slate-900 hover:bg-slate-50"
            type="button"
          >
            Fermer
          </button>

          <a
            href="#contact"
            onClick={onClose}
            className="rounded-2xl px-5 py-3 font-semibold bg-slate-900 text-white hover:opacity-90 text-center"
          >
            Nous contacter
          </a>
        </div>
      </div>
    </div>
  );
}

const Features: React.FC = () => {
  const [openId, setOpenId] = useState<FeatureId | null>(null);

  const features: Feature[] = useMemo(
    () => [
      {
        id: "expertise",
        icon: "⛰️",
        title: "Expertise Locale Unique",
        excerpt:
          "Connaissance fine du Pays de Gex et du secteur frontalier pour valoriser votre bien au plus juste.",
        modalTitle: "Expertise locale du Pays de Gex & secteur frontalier",
        modalBody: (
          <>
            <p>
              Je connais le Pays de Gex, ses micro-quartiers, ses dynamiques de
              prix, et les attentes réelles des acheteurs (frontaliers,
              familles, investisseurs). Mon rôle : transformer la localisation
              de votre bien en <strong>avantage concret</strong> dans la
              négociation.
            </p>

            <h4 className="mt-5 font-bold text-slate-900">
              Ce que ça change pour vous
            </h4>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Estimation au plus juste (ni “gonflée”, ni sous-évaluée)</li>
              <li>Positionnement vs biens concurrents en temps réel</li>
              <li>
                Argumentaire quartier : écoles, transports, commodités, copro,
                charges
              </li>
              <li>Stratégie de prix : prix d’appel ou prix ferme</li>
            </ul>

            <h4 className="mt-5 font-bold text-slate-900">Ma méthode</h4>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Analyse du marché (comparables + tension locale)</li>
              <li>Plan de mise en vente adapté au secteur</li>
              <li>Optimisation selon retours visites / offres</li>
            </ul>
          </>
        ),
      },
      {
        id: "premium",
        icon: "📸",
        title: "Stratégie Premium",
        excerpt:
          "Photos pro, visite virtuelle et marketing ciblé sur les portails les plus efficaces.",
        modalTitle: "Stratégie Premium : mise en valeur qui fait vendre mieux",
        modalBody: (
          <>
            <p>
              Un bien se vend rarement sur la fiche technique. Il se vend sur
              une <strong>projection</strong>. Mon approche : présenter votre
              bien comme une expérience — sans tricher, mais en le rendant
              irrésistible.
            </p>

            <h4 className="mt-5 font-bold text-slate-900">Inclus</h4>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Photos professionnelles (lumière, cadrage, rendu vendeur)</li>
              <li>Visite virtuelle / contenu immersif (selon le bien)</li>
              <li>Annonce optimisée (titre, accroche, ordre des photos)</li>
              <li>Diffusion multi-portails</li>
              <li>Suivi des performances (clics, demandes, visites)</li>
            </ul>

            <h4 className="mt-5 font-bold text-slate-900">
              Pourquoi ça marche
            </h4>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Plus de visibilité → plus de demandes qualifiées</li>
              <li>Meilleure perception → moins de négociation</li>
              <li>Décision plus rapide → délai de vente réduit</li>
            </ul>
          </>
        ),
      },
      {
        id: "transparence",
        icon: "🤝",
        title: "Confiance & Transparence",
        excerpt:
          "Un interlocuteur unique, un suivi clair, et un accompagnement jusqu’à la signature.",
        modalTitle: "Confiance & Transparence : suivi clair et humain",
        modalBody: (
          <>
            <p>
              Vous avez un interlocuteur unique, disponible, et un suivi concret.
              Mon objectif : que vous sachiez toujours{" "}
              <strong>où on en est</strong>, <strong>ce qui se passe</strong> et{" "}
              <strong>ce qu’on décide ensemble</strong>.
            </p>

            <h4 className="mt-5 font-bold text-slate-900">
              Ce que je vous apporte
            </h4>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Compte-rendu après chaque visite (retours + objections)</li>
              <li>Pré-qualification des acheteurs (financement, délais)</li>
              <li>Recommandations d’ajustement si nécessaire</li>
              <li>Accompagnement jusqu’à la signature (notaire, étapes)</li>
            </ul>

            <h4 className="mt-5 font-bold text-slate-900">Mon engagement</h4>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Transparence sur la stratégie et les résultats</li>
              <li>Zéro blabla : des actions, des retours, des décisions</li>
            </ul>
          </>
        ),
      },
      {
  id: "connaissance",
  icon: "👋",
  title: "Faisons connaissance",
  excerpt:
    "Un accompagnement humain, stratégique et premium — pour vendre mieux ou acheter sereinement.",
  modalTitle: "Faisons connaissance",
  modalBody: (
    <>
      <p>
        Après 5 années comme coach sportif, puis plus de 290 accompagnements
        réussis en tant que conseiller en prévoyance et responsable en gestion de
        patrimoine, j’ai choisi de relever un défi qui me passionne depuis
        longtemps : l’immobilier.
      </p>

      <h4 className="mt-5 font-bold text-slate-900">
        Trois mots guident mon quotidien
      </h4>
      <ul className="mt-2 list-disc pl-5 space-y-1">
        <li>
          <strong>Stratégie</strong> : bâtir un plan d’action sur mesure à chaque
          projet immobilier.
        </li>
        <li>
          <strong>Impact</strong> : faire la différence sur un marché
          concurrentiel grâce à la valorisation, la communication et la précision
          du conseil.
        </li>
        <li>
          <strong>Victoire</strong> : la réussite d’une vente ou d’un achat,
          c’est avant tout celle de mes clients.
        </li>
      </ul>

      <h4 className="mt-5 font-bold text-slate-900">Ma force</h4>
      <p className="mt-2">
        C’est la relation humaine. Je ne me contente pas de vendre un bien :
        j’accompagne chaque personne, chaque famille, dans une étape clé de leur
        vie.
      </p>

      <h4 className="mt-5 font-bold text-slate-900">Mon approche</h4>
      <ul className="mt-2 list-disc pl-5 space-y-1">
        <li>Écoute, transparence et confiance mutuelle</li>
        <li>Un objectif : comprendre pour mieux conseiller</li>
        <li>Une vision de la valeur d’un bien : financière et émotionnelle</li>
      </ul>

      <h4 className="mt-5 font-bold text-slate-900">
        Mise en valeur de chaque bien
      </h4>
      <ul className="mt-2 list-disc pl-5 space-y-1">
        <li>Photos professionnelles</li>
        <li>Vidéos immersives</li>
        <li>Vues drone</li>
        <li>Diffusion ciblée sur plateformes et réseaux sociaux</li>
      </ul>

      <p className="mt-5">
        Authentique, investi et profondément humain, j’avance à vos côtés avec la
        même énergie qu’un coach et la rigueur d’un stratège.
      </p>

      <p className="mt-5">
        Si vous cherchez un agent immobilier de confiance, capable de combiner
        expertise, accompagnement personnalisé et résultats, rencontrons-nous pour
        écrire ensemble votre prochaine victoire.
      </p>

      <p className="mt-6 text-sm text-slate-500">
        Agent commercial (Entreprise individuelle) — Spécialisé en transaction,
        estimation et valorisation immobilière. <br />
        Slogan : Stratégie • Impact • Victoire
      </p>
    </>
  ),
},

    ],
    []
  );

  const active = features.find((f) => f.id === openId);

  return (
    <section id="faisons-connaissance" className="scroll-mt-28 py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-slate-400 uppercase mb-4">
            Notre proposition
          </h2>
          <p className="text-4xl font-bold text-slate-900">
            Pourquoi nous confier votre projet ?
          </p>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            Nous ne nous contentons pas de vendre des biens, nous créons des
            connexions entre des lieux d’exception et des vies à construire.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((f) => (
            <div
              key={f.id}
              className="bg-slate-50 border border-slate-100 rounded-[40px] p-10"
            >
              <div className="h-12 w-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-xl">
                {f.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {f.title}
              </h3>
              <p className="mt-4 text-slate-500 leading-relaxed">{f.excerpt}</p>

              <button
                type="button"
                onClick={() => setOpenId(f.id)}
                className="mt-8 inline-flex items-center gap-2 font-bold text-sm text-slate-900 hover:opacity-80"
              >
                En savoir plus <span>›</span>
              </button>
            </div>
          ))}
        </div>

        <Modal
          open={Boolean(active)}
          title={active?.modalTitle ?? ""}
          onClose={() => setOpenId(null)}
        >
          {active?.modalBody}
        </Modal>
      </div>
    </section>
  );
};

export default Features;
