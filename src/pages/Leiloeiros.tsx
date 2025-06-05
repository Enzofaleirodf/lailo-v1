
import React, { useState, useMemo } from "react";
import { Building2 } from "lucide-react";
import { LeiloeiroFilters } from "../components/leiloeiros/LeiloeiroFilters";
import { LeiloeiroStateAccordion } from "../components/leiloeiros/LeiloeiroStateAccordion";
import { LeiloeiroEmptyState } from "../components/leiloeiros/LeiloeiroEmptyState";
import { LeiloeiroCard } from "../components/leiloeiros/LeiloeiroCard";
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

  // Lista plana de leiloeiros filtrados para mobile
  const filteredLeiloeiros = useMemo(() => {
    const allFiltered = Object.values(filteredAndGroupedLeiloeiros).flat();
    return allFiltered.sort((a, b) => a.name.localeCompare(b.name));
  }, [filteredAndGroupedLeiloeiros]);

  const getJuntaComercial = (state: string): JuntaComercial | undefined => {
    return juntasComerciais.find(j => j.state === state);
  };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Mobile Layout */}
      <div className="block md:hidden px-4 py-6 pb-20">
        {/* Header Mobile */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <Building2 className="w-6 h-6 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Leiloeiros Oficiais</h1>
          </div>
          <p className="text-gray-600 text-sm">Encontre leiloeiros credenciados</p>
        </div>

        {/* Filtros Mobile */}
        <LeiloeiroFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedState={selectedState}
          setSelectedState={setSelectedState}
          activeAuctionsFilter={activeAuctionsFilter}
          setActiveAuctionsFilter={setActiveAuctionsFilter}
          estados={estados}
          isMobile={true}
        />

        {/* Grid de Cards Mobile */}
        {filteredLeiloeiros.length > 0 ? (
          <div className="space-y-4">
            {filteredLeiloeiros.map((leiloeiro) => (
              <LeiloeiroCard key={leiloeiro.id} leiloeiro={leiloeiro} />
            ))}
          </div>
        ) : (
          <LeiloeiroEmptyState />
        )}
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="w-full relative min-h-screen bg-white">
          <main className="ml-12 min-h-screen flex flex-col">
            <div className="bg-white flex-1 p-6">
              <div className="w-full max-w-[1440px] mx-auto">
                {/* Header Desktop */}
                <div className="mb-8">
                  <div className="flex items-center gap-3">
                    <Building2 className="w-8 h-8 text-blue-600" />
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900">Leiloeiros Oficiais do Brasil</h1>
                      <p className="text-gray-600 mt-1">Encontre leiloeiros credenciados em todo o país</p>
                    </div>
                  </div>
                </div>

                {/* Filtros Desktop */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
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

                {/* Conteúdo Desktop */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 min-h-[400px]">
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
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Leiloeiros;
