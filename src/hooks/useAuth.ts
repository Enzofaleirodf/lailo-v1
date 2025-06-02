
import { useAuthStore } from '../stores/authStore';

export const useAuth = () => {
  const {
    user,
    profile,
    isLoading,
    isAuthenticated,
    setUser,
    setProfile,
    setLoading,
    logout,
  } = useAuthStore();

  // Função para verificar se o usuário tem acesso a uma rota protegida
  const hasAccess = (requiredAuth: boolean = true): boolean => {
    if (!requiredAuth) return true;
    return isAuthenticated;
  };

  // Função para verificar se é admin (será implementada com Supabase)
  const isAdmin = (): boolean => {
    // TODO: Implementar verificação de admin quando Supabase estiver conectado
    return false;
  };

  return {
    user,
    profile,
    isLoading,
    isAuthenticated,
    setUser,
    setProfile,
    setLoading,
    logout,
    hasAccess,
    isAdmin,
  };
};
