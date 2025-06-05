
import React from 'react';
import { Settings as SettingsIcon } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { SettingsCard } from '../settings/SettingsCard';
import { NotificationSettings as NotificationSettingsType } from '../../types/alert';

interface NotificationSettingsProps {
  settings: NotificationSettingsType;
  onUpdateSettings: (settings: Partial<NotificationSettingsType>) => void;
}

export const NotificationSettings = ({ settings, onUpdateSettings }: NotificationSettingsProps) => {
  const notificationSettingsData = [
    {
      id: 'site',
      title: 'No Site',
      description: 'Receber notificações no site',
      enabled: settings.site
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp',
      description: 'Receber alertas via WhatsApp',
      enabled: settings.whatsapp
    }
  ];

  return (
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
                onUpdateSettings({ [setting.id]: checked })
              }
            />
          </div>
        ))}
      </div>
    </SettingsCard>
  );
};
