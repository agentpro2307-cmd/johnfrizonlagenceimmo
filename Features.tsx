
import React from 'react';

const Features: React.FC = () => {
  const steps = [
    {
      title: "Expertise Locale Unique",
      description: "Notre connaissance approfondie du Pays de Gex et de la région transfrontalière nous permet de valoriser votre bien au plus juste.",
      icon: "🏔️"
    },
    {
      title: "Stratégie Premium",
      description: "Photos professionnelles, visites virtuelles HD et marketing ciblé sur les portails les plus influents.",
      icon: "📸"
    },
    {
      title: "Confiance & Transparence",
      description: "Un interlocuteur unique pour un suivi quotidien. Nous gérons tout, de l'estimation à l'acte authentique.",
      icon: "🤝"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-slate-400 uppercase mb-4">Notre Proposition</h2>
          <p className="text-4xl font-bold text-slate-900">Pourquoi nous confier votre projet ?</p>
          <p className="mt-4 text-slate-500 leading-relaxed">
            Nous ne nous contentons pas de vendre des biens, nous créons des connexions entre des lieux d'exception et des vies à construire.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 apple-shadow-hover transition-all">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed">
                {step.description}
              </p>
              <div className="mt-8">
                <button className="text-slate-900 font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                  En savoir plus 
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
