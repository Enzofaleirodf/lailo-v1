
import React, { useState } from "react";
import { Building2 } from "lucide-react";
import { SearchPageLayout } from "../components/search/SearchPageLayout";
import { LeiloeiroFilters } from "../components/leiloeiros/LeiloeiroFilters";
import { LeiloeiroResults } from "../components/leiloeiros/LeiloeiroResults";
import { leiloeiroSearchConfig } from "../config/leiloeiroConfig";
import { juntasComerciais } from "../data/leiloeiroData";
import { useLeiloeiroFilters } from "../hooks/useLeiloeiroFilters";

const Leiloeiros = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const {
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
  } = useLeiloeiroFilters();

  const totalPages = Math.ceil(totalLeiloeiros / 20); // 20 por página

  // Criar um conteúdo customizado para substituir o SearchMainContent
  const CustomContent = () => (
    <div className="space-y-6">
      {/* Header com ícone apenas no desktop */}
      <div className="hidden md:flex items-center gap-3 mb-8">
        <Building2 className="w-8 h-8 text-blue-600" />
        <h1 className="text-3xl font-bold text-gray-900">Leiloeiros Oficiais do Brasil</h1>
      </div>

      {/* Filtros */}
      <LeiloeiroFilters
        searchTerm={searchTerm}
        selectedState={selectedState}
        activeAuctionsFilter={activeAuctionsFilter}
        estados={estados}
        onSearchChange={setSearchTerm}
        onStateChange={setSelectedState}
        onActiveAuctionsChange={setActiveAuctionsFilter}
      />

      {/* Resultados */}
      <LeiloeiroResults
        filteredAndGroupedLeiloeiros={filteredAndGroupedLeiloeiros}
        juntasComerciais={juntasComerciais}
      />
    </div>
  );

  return (
    <div className="w-full relative min-h-screen bg-white">
      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="max-w-[1440px] mx-auto w-full relative min-h-screen bg-white">
          <SearchPageLayout
            config={leiloeiroSearchConfig}
            items={[]} // Não usamos items padrão
            isLoading={false}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            onClearFilters={handleClearFilters}
            resultsCount={totalLeiloeiros}
            sitesCount={0}
            isVertical={true}
            onToggleLayout={() => {}}
            sortBy={leiloeiroSearchConfig.sortOptions[0]}
            onSortChange={() => {}}
            sortOptions={leiloeiroSearchConfig.sortOptions}
          />
          
          {/* Overlay customizado para substituir o conteúdo padrão */}
          <div className="absolute left-12 top-14 right-0 bottom-0 bg-white z-10">
            <div className="h-full px-6 py-6">
              <CustomContent />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden">
        <SearchPageLayout
          config={leiloeiroSearchConfig}
          items={[]} // Não usamos items padrão
          isLoading={false}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          onClearFilters={handleClearFilters}
          resultsCount={totalLeiloeiros}
          sitesCount={0}
          isVertical={true}
          onToggleLayout={() => {}}
          sortBy={leiloeiroSearchConfig.sortOptions[0]}
          onSortChange={() => {}}
          sortOptions={leiloeiroSearchConfig.sortOptions}
        />
        
        {/* Overlay customizado para mobile */}
        <div className="absolute top-14 left-0 right-0 bottom-20 bg-white z-10">
          <div className="h-full px-4 py-6">
            <CustomContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leiloeiros;
