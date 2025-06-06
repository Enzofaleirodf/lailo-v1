
import { useQuery } from '@tanstack/react-query';
import { mockProperties, MockProperty } from '../data/mockProperties';

export const useMockProperties = () => {
  return useQuery({
    queryKey: ['properties'],
    queryFn: async (): Promise<MockProperty[]> => {
      // Simula delay de rede
      await new Promise(resolve => setTimeout(resolve, 500));
      return mockProperties;
    },
    staleTime: 5 * 60 * 1000, // 5 minutos
  });
};

export const useMockPropertiesStats = () => {
  return useQuery({
    queryKey: ['properties-stats'],
    queryFn: async () => {
      await new Promise(resolve => setTimeout(resolve, 200));
      
      const now = new Date();
      const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
      
      const newAuctions = mockProperties.filter(property => {
        const updatedDate = new Date(property.updated);
        return updatedDate >= twentyFourHoursAgo;
      }).length;
      
      const totalSites = new Set(mockProperties.map(property => property.website)).size;
      
      return {
        totalAuctions: mockProperties.length,
        totalSites,
        newAuctions
      };
    },
    staleTime: 5 * 60 * 1000,
  });
};
