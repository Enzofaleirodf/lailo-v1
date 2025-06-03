
import { SearchPageLayout } from "../components/search/SearchPageLayout";
import { useSearchPage } from "../hooks/useSearchPage";
import { vehicleSearchConfig } from "../config/searchConfigs";
import { Vehicle } from "../types/search";

const BuscadorVeiculos = () => {
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
    }
  ];

  const handleClearFilters = () => {
    console.log("Resetar filtros - Veículos");
  };

  return (
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
  );
};

export default BuscadorVeiculos;
