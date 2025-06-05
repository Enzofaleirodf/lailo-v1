
import { useState } from 'react';
import { ItemType } from '../types/search';

export const useAgendaFilters = () => {
  const [selectedState, setSelectedState] = useState("todos");
  const [selectedCity, setSelectedCity] = useState("todas");
  const [selectedOrigin, setSelectedOrigin] = useState("todas");
  const [selectedType, setSelectedType] = useState<ItemType>("property");

  const resetFilters = () => {
    setSelectedState("todos");
    setSelectedCity("todas");
    setSelectedOrigin("todas");
    setSelectedType("property");
  };

  return {
    selectedState,
    setSelectedState,
    selectedCity,
    setSelectedCity,
    selectedOrigin,
    setSelectedOrigin,
    selectedType,
    setSelectedType,
    resetFilters
  };
};
