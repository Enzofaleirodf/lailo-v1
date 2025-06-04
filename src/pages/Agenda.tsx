
import React from "react";
import { Calendar } from "lucide-react";
import { BasePageLayout } from "../components/layout/BasePageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Agenda = () => {
  const upcomingAuctions = [
    {
      id: '1',
      title: 'Leilão de Imóveis - SP',
      date: '2024-01-20',
      time: '10:00',
      location: 'São Paulo - SP',
      type: 'Imóveis',
      status: 'Confirmado'
    },
    {
      id: '2',
      title: 'Leilão de Veículos - RJ',
      date: '2024-01-25',
      time: '14:00',
      location: 'Rio de Janeiro - RJ',
      type: 'Veículos',
      status: 'Pendente'
    },
    {
      id: '3',
      title: 'Leilão Judicial - MG',
      date: '2024-02-01',
      time: '09:30',
      location: 'Belo Horizonte - MG',
      type: 'Judicial',
      status: 'Confirmado'
    }
  ];

  return (
    <BasePageLayout containerClass="p-0">
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Header padronizado - desktop apenas */}
        <div className="hidden md:block mb-8 px-6 pt-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Calendar className="w-8 h-8 text-blue-600" />
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Agenda de Leilões</h1>
                <p className="text-gray-600 mt-1">Acompanhe os próximos leilões e não perca nenhuma oportunidade</p>
              </div>
            </div>
          </div>
        </div>

        {/* Conteúdo principal */}
        <div className="bg-white md:rounded-lg md:shadow-sm md:border md:border-gray-200 md:mx-6 min-h-[400px]">
          <div className="p-4 md:p-6">
            <div className="grid gap-4">
              {upcomingAuctions.map((auction) => (
                <Card key={auction.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{auction.title}</CardTitle>
                      <Badge variant={auction.status === 'Confirmado' ? 'default' : 'secondary'}>
                        {auction.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                      <div>
                        <span className="font-medium">Data:</span> {auction.date}
                      </div>
                      <div>
                        <span className="font-medium">Horário:</span> {auction.time}
                      </div>
                      <div>
                        <span className="font-medium">Local:</span> {auction.location}
                      </div>
                    </div>
                    <div className="mt-2">
                      <Badge variant="outline">{auction.type}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {upcomingAuctions.length === 0 && (
              <div className="text-center py-12">
                <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Nenhum leilão agendado
                </h3>
                <p className="text-gray-600">
                  Não há leilões programados para os próximos dias.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </BasePageLayout>
  );
};

export default Agenda;
