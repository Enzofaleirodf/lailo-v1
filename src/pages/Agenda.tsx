
import React from "react";
import { Calendar } from "lucide-react";
import { AgendaCalendar } from "../components/agenda/AgendaCalendar";
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
    <div className="w-full min-h-screen bg-white">
      {/* Mobile Layout */}
      <div className="block md:hidden px-4 py-6 pb-20">
        {/* Header Mobile */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="w-6 h-6 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Agenda de Leilões</h1>
          </div>
          <p className="text-gray-600 text-sm">Acompanhe os próximos leilões</p>
        </div>

        {/* Calendário Mobile */}
        <div className="mb-6">
          <AgendaCalendar auctions={upcomingAuctions} />
        </div>

        {/* Lista de próximos leilões Mobile */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Próximos Leilões</h2>
          {upcomingAuctions.map((auction) => (
            <Card key={auction.id} className="border-l-4 border-l-blue-500">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-medium text-gray-900 text-sm leading-tight">
                    {auction.title}
                  </h3>
                  <Badge 
                    variant={auction.status === 'Confirmado' ? 'default' : 'secondary'}
                    className="ml-2 text-xs"
                  >
                    {auction.status}
                  </Badge>
                </div>
                <div className="space-y-2 text-xs text-gray-600">
                  <div className="flex justify-between">
                    <span className="font-medium">Data:</span>
                    <span>{auction.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Horário:</span>
                    <span>{auction.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Local:</span>
                    <span>{auction.location}</span>
                  </div>
                </div>
                <div className="mt-3">
                  <Badge variant="outline" className="text-xs">{auction.type}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}

          {upcomingAuctions.length === 0 && (
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Nenhum leilão agendado
              </h3>
              <p className="text-gray-600 text-sm">
                Não há leilões programados para os próximos dias.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="w-full relative min-h-screen bg-white">
          <main className="ml-12 min-h-screen flex flex-col">
            <div className="bg-white flex-1 p-6">
              <div className="w-full max-w-[1440px] mx-auto">
                {/* Header Desktop */}
                <div className="mb-8">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-8 h-8 text-blue-600" />
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900">Agenda de Leilões</h1>
                      <p className="text-gray-600 mt-1">Acompanhe os próximos leilões e não perca nenhuma oportunidade</p>
                    </div>
                  </div>
                </div>

                {/* Layout Desktop: Calendário à esquerda, Lista à direita */}
                <div className="grid grid-cols-12 gap-6">
                  {/* Calendário Desktop - Sidebar Esquerda */}
                  <div className="col-span-5">
                    <AgendaCalendar auctions={upcomingAuctions} />
                  </div>

                  {/* Lista de próximos leilões Desktop - Área Principal */}
                  <div className="col-span-7">
                    <Card className="h-full">
                      <CardHeader>
                        <CardTitle className="text-xl">Próximos Leilões</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {upcomingAuctions.map((auction) => (
                            <Card key={auction.id} className="hover:shadow-md transition-shadow border-l-4 border-l-blue-500">
                              <CardContent className="p-4">
                                <div className="flex items-center justify-between mb-3">
                                  <h3 className="font-semibold text-gray-900">{auction.title}</h3>
                                  <Badge variant={auction.status === 'Confirmado' ? 'default' : 'secondary'}>
                                    {auction.status}
                                  </Badge>
                                </div>
                                <div className="grid grid-cols-3 gap-4 text-sm text-gray-600 mb-3">
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
                                <div>
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
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Agenda;
