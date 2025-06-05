
import React from 'react';
import { Bell } from 'lucide-react';
import { Badge } from '../ui/badge';
import { AlertFilters } from '../../types/alert';

interface AlertPreviewProps {
  name: string;
  type: 'property' | 'vehicle';
  filters: AlertFilters;
  filtersDisplay: string;
}

export const AlertPreview = ({ name, type, filtersDisplay }: AlertPreviewProps) => {
  return (
    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-blue-100 rounded-lg">
          <Bell className="w-4 h-4 text-blue-600" />
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-gray-900 mb-1">Preview do Alerta</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-medium text-sm text-gray-900">{name}</span>
              <Badge variant={type === 'property' ? 'default' : 'secondary'} className="text-xs">
                {type === 'property' ? 'Imóveis' : 'Veículos'}
              </Badge>
            </div>
            <p className="text-sm text-gray-600">{filtersDisplay}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
