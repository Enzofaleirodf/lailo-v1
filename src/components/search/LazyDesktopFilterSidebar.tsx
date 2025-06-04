
import { Suspense, lazy } from 'react';
import { ItemType } from '../../types/search';
import { LoadingSpinner } from '../ui/LoadingSpinner';

const DesktopFilterSidebar = lazy(() => import('./DesktopFilterSidebar').then(module => ({
  default: module.DesktopFilterSidebar
})));

interface LazyDesktopFilterSidebarProps {
  itemType: ItemType;
  onClearFilters: () => void;
}

// Fallback que mantém o layout exato da sidebar
const SidebarLoadingFallback = () => (
  <div className="hidden md:block w-[512px] h-full bg-white border-r border-gray-200">
    <div className="p-6">
      <div className="flex items-center justify-center h-32">
        <div className="flex flex-col items-center gap-3">
          <LoadingSpinner size="md" />
          <p className="text-xs text-gray-500">Carregando filtros...</p>
        </div>
      </div>
    </div>
  </div>
);

export const LazyDesktopFilterSidebar = (props: LazyDesktopFilterSidebarProps) => {
  return (
    <Suspense fallback={<SidebarLoadingFallback />}>
      <DesktopFilterSidebar {...props} />
    </Suspense>
  );
};
