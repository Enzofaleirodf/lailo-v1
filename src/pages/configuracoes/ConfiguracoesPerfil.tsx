
import { User, Settings, Heart, Bell, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "../../hooks/useAuth";
import { useFavoritesStore } from "../../stores/favoritesStore";

const ConfiguracoesPerfil = () => {
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
    <div className="space-y-6">
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

      {/* Ações da Conta */}
      <Card>
        <CardHeader>
          <CardTitle>Ações da Conta</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h3 className="font-medium">Alterar Senha</h3>
                <p className="text-sm text-gray-600">Atualize sua senha de acesso</p>
              </div>
              <Button variant="outline">
                Alterar
              </Button>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h3 className="font-medium">Sair da Conta</h3>
                <p className="text-sm text-gray-600">Fazer logout do sistema</p>
              </div>
              <Button variant="outline" onClick={logout}>
                Sair
              </Button>
            </div>

            <div className="flex items-center justify-between p-4 border border-red-200 rounded-lg bg-red-50">
              <div>
                <h3 className="font-medium text-red-800">Excluir Conta</h3>
                <p className="text-sm text-red-600">Esta ação não pode ser desfeita</p>
              </div>
              <Button variant="destructive">
                <Trash2 className="w-4 h-4 mr-2" />
                Excluir
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConfiguracoesPerfil;
