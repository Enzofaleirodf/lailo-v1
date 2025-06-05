import React, { useState } from "react";
import { Bell, Plus, Trash2, Settings as SettingsIcon, Edit, X } from "lucide-react";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SegmentedControl } from '@/components/ui/segmented-control';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { SettingsCard } from "../../components/settings/SettingsCard";
import { StateSelect } from '../../components/search/location/StateSelect';
import { CitySelect } from '../../components/search/location/CitySelect';
import { CategoryTypeFilters } from '../../components/filters/CategoryTypeFilters';
import { FormatFilter } from '../../components/search/FormatFilter';
import { OriginFilter } from '../../components/search/OriginFilter';
import { StageFilter } from '../../components/search/StageFilter';
import { PropertySpecificFilters } from '../../components/filters/PropertySpecificFilters';
import { VehicleSpecificFilters } from '../../components/filters/VehicleSpecificFilters';
import { AlertPreview } from '../../components/alerts/AlertPreview';
import { useAlertsStore } from "../../stores/alertsStore";
import { useAlerts } from "../../hooks/useAlerts";
import { Alert, AlertFilters } from "../../types/alert";
import { showSuccess } from "../../components/ui/NotificationToast";

const alertSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório').max(50, 'Nome deve ter no máximo 50 caracteres'),
});

