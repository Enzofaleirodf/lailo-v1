
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Search, Heart, Gavel, User, LogIn } from "lucide-react";
import { useAuth } from "../hooks/useAuth";

export const BottomNavigation = () => {
  const location = useLocation();
  const { isAuthenticated } = useAuth();

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
      label: "Buscador",
      active: isActive("/buscador")
    },
    {
      to: isAuthenticated ? "/favoritos/veiculos" : "/auth/login",
      icon: Heart,
      label: "Favoritos",
      active: isActive("/favoritos"),
      requiresAuth: true
    },
    {
      to: "/leiloeiros",
      icon: Gavel,
      label: "Leiloeiros",
      active: isActive("/leiloeiros")
    },
    {
      to: isAuthenticated ? "/perfil" : "/auth/login",
      icon: isAuthenticated ? User : LogIn,
      label: isAuthenticated ? "Perfil" : "Entrar",
      active: isActive("/perfil"),
      requiresAuth: true
    }
  ];

  return (
    <nav className="md:hidden absolute bottom-0 left-0 right-0 w-full bg-white border-t border-gray-200 z-50">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`
                flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-colors
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
      </div>
    </nav>
  );
};
