
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

interface StageFilterProps {
  itemType: ItemType;
  isEnabled: boolean;
}

export const StageFilter = ({ itemType, isEnabled }: StageFilterProps) => {
  const [selectedStage, setSelectedStage] = React.useState('Todas as etapas');

  const stageOptions = [
    { value: 'Todas as etapas', label: 'Todas as etapas' },
    { value: 'praca-unica', label: 'Praça Única' },
    { value: '1a-praca', label: '1ª Praça' },
    { value: '2a-praca', label: '2ª Praça' },
    { value: '3a-praca', label: '3ª Praça' }
  ];

  return (
    <div className="min-w-[160px]">
      <Select 
        value={selectedStage} 
        onValueChange={setSelectedStage}
        disabled={!isEnabled}
      >
        <SelectTrigger className="w-full" disabled={!isEnabled}>
          <SelectValue />
          <ChevronDown className="h-4 w-4 ml-2" />
        </SelectTrigger>
        <SelectContent>
          {stageOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
