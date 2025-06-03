
import React, { useState, useMemo } from "react";
import { Building2, Search, ExternalLink, Phone } from "lucide-react";
import { SessionNavBar } from "../components/SessionNavBar";
import { BottomNavigation } from "../components/BottomNavigation";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface Leiloeiro {
  id: number;
  name: string;
  state: string;
  phone: string;
  website: string;
  logo?: string;
}

interface JuntaComercial {
  state: string;
  sigla: string;
  website: string;
}

const Leiloeiros = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState("todos");

  // Dados das Juntas Comerciais por estado
  const juntasComerciais: JuntaComercial[] = [
    { state: "Acre", sigla: "JUCEAC", website: "https://juceac.ac.gov.br" },
    { state: "Alagoas", sigla: "JUCEAL", website: "https://juceal.al.gov.br" },
    { state: "Amapá", sigla: "JUCAP", website: "https://jucap.ap.gov.br" },
    { state: "Amazonas", sigla: "JUCEA", website: "https://jucea.am.gov.br" },
    { state: "Bahia", sigla: "JUCEB", website: "https://juceb.ba.gov.br" },
    { state: "Ceará", sigla: "JUCE", website: "https://juce.ce.gov.br" },
    { state: "Distrito Federal", sigla: "JUCIS", website: "https://jucis.df.gov.br" },
    { state: "Espírito Santo", sigla: "JUCEES", website: "https://jucees.es.gov.br" },
    { state: "Goiás", sigla: "JUCEG", website: "https://juceg.go.gov.br" },
    { state: "Maranhão", sigla: "JUCEMA", website: "https://jucema.ma.gov.br" },
    { state: "Mato Grosso", sigla: "JUCEMAT", website: "https://jucemat.mt.gov.br" },
    { state: "Mato Grosso do Sul", sigla: "JUCEMS", website: "https://jucems.ms.gov.br" },
    { state: "Minas Gerais", sigla: "JUCEMG", website: "https://jucemg.mg.gov.br" },
    { state: "Pará", sigla: "JUCEPA", website: "https://jucepa.pa.gov.br" },
    { state: "Paraíba", sigla: "JUCEP", website: "https://jucep.pb.gov.br" },
    { state: "Paraná", sigla: "JUCEPAR", website: "https://jucepar.pr.gov.br" },
    { state: "Pernambuco", sigla: "JUCEPE", website: "https://jucepe.pe.gov.br" },
    { state: "Piauí", sigla: "JUCEPI", website: "https://jucepi.pi.gov.br" },
    { state: "Rio de Janeiro", sigla: "JUCERJA", website: "https://jucerja.rj.gov.br" },
    { state: "Rio Grande do Norte", sigla: "JUCERN", website: "https://jucern.rn.gov.br" },
    { state: "Rio Grande do Sul", sigla: "JUCERS", website: "https://jucers.rs.gov.br" },
    { state: "Rondônia", sigla: "JUCER", website: "https://jucer.ro.gov.br" },
    { state: "Roraima", sigla: "JUCERR", website: "https://jucerr.rr.gov.br" },
    { state: "Santa Catarina", sigla: "JUCESC", website: "https://jucesc.sc.gov.br" },
    { state: "São Paulo", sigla: "JUCESP", website: "https://jucesp.sp.gov.br" },
    { state: "Sergipe", sigla: "JUCESE", website: "https://jucese.se.gov.br" },
    { state: "Tocantins", sigla: "JUCETINS", website: "https://jucetins.to.gov.br" }
  ];

  // Dados dos leiloeiros (expandir conforme necessário)
  const leiloeiros: Leiloeiro[] = [
    { id: 1, name: "Leilões Brasília", state: "Distrito Federal", phone: "(61) 3333-4444", website: "https://leiloesbrasilia.com.br" },
    { id: 2, name: "SP Leilões", state: "São Paulo", phone: "(11) 9999-8888", website: "https://spleiloes.com.br" },
    { id: 3, name: "Leilões MG", state: "Minas Gerais", phone: "(31) 7777-6666", website: "https://leiloesmg.com.br" },
    { id: 4, name: "RJ Leilões", state: "Rio de Janeiro", phone: "(21) 5555-3333", website: "https://rjleiloes.com.br" },
    { id: 5, name: "Bahia Leilões", state: "Bahia", phone: "(71) 4444-2222", website: "https://bahialeiloes.com.br" },
    { id: 6, name: "Paraná Auctions", state: "Paraná", phone: "(41) 8888-1111", website: "https://paranauctions.com.br" },
    { id: 7, name: "RS Leilões", state: "Rio Grande do Sul", phone: "(51) 6666-9999", website: "https://rsleiloes.com.br" },
    { id: 8, name: "Ceará Leilões", state: "Ceará", phone: "(85) 2222-7777", website: "https://cearaleiloes.com.br" },
    { id: 9, name: "SC Auctions", state: "Santa Catarina", phone: "(48) 1111-5555", website: "https://scauctions.com.br" },
    { id: 10, name: "Goiás Leilões", state: "Goiás", phone: "(62) 3333-8888", website: "https://goiasleiloes.com.br" }
  ];

  // Estados únicos dos leiloeiros
  const estados = useMemo(() => {
    const uniqueStates = [...new Set(leiloeiros.map(l => l.state))].sort();
    return uniqueStates;
  }, []);

  // Filtrar e agrupar leiloeiros
  const filteredAndGroupedLeiloeiros = useMemo(() => {
    let filtered = leiloeiros;

    // Filtrar por estado
    if (selectedState !== "todos") {
      filtered = filtered.filter(l => l.state === selectedState);
    }

    // Filtrar por busca
    if (searchTerm) {
      filtered = filtered.filter(l => 
        l.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Agrupar por estado
    const grouped = filtered.reduce((acc, leiloeiro) => {
      if (!acc[leiloeiro.state]) {
        acc[leiloeiro.state] = [];
      }
      acc[leiloeiro.state].push(leiloeiro);
      return acc;
    }, {} as Record<string, Leiloeiro[]>);

    // Ordenar leiloeiros dentro de cada estado
    Object.keys(grouped).forEach(state => {
      grouped[state].sort((a, b) => a.name.localeCompare(b.name));
    });

    return grouped;
  }, [leiloeiros, selectedState, searchTerm]);

  const getJuntaComercial = (state: string) => {
    return juntasComerciais.find(j => j.state === state);
  };

  return (
    <div className="w-full relative min-h-screen bg-white">
      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="max-w-[1440px] mx-auto w-full relative min-h-screen bg-white">
          <SessionNavBar />
          <main className="ml-12 min-h-screen flex flex-col">
            <div className="bg-white px-6 py-8">
              <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="flex items-center gap-2 mb-8">
                  <Building2 className="w-8 h-8 text-blue-600" />
                  <h1 className="text-3xl font-bold text-gray-900">Leiloeiros Oficiais do Brasil</h1>
                </div>

                {/* Filtros */}
                <div className="flex gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      placeholder="Pesquisar por nome do leiloeiro..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={selectedState} onValueChange={setSelectedState}>
                    <SelectTrigger className="w-[200px]">
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

                {/* Tabelas agrupadas por estado */}
                <div className="space-y-8">
                  {Object.keys(filteredAndGroupedLeiloeiros)
                    .sort()
                    .map(state => {
                      const junta = getJuntaComercial(state);
                      return (
                        <div key={state} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                          {/* Header do Estado */}
                          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                            <div className="flex items-center justify-between">
                              <h2 className="text-xl font-semibold text-gray-900">{state}</h2>
                              {junta && (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => window.open(junta.website, '_blank')}
                                  className="gap-2"
                                >
                                  {junta.sigla}
                                  <ExternalLink className="w-3 h-3" />
                                </Button>
                              )}
                            </div>
                          </div>

                          {/* Tabela */}
                          <div className="overflow-x-auto">
                            <table className="w-full">
                              <thead className="bg-gray-50">
                                <tr>
                                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Leiloeiro
                                  </th>
                                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Telefone
                                  </th>
                                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Website
                                  </th>
                                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Ações
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="bg-white divide-y divide-gray-200">
                                {filteredAndGroupedLeiloeiros[state].map((leiloeiro) => (
                                  <tr key={leiloeiro.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                      <div className="flex items-center">
                                        <div className="flex-shrink-0 h-10 w-10">
                                          <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                                            <Building2 className="w-5 h-5 text-blue-600" />
                                          </div>
                                        </div>
                                        <div className="ml-4">
                                          <div className="text-sm font-medium text-gray-900">
                                            {leiloeiro.name}
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                      <div className="flex items-center text-sm text-gray-500">
                                        <Phone className="w-4 h-4 mr-2" />
                                        {leiloeiro.phone}
                                      </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                      <div className="text-sm text-blue-600 hover:text-blue-800">
                                        <a 
                                          href={leiloeiro.website} 
                                          target="_blank" 
                                          rel="noopener noreferrer"
                                          className="hover:underline"
                                        >
                                          {leiloeiro.website.replace('https://', '')}
                                        </a>
                                      </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right">
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => window.open(leiloeiro.website, '_blank')}
                                        className="h-8 w-8 p-0"
                                      >
                                        <ExternalLink className="w-4 h-4" />
                                      </Button>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      );
                    })}
                </div>

                {Object.keys(filteredAndGroupedLeiloeiros).length === 0 && (
                  <div className="text-center py-12">
                    <Building2 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum leiloeiro encontrado</h3>
                    <p className="text-gray-500">Tente ajustar os filtros ou termo de busca.</p>
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden">
        <div className="w-full min-h-screen bg-white">
          <main className="w-full min-h-screen flex flex-col px-4 py-8 pb-20">
            {/* Header */}
            <div className="flex items-center gap-2 mb-6">
              <Building2 className="w-6 h-6 text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">Leiloeiros Oficiais</h1>
            </div>

            {/* Filtros Mobile */}
            <div className="space-y-4 mb-6">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Pesquisar leiloeiro..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedState} onValueChange={setSelectedState}>
                <SelectTrigger>
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

            {/* Cards Mobile */}
            <div className="space-y-6">
              {Object.keys(filteredAndGroupedLeiloeiros)
                .sort()
                .map(state => {
                  const junta = getJuntaComercial(state);
                  return (
                    <div key={state} className="space-y-4">
                      {/* Header do Estado Mobile */}
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <h2 className="text-lg font-semibold text-gray-900">{state}</h2>
                        {junta && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => window.open(junta.website, '_blank')}
                            className="gap-1 text-xs"
                          >
                            {junta.sigla}
                            <ExternalLink className="w-3 h-3" />
                          </Button>
                        )}
                      </div>

                      {/* Cards dos Leiloeiros */}
                      <div className="space-y-3">
                        {filteredAndGroupedLeiloeiros[state].map((leiloeiro) => (
                          <div key={leiloeiro.id} className="bg-white rounded-lg border border-gray-200 p-4">
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex items-center gap-3">
                                <div className="h-8 w-8 rounded-lg bg-blue-100 flex items-center justify-center">
                                  <Building2 className="w-4 h-4 text-blue-600" />
                                </div>
                                <h3 className="font-semibold text-gray-900 text-sm">{leiloeiro.name}</h3>
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => window.open(leiloeiro.website, '_blank')}
                                className="h-8 w-8 p-0"
                              >
                                <ExternalLink className="w-4 h-4" />
                              </Button>
                            </div>
                            
                            <div className="space-y-2">
                              <div className="flex items-center gap-2 text-sm text-gray-500">
                                <Phone className="w-4 h-4" />
                                {leiloeiro.phone}
                              </div>
                              <div className="text-sm text-blue-600">
                                <a 
                                  href={leiloeiro.website} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="hover:underline"
                                >
                                  {leiloeiro.website.replace('https://', '')}
                                </a>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
            </div>

            {Object.keys(filteredAndGroupedLeiloeiros).length === 0 && (
              <div className="text-center py-12">
                <Building2 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum leiloeiro encontrado</h3>
                <p className="text-gray-500 text-sm">Tente ajustar os filtros ou termo de busca.</p>
              </div>
            )}
          </main>
          
          <div className="fixed bottom-0 left-0 right-0 z-50">
            <BottomNavigation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leiloeiros;
