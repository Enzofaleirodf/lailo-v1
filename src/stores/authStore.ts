
import { create } from 'zustand';

export interface User {
  id: string;
  email: string;
  name?: string;
  avatar?: string;
}

export interface UserProfile {
  id: string;
  userId: string;
  name: string;
  email: string;
  phone?: string;
  preferences?: {
    notifications: boolean;
    emailUpdates: boolean;
    favoriteCategories: string[];
  };
  createdAt: string;
  updatedAt: string;
}

interface AuthStore {
  user: User | null;
  profile: UserProfile | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  
  // Actions
  setUser: (user: User | null) => void;
  setProfile: (profile: UserProfile | null) => void;
  setLoading: (loading: boolean) => void;
  logout: () => void;
  
  // Estas funções serão implementadas quando o Supabase for conectado
  login?: (email: string, password: string) => Promise<void>;
  signup?: (email: string, password: string, name?: string) => Promise<void>;
  updateProfile?: (updates: Partial<UserProfile>) => Promise<void>;
  refreshUser?: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set, get) => ({
  user: null,
  profile: null,
  isLoading: false,
  isAuthenticated: false,

  setUser: (user) => 
    set({ 
      user, 
      isAuthenticated: !!user 
    }),

  setProfile: (profile) => set({ profile }),

  setLoading: (loading) => set({ isLoading: loading }),

  logout: () => {
    set({ 
      user: null, 
      profile: null, 
      isAuthenticated: false 
    });
    
    // TODO: Quando Supabase estiver conectado, fazer logout real
    console.log('User logged out locally');
  },
}));
