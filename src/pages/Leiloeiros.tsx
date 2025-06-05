
import React, { useState, useMemo } from "react";
import { Gavel } from "lucide-react";
import { LeiloeiroFilters } from "../components/leiloeiros/LeiloeiroFilters";
import { LeiloeiroEmptyState } from "../components/leiloeiros/LeiloeiroEmptyState";
import { LeiloeiroCard } from "../components/leiloeiros/LeiloeiroCard";
import { ContentPageLayout } from "@/components/layout/ContentPageLayout";
import { leiloeiros } from "../data/leiloeiros";

const Leiloeiros = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState("todos");

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
  }, [selectedState, searchTerm]);

  const totalLeiloeiros = filteredAndGroupedLeiloeiros.reduce((total, group) => total + group.leiloeiros.length, 0);

  return (
    <ContentPageLayout
      title="Leiloeiros Oficiais"
      subtitle="Encontre todos os leiloeiros credenciados do país"
      titleIcon={Gavel}
      showFilters={true}
      filtersContent={
        <LeiloeiroFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedState={selectedState}
          setSelectedState={setSelectedState}
          estados={estados}
        />
      }
    >
      {totalLeiloeiros > 0 ? (
        <div className="space-y-4 md:space-y-8">
          {filteredAndGroupedLeiloeiros.map(({ state, leiloeiros }) => (
            <div key={state}>
              {/* Título do Estado - compacto no mobile */}
              <div className="mb-3 md:mb-4">
                <h2 className="text-base md:text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                  {state} ({leiloeiros.length})
                </h2>
              </div>
              
              {/* Grid de Cards do Estado - 1 coluna no mobile, 3 no desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
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
