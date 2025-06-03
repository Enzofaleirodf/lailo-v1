
import React from 'react';
import { FilterChip } from '../ui/filter-chip';
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group';
import { ItemType } from '../../types/search';

interface OriginFilterProps {
  itemType: ItemType;
}

export const OriginFilter = ({ itemType }: OriginFilterProps) => {
  const [selectedOrigins, setSelectedOrigins] = React.useState<string[]>([]);

  const originOptions = [
    { value: 'extrajudicial', label: 'Extrajudicial' },
    { value: 'judicial', label: 'Judicial' },
    { value: 'particular', label: 'Particular' },
    { value: 'publico', label: 'Público' }
  ];

  const handleClear = () => {
    setSelectedOrigins([]);
  };

  const handleOriginToggle = (value: string) => {
    setSelectedOrigins(prev => 
      prev.includes(value) 
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

  const getDisplayText = () => {
    if (selectedOrigins.length === 0) return 'Origem';
    if (selectedOrigins.length === 1) {
      const origin = originOptions.find(opt => opt.value === selectedOrigins[0]);
      return origin?.label || 'Origem';
    }
    return `${selectedOrigins.length} selecionadas`;
  };

  const isActive = selectedOrigins.length > 0;

  return (
    <FilterChip
      label={getDisplayText()}
      selectedItems={selectedOrigins.map(value => 
        originOptions.find(opt => opt.value === value)?.label || value
      )}
      isActive={isActive}
      hasMultiple={true}
      onClear={handleClear}
      onRemoveItem={(item) => {
        const option = originOptions.find(opt => opt.label === item);
        if (option) {
          handleOriginToggle(option.value);
        }
      }}
      className="w-[220px]"
      aria-label="Filtro de origem"
      id="origin-filter"
    >
      {({ close }) => (
        <div className="space-y-4">
          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 text-base">Origem</h4>
          </div>
          
          <ToggleGroup type="multiple" value={selectedOrigins} onValueChange={setSelectedOrigins}>
            <div className="grid grid-cols-2 gap-2">
              {originOptions.map((option) => (
                <ToggleGroupItem
                  key={option.value}
                  value={option.value}
                  className="px-3 py-2 text-sm font-medium"
                >
                  {option.label}
                </ToggleGroupItem>
              ))}
            </div>
          </ToggleGroup>

          <div className="flex justify-between pt-4 border-t border-gray-100">
            <button
              onClick={handleClear}
              className="text-sm text-gray-600 hover:text-gray-800 font-medium transition-colors"
            >
              Limpar
            </button>
            <button
              onClick={close}
              className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Aplicar
            </button>
          </div>
        </div>
      )}
    </FilterChip>
  );
};
