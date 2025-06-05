
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
}

export const LeiloeiroFilters = ({
  searchTerm,
  setSearchTerm,
  selectedState,
  setSelectedState,
  activeAuctionsFilter,
  setActiveAuctionsFilter,
  estados
}: LeiloeiroFiltersProps) => {
  return (
    <>
      {/* Mobile Layout */}
      <div className="block md:hidden space-y-4">
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
              Status dos Leilões
            </Label>
            <Select value={activeAuctionsFilter} onValueChange={setActiveAuctionsFilter}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Status" />
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

      {/* Desktop Layout */}
      <div className="hidden md:flex gap-4 items-end">
        <div className="flex-1">
          <InputWithIcon
            icon={Search}
            placeholder="Pesquisar por nome do leiloeiro ou website..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            containerClassName="h-12"
          />
        </div>
        <div className="flex flex-col">
          <Label className="text-sm font-medium text-gray-700 mb-2">
            Estado
          </Label>
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
        </div>
        <div className="flex flex-col">
          <Label className="text-sm font-medium text-gray-700 mb-2">
            Status dos Leilões
          </Label>
          <Select value={activeAuctionsFilter} onValueChange={setActiveAuctionsFilter}>
            <SelectTrigger className="w-[180px] h-12">
              <SelectValue placeholder="Status dos leilões" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos</SelectItem>
              <SelectItem value="com-leiloes">Com leilões</SelectItem>
              <SelectItem value="sem-leiloes">Sem leilões</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  );
};
