
import React from 'react';
import { Button } from '../../ui/button';
import { Label } from '../../ui/label';
import { StateSelect } from './StateSelect';
import { CitySelect } from './CitySelect';
import { AddressInput } from './AddressInput';

interface LocationFilterPopoverProps {
  selectedState: string;
  selectedCity: string;
  address: string;
  onStateChange: (state: string) => void;
  onCityChange: (city: string) => void;
  onAddressChange: (address: string) => void;
  onClear: () => void;
  onApply: () => void;
}

export const LocationFilterPopover = ({
  selectedState,
  selectedCity,
  address,
  onStateChange,
  onCityChange,
  onAddressChange,
  onClear,
  onApply
}: LocationFilterPopoverProps) => {
  const handleClearCity = () => {
    onCityChange('');
  };

  return (
    <>
      <div className="p-4 space-y-4">
        <Label className="text-sm font-medium text-gray-900">Localização</Label>
        
        <StateSelect
          value={selectedState}
          onChange={onStateChange}
          onClearCity={handleClearCity}
        />

        <CitySelect
          value={selectedCity}
          onChange={onCityChange}
          selectedState={selectedState}
        />

        <AddressInput
          value={address}
          onChange={onAddressChange}
        />
      </div>

      <div className="flex items-center justify-between gap-2 px-4 py-3 bg-gray-50 border-t border-gray-100">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={onClear} 
          className="text-gray-600 hover:text-gray-800"
        >
          Limpar
        </Button>
        
        <Button 
          variant="outline" 
          size="sm" 
          onClick={onApply} 
          className="text-gray-600 hover:text-gray-800 border-gray-300"
        >
          Aplicar
        </Button>
      </div>
    </>
  );
};
