import React, { useState } from "react";
import { ChevronDown, Check, Search } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./collapsible";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./command";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";
import { cn } from "@/lib/utils";

const marcas = [
  "Audi", "BMW", "Chevrolet", "Fiat", "Ford", "Honda", "Hyundai", "Kia", 
  "Mercedes-Benz", "Nissan", "Peugeot", "Renault", "Toyota", "Volkswagen", "Volvo"
];

const modelos = [
  "Civic", "Corolla", "Focus", "Golf", "Onix", "Palio", "Sandero", "HB20",
  "Fit", "Ka", "Gol", "Up", "Polo", "Jetta", "Cruze", "Tracker"
];

export default function MarcaModeloFilter() {
  const [selectedMarca, setSelectedMarca] = useState("");
  const [selectedModelo, setSelectedModelo] = useState("");
  const [openMarca, setOpenMarca] = useState(false);
  const [openModelo, setOpenModelo] = useState(false);

  return (
    <Collapsible className="mb-6 pb-6 border-b border-[#04040514]">
      <CollapsibleTrigger className="flex items-center justify-between w-full">
        <span className="text-[#040405] text-sm font-medium font-montserrat">Marca e Modelo</span>
        <ChevronDown className="w-4 h-4 text-[#0404054D]" />
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-5">
        <div className="space-y-4">
          {/* Marca */}
          <div>
            <label className="text-[#040405] text-sm font-medium font-montserrat mb-2 block">
              Marca
            </label>
            <Popover open={openMarca} onOpenChange={setOpenMarca}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={openMarca}
                  className="w-full justify-between h-10 bg-[#0404050D] border-none font-montserrat text-sm text-[#04040599] hover:bg-[#04040514]"
                >
                  {selectedMarca || "Selecione uma marca..."}
                  <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0" align="start">
                <Command>
                  <CommandInput 
                    placeholder="Buscar marca..." 
                    className="h-9"
                  />
                  <CommandList>
                    <CommandEmpty>Nenhuma marca encontrada.</CommandEmpty>
                    <CommandGroup>
                      {marcas.map((marca) => (
                        <CommandItem
                          key={marca}
                          value={marca}
                          onSelect={(currentValue) => {
                            setSelectedMarca(currentValue === selectedMarca ? "" : currentValue);
                            setOpenMarca(false);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              selectedMarca === marca ? "opacity-100" : "opacity-0"
                            )}
                          />
                          {marca}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          {/* Modelo */}
          <div>
            <label className="text-[#040405] text-sm font-medium font-montserrat mb-2 block">
              Modelo
            </label>
            <Popover open={openModelo} onOpenChange={setOpenModelo}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={openModelo}
                  className="w-full justify-between h-10 bg-[#0404050D] border-none font-montserrat text-sm text-[#04040599] hover:bg-[#04040514]"
                >
                  {selectedModelo || "Selecione um modelo..."}
                  <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0" align="start">
                <Command>
                  <CommandInput 
                    placeholder="Buscar modelo..." 
                    className="h-9"
                  />
                  <CommandList>
                    <CommandEmpty>Nenhum modelo encontrado.</CommandEmpty>
                    <CommandGroup>
                      {modelos.map((modelo) => (
                        <CommandItem
                          key={modelo}
                          value={modelo}
                          onSelect={(currentValue) => {
                            setSelectedModelo(currentValue === selectedModelo ? "" : currentValue);
                            setOpenModelo(false);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              selectedModelo === modelo ? "opacity-100" : "opacity-0"
                            )}
                          />
                          {modelo}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
