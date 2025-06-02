
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

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

interface FiltersStore {
  propertyFilters: PropertyFilters;
  vehicleFilters: VehicleFilters;
  setPropertyFilters: (filters: Partial<PropertyFilters>) => void;
  setVehicleFilters: (filters: Partial<VehicleFilters>) => void;
  resetPropertyFilters: () => void;
  resetVehicleFilters: () => void;
  resetAllFilters: () => void;
}

const defaultPropertyFilters: PropertyFilters = {
  city: '',
  propertyType: [],
  priceRange: [0, 10000000],
  area: [0, 1000],
  rooms: [],
  bathrooms: [],
  parking: false,
  furnished: false,
};

const defaultVehicleFilters: VehicleFilters = {
  city: '',
  brand: [],
  model: [],
  yearRange: [2000, 2025],
  priceRange: [0, 500000],
  fuelType: [],
  transmission: [],
  color: [],
};

export const useFiltersStore = create<FiltersStore>()(
  persist(
    (set, get) => ({
      propertyFilters: defaultPropertyFilters,
      vehicleFilters: defaultVehicleFilters,

      setPropertyFilters: (filters) =>
        set((state) => ({
          propertyFilters: { ...state.propertyFilters, ...filters },
        })),

      setVehicleFilters: (filters) =>
        set((state) => ({
          vehicleFilters: { ...state.vehicleFilters, ...filters },
        })),

      resetPropertyFilters: () =>
        set({ propertyFilters: defaultPropertyFilters }),

      resetVehicleFilters: () =>
        set({ vehicleFilters: defaultVehicleFilters }),

      resetAllFilters: () =>
        set({
          propertyFilters: defaultPropertyFilters,
          vehicleFilters: defaultVehicleFilters,
        }),
    }),
    {
      name: 'auction-filters',
      partialize: (state) => ({
        propertyFilters: state.propertyFilters,
        vehicleFilters: state.vehicleFilters,
      }),
    }
  )
);
