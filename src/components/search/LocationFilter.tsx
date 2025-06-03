import React from 'react';
import { ChevronDown, MapPin } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../ui/popover';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { designTokens } from '../../styles/design-tokens';

export const LocationFilter = () => {
  const [selectedState, setSelectedState] = React.useState('');
  const [selectedCity, setSelectedCity] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const stateOptions = [
    'Todos os estados',
    'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 
    'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 
    'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 
    'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 
    'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 
    'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'
  ];

  const cityOptions = selectedState && selectedState !== 'Todos os estados' 
    ? ['Todas as cidades', 'São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador'] 
    : ['Todas as cidades'];

  const handleClear = () => {
    setSelectedState('');
    setSelectedCity('');
    setAddress('');
  };

  const handleApply = () => {
    setOpen(false);
    // Aqui seria aplicado o filtro
    console.log('Aplicando filtros de localização:', { selectedState, selectedCity, address });
  };

  const getDisplayText = () => {
    if (address) return address;
    if (selectedCity && selectedCity !== 'Todas as cidades') {
      return selectedState && selectedState !== 'Todos os estados' 
        ? `${selectedCity}, ${selectedState}` 
        : selectedCity;
    }
    if (selectedState && selectedState !== 'Todos os estados') {
      return selectedState;
    }
    return 'Localização';
  };

  const isActive = (selectedState && selectedState !== 'Todos os estados') || 
                   (selectedCity && selectedCity !== 'Todas as cidades') || 
                   address;

  return (
    <div className="w-[220px]">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full h-10 justify-between rounded-lg"
          >
            {getDisplayText()}
            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[320px] p-0 rounded-lg">
          <div className="p-4 space-y-4">
            <Label className="text-sm font-medium text-gray-900">Localização</Label>
            
            {/* Estado */}
            <div>
              <label 
                htmlFor="state-select" 
                className="block text-sm font-medium text-gray-700 mb-2"
                style={{ fontSize: designTokens.typography.sizes.sm }}
              >
                Estado
              </label>
              <div className="relative">
                <select
                  id="state-select"
                  value={selectedState}
                  onChange={(e) => {
                    setSelectedState(e.target.value);
                    if (e.target.value === 'Todos os estados') {
                      setSelectedCity('');
                    }
                  }}
                  className="w-full px-3 py-2 pr-10 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white appearance-none"
                  style={{
                    borderRadius: designTokens.borderRadius.lg,
                    padding: `${designTokens.spacing.sm} 2.5rem ${designTokens.spacing.sm} ${designTokens.spacing.md}`,
                  }}
                  aria-describedby="state-help"
                >
                  {stateOptions.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                <div id="state-help" className="sr-only">
                  Selecione um estado para filtrar os resultados
                </div>
              </div>
            </div>

            {/* Cidade */}
            <div>
              <label 
                htmlFor="city-select" 
                className="block text-sm font-medium text-gray-700 mb-2"
                style={{ fontSize: designTokens.typography.sizes.sm }}
              >
                Cidade
              </label>
              <div className="relative">
                <select
                  id="city-select"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  disabled={!selectedState || selectedState === 'Todos os estados'}
                  className="w-full px-3 py-2 pr-10 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed bg-white appearance-none"
                  style={{
                    borderRadius: designTokens.borderRadius.lg,
                    padding: `${designTokens.spacing.sm} 2.5rem ${designTokens.spacing.sm} ${designTokens.spacing.md}`,
                  }}
                  aria-describedby="city-help"
                >
                  {cityOptions.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                <div id="city-help" className="sr-only">
                  Selecione uma cidade específica ou mantenha "Todas as cidades"
                </div>
              </div>
            </div>

            {/* Endereço */}
            <div>
              <label 
                htmlFor="address-input" 
                className="block text-sm font-medium text-gray-700 mb-2"
                style={{ fontSize: designTokens.typography.sizes.sm }}
              >
                Endereço
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  id="address-input"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Digite um bairro ou rua"
                  className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  style={{
                    borderRadius: designTokens.borderRadius.lg,
                    padding: `${designTokens.spacing.sm} ${designTokens.spacing.md}`,
                    paddingLeft: '2.5rem',
                  }}
                  aria-describedby="address-help"
                />
                <div id="address-help" className="sr-only">
                  Digite um endereço específico para busca mais precisa
                </div>
              </div>
              {address && (
                <p className="text-xs text-gray-500 mt-1">
                  Pressione Enter para buscar ou continue digitando
                </p>
              )}
            </div>
          </div>

          {/* Footer com botões */}
          <div className="flex items-center justify-between gap-2 px-4 py-3 bg-gray-50 border-t border-gray-100">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleClear} 
              className="text-gray-600 hover:text-gray-800"
            >
              Limpar
            </Button>
            
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleApply} 
              className="text-gray-600 hover:text-gray-800 border-gray-300"
            >
              Aplicar
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
