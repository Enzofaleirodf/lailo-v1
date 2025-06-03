
import React from 'react';
import { ChevronDown } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../ui/popover';
import { Checkbox } from '../ui/checkbox';
import { Button } from '../ui/button';
import { ItemType } from '../../types/search';

interface StageFilterProps {
  itemType: ItemType;
  isEnabled: boolean;
}

export const StageFilter = ({ itemType, isEnabled }: StageFilterProps) => {
  const [selectedStages, setSelectedStages] = React.useState<string[]>([]);
  const [open, setOpen] = React.useState(false);

  const stageOptions = [
    { value: 'praca-unica', label: 'Praça Única' },
    { value: '1a-praca', label: '1ª Praça' },
    { value: '2a-praca', label: '2ª Praça' },
    { value: '3a-praca', label: '3ª Praça' }
  ];

  const handleStageChange = (stageValue: string, checked: boolean) => {
    if (checked) {
      setSelectedStages([...selectedStages, stageValue]);
    } else {
      setSelectedStages(selectedStages.filter(s => s !== stageValue));
    }
  };

  const getDisplayText = () => {
    if (selectedStages.length === 0) return 'Etapa';
    if (selectedStages.length === 1) {
      const option = stageOptions.find(s => s.value === selectedStages[0]);
      return option?.label || 'Etapa';
    }
    return `${selectedStages.length} selecionadas`;
  };

  return (
    <div className="w-[180px]">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full h-12 justify-between rounded-lg"
            disabled={!isEnabled}
          >
            {getDisplayText()}
            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[180px] p-0 rounded-lg">
          <div className="p-4 space-y-3">
            {stageOptions.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <Checkbox
                  id={option.value}
                  checked={selectedStages.includes(option.value)}
                  onCheckedChange={(checked) => 
                    handleStageChange(option.value, checked as boolean)
                  }
                  disabled={!isEnabled}
                />
                <label
                  htmlFor={option.value}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
