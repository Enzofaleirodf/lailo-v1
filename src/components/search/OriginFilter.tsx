
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

interface OriginFilterProps {
  itemType: ItemType;
}

export const OriginFilter = ({ itemType }: OriginFilterProps) => {
  const [selectedOrigins, setSelectedOrigins] = React.useState<string[]>([]);
  const [open, setOpen] = React.useState(false);

  const originOptions = [
    { value: 'extrajudicial', label: 'Extrajudicial' },
    { value: 'judicial', label: 'Judicial' },
    { value: 'particular', label: 'Particular' },
    { value: 'publico', label: 'Público' }
  ];

  const handleOriginChange = (originValue: string, checked: boolean) => {
    if (checked) {
      setSelectedOrigins([...selectedOrigins, originValue]);
    } else {
      setSelectedOrigins(selectedOrigins.filter(o => o !== originValue));
    }
  };

  const getDisplayText = () => {
    if (selectedOrigins.length === 0) return 'Origem';
    if (selectedOrigins.length === 1) {
      const option = originOptions.find(o => o.value === selectedOrigins[0]);
      return option?.label || 'Origem';
    }
    return `${selectedOrigins.length} selecionadas`;
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
          >
            {getDisplayText()}
            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[180px] p-0 rounded-lg">
          <div className="p-4 space-y-3">
            {originOptions.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <Checkbox
                  id={option.value}
                  checked={selectedOrigins.includes(option.value)}
                  onCheckedChange={(checked) => 
                    handleOriginChange(option.value, checked as boolean)
                  }
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
