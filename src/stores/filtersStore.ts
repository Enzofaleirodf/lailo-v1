
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { PropertyFilters, VehicleFilters, ContentType } from '@/types';

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
