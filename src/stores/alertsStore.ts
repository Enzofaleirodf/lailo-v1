
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Alert, AlertFilters, NotificationSettings } from '../types/alert';

interface AlertsStore {
  alerts: Alert[];
  notificationSettings: NotificationSettings;
  
  // Actions
  createAlert: (name: string, type: 'property' | 'vehicle', filters: AlertFilters) => void;
  updateAlert: (id: string, updates: Partial<Omit<Alert, 'id' | 'createdAt'>>) => void;
  deleteAlert: (id: string) => void;
  toggleAlert: (id: string) => void;
  updateNotificationSettings: (settings: Partial<NotificationSettings>) => void;
  getAlert: (id: string) => Alert | undefined;
}

export const useAlertsStore = create<AlertsStore>()(
  persist(
    (set, get) => ({
      alerts: [],
      notificationSettings: {
        site: true,
        whatsapp: false,
      },

      createAlert: (name, type, filters) => {
        const newAlert: Alert = {
          id: crypto.randomUUID(),
          name,
          type,
          filters,
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        };

        set(state => ({
          alerts: [...state.alerts, newAlert]
        }));
      },

      updateAlert: (id, updates) => {
        set(state => ({
          alerts: state.alerts.map(alert =>
            alert.id === id
              ? { ...alert, ...updates, updatedAt: new Date() }
              : alert
          )
        }));
      },

      deleteAlert: (id) => {
        set(state => ({
          alerts: state.alerts.filter(alert => alert.id !== id)
        }));
      },

      toggleAlert: (id) => {
        set(state => ({
          alerts: state.alerts.map(alert =>
            alert.id === id
              ? { ...alert, active: !alert.active, updatedAt: new Date() }
              : alert
          )
        }));
      },

      updateNotificationSettings: (settings) => {
        set(state => ({
          notificationSettings: { ...state.notificationSettings, ...settings }
        }));
      },

      getAlert: (id) => {
        return get().alerts.find(alert => alert.id === id);
      },
    }),
    {
      name: 'alerts-storage',
    }
  )
);
