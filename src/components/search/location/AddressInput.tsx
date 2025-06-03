
import React from 'react';
import { MapPin } from 'lucide-react';
import { designTokens } from '../../../styles/design-tokens';

interface AddressInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const AddressInput = ({ value, onChange }: AddressInputProps) => {
  return (
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
          value={value}
          onChange={(e) => onChange(e.target.value)}
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
      {value && (
        <p className="text-xs text-gray-500 mt-1">
          Pressione Enter para buscar ou continue digitando
        </p>
      )}
    </div>
  );
};
