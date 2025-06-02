
import { useState } from "react";
import { VehicleCard } from "../components/VehicleCard";
import { VehicleSearchHeader } from "../components/VehicleSearchHeader";
import { LayoutToggle } from "../components/LayoutToggle";

const BuscadorVeiculos = () => {
  const [isVertical, setIsVertical] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const brandOptions = [
    { label: "Volkswagen", value: "volkswagen" },
    { label: "Honda", value: "honda" },
    { label: "Toyota", value: "toyota" },
    { label: "Ford", value: "ford" }
  ];

  const categoryOptions = [
    { label: "Sedan", value: "sedan" },
    { label: "SUV", value: "suv" },
    { label: "Hatch", value: "hatch" },
    { label: "Pickup", value: "pickup" }
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
    }
  ];

  const handleBrandChange = (brands: string[]) => {
    setSelectedBrands(brands);
  };

  const handleCategoryChange = (categories: string[]) => {
    setSelectedCategories(categories);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <VehicleSearchHeader 
        isLoading={isLoading}
        brandOptions={brandOptions}
        categoryOptions={categoryOptions}
        selectedBrands={selectedBrands}
        selectedCategories={selectedCategories}
        onBrandChange={handleBrandChange}
        onCategoryChange={handleCategoryChange}
      />

      <div className="container mx-auto px-4 py-8 pt-24">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Buscar Veículos
        </h1>

        <LayoutToggle isVertical={isVertical} onToggle={setIsVertical} />
        
        <div className={`${isVertical ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}`}>
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} isVertical={isVertical} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuscadorVeiculos;
