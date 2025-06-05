
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
  simulateLogin: () => void;
  
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
        return user?.email === 'admin@example.com';
      },

      simulateLogin: () => {
        const demoUser = {
          id: 'demo-user-123',
          email: 'usuario@exemplo.com',
          name: 'Usuário Demo'
        };
        const demoProfile = {
          id: 'profile-123',
          userId: 'demo-user-123',
          name: 'Usuário Demo',
          email: 'usuario@exemplo.com',
          phone: '(11) 99999-9999',
          preferences: {
            notifications: true,
            emailUpdates: true,
            favoriteCategories: ['property', 'vehicle']
          },
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };
        
        set({ 
          user: demoUser,
          profile: demoProfile,
          isAuthenticated: true 
        });
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
