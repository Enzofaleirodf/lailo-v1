
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { designTokens } from '../../styles/design-tokens';

interface SelectOption {
  value: string;
  label: string;
}

interface SimpleSelectProps {
  options: SelectOption[];
  selected: string;
  onSelect: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export const SimpleSelect = ({ 
  options, 
  selected, 
  onSelect, 
  placeholder = "Selecione...",
  disabled = false
}: SimpleSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(opt => opt.value === selected);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (value: string) => {
    console.log(`Selecionando origem: ${value}`);
    onSelect(value);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={cn(
          "w-full px-3 py-2 text-left border rounded-lg transition-colors flex items-center justify-between",
          disabled 
            ? "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-white border-gray-200 hover:border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        )}
        style={{
          fontSize: designTokens.typography.sizes.sm,
          fontWeight: designTokens.typography.weights.medium,
          fontFamily: designTokens.typography.fonts.primary,
        }}
      >
        <span>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown className={cn(
          "w-4 h-4 transition-transform",
          isOpen && "rotate-180"
        )} />
      </button>

      {isOpen && !disabled && (
        <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleSelect(option.value)}
                className={cn(
                  "w-full px-3 py-2 text-left hover:bg-gray-50 transition-colors",
                  selected === option.value && "bg-blue-50 text-blue-700"
                )}
                style={{
                  fontSize: designTokens.typography.sizes.sm,
                  fontWeight: designTokens.typography.weights.medium,
                  fontFamily: designTokens.typography.fonts.primary,
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
