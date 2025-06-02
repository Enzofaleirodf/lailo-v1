
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LoadingSpinner } from '../ui/LoadingSpinner';
import { ItemTypeToggle } from './ItemTypeToggle';
import { TopBarFilters } from './TopBarFilters';
import { ItemType } from '../../types/search';

interface DesktopTopBarProps {
  title: string;
  backUrl: string;
  isLoading: boolean;
  itemType: ItemType;
  onItemTypeChange: (type: ItemType) => void;
}

export const DesktopTopBar = ({
  title,
  backUrl,
  isLoading,
  itemType,
  onItemTypeChange
}: DesktopTopBarProps) => {
  return (
    <div className="hidden md:block fixed top-0 right-0 left-12 h-16 bg-white border-b border-gray-200 z-40">
      <div className="flex items-center justify-between h-full px-6">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <Link to={backUrl}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Link>
            </Button>
            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          </div>
          
          <ItemTypeToggle 
            currentType={itemType}
            onTypeChange={onItemTypeChange}
          />
        </div>

        <div className="flex items-center gap-4">
          <TopBarFilters itemType={itemType} />
          {isLoading && <LoadingSpinner />}
        </div>
      </div>
    </div>
  );
};
