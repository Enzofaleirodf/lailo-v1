
import React from 'react';
import { SessionNavBar } from "../SessionNavBar";
import { BottomNavigation } from "../BottomNavigation";

interface BasePageLayoutProps {
  children: React.ReactNode;
  showBottomNav?: boolean;
  containerClass?: string;
  noPadding?: boolean; // Nova prop para controlar padding
}

export const BasePageLayout = ({ 
  children, 
  showBottomNav = true,
  containerClass,
  noPadding = false
}: BasePageLayoutProps) => {
  // Padding padrão ou customizado
  const defaultPadding = noPadding ? "" : "px-6 py-8";
  const finalContainerClass = containerClass || defaultPadding;

  return (
    <div className="w-full relative min-h-screen bg-white">
      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="max-w-[1440px] mx-auto w-full relative min-h-screen bg-white">
          {/* Navbar lateral - apenas desktop */}
          <div className="absolute left-0 top-0 h-full w-12 z-50">
            <SessionNavBar />
          </div>
          
          <main className="ml-12 min-h-screen flex flex-col">
            <div className={`bg-white ${finalContainerClass}`}>
              {children}
            </div>
          </main>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden">
        <div className="w-full min-h-screen bg-white">
          <main className={`w-full min-h-screen flex flex-col ${noPadding ? 'px-0 py-0' : 'px-4 py-6'} pb-20`}>
            {children}
          </main>
          
          {showBottomNav && (
            <div className="fixed bottom-0 left-0 right-0 z-50">
              <BottomNavigation />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
