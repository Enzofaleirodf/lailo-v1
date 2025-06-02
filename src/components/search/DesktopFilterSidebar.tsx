
import React from 'react';
import { Button } from '@/components/ui/button';
import { ItemType } from '../../types/search';

interface DesktopFilterSidebarProps {
  itemType: ItemType;
  onClearFilters: () => void;
}

export const DesktopFilterSidebar = ({ itemType, onClearFilters }: DesktopFilterSidebarProps) => {
  return (
    <div className="hidden md:block fixed left-12 top-16 w-[448px] h-[calc(100vh-4rem)] bg-white border-r border-gray-200 z-30 overflow-y-auto">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Filtros</h2>
          <Button 
            variant="ghost" 
            className="text-sm text-gray-600 hover:text-gray-800 p-0 h-auto font-normal"
            onClick={onClearFilters}
          >
            Resetar filtros
          </Button>
        </div>

        <div className="space-y-8">
          {/* Filtro de Localização */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Localização</h3>
            <div className="space-y-3">
              <div className="p-4 border border-gray-200 rounded-lg text-center text-gray-500">
                <p className="text-sm">Filtros de localização</p>
                <p className="text-xs text-gray-400">Estado, Cidade, Endereço</p>
              </div>
            </div>
          </div>

          {/* Filtro de Categoria */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">
              {itemType === 'property' ? 'Categoria do Imóvel' : 'Categoria do Veículo'}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {itemType === 'property' ? (
                <>
                  <div className="p-4 border border-gray-200 rounded-lg text-center text-gray-500">
                    <p className="text-xs">Residenciais</p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg text-center text-gray-500">
                    <p className="text-xs">Comerciais</p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg text-center text-gray-500">
                    <p className="text-xs">Rurais</p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg text-center text-gray-500">
                    <p className="text-xs">Industriais</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="p-4 border border-gray-200 rounded-lg text-center text-gray-500">
                    <p className="text-xs">Leves</p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg text-center text-gray-500">
                    <p className="text-xs">Pesados</p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg text-center text-gray-500">
                    <p className="text-xs">Máquinas</p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg text-center text-gray-500">
                    <p className="text-xs">Recreação</p>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Filtro de Tipo */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Tipo</h3>
            <div className="p-4 border border-gray-200 rounded-lg text-center text-gray-500">
              <p className="text-sm">Filtros de tipo</p>
              <p className="text-xs text-gray-400">Chips de seleção múltipla</p>
            </div>
          </div>

          {/* Filtros de faixa numérica */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">
              {itemType === 'property' ? 'Área Útil' : 'Ano do Veículo'}
            </h3>
            <div className="p-4 border border-gray-200 rounded-lg text-center text-gray-500">
              <p className="text-sm">Slider com dois thumbs</p>
              <p className="text-xs text-gray-400">Inputs sincronizados</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Valor do Lance</h3>
            <div className="p-4 border border-gray-200 rounded-lg text-center text-gray-500">
              <p className="text-sm">Slider com dois thumbs</p>
              <p className="text-xs text-gray-400">R$ mín - R$ máx</p>
            </div>
          </div>

          {itemType === 'vehicle' && (
            <>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Marca e Modelo</h3>
                <div className="space-y-2">
                  <div className="p-3 border border-gray-200 rounded-lg text-center text-gray-500">
                    <p className="text-xs">Marca (Combobox)</p>
                  </div>
                  <div className="p-3 border border-gray-200 rounded-lg text-center text-gray-500">
                    <p className="text-xs">Modelo (Combobox)</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Cor</h3>
                <div className="p-4 border border-gray-200 rounded-lg text-center text-gray-500">
                  <p className="text-sm">Select com cores</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
