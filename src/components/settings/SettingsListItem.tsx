
import React from 'react';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

interface SettingsListItemProps {
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
    variant?: 'default' | 'outline' | 'destructive';
    icon?: LucideIcon;
  };
  icon?: LucideIcon;
  className?: string;
  children?: React.ReactNode;
}

export const SettingsListItem = ({
  title,
  description,
  action,
  icon: Icon,
  className = "",
  children
}: SettingsListItemProps) => {
  return (
    <div className={`flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 transition-colors ${className}`}>
      <div className="flex items-start gap-3 flex-1">
        {Icon && (
          <div className="mt-0.5">
            <Icon className="w-5 h-5 text-gray-600" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-gray-900 text-sm sm:text-base">{title}</h3>
          <p className="text-xs sm:text-sm text-gray-600 mt-0.5">{description}</p>
          {children}
        </div>
      </div>
      {action && (
        <Button
          variant={action.variant || 'outline'}
          size="sm"
          onClick={action.onClick}
          className="ml-3 shrink-0"
        >
          {action.icon && <action.icon className="w-4 h-4 mr-1" />}
          {action.label}
        </Button>
      )}
    </div>
  );
};
