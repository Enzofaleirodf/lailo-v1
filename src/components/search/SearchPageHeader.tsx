import React from 'react';
import { LoadingSpinner } from "../ui/LoadingSpinner";
import { ItemTypeToggle } from "./ItemTypeToggle";
import { ItemType } from "../../types/search";
interface SearchPageHeaderProps {
  title: string;
  isLoading: boolean;
  itemType: ItemType;
  onItemTypeChange: (type: ItemType) => void;
}
export const SearchPageHeader = ({
  title,
  isLoading,
  itemType,
  onItemTypeChange
}: SearchPageHeaderProps) => {
  return <div className="flex flex-col gap-4 mb-6 md:hidden">
      
      
      <div className="flex justify-center">
        <ItemTypeToggle currentType={itemType} onTypeChange={onItemTypeChange} />
      </div>
    </div>;
};