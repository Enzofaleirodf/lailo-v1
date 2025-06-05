
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  Building, 
  Car, 
  Calendar,
  Gavel
} from "lucide-react";

export const SimpleMobileNav = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  // 5 itens fixos sempre visíveis
  const navItems = [
    { to: "/", icon: Home, label: "Início" },
    { to: "/buscador/imoveis", icon: Building, label: "Imóveis" },
    { to: "/buscador/veiculos", icon: Car, label: "Veículos" },
    { to: "/agenda", icon: Calendar, label: "Agenda" },
    { to: "/leiloeiros", icon: Gavel, label: "Leiloeiros" }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 w-full bg-white border-t border-gray-200 z-50 h-16">
      <div className="flex items-center justify-center h-full max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.to);
          
          return (
            <Link
              key={item.to}
              to={item.to}
              className="flex-1 flex flex-col items-center justify-center h-full px-2 transition-colors duration-200"
            >
              <Icon 
                className={`w-5 h-5 mb-1 ${
                  active ? 'text-blue-600' : 'text-gray-500'
                }`} 
              />
              <span 
                className={`text-xs font-medium text-center leading-tight ${
                  active ? 'text-blue-600' : 'text-gray-500'
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
