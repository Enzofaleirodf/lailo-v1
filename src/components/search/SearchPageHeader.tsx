
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
  return (
    <div className="flex flex-col gap-4 mb-6 md:hidden">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900">{title}</h1>
        {isLoading && <LoadingSpinner />}
      </div>
      
      <div className="flex justify-center">
        <ItemTypeToggle 
          currentType={itemType}
          onTypeChange={onItemTypeChange}
        />
      </div>
    </div>
  );
};
