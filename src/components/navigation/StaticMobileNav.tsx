
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Home, Building, Car, Calendar, Gavel } from 'lucide-react';

const navItems = [
  { to: '/', icon: Home, label: 'Início' },
  { to: '/buscador/imoveis', icon: Building, label: 'Imóveis' },
  { to: '/buscador/veiculos', icon: Car, label: 'Veículos' },
  { to: '/agenda', icon: Calendar, label: 'Agenda' },
  { to: '/leiloeiros', icon: Gavel, label: 'Leiloeiros' },
];

export const StaticMobileNav = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    if (path === '/buscador/imoveis') {
      return location.pathname.startsWith('/buscador/imoveis') || location.pathname.startsWith('/favoritos/imoveis');
    }
    if (path === '/buscador/veiculos') {
      return location.pathname.startsWith('/buscador/veiculos') || location.pathname.startsWith('/favoritos/veiculos');
    }
    return location.pathname.startsWith(path);
  };

  const handleNavigation = (path: string) => {
    window.location.href = path;
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 md:hidden">
      <div className="grid grid-cols-5 h-16">
        {navItems.map(({ to, icon: Icon, label }) => {
          const active = isActive(to);
          return (
            <button
              key={to}
              onClick={() => handleNavigation(to)}
              className={`flex flex-col items-center justify-center p-2 transition-colors ${
                active 
                  ? 'text-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Icon 
                size={20} 
                className={`mb-1 ${active ? 'text-blue-600' : 'text-gray-500'}`} 
              />
              <span className={`text-xs font-medium ${
                active ? 'text-blue-600' : 'text-gray-500'
              }`}>
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
