
import { useState, useCallback, useMemo } from 'react';
import { SearchConfig } from '@/types/search';

interface UseSearchPageOptions {
  initialVertical?: boolean;
  initialSort?: string;
  initialPage?: number;
}

export const useSearchPage = (
  config: SearchConfig, 
  options: UseSearchPageOptions = {}
) => {
  const { 
    initialVertical = false, 
    initialSort = config.sortOptions[0], 
    initialPage = 1 
  } = options;

  const [isVertical, setIsVertical] = useState(initialVertical);
  const [isLoading, setIsLoading] = useState(false);
  const [sortBy, setSortBy] = useState(initialSort);
  const [currentPage, setCurrentPage] = useState(initialPage);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    console.log(`Mudando para página ${page}`);
  }, []);

  const handleSortChange = useCallback((sort: string) => {
    setSortBy(sort);
    setCurrentPage(1); // Reset para primeira página ao mudar ordenação
    console.log(`Ordenando por: ${sort}`);
  }, []);

  const handleLayoutToggle = useCallback((vertical: boolean) => {
    setIsVertical(vertical);
    console.log(`Layout alterado para: ${vertical ? 'vertical' : 'horizontal'}`);
  }, []);

  const resetPage = useCallback(() => {
    setCurrentPage(1);
  }, []);

  const resetFilters = useCallback(() => {
    setCurrentPage(1);
    setSortBy(config.sortOptions[0]);
    console.log('Filtros resetados');
  }, [config.sortOptions]);

  // Computed values
  const searchState = useMemo(() => ({
    isVertical,
    isLoading,
    sortBy,
    currentPage,
    config
  }), [isVertical, isLoading, sortBy, currentPage, config]);

  return {
    // State
    ...searchState,
    
    // Actions
    setIsLoading,
    handlePageChange,
    handleSortChange,
    handleLayoutToggle,
    resetPage,
    resetFilters,
  };
};
