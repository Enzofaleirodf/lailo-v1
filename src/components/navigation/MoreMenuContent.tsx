
import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { LogIn, LogOut } from "lucide-react";
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
import { PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

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

interface MoreMenuContentProps {
  moreMenuItems: Array<{
    to: string;
    icon: string;
    label: string;
    active: boolean;
  }>;
  isAuthenticated: boolean;
  onMenuItemClick: () => void;
  onLogout: () => void;
}

export const MoreMenuContent = ({ 
  moreMenuItems, 
  isAuthenticated, 
  onMenuItemClick, 
  onLogout 
}: MoreMenuContentProps) => {
  return (
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
                  onClick={onMenuItemClick}
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
                onClick={onLogout}
                className="w-full justify-start gap-3 px-3 py-2.5 h-auto text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                <LogOut className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">Sair</span>
              </Button>
            ) : (
              <Link
                to="/auth/login"
                onClick={onMenuItemClick}
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
  );
};
