
import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/lib/utils';
import { ChevronDown, Search } from 'lucide-react';
import { useDropdownPosition } from '../../hooks/useDropdownPosition';

interface ComboboxOption {
  value: string;
  label: string;
}

interface SearchableComboboxProps {
  options: ComboboxOption[];
  selected: string;
  onSelect: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export const SearchableCombobox = ({ 
  options, 
  selected, 
  onSelect, 
  placeholder = "Selecione...",
  disabled = false
}: SearchableComboboxProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  const position = useDropdownPosition({
    triggerRef,
    isOpen: isOpen && !disabled,
    offset: 4
  });

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(search.toLowerCase())
  );

  const selectedOption = options.find(opt => opt.value === selected);

  // Inicializar portal root
  useEffect(() => {
    setPortalRoot(document.body);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearch('');
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleOptionSelect = (value: string) => {
    onSelect(value);
    setIsOpen(false);
    setSearch('');
  };

  const dropdownContent = isOpen && !disabled && portalRoot ? (
    <div 
      className="fixed bg-white border border-gray-200 rounded-lg shadow-lg z-[10000] overflow-hidden"
      style={{
        top: position.top,
        left: position.left,
        width: triggerRef.current?.offsetWidth || 280,
        maxHeight: position.maxHeight || 240
      }}
    >
      <div className="p-2 border-b border-gray-100">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar..."
            className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            autoFocus
          />
        </div>
      </div>
      <div className="max-h-44 overflow-y-auto">
        {filteredOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => handleOptionSelect(option.value)}
            className={cn(
              "w-full px-3 py-2 text-left text-sm hover:bg-gray-50 transition-colors",
              selected === option.value && "bg-blue-50 text-blue-700"
            )}
          >
            {option.label}
          </button>
        ))}
        {filteredOptions.length === 0 && (
          <div className="px-3 py-2 text-sm text-gray-500 text-center">
            Nenhum resultado encontrado
          </div>
        )}
      </div>
    </div>
  ) : null;

  return (
    <div className="relative" ref={containerRef}>
      <button
        ref={triggerRef}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={cn(
          "w-full px-3 py-2 text-left border rounded-lg transition-colors flex items-center justify-between",
          disabled 
            ? "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-white border-gray-200 hover:border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        )}
      >
        <span className="text-sm">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown className={cn(
          "w-4 h-4 transition-transform",
          isOpen && "rotate-180"
        )} />
      </button>

      {/* Render dropdown usando Portal */}
      {portalRoot && createPortal(dropdownContent, portalRoot)}
    </div>
  );
};
