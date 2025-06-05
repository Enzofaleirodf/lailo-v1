
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Search, Heart, Gavel, Calendar } from "lucide-react";

export const MobileBottomNav = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    if (path === "/buscador") return location.pathname.startsWith("/buscador");
    if (path === "/favoritos") return location.pathname.startsWith("/favoritos");
    return location.pathname.startsWith(path);
  };
  
  const items = [
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
  
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 w-full bg-white border-t border-gray-200 z-50 h-16">
      <div className="flex items-center justify-around h-full">
        {items.map(item => {
          const Icon = item.icon;
          const active = isActive(item.to);
          return (
            <Link
              key={item.to}
              to={item.to}
              className="flex flex-col items-center justify-center h-full px-2 transition-colors min-w-0 flex-1"
            >
              <Icon className={`w-5 h-5 mb-1 ${active ? 'text-blue-600' : 'text-gray-500'}`} />
              <span className={`text-xs font-medium text-center leading-tight ${active ? 'text-blue-600' : 'text-gray-500'}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
