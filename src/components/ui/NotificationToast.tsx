
import React from "react";
import { toast } from "@/hooks/use-toast";
import { CheckCircle, XCircle, AlertCircle, Info } from "lucide-react";

type ToastType = 'success' | 'error' | 'warning' | 'info';

interface NotificationConfig {
  title: string;
  description?: string;
  type?: ToastType;
  duration?: number;
}

const icons = {
  success: CheckCircle,
  error: XCircle,
  warning: AlertCircle,
  info: Info,
};

const colors = {
  success: "text-green-600",
  error: "text-red-600",
  warning: "text-yellow-600",
  info: "text-blue-600",
};

export const showNotification = ({
  title,
  description,
  type = 'info',
  duration = 3000
}: NotificationConfig) => {
  const Icon = icons[type];
  
  toast({
    title,
    description: description ? (
      <div className="flex items-center gap-2">
        <Icon className={`h-4 w-4 ${colors[type]}`} />
        <span>{description}</span>
      </div>
    ) : (
      <div className="flex items-center gap-2">
        <Icon className={`h-4 w-4 ${colors[type]}`} />
      </div>
    ),
    duration,
  });
};

// Funções de conveniência
export const showSuccess = (title: string, description?: string) => 
  showNotification({ title, description, type: 'success' });

export const showError = (title: string, description?: string) => 
  showNotification({ title, description, type: 'error' });

export const showWarning = (title: string, description?: string) => 
  showNotification({ title, description, type: 'warning' });

export const showInfo = (title: string, description?: string) => 
  showNotification({ title, description, type: 'info' });