const ConfiguracoesAlertas = () => {
  const {
    alerts,
    notificationSettings,
    createAlert,
    updateAlert,
    deleteAlert,
    toggleAlert,
    updateNotificationSettings,
  } = useAlertsStore();

  const { validateAlert, formatFiltersForDisplay } = useAlerts();
  
  const [isCreating, setIsCreating] = useState(false);
  const [editingAlert, setEditingAlert] = useState<Alert | undefined>();
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

  const handleCreateAlert = () => {
    setEditingAlert(undefined);
    setIsCreating(true);
    resetForm();
  };

  const handleEditAlert = (alert: Alert) => {
    setEditingAlert(alert);
    setIsCreating(true);
    
    // Preencher formulário com dados do alerta
    setValue('name', alert.name);
    setAlertType(alert.type);
    setFilters(alert.filters);
    
    setCategory(alert.filters.propertyCategory || alert.filters.vehicleCategory || (alert.type === 'property' ? 'residenciais' : 'leves'));
    setType(alert.filters.propertyType || alert.filters.vehicleType || (alert.type === 'property' ? 'todos' : 'carros'));
    setSelectedState(alert.filters.state || '');
    setSelectedCity(alert.filters.city || '');
    setPriceRange(alert.filters.priceRange || [50000, 1000000]);
    
    if (alert.type === 'property') {
      setAreaRange(alert.filters.areaRange || [50, 500]);
    } else {
      setBrand(alert.filters.brand || 'todas-marcas');
      setModel(alert.filters.model || 'todos-modelos');
      setColor(alert.filters.color || 'todas-cores');
      setYearRange(alert.filters.yearRange || [2010, 2025]);
    }
  };

  const resetForm = () => {
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
  };

  const handleCancel = () => {
    setIsCreating(false);
    setEditingAlert(undefined);
    resetForm();
  };

  const handleTypeChange = (newType: 'property' | 'vehicle') => {
    setAlertType(newType);
    setFilters({});
    
    const defaultCategory = newType === 'property' ? 'residenciais' : 'leves';
    const defaultType = newType === 'property' ? 'todos' : 'carros';
    setCategory(defaultCategory);
    setType(defaultType);
  };

  // Update filters as form values change
  React.useEffect(() => {
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
      if (editingAlert) {
        updateAlert(editingAlert.id, { name: data.name, type: alertType, filters });
      } else {
        createAlert(data.name, alertType, filters);
      }
      
      showSuccess(
        editingAlert ? 'Alerta atualizado!' : 'Alerta criado!',
        'Você será notificado sobre leilões que correspondam aos seus filtros.'
      );
      
      handleCancel();
    } catch (error) {
      showSuccess(
        'Erro ao salvar alerta',
        'Tente novamente ou entre em contato com o suporte.'
      );
    }
  };

  const handleDeleteAlert = (alertId: string) => {
    deleteAlert(alertId);
    showSuccess('Alerta excluído', 'O alerta foi removido com sucesso.');
  };

  const handleToggleAlert = (alertId: string) => {
    toggleAlert(alertId);
    const alert = alerts.find(a => a.id === alertId);
    showSuccess(
      alert?.active ? 'Alerta pausado' : 'Alerta ativado',
      alert?.active ? 'Você não receberá mais notificações.' : 'Você voltará a receber notificações.'
    );
  };

  const notificationSettingsData = [
    {
      id: 'site',
      title: 'No Site',
      description: 'Receber notificações no site',
      enabled: notificationSettings.site
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp',
      description: 'Receber alertas via WhatsApp',
      enabled: notificationSettings.whatsapp
    }
  ];

  const typeOptions = [
    { value: 'property', label: 'Imóveis' },
    { value: 'vehicle', label: 'Veículos' },
  ];

  const isStageEnabled = formatValue === 'Leilão';

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Header com ação */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg md:text-xl font-bold text-gray-900">Meus Alertas</h2>
          <p className="text-sm text-gray-600">Receba notificações sobre leilões do seu interesse</p>
        </div>
        {!isCreating && (
          <Button size="sm" onClick={handleCreateAlert}>
            <Plus className="w-4 h-4 mr-2" />
            Novo
          </Button>
        )}
      </div>

      {/* Formulário de criação/edição */}
      {isCreating && (
        <div className="relative">
          <SettingsCard 
            title={editingAlert ? 'Editar Alerta' : 'Criar Novo Alerta'}
            description="Configure os filtros para receber notificações personalizadas"
            icon={Bell}
          >
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleCancel}
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
                  <Label>Tipo de Leilão</Label>
                  <SegmentedControl
                    options={typeOptions}
                    value={alertType}
                    onValueChange={(value) => handleTypeChange(value as 'property' | 'vehicle')}
                    className="mt-1"
                  />
                </div>
              </div>

              {/* Localização */}
              <div className="space-y-4">
                <h3 className="font-medium text-gray-900">Localização</h3>
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
              </div>

              {/* Características */}
              <div className="space-y-4">
                <h3 className="font-medium text-gray-900">Características</h3>
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
                  />
                )}
              </div>

              {/* Condições - Layout lado a lado */}
              <div className="space-y-4">
                <h3 className="font-medium text-gray-900">Condições</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

              {/* Botões */}
              <div className="flex gap-3 pt-4 border-t border-gray-200">
                <Button type="button" variant="outline" onClick={handleCancel} className="flex-1">
                  Cancelar
                </Button>
                <Button type="submit" className="flex-1">
                  {editingAlert ? 'Salvar Alterações' : 'Criar Alerta'}
                </Button>
              </div>
            </form>
          </SettingsCard>
        </div>
      )}

      {/* Preferências de Notificação */}
      <SettingsCard
        title="Preferências de Notificação"
        description="Como você quer receber os alertas"
        icon={SettingsIcon}
      >
        <div className="space-y-4">
          {notificationSettingsData.map((setting) => (
            <div key={setting.id} className="flex items-center justify-between">
              <div>
                <p className="font-medium text-sm text-gray-900">{setting.title}</p>
                <p className="text-xs text-gray-600">{setting.description}</p>
              </div>
              <Switch 
                checked={setting.enabled}
                onCheckedChange={(checked) => 
                  updateNotificationSettings({ [setting.id]: checked })
                }
              />
            </div>
          ))}
        </div>
      </SettingsCard>

      {/* Lista de Alertas */}
      <SettingsCard title="Alertas Criados" description="Gerencie seus alertas ativos" icon={Bell}>
        {alerts.length === 0 ? (
          <div className="text-center py-8">
            <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 mb-2">Nenhum alerta criado</p>
            <p className="text-sm text-gray-500 mb-4">
              Crie alertas para ser notificado sobre leilões do seu interesse
            </p>
            <Button onClick={handleCreateAlert}>
              <Plus className="w-4 h-4 mr-2" />
              Criar Primeiro Alerta
            </Button>
          </div>
        ) : (
          <div className="space-y-3">
            {alerts.map((alert) => (
              <div key={alert.id} className="p-4 border border-gray-200 rounded-lg bg-white">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium text-sm text-gray-900 truncate">{alert.name}</h3>
                      <Badge variant={alert.active ? "default" : "secondary"} className="text-xs">
                        {alert.active ? "Ativo" : "Pausado"}
                      </Badge>
                    </div>
                    <p className="text-xs text-blue-600 mb-1">
                      {alert.type === 'property' ? 'Imóveis' : 'Veículos'}
                    </p>
                    <p className="text-xs text-gray-500 line-clamp-2">
                      {formatFiltersForDisplay(alert.filters, alert.type)}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 ml-3">
                    <Switch 
                      checked={alert.active}
                      onCheckedChange={() => handleToggleAlert(alert.id)}
                    />
                  </div>
                </div>
                <div className="flex gap-2 pt-2 border-t border-gray-100">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => handleEditAlert(alert)}
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    Editar
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Excluir Alerta</AlertDialogTitle>
                        <AlertDialogDescription>
                          Tem certeza que deseja excluir o alerta "{alert.name}"? 
                          Esta ação não pode ser desfeita.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                        <AlertDialogAction 
                          onClick={() => handleDeleteAlert(alert.id)}
                          className="bg-red-600 hover:bg-red-700"
                        >
                          Excluir
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            ))}
          </div>
        )}
      </SettingsCard>
    </div>
  );
};

export default ConfiguracoesAlertas;
