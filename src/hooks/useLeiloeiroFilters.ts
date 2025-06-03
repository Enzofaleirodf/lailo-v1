
import { useState, useMemo } from 'react';
import { Leiloeiro, leiloeiros } from '../data/leiloeiroData';

export const useLeiloeiroFilters = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState("todos");
  const [activeAuctionsFilter, setActiveAuctionsFilter] = useState("todos");

  // Estados únicos dos leiloeiros
  const estados = useMemo(() => {
    const uniqueStates = [...new Set(leiloeiros.map(l => l.state))].sort();
    return uniqueStates;
  }, []);

  // Filtrar e agrupar leiloeiros
  const filteredAndGroupedLeiloeiros = useMemo(() => {
    let filtered = leiloeiros;

    // Filtrar por estado
    if (selectedState !== "todos") {
      filtered = filtered.filter(l => l.state === selectedState);
    }

    // Filtrar por busca
    if (searchTerm) {
      filtered = filtered.filter(l => 
        l.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        l.websiteName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtrar por leilões ativos
    if (activeAuctionsFilter === "com-leiloes") {
      filtered = filtered.filter(l => l.activeAuctions > 0);
    } else if (activeAuctionsFilter === "sem-leiloes") {
      filtered = filtered.filter(l => l.activeAuctions === 0);
    }

    // Agrupar por estado
    const grouped = filtered.reduce((acc, leiloeiro) => {
      if (!acc[leiloeiro.state]) {
        acc[leiloeiro.state] = [];
      }
      acc[leiloeiro.state].push(leiloeiro);
      return acc;
    }, {} as Record<string, Leiloeiro[]>);

    // Ordenar leiloeiros dentro de cada estado
    Object.keys(grouped).forEach(state => {
      grouped[state].sort((a, b) => a.name.localeCompare(b.name));
    });

    return grouped;
  }, [searchTerm, selectedState, activeAuctionsFilter]);

  const totalLeiloeiros = Object.values(filteredAndGroupedLeiloeiros).flat().length;

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedState("todos");
    setActiveAuctionsFilter("todos");
  };

  return {
    searchTerm,
    setSearchTerm,
    selectedState,
    setSelectedState,
    activeAuctionsFilter,
    setActiveAuctionsFilter,
    estados,
    filteredAndGroupedLeiloeiros,
    totalLeiloeiros,
    handleClearFilters
  };
};
