
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

interface LeiloeiroFiltersProps {
  searchTerm: string;
  selectedState: string;
  activeAuctionsFilter: string;
  estados: string[];
  onSearchChange: (value: string) => void;
  onStateChange: (value: string) => void;
  onActiveAuctionsChange: (value: string) => void;
}

export const LeiloeiroFilters = ({
  searchTerm,
  selectedState,
  activeAuctionsFilter,
  estados,
  onSearchChange,
  onStateChange,
  onActiveAuctionsChange
}: LeiloeiroFiltersProps) => {
  return (
    <>
      {/* Desktop Filters */}
      <div className="hidden md:flex gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" />
          <Input
            placeholder="Pesquisar por nome do leiloeiro ou website..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 h-12"
          />
        </div>
        <Select value={selectedState} onValueChange={onStateChange}>
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
        <Select value={activeAuctionsFilter} onValueChange={onActiveAuctionsChange}>
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

      {/* Mobile Filters */}
      <div className="block md:hidden space-y-4 mb-6">
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Pesquisar
          </Label>
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" />
            <Input
              placeholder="Pesquisar leiloeiro..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 h-12"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label className="text-sm font-medium text-gray-700 mb-2 block">
              Localização
            </Label>
            <Select value={selectedState} onValueChange={onStateChange}>
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
              Status dos leilões
            </Label>
            <Select value={activeAuctionsFilter} onValueChange={onActiveAuctionsChange}>
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
    </>
  );
};
