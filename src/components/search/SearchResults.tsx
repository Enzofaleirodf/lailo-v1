
import { BaseItemCard } from "../base/BaseItemCard";
import { SearchResultsProps } from "../../types/search";
import { cardTokens } from "../../styles/card-tokens";

export const SearchResults = ({ items, isVertical, config }: SearchResultsProps) => {
  return (
    <div className={`${isVertical ? `grid ${cardTokens.grid.mobile} ${cardTokens.grid.tablet} ${cardTokens.grid.desktop} gap-4` : 'space-y-4'}`}>
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
