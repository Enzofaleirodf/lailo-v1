
import React from 'react';
import { FilterSection } from '../../filters/FilterSection';
import { SearchableCombobox } from '../../filters/SearchableCombobox';
import { AlertFilters } from '../../../types/alert';

interface AlertLocationFiltersProps {
  filters: AlertFilters;
  onFiltersChange: (filters: AlertFilters) => void;
}

const stateOptions = [
  { value: 'todos-estados', label: 'Todos os estados' },
  { value: 'ac', label: 'Acre' },
  { value: 'al', label: 'Alagoas' },
  { value: 'ap', label: 'Amapá' },
  { value: 'am', label: 'Amazonas' },
  { value: 'ba', label: 'Bahia' },
  { value: 'ce', label: 'Ceará' },
  { value: 'df', label: 'Distrito Federal' },
  { value: 'es', label: 'Espírito Santo' },
  { value: 'go', label: 'Goiás' },
  { value: 'ma', label: 'Maranhão' },
  { value: 'mt', label: 'Mato Grosso' },
  { value: 'ms', label: 'Mato Grosso do Sul' },
  { value: 'mg', label: 'Minas Gerais' },
  { value: 'pa', label: 'Pará' },
  { value: 'pb', label: 'Paraíba' },
  { value: 'pr', label: 'Paraná' },
  { value: 'pe', label: 'Pernambuco' },
  { value: 'pi', label: 'Piauí' },
  { value: 'rj', label: 'Rio de Janeiro' },
  { value: 'rn', label: 'Rio Grande do Norte' },
  { value: 'rs', label: 'Rio Grande do Sul' },
  { value: 'ro', label: 'Rondônia' },
  { value: 'rr', label: 'Roraima' },
  { value: 'sc', label: 'Santa Catarina' },
  { value: 'sp', label: 'São Paulo' },
  { value: 'se', label: 'Sergipe' },
  { value: 'to', label: 'Tocantins' },
];

export const AlertLocationFilters = ({ filters, onFiltersChange }: AlertLocationFiltersProps) => {
  const updateFilter = (key: keyof AlertFilters, value: any) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  return (
    <FilterSection title="Localização">
      <div className="space-y-2 sm:space-y-3">
        <SearchableCombobox
          options={stateOptions}
          selected={filters.state || 'todos-estados'}
          onSelect={(value) => updateFilter('state', value)}
          placeholder="Selecione um estado"
        />
        <SearchableCombobox
          options={[{ value: 'todas-cidades', label: 'Todas as cidades' }]}
          selected={filters.city || 'todas-cidades'}
          onSelect={(value) => updateFilter('city', value)}
          placeholder="Selecione uma cidade"
          disabled={!filters.state || filters.state === 'todos-estados'}
        />
      </div>
    </FilterSection>
  );
};
