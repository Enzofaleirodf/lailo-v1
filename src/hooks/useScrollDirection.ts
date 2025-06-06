
import { useState, useEffect } from 'react';

interface ScrollState {
  scrollY: number;
  scrollDirection: 'up' | 'down';
  isHeaderVisible: boolean;
  isTypeToggleVisible: boolean;
  shouldHideElements: boolean;
}

export const useScrollDirection = () => {
  const [scrollState, setScrollState] = useState<ScrollState>({
    scrollY: 0,
    scrollDirection: 'down',
    isHeaderVisible: true,
    isTypeToggleVisible: true,
    shouldHideElements: false,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollState = () => {
      const scrollY = window.scrollY;
      const scrollDirection = scrollY > lastScrollY ? 'down' : 'up';
      
      // Definir quando os elementos devem começar a se esconder
      const HIDE_THRESHOLD = 50;
      const COMPLETE_HIDE_THRESHOLD = 100;
      
      const shouldHideElements = scrollY > HIDE_THRESHOLD && scrollDirection === 'down';
      const isHeaderVisible = scrollY < COMPLETE_HIDE_THRESHOLD || scrollDirection === 'up';
      const isTypeToggleVisible = scrollY < COMPLETE_HIDE_THRESHOLD || scrollDirection === 'up';

      setScrollState({
        scrollY,
        scrollDirection,
        isHeaderVisible,
        isTypeToggleVisible,
        shouldHideElements,
      });

      lastScrollY = scrollY;
    };

    const handleScroll = () => {
      requestAnimationFrame(updateScrollState);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollState;
};
