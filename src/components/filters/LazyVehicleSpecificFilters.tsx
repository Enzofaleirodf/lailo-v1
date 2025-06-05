
import { Suspense, lazy } from 'react';
import { LoadingSpinner } from '../ui/LoadingSpinner';

const VehicleSpecificFilters = lazy(() => import('./VehicleSpecificFilters').then(module => ({
  default: module.VehicleSpecificFilters
})));

interface LazyVehicleSpecificFiltersProps {
  brand: string;
  model: string;
  color: string;
  yearRange: [number, number];
  priceRange: [number, number];
  vehicleType: string;
  onBrandChange: (brand: string) => void;
  onModelChange: (model: string) => void;
  onColorChange: (color: string) => void;
  onYearRangeChange: (range: [number, number]) => void;
  onPriceRangeChange: (range: [number, number]) => void;
}

// Fallback que mantém o espaçamento
const VehicleFiltersLoadingFallback = () => (
  <div className="space-y-8">
    <div className="text-center py-4">
      <LoadingSpinner size="sm" />
    </div>
  </div>
);

export const LazyVehicleSpecificFilters = (props: LazyVehicleSpecificFiltersProps) => {
  return (
    <Suspense fallback={<VehicleFiltersLoadingFallback />}>
      <VehicleSpecificFilters {...props} />
    </Suspense>
  );
};
