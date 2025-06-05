import React from "react";
import { Search } from "lucide-react";
import { InputWithIcon } from "@/components/ui/input-with-icon";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface LeiloeiroFiltersProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  selectedState: string;
  setSelectedState: (value: string) => void;
  activeAuctionsFilter: string;
  setActiveAuctionsFilter: (value: string) => void;
  estados: string[];
  isMobile?: boolean;
}

export const LeiloeiroFilters = ({
  searchTerm,
  setSearchTerm,
  selectedState,
  setSelectedState,
  activeAuctionsFilter,
  setActiveAuctionsFilter,
  estados,
  isMobile = false
}: LeiloeiroFiltersProps) => {
  if (isMobile) {
    return (
      <div className="space-y-4 mb-6">
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Buscar Leiloeiro
          </Label>
          <InputWithIcon
            icon={Search}
            placeholder="Pesquisar leiloeiro..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            containerClassName="h-12"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label className="text-sm font-medium text-gray-700 mb-2 block">
              Estado
            </Label>
            <Select value={selectedState} onValueChange={setSelectedState}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos</SelectItem>
                {estados.map(state => (
                  <SelectItem key={state} value={state}>{state}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label className="text-sm font-medium text-gray-700 mb-2 block">
              Leilões Ativos
            </Label>
            <Select value={activeAuctionsFilter} onValueChange={setActiveAuctionsFilter}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Leilões" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos</SelectItem>
                <SelectItem value="com-leiloes">Com leilões</SelectItem>
                <SelectItem value="sem-leiloes">Sem leilões</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-4 mb-8">
      <div className="flex-1">
        <InputWithIcon
          icon={Search}
          placeholder="Pesquisar por nome do leiloeiro ou website..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          containerClassName="h-12"
        />
      </div>
      <Select value={selectedState} onValueChange={setSelectedState}>
        <SelectTrigger className="w-[200px] h-12">
          <SelectValue placeholder="Filtrar por estado" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="todos">Todos os estados</SelectItem>
          {estados.map(state => (
            <SelectItem key={state} value={state}>{state}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select value={activeAuctionsFilter} onValueChange={setActiveAuctionsFilter}>
        <SelectTrigger className="w-[180px] h-12">
          <SelectValue placeholder="Leilões ativos" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="todos">Todos</SelectItem>
          <SelectItem value="com-leiloes">Com leilões</SelectItem>
          <SelectItem value="sem-leiloes">Sem leilões</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
