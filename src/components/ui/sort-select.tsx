
import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useDropdownPosition } from '@/hooks/useDropdownPosition';

interface SortSelectProps {
  value: string;
  onValueChange: (value: string) => void;
  options: string[];
  placeholder?: string;
}

export const SortSelect = ({ value, onValueChange, options, placeholder = "Selecione..." }: SortSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  const position = useDropdownPosition({
    triggerRef,
    isOpen,
    offset: 4
  });

  useEffect(() => {
    setPortalRoot(document.body);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (triggerRef.current && !triggerRef.current.contains(event.target as Node)) {
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

  const handleOptionSelect = (option: string) => {
    onValueChange(option);
    setIsOpen(false);
  };

  const dropdownContent = isOpen && portalRoot ? (
    <div 
      className="fixed bg-white border border-gray-200 rounded-lg shadow-lg z-[10000] overflow-hidden"
      style={{
        top: position.top,
        left: position.left,
        width: triggerRef.current?.offsetWidth || 160,
        maxHeight: position.maxHeight || 200
      }}
    >
      <div className="py-1">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => handleOptionSelect(option)}
            className={cn(
              "w-full px-3 py-2 text-left text-sm hover:bg-gray-50 transition-colors",
              value === option && "bg-blue-50 text-blue-700"
            )}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  ) : null;

  return (
    <>
      <button
        ref={triggerRef}
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-between gap-2 whitespace-nowrap rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-[160px]"
      >
        <span className="text-left">{value || placeholder}</span>
        <ChevronDown className={cn(
          "h-4 w-4 transition-transform",
          isOpen && "rotate-180"
        )} />
      </button>

      {portalRoot && createPortal(dropdownContent, portalRoot)}
    </>
  );
};
