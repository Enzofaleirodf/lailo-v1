
import React from 'react';
import { Menu, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { cn } from '@/lib/utils';

interface MobileHeaderProps {
  onMenuClick: () => void;
  isVisible?: boolean;
}

export const MobileHeader = ({ onMenuClick, isVisible = true }: MobileHeaderProps) => {
  const { isAuthenticated } = useAuth();

  const handleNotificationsClick = () => {
    // TODO: Implementar lógica de notificações
    console.log('Notificações clicadas');
  };

  return (
    <header 
      className={cn(
        "md:hidden fixed top-0 left-0 right-0 w-full bg-white border-b border-gray-200 z-50 h-14 transition-transform duration-300 ease-in-out",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="flex items-center justify-between h-full px-4">
        <div className="flex items-center">
          <h1 className="text-lg font-bold text-gray-900">Lailo</h1>
        </div>
        
        <div className="flex items-center gap-2">
          {isAuthenticated && (
            <Button
              variant="ghost"
              size="icon"
              onClick={handleNotificationsClick}
              className="h-10 w-10"
            >
              <Bell className="h-5 w-5" />
            </Button>
          )}
          
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuClick}
            className="h-10 w-10"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};
