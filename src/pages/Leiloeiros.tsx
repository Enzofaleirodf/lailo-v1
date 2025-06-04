
import React, { useState, useMemo } from "react";
import { Building2 } from "lucide-react";
import { ContentPageLayout } from "../components/layout/ContentPageLayout";
import { LeiloeiroFilters } from "../components/leiloeiros/LeiloeiroFilters";
import { LeiloeiroStateAccordion } from "../components/leiloeiros/LeiloeiroStateAccordion";
import { LeiloeiroEmptyState } from "../components/leiloeiros/LeiloeiroEmptyState";
import { LeiloeiroMobileContent } from "../components/leiloeiros/LeiloeiroMobileContent";
import { leiloeiros, juntasComerciais } from "../data/leiloeiros";
import { JuntaComercial } from "../types/leiloeiro";

const Leiloeiros = () => {
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
    }, {} as Record<string, typeof leiloeiros>);

    // Ordenar leiloeiros dentro de cada estado
    Object.keys(grouped).forEach(state => {
      grouped[state].sort((a, b) => a.name.localeCompare(b.name));
    });
    
    return grouped;
  }, [selectedState, searchTerm, activeAuctionsFilter]);

  const getJuntaComercial = (state: string): JuntaComercial | undefined => {
    return juntasComerciais.find(j => j.state === state);
  };

  const filtersContent = (
    <LeiloeiroFilters
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      selectedState={selectedState}
      setSelectedState={setSelectedState}
      activeAuctionsFilter={activeAuctionsFilter}
      setActiveAuctionsFilter={setActiveAuctionsFilter}
      estados={estados}
    />
  );

  return (
    <ContentPageLayout
      title="Leiloeiros Oficiais do Brasil"
      subtitle="Encontre leiloeiros credenciados em todo o país"
      titleIcon={Building2}
      showFilters={true}
      filtersContent={filtersContent}
      containerClass="w-full max-w-[1440px] mx-auto"
      contentClass="bg-white md:rounded-lg md:shadow-sm md:border md:border-gray-200 md:mx-6 min-h-[400px]"
    >
      <div className="p-4 md:p-6">
        {Object.keys(filteredAndGroupedLeiloeiros).length > 0 ? (
          <LeiloeiroStateAccordion
            filteredAndGroupedLeiloeiros={filteredAndGroupedLeiloeiros}
            getJuntaComercial={getJuntaComercial}
          />
        ) : (
          <LeiloeiroEmptyState />
        )}
      </div>
    </ContentPageLayout>
  );
};

export default Leiloeiros;
