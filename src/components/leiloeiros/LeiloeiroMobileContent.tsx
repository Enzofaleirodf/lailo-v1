
import React from "react";
import { Building2 } from "lucide-react";
import { LeiloeiroFilters } from "./LeiloeiroFilters";
import { LeiloeiroStateAccordion } from "./LeiloeiroStateAccordion";
import { LeiloeiroEmptyState } from "./LeiloeiroEmptyState";
import { Leiloeiro, JuntaComercial } from "../../types/leiloeiro";

interface LeiloeiroMobileContentProps {
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

export const LeiloeiroMobileContent = ({
  searchTerm,
  setSearchTerm,
  selectedState,
  setSelectedState,
  activeAuctionsFilter,
  setActiveAuctionsFilter,
  estados,
  filteredAndGroupedLeiloeiros,
  getJuntaComercial
}: LeiloeiroMobileContentProps) => {
  return (
    <>
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Building2 className="w-6 h-6 text-blue-600" />
        <h1 className="text-xl font-bold text-gray-900">Leiloeiros Oficiais</h1>
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

      {/* Accordion Mobile */}
      {Object.keys(filteredAndGroupedLeiloeiros).length > 0 ? (
        <LeiloeiroStateAccordion
          filteredAndGroupedLeiloeiros={filteredAndGroupedLeiloeiros}
          getJuntaComercial={getJuntaComercial}
          isMobile={true}
        />
      ) : (
        <LeiloeiroEmptyState />
      )}
    </>
  );
};
