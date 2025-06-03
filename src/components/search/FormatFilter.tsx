
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { ItemType } from '../../types/search';
import { designTokens } from '../../styles/design-tokens';

interface FormatFilterProps {
  itemType: ItemType;
}

export const FormatFilter = ({ itemType }: FormatFilterProps) => {
  const [selectedFormat, setSelectedFormat] = React.useState('Leilão');

  const formatOptions = [
    { value: 'Leilão', label: 'Leilão' },
    { value: 'Venda Direta', label: 'Venda Direta' }
  ];

  return (
    <div className="w-[220px]">
      <Select value={selectedFormat} onValueChange={setSelectedFormat}>
        <SelectTrigger 
          className="w-full h-10 rounded-lg border-gray-200 hover:border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all font-semibold"
          style={{
            height: '40px',
            borderRadius: designTokens.borderRadius.lg,
          }}
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="rounded-lg">
          {formatOptions.map((option) => (
            <SelectItem 
              key={option.value} 
              value={option.value}
              className="font-semibold"
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
