import { SearchPageLayout } from "../components/search/SearchPageLayout";
import { MobileHeader } from "../components/navigation/MobileHeader";
import { MobileDrawer } from "../components/navigation/MobileDrawer";
import { ItemTypeToggleBar } from "../components/search/ItemTypeToggleBar";
import { ActionButtonsBar } from "../components/search/ActionButtonsBar";
import { useState } from "react";
import { useSearchPage } from "../hooks/useSearchPage";
import { useScrollHide } from "../hooks/useScrollHide";
import { vehicleSearchConfig } from "../config/searchConfigs";
import { Vehicle } from "../types/search";

const BuscadorVeiculos = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isHeaderVisible = useScrollHide({ threshold: 10 });
  
  const {
    isVertical,
    isLoading,
    sortBy,
    currentPage,
    setIsLoading,
    handlePageChange,
    handleSortChange,
    handleLayoutToggle,
  } = useSearchPage(vehicleSearchConfig);

  const totalPages = 10;
  const resultsCount = 4164;
  const sitesCount = 131;
  const newAuctions = 23;

  const vehicles: Vehicle[] = [
    {
      id: "search-vehicle-1",
      name: "Volkswagen T-Cross",
      color: "Preto",
      year: "2025",
      location: "Brasília - DF",
      price: "R$ 78.000",
      discount: "50% OFF",
      badges: ["Extrajudicial", "2ª Praça"],
      date: "15/05 às 10:00",
      image: "/lovable-uploads/c1eac822-7357-49b8-a4ce-a14e374e1167.png",
      showNewBadge: true
    },
    {
      id: "search-vehicle-2",
      name: "Honda Civic",
      color: "Prata",
      year: "2024",
      location: "São Paulo - SP",
      price: "R$ 95.000",
      discount: "30% OFF",
      badges: ["Judicial", "1ª Praça"],
      date: "20/05 às 14:30",
      image: "/lovable-uploads/33a5ac35-f888-4a6f-9cc8-dffa1f394b1e.png",
      showNewBadge: false
    },
    {
      id: "search-vehicle-3",
      name: "Toyota Corolla",
      color: "Branco",
      year: "2023",
      location: "Brasília - DF",
      price: "R$ 89.000",
      discount: "25% OFF",
      badges: ["Extrajudicial", "3ª Praça"],
      date: "22/05 às 09:15",
      image: "/lovable-uploads/4ee96d84-707d-45b1-83a8-50e28cd8f583.png",
      showNewBadge: true
    },
    {
      id: "search-vehicle-4",
      name: "BMW X3",
      color: "Azul",
      year: "2022",
      location: "Rio de Janeiro - RJ",
      price: "R$ 180.000",
      discount: "45% OFF",
      badges: ["Particular", "Praça Única"],
      date: "25/05 às 16:00",
      image: "/lovable-uploads/48c2a9c3-fb59-4a44-a931-b3f36f6891fc.png",
      showNewBadge: true
    },
    {
      id: "search-vehicle-5",
      name: "Ford Ranger",
      color: "Prata",
      year: "2021",
      location: "Curitiba - PR",
      price: "R$ 125.000",
      discount: "35% OFF",
      badges: ["Judicial", "2ª Praça"],
      date: "28/05 às 11:30",
      image: "/lovable-uploads/9b0b7577-0ba8-4200-abdf-15cdf93a0ba4.png",
      showNewBadge: false
    },
    {
      id: "search-vehicle-6",
      name: "Chevrolet Onix",
      color: "Vermelho",
      year: "2024",
      location: "Belo Horizonte - MG",
      price: "R$ 65.000",
      discount: "20% OFF",
      badges: ["Extrajudicial", "1ª Praça"],
      date: "30/05 às 15:45",
      image: "/lovable-uploads/a72eb3d0-1625-45e6-8bf5-96615cf0e02a.png",
      showNewBadge: true
    }
  ];

  const handleClearFilters = () => {
    console.log("Resetar filtros - Veículos");
  };

  const handleShowSort = () => {
    console.log("Mostrar ordenação");
  };

  // Calcular padding dinâmico baseado na visibilidade dos elementos
  const topPadding = isHeaderVisible ? 'pt-[182px]' : 'pt-[58px]';

  return (
    <div className="w-full relative min-h-screen bg-white">
      {/* Mobile Layout */}
      <div className="block md:hidden">
        <MobileHeader 
          onMenuClick={() => setIsDrawerOpen(true)} 
          isVisible={isHeaderVisible}
        />
        <MobileDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
        
        <ItemTypeToggleBar 
          currentType="vehicle"
          onTypeChange={() => {}}
          isVisible={isHeaderVisible}
        />
        
        <ActionButtonsBar 
          isVertical={isVertical}
          onToggleLayout={handleLayoutToggle}
          onShowSort={handleShowSort}
          itemType="vehicle"
          isHeaderVisible={isHeaderVisible}
        />
        
        {/* Main content with dynamic padding */}
        <main className={`w-full min-h-screen bg-white px-4 pb-6 ${topPadding}`}>
          <div className="space-y-4">
            <SearchPageLayout
              config={vehicleSearchConfig}
              items={vehicles}
              isLoading={isLoading}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              onClearFilters={handleClearFilters}
              resultsCount={resultsCount}
              sitesCount={sitesCount}
              isVertical={isVertical}
              onToggleLayout={handleLayoutToggle}
              sortBy={sortBy}
              onSortChange={handleSortChange}
              sortOptions={vehicleSearchConfig.sortOptions}
            />
          </div>
        </main>
      </div>

      {/* Desktop Layout - unchanged */}
      <div className="hidden md:block">
        <SearchPageLayout
          config={vehicleSearchConfig}
          items={vehicles}
          isLoading={isLoading}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          onClearFilters={handleClearFilters}
          resultsCount={resultsCount}
          sitesCount={sitesCount}
          isVertical={isVertical}
          onToggleLayout={handleLayoutToggle}
          sortBy={sortBy}
          onSortChange={handleSortChange}
          sortOptions={vehicleSearchConfig.sortOptions}
        />
      </div>
    </div>
  );
};

export default BuscadorVeiculos;
