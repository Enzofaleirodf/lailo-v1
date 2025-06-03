
import { Building2, MapPin, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SessionNavBar } from "../components/SessionNavBar";

const Leiloeiros = () => {
  const leiloeiros = [
    {
      id: 1,
      name: "Leilões Brasília",
      description: "Especializada em leilões judiciais e extrajudiciais",
      address: "Brasília - DF",
      phone: "(61) 3333-4444",
      email: "contato@leiloesbrasilia.com.br",
      activeAuctions: 12
    },
    {
      id: 2,
      name: "SP Leilões",
      description: "Maior leiloeira de São Paulo",
      address: "São Paulo - SP",
      phone: "(11) 9999-8888",
      email: "info@spleiloes.com.br",
      activeAuctions: 25
    },
    {
      id: 3,
      name: "Leilões MG",
      description: "Tradição em leilões de Minas Gerais",
      address: "Belo Horizonte - MG",
      phone: "(31) 7777-6666",
      email: "contato@leiloesmg.com.br",
      activeAuctions: 8
    }
  ];

  return (
    <div className="flex h-screen w-screen flex-row">
      <SessionNavBar />
      <main className="flex h-screen grow flex-col overflow-auto ml-12">
        <div className="bg-white px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <Building2 className="w-8 h-8 text-blue-600" />
              <h1 className="text-3xl font-bold text-gray-900">Leiloeiros</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {leiloeiros.map((leiloeiro) => (
                <Card key={leiloeiro.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-blue-600" />
                      {leiloeiro.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">{leiloeiro.description}</p>
                    
                    <div className="space-y-2">
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

                    <div className="pt-4 border-t">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-green-600">
                          {leiloeiro.activeAuctions} leilões ativos
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Leiloeiros;
