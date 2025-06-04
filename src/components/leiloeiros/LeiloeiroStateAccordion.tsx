
import React from "react";
import { ExternalLink } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { LeiloeiroTableRow } from "./LeiloeiroTableRow";
import { LeiloeiroCard } from "./LeiloeiroCard";
import { Leiloeiro, JuntaComercial } from "../../types/leiloeiro";

interface LeiloeiroStateAccordionProps {
  filteredAndGroupedLeiloeiros: Record<string, Leiloeiro[]>;
  getJuntaComercial: (state: string) => JuntaComercial | undefined;
  isMobile?: boolean;
}

export const LeiloeiroStateAccordion = ({
  filteredAndGroupedLeiloeiros,
  getJuntaComercial,
  isMobile = false
}: LeiloeiroStateAccordionProps) => {
  return (
    <Accordion type="multiple" className="space-y-4">
      {Object.keys(filteredAndGroupedLeiloeiros)
        .sort()
        .map(state => {
          const junta = getJuntaComercial(state);
          const leiloeiroCount = filteredAndGroupedLeiloeiros[state].length;
          
          if (isMobile) {
            return (
              <AccordionItem key={state} value={state} className="border border-gray-200 rounded-xl overflow-hidden">
                <AccordionTrigger className="flex items-center justify-between p-4 bg-gray-50">
                  <div className="flex items-center gap-2 flex-1">
                    <h2 className="text-lg font-semibold text-gray-900">{state}</h2>
                    <span className="text-sm text-gray-500">({leiloeiroCount})</span>
                    {junta && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(junta.website, '_blank');
                        }}
                        className="gap-1 text-xs h-8 ml-2"
                      >
                        {junta.sigla}
                        <ExternalLink className="w-3 h-3" />
                      </Button>
                    )}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-0">
                  <div className="space-y-4 p-4">
                    {filteredAndGroupedLeiloeiros[state].map((leiloeiro) => (
                      <LeiloeiroCard key={leiloeiro.id} leiloeiro={leiloeiro} />
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          }

          return (
            <AccordionItem key={state} value={state} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <AccordionTrigger className="bg-gray-50 px-6 py-4 border-b border-gray-200 hover:no-underline">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl font-semibold text-gray-900">{state}</h2>
                    <span className="text-sm text-gray-500">({leiloeiroCount} {leiloeiroCount === 1 ? 'leiloeiro' : 'leiloeiros'})</span>
                    {junta && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(junta.website, '_blank');
                        }}
                        className="gap-2 text-xs h-8"
                      >
                        {junta.sigla}
                        <ExternalLink className="w-3 h-3" />
                      </Button>
                    )}
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full table-fixed">
                    <colgroup>
                      <col className="w-80" />
                      <col className="w-48" />
                      <col className="w-48" />
                      <col className="w-48" />
                      <col className="w-24" />
                    </colgroup>
                    <thead className="bg-gray-50">
                      <tr className="h-12">
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Leiloeiro
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Telefone
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Website
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Leilões Ativos
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Acesso
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredAndGroupedLeiloeiros[state].map((leiloeiro) => (
                        <LeiloeiroTableRow key={leiloeiro.id} leiloeiro={leiloeiro} />
                      ))}
                    </tbody>
                  </table>
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
    </Accordion>
  );
};
