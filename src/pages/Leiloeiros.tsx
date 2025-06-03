
import React, { useState, useMemo } from "react";
import { Building2, Search, ExternalLink, Phone, Globe, AlertCircle, ChevronDown } from "lucide-react";
import { SessionNavBar } from "../components/SessionNavBar";
import { BottomNavigation } from "../components/BottomNavigation";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface Leiloeiro {
  id: number;
  name: string;
  websiteName: string;
  state: string;
  phone: string;
  website?: string;
  logo?: string;
  activeAuctions: number;
}

interface JuntaComercial {
  state: string;
  sigla: string;
  website: string;
}

const Leiloeiros = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState("todos");
  const [activeAuctionsFilter, setActiveAuctionsFilter] = useState("todos");

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

  // Dados expandidos dos leiloeiros com mais leiloeiros por estado
  const leiloeiros: Leiloeiro[] = [
    // São Paulo - múltiplos leiloeiros
    { id: 1, name: "Maria Santos", websiteName: "SP Leilões", state: "São Paulo", phone: "(11) 9999-8888", website: "https://spleiloes.com.br", activeAuctions: 42 },
    { id: 2, name: "João Oliveira", websiteName: "Capital Leilões", state: "São Paulo", phone: "(11) 8888-7777", website: "https://capitalleiloes.com.br", activeAuctions: 23 },
    { id: 3, name: "Carlos Mendes", websiteName: "SP Auctions", state: "São Paulo", phone: "(11) 7777-6666", activeAuctions: 0 },
    { id: 4, name: "Ana Ferreira", websiteName: "Paulista Leilões", state: "São Paulo", phone: "(11) 6666-5555", website: "https://paulistaleiloes.com.br", activeAuctions: 15 },
    
    // Minas Gerais - múltiplos leiloeiros
    { id: 5, name: "Carlos Oliveira", websiteName: "Leilões MG", state: "Minas Gerais", phone: "(31) 7777-6666", website: "https://leiloesmg.com.br", activeAuctions: 8 },
    { id: 6, name: "Fernanda Lima", websiteName: "BH Leilões", state: "Minas Gerais", phone: "(31) 5555-4444", website: "https://bhleiloes.com.br", activeAuctions: 12 },
    { id: 7, name: "Roberto Silva", websiteName: "Mineiro Auctions", state: "Minas Gerais", phone: "(31) 4444-3333", activeAuctions: 0 },
    
    // Rio de Janeiro - múltiplos leiloeiros
    { id: 8, name: "Ana Costa", websiteName: "RJ Leilões", state: "Rio de Janeiro", phone: "(21) 5555-3333", website: "https://rjleiloes.com.br", activeAuctions: 23 },
    { id: 9, name: "Pedro Santos", websiteName: "Carioca Leilões", state: "Rio de Janeiro", phone: "(21) 4444-2222", website: "https://cariocaleiloes.com.br", activeAuctions: 18 },
    { id: 10, name: "Lucia Martins", websiteName: "Rio Auctions", state: "Rio de Janeiro", phone: "(21) 3333-1111", activeAuctions: 0 },
    
    // Distrito Federal
    { id: 11, name: "João Silva", websiteName: "Leilões Brasília", state: "Distrito Federal", phone: "(61) 3333-4444", website: "https://leiloesbrasilia.com.br", activeAuctions: 15 },
    { id: 12, name: "Mariana Costa", websiteName: "Capital Federal Leilões", state: "Distrito Federal", phone: "(61) 2222-3333", website: "https://capitalfederalleiloes.com.br", activeAuctions: 9 },
    
    // Bahia
    { id: 13, name: "Pedro Almeida", websiteName: "Bahia Leilões", state: "Bahia", phone: "(71) 4444-2222", website: "https://bahialeiloes.com.br", activeAuctions: 0 },
    { id: 14, name: "Camila Souza", websiteName: "Salvador Auctions", state: "Bahia", phone: "(71) 5555-6666", website: "https://salvadorauctions.com.br", activeAuctions: 7 },
    
    // Paraná
    { id: 15, name: "Luciana Rocha", websiteName: "Paraná Auctions", state: "Paraná", phone: "(41) 8888-1111", website: "https://paranauctions.com.br", activeAuctions: 19 },
    { id: 16, name: "Eduardo Campos", websiteName: "Curitiba Leilões", state: "Paraná", phone: "(41) 7777-9999", website: "https://curitibailoes.com.br", activeAuctions: 11 },
    
    // Rio Grande do Sul
    { id: 17, name: "Roberto Lima", websiteName: "RS Leilões", state: "Rio Grande do Sul", phone: "(51) 6666-9999", website: "https://rsleiloes.com.br", activeAuctions: 31 },
    { id: 18, name: "Julia Pereira", websiteName: "Gaúcho Leilões", state: "Rio Grande do Sul", phone: "(51) 5555-8888", website: "https://gaucholeiloes.com.br", activeAuctions: 14 },
    
    // Ceará
    { id: 19, name: "Fernanda Dias", websiteName: "Ceará Leilões", state: "Ceará", phone: "(85) 2222-7777", website: "https://cearaleiloes.com.br", activeAuctions: 12 },
    { id: 20, name: "Marcos Oliveira", websiteName: "Fortaleza Auctions", state: "Ceará", phone: "(85) 1111-5555", activeAuctions: 0 },
    
    // Santa Catarina
    { id: 21, name: "Marcos Pereira", websiteName: "SC Auctions", state: "Santa Catarina", phone: "(48) 1111-5555", website: "https://scauctions.com.br", activeAuctions: 5 },
    { id: 22, name: "Isabela Santos", websiteName: "Catarinense Leilões", state: "Santa Catarina", phone: "(48) 2222-6666", website: "https://catarinenseleiloes.com.br", activeAuctions: 8 },
    
    // Goiás
    { id: 23, name: "Patricia Gonçalves", websiteName: "Goiás Leilões", state: "Goiás", phone: "(62) 3333-8888", website: "https://goiasleiloes.com.br", activeAuctions: 0 },
    { id: 24, name: "Diego Almeida", websiteName: "Goiânia Auctions", state: "Goiás", phone: "(62) 4444-7777", website: "https://goianiaauctions.com.br", activeAuctions: 6 },
    
    // Restante dos estados com um leiloeiro cada
    { id: 25, name: "Antonio Ferreira", websiteName: "Acre Leilões", state: "Acre", phone: "(68) 4444-5555", activeAuctions: 0 },
    { id: 26, name: "Helena Martins", websiteName: "Alagoas Auctions", state: "Alagoas", phone: "(82) 5555-6666", website: "https://alagoasauctions.com.br", activeAuctions: 0 },
    { id: 27, name: "Rafael Souza", websiteName: "Amapá Leilões", state: "Amapá", phone: "(96) 6666-7777", activeAuctions: 0 },
    { id: 28, name: "Juliana Barbosa", websiteName: "Amazonas Leilões", state: "Amazonas", phone: "(97) 7777-8888", website: "https://amazanasleiloes.com.br", activeAuctions: 9 },
    { id: 29, name: "Eduardo Campos", websiteName: "ES Leilões", state: "Espírito Santo", phone: "(27) 8888-9999", website: "https://esleiloes.com.br", activeAuctions: 6 },
    { id: 30, name: "Carla Mendes", websiteName: "Maranhão Auctions", state: "Maranhão", phone: "(98) 9999-1111", activeAuctions: 0 },
    { id: 31, name: "Bruno Silva", websiteName: "MT Leilões", state: "Mato Grosso", phone: "(65) 1111-2222", website: "https://mtleiloes.com.br", activeAuctions: 11 },
    { id: 32, name: "Camila Torres", websiteName: "MS Leilões", state: "Mato Grosso do Sul", phone: "(67) 2222-3333", website: "https://msleiloes.com.br", activeAuctions: 0 },
    { id: 33, name: "Diego Santos", websiteName: "Pará Leilões", state: "Pará", phone: "(91) 3333-4444", activeAuctions: 0 },
    { id: 34, name: "Isabela Costa", websiteName: "PB Leilões", state: "Paraíba", phone: "(83) 4444-5555", website: "https://pbleiloes.com.br", activeAuctions: 3 },
    { id: 35, name: "Gustavo Reis", websiteName: "PE Leilões", state: "Pernambuco", phone: "(81) 5555-6666", website: "https://peleiloes.com.br", activeAuctions: 16 },
    { id: 36, name: "Natália Moura", websiteName: "Piauí Auctions", state: "Piauí", phone: "(86) 6666-7777", activeAuctions: 0 },
    { id: 37, name: "Leonardo Alves", websiteName: "RN Leilões", state: "Rio Grande do Norte", phone: "(84) 7777-8888", website: "https://rnleiloes.com.br", activeAuctions: 5 },
    { id: 38, name: "Vanessa Lima", websiteName: "RO Leilões", state: "Rondônia", phone: "(69) 8888-9999", activeAuctions: 0 },
    { id: 39, name: "Thiago Nunes", websiteName: "RR Leilões", state: "Roraima", phone: "(95) 9999-1111", website: "https://rrleiloes.com.br", activeAuctions: 0 },
    { id: 40, name: "Larissa Freitas", websiteName: "SE Leilões", state: "Sergipe", phone: "(79) 1111-2222", website: "https://seleiloes.com.br", activeAuctions: 4 },
    { id: 41, name: "Felipe Cardoso", websiteName: "TO Leilões", state: "Tocantins", phone: "(63) 2222-3333", activeAuctions: 0 }
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
        l.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        l.websiteName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtrar por leilões ativos
    if (activeAuctionsFilter === "com-leiloes") {
      filtered = filtered.filter(l => l.activeAuctions > 0);
    } else if (activeAuctionsFilter === "sem-leiloes") {
      filtered = filtered.filter(l => l.activeAuctions === 0);
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
  }, [leiloeiros, selectedState, searchTerm, activeAuctionsFilter]);

  const getJuntaComercial = (state: string) => {
    return juntasComerciais.find(j => j.state === state);
  };

  const getAuctionsBadgeColor = (activeAuctions: number, hasWebsite: boolean) => {
    if (!hasWebsite) return "bg-gray-100 text-gray-700 border-gray-200";
    if (activeAuctions === 0) return "bg-red-100 text-red-700 border-red-200";
    return "bg-green-100 text-green-700 border-green-200";
  };

  const getWebsiteDisplay = (leiloeiro: Leiloeiro) => {
    if (!leiloeiro.website) {
      return (
        <div className="flex items-center gap-2 text-gray-400">
          <AlertCircle className="w-4 h-4" />
          <span className="text-sm">Sem website</span>
        </div>
      );
    }
    return (
      <div className="text-sm text-blue-600 hover:text-blue-800">
        <a 
          href={leiloeiro.website} 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:underline flex items-center gap-1"
        >
          <Globe className="w-4 h-4" />
          {leiloeiro.website.replace('https://', '')}
        </a>
      </div>
    );
  };

  const getAuctionsDisplay = (leiloeiro: Leiloeiro) => {
    if (!leiloeiro.website) {
      return (
        <Badge className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border bg-gray-100 text-gray-700 border-gray-200">
          Sem site
        </Badge>
      );
    }
    
    return (
      <Badge 
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getAuctionsBadgeColor(leiloeiro.activeAuctions, !!leiloeiro.website)}`}
      >
        {leiloeiro.activeAuctions} {leiloeiro.activeAuctions === 1 ? 'leilão' : 'leilões'}
      </Badge>
    );
  };

  return (
    <div className="w-full relative min-h-screen bg-white">
      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="max-w-[1440px] mx-auto w-full relative min-h-screen bg-white">
          <SessionNavBar />
          <main className="ml-12 min-h-screen flex flex-col">
            <div className="bg-white px-6 py-8">
              <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex items-center gap-2 mb-8">
                  <Building2 className="w-8 h-8 text-blue-600" />
                  <h1 className="text-3xl font-bold text-gray-900">Leiloeiros Oficiais do Brasil</h1>
                </div>

                {/* Filtros */}
                <div className="flex gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" />
                    <Input
                      placeholder="Pesquisar por nome do leiloeiro ou website..."
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
                  <Select value={activeAuctionsFilter} onValueChange={setActiveAuctionsFilter}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Leilões ativos" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todos">Todos</SelectItem>
                      <SelectItem value="com-leiloes">Com leilões</SelectItem>
                      <SelectItem value="sem-leiloes">Sem leilões</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Accordion com tabelas agrupadas por estado */}
                <Accordion type="multiple" className="space-y-4">
                  {Object.keys(filteredAndGroupedLeiloeiros)
                    .sort()
                    .map(state => {
                      const junta = getJuntaComercial(state);
                      const leiloeiroCount = filteredAndGroupedLeiloeiros[state].length;
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
                                    className="gap-2 text-xs"
                                  >
                                    {junta.sigla}
                                    <ExternalLink className="w-3 h-3" />
                                  </Button>
                                )}
                              </div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="p-0">
                            {/* Tabela com larguras fixas ajustadas e padding consistente */}
                            <div className="overflow-x-auto px-6">
                              <table className="w-full table-fixed">
                                <colgroup>
                                  <col className="w-80" />
                                  <col className="w-48" />
                                  <col className="w-48" />
                                  <col className="w-48" />
                                  <col className="w-20" />
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
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                      Acesso
                                    </th>
                                  </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                  {filteredAndGroupedLeiloeiros[state].map((leiloeiro) => (
                                    <tr key={leiloeiro.id} className="hover:bg-gray-50 h-16">
                                      <td className="px-6 py-4">
                                        <div className="flex items-center h-full">
                                          <div className="flex-shrink-0 h-10 w-10">
                                            <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                                              <Building2 className="w-5 h-5 text-blue-600" />
                                            </div>
                                          </div>
                                          <div className="ml-4 min-w-0 flex-1">
                                            <div className="text-sm font-medium text-gray-900 truncate">
                                              {leiloeiro.websiteName}
                                            </div>
                                            <div className="text-sm font-normal text-gray-500 truncate">
                                              {leiloeiro.name}
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="px-6 py-4">
                                        <div className="flex items-center text-sm text-gray-500 h-full">
                                          <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                                          <span className="truncate">{leiloeiro.phone}</span>
                                        </div>
                                      </td>
                                      <td className="px-6 py-4">
                                        <div className="h-full flex items-center">
                                          {getWebsiteDisplay(leiloeiro)}
                                        </div>
                                      </td>
                                      <td className="px-6 py-4">
                                        <div className="flex items-center h-full">
                                          {getAuctionsDisplay(leiloeiro)}
                                        </div>
                                      </td>
                                      <td className="px-6 py-4">
                                        <div className="flex justify-end items-center h-full">
                                          <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => leiloeiro.website && window.open(leiloeiro.website, '_blank')}
                                            disabled={!leiloeiro.website}
                                            className="h-8 w-8 p-0"
                                          >
                                            <ExternalLink className="w-4 h-4" />
                                          </Button>
                                        </div>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      );
                    })}
                </Accordion>

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
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" />
                <Input
                  placeholder="Pesquisar leiloeiro..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-3">
                <Select value={selectedState} onValueChange={setSelectedState}>
                  <SelectTrigger className="flex-1">
                    <SelectValue placeholder="Estado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos</SelectItem>
                    {estados.map(state => (
                      <SelectItem key={state} value={state}>{state}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={activeAuctionsFilter} onValueChange={setActiveAuctionsFilter}>
                  <SelectTrigger className="flex-1">
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

            {/* Accordion Mobile */}
            <Accordion type="multiple" className="space-y-4">
              {Object.keys(filteredAndGroupedLeiloeiros)
                .sort()
                .map(state => {
                  const junta = getJuntaComercial(state);
                  const leiloeiroCount = filteredAndGroupedLeiloeiros[state].length;
                  return (
                    <AccordionItem key={state} value={state} className="border border-gray-200 rounded-lg overflow-hidden">
                      <AccordionTrigger className="flex items-center justify-between p-4 bg-gray-50">
                        <div className="flex items-center gap-2">
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
                              className="gap-1 text-xs ml-2"
                            >
                              {junta.sigla}
                              <ExternalLink className="w-3 h-3" />
                            </Button>
                          )}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="p-0">
                        <div className="space-y-3 p-4">
                          {filteredAndGroupedLeiloeiros[state].map((leiloeiro) => (
                            <div key={leiloeiro.id} className="bg-white rounded-lg border border-gray-200 p-4">
                              <div className="flex items-start justify-between mb-3">
                                <div className="flex items-center gap-3">
                                  <div className="h-8 w-8 rounded-lg bg-blue-100 flex items-center justify-center">
                                    <Building2 className="w-4 h-4 text-blue-600" />
                                  </div>
                                  <div>
                                    <h3 className="font-semibold text-gray-900 text-sm">{leiloeiro.websiteName}</h3>
                                    <p className="text-xs text-gray-500 font-normal">{leiloeiro.name}</p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  {getAuctionsDisplay(leiloeiro)}
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => leiloeiro.website && window.open(leiloeiro.website, '_blank')}
                                    disabled={!leiloeiro.website}
                                    className="h-8 w-8 p-0"
                                  >
                                    <ExternalLink className="w-4 h-4" />
                                  </Button>
                                </div>
                              </div>
                              
                              <div className="space-y-2">
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                  <Phone className="w-4 h-4" />
                                  {leiloeiro.phone}
                                </div>
                                {getWebsiteDisplay(leiloeiro)}
                              </div>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
            </Accordion>

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
