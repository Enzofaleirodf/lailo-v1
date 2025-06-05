
import React, { useState } from "react";
import { Bell, Plus, Trash2, Settings as SettingsIcon, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { SettingsCard } from "../../components/settings/SettingsCard";
import { AlertModal } from "../../components/alerts/AlertModal";
import { useAlertsStore } from "../../stores/alertsStore";
import { useAlerts } from "../../hooks/useAlerts";
import { Alert, AlertFilters } from "../../types/alert";
import { showSuccess } from "../../components/ui/NotificationToast";

const ConfiguracoesAlertas = () => {
  const {
    alerts,
    notificationSettings,
    createAlert,
    updateAlert,
    deleteAlert,
    toggleAlert,
    updateNotificationSettings,
  } = useAlertsStore();

  const { formatFiltersForDisplay } = useAlerts();
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAlert, setEditingAlert] = useState<Alert | undefined>();

  const handleCreateAlert = () => {
    setEditingAlert(undefined);
    setIsModalOpen(true);
  };

  const handleEditAlert = (alert: Alert) => {
    setEditingAlert(alert);
    setIsModalOpen(true);
  };

  const handleSaveAlert = (name: string, type: 'property' | 'vehicle', filters: AlertFilters) => {
    if (editingAlert) {
      updateAlert(editingAlert.id, { name, type, filters });
    } else {
      createAlert(name, type, filters);
    }
  };

  const handleDeleteAlert = (alertId: string) => {
    deleteAlert(alertId);
    showSuccess('Alerta excluído', 'O alerta foi removido com sucesso.');
  };

  const handleToggleAlert = (alertId: string) => {
    toggleAlert(alertId);
    const alert = alerts.find(a => a.id === alertId);
    showSuccess(
      alert?.active ? 'Alerta pausado' : 'Alerta ativado',
      alert?.active ? 'Você não receberá mais notificações.' : 'Você voltará a receber notificações.'
    );
  };

  const notificationSettingsData = [
    {
      id: 'site',
      title: 'No Site',
      description: 'Receber notificações no site',
      enabled: notificationSettings.site
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp',
      description: 'Receber alertas via WhatsApp',
      enabled: notificationSettings.whatsapp
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
        <Button size="sm" onClick={handleCreateAlert}>
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
          {notificationSettingsData.map((setting) => (
            <div key={setting.id} className="flex items-center justify-between">
              <div>
                <p className="font-medium text-sm text-gray-900">{setting.title}</p>
                <p className="text-xs text-gray-600">{setting.description}</p>
              </div>
              <Switch 
                checked={setting.enabled}
                onCheckedChange={(checked) => 
                  updateNotificationSettings({ [setting.id]: checked })
                }
              />
            </div>
          ))}
        </div>
      </SettingsCard>

      {/* Lista de Alertas */}
      <SettingsCard title="Alertas Criados" description="Gerencie seus alertas ativos" icon={Bell}>
        {alerts.length === 0 ? (
          <div className="text-center py-8">
            <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 mb-2">Nenhum alerta criado</p>
            <p className="text-sm text-gray-500 mb-4">
              Crie alertas para ser notificado sobre leilões do seu interesse
            </p>
            <Button onClick={handleCreateAlert}>
              <Plus className="w-4 h-4 mr-2" />
              Criar Primeiro Alerta
            </Button>
          </div>
        ) : (
          <div className="space-y-3">
            {alerts.map((alert) => (
              <div key={alert.id} className="p-4 border border-gray-200 rounded-lg bg-white">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium text-sm text-gray-900 truncate">{alert.name}</h3>
                      <Badge variant={alert.active ? "default" : "secondary"} className="text-xs">
                        {alert.active ? "Ativo" : "Pausado"}
                      </Badge>
                    </div>
                    <p className="text-xs text-blue-600 mb-1">
                      {alert.type === 'property' ? 'Imóveis' : 'Veículos'}
                    </p>
                    <p className="text-xs text-gray-500 line-clamp-2">
                      {formatFiltersForDisplay(alert.filters, alert.type)}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 ml-3">
                    <Switch 
                      checked={alert.active}
                      onCheckedChange={() => handleToggleAlert(alert.id)}
                    />
                  </div>
                </div>
                <div className="flex gap-2 pt-2 border-t border-gray-100">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => handleEditAlert(alert)}
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    Editar
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Excluir Alerta</AlertDialogTitle>
                        <AlertDialogDescription>
                          Tem certeza que deseja excluir o alerta "{alert.name}"? 
                          Esta ação não pode ser desfeita.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                        <AlertDialogAction 
                          onClick={() => handleDeleteAlert(alert.id)}
                          className="bg-red-600 hover:bg-red-700"
                        >
                          Excluir
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            ))}
          </div>
        )}
      </SettingsCard>

      {/* Modal de Criação/Edição */}
      <AlertModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveAlert}
        editingAlert={editingAlert}
      />
    </div>
  );
};

export default ConfiguracoesAlertas;
