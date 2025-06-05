
import { SessionNavBar } from "../components/navigation/SessionNavBar";
import { SimpleMobileNav } from "../components/navigation/SimpleMobileNav";

const Index = () => {
  return (
    <div className="w-full relative min-h-screen bg-white">
      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="max-w-[1440px] mx-auto w-full relative min-h-screen bg-white">
          <SessionNavBar />
          <main className="ml-12 min-h-screen flex flex-col">
            <div className="flex-1 flex items-center justify-center px-6">
              <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">Em construção</h1>
                <p className="text-gray-600">Em breve uma Lailo para você</p>
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
          
          <SimpleMobileNav />
        </div>
      </div>
    </div>
  );
};

export default Index;
