
import React from "react";
import { SearchableCombobox } from "@/components/filters/SearchableCombobox";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface AgendaFiltersProps {
  selectedState: string;
  onStateChange: (value: string) => void;
  selectedCity: string;
  onCityChange: (value: string) => void;
  selectedOrigin: string;
  onOriginChange: (value: string) => void;
  selectedType: string;
  onTypeChange: (value: string) => void;
}

const states = [
  { value: "todos", label: "Todos os estados" },
  { value: "sp", label: "São Paulo" },
  { value: "rj", label: "Rio de Janeiro" },
  { value: "mg", label: "Minas Gerais" },
  { value: "rs", label: "Rio Grande do Sul" },
  { value: "pr", label: "Paraná" },
  { value: "sc", label: "Santa Catarina" },
  { value: "ba", label: "Bahia" },
  { value: "go", label: "Goiás" },
  { value: "pe", label: "Pernambuco" },
  { value: "ce", label: "Ceará" }
];

const cities = [
  { value: "todas", label: "Todas as cidades" },
  { value: "sao-paulo", label: "São Paulo" },
  { value: "rio-de-janeiro", label: "Rio de Janeiro" },
  { value: "belo-horizonte", label: "Belo Horizonte" },
  { value: "porto-alegre", label: "Porto Alegre" },
  { value: "curitiba", label: "Curitiba" },
  { value: "florianopolis", label: "Florianópolis" },
  { value: "salvador", label: "Salvador" },
  { value: "goiania", label: "Goiânia" },
  { value: "recife", label: "Recife" },
  { value: "fortaleza", label: "Fortaleza" }
];

const origins = [
  { value: "todas", label: "Todas as origens" },
  { value: "judicial", label: "Judicial" },
  { value: "extrajudicial", label: "Extrajudicial" },
  { value: "particular", label: "Particular" },
  { value: "publico", label: "Público" }
];

export const AgendaFilters = ({
  selectedState,
  onStateChange,
  selectedCity,
  onCityChange,
  selectedOrigin,
  onOriginChange,
  selectedType,
  onTypeChange
}: AgendaFiltersProps) => {
  return (
    <div className="space-y-4">
      {/* Mobile: Tipo no topo */}
      <div className="md:hidden">
        <Tabs value={selectedType} onValueChange={onTypeChange}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="imoveis">Imóveis</TabsTrigger>
            <TabsTrigger value="veiculos">Veículos</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Desktop: Todos os filtros na mesma linha com larguras iguais */}
      <div className="hidden md:flex items-end gap-4">
        <div className="space-y-2 w-1/4">
          <Tabs value={selectedType} onValueChange={onTypeChange}>
            <TabsList className="grid grid-cols-2 w-full">
              <TabsTrigger value="imoveis">Imóveis</TabsTrigger>
              <TabsTrigger value="veiculos">Veículos</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="space-y-2 w-1/4">
          <label className="text-sm font-medium text-gray-700">Estado</label>
          <SearchableCombobox
            options={states}
            selected={selectedState}
            onSelect={onStateChange}
            placeholder="Selecione um estado"
          />
        </div>

        <div className="space-y-2 w-1/4">
          <label className="text-sm font-medium text-gray-700">Cidade</label>
          <SearchableCombobox
            options={cities}
            selected={selectedCity}
            onSelect={onCityChange}
            placeholder="Selecione uma cidade"
            disabled={selectedState === "todos"}
          />
        </div>
        
        <div className="space-y-2 w-1/4">
          <label className="text-sm font-medium text-gray-700">Origem</label>
          <SearchableCombobox
            options={origins}
            selected={selectedOrigin}
            onSelect={onOriginChange}
            placeholder="Selecione uma origem"
          />
        </div>
      </div>

      {/* Mobile: Filtros empilhados */}
      <div className="md:hidden space-y-4">
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Estado</label>
            <SearchableCombobox
              options={states}
              selected={selectedState}
              onSelect={onStateChange}
              placeholder="Selecione um estado"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Cidade</label>
            <SearchableCombobox
              options={cities}
              selected={selectedCity}
              onSelect={onCityChange}
              placeholder="Selecione uma cidade"
              disabled={selectedState === "todos"}
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Origem</label>
            <SearchableCombobox
              options={origins}
              selected={selectedOrigin}
              onSelect={onOriginChange}
              placeholder="Selecione uma origem"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
