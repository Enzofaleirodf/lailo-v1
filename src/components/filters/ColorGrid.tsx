
import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { designTokens } from '../../styles/design-tokens';

const colorMap: Record<string, string> = {
  'todas-cores': '#f3f4f6',
  'amarelo': '#fbbf24',
  'azul': '#3b82f6',
  'bege': '#f5f5dc',
  'branco': '#ffffff',
  'bronze': '#cd7f32',
  'cinza': '#6b7280',
  'dourado': '#ffd700',
  'grafite': '#2f2f2f',
  'laranja': '#f97316',
  'marrom': '#92400e',
  'prata': '#c0c0c0',
  'preto': '#000000',
  'rosa': '#ec4899',
  'roxo': '#8b5cf6',
  'verde': '#10b981',
  'vermelho': '#ef4444',
  'vinho': '#7f1d1d'
};

interface ColorGridProps {
  colors: string[];
  selected: string;
  onSelect: (color: string) => void;
}

export const ColorGrid = ({ colors, selected, onSelect }: ColorGridProps) => {
  return (
    <div 
      className="grid grid-cols-6 gap-2"
      style={{ gap: designTokens.spacing.sm }}
    >
      {colors.map((color) => {
        const colorKey = color.toLowerCase().replace(/\s+/g, '-');
        const bgColor = colorMap[colorKey] || '#f3f4f6';
        const isSelected = selected === color;
        const isWhiteOrLight = ['branco', 'bege', 'prata', 'todas-cores'].includes(colorKey);
        
        return (
          <button
            key={color}
            onClick={() => onSelect(color)}
            className={cn(
              "w-8 h-8 rounded-full border-2 transition-all duration-200 flex items-center justify-center relative",
              isSelected 
                ? "border-blue-500 ring-2 ring-blue-200" 
                : isWhiteOrLight
                  ? "border-gray-300 hover:border-gray-400"
                  : "border-gray-200 hover:border-gray-300"
            )}
            style={{ 
              backgroundColor: bgColor,
              width: '32px',
              height: '32px',
            }}
            title={color}
          >
            {isSelected && (
              <Check 
                className={cn(
                  "w-4 h-4",
                  isWhiteOrLight ? "text-gray-600" : "text-white"
                )} 
              />
            )}
          </button>
        );
      })}
    </div>
  );
};
