
import { Link } from "react-router-dom";
import { ArrowLeft, User, Settings, Heart, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SessionNavBar } from "../components/SessionNavBar";
import { useAuth } from "../hooks/useAuth";
import { useFavoritesStore } from "../stores/favoritesStore";

const Perfil = () => {
  const { user, profile, logout } = useAuth();
  const { favorites } = useFavoritesStore();

  const stats = [
    {
      title: "Favoritos",
      value: favorites.length,
      icon: Heart,
      color: "text-red-500"
    },
    {
      title: "Notificações",
      value: 3,
      icon: Bell,
      color: "text-blue-500"
    }
  ];

  return (
    <div className="flex h-screen w-screen flex-row">
      <SessionNavBar />
      <main className="flex h-screen grow flex-col overflow-auto ml-12">
        <div className="bg-white px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" asChild>
                  <Link to="/">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Voltar
                  </Link>
                </Button>
                <div className="flex items-center gap-2">
                  <User className="w-8 h-8 text-blue-600" />
                  <h1 className="text-3xl font-bold text-gray-900">Meu Perfil</h1>
                </div>
              </div>
              <Button variant="outline" onClick={logout}>
                Sair
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Informações do Usuário */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Informações Pessoais
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Nome</label>
                    <p className="text-lg">{profile?.name || user?.name || 'Usuário'}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Email</label>
                    <p className="text-lg">{profile?.email || user?.email || 'email@exemplo.com'}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Telefone</label>
                    <p className="text-lg">{profile?.phone || 'Não informado'}</p>
                  </div>
                  <Button className="mt-4">
                    <Settings className="w-4 h-4 mr-2" />
                    Editar Perfil
                  </Button>
                </CardContent>
              </Card>

              {/* Estatísticas */}
              <div className="space-y-4">
                {stats.map((stat, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                          <p className="text-2xl font-bold">{stat.value}</p>
                        </div>
                        <stat.icon className={`w-8 h-8 ${stat.color}`} />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Ações Rápidas */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Ações Rápidas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button variant="outline" asChild>
                    <Link to="/favoritos/imoveis">Ver Favoritos Imóveis</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/favoritos/veiculos">Ver Favoritos Veículos</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/buscador/imoveis">Buscar Imóveis</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/buscador/veiculos">Buscar Veículos</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Perfil;
