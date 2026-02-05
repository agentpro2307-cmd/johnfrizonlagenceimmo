
import React, { useState } from 'react';
import { Property } from '../types';

const MOCK_PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Villa d\'architecte avec vue Mont-Blanc',
    price: 1850000,
    location: 'Divonne-les-Bains (01220)',
    beds: 5,
    baths: 3,
    sqft: 240,
    type: 'Villa',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Attique contemporain avec terrasse',
    price: 645000,
    location: 'Ferney-Voltaire (01210)',
    beds: 3,
    baths: 2,
    sqft: 95,
    type: 'Appartement',
    imageUrl: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Maison de caractère rénovée',
    price: 920000,
    location: 'Gex (01170)',
    beds: 4,
    baths: 2,
    sqft: 180,
    type: 'Maison',
    imageUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    title: 'Propriété équestre d\'exception',
    price: 2400000,
    location: 'Saint-Genis-Pouilly (01630)',
    beds: 7,
    baths: 5,
    sqft: 450,
    type: 'Villa',
    imageUrl: 'https://images.unsplash.com/photo-1500315331616-db4f707c24d1?auto=format&fit=crop&q=80&w=800'
  }
];

const PropertyList: React.FC = () => {
  return (
    <section id="biens" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Dernières pépites du catalogue</h2>
            <p className="text-slate-500">
              Une sélection rigoureuse de biens dans les communes les plus prisées du Pays de Gex.
            </p>
          </div>
          <button className="flex items-center gap-2 text-slate-900 font-bold hover:text-blue-600 transition-colors">
            Voir tout le catalogue (24 biens)
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {MOCK_PROPERTIES.map((prop) => (
            <div key={prop.id} className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-4 apple-shadow group-hover:shadow-lg transition-all">
                <img 
                  src={prop.imageUrl} 
                  alt={prop.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-slate-900 shadow-sm">
                  {prop.type}
                </div>
                <button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/50 transition-all">
                  ❤️
                </button>
              </div>
              
              <div className="space-y-1">
                <p className="text-lg font-bold text-slate-900">
                  {new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(prop.price)}
                </p>
                <h3 className="text-slate-800 font-medium truncate">{prop.title}</h3>
                <p className="text-sm text-slate-500 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  {prop.location}
                </p>
                
                <div className="flex items-center gap-4 pt-3 text-xs text-slate-400 font-bold uppercase tracking-wider">
                  <span>{prop.beds} ch.</span>
                  <span>{prop.baths} sdb.</span>
                  <span>{prop.sqft} m²</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyList;
