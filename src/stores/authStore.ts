
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

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
  isAdmin: () => boolean;
  
  // Future Supabase integration
  login?: (email: string, password: string) => Promise<void>;
  signup?: (email: string, password: string, name?: string) => Promise<void>;
  updateProfile?: (updates: Partial<UserProfile>) => Promise<void>;
  refreshUser?: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
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
        console.log('User logged out locally');
      },

      isAdmin: () => {
        const { user } = get();
        // Placeholder logic - will be implemented with Supabase
        return user?.email === 'admin@example.com';
      },
    }),
    {
      name: 'auction-auth',
      partialize: (state) => ({
        user: state.user,
        profile: state.profile,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
