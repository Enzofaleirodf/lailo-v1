
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
    <div 
      className="md:hidden fixed top-0 left-0 right-0 w-full z-50"
      style={isBuscador ? {
        willChange: 'transform',
        transform: `translateY(-${progress * 100}%)`,
        opacity: 1 - progress,
        transition: "transform 0.1s linear, opacity 0.1s linear",
        pointerEvents: progress === 1 ? 'none' : 'auto',
      } : undefined}
    >
      <header className="w-full bg-white border-b border-gray-200 h-14">
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
    </div>
  );
};
