
import { useState, useEffect, useRef, useCallback } from 'react';

export const useContainerWidth = () => {
  const [width, setWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const measureWidth = useCallback(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setWidth(rect.width);
    }
  }, []);

  useEffect(() => {
    measureWidth();

    const resizeObserver = new ResizeObserver(() => {
      measureWidth();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [measureWidth]);

  return { containerRef, width };
};
