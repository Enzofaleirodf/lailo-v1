
import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { designTokens } from '../../styles/design-tokens';

interface ColorOption {
  value: string;
  label: string;
  color: string;
}

interface ColorPopoverProps {
  colors: ColorOption[];
  selected: string;
  onSelect: (color: string) => void;
}

export const ColorPopover = ({ colors, selected, onSelect }: ColorPopoverProps) => {
  const selectedColor = colors.find(color => color.value === selected);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-full justify-start gap-2 h-10 rounded-lg border-gray-200 hover:border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all"
          style={{
            height: '40px',
            borderRadius: designTokens.borderRadius.lg,
          }}
        >
          <div
            className="w-4 h-4 rounded-full border border-gray-300"
            style={{ backgroundColor: selectedColor?.color || '#f3f4f6' }}
          />
          <span>{selectedColor?.label || 'Selecione uma cor'}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent 
        className="w-80 p-4" 
        align="start"
        style={{
          borderRadius: designTokens.borderRadius.lg,
          padding: designTokens.spacing.lg,
        }}
      >
        <div 
          className="space-y-3"
          style={{ gap: designTokens.spacing.md }}
        >
          <h4 
            className="text-sm font-medium"
            style={{
              fontSize: designTokens.typography.sizes.sm,
              fontWeight: designTokens.typography.weights.medium,
            }}
          >
            Selecione uma cor
          </h4>
          <div 
            className="grid grid-cols-6 gap-2"
            style={{ gap: designTokens.spacing.sm }}
          >
            {colors.map((color) => {
              const isSelected = selected === color.value;
              const isWhiteOrLight = ['branco', 'bege', 'prata', 'todas-cores'].includes(color.value);
              
              return (
                <button
                  key={color.value}
                  onClick={() => onSelect(color.value)}
                  className={cn(
                    "flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-200 hover:bg-gray-50",
                    isSelected && "bg-blue-50"
                  )}
                  style={{
                    borderRadius: designTokens.borderRadius.lg,
                    padding: designTokens.spacing.sm,
                  }}
                  title={color.label}
                >
                  <div
                    className={cn(
                      "w-6 h-6 rounded-full border-2 transition-all duration-200 flex items-center justify-center",
                      isSelected 
                        ? "border-blue-500 ring-2 ring-blue-200" 
                        : isWhiteOrLight
                          ? "border-gray-300"
                          : "border-gray-200"
                    )}
                    style={{ backgroundColor: color.color }}
                  >
                    {isSelected && (
                      <Check 
                        className={cn(
                          "w-3 h-3",
                          isWhiteOrLight ? "text-gray-600" : "text-white"
                        )} 
                      />
                    )}
                  </div>
                  <span 
                    className="text-xs text-gray-600 text-center leading-tight"
                    style={{ fontSize: designTokens.typography.sizes.xs }}
                  >
                    {color.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
