
import React from 'react';
import { BasePageLayout } from './BasePageLayout';

interface ContentPageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  titleIcon?: React.ComponentType<{ className?: string }>;
  headerActions?: React.ReactNode;
  showFilters?: boolean;
  filtersContent?: React.ReactNode;
}

export const ContentPageLayout = ({ 
  children, 
  title,
  subtitle,
  titleIcon: TitleIcon,
  headerActions,
  showFilters = false,
  filtersContent
}: ContentPageLayoutProps) => {
  return (
    <BasePageLayout>
      <div className="w-full max-w-6xl mx-auto">
        {/* Header padronizado */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {TitleIcon && <TitleIcon className="w-8 h-8 text-blue-600" />}
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
                {subtitle && (
                  <p className="text-gray-600 mt-1">{subtitle}</p>
                )}
              </div>
            </div>
            {headerActions && (
              <div className="flex items-center gap-2">
                {headerActions}
              </div>
            )}
          </div>
        </div>

        {/* Filtros padronizados (quando necessário) */}
        {showFilters && filtersContent && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            {filtersContent}
          </div>
        )}

        {/* Conteúdo principal */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          {children}
        </div>
      </div>
    </BasePageLayout>
  );
};
