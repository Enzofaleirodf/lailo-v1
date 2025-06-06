import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface FavoriteItem {
  id: string;
  type: 'property' | 'vehicle';
  title: string;
  image: string;
  price: number;
  location: string;
  endDate: string;
  href: string;
}

interface FavoritesStore {
  favorites: FavoriteItem[];
  isLoading: boolean;
  
  // Core actions
  addFavorite: (item: Omit<FavoriteItem, 'id' | 'createdAt'>) => void;
  removeFavorite: (itemId: string, itemType: 'property' | 'vehicle') => void;
  toggleFavorite: (item: Omit<FavoriteItem, 'id' | 'createdAt'>) => void;
  
  // Query actions
  isFavorite: (itemId: string, itemType: 'property' | 'vehicle') => boolean;
  getFavoritesByType: (type: 'property' | 'vehicle') => FavoriteItem[];
  getFavoriteCount: (type?: 'property' | 'vehicle') => number;
  
  // Utility actions
  clearFavorites: () => void;
  clearFavoritesByType: (type: 'property' | 'vehicle') => void;
  setLoading: (loading: boolean) => void;
  
  // Future Supabase integration
  syncWithSupabase?: () => Promise<void>;
  loadFavoritesFromSupabase?: () => Promise<void>;
}

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favorites: [],
      isLoading: false,

      addFavorite: (item) => {
        const { favorites } = get();
        const exists = favorites.some(
          fav => fav.itemId === item.itemId && fav.itemType === item.itemType
        );
        
        if (!exists) {
          const newFavorite: FavoriteItem = {
            ...item,
            id: `${item.itemType}_${item.itemId}_${Date.now()}`,
            createdAt: new Date().toISOString(),
          };

          set(state => ({
            favorites: [...state.favorites, newFavorite],
          }));

          console.log('Favorite added locally:', newFavorite);
        }
      },

      removeFavorite: (itemId, itemType) => {
        set(state => ({
          favorites: state.favorites.filter(
            fav => !(fav.itemId === itemId && fav.itemType === itemType)
          ),
        }));

        console.log('Favorite removed locally:', { itemId, itemType });
      },

      toggleFavorite: (item) => {
        const { isFavorite, addFavorite, removeFavorite } = get();
        
        if (isFavorite(item.itemId, item.itemType)) {
          removeFavorite(item.itemId, item.itemType);
        } else {
          addFavorite(item);
        }
      },

      isFavorite: (itemId, itemType) => {
        const { favorites } = get();
        return favorites.some(
          fav => fav.itemId === itemId && fav.itemType === itemType
        );
      },

      getFavoritesByType: (type) => {
        const { favorites } = get();
        return favorites
          .filter(fav => fav.itemType === type)
          .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      },

      getFavoriteCount: (type) => {
        const { favorites } = get();
        return type 
          ? favorites.filter(fav => fav.itemType === type).length
          : favorites.length;
      },

      clearFavorites: () => set({ favorites: [] }),

      clearFavoritesByType: (type) => {
        set(state => ({
          favorites: state.favorites.filter(fav => fav.itemType !== type),
        }));
      },

      setLoading: (loading) => set({ isLoading: loading }),
    }),
    {
      name: 'auction-favorites',
      partialize: (state) => ({
        favorites: state.favorites,
      }),
    }
  )
);
