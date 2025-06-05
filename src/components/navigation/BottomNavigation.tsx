
import React, { memo, useCallback } from "react";
import { Link } from "react-router-dom";
import { 
  Home, 
  Building, 
  Heart, 
  User, 
  LogIn, 
  Car, 
  MoreHorizontal, 
  Calendar, 
  Gavel, 
  Settings, 
  LogOut 
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigation } from "@/hooks/useNavigation";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// Memoizar o item de navegação para evitar re-renders
const NavItem = memo(({ item }: { item: any }) => {
  const Icon = item.icon;
  return (
    <Link
      to={item.to}
      className={`
        flex flex-col items-center justify-center py-2 transition-colors
        w-1/5 h-full
        ${item.active 
          ? 'text-blue-600' 
          : 'text-gray-500 hover:text-gray-700'
        }
      `}
    >
      <Icon className="w-5 h-5 mb-1" />
      <span className="text-xs font-medium text-center leading-tight">{item.label}</span>
    </Link>
  );
});

NavItem.displayName = 'NavItem';

export const BottomNavigation = memo(() => {
  const { isAuthenticated, logout } = useAuth();
  const { isActive } = useNavigation();
  const [isMoreMenuOpen, setIsMoreMenuOpen] = React.useState(false);

  const mainNavItems = React.useMemo(() => [
    {
      to: "/",
      icon: Home,
      label: "Início",
      active: isActive("/")
    },
    {
      to: "/buscador/imoveis",
      icon: Building,
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
      to: "/favoritos/imoveis",
      icon: Heart,
      label: "Favoritos",
      active: isActive("/favoritos/imoveis") || isActive("/favoritos/veiculos")
    }
  ], [isActive]);

  const publicMenuItems = React.useMemo(() => [
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
  ], []);

  const userMenuItems = React.useMemo(() => [
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
  ], []);

  const handleMenuItemClick = useCallback(() => {
    setIsMoreMenuOpen(false);
  }, []);

  const handleLogout = useCallback(() => {
    logout();
    setIsMoreMenuOpen(false);
  }, [logout]);

  // Check if any "more menu" item is active
  const isMoreMenuActive = React.useMemo(() => 
    ["/leiloeiros", "/agenda", "/configuracoes", "/perfil"].some(path => isActive(path))
  , [isActive]);

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 w-full bg-white border-t border-gray-200 z-[50]">
      <div className="flex items-center w-full h-16">
        {mainNavItems.map((item) => (
          <NavItem key={item.to} item={item} />
        ))}
        
        {/* Botão Mais com Menu */}
        <div className="w-1/5 h-full flex justify-center">
          <Popover open={isMoreMenuOpen} onOpenChange={setIsMoreMenuOpen}>
            <PopoverTrigger asChild>
              <button
                className={`
                  flex flex-col items-center justify-center py-2 transition-colors
                  w-full h-full
                  ${isMoreMenuActive
                    ? 'text-blue-600' 
                    : 'text-gray-500 hover:text-gray-700'
                  }
                `}
              >
                <MoreHorizontal className="w-5 h-5 mb-1" />
                <span className="text-xs font-medium text-center leading-tight">Mais</span>
              </button>
            </PopoverTrigger>
            
            <PopoverContent 
              className="w-48 p-0 mb-2" 
              side="top" 
              align="center"
              sideOffset={8}
              style={{ maxHeight: '240px' }}
            >
              <div className="py-2 h-full flex flex-col">
                {/* Seção Pública */}
                <div className="px-2 flex-shrink-0">
                  {publicMenuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={handleMenuItemClick}
                        className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <Icon className="w-4 h-4 flex-shrink-0" />
                        <span className="truncate">{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
                
                <Separator className="my-2 flex-shrink-0" />
                
                {/* Seção do Usuário */}
                <div className="px-2 flex-1 flex flex-col min-h-0">
                  <div className="flex-1">
                    {userMenuItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.to}
                          to={item.to}
                          onClick={handleMenuItemClick}
                          className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          <Icon className="w-4 h-4 flex-shrink-0" />
                          <span className="truncate">{item.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                  
                  {/* Container fixo para botão de autenticação */}
                  <div className="flex-shrink-0 pt-2 mt-auto h-12 flex items-center">
                    {isAuthenticated ? (
                      <Button
                        variant="ghost"
                        onClick={handleLogout}
                        className="w-full justify-start gap-3 px-3 py-2.5 h-auto text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                      >
                        <LogOut className="w-4 h-4 flex-shrink-0" />
                        <span className="truncate">Sair</span>
                      </Button>
                    ) : (
                      <Link
                        to="/auth/login"
                        onClick={handleMenuItemClick}
                        className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors w-full"
                      >
                        <LogIn className="w-4 h-4 flex-shrink-0" />
                        <span className="truncate">Entrar</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </nav>
  );
});

BottomNavigation.displayName = 'BottomNavigation';
