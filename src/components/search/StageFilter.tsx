
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

interface StageFilterProps {
  itemType: ItemType;
  isEnabled: boolean;
  isAlert?: boolean;
}

export const StageFilter = ({ itemType, isEnabled, isAlert }: StageFilterProps) => {
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

  const handleSelectAll = () => {
    setSelectedStages(stageOptions.map(option => option.value));
  };

  const handleClear = () => {
    setSelectedStages([]);
  };

  const handleApply = () => {
    setOpen(false);
    console.log('Aplicando filtros de etapa:', selectedStages);
  };

  const getDisplayText = () => {
    if (selectedStages.length === 0) return 'Selecione uma etapa';
    if (selectedStages.length === 1) {
      const option = stageOptions.find(s => s.value === selectedStages[0]);
      return option?.label || 'Selecione uma etapa';
    }
    return `${selectedStages.length} selecionadas`;
  };

  const hasSelectedItems = selectedStages.length > 0;

  return (
    <div className="w-full">
      {isAlert && <Label className="mb-2 block">Etapa</Label>}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full h-10 justify-between rounded-lg transition-all"
            disabled={!isEnabled}
            style={{
              height: '40px',
              borderRadius: designTokens.borderRadius.lg,
              fontSize: designTokens.typography.sizes.sm,
              fontWeight: designTokens.typography.weights.medium,
              fontFamily: designTokens.typography.fonts.primary,
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
            <Label 
              className="text-gray-900"
              style={{
                fontSize: designTokens.typography.sizes.sm,
                fontWeight: designTokens.typography.weights.medium,
                fontFamily: designTokens.typography.fonts.primary,
              }}
            >
              Etapa
            </Label>
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
                  className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700"
                  style={{
                    fontSize: designTokens.typography.sizes.sm,
                    fontWeight: designTokens.typography.weights.medium,
                    fontFamily: designTokens.typography.fonts.primary,
                  }}
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
                disabled={!isEnabled}
                style={{
                  fontSize: designTokens.typography.sizes.sm,
                  fontWeight: designTokens.typography.weights.medium,
                  fontFamily: designTokens.typography.fonts.primary,
                }}
              >
                Resetar ({selectedStages.length})
              </Button>
            ) : (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleSelectAll} 
                className="text-gray-600 hover:text-gray-800"
                disabled={!isEnabled}
                style={{
                  fontSize: designTokens.typography.sizes.sm,
                  fontWeight: designTokens.typography.weights.medium,
                  fontFamily: designTokens.typography.fonts.primary,
                }}
              >
                Marcar todos
              </Button>
            )}
            
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleApply} 
              className="text-gray-600 hover:text-gray-800 border-gray-300"
              disabled={!isEnabled}
              style={{
                fontSize: designTokens.typography.sizes.sm,
                fontWeight: designTokens.typography.weights.medium,
                fontFamily: designTokens.typography.fonts.primary,
              }}
            >
              Aplicar
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
