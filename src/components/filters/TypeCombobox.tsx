
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
      <SelectTrigger>
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
