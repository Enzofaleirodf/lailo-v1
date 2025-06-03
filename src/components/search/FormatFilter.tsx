
import React from 'react';
import { ChevronDown } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
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

  return (
    <div className="min-w-[140px]">
      <Select value={selectedFormat} onValueChange={setSelectedFormat}>
        <SelectTrigger className="w-full">
          <SelectValue />
          <ChevronDown className="h-4 w-4 ml-2" />
        </SelectTrigger>
        <SelectContent>
          {formatOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
