
import React, { useState } from "react";
import { Calendar, Clock, MapPin, ExternalLink } from "lucide-react";
import { BasePageLayout } from "../components/layout/BasePageLayout";
import { ContentPageLayout } from "../components/layout/ContentPageLayout";
import { StateSelect } from "../components/search/location/StateSelect";
import { CitySelect } from "../components/search/location/CitySelect";
import { FilterSection } from "../components/filters/FilterSection";
import { Button } from "../components/ui/button";

// Dados mockados dos eventos presenciais
const mockEvents = [
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
  }
];

const Agenda = () => {
  const [selectedState, setSelectedState] = useState('Todos os estados');
  const [selectedCity, setSelectedCity] = useState('Todas as cidades');

  const handleClearCity = () => {
    setSelectedCity('Todas as cidades');
  };

  // Filtrar eventos baseado nos filtros selecionados
  const filteredEvents = mockEvents.filter(event => {
    const stateMatch = selectedState === 'Todos os estados' || event.state === selectedState;
    const cityMatch = selectedCity === 'Todas as cidades' || event.city === selectedCity;
    return stateMatch && cityMatch;
  });

  const filtersContent = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <FilterSection title="">
        <StateSelect
          value={selectedState}
          onChange={setSelectedState}
          onClearCity={handleClearCity}
        />
      </FilterSection>

      <FilterSection title="">
        <CitySelect
          value={selectedCity}
          onChange={setSelectedCity}
          selectedState={selectedState}
        />
      </FilterSection>
    </div>
  );

  return (
    <BasePageLayout>
      {/* Mobile Layout */}
      <div className="block md:hidden">
        {/* Header Mobile */}
        <div className="flex items-center gap-3 mb-6">
          <Calendar className="w-6 h-6 text-blue-600" />
          <div>
            <h1 className="text-xl font-bold text-gray-900">Agenda de Leilões</h1>
            <p className="text-sm text-gray-600">Leilões presenciais em sua região</p>
          </div>
        </div>

        {/* Filtros Mobile */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          {filtersContent}
        </div>

        {/* Lista de Eventos Mobile */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Próximos Eventos ({filteredEvents.length})
          </h3>
          
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg border border-gray-200 p-4">
                <div className="flex gap-3 mb-3">
                  <img
                    src={event.logo}
                    alt={`Logo ${event.auctioneerName}`}
                    className="w-12 h-12 rounded-lg object-cover border border-gray-200 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {event.auctioneerName}
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">
                      {event.website}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 flex-shrink-0" />
                    <span>{event.date} às {event.time}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <div>
                      <div>{event.address}</div>
                      <div className="text-gray-500">{event.city} - {event.state}</div>
                    </div>
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(event.websiteUrl, '_blank')}
                  className="w-full"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visitar Site
                </Button>
              </div>
            ))
          ) : (
            <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
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

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <ContentPageLayout
          title="Agenda de Leilões Presenciais"
          subtitle="Acompanhe os próximos leilões presenciais em sua região"
          titleIcon={Calendar}
          showFilters={true}
          filtersContent={filtersContent}
        >
          {/* Calendário - Mobile: stack, Desktop: lado a lado */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
            {/* Calendário */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  Calendário
                </h3>
                {/* Placeholder para calendário - será implementado depois */}
                <div className="bg-white rounded-lg p-8 text-center">
                  <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500 text-sm">Calendário será implementado</p>
                </div>
              </div>
            </div>

            {/* Listagem de Eventos */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-lg">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Próximos Eventos ({filteredEvents.length})
                  </h3>
                </div>
                
                <div className="divide-y divide-gray-200">
                  {filteredEvents.length > 0 ? (
                    filteredEvents.map((event) => (
                      <div key={event.id} className="p-6 hover:bg-gray-100 transition-colors">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          {/* Informações principais */}
                          <div className="flex-1">
                            <div className="flex items-start gap-4">
                              {/* Logo do leiloeiro */}
                              <div className="flex-shrink-0">
                                <img
                                  src={event.logo}
                                  alt={`Logo ${event.auctioneerName}`}
                                  className="w-12 h-12 rounded-lg object-cover border border-gray-200"
                                />
                              </div>
                              
                              {/* Detalhes do evento */}
                              <div className="flex-1 min-w-0">
                                <h4 className="font-semibold text-gray-900 mb-1">
                                  {event.auctioneerName}
                                </h4>
                                <p className="text-sm text-gray-600 mb-2">
                                  {event.website}
                                </p>
                                
                                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-gray-600">
                                  <div className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    <span>{event.date} às {event.time}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <MapPin className="w-4 h-4" />
                                    <span>{event.address}</span>
                                  </div>
                                </div>
                                
                                <p className="text-sm text-gray-500 mt-1">
                                  {event.city} - {event.state}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Botão de ação */}
                          <div className="flex-shrink-0">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => window.open(event.websiteUrl, '_blank')}
                              className="w-full sm:w-auto"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Visitar Site
                            </Button>
                          </div>
                        </div>
                      </div>
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
        </ContentPageLayout>
      </div>
    </BasePageLayout>
  );
};

export default Agenda;
