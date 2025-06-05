
import React from 'react';
import { BasePageLayout } from './BasePageLayout';

interface ContentPageLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  titleIcon?: React.ComponentType<{
    className?: string;
  }>;
  headerActions?: React.ReactNode;
  showFilters?: boolean;
  filtersContent?: React.ReactNode;
  showHeader?: boolean;
  containerClass?: string;
  contentClass?: string;
}

export const ContentPageLayout = ({
  children,
  title,
  subtitle,
  titleIcon: TitleIcon,
  headerActions,
  showFilters = false,
  filtersContent,
  showHeader = true,
  containerClass = "w-full max-w-[1440px] mx-auto",
  contentClass = "bg-white md:rounded-lg md:shadow-sm md:border md:border-gray-200 p-3 md:p-6 md:mx-6 min-h-[400px]"
}: ContentPageLayoutProps) => {
  return (
    <BasePageLayout containerClass="p-0">
      <div className={containerClass}>
        {/* Header padronizado - desktop apenas */}
        {showHeader && title && (
          <div className="hidden md:block mb-8 px-6 pt-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {TitleIcon && <TitleIcon className="w-8 h-8 text-blue-600" />}
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
                  {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
                </div>
              </div>
              {headerActions && (
                <div className="flex items-center gap-2">
                  {headerActions}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Filtros padronizados */}
        {showFilters && filtersContent && (
          <div className="bg-white md:rounded-lg md:shadow-sm md:border md:border-gray-200 p-3 md:p-6 mb-6 md:mx-6">
            {filtersContent}
          </div>
        )}

        {/* Conteúdo principal */}
        <div className={contentClass}>
          {children}
        </div>
      </div>
    </BasePageLayout>
  );
};
