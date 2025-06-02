
import { SearchPageLayout } from "../components/search/SearchPageLayout";
import { useSearchPage } from "../hooks/useSearchPage";
import { propertySearchConfig } from "../config/searchConfigs";
import { Property } from "../types/search";

const BuscadorImoveis = () => {
  const {
    isVertical,
    isLoading,
    sortBy,
    currentPage,
    setIsLoading,
    handlePageChange,
    handleSortChange,
    handleLayoutToggle,
  } = useSearchPage(propertySearchConfig);

  const totalPages = 8;
  const resultsCount = 2543;
  const sitesCount = 87;

  const properties: Property[] = [
    {
      id: "property-1",
      type: "Casa Térrea",
      area: "250m²",
      address: "Rua das Flores, 123",
      cityState: "Brasília - DF",
      price: "R$ 450.000",
      discount: "30% OFF",
      badges: ["Extrajudicial", "2ª Praça"],
      date: "15/05 às 10:00",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop&auto=format",
      showNewBadge: true
    },
    {
      id: "property-2",
      type: "Apartamento Moderno",
      area: "80m²",
      address: "Av. Paulista, 456",
      cityState: "São Paulo - SP",
      price: "R$ 320.000",
      discount: "25% OFF",
      badges: ["Judicial", "1ª Praça"],
      date: "20/05 às 14:30",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop&auto=format",
      showNewBadge: false
    },
    {
      id: "property-3",
      type: "Sobrado Duplex",
      area: "180m²",
      address: "Rua das Acácias, 789",
      cityState: "Belo Horizonte - MG",
      price: "R$ 520.000",
      discount: "35% OFF",
      badges: ["Extrajudicial", "3ª Praça"],
      date: "22/05 às 09:15",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop&auto=format",
      showNewBadge: true
    }
  ];

  const handleClearFilters = () => {
    console.log("Apagar filtros");
  };

  return (
    <SearchPageLayout
      config={propertySearchConfig}
      items={properties}
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
      sortOptions={propertySearchConfig.sortOptions}
    />
  );
};

export default BuscadorImoveis;
