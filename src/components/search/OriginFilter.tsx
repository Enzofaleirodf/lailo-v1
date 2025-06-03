import React from 'react';
import { ChevronDown } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../ui/popover';
import { Checkbox } from '../ui/checkbox';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { ItemType } from '../../types/search';
import { designTokens } from '../../styles/design-tokens';

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

  const handleSelectAll = () => {
    setSelectedOrigins(originOptions.map(option => option.value));
  };

  const handleClear = () => {
    setSelectedOrigins([]);
  };

  const handleApply = () => {
    setOpen(false);
    console.log('Aplicando filtros de origem:', selectedOrigins);
  };

  const getDisplayText = () => {
    if (selectedOrigins.length === 0) return 'Origem';
    if (selectedOrigins.length === 1) {
      const option = originOptions.find(o => o.value === selectedOrigins[0]);
      return option?.label || 'Origem';
    }
    return `${selectedOrigins.length} selecionadas`;
  };

  const hasSelectedItems = selectedOrigins.length > 0;

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Origem
      </label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full h-10 justify-between rounded-lg border-gray-200 hover:border-gray-300 hover:bg-gray-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all"
            style={{
              height: '40px',
              borderRadius: designTokens.borderRadius.lg,
            }}
          >
            {getDisplayText()}
            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent 
          className="w-[var(--radix-popover-trigger-width)] p-0 rounded-lg"
          style={{
            borderRadius: designTokens.borderRadius.lg,
          }}
        >
          <div 
            className="p-4 space-y-3"
            style={{ padding: designTokens.spacing.lg }}
          >
            <Label className="text-sm font-medium text-gray-900">Origem</Label>
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
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700"
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
          
          <div 
            className="flex items-center justify-between gap-2 px-4 py-3 bg-gray-50 border-t border-gray-100"
            style={{ padding: `${designTokens.spacing.md} ${designTokens.spacing.lg}` }}
          >
            {hasSelectedItems ? (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleClear} 
                className="text-gray-600 hover:text-gray-800"
              >
                Resetar ({selectedOrigins.length})
              </Button>
            ) : (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleSelectAll} 
                className="text-gray-600 hover:text-gray-800"
              >
                Marcar todos
              </Button>
            )}
            
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleApply} 
              className="text-gray-600 hover:text-gray-800 border-gray-300"
            >
              Aplicar
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
