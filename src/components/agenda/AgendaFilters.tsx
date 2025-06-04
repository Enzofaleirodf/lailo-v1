
import React from 'react';
import { FilterSection } from '../filters/FilterSection';
import { StateSelect } from '../search/location/StateSelect';
import { CitySelect } from '../search/location/CitySelect';

interface AgendaFiltersProps {
  selectedState: string;
  selectedCity: string;
  onStateChange: (state: string) => void;
  onCityChange: (city: string) => void;
}

export const AgendaFilters = ({
  selectedState,
  selectedCity,
  onStateChange,
  onCityChange
}: AgendaFiltersProps) => {
  const handleClearCity = () => {
    onCityChange('Todas as cidades');
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FilterSection title="">
          <StateSelect
            value={selectedState}
            onChange={onStateChange}
            onClearCity={handleClearCity}
          />
        </FilterSection>

        <FilterSection title="">
          <CitySelect
            value={selectedCity}
            onChange={onCityChange}
            selectedState={selectedState}
          />
        </FilterSection>
      </div>
    </div>
  );
};
