
import React, { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AlertForm } from "../../components/alerts/AlertForm";
import { AlertsList } from "../../components/alerts/AlertsList";
import { NotificationSettings } from "../../components/alerts/NotificationSettings";
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
  
  const [isCreating, setIsCreating] = useState(false);
  const [editingAlert, setEditingAlert] = useState<Alert | undefined>();

  const handleCreateAlert = () => {
    setEditingAlert(undefined);
    setIsCreating(true);
  };

  const handleEditAlert = (alert: Alert) => {
    setEditingAlert(alert);
    setIsCreating(true);
  };

  const handleCancel = () => {
    setIsCreating(false);
    setEditingAlert(undefined);
  };

  const handleSave = (name: string, type: 'property' | 'vehicle', filters: AlertFilters) => {
    if (editingAlert) {
      updateAlert(editingAlert.id, { name, type, filters });
    } else {
      createAlert(name, type, filters);
    }
    
    showSuccess(
      editingAlert ? 'Alerta atualizado!' : 'Alerta criado!',
      'Você será notificado sobre leilões que correspondam aos seus filtros.'
    );
    
    handleCancel();
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

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Header com ação */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg md:text-xl font-bold text-gray-900">Meus Alertas</h2>
          <p className="text-sm text-gray-600">Receba notificações sobre leilões do seu interesse</p>
        </div>
        {!isCreating && (
          <Button size="sm" onClick={handleCreateAlert}>
            <Plus className="w-4 h-4 mr-2" />
            Novo
          </Button>
        )}
      </div>

      {/* Formulário de criação/edição */}
      {isCreating && (
        <AlertForm
          editingAlert={editingAlert}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}

      {/* Preferências de Notificação */}
      <NotificationSettings
        settings={notificationSettings}
        onUpdateSettings={updateNotificationSettings}
      />

      {/* Lista de Alertas */}
      <AlertsList
        alerts={alerts}
        onCreateAlert={handleCreateAlert}
        onEditAlert={handleEditAlert}
        onDeleteAlert={handleDeleteAlert}
        onToggleAlert={handleToggleAlert}
        formatFiltersForDisplay={formatFiltersForDisplay}
      />
    </div>
  );
};

export default ConfiguracoesAlertas;
