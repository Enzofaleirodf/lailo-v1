
import { useState, useEffect, useCallback } from 'react';

export const useScrollDirection = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    const throttledScrollHandler = (() => {
      let ticking = false;
      return () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            handleScroll();
            ticking = false;
          });
          ticking = true;
        }
      };
    })();

    window.addEventListener('scroll', throttledScrollHandler, { passive: true });
    return () => window.removeEventListener('scroll', throttledScrollHandler);
  }, [handleScroll]);

  // Interpolação para header mobile (0-60px de scroll = 0 a -56px de transform)
  const getHeaderTransform = useCallback(() => {
    const maxScroll = 60; // Pixels de scroll para transição completa
    const maxTransform = -56; // Altura do header em pixels negativos
    
    if (scrollY <= 0) return 0;
    if (scrollY >= maxScroll) return maxTransform;
    
    // Interpolação linear
    return (scrollY / maxScroll) * maxTransform;
  }, [scrollY]);

  return {
    scrollY,
    headerTransform: getHeaderTransform()
  };
};
