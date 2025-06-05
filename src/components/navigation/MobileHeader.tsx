
import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileHeaderProps {
  onMenuClick: () => void;
}

export const MobileHeader = ({ onMenuClick }: MobileHeaderProps) => {
  return (
    <header className="md:hidden fixed top-0 left-0 right-0 w-full bg-white border-b border-gray-200 z-50 h-14">
      <div className="flex items-center justify-between h-full px-4">
        <div className="flex items-center">
          <h1 className="text-lg font-bold text-gray-900">Lailo</h1>
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={onMenuClick}
          className="h-10 w-10"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};
