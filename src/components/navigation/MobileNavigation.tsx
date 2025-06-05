
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  Building, 
  Car, 
  Heart, 
  CircleEllipsis,
  Gavel,
  Calendar,
  User,
  Settings,
  LogIn,
  LogOut
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";

export const MobileNavigation = () => {
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();
  const [moreMenuOpen, setMoreMenuOpen] = React.useState(false);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    if (path === "/favoritos") return location.pathname.startsWith("/favoritos");
    return location.pathname.startsWith(path);
  };

  const mainItems = [
    { to: "/", icon: Home, label: "Início" },
    { to: "/buscador/imoveis", icon: Building, label: "Imóveis" },
    { to: "/buscador/veiculos", icon: Car, label: "Veículos" },
    { to: "/favoritos/imoveis", icon: Heart, label: "Favoritos" }
  ];

  const moreItems = [
    { to: "/leiloeiros", icon: Gavel, label: "Leiloeiros" },
    { to: "/agenda", icon: Calendar, label: "Agenda" },
    ...(isAuthenticated ? [
      { to: "/perfil", icon: User, label: "Perfil" },
      { to: "/configuracoes", icon: Settings, label: "Configurações" }
    ] : [])
  ];

  const handleMoreItemClick = () => {
    setMoreMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    setMoreMenuOpen(false);
  };

  // Check if any "more" item is active
  const isMoreActive = ["/leiloeiros", "/agenda", "/perfil", "/configuracoes"].some(path => isActive(path));

  return (
    <header className="md:hidden fixed top-0 left-0 right-0 w-full bg-white border-b border-gray-200 z-50 h-16">
      <div className="flex items-center justify-center h-full">
        {/* Main navigation items */}
        {mainItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.to);
          
          return (
            <Link
              key={item.to}
              to={item.to}
              className="flex-1 flex flex-col items-center justify-center h-full px-1 transition-colors"
            >
              <Icon 
                className={`w-5 h-5 mb-1 ${
                  active ? 'text-blue-600' : 'text-gray-500'
                }`} 
              />
              <span 
                className={`text-xs font-medium text-center leading-tight ${
                  active ? 'text-blue-600' : 'text-gray-500'
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
        
        {/* More menu */}
        <div className="flex-1 flex justify-center h-full">
          <Popover open={moreMenuOpen} onOpenChange={setMoreMenuOpen}>
            <PopoverTrigger asChild>
              <button className="flex flex-col items-center justify-center h-full px-1 transition-colors">
                <CircleEllipsis 
                  className={`w-5 h-5 mb-1 ${
                    isMoreActive ? 'text-blue-600' : 'text-gray-500'
                  }`} 
                />
                <span 
                  className={`text-xs font-medium text-center leading-tight ${
                    isMoreActive ? 'text-blue-600' : 'text-gray-500'
                  }`}
                >
                  Mais
                </span>
              </button>
            </PopoverTrigger>
            
            <PopoverContent 
              className="w-48 p-2 mt-2" 
              side="bottom" 
              align="center"
              sideOffset={8}
            >
              <div className="space-y-1">
                {/* More items */}
                {moreItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={handleMoreItemClick}
                      className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
                
                {moreItems.length > 0 && <Separator className="my-2" />}
                
                {/* Auth section */}
                {isAuthenticated ? (
                  <Button
                    variant="ghost"
                    onClick={handleLogout}
                    className="w-full justify-start gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg h-auto"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Sair</span>
                  </Button>
                ) : (
                  <Link
                    to="/auth/login"
                    onClick={handleMoreItemClick}
                    className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <LogIn className="w-4 h-4" />
                    <span>Entrar</span>
                  </Link>
                )}
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
};
