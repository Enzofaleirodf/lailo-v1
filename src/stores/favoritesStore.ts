
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface FavoriteItem {
  id: string;
  itemId: string;
  itemType: 'property' | 'vehicle';
  title: string;
  price: string;
  image?: string;
  createdAt: string;
}

interface FavoritesStore {
  favorites: FavoriteItem[];
  isLoading: boolean;
  addFavorite: (item: Omit<FavoriteItem, 'id' | 'createdAt'>) => void;
  removeFavorite: (itemId: string, itemType: 'property' | 'vehicle') => void;
  isFavorite: (itemId: string, itemType: 'property' | 'vehicle') => boolean;
  getFavoritesByType: (type: 'property' | 'vehicle') => FavoriteItem[];
  clearFavorites: () => void;
  setLoading: (loading: boolean) => void;
  // Estas funções serão implementadas quando o Supabase for conectado
  syncWithSupabase?: () => Promise<void>;
  loadFavoritesFromSupabase?: () => Promise<void>;
}

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favorites: [],
      isLoading: false,

      addFavorite: (item) => {
        const newFavorite: FavoriteItem = {
          ...item,
          id: `${item.itemType}_${item.itemId}_${Date.now()}`,
          createdAt: new Date().toISOString(),
        };

        set((state) => ({
          favorites: [...state.favorites, newFavorite],
        }));

        // TODO: Quando Supabase estiver conectado, sincronizar com o backend
        console.log('Favorite added locally:', newFavorite);
      },

      removeFavorite: (itemId, itemType) => {
        set((state) => ({
          favorites: state.favorites.filter(
            (fav) => !(fav.itemId === itemId && fav.itemType === itemType)
          ),
        }));

        // TODO: Quando Supabase estiver conectado, remover do backend
        console.log('Favorite removed locally:', { itemId, itemType });
      },

      isFavorite: (itemId, itemType) => {
        const { favorites } = get();
        return favorites.some(
          (fav) => fav.itemId === itemId && fav.itemType === itemType
        );
      },

      getFavoritesByType: (type) => {
        const { favorites } = get();
        return favorites.filter((fav) => fav.itemType === type);
      },

      clearFavorites: () => set({ favorites: [] }),

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
