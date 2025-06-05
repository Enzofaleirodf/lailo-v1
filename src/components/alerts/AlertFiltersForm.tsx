
import React from 'react';
import { AlertFilters } from '../../types/alert';
import { FilterSection } from '../filters/FilterSection';
import { CategoryGrid } from '../filters/CategoryGrid';
import { ChipSelector } from '../filters/ChipSelector';
import { SearchableCombobox } from '../filters/SearchableCombobox';
import { RangeSlider } from '../filters/RangeSlider';
import { ColorPopover } from '../filters/ColorPopover';
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group';
import { propertyCategories, propertyTypes, vehicleCategories, vehicleTypes } from '../../config/alertsData';

interface AlertFiltersFormProps {
  type: 'property' | 'vehicle';
  filters: AlertFilters;
  onFiltersChange: (filters: AlertFilters) => void;
}

export const AlertFiltersForm = ({ type, filters, onFiltersChange }: AlertFiltersFormProps) => {
  const updateFilter = (key: keyof AlertFilters, value: any) => {
    onFiltersChange({ ...filters, [key]: value });
  };

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

  // Convert string arrays to chip options with proper format
  const getTypeOptions = () => {
    if (type === 'property') {
      const category = filters.propertyCategory || 'residenciais';
      return (propertyTypes[category] || []).map(typeStr => ({ 
        value: typeStr.toLowerCase().replace(/\s+/g, '-'), 
        label: typeStr 
      }));
    } else {
      const category = filters.vehicleCategory || 'leves';
      return (vehicleTypes[category] || []).map(typeStr => ({ 
        value: typeStr.toLowerCase().replace(/\s+/g, '-'), 
        label: typeStr 
      }));
    }
  };

  return (
    <div className="space-y-6">
      {/* Localização */}
      <FilterSection title="Localização">
        <div className="space-y-3">
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

      {/* Categoria */}
      <FilterSection title="Categoria">
        <CategoryGrid
          options={type === 'property' ? propertyCategories : vehicleCategories}
          selected={type === 'property' ? (filters.propertyCategory || 'residenciais') : (filters.vehicleCategory || 'leves')}
          onSelect={(value) => {
            if (type === 'property') {
              updateFilter('propertyCategory', value);
              updateFilter('propertyType', 'todos'); // Reset tipo
            } else {
              updateFilter('vehicleCategory', value);
              updateFilter('vehicleType', 'carros'); // Reset tipo
            }
          }}
        />
      </FilterSection>

      {/* Tipo */}
      <FilterSection title="Tipo">
        <ChipSelector
          options={getTypeOptions()}
          selected={type === 'property' ? (filters.propertyType || 'todos') : (filters.vehicleType || 'carros')}
          onSelect={(value) => {
            if (type === 'property') {
              updateFilter('propertyType', value);
            } else {
              updateFilter('vehicleType', value);
            }
          }}
        />
      </FilterSection>

      {/* Filtros específicos de veículos */}
      {type === 'vehicle' && (
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
      )}

      {/* Área útil (apenas para imóveis) */}
      {type === 'property' && (
        <FilterSection title="Área Útil">
          <RangeSlider
            value={filters.areaRange || [50, 500]}
            onChange={(range) => updateFilter('areaRange', range)}
            min={50}
            max={500}
            step={10}
            suffix="m²"
          />
        </FilterSection>
      )}

      {/* Valor do Lance */}
      <FilterSection title="Valor do Lance">
        <RangeSlider
          value={filters.priceRange || [50000, 1000000]}
          onChange={(range) => updateFilter('priceRange', range)}
          min={50000}
          max={1000000}
          step={1000}
          prefix="R$ "
          formatValue={(value) => `R$ ${(value / 1000).toFixed(0)}k`}
        />
      </FilterSection>

      {/* Formato */}
      <FilterSection title="Formato">
        <div className="grid grid-cols-2 gap-2">
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
          className="grid grid-cols-2 gap-2"
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
    </div>
  );
};
