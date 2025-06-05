
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  iconColor?: string;
  trend?: {
    value: string;
    isPositive: boolean;
  };
}

export const StatCard = ({ 
  title, 
  value, 
  icon: Icon, 
  iconColor = "text-blue-500",
  trend 
}: StatCardProps) => {
  return (
    <div className="bg-white p-4 border border-gray-200 rounded-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs sm:text-sm font-medium text-gray-500 mb-1">{title}</p>
          <p className="text-xl sm:text-2xl font-bold text-gray-900">{value}</p>
          {trend && (
            <p className={`text-xs mt-1 ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {trend.value}
            </p>
          )}
        </div>
        <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${iconColor} shrink-0`} />
      </div>
    </div>
  );
};
