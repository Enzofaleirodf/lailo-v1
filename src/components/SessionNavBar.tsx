import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Search, Heart, Gavel, User, LogIn, LogOut, Car, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "../hooks/useAuth";

export const SessionNavBar = () => {
  const location = useLocation();
  const { isAuthenticated, user, logout } = useAuth();

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
      to: "/buscador/imoveis",
      icon: Search,
      label: "Imóveis",
      active: isActive("/buscador/imoveis")
    },
    {
      to: "/buscador/veiculos",
      icon: Car,
      label: "Veículos",
      active: isActive("/buscador/veiculos")
    }
  ];

  const protectedItems = [
    {
      to: "/favoritos/veiculos",
      icon: Heart,
      label: "Favoritos",
      active: isActive("/favoritos")
    },
    {
      to: "/leiloeiros",
      icon: Gavel,
      label: "Leiloeiros",
      active: isActive("/leiloeiros")
    },
    {
      to: "/agenda",
      icon: Calendar,
      label: "Agenda",
      active: isActive("/agenda")
    }
  ];

  return (
    <nav className="hidden md:flex absolute left-0 top-0 h-full w-12 bg-white border-r border-gray-200 border-l border-gray-100 flex-col items-center pt-4 pb-4 z-50">
      {/* Logo/Brand */}
      <div className="mb-8">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">L</span>
        </div>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 flex flex-col gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`
                w-8 h-8 rounded-lg flex items-center justify-center transition-colors relative group
                ${item.active 
                  ? 'bg-blue-100 text-blue-600' 
                  : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                }
              `}
            >
              <Icon className="w-4 h-4" />
              
              {/* Tooltip apenas uma vez */}
              <div className="absolute left-12 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                {item.label}
              </div>
            </Link>
          );
        })}

        {/* Protected Items - sempre mostrar, mas controlar acesso */}
        {protectedItems.map((item) => {
          const Icon = item.icon;
          // Se não estiver autenticado e for favoritos, redireciona para login
          const linkTo = !isAuthenticated && item.to.includes('/favoritos') ? '/auth/login' : item.to;
          
          return (
            <Link
              key={item.to}
              to={linkTo}
              className={`
                w-8 h-8 rounded-lg flex items-center justify-center transition-colors relative group
                ${item.active 
                  ? 'bg-blue-100 text-blue-600' 
                  : !isAuthenticated && item.to.includes('/favoritos')
                    ? 'text-gray-400 hover:text-blue-600 hover:bg-blue-50'
                    : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                }
              `}
            >
              <Icon className="w-4 h-4" />
              
              {/* Tooltip */}
              <div className="absolute left-12 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                {!isAuthenticated && item.to.includes('/favoritos') ? 'Favoritos - Faça login' : item.label}
              </div>
            </Link>
          );
        })}
      </div>

      {/* Auth Section - Moved to bottom */}
      <div className="flex flex-col gap-2">
        {isAuthenticated ? (
          <>
            <Link
              to="/perfil"
              className={`
                w-8 h-8 rounded-lg flex items-center justify-center transition-colors relative group
                ${isActive("/perfil") 
                  ? 'bg-blue-100 text-blue-600' 
                  : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                }
              `}
            >
              <User className="w-4 h-4" />
              
              {/* Tooltip apenas uma vez */}
              <div className="absolute left-12 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                Perfil
              </div>
            </Link>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={logout}
              className="w-8 h-8 p-0 text-gray-400 hover:text-red-600 hover:bg-red-50 group relative"
            >
              <LogOut className="w-4 h-4" />
              
              {/* Tooltip apenas uma vez */}
              <div className="absolute left-12 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                Sair
              </div>
            </Button>
          </>
        ) : (
          <Link
            to="/auth/login"
            className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors relative group"
          >
            <LogIn className="w-4 h-4" />
            
            {/* Tooltip apenas uma vez */}
            <div className="absolute left-12 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
              Entrar
            </div>
          </Link>
        )}
      </div>
    </nav>
  );
};
