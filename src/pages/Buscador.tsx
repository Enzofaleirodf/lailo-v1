
import { Link } from "react-router-dom";
import { Car, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Buscador = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-8 max-w-[1440px] mx-auto">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Buscador</h1>
          <p className="text-lg text-gray-600">Escolha o que você está procurando</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Card Veículos */}
          <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-500">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <Car className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">Veículos</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-6">
                Encontre carros, motos e outros veículos em leilões
              </p>
              <Button asChild className="w-full">
                <Link to="/veiculos">
                  Buscar Veículos
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Card Imóveis */}
          <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-green-500">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                <Home className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">Imóveis</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-6">
                Encontre casas, apartamentos e terrenos em leilões
              </p>
              <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                <Link to="/imoveis">
                  Buscar Imóveis
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" asChild>
            <Link to="/">
              Voltar ao Início
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Buscador;
