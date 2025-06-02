
import { useState, useEffect, useCallback, RefObject } from 'react';

interface Position {
  top: number;
  left: number;
  maxHeight?: number;
}

interface UseDropdownPositionProps {
  triggerRef: RefObject<HTMLElement>;
  isOpen: boolean;
  offset?: number;
}

export const useDropdownPosition = ({ 
  triggerRef, 
  isOpen, 
  offset = 8 
}: UseDropdownPositionProps) => {
  const [position, setPosition] = useState<Position>({ top: 0, left: 0 });

  const calculatePosition = useCallback(() => {
    if (!triggerRef.current || !isOpen) return;

    const rect = triggerRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;
    
    // Posição base (abaixo do trigger)
    let top = rect.bottom + offset;
    let left = rect.left;
    
    // Ajustar se sair da viewport
    const dropdownWidth = 320; // largura padrão do dropdown
    const dropdownHeight = 400; // altura máxima estimada
    
    // Se sair pela direita, alinhar à direita do trigger
    if (left + dropdownWidth > viewportWidth) {
      left = rect.right - dropdownWidth;
    }
    
    // Se sair por baixo, posicionar acima
    if (top + dropdownHeight > viewportHeight) {
      top = rect.top - dropdownHeight - offset;
    }
    
    // Garantir que não saia pelos lados
    left = Math.max(8, Math.min(left, viewportWidth - dropdownWidth - 8));
    top = Math.max(8, top);
    
    const maxHeight = viewportHeight - top - 16;
    
    setPosition({ top, left, maxHeight });
  }, [triggerRef, isOpen, offset]);

  useEffect(() => {
    if (isOpen) {
      calculatePosition();
      
      const handleResize = () => calculatePosition();
      const handleScroll = () => calculatePosition();
      
      window.addEventListener('resize', handleResize);
      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isOpen, calculatePosition]);

  return position;
};
