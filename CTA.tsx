
import React from 'react';

interface CTAProps {
  onEstimate: () => void;
  onAppointment: () => void;
}

const CTA: React.FC<CTAProps> = ({ onEstimate, onAppointment }) => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden bg-slate-900 rounded-[3rem] p-12 lg:p-20 text-white flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/10 to-transparent pointer-events-none"></div>
          
          <div className="relative z-10 max-w-2xl text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Prêt à concrétiser votre projet immobilier ?
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed mb-8">
              Que vous souhaitiez vendre votre villa ou trouver l'appartement de vos rêves dans le Pays de Gex, nous sommes là pour vous.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={onEstimate}
                className="bg-white text-slate-900 px-10 py-4 rounded-2xl font-bold hover:bg-slate-100 transition-all text-lg shadow-xl"
              >
                Estimer mon bien gratuitement
              </button>
              <button 
                onClick={onAppointment}
                className="bg-slate-800 text-white px-10 py-4 rounded-2xl font-bold border border-slate-700 hover:bg-slate-700 transition-all text-lg"
              >
                Prendre rendez-vous
              </button>
            </div>
          </div>

          <div className="relative z-10 lg:w-1/3">
             <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">📞</div>
                  <div>
                    <p className="text-sm text-slate-400 font-medium">Appelez-nous</p>
                    <p className="text-lg font-bold">06 34 16 27 16</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">📧</div>
                  <div>
                    <p className="text-sm text-slate-400 font-medium">Email direct</p>
                    <p className="text-lg font-bold">jfrizon@lagenceimmo01.fr</p>
                  </div>
                </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
