import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Bell, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SegmentedControl } from '@/components/ui/segmented-control';
import { SettingsCard } from '../settings/SettingsCard';
import { StateSelect } from '../search/location/StateSelect';
import { CitySelect } from '../search/location/CitySelect';
import { CategoryTypeFilters } from '../filters/CategoryTypeFilters';
import { FormatFilter } from '../search/FormatFilter';
import { OriginFilter } from '../search/OriginFilter';
import { StageFilter } from '../search/StageFilter';
import { PropertySpecificFilters } from '../filters/PropertySpecificFilters';
import { VehicleSpecificFilters } from '../filters/VehicleSpecificFilters';
import { AlertPreview } from './AlertPreview';
import { Alert, AlertFilters } from '../../types/alert';
import { useAlerts } from '../../hooks/useAlerts';
import { showSuccess } from '../ui/NotificationToast';

const alertSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório').max(50, 'Nome deve ter no máximo 50 caracteres'),
});

interface AlertFormProps {
  editingAlert?: Alert;
  onSave: (name: string, type: 'property' | 'vehicle', filters: AlertFilters) => void;
  onCancel: () => void;
}

export const AlertForm = ({ editingAlert, onSave, onCancel }: AlertFormProps) => {
  const { validateAlert, formatFiltersForDisplay } = useAlerts();
  
  const [alertType, setAlertType] = useState<'property' | 'vehicle'>('property');
  const [filters, setFilters] = useState<AlertFilters>({});

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

  // Initialize form with editing alert data
  useEffect(() => {
    if (editingAlert) {
      setValue('name', editingAlert.name);
      setAlertType(editingAlert.type);
      setFilters(editingAlert.filters);
      
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
  }, [editingAlert, setValue, reset]);

  const handleTypeChange = (newType: 'property' | 'vehicle') => {
    setAlertType(newType);
    setFilters({});
    
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
      showSuccess('Erro na validação', validationError);
      return;
    }

    try {
      onSave(data.name, alertType, filters);
    } catch (error) {
      showSuccess(
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
    <div className="relative">
      <SettingsCard 
        title={editingAlert ? 'Editar Alerta' : 'Criar Novo Alerta'}
        description="Configure os filtros para receber notificações personalizadas"
        icon={Bell}
      >
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onCancel}
          className="absolute top-4 right-4 h-6 w-6 text-gray-500 hover:text-gray-700 z-10"
        >
          <X className="h-4 w-4" />
        </Button>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Informações Básicas */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Nome do Alerta</Label>
              <Input
                id="name"
                {...register('name')}
                placeholder="Ex: Casas em São Paulo até R$ 500k"
                className="mt-1"
              />
              {errors.name && (
                <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <SegmentedControl
                options={typeOptions}
                value={alertType}
                onValueChange={(value) => handleTypeChange(value as 'property' | 'vehicle')}
                className="mt-1"
              />
            </div>
          </div>

          {/* Localização */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

          {/* Características */}
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
                priceRange={priceRange}
                onPriceRangeChange={setPriceRange}
                isAlert={true}
              />
            ) : (
              <VehicleSpecificFilters 
                brand={brand} 
                model={model} 
                color={color} 
                yearRange={yearRange} 
                priceRange={priceRange}
                vehicleType={type.toLowerCase()} 
                onBrandChange={setBrand} 
                onModelChange={setModel} 
                onColorChange={setColor} 
                onYearRangeChange={setYearRange}
                onPriceRangeChange={setPriceRange}
                isAlert={true}
              />
            )}
          </div>

          {/* Condições - Layout lado a lado */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormatFilter itemType={alertType} isAlert={true} />
            <OriginFilter itemType={alertType} isAlert={true} />
            <StageFilter itemType={alertType} isEnabled={isStageEnabled} isAlert={true} />
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

          {/* Botões */}
          <div className="flex gap-3 pt-4 border-t border-gray-200">
            <Button type="button" variant="outline" onClick={onCancel} className="flex-1">
              Cancelar
            </Button>
            <Button type="submit" className="flex-1">
              {editingAlert ? 'Salvar Alterações' : 'Criar Alerta'}
            </Button>
          </div>
        </form>
      </SettingsCard>
    </div>
  );
};
