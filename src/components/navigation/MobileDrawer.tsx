
import React from 'react';
import { Link } from 'react-router-dom';
import { X, Home, Search, Heart, Gavel, Calendar, Settings, LogIn, LogOut, User } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileDrawer = ({ isOpen, onClose }: MobileDrawerProps) => {
  const { isAuthenticated, logout, user } = useAuth();
  
  const mainMenuItems = [
    {
      to: "/",
      icon: Home,
      label: "Início"
    },
    {
      to: "/buscador/imoveis",
      icon: Search,
      label: "Buscador"
    },
    {
      to: "/favoritos/imoveis",
      icon: Heart,
      label: "Favoritos"
    },
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
  
  const handleItemClick = () => {
    onClose();
  };
  
  const handleLogout = () => {
    logout();
    onClose();
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="w-80 p-0">
        <SheetHeader className="p-6 pb-4">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-lg font-bold">Menu</SheetTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          {isAuthenticated && user && (
            <div className="flex items-center gap-3 mt-4 p-3 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {user.email}
                </p>
                <p className="text-xs text-gray-500">Usuário ativo</p>
              </div>
            </div>
          )}
        </SheetHeader>
        
        <div className="px-6 pb-6">
          {/* Menu principal */}
          <div className="space-y-1">
            {mainMenuItems.map(item => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={handleItemClick}
                  className="flex items-center gap-3 px-3 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
          
          <Separator className="my-4" />
          
          {/* Seção de configurações */}
          {isAuthenticated && (
            <div className="space-y-1">
              <Link
                to="/configuracoes"
                onClick={handleItemClick}
                className="flex items-center gap-3 px-3 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Settings className="w-5 h-5" />
                <span>Configurações</span>
              </Link>
            </div>
          )}
          
          <Separator className="my-4" />
          
          {/* Auth section */}
          {isAuthenticated ? (
            <Button
              variant="ghost"
              onClick={handleLogout}
              className="w-full justify-start gap-3 px-3 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded-lg h-auto"
            >
              <LogOut className="w-5 h-5" />
              <span>Sair</span>
            </Button>
          ) : (
            <Link
              to="/auth/login"
              onClick={handleItemClick}
              className="flex items-center gap-3 px-3 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <LogIn className="w-5 h-5" />
              <span>Entrar</span>
            </Link>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
