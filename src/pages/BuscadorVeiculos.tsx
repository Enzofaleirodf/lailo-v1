
import { useState } from "react";
import { LoadingSpinner } from "../components/ui/LoadingSpinner";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { SessionNavBar } from "../components/SessionNavBar";
import { BottomNavigation } from "../components/BottomNavigation";
import { VehicleSearchHeader } from "../components/VehicleSearchHeader";
import { VehicleSearchSidebar } from "../components/VehicleSearchSidebar";
import { VehicleSearchControls } from "../components/VehicleSearchControls";
import { VehicleSearchResults } from "../components/VehicleSearchResults";

const BuscadorVeiculos = () => {
  const [isVertical, setIsVertical] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [sortBy, setSortBy] = useState("Mais recentes");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const totalPages = 10;

  // Opções para os seletores
  const brandOptions = [
    { label: "Volkswagen", value: "volkswagen" },
    { label: "Honda", value: "honda" },
    { label: "Toyota", value: "toyota" },
    { label: "Ford", value: "ford" },
    { label: "Chevrolet", value: "chevrolet" },
    { label: "Fiat", value: "fiat" },
    { label: "Hyundai", value: "hyundai" },
    { label: "Nissan", value: "nissan" }
  ];

  const categoryOptions = [
    { label: "Sedan", value: "sedan" },
    { label: "SUV", value: "suv" },
    { label: "Hatch", value: "hatch" },
    { label: "Pickup", value: "pickup" },
    { label: "Conversível", value: "conversivel" },
    { label: "Crossover", value: "crossover" },
    { label: "Minivan", value: "minivan" },
    { label: "Coupe", value: "coupe" }
  ];

  const vehicles = [
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
    }, {
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
    }, {
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
    console.log("Apagar filtros");
    setSelectedBrands([]);
    setSelectedCategories([]);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    console.log(`Mudando para página ${page}`);
  };

  const handleBrandChange = (brands: string[]) => {
    setSelectedBrands(brands);
    console.log("Marcas selecionadas:", brands);
  };

  const handleCategoryChange = (categories: string[]) => {
    setSelectedCategories(categories);
    console.log("Categorias selecionadas:", categories);
  };

  return (
    <div className="flex h-screen w-screen flex-row">
      <SessionNavBar />
      
      <VehicleSearchHeader 
        isLoading={isLoading}
        brandOptions={brandOptions}
        categoryOptions={categoryOptions}
        selectedBrands={selectedBrands}
        selectedCategories={selectedCategories}
        onBrandChange={handleBrandChange}
        onCategoryChange={handleCategoryChange}
      />
      <VehicleSearchSidebar onClearFilters={handleClearFilters} />

      <main className="flex h-screen grow flex-col overflow-auto md:ml-12 md:mt-16 md:pl-[448px]">
        <div className="min-h-screen bg-white px-6 py-6 pb-20 md:pb-6">
          <div className="w-full">
            {/* Mobile header - only show on mobile */}
            <div className="flex items-center justify-between mb-6 md:hidden">
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" asChild>
                  <Link to="/">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Voltar
                  </Link>
                </Button>
                <h1 className="text-2xl font-bold text-gray-900">Buscar Veículos</h1>
              </div>
              {isLoading && <LoadingSpinner />}
            </div>

            <VehicleSearchControls
              sortBy={sortBy}
              setSortBy={setSortBy}
              isVertical={isVertical}
              setIsVertical={setIsVertical}
            />
            
            <VehicleSearchResults
              vehicles={vehicles}
              isVertical={isVertical}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </main>
      <BottomNavigation />
    </div>
  );
};

export default BuscadorVeiculos;
