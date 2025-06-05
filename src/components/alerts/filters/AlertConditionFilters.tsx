
import React from 'react';
import { FilterSection } from '../../filters/FilterSection';
import { ToggleGroup, ToggleGroupItem } from '../../ui/toggle-group';
import { AlertFilters } from '../../../types/alert';

interface AlertConditionFiltersProps {
  filters: AlertFilters;
  onFiltersChange: (filters: AlertFilters) => void;
}

const formatOptions = [
  { value: 'leilao', label: 'Leilão' },
  { value: 'venda-direta', label: 'Venda Direta' },
];

const originOptions = [
  { value: 'extrajudicial', label: 'Extrajudicial' },
  { value: 'judicial', label: 'Judicial' },
  { value: 'particular', label: 'Particular' },
  { value: 'publico', label: 'Público' },
];

const stageOptions = [
  { value: 'praca-unica', label: 'Praça Única' },
  { value: '1a-praca', label: '1ª Praça' },
  { value: '2a-praca', label: '2ª Praça' },
  { value: '3a-praca', label: '3ª Praça' },
];

export const AlertConditionFilters = ({ filters, onFiltersChange }: AlertConditionFiltersProps) => {
  const updateFilter = (key: keyof AlertFilters, value: any) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const isStageEnabled = filters.format === 'leilao' || !filters.format;

  return (
    <>
      {/* Formato */}
      <FilterSection title="Formato">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {formatOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => updateFilter('format', option.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
                (filters.format || 'leilao') === option.value
                  ? 'bg-blue-50 border-blue-200 text-blue-700'
                  : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </FilterSection>

      {/* Origem */}
      <FilterSection title="Origem">
        <ToggleGroup
          type="multiple"
          value={filters.origin || []}
          onValueChange={(value) => updateFilter('origin', value)}
          className="grid grid-cols-1 sm:grid-cols-2 gap-2"
        >
          {originOptions.map((option) => (
            <ToggleGroupItem
              key={option.value}
              value={option.value}
              className="data-[state=on]:bg-blue-50 data-[state=on]:border-blue-200 data-[state=on]:text-blue-700"
            >
              {option.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </FilterSection>

      {/* Etapa */}
      <FilterSection title="Etapa">
        <ToggleGroup
          type="multiple"
          value={filters.stage || []}
          onValueChange={(value) => updateFilter('stage', value)}
          className="grid grid-cols-1 sm:grid-cols-2 gap-2"
          disabled={!isStageEnabled}
        >
          {stageOptions.map((option) => (
            <ToggleGroupItem
              key={option.value}
              value={option.value}
              className={`data-[state=on]:bg-blue-50 data-[state=on]:border-blue-200 data-[state=on]:text-blue-700 ${
                !isStageEnabled ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={!isStageEnabled}
            >
              {option.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
        {!isStageEnabled && (
          <p className="text-xs text-gray-500 mt-1">
            Disponível apenas para leilões
          </p>
        )}
      </FilterSection>
    </>
  );
};
