
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
  const newAuctions = 15; // Novos leilões hoje

  const properties: Property[] = [
    {
      id: "property-1",
      type: "Casa Térrea",
      area: "250m²",
      location: "Rua das Flores, 123 - Brasília - DF",
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
      location: "Av. Paulista, 456 - São Paulo - SP",
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
      location: "Rua das Acácias, 789 - Belo Horizonte - MG",
      price: "R$ 520.000",
      discount: "35% OFF",
      badges: ["Extrajudicial", "3ª Praça"],
      date: "22/05 às 09:15",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop&auto=format",
      showNewBadge: true
    },
    {
      id: "property-4",
      type: "Cobertura Luxo",
      area: "320m²",
      location: "Av. Atlântica, 555 - Rio de Janeiro - RJ",
      price: "R$ 1.200.000",
      discount: "40% OFF",
      badges: ["Particular", "Praça Única"],
      date: "25/05 às 16:00",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop&auto=format",
      showNewBadge: true
    },
    {
      id: "property-5",
      type: "Casa de Campo",
      area: "500m²",
      location: "Estrada da Serra, 100 - Petrópolis - RJ",
      price: "R$ 780.000",
      discount: "20% OFF",
      badges: ["Judicial", "2ª Praça"],
      date: "28/05 às 11:30",
      image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=400&h=300&fit=crop&auto=format",
      showNewBadge: false
    },
    {
      id: "property-6",
      type: "Loft Industrial",
      area: "120m²",
      location: "Rua Augusta, 777 - São Paulo - SP",
      price: "R$ 380.000",
      discount: "15% OFF",
      badges: ["Extrajudicial", "1ª Praça"],
      date: "30/05 às 15:45",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop&auto=format",
      showNewBadge: true
    }
  ];

  const handleClearFilters = () => {
    console.log("Resetar filtros - Imóveis");
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
