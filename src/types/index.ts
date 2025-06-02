
export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: string;
  discount?: string;
  badges: string[];
  date: string;
  image: string;
  showNewBadge?: boolean;
  location?: string;
  fuelType?: string;
  transmission?: string;
  color?: string;
}

export interface Property {
  id: string;
  type: string;
  area: string;
  address: string;
  cityState: string;
  price: string;
  discount?: string;
  badges: string[];
  date: string;
  image: string;
  showNewBadge?: boolean;
  rooms?: number;
  bathrooms?: number;
  parking?: boolean;
  furnished?: boolean;
}

export interface Favorite {
  id: string;
  itemId: string;
  itemType: 'vehicle' | 'property';
  addedAt: string;
}

export type ContentType = 'property' | 'vehicle';

export interface PropertyFilters {
  city: string;
  propertyType: string[];
  priceRange: [number, number];
  area: [number, number];
  rooms: number[];
  bathrooms: number[];
  parking: boolean;
  furnished: boolean;
}

export interface VehicleFilters {
  city: string;
  brand: string[];
  model: string[];
  yearRange: [number, number];
  priceRange: [number, number];
  fuelType: string[];
  transmission: string[];
  color: string[];
}
