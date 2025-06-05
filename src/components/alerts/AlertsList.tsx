
import React from 'react';
import { Bell, Edit, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
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
} from '@/components/ui/alert-dialog';
import { SettingsCard } from '../settings/SettingsCard';
import { Alert } from '../../types/alert';

interface AlertsListProps {
  alerts: Alert[];
  onCreateAlert: () => void;
  onEditAlert: (alert: Alert) => void;
  onDeleteAlert: (alertId: string) => void;
  onToggleAlert: (alertId: string) => void;
  formatFiltersForDisplay: (filters: any, type: string) => string;
}

export const AlertsList = ({
  alerts,
  onCreateAlert,
  onEditAlert,
  onDeleteAlert,
  onToggleAlert,
  formatFiltersForDisplay
}: AlertsListProps) => {
  return (
    <SettingsCard title="Alertas Criados" description="Gerencie seus alertas ativos" icon={Bell}>
      {alerts.length === 0 ? (
        <div className="text-center py-8">
          <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 mb-2">Nenhum alerta criado</p>
          <p className="text-sm text-gray-500 mb-4">
            Crie alertas para ser notificado sobre leilões do seu interesse
          </p>
          <Button onClick={onCreateAlert}>
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
                    onCheckedChange={() => onToggleAlert(alert.id)}
                  />
                </div>
              </div>
              <div className="flex gap-2 pt-2 border-t border-gray-100">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  onClick={() => onEditAlert(alert)}
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
                        onClick={() => onDeleteAlert(alert.id)}
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
  );
};
