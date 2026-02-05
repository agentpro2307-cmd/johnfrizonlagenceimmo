
import React from 'react';

interface HeroProps {
  onFindHome: () => void;
  onEstimate: () => void;
}

const Hero: React.FC<HeroProps> = ({ onFindHome, onEstimate }) => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-slate-50">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover"
          alt="Luxury Home Background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-slate-900">
            Trouvez le <span className="relative">
              <span className="relative z-10 text-white px-4 py-1 bg-slate-900 rounded-lg">logement idéal</span>
            </span> <br /> pour votre budget.
          </h1>
          
          <p className="text-lg text-slate-600 max-w-md leading-relaxed">
            Expertise immobilière dans le Pays de Gex, l'Ain et la Haute-Savoie. Découvrez des propriétés d'exception et vendez au meilleur prix.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onFindHome}
              className="bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold apple-shadow flex items-center justify-center gap-2 hover:bg-slate-50 transition-all"
            >
              Trouver mon logement idéal 🏡
            </button>
            <button 
              onClick={onEstimate}
              className="bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-slate-800 transition-all"
            >
              Estimer mon bien gratuitement
            </button>
          </div>
        </div>

        <div className="hidden lg:block relative animate-in fade-in zoom-in duration-1000">
           <div className="relative w-full aspect-video rounded-3xl overflow-hidden glass-nav p-4 apple-shadow">
              <img 
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1000" 
                className="w-full h-full object-cover rounded-2xl"
                alt="Featured Property"
              />
              <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/50">
                <div className="flex items-center gap-2 mb-1">
                   <span className="text-red-500 text-lg">❤️</span>
                   <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Exclusivité</span>
                </div>
                <h3 className="text-lg font-bold">Maison 6 pièces</h3>
                <p className="text-xl font-medium text-slate-900">1 245 000€</p>
                <div className="mt-2 flex gap-1">
                  {[1,2,3,4,5].map(i => <div key={i} className="h-1 w-8 bg-slate-200 rounded-full last:bg-slate-900/10 overflow-hidden"></div>)}
                </div>
              </div>
           </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 mt-16 relative z-10">
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 apple-shadow border border-white/40 flex flex-wrap lg:flex-nowrap gap-4 items-end">
          <div className="flex-1 min-w-[200px] space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase ml-1">Type de bien 🏠</label>
            <select className="w-full bg-slate-50 border-none rounded-xl p-3 text-slate-700 outline-none">
              <option>Tous les types</option>
              <option>Maison</option>
              <option>Appartement</option>
            </select>
          </div>
          <div className="flex-1 min-w-[200px] space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase ml-1">Localisation 📍</label>
            <select className="w-full bg-slate-50 border-none rounded-xl p-3 text-slate-700 outline-none">
              <option>Pays de Gex (Divonne...)</option>
              <option>Haute-Savoie (74)</option>
            </select>
          </div>
          <button 
            onClick={onFindHome}
            className="w-full lg:w-auto bg-slate-900 text-white px-10 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all"
          >
            Rechercher
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
