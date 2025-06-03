
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
  // Componente removido do mobile - não renderiza mais nada
  return null;
};
