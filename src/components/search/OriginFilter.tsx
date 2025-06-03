
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

interface OriginFilterProps {
  itemType: ItemType;
}

export const OriginFilter = ({ itemType }: OriginFilterProps) => {
  const [selectedOrigin, setSelectedOrigin] = React.useState('Todas as origens');

  const originOptions = [
    { value: 'Todas as origens', label: 'Todas as origens' },
    { value: 'extrajudicial', label: 'Extrajudicial' },
    { value: 'judicial', label: 'Judicial' },
    { value: 'particular', label: 'Particular' },
    { value: 'publico', label: 'Público' }
  ];

  return (
    <div className="min-w-[160px]">
      <Select value={selectedOrigin} onValueChange={setSelectedOrigin}>
        <SelectTrigger className="w-full">
          <SelectValue />
          <ChevronDown className="h-4 w-4 ml-2" />
        </SelectTrigger>
        <SelectContent>
          {originOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
