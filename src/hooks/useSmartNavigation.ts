
import { useNavigate, useLocation } from 'react-router-dom';
import { useCallback } from 'react';

export const useSmartNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToItemType = useCallback((newType: 'property' | 'vehicle') => {
    const newPath = newType === 'property' ? '/buscador/imoveis' : '/buscador/veiculos';
    
    // Só navega se não estiver já na rota
    if (location.pathname !== newPath) {
      navigate(newPath, { replace: false });
    }
  }, [navigate, location.pathname]);

  const navigateWithTransition = useCallback((path: string, options?: { replace?: boolean }) => {
    navigate(path, { replace: options?.replace || false });
  }, [navigate]);

  return {
    navigateToItemType,
    navigateWithTransition,
    currentPath: location.pathname
  };
};
