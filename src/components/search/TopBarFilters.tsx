
import React from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
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
    <div className="flex items-center gap-6">
      {/* Filtro Formato */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-gray-700">Formato:</span>
        <ToggleGroup 
          type="single" 
          value={format} 
          onValueChange={(value) => value && setFormat(value)}
          className="bg-gray-50 p-1 rounded-lg"
        >
          {formatOptions.map(option => (
            <ToggleGroupItem
              key={option.value}
              value={option.value}
              className="px-3 py-1 text-sm rounded-md data-[state=on]:bg-white data-[state=on]:shadow-sm"
            >
              {option.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      {/* Filtro Origem */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-gray-700">Origem:</span>
        <ToggleGroup 
          type="multiple" 
          value={origins} 
          onValueChange={setOrigins}
          className="bg-gray-50 p-1 rounded-lg"
        >
          {originOptions.map(option => (
            <ToggleGroupItem
              key={option.value}
              value={option.value}
              className="px-3 py-1 text-sm rounded-md data-[state=on]:bg-white data-[state=on]:shadow-sm"
            >
              {option.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      {/* Filtro Etapa - só aparece se Formato = Leilão */}
      {format === 'leilao' && (
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700">Etapa:</span>
          <ToggleGroup 
            type="multiple" 
            value={stages} 
            onValueChange={setStages}
            className="bg-gray-50 p-1 rounded-lg"
          >
            {stageOptions.map(option => (
              <ToggleGroupItem
                key={option.value}
                value={option.value}
                className="px-3 py-1 text-sm rounded-md data-[state=on]:bg-white data-[state=on]:shadow-sm"
              >
                {option.label}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
      )}
    </div>
  );
};
