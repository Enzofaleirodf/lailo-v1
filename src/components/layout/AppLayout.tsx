
import React, { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SessionNavBar } from '../SessionNavBar';
import { BottomNavigation } from '../BottomNavigation';
import { LoadingSpinner } from '../ui/LoadingSpinner';

export const AppLayout = () => {
  const location = useLocation();

  return (
    <div className="max-w-[1440px] mx-auto w-full relative min-h-screen bg-white">
      {/* Navbar lateral - sempre presente */}
      <div className="absolute left-0 top-0 h-full w-12 z-50">
        <SessionNavBar />
      </div>

      {/* Conteúdo principal com transições */}
      <div className="flex h-screen grow flex-col overflow-y-auto invisible-scrollbar md:ml-12">
        <Suspense
          fallback={
            <div className="flex-1 flex items-center justify-center">
              <div className="flex flex-col items-center gap-3">
                <LoadingSpinner size="lg" />
                <span className="text-sm text-gray-600">Carregando página...</span>
              </div>
            </div>
          }
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="flex-1"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </Suspense>
      </div>

      {/* Bottom navigation - sempre presente */}
      <div className="absolute bottom-0 left-0 right-0 z-50">
        <BottomNavigation />
      </div>
    </div>
  );
};
