
import { useQuery } from '@tanstack/react-query';
import { mockVehicles, MockVehicle } from '../data/mockVehicles';

export const useMockVehicles = () => {
  return useQuery({
    queryKey: ['vehicles'],
    queryFn: async (): Promise<MockVehicle[]> => {
      // Simula delay de rede
      await new Promise(resolve => setTimeout(resolve, 500));
      return mockVehicles;
    },
    staleTime: 5 * 60 * 1000, // 5 minutos
  });
};

export const useMockVehiclesStats = () => {
  return useQuery({
    queryKey: ['vehicles-stats'],
    queryFn: async () => {
      await new Promise(resolve => setTimeout(resolve, 200));
      
      const now = new Date();
      const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
      
      const newAuctions = mockVehicles.filter(vehicle => {
        const updatedDate = new Date(vehicle.updated);
        return updatedDate >= twentyFourHoursAgo;
      }).length;
      
      const totalSites = new Set(mockVehicles.map(vehicle => vehicle.website)).size;
      
      return {
        totalAuctions: mockVehicles.length,
        totalSites,
        newAuctions
      };
    },
    staleTime: 5 * 60 * 1000,
  });
};
