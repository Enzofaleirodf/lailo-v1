
import React from 'react';
import { FilterChip } from '../ui/filter-chip';
import { MapPin } from 'lucide-react';

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
    return 'Selecionar Localização';
  };

  const isActive = (selectedState && selectedState !== 'Todos os estados') || 
                   (selectedCity && selectedCity !== 'Todas as cidades') || 
                   address;

  return (
    <FilterChip
      label={getDisplayText()}
      isActive={!!isActive}
      onClear={handleClear}
      className="w-[352px]"
    >
      {({ close }) => (
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-4 h-4 text-gray-600" />
            <h4 className="font-semibold text-gray-900 text-base">Localização</h4>
          </div>
          
          <div className="space-y-3">
            {/* Estado */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Estado</label>
              <select
                value={selectedState}
                onChange={(e) => {
                  setSelectedState(e.target.value);
                  if (e.target.value === 'Todos os estados') {
                    setSelectedCity('');
                  }
                }}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {stateOptions.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>

            {/* Cidade */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Cidade</label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                disabled={!selectedState || selectedState === 'Todos os estados'}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
              >
                {cityOptions.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>

            {/* Endereço */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Endereço</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Pesquise por rua ou bairro"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="flex justify-between pt-3 border-t border-gray-100">
            <button
              onClick={handleClear}
              className="text-sm text-gray-600 hover:text-gray-800 font-medium"
            >
              Resetar
            </button>
            <button
              onClick={close}
              className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700"
            >
              Aplicar
            </button>
          </div>
        </div>
      )}
    </FilterChip>
  );
};
