
import React from 'react';
import { motion } from 'framer-motion';

interface SearchLayoutProps {
  children: React.ReactNode;
  withTopBar?: boolean;
  withSidebar?: boolean;
}

export const SearchLayout = ({ 
  children, 
  withTopBar = true, 
  withSidebar = true 
}: SearchLayoutProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.15 }}
      className="min-h-screen bg-white"
    >
      {withTopBar && (
        <div className="absolute top-0 left-0 right-0 h-20 z-40">
          {/* Top bar será injetado aqui */}
        </div>
      )}

      {withSidebar && (
        <div className="absolute left-0 top-20 w-[512px] h-[calc(100vh-5rem)] z-30">
          {/* Sidebar será injetada aqui */}
        </div>
      )}

      <main 
        className={`
          flex h-screen grow flex-col overflow-y-auto invisible-scrollbar
          ${withSidebar ? 'md:pl-[512px]' : ''}
          ${withTopBar ? 'md:pt-20' : ''}
        `}
      >
        <div className="min-h-screen bg-white px-4 pb-20 md:px-6 md:pb-6 py-[20px]">
          {children}
        </div>
      </main>
    </motion.div>
  );
};
