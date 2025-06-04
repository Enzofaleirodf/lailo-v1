
import React, { useState, useMemo } from "react";
import { Building2 } from "lucide-react";
import { BasePageLayout } from "../components/layout/BasePageLayout";
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
    <BasePageLayout>
      {/* Mobile Layout */}
      <div className="block md:hidden">
        {/* Header Mobile */}
        <div className="flex items-center gap-3 mb-6">
          <Building2 className="w-6 h-6 text-blue-600" />
          <div>
            <h1 className="text-xl font-bold text-gray-900">Leiloeiros Oficiais</h1>
            <p className="text-sm text-gray-600">Encontre leiloeiros credenciados</p>
          </div>
        </div>

        <LeiloeiroMobileContent
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedState={selectedState}
          setSelectedState={setSelectedState}
          activeAuctionsFilter={activeAuctionsFilter}
          setActiveAuctionsFilter={setActiveAuctionsFilter}
          estados={estados}
          filteredAndGroupedLeiloeiros={filteredAndGroupedLeiloeiros}
          getJuntaComercial={getJuntaComercial}
        />
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <ContentPageLayout
          title="Leiloeiros Oficiais do Brasil"
          subtitle="Encontre leiloeiros credenciados em todo o país"
          titleIcon={Building2}
          showFilters={true}
          filtersContent={filtersContent}
        >
          <div className="p-6">
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
      </div>
    </BasePageLayout>
  );
};

export default Leiloeiros;
