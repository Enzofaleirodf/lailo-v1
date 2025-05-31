
import { VehicleCard } from "../components/VehicleCard";

const Index = () => {
  const vehicles = [
    {
      name: "Volkswagen T-Cross",
      color: "Preto",
      year: "2025",
      location: "Brasília - DF",
      price: "R$ 78.000",
      discount: "50% OFF",
      badges: ["Extrajudicial", "2ª Praça"],
      date: "15/05 às 10:00",
      image: "https://images.unsplash.com/photo-1549399828-28d2d062a4c7?w=400&h=300&fit=crop&auto=format"
    },
    {
      name: "Honda Civic",
      color: "Prata",
      year: "2024",
      location: "São Paulo - SP",
      price: "R$ 95.000",
      discount: "30% OFF",
      badges: ["Judicial", "1ª Praça"],
      date: "20/05 às 14:30",
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=300&fit=crop&auto=format"
    },
    {
      name: "Toyota Corolla",
      color: "Branco",
      year: "2023",
      location: "Rio de Janeiro - RJ",
      price: "R$ 89.000",
      discount: "25% OFF",
      badges: ["Extrajudicial", "3ª Praça"],
      date: "22/05 às 09:15",
      image: "https://images.unsplash.com/photo-1623869675781-80aa31012a5a?w=400&h=300&fit=crop&auto=format"
    },
    {
      name: "Hyundai HB20",
      color: "Azul",
      year: "2024",
      location: "Belo Horizonte - MG",
      price: "R$ 65.000",
      discount: "40% OFF",
      badges: ["Judicial", "2ª Praça"],
      date: "25/05 às 11:00",
      image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=400&h=300&fit=crop&auto=format"
    },
    {
      name: "Chevrolet Onix",
      color: "Vermelho",
      year: "2023",
      location: "Fortaleza - CE",
      price: "R$ 72.000",
      discount: "35% OFF",
      badges: ["Extrajudicial", "1ª Praça"],
      date: "28/05 às 16:45",
      image: "https://images.unsplash.com/photo-1494976488736-90da681ad1c0?w=400&h=300&fit=crop&auto=format"
    },
    {
      name: "Nissan Kicks",
      color: "Cinza",
      year: "2024",
      location: "Salvador - BA",
      price: "R$ 82.000",
      discount: "45% OFF",
      badges: ["Judicial", "3ª Praça"],
      date: "30/05 às 13:20",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop&auto=format"
    },
    {
      name: "Renault Sandero",
      color: "Verde",
      year: "2023",
      location: "Recife - PE",
      price: "R$ 58.000",
      discount: "55% OFF",
      badges: ["Extrajudicial", "2ª Praça"],
      date: "02/06 às 10:30",
      image: "https://images.unsplash.com/photo-1580414124179-b6480af5b65a?w=400&h=300&fit=crop&auto=format"
    },
    {
      name: "Ford Ka",
      color: "Amarelo",
      year: "2024",
      location: "Curitiba - PR",
      price: "R$ 63.000",
      discount: "38% OFF",
      badges: ["Judicial", "1ª Praça"],
      date: "05/06 às 15:10",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop&auto=format"
    },
    {
      name: "Fiat Argo",
      color: "Laranja",
      year: "2023",
      location: "Porto Alegre - RS",
      price: "R$ 69.000",
      discount: "42% OFF",
      badges: ["Extrajudicial", "3ª Praça"],
      date: "08/06 às 12:00",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop&auto=format"
    },
    {
      name: "Peugeot 208",
      color: "Roxo",
      year: "2024",
      location: "Goiânia - GO",
      price: "R$ 75.000",
      discount: "33% OFF",
      badges: ["Judicial", "2ª Praça"],
      date: "10/06 às 14:15",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=300&fit=crop&auto=format"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-4">
        {vehicles.map((vehicle, index) => (
          <VehicleCard key={index} vehicle={vehicle} />
        ))}
      </div>
    </div>
  );
};

export default Index;
