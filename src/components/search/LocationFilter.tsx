
import React from 'react';
import { FilterChip } from '../ui/filter-chip';
import { MapPin, Search } from 'lucide-react';
import { designTokens } from '../../styles/design-tokens';

export const LocationFilter = () => {
  const [selectedState, setSelectedState] = React.useState('');
  const [selectedCity, setSelectedCity] = React.useState('');
  const [address, setAddress] = React.useState('');

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
    <FilterChip
      label={getDisplayText()}
      isActive={!!isActive}
      onClear={handleClear}
      className="w-[320px]"
      aria-label="Filtro de localização"
      id="location-filter"
    >
      {({ close }) => (
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-4 h-4 text-blue-600" />
            <h4 className="font-semibold text-gray-900 text-base">Localização</h4>
          </div>
          
          <div className="space-y-4">
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
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                  style={{
                    borderRadius: designTokens.borderRadius.lg,
                    padding: `${designTokens.spacing.sm} ${designTokens.spacing.md}`,
                  }}
                  aria-describedby="state-help"
                >
                  {stateOptions.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
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
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed bg-white"
                  style={{
                    borderRadius: designTokens.borderRadius.lg,
                    padding: `${designTokens.spacing.sm} ${designTokens.spacing.md}`,
                  }}
                  aria-describedby="city-help"
                >
                  {cityOptions.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
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
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
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

          <div 
            className="flex justify-between pt-4 border-t border-gray-100"
            style={{ 
              paddingTop: designTokens.spacing.lg,
              borderTopWidth: '1px',
            }}
          >
            <button
              onClick={handleClear}
              className="text-sm text-gray-600 hover:text-gray-800 font-medium transition-colors"
              style={{ fontSize: designTokens.typography.sizes.sm }}
            >
              Limpar
            </button>
            <button
              onClick={close}
              className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
              style={{
                borderRadius: designTokens.borderRadius.lg,
                padding: `${designTokens.spacing.sm} ${designTokens.spacing.lg}`,
                fontSize: designTokens.typography.sizes.sm,
              }}
            >
              Aplicar
            </button>
          </div>
        </div>
      )}
    </FilterChip>
  );
};
