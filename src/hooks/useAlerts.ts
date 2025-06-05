
import { AlertFilters } from '../types/alert';

export const useAlerts = () => {
  const formatFiltersForDisplay = (filters: AlertFilters, type: 'property' | 'vehicle'): string => {
    const parts: string[] = [];

    // Localização
    if (filters.state && filters.state !== 'todos-estados') {
      parts.push(filters.state);
    }
    if (filters.city && filters.city !== 'todas-cidades') {
      parts.push(filters.city);
    }

    // Categoria e tipo
    if (type === 'property') {
      if (filters.propertyCategory && filters.propertyCategory !== 'residenciais') {
        parts.push(filters.propertyCategory);
      }
      if (filters.propertyType && filters.propertyType !== 'todos') {
        parts.push(filters.propertyType);
      }
      
      // Área
      if (filters.areaRange && (filters.areaRange[0] > 50 || filters.areaRange[1] < 500)) {
        parts.push(`${filters.areaRange[0]}-${filters.areaRange[1]}m²`);
      }
    } else {
      if (filters.vehicleCategory && filters.vehicleCategory !== 'leves') {
        parts.push(filters.vehicleCategory);
      }
      if (filters.vehicleType && filters.vehicleType !== 'carros') {
        parts.push(filters.vehicleType);
      }
      if (filters.brand && filters.brand !== 'todas-marcas') {
        parts.push(filters.brand);
      }
      if (filters.model && filters.model !== 'todos-modelos') {
        parts.push(filters.model);
      }
      if (filters.color && filters.color !== 'todas-cores') {
        parts.push(filters.color);
      }

      // Ano
      if (filters.yearRange && (filters.yearRange[0] > 2000 || filters.yearRange[1] < 2025)) {
        parts.push(`${filters.yearRange[0]}-${filters.yearRange[1]}`);
      }
    }

    // Preço
    if (filters.priceRange) {
      const min = filters.priceRange[0];
      const max = filters.priceRange[1];
      if (min > 50000 || max < 1000000) {
        parts.push(`R$ ${(min / 1000).toFixed(0)}k - R$ ${(max / 1000).toFixed(0)}k`);
      }
    }

    // Formato
    if (filters.format && filters.format !== 'leilao') {
      parts.push(filters.format === 'venda-direta' ? 'Venda Direta' : 'Leilão');
    }

    // Origem
    if (filters.origin && filters.origin.length > 0) {
      parts.push(`Origem: ${filters.origin.join(', ')}`);
    }

    return parts.length > 0 ? parts.join(', ') : 'Todos os resultados';
  };

  const validateAlert = (name: string, filters: AlertFilters): string | null => {
    if (!name.trim()) {
      return 'Nome do alerta é obrigatório';
    }

    if (name.length > 50) {
      return 'Nome deve ter no máximo 50 caracteres';
    }

    // Verificar se pelo menos um filtro específico foi aplicado
    const hasSpecificFilters = Object.entries(filters).some(([key, value]) => {
      if (key === 'state' && value === 'todos-estados') return false;
      if (key === 'city' && value === 'todas-cidades') return false;
      if (key === 'propertyCategory' && value === 'residenciais') return false;
      if (key === 'propertyType' && value === 'todos') return false;
      if (key === 'vehicleCategory' && value === 'leves') return false;
      if (key === 'vehicleType' && value === 'carros') return false;
      if (key === 'brand' && value === 'todas-marcas') return false;
      if (key === 'model' && value === 'todos-modelos') return false;
      if (key === 'color' && value === 'todas-cores') return false;
      if (key === 'format' && value === 'leilao') return false;
      
      return value !== undefined && value !== null && 
             (Array.isArray(value) ? value.length > 0 : true);
    });

    if (!hasSpecificFilters) {
      return 'Selecione pelo menos um filtro específico para o alerta';
    }

    return null;
  };

  return {
    formatFiltersForDisplay,
    validateAlert,
  };
};
