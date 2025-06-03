
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { designTokens } from '../../styles/design-tokens';

interface TypeOption {
  value: string;
  label: string;
}

interface TypeComboboxProps {
  options: TypeOption[];
  selected: string;
  onSelect: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export const TypeCombobox = ({ 
  options, 
  selected, 
  onSelect, 
  placeholder = "Selecione um tipo",
  disabled = false
}: TypeComboboxProps) => {
  return (
    <Select value={selected} onValueChange={onSelect} disabled={disabled}>
      <SelectTrigger 
        className="h-10 rounded-lg border-gray-200 hover:border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all"
        style={{
          height: '40px',
          borderRadius: designTokens.borderRadius.lg,
        }}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
