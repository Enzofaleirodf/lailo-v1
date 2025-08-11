import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { Switch } from '@/design-system/components/ui/switch'
import { RadioGroup, RadioGroupItem } from '@/design-system/components/ui/radio-group'
import { Checkbox } from '@/design-system/components/ui/checkbox'
import { Label } from '@/design-system/components/ui/label'
import { Badge } from '@/design-system/components/ui/badge'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/design-system/components/ui/collapsible'
import { MarcaModeloFilter } from '@/design-system/components/ui/marca-modelo-filter'
import { AnoFilter } from '@/design-system/components/ui/ano-filter'
import { MontaFilter } from '@/design-system/components/ui/monta-filter'
import { CondicaoFilter } from '@/design-system/components/ui/condicao-filter'
import { ValorFilter } from '@/design-system/components/ui/valor-filter'
import { LeiloeirosFilter } from '@/design-system/components/ui/leiloeiros-filter'
import { SidebarFooter } from '@/design-system/components/ui/sidebar-footer'

interface Category {
  name: string;
  count: number;
  active: boolean;
}

interface FilterOption {
  name: string;
  count: number;
  checked: boolean;
}

interface VehicleSidebarProps {
  categories: Category[];
  isMobile?: boolean;
  onApplyFilters?: () => void;
  onFiltersCountChange?: (count: number) => void;
  onResetFilters?: () => void;
}

const formatoOptions: FilterOption[] = [
  { name: 'Não informado', count: 124, checked: false },
  { name: 'Leilões', count: 892, checked: false },
  { name: 'Venda direta', count: 156, checked: false }
];

const origemOptions: FilterOption[] = [
  { name: 'Extrajudicial', count: 342, checked: false },
  { name: 'Judicial', count: 567, checked: false },
  { name: 'Particular', count: 89, checked: false },
  { name: 'Pública administrativa', count: 234, checked: false },
  { name: 'Não informado', count: 76, checked: false }
];

const etapaOptions: FilterOption[] = [
  { name: 'Praça única', count: 298, checked: false },
  { name: '1ª praça', count: 445, checked: false },
  { name: '2ª praça', count: 378, checked: false },
  { name: '3ª praça', count: 123, checked: false },
  { name: 'Não informado', count: 67, checked: false }
];

const tipoVeiculoOptions: FilterOption[] = [
  { name: 'Todos', count: 1456, checked: false },
  { name: 'Carros', count: 567, checked: false },
  { name: 'Motos', count: 234, checked: false },
  { name: 'Outros', count: 189, checked: false }
];

