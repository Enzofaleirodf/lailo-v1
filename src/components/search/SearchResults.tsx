
import { VehicleCard } from "../VehicleCard";
import { PropertyCard } from "../PropertyCard";
import { SearchResultsProps, Vehicle, Property } from "../../types/search";

export const SearchResults = ({ items, isVertical, config }: SearchResultsProps) => {
  return (
    <div className={`${isVertical ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}`}>
      {items.map(item => {
        if (config.type === 'vehicle') {
          return (
            <VehicleCard 
              key={item.id} 
              vehicle={item as Vehicle} 
              isVertical={isVertical} 
            />
          );
        } else {
          return (
            <PropertyCard 
              key={item.id} 
              property={item as Property} 
              isVertical={isVertical} 
            />
          );
        }
      })}
    </div>
  );
};
