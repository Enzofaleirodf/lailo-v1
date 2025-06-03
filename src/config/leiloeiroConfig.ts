
import { SearchConfig } from '../types/search';

export const leiloeiroSearchConfig: SearchConfig = {
  type: 'property', // usando property como base, mas não será usado para filtros
  title: 'Leiloeiros Oficiais',
  backUrl: '/',
  sortOptions: ["Nome A-Z", "Nome Z-A", "Mais leilões", "Menos leilões"],
  resultsText: (count: number) => 
    `${count.toLocaleString()} ${count === 1 ? 'leiloeiro encontrado' : 'leiloeiros encontrados'}`
};
