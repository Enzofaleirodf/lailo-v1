
import { useLocation } from 'react-router-dom';
import { useAuth } from './useAuth';

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

  const mainNavItems = [
    { to: "/buscador/veiculos", icon: "Car", label: "Veículos", pattern: "veiculos" },
    { to: "/buscador/imoveis", icon: "Home", label: "Imóveis", pattern: "imoveis" },
    { to: "/leiloeiros", icon: "Gavel", label: "Leiloeiros", pattern: "leiloeiros" },
    { to: "/agenda", icon: "Calendar", label: "Agenda", pattern: "agenda" },
  ];

  const favoriteNavItems = [
    { to: "/favoritos/veiculos", icon: "Heart", label: "Favoritos Veículos", pattern: "favoritos/veiculos" },
    { to: "/favoritos/imoveis", icon: "Heart", label: "Favoritos Imóveis", pattern: "favoritos/imoveis" },
    { to: "/perfil", icon: "User", label: "Perfil", pattern: "perfil" },
  ];

  const adminNavItems = [
    { to: "/admin", icon: "Shield", label: "Admin", pattern: "admin" },
  ];

  const getVisibleItems = (context: 'sidebar' | 'bottom') => {
    const items = [...mainNavItems];
    
    if (isAuthenticated) {
      items.push(...favoriteNavItems);
    }
    
    if (isAdmin()) {
      items.push(...adminNavItems);
    }

    return items;
  };

  return {
    isActive,
    mainNavItems,
    favoriteNavItems,
    adminNavItems,
    getVisibleItems,
    isAuthenticated,
    currentPath: location.pathname,
  };
};
