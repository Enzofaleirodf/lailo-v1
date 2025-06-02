
import { create } from 'zustand';

interface Favorite {
  itemId: string;
  itemType: 'vehicle' | 'property';
  title: string;
  price: string;
  image: string;
}

interface FavoritesStore {
  favorites: Favorite[];
  addFavorite: (favorite: Favorite) => void;
  removeFavorite: (itemId: string, itemType: 'vehicle' | 'property') => void;
  isFavorite: (itemId: string, itemType: 'vehicle' | 'property') => boolean;
}

export const useFavoritesStore = create<FavoritesStore>((set, get) => ({
  favorites: [],
  addFavorite: (favorite) =>
    set((state) => ({
      favorites: [...state.favorites, favorite],
    })),
  removeFavorite: (itemId, itemType) =>
    set((state) => ({
      favorites: state.favorites.filter(
        (fav) => !(fav.itemId === itemId && fav.itemType === itemType)
      ),
    })),
  isFavorite: (itemId, itemType) => {
    const { favorites } = get();
    return favorites.some(
      (fav) => fav.itemId === itemId && fav.itemType === itemType
    );
  },
}));
