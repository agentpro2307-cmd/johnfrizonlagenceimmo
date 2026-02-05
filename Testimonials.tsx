
import React from 'react';
import { Testimonial } from '../types';

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    companyLogo: 'https://picsum.photos/id/1/100/40',
    quote: "Grâce à Horizon Immo, nous avons vendu notre maison à Divonne en moins de 10 jours au prix de l'estimation. L'accompagnement a été parfait du début à la fin.",
    author: "Sophie Bertrand",
    role: "Propriétaire vendeuse",
    avatar: "https://picsum.photos/id/64/100/100"
  },
  {
    id: '2',
    companyLogo: 'https://picsum.photos/id/2/100/40',
    quote: "Une équipe professionnelle qui connaît vraiment le secteur frontalier. Ils ont su dénicher l'appartement idéal pour notre famille à Ferney-Voltaire.",
    author: "Marc & Clara Laurent",
    role: "Acheteurs",
    avatar: "https://picsum.photos/id/65/100/100"
  },
  {
    id: '3',
    companyLogo: 'https://picsum.photos/id/3/100/40',
    quote: "La mise en valeur de mon bien avec les photos professionnelles a fait toute la différence. Je recommande vivement leurs services premium.",
    author: "Julien Faure",
    role: "Investisseur",
    avatar: "https://picsum.photos/id/66/100/100"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-slate-400 uppercase mb-4">Témoignages</h2>
          <p className="text-4xl font-bold text-slate-900">Ils nous ont fait confiance</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="relative bg-white p-10 pt-16 rounded-[40px] apple-shadow-hover transition-all">
              {/* Floating Company Logo (Placeholder for visual style) */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-16 bg-white rounded-2xl apple-shadow flex items-center justify-center p-4">
                 <div className="w-full h-2 bg-slate-100 rounded-full animate-pulse"></div>
              </div>
              
              <p className="text-slate-600 italic leading-relaxed mb-8 text-center">
                "{t.quote}"
              </p>

              <div className="flex flex-col items-center gap-3 border-t border-slate-100 pt-8">
                <img 
                  src={t.avatar} 
                  alt={t.author} 
                  className="w-14 h-14 rounded-full object-cover border-4 border-slate-50"
                />
                <div className="text-center">
                  <p className="font-bold text-slate-900">{t.author}</p>
                  <p className="text-sm text-slate-400">{t.role}</p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <a href="#" className="text-slate-900 font-bold text-sm inline-flex items-center gap-1 group">
                  Lire le témoignage complet 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
