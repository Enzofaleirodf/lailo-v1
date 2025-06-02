
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Search, Heart, Building2, User, LogIn } from "lucide-react";
import { useAuth } from "../hooks/useAuth";
import { useFavoritesStore } from "../stores/favoritesStore";

export const BottomNavigation = () => {
  const location = useLocation();
  const { isAuthenticated, user } = useAuth();
  const { favorites } = useFavoritesStore();

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path);
  };

  const navItems = [
    {
      to: "/",
      icon: Home,
      label: "Início",
      active: location.pathname === "/"
    },
    {
      to: "/buscador/veiculos",
      icon: Search,
      label: "Veículos",
      active: isActive("/buscador/veiculos") || isActive("/veiculos")
    },
    {
      to: "/buscador/imoveis",
      icon: Search,
      label: "Imóveis",
      active: isActive("/buscador/imoveis") || isActive("/imoveis")
    },
    {
      to: "/leiloeiros",
      icon: Building2,
      label: "Leiloeiros",
      active: isActive("/leiloeiros")
    }
  ];

  const favoriteVehiclesCount = favorites.filter(f => f.itemType === 'vehicle').length;
  const favoritePropertiesCount = favorites.filter(f => f.itemType === 'property').length;

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`
                flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-colors relative
                ${item.active 
                  ? 'text-blue-600' 
                  : 'text-gray-500'
                }
              `}
            >
              <Icon className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}

        {/* Favoritos ou Login */}
        {isAuthenticated ? (
          <Link
            to="/favoritos/veiculos"
            className={`
              flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-colors relative
              ${isActive("/favoritos") 
                ? 'text-blue-600' 
                : 'text-gray-500'
              }
            `}
          >
            <Heart className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium">Favoritos</span>
            {(favoriteVehiclesCount + favoritePropertiesCount) > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {favoriteVehiclesCount + favoritePropertiesCount > 9 ? '9+' : favoriteVehiclesCount + favoritePropertiesCount}
              </span>
            )}
          </Link>
        ) : (
          <Link
            to="/auth/login"
            className="flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-colors text-gray-500"
          >
            <LogIn className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium">Entrar</span>
          </Link>
        )}
      </div>
    </nav>
  );
};
