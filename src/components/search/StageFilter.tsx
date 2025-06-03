
import React from 'react';
import { FilterChip } from '../ui/filter-chip';
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group';
import { ItemType } from '../../types/search';

interface StageFilterProps {
  itemType: ItemType;
  isEnabled: boolean; // Dependente do formato "Leilão"
}

export const StageFilter = ({ itemType, isEnabled }: StageFilterProps) => {
  const [selectedStages, setSelectedStages] = React.useState<string[]>([]);

  const stageOptions = [
    { value: 'praca-unica', label: 'Praça Única' },
    { value: '1a-praca', label: '1ª Praça' },
    { value: '2a-praca', label: '2ª Praça' },
    { value: '3a-praca', label: '3ª Praça' }
  ];

  const handleClear = () => {
    setSelectedStages([]);
  };

  const handleStageToggle = (value: string) => {
    setSelectedStages(prev => 
      prev.includes(value) 
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

  const getDisplayText = () => {
    if (selectedStages.length === 0) return 'Etapa';
    if (selectedStages.length === 1) {
      const stage = stageOptions.find(opt => opt.value === selectedStages[0]);
      return stage?.label || 'Etapa';
    }
    return `${selectedStages.length} selecionadas`;
  };

  const isActive = selectedStages.length > 0;

  return (
    <FilterChip
      label={getDisplayText()}
      selectedItems={selectedStages.map(value => 
        stageOptions.find(opt => opt.value === value)?.label || value
      )}
      isActive={isActive}
      isDisabled={!isEnabled}
      hasMultiple={true}
      onClear={handleClear}
      onRemoveItem={(item) => {
        const option = stageOptions.find(opt => opt.label === item);
        if (option) {
          handleStageToggle(option.value);
        }
      }}
      className="w-[220px]"
      aria-label="Filtro de etapa"
      id="stage-filter"
    >
      {({ close }) => (
        <div className="space-y-4">
          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 text-base">Etapa</h4>
            {!isEnabled && (
              <p className="text-xs text-gray-500 mt-1">
                Disponível apenas para Leilões
              </p>
            )}
          </div>
          
          <ToggleGroup type="multiple" value={selectedStages} onValueChange={setSelectedStages}>
            <div className="grid grid-cols-2 gap-2">
              {stageOptions.map((option) => (
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
