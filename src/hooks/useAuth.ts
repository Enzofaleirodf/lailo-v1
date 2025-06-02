
import { useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  role?: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate auth check
    const checkAuth = () => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    // Simulate login
    const mockUser = {
      id: '1',
      email,
      name: email.split('@')[0],
      role: 'user'
    };
    
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
    return mockUser;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const isAdmin = () => {
    return user?.role === 'admin';
  };

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    logout,
    isAdmin
  };
};
