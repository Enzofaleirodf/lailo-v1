import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '../ui/sheet';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { SegmentedControl } from '../ui/segmented-control';
import { X } from 'lucide-react';
import { StateSelect } from '../search/location/StateSelect';
import { CitySelect } from '../search/location/CitySelect';
import { CategoryTypeFilters } from '../filters/CategoryTypeFilters';
import { FormatFilter } from '../search/FormatFilter';
import { OriginFilter } from '../search/OriginFilter';
import { StageFilter } from '../search/StageFilter';
import { PriceFilter } from '../filters/PriceFilter';
import { PropertySpecificFilters } from '../filters/PropertySpecificFilters';
import { VehicleSpecificFilters } from '../filters/VehicleSpecificFilters';
import { AlertPreview } from './AlertPreview';
import { Alert, AlertFilters } from '../../types/alert';
import { useAlerts } from '../../hooks/useAlerts';
import { showSuccess, showError } from '../ui/NotificationToast';

const alertSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório').max(50, 'Nome deve ter no máximo 50 caracteres'),
});

interface AlertSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (name: string, type: 'property' | 'vehicle', filters: AlertFilters) => void;
  editingAlert?: Alert;
}

export const AlertSheet = ({ isOpen, onClose, onSave, editingAlert }: AlertSheetProps) => {
  const [alertType, setAlertType] = useState<'property' | 'vehicle'>('property');
  const [filters, setFilters] = useState<AlertFilters>({});
  const { validateAlert, formatFiltersForDisplay } = useAlerts();

  // Form states
  const [category, setCategory] = useState(alertType === 'property' ? 'residenciais' : 'leves');
  const [type, setType] = useState(alertType === 'property' ? 'todos' : 'carros');
  const [formatValue, setFormatValue] = useState('Leilão');
  const [areaRange, setAreaRange] = useState<[number, number]>([50, 500]);
  const [yearRange, setYearRange] = useState<[number, number]>([2010, 2025]);
  const [priceRange, setPriceRange] = useState<[number, number]>([50000, 1000000]);
  const [brand, setBrand] = useState('todas-marcas');
  const [model, setModel] = useState('todos-modelos');
  const [color, setColor] = useState('todas-cores');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(alertSchema),
    defaultValues: {
      name: '',
    },
  });

  const alertName = watch('name');

  // Reset form when modal opens/closes or editing alert changes
  useEffect(() => {
    if (isOpen) {
      if (editingAlert) {
        setValue('name', editingAlert.name);
        setAlertType(editingAlert.type);
        setFilters(editingAlert.filters);
        
        // Set form states from existing alert
        setCategory(editingAlert.filters.propertyCategory || editingAlert.filters.vehicleCategory || (editingAlert.type === 'property' ? 'residenciais' : 'leves'));
        setType(editingAlert.filters.propertyType || editingAlert.filters.vehicleType || (editingAlert.type === 'property' ? 'todos' : 'carros'));
        setSelectedState(editingAlert.filters.state || '');
        setSelectedCity(editingAlert.filters.city || '');
        setPriceRange(editingAlert.filters.priceRange || [50000, 1000000]);
        
        if (editingAlert.type === 'property') {
          setAreaRange(editingAlert.filters.areaRange || [50, 500]);
        } else {
          setBrand(editingAlert.filters.brand || 'todas-marcas');
          setModel(editingAlert.filters.model || 'todos-modelos');
          setColor(editingAlert.filters.color || 'todas-cores');
          setYearRange(editingAlert.filters.yearRange || [2010, 2025]);
        }
      } else {
        reset();
        setAlertType('property');
        setFilters({});
        
        // Reset all form states
        setCategory('residenciais');
        setType('todos');
        setSelectedState('');
        setSelectedCity('');
        setPriceRange([50000, 1000000]);
        setAreaRange([50, 500]);
        setBrand('todas-marcas');
        setModel('todos-modelos');
        setColor('todas-cores');
        setYearRange([2010, 2025]);
      }
    }
  }, [isOpen, editingAlert, setValue, reset]);

  const handleTypeChange = (newType: 'property' | 'vehicle') => {
    setAlertType(newType);
    setFilters({});
    
    // Reset category and type based on new alert type
    const defaultCategory = newType === 'property' ? 'residenciais' : 'leves';
    const defaultType = newType === 'property' ? 'todos' : 'carros';
    setCategory(defaultCategory);
    setType(defaultType);
  };

  // Update filters as form values change
  useEffect(() => {
    const newFilters: AlertFilters = {};
    
    if (selectedState && selectedState !== 'todos-estados') {
      newFilters.state = selectedState;
    }
    if (selectedCity && selectedCity !== 'todas-cidades') {
      newFilters.city = selectedCity;
    }
    
    if (alertType === 'property') {
      if (category !== 'residenciais') newFilters.propertyCategory = category;
      if (type !== 'todos') newFilters.propertyType = type;
      if (areaRange[0] > 50 || areaRange[1] < 500) newFilters.areaRange = areaRange;
    } else {
      if (category !== 'leves') newFilters.vehicleCategory = category;
      if (type !== 'carros') newFilters.vehicleType = type;
      if (brand !== 'todas-marcas') newFilters.brand = brand;
      if (model !== 'todos-modelos') newFilters.model = model;
      if (color !== 'todas-cores') newFilters.color = color;
      if (yearRange[0] > 2000 || yearRange[1] < 2025) newFilters.yearRange = yearRange;
    }
    
    if (priceRange[0] > 50000 || priceRange[1] < 1000000) {
      newFilters.priceRange = priceRange;
    }
    
    setFilters(newFilters);
  }, [selectedState, selectedCity, category, type, areaRange, yearRange, priceRange, brand, model, color, alertType]);

  const onSubmit = (data: { name: string }) => {
    const validationError = validateAlert(data.name, filters);
    
    if (validationError) {
      showError('Erro na validação', validationError);
      return;
    }

    try {
      onSave(data.name, alertType, filters);
      showSuccess(
        editingAlert ? 'Alerta atualizado!' : 'Alerta criado!',
        'Você será notificado sobre leilões que correspondam aos seus filtros.'
      );
      onClose();
    } catch (error) {
      showError(
        'Erro ao salvar alerta',
        'Tente novamente ou entre em contato com o suporte.'
      );
    }
  };

  const typeOptions = [
    { value: 'property', label: 'Imóveis' },
    { value: 'vehicle', label: 'Veículos' },
  ];

  const isStageEnabled = formatValue === 'Leilão';

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="bottom" className="h-[95vh] rounded-t-3xl flex flex-col">
        <SheetHeader className="flex flex-row items-center justify-between border-b border-gray-100 pb-4 flex-shrink-0">
          <SheetTitle className="text-lg font-semibold">
            {editingAlert ? 'Editar Alerta' : 'Criar Novo Alerta'}
          </SheetTitle>
          <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
            <X className="h-4 w-4" />
          </Button>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Informações Básicas */}
            <div className="space-y-4">
              <h3 className="font-medium text-gray-900 text-lg">Informações Básicas</h3>
              
              <div>
                <Label htmlFor="name">Nome do Alerta</Label>
                <Input
                  id="name"
                  {...register('name')}
                  placeholder="Ex: Casas em São Paulo até R$ 500k"
                  className="mt-1 w-full"
                />
                {errors.name && (
                  <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <Label>Tipo de Leilão</Label>
                <SegmentedControl
                  options={typeOptions}
                  value={alertType}
                  onValueChange={setAlertType}
                  className="mt-1 w-full"
                />
              </div>
            </div>

            {/* Localização */}
            <div className="space-y-4">
              <h3 className="font-medium text-gray-900 text-lg">Localização</h3>
              <div className="space-y-3">
                <StateSelect 
                  value={selectedState} 
                  onChange={setSelectedState} 
                  onClearCity={() => setSelectedCity('')} 
                />
                <CitySelect 
                  value={selectedCity} 
                  onChange={setSelectedCity} 
                  selectedState={selectedState} 
                />
              </div>
            </div>

            {/* Características */}
            <div className="space-y-4">
              <h3 className="font-medium text-gray-900 text-lg">Características</h3>
              <div className="space-y-4">
                <CategoryTypeFilters 
                  itemType={alertType} 
                  category={category} 
                  type={type} 
                  onCategoryChange={setCategory} 
                  onTypeChange={setType} 
                />

                {alertType === 'property' ? (
                  <PropertySpecificFilters 
                    areaRange={areaRange} 
                    onAreaRangeChange={setAreaRange} 
                  />
                ) : (
                  <VehicleSpecificFilters 
                    brand={brand} 
                    model={model} 
                    color={color} 
                    yearRange={yearRange} 
                    vehicleType={type.toLowerCase()} 
                    onBrandChange={setBrand} 
                    onModelChange={setModel} 
                    onColorChange={setColor} 
                    onYearRangeChange={setYearRange} 
                  />
                )}

                <PriceFilter priceRange={priceRange} onPriceRangeChange={setPriceRange} />
              </div>
            </div>

            {/* Condições */}
            <div className="space-y-4">
              <h3 className="font-medium text-gray-900 text-lg">Condições</h3>
              <div className="space-y-3">
                <FormatFilter itemType={alertType} />
                <OriginFilter itemType={alertType} />
                <StageFilter itemType={alertType} isEnabled={isStageEnabled} />
              </div>
            </div>

            {/* Preview */}
            {alertName && (
              <AlertPreview
                name={alertName}
                type={alertType}
                filters={filters}
                filtersDisplay={formatFiltersForDisplay(filters, alertType)}
              />
            )}
          </form>
        </div>

        {/* Footer fixo */}
        <div className="border-t border-gray-100 pt-4 pb-6 flex-shrink-0 bg-white">
          <div className="flex gap-3">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancelar
            </Button>
            <Button onClick={handleSubmit(onSubmit)} className="flex-1">
              {editingAlert ? 'Salvar Alterações' : 'Criar Alerta'}
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
