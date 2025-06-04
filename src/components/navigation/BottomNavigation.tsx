
import React, { memo, useCallback } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigation } from "@/hooks/useNavigation";
import { Popover } from "@/components/ui/popover";
import { BottomNavItem } from "./BottomNavItem";
import { MoreMenuTrigger } from "./MoreMenuTrigger";
import { MoreMenuContent } from "./MoreMenuContent";

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
          <BottomNavItem key={item.to} item={item} />
        ))}
        
        {/* Botão Mais com Menu - só aparece se houver itens adicionais ou precisa de autenticação */}
        <div className="w-1/5 h-full flex justify-center">
          <Popover open={isMoreMenuOpen} onOpenChange={setIsMoreMenuOpen}>
            <MoreMenuTrigger isMoreMenuActive={isMoreMenuActive} />
            <MoreMenuContent
              moreMenuItems={moreMenuItems}
              isAuthenticated={isAuthenticated}
              onMenuItemClick={handleMenuItemClick}
              onLogout={handleLogout}
            />
          </Popover>
        </div>
      </div>
    </nav>
  );
});

BottomNavigation.displayName = 'BottomNavigation';
