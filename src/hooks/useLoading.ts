
import { useState, useCallback } from 'react';

interface UseLoadingReturn {
  isLoading: boolean;
  error: string | null;
  startLoading: () => void;
  stopLoading: () => void;
  setError: (error: string | null) => void;
  withLoading: <T>(asyncFn: () => Promise<T>) => Promise<T | undefined>;
}

export const useLoading = (initialLoading = false): UseLoadingReturn => {
  const [isLoading, setIsLoading] = useState(initialLoading);
  const [error, setError] = useState<string | null>(null);

  const startLoading = useCallback(() => {
    setIsLoading(true);
    setError(null);
  }, []);

  const stopLoading = useCallback(() => {
    setIsLoading(false);
  }, []);

  const withLoading = useCallback(async <T>(asyncFn: () => Promise<T>): Promise<T | undefined> => {
    try {
      startLoading();
      const result = await asyncFn();
      return result;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
      return undefined;
    } finally {
      stopLoading();
    }
  }, [startLoading, stopLoading]);

  return {
    isLoading,
    error,
    startLoading,
    stopLoading,
    setError,
    withLoading,
  };
};
