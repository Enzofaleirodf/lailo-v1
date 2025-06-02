
import React from 'react';
import { cn } from '@/lib/utils';
import { FilterChip } from '../ui/filter-chip';
import { Badge } from '@/components/ui/badge';
import { ItemType } from '../../types/search';

interface TopBarFiltersProps {
  itemType: ItemType;
}

export const TopBarFilters = ({ itemType }: TopBarFiltersProps) => {
  const [format, setFormat] = React.useState('leilao');
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

  return (
    <div className="flex items-center gap-4">
      {/* Filtro Formato */}
      <FilterChip
        label="Formato"
        isActive={format !== 'leilao'}
        autoClose={true}
        onClear={() => setFormat('leilao')}
      >
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900 text-base">Formato do Leilão</h4>
          <div className="flex flex-col gap-2">
            {formatOptions.map(option => (
              <button
                key={option.value}
                onClick={() => setFormat(option.value)}
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
      </FilterChip>

      {/* Filtro Origem */}
      <FilterChip
        label="Origem"
        isActive={origins.length > 0}
        hasMultiple={true}
        onClear={() => setOrigins([])}
        onApply={() => console.log('Aplicar origens:', origins)}
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
          
          {origins.length > 0 && (
            <div className="pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-600 mb-2">Selecionados:</p>
              <div className="flex flex-wrap gap-1">
                {origins.map(origin => (
                  <Badge key={origin} variant="secondary" className="text-xs">
                    {originOptions.find(opt => opt.value === origin)?.label}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </FilterChip>

      {/* Filtro Etapa - só aparece se Formato = Leilão */}
      {format === 'leilao' && (
        <FilterChip
          label="Etapa"
          isActive={stages.length > 0}
          hasMultiple={true}
          onClear={() => setStages([])}
          onApply={() => console.log('Aplicar etapas:', stages)}
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
            
            {stages.length > 0 && (
              <div className="pt-3 border-t border-gray-100">
                <p className="text-sm text-gray-600 mb-2">Selecionados:</p>
                <div className="flex flex-wrap gap-1">
                  {stages.map(stage => (
                    <Badge key={stage} variant="secondary" className="text-xs">
                      {stageOptions.find(opt => opt.value === stage)?.label}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </FilterChip>
      )}
    </div>
  );
};
