
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Favorite } from '@/types';

interface FavoritesStore {
  favorites: Favorite[];
  isLoading: boolean;
  addFavorite: (itemId: string, itemType: 'vehicle' | 'property', title?: string, price?: string, image?: string) => void;
  removeFavorite: (itemId: string) => void;
  isFavorite: (itemId: string) => boolean;
  getFavoritesByType: (itemType: 'vehicle' | 'property') => Favorite[];
  clearFavorites: () => void;
}

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favorites: [],
      isLoading: false,

      addFavorite: (itemId, itemType, title = '', price = '', image = '') => {
        const exists = get().favorites.find(f => f.itemId === itemId);
        if (!exists) {
          const newFavorite: Favorite = {
            id: Date.now().toString(),
            itemId,
            itemType,
            addedAt: new Date().toISOString(),
            createdAt: new Date().toISOString(),
            title,
            price,
            image,
          };
          set(state => ({
            favorites: [...state.favorites, newFavorite]
          }));
        }
      },

      removeFavorite: (itemId) => {
        set(state => ({
          favorites: state.favorites.filter(f => f.itemId !== itemId)
        }));
      },

      isFavorite: (itemId) => {
        return get().favorites.some(f => f.itemId === itemId);
      },

      getFavoritesByType: (itemType) => {
        return get().favorites.filter(f => f.itemType === itemType);
      },

      clearFavorites: () => {
        set({ favorites: [] });
      },
    }),
    {
      name: 'favorites-storage',
    }
  )
);
