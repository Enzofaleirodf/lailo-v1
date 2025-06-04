
import React from "react";
import { Link } from "react-router-dom";
import { 
  Home, 
  Building, 
  Heart, 
  Gavel, 
  User, 
  LogIn, 
  LogOut, 
  Car, 
  Calendar,
  Shield 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useNavigation } from "@/hooks/useNavigation";

const iconMap = {
  Home,
  Building,
  Heart,
  Gavel,
  User,
  LogIn,
  LogOut,
  Car,
  Calendar,
  Shield,
};

export const SessionNavBar = () => {
  const { isAuthenticated, logout, isAdmin } = useAuth();
  const { isActive, getVisibleItems } = useNavigation();

  const renderNavItem = (item: any) => {
    const Icon = iconMap[item.icon as keyof typeof iconMap];
    
    return (
      <Link
        key={item.to}
        to={item.to}
        className={`
          w-8 h-8 rounded-lg flex items-center justify-center transition-colors relative group
          ${isActive(item.to)
            ? 'bg-blue-50 text-blue-600' 
            : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
          }
        `}
      >
        <Icon className="w-4 h-4" />
        
        {/* Tooltip */}
        <div className="absolute left-12 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
          {item.label}
        </div>
      </Link>
    );
  };

  return (
    <nav className="hidden md:flex absolute left-0 top-0 h-full w-12 bg-white border-r border-gray-200 border-l border-gray-100 flex-col items-center pt-4 pb-4 z-50">
      {/* Logo/Brand */}
      <div className="mb-8">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">L</span>
        </div>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 flex flex-col gap-2">
        {getVisibleItems('sidebar').map(renderNavItem)}
      </div>

      {/* Auth Section */}
      <div className="flex flex-col gap-2">
        {isAuthenticated ? (
          <Button
            variant="ghost"
            size="sm"
            onClick={logout}
            className="w-8 h-8 p-0 text-gray-400 hover:text-red-600 hover:bg-red-50 group relative rounded-lg"
          >
            <LogOut className="w-4 h-4" />
            
            {/* Tooltip */}
            <div className="absolute left-12 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
              Sair
            </div>
          </Button>
        ) : (
          <Link
            to="/auth/login"
            className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors relative group"
          >
            <LogIn className="w-4 h-4" />
            
            {/* Tooltip */}
            <div className="absolute left-12 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
              Entrar
            </div>
          </Link>
        )}
      </div>
    </nav>
  );
};
