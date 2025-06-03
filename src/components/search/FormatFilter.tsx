
import React from 'react';
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
    <div className="w-[180px]">
      <Select value={selectedFormat} onValueChange={setSelectedFormat}>
        <SelectTrigger className="w-full h-10 rounded-lg">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="rounded-lg">
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
