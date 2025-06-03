
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { designTokens } from '../../../styles/design-tokens';

interface CitySelectProps {
  value: string;
  onChange: (value: string) => void;
  selectedState: string;
}

export const CitySelect = ({ value, onChange, selectedState }: CitySelectProps) => {
  const cityOptions = selectedState && selectedState !== 'Todos os estados' 
    ? ['Todas as cidades', 'São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador'] 
    : ['Todas as cidades'];

  const isDisabled = !selectedState || selectedState === 'Todos os estados';

  return (
    <div>
      <label 
        htmlFor="city-select" 
        className="block text-sm font-medium text-gray-700 mb-2"
        style={{ fontSize: designTokens.typography.sizes.sm }}
      >
        Cidade
      </label>
      <div className="relative">
        <select
          id="city-select"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={isDisabled}
          className="w-full px-3 py-2 pr-10 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed bg-white appearance-none"
          style={{
            borderRadius: designTokens.borderRadius.lg,
            padding: `${designTokens.spacing.sm} 2.5rem ${designTokens.spacing.sm} ${designTokens.spacing.md}`,
          }}
          aria-describedby="city-help"
        >
          {cityOptions.map(city => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        <div id="city-help" className="sr-only">
          Selecione uma cidade específica ou mantenha "Todas as cidades"
        </div>
      </div>
    </div>
  );
};
