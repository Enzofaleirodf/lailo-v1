
import { BaseItemCard } from "../base/BaseItemCard";
import { SearchResultsProps } from "../../types/search";

export const SearchResults = ({ items, isVertical, config }: SearchResultsProps) => {
  return (
    <div className={`${isVertical ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2' : 'space-y-4'}`}>
      {items.map(item => (
        <BaseItemCard 
          key={item.id} 
          item={item} 
          itemType={config.type}
          isVertical={isVertical} 
        />
      ))}
    </div>
  );
};
