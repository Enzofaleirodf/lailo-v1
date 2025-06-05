
import React from 'react';
import { Check, X } from 'lucide-react';

interface Feature {
  name: string;
  included: boolean;
  description?: string;
}

interface FeatureListProps {
  features: Feature[];
  className?: string;
}

export const FeatureList = ({ features, className = "" }: FeatureListProps) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {features.map((feature, index) => (
        <div key={index} className="flex items-start gap-2">
          <div className="mt-0.5 shrink-0">
            {feature.included ? (
              <Check className="w-4 h-4 text-green-600" />
            ) : (
              <X className="w-4 h-4 text-red-500" />
            )}
          </div>
          <div className="min-w-0">
            <span className={`text-sm ${feature.included ? 'text-gray-900' : 'text-gray-500'}`}>
              {feature.name}
            </span>
            {feature.description && (
              <p className="text-xs text-gray-500 mt-0.5">{feature.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
