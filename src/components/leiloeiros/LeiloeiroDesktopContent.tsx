
import React from "react";
import { Building2 } from "lucide-react";
import { LeiloeiroFilters } from "./LeiloeiroFilters";
import { LeiloeiroStateAccordion } from "./LeiloeiroStateAccordion";
import { LeiloeiroEmptyState } from "./LeiloeiroEmptyState";
import { Leiloeiro, JuntaComercial } from "../../types/leiloeiro";

interface LeiloeiroDesktopContentProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  selectedState: string;
  setSelectedState: (value: string) => void;
  activeAuctionsFilter: string;
  setActiveAuctionsFilter: (value: string) => void;
  estados: string[];
  filteredAndGroupedLeiloeiros: Record<string, Leiloeiro[]>;
  getJuntaComercial: (state: string) => JuntaComercial | undefined;
}

export const LeiloeiroDesktopContent = ({
  searchTerm,
  setSearchTerm,
  selectedState,
  setSelectedState,
  activeAuctionsFilter,
  setActiveAuctionsFilter,
  estados,
  filteredAndGroupedLeiloeiros,
  getJuntaComercial
}: LeiloeiroDesktopContentProps) => {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <Building2 className="w-8 h-8 text-blue-600" />
        <h1 className="text-3xl font-bold text-gray-900">Leiloeiros Oficiais do Brasil</h1>
      </div>

      {/* Filtros */}
      <LeiloeiroFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedState={selectedState}
        setSelectedState={setSelectedState}
        activeAuctionsFilter={activeAuctionsFilter}
        setActiveAuctionsFilter={setActiveAuctionsFilter}
        estados={estados}
      />

      {/* Accordion com tabelas agrupadas por estado */}
      {Object.keys(filteredAndGroupedLeiloeiros).length > 0 ? (
        <LeiloeiroStateAccordion
          filteredAndGroupedLeiloeiros={filteredAndGroupedLeiloeiros}
          getJuntaComercial={getJuntaComercial}
        />
      ) : (
        <LeiloeiroEmptyState />
      )}
    </div>
  );
};
