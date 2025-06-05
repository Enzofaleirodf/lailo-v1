
import React from 'react';
import { FilterSection } from '../../filters/FilterSection';
import { SearchableCombobox } from '../../filters/SearchableCombobox';
import { ColorPopover } from '../../filters/ColorPopover';
import { RangeSlider } from '../../filters/RangeSlider';
import { AlertFilters } from '../../../types/alert';

interface AlertVehicleSpecificFiltersProps {
  filters: AlertFilters;
  onFiltersChange: (filters: AlertFilters) => void;
}

const carBrandOptions = [
  { value: 'todas-marcas', label: 'Todas as marcas' },
  { value: 'audi', label: 'Audi' },
  { value: 'bmw', label: 'BMW' },
  { value: 'chevrolet', label: 'Chevrolet' },
  { value: 'fiat', label: 'Fiat' },
  { value: 'ford', label: 'Ford' },
  { value: 'honda', label: 'Honda' },
  { value: 'hyundai', label: 'Hyundai' },
  { value: 'mercedes', label: 'Mercedes-Benz' },
  { value: 'nissan', label: 'Nissan' },
  { value: 'peugeot', label: 'Peugeot' },
  { value: 'renault', label: 'Renault' },
  { value: 'toyota', label: 'Toyota' },
  { value: 'volkswagen', label: 'Volkswagen' },
];

const modelOptions = [
  { value: 'todos-modelos', label: 'Todos os modelos' },
  { value: 'civic', label: 'Civic' },
  { value: 'corolla', label: 'Corolla' },
  { value: 'golf', label: 'Golf' },
  { value: 'onix', label: 'Onix' },
  { value: 'polo', label: 'Polo' },
];

const colorOptions = [
  { value: 'todas-cores', label: 'Todas as cores', color: '#f3f4f6' },
  { value: 'amarelo', label: 'Amarelo', color: '#fbbf24' },
  { value: 'azul', label: 'Azul', color: '#3b82f6' },
  { value: 'bege', label: 'Bege', color: '#d6d3d1' },
  { value: 'branco', label: 'Branco', color: '#ffffff' },
  { value: 'bronze', label: 'Bronze', color: '#b45309' },
  { value: 'cinza', label: 'Cinza', color: '#6b7280' },
  { value: 'dourado', label: 'Dourado', color: '#f59e0b' },
  { value: 'grafite', label: 'Grafite', color: '#374151' },
  { value: 'laranja', label: 'Laranja', color: '#f97316' },
  { value: 'marrom', label: 'Marrom', color: '#a16207' },
  { value: 'prata', label: 'Prata', color: '#9ca3af' },
  { value: 'preto', label: 'Preto', color: '#1f2937' },
  { value: 'rosa', label: 'Rosa', color: '#ec4899' },
  { value: 'roxo', label: 'Roxo', color: '#8b5cf6' },
  { value: 'verde', label: 'Verde', color: '#22c55e' },
  { value: 'vermelho', label: 'Vermelho', color: '#ef4444' },
  { value: 'vinho', label: 'Vinho', color: '#7f1d1d' },
];

export const AlertVehicleSpecificFilters = ({ filters, onFiltersChange }: AlertVehicleSpecificFiltersProps) => {
  const updateFilter = (key: keyof AlertFilters, value: any) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  return (
    <>
      <FilterSection title="Marca e Modelo">
        <div className="space-y-1">
          <SearchableCombobox
            options={carBrandOptions}
            selected={filters.brand || 'todas-marcas'}
            onSelect={(value) => {
              updateFilter('brand', value);
              updateFilter('model', 'todos-modelos'); // Reset modelo
            }}
            placeholder="Selecione uma marca"
          />
          <SearchableCombobox
            options={modelOptions}
            selected={filters.model || 'todos-modelos'}
            onSelect={(value) => updateFilter('model', value)}
            placeholder="Selecione um modelo"
            disabled={!filters.brand || filters.brand === 'todas-marcas'}
          />
        </div>
      </FilterSection>

      <FilterSection title="Cor">
        <ColorPopover
          colors={colorOptions}
          selected={filters.color || 'todas-cores'}
          onSelect={(value) => updateFilter('color', value)}
        />
      </FilterSection>

      <FilterSection title="Ano do veículo">
        <RangeSlider
          value={filters.yearRange || [2000, 2025]}
          onChange={(range) => updateFilter('yearRange', range)}
          min={2000}
          max={2025}
          step={1}
          suffix=""
        />
      </FilterSection>
    </>
  );
};
