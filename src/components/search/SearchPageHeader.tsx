
import React from 'react';
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
    <div className="flex justify-center mb-6 md:hidden">
      <ItemTypeToggle 
        currentType={itemType}
        onTypeChange={onItemTypeChange}
      />
    </div>
  );
};
