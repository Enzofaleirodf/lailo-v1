
import { useState, useEffect } from 'react';

interface SmoothScrollState {
  scrollY: number;
  getHeaderTransform: () => number;
  getToggleOpacity: () => number;
  getActionsTop: () => number;
  getContentPadding: () => number;
}

export const useScrollDirection = (): SmoothScrollState => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const updateScrollY = () => {
      setScrollY(window.scrollY);
    };

    const handleScroll = () => {
      requestAnimationFrame(updateScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Header sobe progressivamente de 0 a -56px entre scroll 0-80px
  const getHeaderTransform = () => {
    const start = 0;
    const end = 80;
    const maxTransform = -56;
    
    if (scrollY <= start) return 0;
    if (scrollY >= end) return maxTransform;
    
    const progress = (scrollY - start) / (end - start);
    return progress * maxTransform;
  };

  // Toggle desaparece progressivamente entre scroll 40-100px
  const getToggleOpacity = () => {
    const start = 40;
    const end = 100;
    
    if (scrollY <= start) return 1;
    if (scrollY >= end) return 0;
    
    const progress = (scrollY - start) / (end - start);
    return 1 - progress;
  };

  // Ações sobem progressivamente entre scroll 40-100px
  const getActionsTop = () => {
    const start = 40;
    const end = 100;
    const initialTop = 112; // 72px (header + gap) + 40px (toggle)
    const finalTop = 16;
    
    if (scrollY <= start) return initialTop;
    if (scrollY >= end) return finalTop;
    
    const progress = (scrollY - start) / (end - start);
    return initialTop - (progress * (initialTop - finalTop));
  };

  // Padding do conteúdo se ajusta suavemente
  const getContentPadding = () => {
    const start = 40;
    const end = 100;
    const initialPadding = 152; // Header + gap + toggle + ações
    const finalPadding = 72; // Apenas ações
    
    if (scrollY <= start) return initialPadding;
    if (scrollY >= end) return finalPadding;
    
    const progress = (scrollY - start) / (end - start);
    return initialPadding - (progress * (initialPadding - finalPadding));
  };

  return {
    scrollY,
    getHeaderTransform,
    getToggleOpacity,
    getActionsTop,
    getContentPadding,
  };
};
