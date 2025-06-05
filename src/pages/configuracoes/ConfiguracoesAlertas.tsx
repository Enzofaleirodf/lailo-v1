
import { Bell, Plus, Trash2, Settings as SettingsIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { SettingsCard } from "../../components/settings/SettingsCard";
import { SettingsListItem } from "../../components/settings/SettingsListItem";

const ConfiguracoesAlertas = () => {
  const alertas = [
    {
      id: 1,
      nome: "Imóveis em São Paulo",
      tipo: "Imóveis",
      filtros: "São Paulo, Comercial, R$ 100k - R$ 500k",
      ativo: true
    },
    {
      id: 2,
      nome: "Carros Honda",
      tipo: "Veículos", 
      filtros: "Honda, 2018-2023, São Paulo",
      ativo: false
    }
  ];

  const notificationSettings = [
    {
      id: 'email',
      title: 'Email',
      description: 'Receber alertas por email',
      enabled: true
    },
    {
      id: 'push',
      title: 'Push',
      description: 'Notificações no navegador',
      enabled: false
    },
    {
      id: 'frequency',
      title: 'Limite Diário',
      description: 'Máximo de 1 email por dia',
      enabled: true
    }
  ];

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Header com ação */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg md:text-xl font-bold text-gray-900">Meus Alertas</h2>
          <p className="text-sm text-gray-600">Receba notificações sobre leilões do seu interesse</p>
        </div>
        <Button size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Novo
        </Button>
      </div>

      {/* Preferências de Notificação */}
      <SettingsCard
        title="Preferências de Notificação"
        description="Como você quer receber os alertas"
        icon={SettingsIcon}
      >
        <div className="space-y-4">
          {notificationSettings.map((setting) => (
            <div key={setting.id} className="flex items-center justify-between">
              <div>
                <p className="font-medium text-sm text-gray-900">{setting.title}</p>
                <p className="text-xs text-gray-600">{setting.description}</p>
              </div>
              <Switch defaultChecked={setting.enabled} />
            </div>
          ))}
        </div>
      </SettingsCard>

      {/* Lista de Alertas */}
      <SettingsCard title="Alertas Criados" description="Gerencie seus alertas ativos" icon={Bell}>
        {alertas.length === 0 ? (
          <div className="text-center py-8">
            <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 mb-2">Nenhum alerta criado</p>
            <p className="text-sm text-gray-500 mb-4">
              Crie alertas para ser notificado sobre leilões do seu interesse
            </p>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Criar Primeiro Alerta
            </Button>
          </div>
        ) : (
          <div className="space-y-3">
            {alertas.map((alerta) => (
              <div key={alerta.id} className="p-4 border border-gray-200 rounded-lg bg-white">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium text-sm text-gray-900 truncate">{alerta.nome}</h3>
                      <Badge variant={alerta.ativo ? "default" : "secondary"} className="text-xs">
                        {alerta.ativo ? "Ativo" : "Pausado"}
                      </Badge>
                    </div>
                    <p className="text-xs text-blue-600 mb-1">{alerta.tipo}</p>
                    <p className="text-xs text-gray-500 line-clamp-2">{alerta.filtros}</p>
                  </div>
                  <div className="flex items-center gap-2 ml-3">
                    <Switch defaultChecked={alerta.ativo} />
                  </div>
                </div>
                <div className="flex gap-2 pt-2 border-t border-gray-100">
                  <Button variant="outline" size="sm" className="flex-1">
                    Editar
                  </Button>
                  <Button variant="outline" size="sm">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </SettingsCard>
    </div>
  );
};

export default ConfiguracoesAlertas;
