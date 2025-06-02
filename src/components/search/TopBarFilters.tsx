
import React from 'react';
import { cn } from '@/lib/utils';
import { FilterChip } from '../ui/filter-chip';
import { ItemType } from '../../types/search';

interface TopBarFiltersProps {
  itemType: ItemType;
}

export const TopBarFilters = ({ itemType }: TopBarFiltersProps) => {
  const [format, setFormat] = React.useState(''); // Estado inicial vazio
  const [origins, setOrigins] = React.useState<string[]>([]);
  const [stages, setStages] = React.useState<string[]>([]);

  const formatOptions = [
    { value: 'leilao', label: 'Leilão' },
    { value: 'venda-direta', label: 'Venda Direta' }
  ];

  const originOptions = [
    { value: 'extrajudicial', label: 'Extrajudicial' },
    { value: 'judicial', label: 'Judicial' },
    { value: 'particular', label: 'Particular' },
    { value: 'publico', label: 'Público' }
  ];

  const stageOptions = [
    { value: 'praca-unica', label: 'Praça Única' },
    { value: '1a-praca', label: '1ª Praça' },
    { value: '2a-praca', label: '2ª Praça' },
    { value: '3a-praca', label: '3ª Praça' }
  ];

  const handleOriginToggle = (value: string) => {
    setOrigins(prev => 
      prev.includes(value) 
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

  const handleStageToggle = (value: string) => {
    setStages(prev => 
      prev.includes(value) 
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

  const handleFormatSelect = (value: string, closeCallback: () => void) => {
    setFormat(value);
    // Limpar etapas quando mudar para venda direta
    if (value === 'venda-direta') {
      setStages([]);
    }
    // Fechar automaticamente após seleção
    closeCallback();
  };

  const getSelectedOriginLabels = () => {
    return origins.map(origin => 
      originOptions.find(opt => opt.value === origin)?.label || origin
    );
  };

  const getSelectedStageLabels = () => {
    return stages.map(stage => 
      stageOptions.find(opt => opt.value === stage)?.label || stage
    );
  };

  const removeOrigin = (label: string) => {
    const option = originOptions.find(opt => opt.label === label);
    if (option) {
      setOrigins(prev => prev.filter(item => item !== option.value));
    }
  };

  const removeStage = (label: string) => {
    const option = stageOptions.find(opt => opt.label === label);
    if (option) {
      setStages(prev => prev.filter(item => item !== option.value));
    }
  };

  const getFormatLabel = () => {
    if (!format) return 'Formato';
    return formatOptions.find(opt => opt.value === format)?.label || 'Formato';
  };

  return (
    <div className="flex items-start gap-4">
      {/* Filtro Formato */}
      <FilterChip
        label="Formato"
        selectedValue={format ? getFormatLabel() : undefined}
        isActive={!!format}
        onClear={() => setFormat('')}
        className="w-[220px]"
      >
        {({ close }) => (
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 text-base">Formato do Leilão</h4>
            <div className="flex flex-col gap-2">
              {formatOptions.map(option => (
                <button
                  key={option.value}
                  onClick={() => handleFormatSelect(option.value, close)}
                  className={cn(
                    "w-full px-4 py-3 text-left rounded-lg border transition-all duration-200 font-medium",
                    format === option.value
                      ? "bg-blue-50 border-blue-200 text-blue-700"
                      : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300"
                  )}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </FilterChip>

      {/* Filtro Origem */}
      <FilterChip
        label="Origem"
        selectedItems={getSelectedOriginLabels()}
        isActive={origins.length > 0}
        hasMultiple={true}
        onClear={() => setOrigins([])}
        onRemoveItem={removeOrigin}
        className="w-[480px]"
      >
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900 text-base">Origem do Leilão</h4>
          <div className="flex flex-col gap-2">
            {originOptions.map(option => (
              <button
                key={option.value}
                onClick={() => handleOriginToggle(option.value)}
                className={cn(
                  "w-full px-4 py-3 text-left rounded-lg border transition-all duration-200 font-medium",
                  origins.includes(option.value)
                    ? "bg-blue-50 border-blue-200 text-blue-700"
                    : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300"
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </FilterChip>

      {/* Filtro Etapa - sempre visível, mas desabilitado quando Venda Direta */}
      <FilterChip
        label="Etapa"
        selectedItems={getSelectedStageLabels()}
        isActive={stages.length > 0}
        isDisabled={format === 'venda-direta'}
        hasMultiple={true}
        onClear={() => setStages([])}
        onRemoveItem={removeStage}
        className="w-[480px]"
      >
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900 text-base">Etapa do Leilão</h4>
          <div className="flex flex-col gap-2">
            {stageOptions.map(option => (
              <button
                key={option.value}
                onClick={() => handleStageToggle(option.value)}
                className={cn(
                  "w-full px-4 py-3 text-left rounded-lg border transition-all duration-200 font-medium",
                  stages.includes(option.value)
                    ? "bg-blue-50 border-blue-200 text-blue-700"
                    : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300"
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </FilterChip>
    </div>
  );
};
