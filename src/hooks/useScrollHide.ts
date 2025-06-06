
import { useState, useEffect, useCallback } from 'react';

interface UseScrollHideOptions {
  threshold?: number;
  initialVisible?: boolean;
}

export const useScrollHide = (options: UseScrollHideOptions = {}) => {
  const { threshold = 10, initialVisible = true } = options;
  const [isVisible, setIsVisible] = useState(initialVisible);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    // Se estiver no topo, sempre mostrar
    if (currentScrollY <= threshold) {
      setIsVisible(true);
      setLastScrollY(currentScrollY);
      return;
    }

    // Se scrollou para baixo, esconder
    if (currentScrollY > lastScrollY) {
      setIsVisible(false);
    } 
    // Se scrollou para cima, mostrar
    else if (currentScrollY < lastScrollY) {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY, threshold]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return isVisible;
};
