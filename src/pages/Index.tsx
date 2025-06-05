
import { SessionNavBar } from "../components/SessionNavBar";
import { BottomNavigation } from "../components/BottomNavigation";
const Index = () => {
  return <div className="w-full relative min-h-screen bg-white">
      {/* Desktop Layout */}
      <div className="hidden md:block">
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
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden">
        <div className="w-full min-h-screen bg-white">
          <main className="w-full min-h-screen flex flex-col px-3 pb-20">
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">Em construção</h1>
                <p className="text-gray-600">Em breve uma Lailo para você</p>
              </div>
            </div>
          </main>
          
          <div className="fixed bottom-0 left-0 right-0 z-50">
            <BottomNavigation />
          </div>
        </div>
      </div>
    </div>;
};
export default Index;
