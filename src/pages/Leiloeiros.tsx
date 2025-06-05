
import React, { useState, useMemo } from "react";
import { Building2 } from "lucide-react";
import { LeiloeiroFilters } from "../components/leiloeiros/LeiloeiroFilters";
import { LeiloeiroEmptyState } from "../components/leiloeiros/LeiloeiroEmptyState";
import { LeiloeiroCard } from "../components/leiloeiros/LeiloeiroCard";
import { BasePageLayout } from "@/components/layout/BasePageLayout";
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

  // Filtrar leiloeiros
  const filteredLeiloeiros = useMemo(() => {
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

    // Ordenar por nome
    return filtered.sort((a, b) => a.name.localeCompare(b.name));
  }, [selectedState, searchTerm, activeAuctionsFilter]);

  return (
    <BasePageLayout>
      {/* Header Mobile */}
      <div className="block md:hidden mb-6">
        <div className="flex items-center gap-3 mb-2">
          <Building2 className="w-6 h-6 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">Leiloeiros Oficiais</h1>
        </div>
        <p className="text-gray-600 text-sm">Encontre leiloeiros credenciados</p>
      </div>

      {/* Header Desktop */}
      <div className="hidden md:block mb-8">
        <div className="flex items-center gap-3">
          <Building2 className="w-8 h-8 text-blue-600" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Leiloeiros Oficiais do Brasil</h1>
            <p className="text-gray-600 mt-1">Encontre leiloeiros credenciados em todo o país</p>
          </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="bg-white md:rounded-lg md:shadow-sm md:border md:border-gray-200 p-4 md:p-6 mb-6">
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

      {/* Grid de Cards */}
      <div className="bg-white md:rounded-lg md:shadow-sm md:border md:border-gray-200 md:p-6 min-h-[400px]">
        {filteredLeiloeiros.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {filteredLeiloeiros.map((leiloeiro) => (
              <LeiloeiroCard key={leiloeiro.id} leiloeiro={leiloeiro} />
            ))}
          </div>
        ) : (
          <div className="p-4 md:p-0">
            <LeiloeiroEmptyState />
          </div>
        )}
      </div>
    </BasePageLayout>
  );
};

export default Leiloeiros;
