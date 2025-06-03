
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
  const selectedOption = options.find(option => option.value === selected);
  
  return (
    <Select value={selected} onValueChange={onSelect} disabled={disabled}>
      <SelectTrigger 
        className="w-full h-10 rounded-lg border-gray-200 hover:border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all font-medium"
        style={{
          height: '40px',
          borderRadius: designTokens.borderRadius.lg,
        }}
      >
        <SelectValue placeholder={placeholder}>
          {selectedOption ? selectedOption.label : placeholder}
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="max-h-60">
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value} className="font-medium">
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
