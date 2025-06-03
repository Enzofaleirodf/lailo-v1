
import React from 'react';
import { FilterChip } from '../ui/filter-chip';
import { SegmentedControl } from '../ui/segmented-control';
import { ItemType } from '../../types/search';

interface FormatFilterProps {
  itemType: ItemType;
}

export const FormatFilter = ({ itemType }: FormatFilterProps) => {
  const [selectedFormat, setSelectedFormat] = React.useState('Leilão');

  const formatOptions = [
    { value: 'Leilão', label: 'Leilão' },
    { value: 'Venda Direta', label: 'Venda Direta' }
  ];

  const handleClear = () => {
    setSelectedFormat('Leilão');
  };

  const isActive = selectedFormat && selectedFormat !== 'Leilão';

  return (
    <FilterChip
      label={selectedFormat || 'Formato'}
      isActive={!!isActive}
      onClear={handleClear}
      className="w-[200px]"
      aria-label="Filtro de formato"
      id="format-filter"
    >
      {({ close }) => (
        <div className="space-y-4">
          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 text-base">Formato</h4>
          </div>
          
          <SegmentedControl
            options={formatOptions}
            value={selectedFormat}
            onValueChange={setSelectedFormat}
          />

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
