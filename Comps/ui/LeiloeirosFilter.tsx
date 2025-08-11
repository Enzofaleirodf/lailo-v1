import React, { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./collapsible";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./command";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface LeiloeirosFilterProps {
  type?: "property" | "vehicle";
}

const propertyLeiloeiros = [
  { name: "Todos leiloeiros", count: 892 },
  { name: "Alfa Leilões", count: 234 },
  { name: "Beta Leilões", count: 156 },
  { name: "Gamma Leilões", count: 89 },
  { name: "Delta Leilões", count: 123 },
  { name: "Omega Leilões", count: 67 },
  { name: "Hoppe Leilões", count: 45 }
];

const vehicleLeiloeiros = [
  { name: "Todos leiloeiros", count: 892 },
  { name: "Auto Leilões", count: 234 },
  { name: "Veíc Leilões", count: 156 },
  { name: "Motor Leilões", count: 89 },
  { name: "Roda Leilões", count: 123 },
  { name: "Speed Leilões", count: 67 }
];

export default function LeiloeirosFilter({ type = "property" }: LeiloeirosFilterProps) {
  const [selectedLeiloeiro, setSelectedLeiloeiro] = useState("");
  const [open, setOpen] = useState(false);

  const leiloeiros = type === "vehicle" ? vehicleLeiloeiros : propertyLeiloeiros;

  return (
    <Collapsible className="mb-6 pb-6 border-b border-[#0404051A]">
      <CollapsibleTrigger className="flex items-center justify-between w-full">
        <span className="text-[#040405] text-sm font-medium font-montserrat">Leiloeiros</span>
        <ChevronDown className="w-4 h-4 text-[#0404054D]" />
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-5">
        <div>
          <label className="text-[#040405] text-sm font-medium font-montserrat mb-2 block">
            Selecionar Leiloeiro
          </label>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-full justify-between h-10 bg-[#0404050D] border-none font-montserrat text-sm text-[#04040599] hover:bg-[#04040514]"
              >
                {selectedLeiloeiro || "Selecione um leiloeiro..."}
                <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0" align="start">
              <Command>
                <CommandInput 
                  placeholder="Buscar leiloeiro..." 
                  className="h-9"
                />
                <CommandList>
                  <CommandEmpty>Nenhum leiloeiro encontrado.</CommandEmpty>
                  <CommandGroup>
                    {leiloeiros.map((leiloeiro) => (
                      <CommandItem
                        key={leiloeiro.name}
                        value={leiloeiro.name}
                        onSelect={(currentValue) => {
                          setSelectedLeiloeiro(currentValue === selectedLeiloeiro ? "" : currentValue);
                          setOpen(false);
                        }}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center">
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              selectedLeiloeiro === leiloeiro.name ? "opacity-100" : "opacity-0"
                            )}
                          />
                          {leiloeiro.name}
                        </div>
                        <span className="text-[#0404054D] text-xs font-montserrat font-medium">
                          {leiloeiro.count}
                        </span>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
