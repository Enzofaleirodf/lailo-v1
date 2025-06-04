
import { useState, useCallback } from 'react';
import { SearchConfig } from '@/types/search';

export const useSearchPage = (config: SearchConfig) => {
  const [isVertical, setIsVertical] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [sortBy, setSortBy] = useState(config.sortOptions[0]);
  const [currentPage, setCurrentPage] = useState(1);

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
  }, []);

  const resetPage = useCallback(() => {
    setCurrentPage(1);
  }, []);

  return {
    isVertical,
    isLoading,
    sortBy,
    currentPage,
    setIsLoading,
    handlePageChange,
    handleSortChange,
    handleLayoutToggle,
    resetPage,
  };
};
