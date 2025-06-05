
import React, { useState, useMemo } from "react";
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
      date: '2025-06-15',
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
      date: '2025-06-25',
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
      date: '2025-07-01',
      time: '09:30',
      address: 'Praça da Liberdade, 100 - Centro, Belo Horizonte - MG, CEP: 30112-000',
      company: 'MG Leilões & Cia',
      origin: 'Particular',
      types: ['Imóveis', 'Veículos'],
      href: 'https://example.com/leilao3'
    },
    {
      id: '4',
      title: 'Leilão de Imóveis Comerciais',
      date: '2025-07-12',
      time: '11:00',
      address: 'Av. Paulista, 900 - Bela Vista, São Paulo - SP, CEP: 01310-100',
      company: 'Paulista Leilões',
      origin: 'Judicial',
      types: ['Imóveis'],
      href: 'https://example.com/leilao4'
    },
    {
      id: '5',
      title: 'Leilão de Veículos de Luxo',
      date: '2025-08-05',
      time: '15:30',
      address: 'Rua das Flores, 456 - Ipanema, Rio de Janeiro - RJ, CEP: 22411-040',
      company: 'Elite Leilões',
      origin: 'Extrajudicial',
      types: ['Veículos'],
      href: 'https://example.com/leilao5'
    },
    {
      id: '6',
      title: 'Leilão de Imóveis Rurais',
      date: '2025-08-18',
      time: '08:00',
      address: 'Fazenda Boa Vista, Km 25 - Zona Rural, Ribeirão Preto - SP, CEP: 14020-000',
      company: 'Rural Leilões',
      origin: 'Particular',
      types: ['Imóveis'],
      href: 'https://example.com/leilao6'
    },
    {
      id: '7',
      title: 'Leilão Público de Bens Diversos',
      date: '2025-09-03',
      time: '13:00',
      address: 'Centro de Convenções, Av. das Nações, 1500 - Asa Sul, Brasília - DF, CEP: 70070-100',
      company: 'Governo Federal',
      origin: 'Público',
      types: ['Imóveis', 'Veículos'],
      href: 'https://example.com/leilao7'
    },
    {
      id: '8',
      title: 'Leilão de Apartamentos e Casas',
      date: '2025-09-20',
      time: '10:30',
      address: 'Shopping Center Norte, Av. Tucuruvi, 777 - Tucuruvi, São Paulo - SP, CEP: 02304-002',
      company: 'Norte Leilões',
      origin: 'Judicial',
      types: ['Imóveis'],
      href: 'https://example.com/leilao8'
    },
    {
      id: '9',
      title: 'Leilão de Motocicletas e Carros Populares',
      date: '2025-10-10',
      time: '16:00',
      address: 'Estádio Municipal, Rua do Estádio, 200 - Centro, Campinas - SP, CEP: 13010-111',
      company: 'Campinas Leilões',
      origin: 'Extrajudicial',
      types: ['Veículos'],
      href: 'https://example.com/leilao9'
    },
    {
      id: '10',
      title: 'Leilão de Imóveis Industriais',
      date: '2025-10-25',
      time: '09:00',
      address: 'Distrito Industrial, Rua das Indústrias, 1200 - Zona Industrial, São Bernardo do Campo - SP, CEP: 09720-000',
      company: 'Industrial Leilões',
      origin: 'Judicial',
      types: ['Imóveis'],
      href: 'https://example.com/leilao10'
    },
    {
      id: '11',
      title: 'Leilão de Veículos Pesados e Máquinas',
      date: '2025-11-08',
      time: '14:30',
      address: 'Terminal Rodoviário, Av. do Terminal, 500 - Rodoviária, Goiânia - GO, CEP: 74023-010',
      company: 'Centro-Oeste Leilões',
      origin: 'Particular',
      types: ['Veículos'],
      href: 'https://example.com/leilao11'
    },
    {
      id: '12',
      title: 'Leilão de Fim de Ano - Misto',
      date: '2025-12-15',
      time: '10:00',
      address: 'Centro de Eventos, Rua dos Eventos, 999 - Centro, Porto Alegre - RS, CEP: 90010-150',
      company: 'Sul Leilões & Eventos',
      origin: 'Extrajudicial',
      types: ['Imóveis', 'Veículos'],
      href: 'https://example.com/leilao12'
    }
  ];

  const handleDateSelect = (date: string, auctions: AuctionEvent[]) => {
    setSelectedDate(date);
    setSelectedAuctions(auctions);
  };

  // Agrupar leilões por mês
  const auctionsByMonth = useMemo(() => {
    const auctions = selectedDate ? selectedAuctions : upcomingAuctions;
    const grouped: Record<string, AuctionEvent[]> = {};
    
    auctions.forEach(auction => {
      const date = new Date(auction.date);
      const monthKey = date.toLocaleDateString('pt-BR', { 
        year: 'numeric', 
        month: 'long' 
      });
      
      if (!grouped[monthKey]) {
        grouped[monthKey] = [];
      }
      grouped[monthKey].push(auction);
    });
    
    // Ordenar por data dentro de cada mês
    Object.keys(grouped).forEach(month => {
      grouped[month].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    });
    
    return grouped;
  }, [selectedDate, selectedAuctions, upcomingAuctions]);

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

        {/* Lista de leilões agrupados por mês */}
        <div className="space-y-6">
          <h2 className="text-lg font-semibold text-gray-900">
            {selectedDate 
              ? `Leilões em ${new Date(selectedDate).toLocaleDateString('pt-BR')}`
              : 'Próximos Leilões'
            }
          </h2>
          
          {Object.keys(auctionsByMonth).length > 0 ? (
            Object.entries(auctionsByMonth).map(([month, auctions]) => (
              <div key={month} className="space-y-4">
                <h3 className="text-base font-medium text-gray-700 capitalize border-b border-gray-200 pb-2">
                  {month}
                </h3>
                <div className="space-y-4">
                  {auctions.map((auction) => (
                    <AuctionCard key={auction.id} auction={auction} />
                  ))}
                </div>
              </div>
            ))
          ) : (
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
              
              {Object.keys(auctionsByMonth).length > 0 ? (
                Object.entries(auctionsByMonth).map(([month, auctions]) => (
                  <div key={month} className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-700 capitalize border-b border-gray-200 pb-2">
                      {month}
                    </h3>
                    <div className="space-y-4">
                      {auctions.map((auction) => (
                        <AuctionCard key={auction.id} auction={auction} />
                      ))}
                    </div>
                  </div>
                ))
              ) : (
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
