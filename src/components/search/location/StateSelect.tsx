
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { designTokens } from '../../../styles/design-tokens';

interface StateSelectProps {
  value: string;
  onChange: (value: string) => void;
  onClearCity: () => void;
}

const stateOptions = [
  'Todos os estados',
  'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 
  'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 
  'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 
  'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 
  'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 
  'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'
];

export const StateSelect = ({ value, onChange, onClearCity }: StateSelectProps) => {
  const handleChange = (selectedValue: string) => {
    onChange(selectedValue);
    if (selectedValue === 'Todos os estados') {
      onClearCity();
    }
  };

  return (
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
          value={value}
          onChange={(e) => handleChange(e.target.value)}
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
  );
};
