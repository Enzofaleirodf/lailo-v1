
import { SearchConfig } from '../types/search';

export const vehicleSearchConfig: SearchConfig = {
  type: 'vehicle',
  title: 'Buscar Veículos',
  backUrl: '/',
  sortOptions: ["Mais recentes", "Menor preço", "Maior preço", "Maior desconto", "Mais próximos"],
  resultsText: (count: number, sites: number) => 
    `Encontramos ${count.toLocaleString()} leilões em ${sites} sites`
};

export const propertySearchConfig: SearchConfig = {
  type: 'property',
  title: 'Buscar Imóveis',
  backUrl: '/',
  sortOptions: ["Mais recentes", "Menor preço", "Maior preço", "Maior desconto", "Mais próximos"],
  resultsText: (count: number, sites: number) => 
    `Encontramos ${count.toLocaleString()} imóveis em ${sites} sites`
};
