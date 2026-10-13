type Property = {
  id: number;
  title: string;
  price: number;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  type: string;
  imageUrl: string;
  url: string;
  status?: string;     // ex: "Sous offre"
  badges?: string[];   // ex: ["Exclusivité", "Nouveauté"]
};

type SoldProperty = {
  id: number;
  title: string;
  commune: string;
  soldInDays?: number;
  exclusivite: boolean;
  images: string[];

  // ✅ optionnels : si tu ne les mets pas, rien ne s'affiche (pas de NaN)
  priceListed?: number; // prix affiché
  priceSold?: number;   // prix vendu
};

export const properties: Property[] = [
    {
    id: 7,
    title: "Appartement T3/62 m² - Garage double et Balcon côté forêt",
    price: 375000,
    location: "Echenevex 01170",
    beds: 0,
    baths: 0,
    sqft: 62,
    type: "Appartement",
    imageUrl: "/images/sejourbis.png",
    url: "https://www.leboncoin.fr/ad/ventes_immobilieres/3217271271",
     badges: ["sous compromis"],
  },   
  {
   id: 2,
    title: "Grange rénovée 7 pièces 203 m²",
    price: 829000,
    location: "Léaz (01200)",
    beds: 0,
    baths: 0,
    sqft: 203,
    type: "Gamme Luxe",
    imageUrl: "/images/grange.png",
    url: "https://www.leboncoin.fr/ad/ventes_immobilieres/3165039229",
    status: "",
    badges: ["Exclusivité"],
  },
  
  
];

export const soldProperties: SoldProperty[] = [
  {
    id: 10,
    title: "Maison 5 pièces 150m²",
    commune: "Farges (01550)",
    soldInDays: 7,
    exclusivite: false,
    images: [
      "/images/terrasse2.png",
      "/images/Giacsejour.png",
      "/images/Giaccuisine.png",
      "/images/Giacsalon.png",
      "/images/Giacchambre.png",
    ],
  },
  {
    id: 1,
    title: "Maison de standing T8 de 328m²",
    commune: "Péron (01630)",
    soldInDays: 60,
    exclusivite: false,
    images: [
      "/images/peron5.jpeg",
      "/images/peron4.jpg",
      "/images/peron3.jpg",
      "/images/peron2.jpeg",
      "/images/peron1.jpg",
      "/images/peron7.jpg",
    ],
  },
  {
     id: 11,
    title: "Maison T7 de 184m²",
    commune: "Belleydoux (01130)",
    soldInDays: 3,
    exclusivite: true,
    images: [
     "/images/belleydoux1.png",
      "/images/belleydoux2.jpg",
      "/images/belleydoux3.jpg",
      "/images/belleydoux4.jpg",
      "/images/belleydoux5.jpg",
      "/images/belleydoux6.jpg",
       ],
  },
  {
    id: 2,
    title: "Appartement T3 de 90m²",
    commune: "Péron (01630)",
    soldInDays: 5,
    exclusivite: true,
    images: [
      "/images/stay_00401.jpeg",
      "/images/stay_00404.jpeg",
      "/images/stay_00402.jpeg",
      "/images/stay_00403.jpeg",
      "/images/stay_00407.jpeg",
      "/images/stay_00406.jpeg",
    ],
  },
  {
    id: 3,
    title: "Maison T5 Piscine 800m²",
    commune: "Thoiry (01710)",
    soldInDays: 2,
    exclusivite: false,
    images: [
      "/images/vendus/leo1.jpeg",
      "/images/vendus/leo2.jpeg",
      "/images/vendus/leo3.jpeg",
      "/images/vendus/leo4.jpeg",
      "/images/vendus/leo5.jpeg",
      "/images/vendus/leo6.jpeg",
    ],
  },
  {
    id: 4,
    title: "Maison T5 2017 242m² Dpe A & A",
    commune: "Challex (01630)",
    soldInDays: 14,
    exclusivite: true,
    images: [
      "/images/vendus/cha1.jpg",
      "/images/vendus/cha2.jpeg",
      "/images/vendus/cha3.jpg",
      "/images/vendus/cha4.jpg",
      "/images/vendus/cha5.jpg",
      "/images/vendus/cha6.jpg",
    ],
  },
  {
    id: 5,
    title: "Chalet 5 pièces 160m²",
    commune: "Echallon (01130)",
    soldInDays: 90,
    exclusivite: true,
    images: [
      "/images/vendus/escarnot.jpg",
      "/images/vendus/escarnot_00001.jpg",
      "/images/vendus/Design sans titre.png",
      "/images/vendus/escarnot_00011.jpg",
    ],
  },
  {
    id: 6,
    title: "Appartement T4 de 84m²",
    commune: "Péron (01630)",
    soldInDays: 1,
    exclusivite: true,
    images: [
      "/images/studer.jpg",
      "/images/vendus/VA24392original.jpg",
      "/images/vendus/VA24393original.jpg",
      "/images/vendus/VA24395original.jpg",
    ],
  },
  {
    id: 7,
    title: "Appartement 5 pièces 112m²",
    commune: "Peron (01630)",
    soldInDays: 90,
    exclusivite: true,
    images: [
             "/images/vendus/piller.png",
       "/images/vendus/VA231614original.jpg",
      "/images/vendus/VA231613original.jpg",
      "/images/vendus/VA23164original.jpg",
    ],
  },
   {
    id: 8,
    title: "Appartement 2 pièces 34m²",
    commune: "Saint Jean de Gonvilles (01630)",
    soldInDays: 60,
    exclusivite: false,
    images: [
      "/images/vendus/VA23968original.jpg",
      "/images/vendus/VA23965original.jpg",
      "/images/vendus/VA23964original.jpg",

     
    ],
  },
  {
    id: 9,
    title: "Appartement 3 pièces 61m²",
    commune: "Saint Genis-Pouilly (01630)",
    soldInDays: 45,
    exclusivite: true,
    images: [
      "/images/vendus/guyot.png",
      "/images/vendus/VA24027original.jpg",
      "/images/vendus/VA240212original.jpg",
      "/images/vendus/VA240213original.jpg",
      "/images/vendus/VA24029original.jpg",
    ],
  },
];

