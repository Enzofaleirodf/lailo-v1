
import React from 'react';
import { FilterChip } from '../ui/filter-chip';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
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

  return (
    <div className="flex items-center gap-3">
      {/* Filtro Formato */}
      <FilterChip
        label="Formato"
        value={format === 'leilao' ? 'Leilão' : 'Venda Direta'}
        isActive={format !== 'leilao'}
        onClear={() => setFormat('leilao')}
      >
        <div className="space-y-3">
          <h4 className="font-medium text-gray-900">Formato do Leilão</h4>
          <ToggleGroup 
            type="single" 
            value={format} 
            onValueChange={(value) => value && setFormat(value)}
            className="grid grid-cols-1 gap-2 w-full"
          >
            {formatOptions.map(option => (
              <ToggleGroupItem
                key={option.value}
                value={option.value}
                className="justify-start px-3 py-2 data-[state=on]:bg-blue-50 data-[state=on]:text-blue-700 data-[state=on]:border-blue-200"
              >
                {option.label}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
      </FilterChip>

      {/* Filtro Origem */}
      <FilterChip
        label="Origem"
        value={origins}
        isActive={origins.length > 0}
        hasMultiple
        onClear={() => setOrigins([])}
      >
        <div className="space-y-3">
          <h4 className="font-medium text-gray-900">Origem do Leilão</h4>
          <ToggleGroup 
            type="multiple" 
            value={origins} 
            onValueChange={setOrigins}
            className="grid grid-cols-2 gap-2 w-full"
          >
            {originOptions.map(option => (
              <ToggleGroupItem
                key={option.value}
                value={option.value}
                className="justify-start px-3 py-2 text-xs data-[state=on]:bg-blue-50 data-[state=on]:text-blue-700 data-[state=on]:border-blue-200"
              >
                {option.label}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
          {origins.length > 0 && (
            <div className="flex flex-wrap gap-1 pt-2 border-t">
              {origins.map(origin => (
                <Badge key={origin} variant="secondary" className="text-xs">
                  {originOptions.find(opt => opt.value === origin)?.label}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </FilterChip>

      {/* Filtro Etapa - só aparece se Formato = Leilão */}
      {format === 'leilao' && (
        <FilterChip
          label="Etapa"
          value={stages}
          isActive={stages.length > 0}
          hasMultiple
          onClear={() => setStages([])}
        >
          <div className="space-y-3">
            <h4 className="font-medium text-gray-900">Etapa do Leilão</h4>
            <ToggleGroup 
              type="multiple" 
              value={stages} 
              onValueChange={setStages}
              className="grid grid-cols-2 gap-2 w-full"
            >
              {stageOptions.map(option => (
                <ToggleGroupItem
                  key={option.value}
                  value={option.value}
                  className="justify-start px-3 py-2 text-xs data-[state=on]:bg-blue-50 data-[state=on]:text-blue-700 data-[state=on]:border-blue-200"
                >
                  {option.label}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
            {stages.length > 0 && (
              <div className="flex flex-wrap gap-1 pt-2 border-t">
                {stages.map(stage => (
                  <Badge key={stage} variant="secondary" className="text-xs">
                    {stageOptions.find(opt => opt.value === stage)?.label}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </FilterChip>
      )}
    </div>
  );
};
