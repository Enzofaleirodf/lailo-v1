
export type ItemType = 'vehicle' | 'property';

export interface BaseItem {
  id: string;
  image: string;
  price: string;
  discount: string;
  badges: string[];
  date: string;
  showNewBadge: boolean;
}

export interface Vehicle extends BaseItem {
  name: string;
  color: string;
  year: string;
  location: string;
}

export interface Property extends BaseItem {
  type: string;
  area: string;
  location: string;
}

export type SearchItem = Vehicle | Property;

export interface SearchConfig {
  type: ItemType;
  title: string;
  backUrl: string;
  sortOptions: string[];
  resultsText: (count: number, sites: number) => string;
}

export interface SearchControlsProps {
  isVertical: boolean;
  onToggleLayout: (vertical: boolean) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  sortOptions: string[];
  resultsText: string;
}

export interface SearchResultsProps {
  items: SearchItem[];
  isVertical: boolean;
  config: SearchConfig;
}
