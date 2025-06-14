
import React from "react";
import { Calendar } from "lucide-react";
import { CompactCalendar } from "../components/agenda/CompactCalendar";
import { AuctionList } from "../components/agenda/AuctionList";
import { AgendaFilters } from "../components/agenda/AgendaFilters";
import { ContentPageLayout } from "../components/layout/ContentPageLayout";
import { useAgendaFilters } from "../hooks/useAgendaFilters";
import { useAuctionCalendar } from "../hooks/useAuctionCalendar";
import { upcomingAuctions } from "../data/agendaAuctions";

const Agenda = () => {
  const {
    selectedState,
    setSelectedState,
    selectedCity,
    setSelectedCity,
    selectedOrigin,
    setSelectedOrigin,
    selectedType,
    setSelectedType
  } = useAgendaFilters();

  const {
    selectedDate,
    auctionsByMonth,
    handleDateSelect,
    clearSelection
  } = useAuctionCalendar(upcomingAuctions);

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
      title="Agenda de Leilões"
      subtitle="Acompanhe os próximos leilões presenciais"
      titleIcon={Calendar}
      showFilters={true}
      filtersContent={filtersContent}
    >
      {/* Mobile Layout - espaçamento otimizado */}
      <div className="block md:hidden space-y-4">
        <CompactCalendar 
          auctions={upcomingAuctions} 
          onDateSelect={handleDateSelect}
        />
        <AuctionList 
          auctionsByMonth={auctionsByMonth}
          selectedDate={selectedDate}
        />
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-5">
            <CompactCalendar 
              auctions={upcomingAuctions} 
              onDateSelect={handleDateSelect}
            />
          </div>
          <div className="col-span-7">
            <AuctionList 
              auctionsByMonth={auctionsByMonth}
              selectedDate={selectedDate}
              onClearSelection={clearSelection}
            />
          </div>
        </div>
      </div>
    </ContentPageLayout>
  );
};

export default Agenda;
