
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Search, Heart, User, LogIn, Car, MoreHorizontal, Calendar, Gavel, Settings, LogOut } from "lucide-react";
import { useAuth } from "../hooks/useAuth";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const BottomNavigation = () => {
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();
  const [isMoreMenuOpen, setIsMoreMenuOpen] = React.useState(false);

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path);
  };

  const mainNavItems = [
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
    },
    {
      to: isAuthenticated ? "/favoritos/veiculos" : "/auth/login",
      icon: Heart,
      label: "Favoritos",
      active: isActive("/favoritos"),
      requiresAuth: true
    }
  ];

  const publicMenuItems = [
    {
      to: "/leiloeiros",
      icon: Gavel,
      label: "Leiloeiros"
    },
    {
      to: "/agenda",
      icon: Calendar,
      label: "Agenda"
    }
  ];

  const userMenuItems = [
    {
      to: "/configuracoes",
      icon: Settings,
      label: "Configurações"
    },
    {
      to: "/perfil",
      icon: User,
      label: "Perfil"
    }
  ];

  const handleMenuItemClick = () => {
    setIsMoreMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    setIsMoreMenuOpen(false);
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 w-full bg-white border-t border-gray-200 z-50">
      <div className="flex items-center justify-around px-2 py-2">
        {mainNavItems.map((item) => {
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
        
        {/* Botão Mais com Menu */}
        <Popover open={isMoreMenuOpen} onOpenChange={setIsMoreMenuOpen}>
          <PopoverTrigger asChild>
            <button
              className={`
                flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-colors
                ${isActive("/leiloeiros") || isActive("/agenda") || isActive("/configuracoes") || isActive("/perfil")
                  ? 'text-blue-600' 
                  : 'text-gray-500'
                }
              `}
            >
              <MoreHorizontal className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">Mais</span>
            </button>
          </PopoverTrigger>
          
          <PopoverContent 
            className="w-48 p-0 mb-2" 
            side="top" 
            align="center"
            sideOffset={8}
          >
            <div className="py-2">
              {/* Seção Pública */}
              <div className="px-2">
                {publicMenuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={handleMenuItemClick}
                      className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                      {item.label}
                    </Link>
                  );
                })}
              </div>
              
              <Separator className="my-2" />
              
              {/* Seção do Usuário */}
              <div className="px-2">
                {userMenuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={handleMenuItemClick}
                      className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                      {item.label}
                    </Link>
                  );
                })}
                
                {/* Botão Sair - só aparece se logado */}
                {isAuthenticated && (
                  <Button
                    variant="ghost"
                    onClick={handleLogout}
                    className="w-full justify-start gap-3 px-3 py-2 h-auto text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                  >
                    <LogOut className="w-4 h-4" />
                    Sair
                  </Button>
                )}
                
                {/* Botão Login - só aparece se não logado */}
                {!isAuthenticated && (
                  <Link
                    to="/auth/login"
                    onClick={handleMenuItemClick}
                    className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <LogIn className="w-4 h-4" />
                    Entrar
                  </Link>
                )}
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  );
};
