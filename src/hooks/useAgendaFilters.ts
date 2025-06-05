
import { useState } from 'react';

export const useAgendaFilters = () => {
  const [selectedState, setSelectedState] = useState("todos");
  const [selectedCity, setSelectedCity] = useState("todas");
  const [selectedOrigin, setSelectedOrigin] = useState("todas");
  const [selectedType, setSelectedType] = useState("imoveis");

  const resetFilters = () => {
    setSelectedState("todos");
    setSelectedCity("todas");
    setSelectedOrigin("todas");
    setSelectedType("imoveis");
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