export default function VehicleSidebar({ categories, isMobile = false, onApplyFilters, onFiltersCountChange, onResetFilters }: VehicleSidebarProps) {
  const [statusActive, setStatusActive] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(
    categories.find(cat => cat.active)?.name || categories[0]?.name
  );
  const [selectedTipoVeiculo, setSelectedTipoVeiculo] = useState(tipoVeiculoOptions[0]?.name || '');
  const [formatoSelected, setFormatoSelected] = useState(formatoOptions);
  const [origemSelected, setOrigemSelected] = useState(origemOptions);
  const [etapaSelected, setEtapaSelected] = useState(etapaOptions);

  const handleFormatoChange = (index: number, checked: boolean) => {
    const updated = [...formatoSelected];
    updated[index].checked = checked;
    setFormatoSelected(updated);
  };

  const handleOrigemChange = (index: number, checked: boolean) => {
    const updated = [...origemSelected];
    updated[index].checked = checked;
    setOrigemSelected(updated);
  };

  const handleEtapaChange = (index: number, checked: boolean) => {
    const updated = [...etapaSelected];
    updated[index].checked = checked;
    setEtapaSelected(updated);
  };

  // Count active filters
  const getCategoryFilterCount = () => {
    return selectedCategory !== categories.find(cat => cat.active)?.name ? 1 : 0;
  };

  const getTipoVeiculoFilterCount = () => {
    return selectedTipoVeiculo !== tipoVeiculoOptions[0]?.name ? 1 : 0;
  };

  const getFormatoFilterCount = () => {
    return formatoSelected.filter(option => option.checked).length;
  };

  const getOrigemFilterCount = () => {
    return origemSelected.filter(option => option.checked).length;
  };

  const getEtapaFilterCount = () => {
    return etapaSelected.filter(option => option.checked).length;
  };

  // Calculate total active filters count
  const getTotalActiveFiltersCount = () => {
    return getCategoryFilterCount() +
           getTipoVeiculoFilterCount() +
           getFormatoFilterCount() +
           getOrigemFilterCount() +
           getEtapaFilterCount();
  };

  // Calculate if there are any active filters
  const hasActiveFilters = () => {
    return getTotalActiveFiltersCount() > 0;
  };

  // Notify parent component when filters count changes
  useEffect(() => {
    onFiltersCountChange?.(getTotalActiveFiltersCount());
  }, [selectedCategory, selectedTipoVeiculo, formatoSelected, origemSelected, etapaSelected, onFiltersCountChange]);

  // Reset all filters to initial state
  const resetAllFilters = () => {
    // Reset to default category (first one or active)
    setSelectedCategory(categories.find(cat => cat.active)?.name || categories[0]?.name);

    // Reset to first tipo veiculo option (usually "Todos")
    setSelectedTipoVeiculo(tipoVeiculoOptions[0]?.name || '');

    // Reset all checkbox filters to unchecked
    setFormatoSelected(formatoOptions.map(option => ({ ...option, checked: false })));
    setOrigemSelected(origemOptions.map(option => ({ ...option, checked: false })));
    setEtapaSelected(etapaOptions.map(option => ({ ...option, checked: false })));

    // Reset status to default (active)
    setStatusActive(true);
  };

  // Listen for reset trigger from parent
  useEffect(() => {
    if (onResetFilters) {
      // This effect will be triggered when parent wants to reset
      const resetHandler = () => resetAllFilters();
      // We don't actually need to do anything here since we'll call it directly from parent
    }
  }, [onResetFilters]);

  return (
    <div className={`w-full bg-white flex flex-col relative ${
      isMobile
        ? 'h-full border-0'
        : 'lg:w-[340px] xl-down:lg:w-[280px] border border-[#04040514] lg:sticky lg:top-5 lg:h-[calc(100vh-40px)] h-screen rounded'
    }`} style={{ isolation: 'isolate' }}>
      <div className="flex-1 overflow-y-scroll sidebar-scroll relative" style={{ scrollbarGutter: 'stable' }}>
        <div className="p-7 rounded overflow-hidden">
        {/* Status Filter - apenas mobile */}
        {isMobile && (
          <div className="mb-6 pb-6 border-b border-[#04040514]">
            <span className="text-[#040405] text-sm font-medium font-montserrat mb-5 block">Status</span>
            <div className="flex items-center justify-between h-12 px-6 bg-[#0404050D] rounded overflow-hidden">
              <Label htmlFor="status-toggle" className="text-[#040405] text-sm font-medium font-montserrat">
                Em andamento
              </Label>
              <Switch
                id="status-toggle"
                checked={statusActive}
                onCheckedChange={setStatusActive}
                className="data-[state=checked]:bg-[#FEDA03]"
              />
            </div>
          </div>
        )}

        {/* Category Filter */}
        <Collapsible defaultOpen className="mb-6 pb-6 border-b border-[#04040514]">
          <CollapsibleTrigger className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <span className="text-[#040405] text-sm font-medium font-montserrat">Categoria do veículo</span>
              {getCategoryFilterCount() > 0 && (
                <Badge variant="secondary" className="bg-[#FEDA03] text-[#040405] text-xs px-2 py-0 h-5 font-medium">
                  {getCategoryFilterCount()}
                </Badge>
              )}
            </div>
            <ChevronDown className="w-4 h-4 text-[#0404054D]" />
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-7">
            <RadioGroup value={selectedCategory} onValueChange={setSelectedCategory} className="space-y-4">
              {categories.map((category) => (
                <div key={category.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem 
                      value={category.name} 
                      id={category.name}
                      className="w-[18px] h-[18px] border-2 border-[#0404051A] data-[state=checked]:bg-[#FEDA03] data-[state=checked]:border-[#FEDA03]"
                    />
                    <Label 
                      htmlFor={category.name}
                      className="text-[#04040599] text-sm font-medium font-montserrat cursor-pointer"
                    >
                      {category.name}
                    </Label>
                  </div>
                  <span className="text-[#0404054D] text-xs font-montserrat font-medium">{category.count}</span>
                </div>
              ))}
            </RadioGroup>
          </CollapsibleContent>
        </Collapsible>

        {/* Tipo do veículo Filter */}
        <Collapsible className="mb-6 pb-6 border-b border-[#04040514]">
          <CollapsibleTrigger className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <span className="text-[#040405] text-sm font-medium font-montserrat">Tipo do veículo</span>
              {getTipoVeiculoFilterCount() > 0 && (
                <Badge variant="secondary" className="bg-[#FEDA03] text-[#040405] text-xs px-2 py-0 h-5 font-medium">
                  {getTipoVeiculoFilterCount()}
                </Badge>
              )}
            </div>
            <ChevronDown className="w-4 h-4 text-[#0404054D]" />
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-7">
            <RadioGroup value={selectedTipoVeiculo} onValueChange={setSelectedTipoVeiculo} className="space-y-4">
              {tipoVeiculoOptions.map((option) => (
                <div key={option.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem 
                      value={option.name} 
                      id={option.name}
                      className="w-[18px] h-[18px] border-2 border-[#0404051A] data-[state=checked]:bg-[#FEDA03] data-[state=checked]:border-[#FEDA03]"
                    />
                    <Label 
                      htmlFor={option.name}
                      className="text-[#04040599] text-sm font-medium font-montserrat cursor-pointer"
                    >
                      {option.name}
                    </Label>
                  </div>
                  <span className="text-[#0404054D] text-xs font-montserrat font-medium">{option.count}</span>
                </div>
              ))}
            </RadioGroup>
          </CollapsibleContent>
        </Collapsible>

        {/* Marca e Modelo Filter */}
        <MarcaModeloFilter />

        {/* Ano Filter */}
        <AnoFilter />

        {/* Monta Filter */}
        <MontaFilter />

        {/* Condição Filter */}
        <CondicaoFilter />

        {/* Valor Filter */}
        <ValorFilter />

        {/* Formato Filter */}
        <Collapsible className="mb-6 pb-6 border-b border-[#04040514]">
          <CollapsibleTrigger className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <span className="text-[#040405] text-sm font-medium font-montserrat">Formato</span>
              {getFormatoFilterCount() > 0 && (
                <Badge variant="secondary" className="bg-[#FEDA03] text-[#040405] text-xs px-2 py-0 h-5 font-medium">
                  {getFormatoFilterCount()}
                </Badge>
              )}
            </div>
            <ChevronDown className="w-4 h-4 text-[#0404054D]" />
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-5">
            <div className="space-y-4">
              {formatoSelected.map((option, index) => (
                <div key={option.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Checkbox
                      id={`formato-${index}`}
                      checked={option.checked}
                      onCheckedChange={(checked) => handleFormatoChange(index, checked as boolean)}
                      className="w-[18px] h-[18px] border-2 border-[#0404051A] data-[state=checked]:bg-[#FEDA03] data-[state=checked]:border-[#FEDA03]"
                    />
                    <Label 
                      htmlFor={`formato-${index}`}
                      className="text-[#04040599] text-sm font-medium font-montserrat cursor-pointer"
                    >
                      {option.name}
                    </Label>
                  </div>
                  <span className="text-[#0404054D] text-xs font-montserrat font-medium">{option.count}</span>
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Origem Filter */}
        <Collapsible className="mb-6 pb-6 border-b border-[#04040514]">
          <CollapsibleTrigger className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <span className="text-[#040405] text-sm font-medium font-montserrat">Origem</span>
              {getOrigemFilterCount() > 0 && (
                <Badge variant="secondary" className="bg-[#FEDA03] text-[#040405] text-xs px-2 py-0 h-5 font-medium">
                  {getOrigemFilterCount()}
                </Badge>
              )}
            </div>
            <ChevronDown className="w-4 h-4 text-[#0404054D]" />
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-5">
            <div className="space-y-4">
              {origemSelected.map((option, index) => (
                <div key={option.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Checkbox
                      id={`origem-${index}`}
                      checked={option.checked}
                      onCheckedChange={(checked) => handleOrigemChange(index, checked as boolean)}
                      className="w-[18px] h-[18px] border-2 border-[#0404051A] data-[state=checked]:bg-[#FEDA03] data-[state=checked]:border-[#FEDA03]"
                    />
                    <Label 
                      htmlFor={`origem-${index}`}
                      className="text-[#04040599] text-sm font-medium font-montserrat cursor-pointer"
                    >
                      {option.name}
                    </Label>
                  </div>
                  <span className="text-[#0404054D] text-xs font-montserrat font-medium">{option.count}</span>
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Etapa Filter */}
        <Collapsible className="mb-6 pb-6 border-b border-[#0404051A]">
          <CollapsibleTrigger className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <span className="text-[#040405] text-sm font-medium font-montserrat">Etapa</span>
              {getEtapaFilterCount() > 0 && (
                <Badge variant="secondary" className="bg-[#FEDA03] text-[#040405] text-xs px-2 py-0 h-5 font-medium">
                  {getEtapaFilterCount()}
                </Badge>
              )}
            </div>
            <ChevronDown className="w-4 h-4 text-[#0404054D]" />
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-5">
            <div className="space-y-4">
              {etapaSelected.map((option, index) => (
                <div key={option.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Checkbox
                      id={`etapa-${index}`}
                      checked={option.checked}
                      onCheckedChange={(checked) => handleEtapaChange(index, checked as boolean)}
                      className="w-[18px] h-[18px] border-2 border-[#0404051A] data-[state=checked]:bg-[#FEDA03] data-[state=checked]:border-[#FEDA03]"
                    />
                    <Label 
                      htmlFor={`etapa-${index}`}
                      className="text-[#04040599] text-sm font-medium font-montserrat cursor-pointer"
                    >
                      {option.name}
                    </Label>
                  </div>
                  <span className="text-[#0404054D] text-xs font-montserrat font-medium">{option.count}</span>
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Leiloeiros Filter */}
        <LeiloeirosFilter type="vehicle" />
        </div>

      </div>

      <SidebarFooter
        hasActiveFilters={hasActiveFilters()}
        isMobile={isMobile}
        onResetFilters={() => {
          // Reset all filters logic here
          console.log('Resetar filtros');
        }}
        onApplyFilters={onApplyFilters}
      />
    </div>
  );
}