export const testimonials = [
  {
    id: "1",
    companyLogo: "",
    quote:
      "Rapidité et professionnalisme. Contact facile et humain. Je recommande à 100% !",
    author: "Willis Herfort",
    role: "Acheteur",
    avatar: "",
    rating: 5,
  },
  {
    id: "2",
    companyLogo: "",
    quote:
      "Pro et sympathique. Estimation complète et rapide. Je suis très satisfaite et je recommande vivement !",
    author: "Léonore Giuggiola",
    role: "Vendeuse",
    avatar: "",
    rating: 5,
  },
    {
    id: "3",
    companyLogo: "",
    quote: "Je recommande viviement Mr Frizon. Notre projet a été facile grâce à lui. Disponibilité, rapidité, à l'écoute...super pro. Nous n'avons pas eu par le passé de tels compliments à faire sur un agent , tellement nous étions considérés comme un produit et non des personnes avec un beau projet humain. Merci Mr Frizon de nous avoir aidé à réaliser notre rêve avec cette belle villa qui nous régale tous les jours.",
    author: "Esther Wonder",
    role: "Acheteur",
    avatar: "",
    rating: 5,
  },
  {
    id: "8",
    companyLogo: "",
    quote: "Agent très compétent. Professionnel, efficace et à l’écoute. Merci pour vos conseils et votre disponibilité.",
    author: "LKS",
    role: "Acheteur",
    avatar: "",
    rating: 5,
  },
  {
    id: "4",
    companyLogo: "",
    quote: "",
    author: "Lionel Bouvier",
    role: "Vendeur",
    avatar: "",
    rating: 5,
  },
  {
    id: "5",
    companyLogo: "",
    quote: "",
    author: "Hubert Lechien",
    role: "Acheteur",
    avatar: "",
    rating: 5,
  },
  {
    id: "6",
    companyLogo: "",
    quote: "",
    author: "Sophie Hollies",
    role: "Vendeuse",
    avatar: "",
    rating: 5,
  },
   {
    id: "7",
    companyLogo: "",
    quote: "",
    author: "Surriya Pascucci",
    role: "Acheteur",
    avatar: "",
    rating: 5,
  },
];
