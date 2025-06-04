
import React, { useState, useMemo } from "react";
import { Calendar } from "lucide-react";
import { BasePageLayout } from "../components/layout/BasePageLayout";
import { AgendaCalendar } from "../components/agenda/AgendaCalendar";
import { AgendaFilters } from "../components/agenda/AgendaFilters";
import { EventCard, AgendaEvent } from "../components/agenda/EventCard";

// Dados mockados dos eventos presenciais
const mockEvents: AgendaEvent[] = [
  {
    id: 1,
    auctioneerName: "Leilões Brasil",
    website: "leiloesbrasilonline.com.br",
    logo: "/lovable-uploads/24ecc65e-f63a-4f13-95f6-d90060a463fe.png",
    date: "14/06/2025",
    time: "10:00",
    address: "Rua das Flores, 123 - Centro",
    city: "São Paulo",
    state: "São Paulo",
    websiteUrl: "https://leiloesbrasilonline.com.br"
  },
  {
    id: 2,
    auctioneerName: "Super Leilões",
    website: "superleiloes.com.br",
    logo: "/lovable-uploads/33a5ac35-f888-4a6f-9cc8-dffa1f394b1e.png",
    date: "18/06/2025",
    time: "14:30",
    address: "Av. Paulista, 456 - Bela Vista",
    city: "São Paulo",
    state: "São Paulo",
    websiteUrl: "https://superleiloes.com.br"
  },
  {
    id: 3,
    auctioneerName: "RJ Leilões",
    website: "rjleiloes.com.br", 
    logo: "/lovable-uploads/3abaaf79-72ae-4e03-87ad-488329f5e234.png",
    date: "22/06/2025",
    time: "09:00",
    address: "Rua Copacabana, 789 - Copacabana",
    city: "Rio de Janeiro",
    state: "Rio de Janeiro",
    websiteUrl: "https://rjleiloes.com.br"
  },
  {
    id: 4,
    auctioneerName: "Minas Leilões",
    website: "minasleiloes.com.br",
    logo: "/lovable-uploads/48c2a9c3-fb59-4a44-a931-b3f36f6891fc.png",
    date: "25/06/2025",
    time: "16:00",
    address: "Rua da Liberdade, 321 - Centro",
    city: "Belo Horizonte",
    state: "Minas Gerais",
    websiteUrl: "https://minasleiloes.com.br"
  },
  {
    id: 5,
    auctioneerName: "Sul Leilões",
    website: "sulleiloes.com.br",
    logo: "/lovable-uploads/f1af3d89-585e-47cd-bdbc-3a7e7a550815.png",
    date: "28/06/2025",
    time: "11:00",
    address: "Av. Ipiranga, 999 - Centro",
    city: "Porto Alegre",
    state: "Rio Grande do Sul",
    websiteUrl: "https://sulleiloes.com.br"
  }
];

const Agenda = () => {
  const [selectedState, setSelectedState] = useState('Todos os estados');
  const [selectedCity, setSelectedCity] = useState('Todas as cidades');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  // Converter datas string para objetos Date para o calendário
  const eventDates = useMemo(() => {
    return mockEvents.map(event => {
      const [day, month, year] = event.date.split('/');
      return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    });
  }, []);

  // Filtrar eventos baseado nos filtros selecionados
  const filteredEvents = useMemo(() => {
    return mockEvents.filter(event => {
      const stateMatch = selectedState === 'Todos os estados' || event.state === selectedState;
      const cityMatch = selectedCity === 'Todas as cidades' || event.city === selectedCity;
      
      let dateMatch = true;
      if (selectedDate) {
        const [day, month, year] = event.date.split('/');
        const eventDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
        dateMatch = eventDate.toDateString() === selectedDate.toDateString();
      }
      
      return stateMatch && cityMatch && dateMatch;
    });
  }, [selectedState, selectedCity, selectedDate]);

  return (
    <BasePageLayout>
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Agenda de Leilões Presenciais
          </h1>
          <p className="text-gray-600">
            Acompanhe os próximos leilões presenciais em sua região
          </p>
        </div>

        {/* Filtros */}
        <AgendaFilters
          selectedState={selectedState}
          selectedCity={selectedCity}
          onStateChange={setSelectedState}
          onCityChange={setSelectedCity}
        />

        {/* Layout principal - Mobile: stack, Desktop: lado a lado */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calendário */}
          <div className="lg:col-span-1">
            <AgendaCalendar
              selectedDate={selectedDate}
              onDateSelect={setSelectedDate}
              eventDates={eventDates}
            />
          </div>

          {/* Listagem de Eventos */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Próximos Eventos ({filteredEvents.length})
                  </h3>
                  {selectedDate && (
                    <button
                      onClick={() => setSelectedDate(undefined)}
                      className="text-sm text-blue-600 hover:text-blue-700"
                    >
                      Limpar filtro de data
                    </button>
                  )}
                </div>
              </div>
              
              <div className="divide-y divide-gray-200">
                {filteredEvents.length > 0 ? (
                  filteredEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))
                ) : (
                  <div className="p-12 text-center">
                    <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h4 className="text-lg font-medium text-gray-900 mb-2">
                      Nenhum evento encontrado
                    </h4>
                    <p className="text-gray-600">
                      Não há leilões presenciais programados para os filtros selecionados.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </BasePageLayout>
  );
};

export default Agenda;
