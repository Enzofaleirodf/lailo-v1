
import React, { memo } from "react";
import { Link } from "react-router-dom";
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

interface NavItemProps {
  item: {
    to: string;
    icon: string;
    label: string;
    active: boolean;
  };
}

export const BottomNavItem = memo(({ item }: NavItemProps) => {
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

BottomNavItem.displayName = 'BottomNavItem';
