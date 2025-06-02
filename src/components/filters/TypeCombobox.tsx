
import React from 'react';
import { SearchableCombobox } from './SearchableCombobox';

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
    <SearchableCombobox
      options={options}
      selected={selected}
      onSelect={onSelect}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};
