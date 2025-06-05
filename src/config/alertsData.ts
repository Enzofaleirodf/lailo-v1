
// Alert-specific data configurations
export const propertyCategories = [
  { value: 'residenciais', label: 'Residenciais', icon: 'home' },
  { value: 'comerciais', label: 'Comerciais', icon: 'building' },
  { value: 'rurais', label: 'Rurais', icon: 'tree-pine' },
  { value: 'industriais', label: 'Industriais', icon: 'factory' },
  { value: 'hospedagens', label: 'Hospedagens', icon: 'bed' },
  { value: 'outros', label: 'Outros', icon: 'building' },
];

export const vehicleCategories = [
  { value: 'leves', label: 'Veículos Leves', icon: 'car' },
  { value: 'pesados', label: 'Veículos Pesados', icon: 'truck' },
  { value: 'apoio-reboque', label: 'Apoio e Reboque', icon: 'truck' },
  { value: 'lazer-recreacao', label: 'Lazer e Recreação', icon: 'car' },
  { value: 'aquaticos', label: 'Veículos Aquáticos', icon: 'waves' },
  { value: 'aereos', label: 'Veículos Aéreos', icon: 'plane' },
  { value: 'maquinas-agricolas', label: 'Máquinas Agrícolas', icon: 'wrench' },
  { value: 'maquinas-construcao', label: 'Máquinas de Construção', icon: 'wrench' },
  { value: 'outros', label: 'Outros', icon: 'car' },
];

export const propertyTypes: Record<string, string[]> = {
  residenciais: ['Todos', 'Apartamentos', 'Casas', 'Condomínios', 'Conjuntos', 'Edifícios', 'Flats', 'Garagens', 'Mistos', 'Kitnets', 'Lofts', 'Lotes', 'Prédios', 'Sobrados', 'Studios', 'Terrenos'],
  comerciais: ['Todos', 'Condomínios', 'Conjuntos', 'Depósitos', 'Escritórios', 'Garagens', 'Lojas', 'Lotes', 'Prédios', 'Salas', 'Terrenos'],
  rurais: ['Todos', 'Chácaras', 'Fazendas', 'Sítios', 'Terrenos'],
  industriais: ['Todos', 'Galpões', 'Lotes', 'Terrenos'],
  hospedagens: ['Todos', 'Hotéis', 'Motéis', 'Pousadas'],
  outros: ['Todos'],
};

export const vehicleTypes: Record<string, string[]> = {
  leves: ['Carros', 'Motos'],
  pesados: ['Caminhões', 'Carretas', 'Cavalos Mecânicos', 'Micro-ônibus', 'Motorhomes', 'Ônibus'],
  'apoio-reboque': ['Reboques', 'Trailers'],
  'lazer-recreacao': ['Bicicletas', 'Bugges', 'Karts', 'Patinetes', 'Quadriciclos', 'Triciclos', 'UTVs'],
  aquaticos: ['Barcos', 'Jet Skis', 'Lanchas'],
  aereos: ['Aviões', 'Drones', 'Helicópteros'],
  'maquinas-agricolas': ['Colheitadeiras', 'Plantadeiras', 'Roçadeiras', 'Tratores'],
  'maquinas-construcao': ['Escavadeiras', 'Guindastes', 'Motoniveladoras', 'Pás Carregadeiras', 'Retroescavadeiras'],
  outros: ['Outros'],
};
