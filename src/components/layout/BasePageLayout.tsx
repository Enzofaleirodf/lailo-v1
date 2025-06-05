
import React, { useState } from 'react';
import { SessionNavBar } from "@/components/navigation/SessionNavBar";
import { MobileHeader } from "@/components/navigation/MobileHeader";
import { MobileBottomNav } from "@/components/navigation/MobileBottomNav";
import { MobileDrawer } from "@/components/navigation/MobileDrawer";

interface BasePageLayoutProps {
  children: React.ReactNode;
  showBottomNav?: boolean;
  containerClass?: string;
}

export const BasePageLayout = ({ 
  children, 
  showBottomNav = true,
  containerClass = "px-4 md:px-6 py-3 md:py-8"
}: BasePageLayoutProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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

      {/* Mobile Layout */}
      <div className="block md:hidden">
        <div className="w-full min-h-screen bg-white">
          <MobileHeader onMenuClick={() => setIsDrawerOpen(true)} />
          <MobileDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
          
          <main className="w-full min-h-screen flex flex-col pt-14 pb-16 px-3">
            {children}
          </main>
          
          {showBottomNav && <MobileBottomNav />}
        </div>
      </div>
    </div>
  );
};
