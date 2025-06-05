
import React from 'react';
import { SessionNavBar } from "@/components/navigation/SessionNavBar";
import { MobileNavigation } from "@/components/navigation/MobileNavigation";

interface BasePageLayoutProps {
  children: React.ReactNode;
  showBottomNav?: boolean;
  containerClass?: string;
}

export const BasePageLayout = ({ 
  children, 
  showBottomNav = true,
  containerClass = "px-3 md:px-6 py-3 md:py-8"
}: BasePageLayoutProps) => {
  return (
    <div className="w-full relative min-h-screen bg-white overflow-x-hidden">
      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="w-full relative min-h-screen bg-white">
          <SessionNavBar />
          
          <main className="ml-12 min-h-screen flex flex-col">
            <div className={`bg-white flex-1 ${containerClass}`}>
              {children}
            </div>
          </main>
        </div>
      </div>

      {/* Mobile Layout - padding ajustado para 12px */}
      <div className="block md:hidden">
        <div className="w-full min-h-screen bg-white">
          <main className="w-full min-h-screen flex flex-col px-3 py-2 pb-20">
            {children}
          </main>
          
          {showBottomNav && <MobileNavigation />}
        </div>
      </div>
    </div>
  );
};
