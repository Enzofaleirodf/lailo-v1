
import { SessionNavBar } from "../components/SessionNavBar";
import { BottomNavigation } from "../components/BottomNavigation";

const Index = () => {
  return (
    <div className="max-w-[1440px] mx-auto w-full relative min-h-screen bg-white">
      <SessionNavBar />
      <main className="ml-12 min-h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Bem-vindo ao Buscador de Leilões
            </h1>
            <p className="text-gray-600">
              Use o menu de navegação para acessar os leilões de imóveis e veículos
            </p>
          </div>
        </div>
      </main>
      <BottomNavigation />
    </div>
  );
};

export default Index;
