import React from "react";

const PHONE_DISPLAY = "06 34 16 27 16"; // 
const PHONE_TEL = "+33634162716"; //
const EMAIL = "jfrizon@lagenceimmo01fr"; //

const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-[48px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-10 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left */}
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Prêt à concrétiser votre
              <br />
              projet immobilier ?
            </h2>

            <p className="mt-5 text-slate-300 text-lg leading-relaxed">
              Que vous souhaitiez vendre votre villa ou trouver l&apos;appartement
              de vos rêves dans le Pays de Gex, nous sommes là pour vous.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-2xl px-6 py-4 font-semibold bg-white text-slate-900 hover:opacity-90 transition"
              >
                Estimer mon bien gratuitement
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center rounded-2xl px-6 py-4 font-semibold border border-white/20 text-white hover:bg-white/10 transition"
              >
                Prendre rendez-vous
              </a>
            </div>
          </div>

          {/* Right card */}
          <div className="w-full lg:w-[420px]">
            <div className="rounded-3xl bg-white/10 border border-white/10 backdrop-blur p-6 md:p-7">
              <div className="space-y-5">
                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center">
                    <span className="text-white text-xl">📞</span>
                  </div>
                  <div>
                    <div className="text-sm text-slate-300">Appelez-moi</div>
                    <a
                      className="text-white font-bold text-lg hover:underline"
                      href={`tel:${PHONE_TEL}`}
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center">
                    <span className="text-white text-xl">✉️</span>
                  </div>
                  <div>
                    <div className="text-sm text-slate-300">Email direct</div>
                    <a
                      className="text-white font-bold text-lg hover:underline break-all"
                      href={`mailto:${EMAIL}`}
                    >
                      {EMAIL}
                    </a>
                  </div>
                </div>

                {/* (SUPPRIMÉ) Conseillers disponibles + cercles */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

