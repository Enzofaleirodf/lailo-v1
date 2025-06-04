
import { useAuthStore } from '@/stores/authStore';
import { useFavoritesStore } from '@/stores/favoritesStore';

export const useAppState = () => {
  const auth = useAuthStore();
  const favorites = useFavoritesStore();

  return {
    // Auth state
    user: auth.user,
    profile: auth.profile,
    isAuthenticated: auth.isAuthenticated,
    isAuthLoading: auth.isLoading,
    isAdmin: auth.isAdmin,
    
    // Auth actions
    setUser: auth.setUser,
    setProfile: auth.setProfile,
    setAuthLoading: auth.setLoading,
    logout: auth.logout,
    
    // Favorites state
    favorites: favorites.favorites,
    isFavoritesLoading: favorites.isLoading,
    
    // Favorites actions
    addFavorite: favorites.addFavorite,
    removeFavorite: favorites.removeFavorite,
    toggleFavorite: favorites.toggleFavorite,
    isFavorite: favorites.isFavorite,
    getFavoritesByType: favorites.getFavoritesByType,
    getFavoriteCount: favorites.getFavoriteCount,
    clearFavorites: favorites.clearFavorites,
    clearFavoritesByType: favorites.clearFavoritesByType,
    setFavoritesLoading: favorites.setLoading,
  };
};
