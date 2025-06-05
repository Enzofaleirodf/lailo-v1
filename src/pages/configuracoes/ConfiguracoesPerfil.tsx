
import { User, Settings, Heart, Bell, Trash2, Shield, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "../../hooks/useAuth";
import { useFavoritesStore } from "../../stores/favoritesStore";
import { SettingsCard } from "../../components/settings/SettingsCard";
import { SettingsListItem } from "../../components/settings/SettingsListItem";
import { StatCard } from "../../components/settings/StatCard";

const ConfiguracoesPerfil = () => {
  const { user, profile, logout } = useAuth();
  const { favorites } = useFavoritesStore();

  const stats = [
    {
      title: "Favoritos",
      value: favorites.length,
      icon: Heart,
      iconColor: "text-red-500"
    },
    {
      title: "Alertas Ativos",
      value: 3,
      icon: Bell,
      iconColor: "text-blue-500"
    }
  ];

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Estatísticas */}
      <div className="grid grid-cols-2 gap-3 md:gap-4">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            iconColor={stat.iconColor}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {/* Informações do Usuário */}
        <SettingsCard
          title="Informações Pessoais"
          description="Seus dados de cadastro"
          icon={User}
        >
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs sm:text-sm font-medium text-gray-500">Nome</label>
                <p className="text-sm sm:text-base font-medium text-gray-900 mt-1">
                  {profile?.name || user?.name || 'Usuário'}
                </p>
              </div>
              <div>
                <label className="text-xs sm:text-sm font-medium text-gray-500">Email</label>
                <p className="text-sm sm:text-base text-gray-900 mt-1 break-all">
                  {profile?.email || user?.email || 'email@exemplo.com'}
                </p>
              </div>
            </div>
            <div>
              <label className="text-xs sm:text-sm font-medium text-gray-500">Telefone</label>
              <p className="text-sm sm:text-base text-gray-900 mt-1">
                {profile?.phone || 'Não informado'}
              </p>
            </div>
            <Button size="sm" className="w-full sm:w-auto">
              <Settings className="w-4 h-4 mr-2" />
              Editar Perfil
            </Button>
          </div>
        </SettingsCard>

        {/* Segurança da Conta */}
        <SettingsCard title="Segurança da Conta" description="Configurações de segurança e acesso">
          <div className="space-y-3">
            <SettingsListItem
              icon={Shield}
              title="Alterar Senha"
              description="Atualize sua senha de acesso"
              action={{
                label: "Alterar",
                onClick: () => console.log('Alterar senha'),
                variant: "outline"
              }}
            />
            
            <SettingsListItem
              icon={LogOut}
              title="Sair da Conta"
              description="Fazer logout do sistema"
              action={{
                label: "Sair",
                onClick: logout,
                variant: "outline"
              }}
            />
            
            <SettingsListItem
              icon={Trash2}
              title="Excluir Conta"
              description="Esta ação não pode ser desfeita"
              className="border-red-200 bg-red-50"
              action={{
                label: "Excluir",
                onClick: () => console.log('Excluir conta'),
                variant: "destructive",
                icon: Trash2
              }}
            />
          </div>
        </SettingsCard>
      </div>
    </div>
  );
};

export default ConfiguracoesPerfil;
