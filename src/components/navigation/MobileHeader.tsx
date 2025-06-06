
import React from 'react';
import { Menu, Bell } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { useScrollProgress } from '@/hooks/useScrollProgress';

interface MobileHeaderProps {
  onMenuClick: () => void;
}

export const MobileHeader = ({ onMenuClick }: MobileHeaderProps) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const progress = useScrollProgress(60);
  
  // Verificar se estamos nas páginas de buscador
  const isBuscador = location.pathname === '/buscador/imoveis' || location.pathname === '/buscador/veiculos';

  const handleNotificationsClick = () => {
    // TODO: Implementar lógica de notificações
    console.log('Notificações clicadas');
  };

  return (
    <header 
      className="md:hidden fixed top-0 left-0 right-0 w-full bg-white border-b border-gray-200 z-50 h-14"
      style={isBuscador ? {
        opacity: 1 - progress,
        transform: `translateY(-${progress * 56}px)`,
        pointerEvents: progress >= 0.95 ? 'none' : 'auto',
        willChange: 'transform, opacity',
      } : undefined}
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
