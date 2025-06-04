
import React, { memo, useCallback } from "react";
import { Link } from "react-router-dom";
import { 
  MoreHorizontal, 
  LogIn, 
  LogOut 
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigation } from "@/hooks/useNavigation";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// Icon mapping para renderizar os ícones dinamicamente
const iconMap = {
  Home: () => import("lucide-react").then(mod => mod.Home),
  Building: () => import("lucide-react").then(mod => mod.Building),
  Car: () => import("lucide-react").then(mod => mod.Car),
  Heart: () => import("lucide-react").then(mod => mod.Heart),
  User: () => import("lucide-react").then(mod => mod.User),
  Gavel: () => import("lucide-react").then(mod => mod.Gavel),
  Calendar: () => import("lucide-react").then(mod => mod.Calendar),
  Shield: () => import("lucide-react").then(mod => mod.Shield),
  Settings: () => import("lucide-react").then(mod => mod.Settings),
  Search: () => import("lucide-react").then(mod => mod.Search),
};

// Importar ícones staticamente para melhor performance
import { 
  Home, 
  Building,
  Car, 
  Heart, 
  User, 
  Gavel, 
  Calendar, 
  Shield,
  Settings,
  Search 
} from "lucide-react";

const staticIconMap = {
  Home,
  Building, 
  Car,
  Heart,
  User,
  Gavel,
  Calendar,
  Shield,
  Settings,
  Search,
};

// Memoizar o item de navegação para evitar re-renders
const NavItem = memo(({ item }: { item: any }) => {
  const IconComponent = staticIconMap[item.icon as keyof typeof staticIconMap];
  
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
      <IconComponent className="w-5 h-5 mb-1" />
      <span className="text-xs font-medium text-center leading-tight">{item.label}</span>
    </Link>
  );
});

NavItem.displayName = 'NavItem';

export const BottomNavigation = memo(() => {
  const { isAuthenticated, logout } = useAuth();
  const { isActive, getVisibleItems } = useNavigation();
  const [isMoreMenuOpen, setIsMoreMenuOpen] = React.useState(false);

  // Usar a lógica centralizada do useNavigation
  const allNavItems = React.useMemo(() => {
    const items = getVisibleItems('bottom');
    return items.map(item => ({
      ...item,
      active: isActive(item.to),
      icon: item.icon
    }));
  }, [getVisibleItems, isActive]);

  // Separar itens principais (primeiros 4) dos itens do menu "Mais"
  const mainNavItems = React.useMemo(() => allNavItems.slice(0, 4), [allNavItems]);
  const moreMenuItems = React.useMemo(() => allNavItems.slice(4), [allNavItems]);

  const handleMenuItemClick = useCallback(() => {
    setIsMoreMenuOpen(false);
  }, []);

  const handleLogout = useCallback(() => {
    logout();
    setIsMoreMenuOpen(false);
  }, [logout]);

  // Check if any "more menu" item is active
  const isMoreMenuActive = React.useMemo(() => 
    moreMenuItems.some(item => item.active)
  , [moreMenuItems]);

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 w-full bg-white border-t border-gray-200 z-[50]">
      <div className="flex items-center w-full h-16">
        {mainNavItems.map((item) => (
          <NavItem key={item.to} item={item} />
        ))}
        
        {/* Botão Mais com Menu - só aparece se houver itens adicionais ou precisa de autenticação */}
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
                {/* Itens adicionais da navegação */}
                {moreMenuItems.length > 0 && (
                  <div className="px-2 flex-shrink-0">
                    {moreMenuItems.map((item) => {
                      const IconComponent = staticIconMap[item.icon as keyof typeof staticIconMap];
                      return (
                        <Link
                          key={item.to}
                          to={item.to}
                          onClick={handleMenuItemClick}
                          className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          <IconComponent className="w-4 h-4 flex-shrink-0" />
                          <span className="truncate">{item.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
                
                {moreMenuItems.length > 0 && <Separator className="my-2 flex-shrink-0" />}
                
                {/* Seção de autenticação */}
                <div className="px-2 flex-1 flex flex-col min-h-0">
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
