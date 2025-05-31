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
      image: "/lovable-uploads/c1eac822-7357-49b8-a4ce-a14e374e1167.png"
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
      image: "/lovable-uploads/33a5ac35-f888-4a6f-9cc8-dffa1f394b1e.png"
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
      image: "/lovable-uploads/4ee96d84-707d-45b1-83a8-50e28cd8f583.png"
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
      image: "/lovable-uploads/6dabef41-e24e-404d-a5d9-8b0735f0dd33.png"
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
      image: "/lovable-uploads/3abaaf79-72ae-4e03-87ad-488329f5e234.png"
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
      image: "/lovable-uploads/48c2a9c3-fb59-4a44-a931-b3f36f6891fc.png"
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
      image: "/lovable-uploads/a72eb3d0-1625-45e6-8bf5-96615cf0e02a.png"
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
      image: "/lovable-uploads/24ecc65e-f63a-4f13-95f6-d90060a463fe.png"
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
      image: "/lovable-uploads/f1af3d89-585e-47cd-bdbc-3a7e7a550815.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center px-4">
      <div className="w-full max-w-md space-y-4">
        {vehicles.map((vehicle, index) => (
          <VehicleCard key={index} vehicle={vehicle} />
        ))}
      </div>
    </div>
  );
};

export default Index;
