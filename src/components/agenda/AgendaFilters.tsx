
import React from "react";
import { SearchableCombobox } from "@/components/filters/SearchableCombobox";
import { SimpleSelect } from "@/components/filters/SimpleSelect";
import { ItemTypeToggle } from "../search/ItemTypeToggle";
import { ItemType } from "../../types/search";

interface AgendaFiltersProps {
  selectedState: string;
  onStateChange: (value: string) => void;
  selectedCity: string;
  onCityChange: (value: string) => void;
  selectedOrigin: string;
  onOriginChange: (value: string) => void;
  selectedType: ItemType;
  onTypeChange: (type: ItemType) => void;
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
        <ItemTypeToggle 
          currentType={selectedType}
          onTypeChange={onTypeChange}
        />
      </div>

      {/* Desktop: Todos os filtros na mesma linha com larguras iguais */}
      <div className="hidden md:flex items-end gap-4">
        <div className="w-1/4 flex flex-col">
          <ItemTypeToggle 
            currentType={selectedType}
            onTypeChange={onTypeChange}
          />
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
          <SimpleSelect
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
            <SimpleSelect
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
