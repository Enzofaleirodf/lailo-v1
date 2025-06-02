
import { useLocation } from 'react-router-dom';
import { ContentType } from '../stores/filtersStore';

export const useContentType = (): ContentType | null => {
  const location = useLocation();
  
  if (location.pathname.includes('/imoveis') || location.pathname.includes('/property')) {
    return 'property';
  }
  
  if (location.pathname.includes('/veiculos') || location.pathname.includes('/vehicle')) {
    return 'vehicle';
  }
  
  return null;
};

export const useIsPropertyPage = (): boolean => {
  return useContentType() === 'property';
};

export const useIsVehiclePage = (): boolean => {
  return useContentType() === 'vehicle';
};
