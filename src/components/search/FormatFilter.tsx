
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Label } from '../ui/label';
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
    <div className="w-full space-y-2">
      <Label>Formato</Label>
      <Select value={selectedFormat} onValueChange={setSelectedFormat}>
        <SelectTrigger 
          className="w-full h-10 rounded-lg border-gray-200 hover:border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all"
          style={{
            height: '40px',
            borderRadius: designTokens.borderRadius.lg,
            fontSize: designTokens.typography.sizes.sm,
            fontWeight: designTokens.typography.weights.medium,
            fontFamily: designTokens.typography.fonts.primary,
          }}
        >
          <SelectValue 
            placeholder="Selecione um formato"
            style={{
              fontSize: designTokens.typography.sizes.sm,
              fontWeight: designTokens.typography.weights.medium,
              fontFamily: designTokens.typography.fonts.primary,
            }}
          />
        </SelectTrigger>
        <SelectContent className="rounded-lg">
          {formatOptions.map((option) => (
            <SelectItem 
              key={option.value} 
              value={option.value}
              style={{
                fontSize: designTokens.typography.sizes.sm,
                fontWeight: designTokens.typography.weights.medium,
                fontFamily: designTokens.typography.fonts.primary,
              }}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
