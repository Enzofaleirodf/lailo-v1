
import { useAppState } from './useAppState';

export const useAuth = () => {
  const {
    user,
    profile,
    isAuthenticated,
    isAuthLoading: isLoading,
    isAdmin,
    setUser,
    setProfile,
    setAuthLoading: setLoading,
    logout
  } = useAppState();

  return {
    user,
    profile,
    isAuthenticated,
    isLoading,
    isAdmin,
    setUser,
    setProfile,
    setLoading,
    logout,
  };
};
