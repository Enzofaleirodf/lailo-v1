
import React, { useState, useMemo } from "react";
import { Building2 } from "lucide-react";
import { LeiloeiroFilters } from "../components/leiloeiros/LeiloeiroFilters";
import { LeiloeiroEmptyState } from "../components/leiloeiros/LeiloeiroEmptyState";
import { LeiloeiroCard } from "../components/leiloeiros/LeiloeiroCard";
import { ContentPageLayout } from "@/components/layout/ContentPageLayout";
import { leiloeiros } from "../data/leiloeiros";

const Leiloeiros = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState("todos");
  const [activeAuctionsFilter, setActiveAuctionsFilter] = useState("todos");

  // Estados únicos dos leiloeiros
  const estados = useMemo(() => {
    const uniqueStates = [...new Set(leiloeiros.map(l => l.state))].sort();
    return uniqueStates;
  }, []);

  // Filtrar e agrupar leiloeiros por estado
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

    // Filtrar por presença de site
    if (activeAuctionsFilter === "com-site") {
      filtered = filtered.filter(l => l.website && l.website.trim() !== "");
    } else if (activeAuctionsFilter === "sem-site") {
      filtered = filtered.filter(l => !l.website || l.website.trim() === "");
    }

    // Agrupar por estado
    const grouped = filtered.reduce((acc, leiloeiro) => {
      const state = leiloeiro.state;
      if (!acc[state]) {
        acc[state] = [];
      }
      acc[state].push(leiloeiro);
      return acc;
    }, {} as Record<string, typeof leiloeiros>);

    // Ordenar estados alfabeticamente e leiloeiros dentro de cada estado
    const sortedStates = Object.keys(grouped).sort();
    const result: { state: string; leiloeiros: typeof leiloeiros }[] = [];

    sortedStates.forEach(state => {
      const sortedLeiloeiros = grouped[state].sort((a, b) => a.name.localeCompare(b.name));
      result.push({ state, leiloeiros: sortedLeiloeiros });
    });

    return result;
  }, [selectedState, searchTerm, activeAuctionsFilter]);

  const totalLeiloeiros = filteredAndGroupedLeiloeiros.reduce((total, group) => total + group.leiloeiros.length, 0);

  return (
    <ContentPageLayout
      title="Leiloeiros Oficiais do Brasil"
      subtitle="Encontre leiloeiros credenciados em todo o país"
      titleIcon={Building2}
      showFilters={true}
      filtersContent={
        <LeiloeiroFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedState={selectedState}
          setSelectedState={setSelectedState}
          activeAuctionsFilter={activeAuctionsFilter}
          setActiveAuctionsFilter={setActiveAuctionsFilter}
          estados={estados}
        />
      }
      contentClass="bg-white md:rounded-lg md:shadow-sm md:border md:border-gray-200 p-4 md:p-6 md:mx-6 min-h-[400px]"
    >
      {/* Header Mobile */}
      <div className="block md:hidden mb-6">
        <div className="flex items-center gap-3 mb-2">
          <Building2 className="w-6 h-6 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">Leiloeiros Oficiais</h1>
        </div>
        <p className="text-gray-600 text-sm">Encontre leiloeiros credenciados</p>
      </div>

      {totalLeiloeiros > 0 ? (
        <div className="space-y-8">
          {filteredAndGroupedLeiloeiros.map(({ state, leiloeiros }) => (
            <div key={state}>
              {/* Título do Estado */}
              <div className="mb-4">
                <h2 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                  {state} ({leiloeiros.length})
                </h2>
              </div>
              
              {/* Grid de Cards do Estado - 3 colunas no desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {leiloeiros.map((leiloeiro) => (
                  <LeiloeiroCard key={leiloeiro.id} leiloeiro={leiloeiro} />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <LeiloeiroEmptyState />
      )}
    </ContentPageLayout>
  );
};

export default Leiloeiros;
