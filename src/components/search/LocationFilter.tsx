
import React from 'react';
import { ChevronDown } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../ui/popover';
import { Button } from '../ui/button';
import { LocationFilterPopover } from './location/LocationFilterPopover';

interface LocationFilterProps {
  placeholder?: string;
}

export const LocationFilter = ({ placeholder = 'Localização' }: LocationFilterProps) => {
  const [selectedState, setSelectedState] = React.useState('');
  const [selectedCity, setSelectedCity] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleClear = () => {
    setSelectedState('');
    setSelectedCity('');
    setAddress('');
  };

  const handleApply = () => {
    setOpen(false);
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
    return placeholder;
  };

  return (
    <div className="w-full">
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
          <LocationFilterPopover
            selectedState={selectedState}
            selectedCity={selectedCity}
            address={address}
            onStateChange={setSelectedState}
            onCityChange={setSelectedCity}
            onAddressChange={setAddress}
            onClear={handleClear}
            onApply={handleApply}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
