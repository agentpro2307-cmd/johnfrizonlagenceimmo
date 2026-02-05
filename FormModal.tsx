
import React, { useState } from 'react';

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: string;
}

const FormModal: React.FC<FormModalProps> = ({ isOpen, onClose, type }) => {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      setStep(1);
      setDirection(null);
    }, 3000);
  };

  const renderSuccess = () => (
    <div className="text-center py-12 animate-in fade-in zoom-in">
      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
        ✓
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-2">Message envoyé !</h3>
      <p className="text-slate-500">Je reviens vers vous sous 24h maximum. Préparez votre café, on va discuter de votre projet.</p>
    </div>
  );

  const renderShortForm = () => (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-400 uppercase">Nom Complet *</label>
          <input required type="text" placeholder="Jean Dupont" className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-slate-900 outline-none" />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-400 uppercase">Téléphone *</label>
          <input required type="tel" placeholder="06 XX XX XX XX" className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-slate-900 outline-none" />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-xs font-bold text-slate-400 uppercase">Email *</label>
        <input required type="email" placeholder="jean@exemple.fr" className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-slate-900 outline-none" />
      </div>
      <div className="space-y-2">
        <label className="text-xs font-bold text-slate-400 uppercase">Votre Projet *</label>
        <select required className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-slate-900 outline-none">
          <option>Je veux vendre</option>
          <option>Je veux acheter</option>
          <option>Besoin d'une estimation</option>
          <option>Autre question</option>
        </select>
      </div>
      <button type="submit" className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all text-lg shadow-xl">
        Envoyer ma demande
      </button>
      <p className="text-[10px] text-slate-400 text-center">
        En envoyant ce formulaire, vous acceptez notre politique de confidentialité (RGPD). Vos données ne seront jamais vendues.
      </p>
    </form>
  );

  const renderQualifyingForm = () => {
    if (step === 1) {
      return (
        <div className="space-y-8 text-center">
          <h3 className="text-2xl font-bold">Quel est votre objectif aujourd'hui ?</h3>
          <div className="grid grid-cols-2 gap-4">
            <button 
              type="button"
              onClick={() => { setDirection('sell'); setStep(2); }} 
              className="p-8 rounded-3xl bg-slate-50 border-2 border-transparent hover:border-slate-900 transition-all group"
            >
              <span className="text-4xl block mb-2">🏠</span>
              <span className="font-bold text-slate-900">Je veux vendre</span>
            </button>
            <button 
              type="button"
              onClick={() => { setDirection('buy'); setStep(2); }} 
              className="p-8 rounded-3xl bg-slate-50 border-2 border-transparent hover:border-slate-900 transition-all group"
            >
              <span className="text-4xl block mb-2">🔑</span>
              <span className="font-bold text-slate-900">Je veux acheter</span>
            </button>
          </div>
        </div>
      );
    }
    return (
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex items-center gap-2 mb-6">
          <button type="button" onClick={() => setStep(1)} className="text-slate-400 hover:text-slate-900">← Retour</button>
          <div className="h-1 flex-1 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-slate-900 w-2/3"></div>
          </div>
        </div>
        
        {direction === 'sell' ? (
          <div className="space-y-4">
            <h4 className="font-bold">Dites-nous en plus sur votre bien</h4>
            <input placeholder="Adresse (Ville ou Quartier)" className="w-full p-4 bg-slate-50 border-none rounded-2xl outline-none" />
            <div className="grid grid-cols-2 gap-4">
              <select className="p-4 bg-slate-50 border-none rounded-2xl outline-none">
                <option>Type: Maison</option>
                <option>Type: Appartement</option>
              </select>
              <input type="number" placeholder="Surface m²" className="p-4 bg-slate-50 border-none rounded-2xl outline-none" />
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <h4 className="font-bold">Vos critères de recherche</h4>
            <select className="w-full p-4 bg-slate-50 border-none rounded-2xl outline-none">
              <option>Budget : inférieur à 500k€</option>
              <option>Budget : 500k - 1M€</option>
              <option>Budget : supérieur à 1M€</option>
            </select>
            <input placeholder="Secteur privilégié (ex: Divonne)" className="w-full p-4 bg-slate-50 border-none rounded-2xl outline-none" />
          </div>
        )}
        
        <div className="space-y-4 border-t border-slate-100 pt-6">
          <input required type="text" placeholder="Nom Complet" className="w-full p-4 bg-slate-50 border-none rounded-2xl outline-none" />
          <input required type="tel" placeholder="Téléphone" className="w-full p-4 bg-slate-50 border-none rounded-2xl outline-none" />
        </div>

        <button type="submit" className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold text-lg">
          Valider mon projet
        </button>
      </form>
    );
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white w-full max-w-xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in fade-in duration-300">
        <button onClick={onClose} className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-slate-100 transition-all z-10">✕</button>
        
        <div className="p-8 md:p-12">
          {!isSubmitted && (
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900">
                {type === 'short' ? "L'Essentiel" : type === 'qualifying' ? "Le Projet Horizon" : "Estimation Experte"}
              </h2>
              <p className="text-slate-500 mt-2">
                {type === 'short' ? "Rapide et efficace, on vous rappelle." : "Détaillez votre vision pour un accompagnement sur mesure."}
              </p>
            </div>
          )}

          {isSubmitted ? renderSuccess() : (
            type === 'short' ? renderShortForm() : renderQualifyingForm()
          )}
        </div>
      </div>
    </div>
  );
};

export default FormModal;
