import React from 'react';
import { cn } from '@/lib/utils';
import { FilterChip } from '../ui/filter-chip';
import { LocationFilter } from './LocationFilter';
import { ItemType } from '../../types/search';
import { designTokens } from '../../styles/design-tokens';

interface TopBarFiltersProps {
  itemType: ItemType;
}

export const TopBarFilters = ({
  itemType
}: TopBarFiltersProps) => {
  const [format, setFormat] = React.useState('');
  const [origins, setOrigins] = React.useState<string[]>([]);
  const [stages, setStages] = React.useState<string[]>([]);

  const formatOptions = [{
    value: 'leilao',
    label: 'Leilão'
  }, {
    value: 'venda-direta',
    label: 'Venda Direta'
  }];
  const originOptions = [{
    value: 'extrajudicial',
    label: 'Extrajudicial'
  }, {
    value: 'judicial',
    label: 'Judicial'
  }, {
    value: 'particular',
    label: 'Particular'
  }, {
    value: 'publico',
    label: 'Público'
  }];
  const stageOptions = [{
    value: 'praca-unica',
    label: 'Praça Única'
  }, {
    value: '1a-praca',
    label: '1ª Praça'
  }, {
    value: '2a-praca',
    label: '2ª Praça'
  }, {
    value: '3a-praca',
    label: '3ª Praça'
  }];

  const handleOriginToggle = (value: string) => {
    setOrigins(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
  };
  const handleStageToggle = (value: string) => {
    setStages(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
  };
  const handleFormatSelect = (value: string, closeCallback: () => void) => {
    setFormat(value);
    if (value === 'venda-direta') {
      setStages([]);
    }
    closeCallback();
  };
  const handleSelectAllOrigins = () => {
    setOrigins(originOptions.map(opt => opt.value));
  };
  const handleSelectAllStages = () => {
    setStages(stageOptions.map(opt => opt.value));
  };
  const getSelectedOriginLabels = () => {
    return origins.map(origin => originOptions.find(opt => opt.value === origin)?.label || origin);
  };
  const getSelectedStageLabels = () => {
    return stages.map(stage => stageOptions.find(opt => opt.value === stage)?.label || stage);
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
  const getFilterCount = () => {
    let count = 0;
    if (format) count++;
    count += origins.length;
    count += stages.length;
    return count;
  };
  return (
    <div className="flex items-start gap-4 min-w-0 overflow-visible">
      {/* Filtro de Localização - sempre primeiro */}
      <div className="flex-shrink-0">
        <LocationFilter />
      </div>

      {/* Filtro Formato */}
      <div className="flex-shrink-0">
        <FilterChip 
          label={format ? `${formatOptions.find(opt => opt.value === format)?.label}` : "Formato"} 
          selectedValue={format ? formatOptions.find(opt => opt.value === format)?.label : undefined} 
          isActive={!!format} 
          onClear={() => setFormat('')} 
          aria-label="Filtro de formato do leilão" 
          id="format-filter"
        >
          {({ close }) => (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <h4 className="font-semibold text-gray-900 text-base">Formato do Leilão</h4>
              </div>
              <div className="flex flex-col gap-2">
                {formatOptions.map(option => (
                  <button 
                    key={option.value} 
                    onClick={() => handleFormatSelect(option.value, close)} 
                    className={cn(
                      "w-full px-4 py-3 text-left rounded-lg border transition-all duration-200 font-medium",
                      format === option.value 
                        ? "bg-blue-50 border-blue-200 text-blue-700 ring-1 ring-blue-200/50" 
                        : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300"
                    )} 
                    style={{
                      borderRadius: designTokens.borderRadius.lg,
                      padding: `${designTokens.spacing.md} ${designTokens.spacing.lg}`
                    }}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </FilterChip>
      </div>

      {/* Filtro Origem */}
      <div className="flex-shrink-0">
        <FilterChip 
          label="Origem" 
          selectedItems={getSelectedOriginLabels()} 
          isActive={origins.length > 0} 
          hasMultiple={true} 
          onClear={() => setOrigins([])} 
          onRemoveItem={removeOrigin} 
          onSelectAll={handleSelectAllOrigins} 
          aria-label="Filtro de origem do leilão" 
          id="origin-filter"
        >
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 text-base flex items-center gap-2">
              Origem do Leilão
            </h4>
            <div className="flex flex-col gap-2">
              {originOptions.map(option => (
                <button 
                  key={option.value} 
                  onClick={() => handleOriginToggle(option.value)} 
                  className={cn(
                    "w-full px-4 py-3 text-left rounded-lg border transition-all duration-200 font-medium",
                    origins.includes(option.value) 
                      ? "bg-blue-50 border-blue-200 text-blue-700 ring-1 ring-blue-200/50" 
                      : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300"
                  )} 
                  style={{
                    borderRadius: designTokens.borderRadius.lg,
                    padding: `${designTokens.spacing.md} ${designTokens.spacing.lg}`
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </FilterChip>
      </div>

      {/* Filtro Etapa */}
      <div className="flex-shrink-0">
        <FilterChip 
          label="Etapa" 
          selectedItems={getSelectedStageLabels()} 
          isActive={stages.length > 0} 
          isDisabled={format === 'venda-direta'} 
          hasMultiple={true} 
          onClear={() => setStages([])} 
          onRemoveItem={removeStage} 
          onSelectAll={handleSelectAllStages} 
          aria-label="Filtro de etapa do leilão" 
          id="stage-filter"
        >
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 text-base flex items-center gap-2">
              Etapa do Leilão
            </h4>
            <div className="flex flex-col gap-2">
              {stageOptions.map(option => (
                <button 
                  key={option.value} 
                  onClick={() => handleStageToggle(option.value)} 
                  className={cn(
                    "w-full px-4 py-3 text-left rounded-lg border transition-all duration-200 font-medium",
                    stages.includes(option.value) 
                      ? "bg-blue-50 border-blue-200 text-blue-700 ring-1 ring-blue-200/50" 
                      : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300"
                  )} 
                  style={{
                    borderRadius: designTokens.borderRadius.lg,
                    padding: `${designTokens.spacing.md} ${designTokens.spacing.lg}`
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </FilterChip>
      </div>

      {/* Indicador visual de filtros ativos */}
      {getFilterCount() > 0 && (
        <div className="flex-shrink-0 flex items-center">
          <div 
            className="px-3 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium" 
            style={{
              borderRadius: designTokens.borderRadius.xl,
              padding: `${designTokens.spacing.sm} ${designTokens.spacing.md}`
            }}
          >
            {getFilterCount()} filtro{getFilterCount() > 1 ? 's' : ''} ativo{getFilterCount() > 1 ? 's' : ''}
          </div>
        </div>
      )}
    </div>
  );
};
