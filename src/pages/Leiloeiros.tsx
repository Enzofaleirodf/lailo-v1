
import { Building2, MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { SessionNavBar } from "../components/SessionNavBar";
import { BottomNavigation } from "../components/BottomNavigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Leiloeiros = () => {
  const leiloeiros = [
    {
      id: 1,
      name: "Leilões Brasília",
      description: "Especializada em leilões judiciais e extrajudiciais",
      address: "Brasília - DF",
      phone: "(61) 3333-4444",
      email: "contato@leiloesbrasilia.com.br",
      activeAuctions: 12,
      website: "https://leiloesbrasilia.com.br"
    },
    {
      id: 2,
      name: "SP Leilões",
      description: "Maior leiloeira de São Paulo",
      address: "São Paulo - SP",
      phone: "(11) 9999-8888",
      email: "info@spleiloes.com.br",
      activeAuctions: 25,
      website: "https://spleiloes.com.br"
    },
    {
      id: 3,
      name: "Leilões MG",
      description: "Tradição em leilões de Minas Gerais",
      address: "Belo Horizonte - MG",
      phone: "(31) 7777-6666",
      email: "contato@leiloesmg.com.br",
      activeAuctions: 8,
      website: "https://leiloesmg.com.br"
    }
  ];

  return (
    <div className="w-full relative min-h-screen bg-white">
      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="max-w-[1440px] mx-auto w-full relative min-h-screen bg-white">
          <SessionNavBar />
          <main className="ml-12 min-h-screen flex flex-col">
            <div className="bg-white px-6 py-8">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-2 mb-8">
                  <Building2 className="w-8 h-8 text-blue-600" />
                  <h1 className="text-3xl font-bold text-gray-900">Leiloeiros</h1>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[200px]">Leiloeiro</TableHead>
                        <TableHead>Descrição</TableHead>
                        <TableHead>Localização</TableHead>
                        <TableHead>Contato</TableHead>
                        <TableHead>Leilões Ativos</TableHead>
                        <TableHead className="w-[100px]">Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {leiloeiros.map((leiloeiro) => (
                        <TableRow key={leiloeiro.id}>
                          <TableCell className="font-medium">
                            <div className="flex items-center gap-2">
                              <Building2 className="w-4 h-4 text-blue-600" />
                              {leiloeiro.name}
                            </div>
                          </TableCell>
                          <TableCell>
                            <span className="text-gray-600">{leiloeiro.description}</span>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1 text-gray-500">
                              <MapPin className="w-4 h-4" />
                              {leiloeiro.address}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <div className="flex items-center gap-1 text-sm text-gray-500">
                                <Phone className="w-3 h-3" />
                                {leiloeiro.phone}
                              </div>
                              <div className="flex items-center gap-1 text-sm text-gray-500">
                                <Mail className="w-3 h-3" />
                                {leiloeiro.email}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
                              {leiloeiro.activeAuctions} ativos
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => window.open(leiloeiro.website, '_blank')}
                              className="h-8 w-8 p-0"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Mobile Layout - mantém cards para mobile */}
      <div className="block md:hidden">
        <div className="w-full min-h-screen bg-white">
          <main className="w-full min-h-screen flex flex-col px-4 py-8 pb-20">
            <div className="flex items-center gap-2 mb-8">
              <Building2 className="w-8 h-8 text-blue-600" />
              <h1 className="text-3xl font-bold text-gray-900">Leiloeiros</h1>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {leiloeiros.map((leiloeiro) => (
                <div key={leiloeiro.id} className="bg-white rounded-lg border border-gray-200 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Building2 className="w-5 h-5 text-blue-600" />
                    <h3 className="font-semibold text-gray-900">{leiloeiro.name}</h3>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">{leiloeiro.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="w-4 h-4" />
                      {leiloeiro.address}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Phone className="w-4 h-4" />
                      {leiloeiro.phone}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Mail className="w-4 h-4" />
                      {leiloeiro.email}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
                      {leiloeiro.activeAuctions} leilões ativos
                    </Badge>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(leiloeiro.website, '_blank')}
                      className="gap-1"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Visitar
                    </Button>
                  </div>
                </div>
              ))}
            </div>
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
