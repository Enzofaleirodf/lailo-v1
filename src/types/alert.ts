
export interface AlertFilters {
  // Filtros comuns
  state?: string;
  city?: string;
  format?: string;
  origin?: string[];
  stage?: string[];
  priceRange?: [number, number];

  // Filtros específicos de imóveis
  propertyCategory?: string;
  propertyType?: string;
  areaRange?: [number, number];

  // Filtros específicos de veículos
  vehicleCategory?: string;
  vehicleType?: string;
  brand?: string;
  model?: string;
  color?: string;
  yearRange?: [number, number];
}

export interface Alert {
  id: string;
  name: string;
  type: 'property' | 'vehicle';
  filters: AlertFilters;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface NotificationSettings {
  site: boolean;
  whatsapp: boolean;
}
