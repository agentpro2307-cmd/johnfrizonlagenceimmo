import React from "react";

type Props = {
  onEstimate: () => void;
  onAppointment: () => void;
};

const CTA: React.FC<Props> = ({ onEstimate, onAppointment }) => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-[48px] bg-slate-900 text-white p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Prêt à concrétiser votre <br /> projet immobilier ?
            </h2>
            <p className="mt-4 text-slate-200">
              Que vous souhaitiez vendre votre villa ou trouver l&apos;appartement de
              vos rêves dans le Pays de Gex, nous sommes là pour vous.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={onEstimate}
                className="px-6 py-3 rounded-2xl bg-white text-slate-900 font-semibold hover:opacity-90"
              >
                Estimer mon bien gratuitement
              </button>

              <button
                type="button"
                onClick={onAppointment}
                className="px-6 py-3 rounded-2xl border border-white/20 text-white font-semibold hover:bg-white/10"
              >
                Prendre rendez-vous
              </button>
            </div>
          </div>

          <div className="rounded-3xl bg-white/10 border border-white/10 p-6 min-w-[280px]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center">
                📞
              </div>
              <div>
                <div className="text-sm text-slate-200">Appelez-moi</div>
                <div className="font-bold">06 34 16 27 16</div>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center">
                ✉️
              </div>
              <div>
                <div className="text-sm text-slate-200">Email direct</div>
                <div className="font-bold">jfrizon@lagenceimmo01.fr</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

