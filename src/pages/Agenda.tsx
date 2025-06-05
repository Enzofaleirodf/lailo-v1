
import React, { useState } from "react";
import { Calendar } from "lucide-react";
import { CompactCalendar } from "../components/agenda/CompactCalendar";
import { AuctionCard } from "../components/agenda/AuctionCard";
import { AgendaFilters } from "../components/agenda/AgendaFilters";
import { ContentPageLayout } from "../components/layout/ContentPageLayout";

interface AuctionEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  address: string;
  company: string;
  origin: string;
  types: string[];
  href: string;
}

const Agenda = () => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedAuctions, setSelectedAuctions] = useState<AuctionEvent[]>([]);
  const [selectedState, setSelectedState] = useState("todos");
  const [selectedCity, setSelectedCity] = useState("todas");
  const [selectedOrigin, setSelectedOrigin] = useState("todas");
  const [selectedType, setSelectedType] = useState("imoveis");

  const upcomingAuctions: AuctionEvent[] = [
    {
      id: '1',
      title: 'Leilão Judicial de Imóveis Residenciais',
      date: '2024-01-20',
      time: '10:00',
      address: 'Rua Augusta, 1234 - Centro, São Paulo - SP, CEP: 01310-100',
      company: 'Leiloeiro Silva & Associados',
      origin: 'Judicial',
      types: ['Imóveis'],
      href: 'https://example.com/leilao1'
    },
    {
      id: '2',
      title: 'Leilão Extrajudicial de Veículos',
      date: '2024-01-25',
      time: '14:00',
      address: 'Av. Brasil, 5678 - Copacabana, Rio de Janeiro - RJ, CEP: 22070-011',
      company: 'Leilões RJ Ltda',
      origin: 'Extrajudicial',
      types: ['Veículos'],
      href: 'https://example.com/leilao2'
    },
    {
      id: '3',
      title: 'Leilão Misto - Imóveis e Veículos',
      date: '2024-02-01',
      time: '09:30',
      address: 'Praça da Liberdade, 100 - Centro, Belo Horizonte - MG, CEP: 30112-000',
      company: 'MG Leilões & Cia',
      origin: 'Particular',
      types: ['Imóveis', 'Veículos'],
      href: 'https://example.com/leilao3'
    }
  ];

  const handleDateSelect = (date: string, auctions: AuctionEvent[]) => {
    setSelectedDate(date);
    setSelectedAuctions(auctions);
  };

  const filtersContent = (
    <AgendaFilters
      selectedState={selectedState}
      onStateChange={setSelectedState}
      selectedCity={selectedCity}
      onCityChange={setSelectedCity}
      selectedOrigin={selectedOrigin}
      onOriginChange={setSelectedOrigin}
      selectedType={selectedType}
      onTypeChange={setSelectedType}
    />
  );

  return (
    <ContentPageLayout
      title="Agenda de Leilões Presenciais"
      subtitle="Acompanhe os próximos leilões presenciais e não perca nenhuma oportunidade de participar pessoalmente"
      titleIcon={Calendar}
      showFilters={true}
      filtersContent={filtersContent}
    >
      {/* Mobile Layout */}
      <div className="block md:hidden space-y-6">
        {/* Calendário Mobile */}
        <CompactCalendar 
          auctions={upcomingAuctions} 
          onDateSelect={handleDateSelect}
        />

        {/* Lista de leilões selecionados ou todos */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">
            {selectedDate 
              ? `Leilões em ${new Date(selectedDate).toLocaleDateString('pt-BR')}`
              : 'Próximos Leilões'
            }
          </h2>
          
          {(selectedDate ? selectedAuctions : upcomingAuctions).map((auction) => (
            <AuctionCard key={auction.id} auction={auction} />
          ))}

          {(selectedDate ? selectedAuctions : upcomingAuctions).length === 0 && (
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {selectedDate ? 'Nenhum leilão nesta data' : 'Nenhum leilão agendado'}
              </h3>
              <p className="text-gray-600 text-sm">
                {selectedDate 
                  ? 'Não há leilões programados para esta data.'
                  : 'Não há leilões presenciais programados para os próximos dias.'
                }
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="grid grid-cols-12 gap-6">
          {/* Calendário Desktop - Sidebar Esquerda */}
          <div className="col-span-5">
            <CompactCalendar 
              auctions={upcomingAuctions} 
              onDateSelect={handleDateSelect}
            />
          </div>

          {/* Lista de leilões Desktop - Área Principal */}
          <div className="col-span-7">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">
                  {selectedDate 
                    ? `Leilões em ${new Date(selectedDate).toLocaleDateString('pt-BR')}`
                    : 'Próximos Leilões'
                  }
                </h2>
                {selectedDate && (
                  <button
                    onClick={() => {
                      setSelectedDate("");
                      setSelectedAuctions([]);
                    }}
                    className="text-sm text-blue-600 hover:text-blue-700"
                  >
                    Ver todos os leilões
                  </button>
                )}
              </div>
              
              <div className="space-y-4">
                {(selectedDate ? selectedAuctions : upcomingAuctions).map((auction) => (
                  <AuctionCard key={auction.id} auction={auction} />
                ))}
              </div>

              {(selectedDate ? selectedAuctions : upcomingAuctions).length === 0 && (
                <div className="text-center py-12">
                  <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {selectedDate ? 'Nenhum leilão nesta data' : 'Nenhum leilão agendado'}
                  </h3>
                  <p className="text-gray-600">
                    {selectedDate 
                      ? 'Não há leilões programados para esta data.'
                      : 'Não há leilões presenciais programados para os próximos dias.'
                    }
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </ContentPageLayout>
  );
};

export default Agenda;
