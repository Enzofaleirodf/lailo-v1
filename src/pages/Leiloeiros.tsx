
import React, { useState, useMemo } from "react";
import { Building2 } from "lucide-react";
import { BasePageLayout } from "../components/layout/BasePageLayout";
import { LeiloeiroFilters } from "../components/leiloeiros/LeiloeiroFilters";
import { LeiloeiroStateAccordion } from "../components/leiloeiros/LeiloeiroStateAccordion";
import { LeiloeiroEmptyState } from "../components/leiloeiros/LeiloeiroEmptyState";
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

  return (
    <BasePageLayout containerClass="p-0">
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Header padronizado - desktop apenas */}
        <div className="hidden md:block mb-8 px-6 pt-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Building2 className="w-8 h-8 text-blue-600" />
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Leiloeiros Oficiais do Brasil</h1>
                <p className="text-gray-600 mt-1">Encontre leiloeiros credenciados em todo o país</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filtros padronizados */}
        <div className="bg-white md:rounded-lg md:shadow-sm md:border md:border-gray-200 p-4 md:p-6 mb-6 md:mx-6">
          <LeiloeiroFilters
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedState={selectedState}
            setSelectedState={setSelectedState}
            activeAuctionsFilter={activeAuctionsFilter}
            setActiveAuctionsFilter={setActiveAuctionsFilter}
            estados={estados}
          />
        </div>

        {/* Conteúdo principal */}
        <div className="bg-white md:rounded-lg md:shadow-sm md:border md:border-gray-200 md:mx-6 min-h-[400px]">
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
        </div>
      </div>
    </BasePageLayout>
  );
};

export default Leiloeiros;
