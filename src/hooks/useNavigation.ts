
import { useLocation } from 'react-router-dom';
import { useAuth } from './useAuth';

interface NavItem {
  to: string;
  icon: string;
  label: string;
  pattern: string;
}

export const useNavigation = () => {
  const location = useLocation();
  const { isAuthenticated, isAdmin } = useAuth();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    if (path === "/favoritos/imoveis") {
      return location.pathname.startsWith("/favoritos");
    }
    return location.pathname === path || location.pathname.startsWith(path);
  };

  const navigationConfig = {
    main: [
      { to: "/buscador/veiculos", icon: "Car", label: "Veículos", pattern: "veiculos" },
      { to: "/buscador/imoveis", icon: "Home", label: "Imóveis", pattern: "imoveis" },
      { to: "/leiloeiros", icon: "Gavel", label: "Leiloeiros", pattern: "leiloeiros" },
      { to: "/agenda", icon: "Calendar", label: "Agenda", pattern: "agenda" },
    ] as NavItem[],
    
    favorites: [
      { to: "/favoritos/veiculos", icon: "Heart", label: "Favoritos Veículos", pattern: "favoritos/veiculos" },
      { to: "/favoritos/imoveis", icon: "Heart", label: "Favoritos Imóveis", pattern: "favoritos/imoveis" },
      { to: "/perfil", icon: "User", label: "Perfil", pattern: "perfil" },
    ] as NavItem[],
    
    admin: [
      { to: "/admin", icon: "Shield", label: "Admin", pattern: "admin" },
    ] as NavItem[],
  };

  const getVisibleItems = (context: 'sidebar' | 'bottom' = 'sidebar') => {
    const items = [...navigationConfig.main];
    
    if (isAuthenticated) {
      items.push(...navigationConfig.favorites);
    }
    
    if (isAdmin()) {
      items.push(...navigationConfig.admin);
    }

    return items;
  };

  return {
    isActive,
    getVisibleItems,
    navigationConfig,
    isAuthenticated,
    currentPath: location.pathname,
    
    // Legacy support - will be removed in next phase
    mainNavItems: navigationConfig.main,
    favoriteNavItems: navigationConfig.favorites,
    adminNavItems: navigationConfig.admin,
  };
};
