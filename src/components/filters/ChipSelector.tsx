
import React from 'react';
import { cn } from '@/lib/utils';
import { designTokens } from '../../styles/design-tokens';

interface ChipOption {
  value: string;
  label: string;
}

interface ChipSelectorProps {
  options: ChipOption[];
  selected: string;
  onSelect: (value: string) => void;
}

export const ChipSelector = ({ options, selected, onSelect }: ChipSelectorProps) => {
  return (
    <div 
      className="flex flex-wrap gap-2"
      style={{ gap: designTokens.spacing.sm }}
    >
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onSelect(option.value)}
          className={cn(
            "px-3 py-2 rounded-lg transition-all duration-200 border",
            selected === option.value
              ? "bg-blue-50 border-blue-200 text-blue-700 ring-2 ring-blue-200/50"
              : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300"
          )}
          style={{
            borderRadius: designTokens.borderRadius.lg,
            padding: `${designTokens.spacing.sm} ${designTokens.spacing.md}`,
            fontSize: designTokens.typography.sizes.sm,
            fontWeight: designTokens.typography.weights.medium,
            fontFamily: designTokens.typography.fonts.primary,
            height: '40px',
          }}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};
