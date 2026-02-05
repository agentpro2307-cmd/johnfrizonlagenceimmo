
export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  imageUrl: string;
  type: 'Maison' | 'Appartement' | 'Villa';
}

export interface Testimonial {
  id: string;
  companyLogo: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
}
