
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { SegmentedControl } from '../ui/segmented-control';
import { AlertFiltersForm } from './AlertFiltersForm';
import { AlertPreview } from './AlertPreview';
import { Alert, AlertFilters } from '../../types/alert';
import { useAlerts } from '../../hooks/useAlerts';
import { showSuccess, showError } from '../ui/NotificationToast';

const alertSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório').max(50, 'Nome deve ter no máximo 50 caracteres'),
});

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (name: string, type: 'property' | 'vehicle', filters: AlertFilters) => void;
  editingAlert?: Alert;
}

export const AlertModal = ({ isOpen, onClose, onSave, editingAlert }: AlertModalProps) => {
  const [alertType, setAlertType] = useState<'property' | 'vehicle'>('property');
  const [filters, setFilters] = useState<AlertFilters>({});
  const { validateAlert, formatFiltersForDisplay } = useAlerts();

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
      } else {
        reset();
        setAlertType('property');
        setFilters({});
      }
    }
  }, [isOpen, editingAlert, setValue, reset]);

  const handleTypeChange = (newType: 'property' | 'vehicle') => {
    setAlertType(newType);
    setFilters({}); // Reset filters when changing type
  };

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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {editingAlert ? 'Editar Alerta' : 'Criar Novo Alerta'}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Nome do Alerta */}
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

          {/* Tipo do Alerta */}
          <div>
            <Label>Tipo de Leilão</Label>
            <SegmentedControl
              options={typeOptions}
              value={alertType}
              onValueChange={handleTypeChange}
              className="mt-1"
            />
          </div>

          {/* Filtros */}
          <div>
            <Label>Filtros de Busca</Label>
            <div className="mt-3 p-4 border border-gray-200 rounded-lg">
              <AlertFiltersForm
                type={alertType}
                filters={filters}
                onFiltersChange={setFilters}
              />
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

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit">
              {editingAlert ? 'Salvar Alterações' : 'Criar Alerta'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
