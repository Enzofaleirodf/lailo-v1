
import { Home, Building, TreePine, Factory, Car, Truck, Wrench, Waves } from 'lucide-react';

export const propertyCategories = [
  { value: 'residenciais', label: 'Residenciais', icon: <Home className="w-4 h-4" /> },
  { value: 'comerciais', label: 'Comerciais', icon: <Building className="w-4 h-4" /> },
  { value: 'rurais', label: 'Rurais', icon: <TreePine className="w-4 h-4" /> },
  { value: 'industriais', label: 'Industriais', icon: <Factory className="w-4 h-4" /> },
];

export const propertyTypes = {
  residenciais: [
    { value: 'todos', label: 'Todos' },
    { value: 'apartamentos', label: 'Apartamentos' },
    { value: 'casas', label: 'Casas' },
    { value: 'sobrados', label: 'Sobrados' },
    { value: 'condominios', label: 'Condomínios' }
  ],
  comerciais: [
    { value: 'todos', label: 'Todos' },
    { value: 'lojas', label: 'Lojas' },
    { value: 'escritorios', label: 'Escritórios' },
    { value: 'galpoes', label: 'Galpões' }
  ],
  rurais: [
    { value: 'todos', label: 'Todos' },
    { value: 'chacaras', label: 'Chácaras' },
    { value: 'fazendas', label: 'Fazendas' },
    { value: 'sitios', label: 'Sítios' }
  ],
  industriais: [
    { value: 'todos', label: 'Todos' },
    { value: 'galpoes', label: 'Galpões' },
    { value: 'terrenos', label: 'Terrenos' }
  ]
};

export const vehicleCategories = [
  { value: 'leves', label: 'Leves', icon: <Car className="w-4 h-4" /> },
  { value: 'pesados', label: 'Pesados', icon: <Truck className="w-4 h-4" /> },
  { value: 'maquinas', label: 'Máquinas', icon: <Wrench className="w-4 h-4" /> },
  { value: 'aquaticos', label: 'Aquáticos', icon: <Waves className="w-4 h-4" /> },
];

export const vehicleTypes = {
  leves: [
    { value: 'carros', label: 'Carros' },
    { value: 'motos', label: 'Motos' }
  ],
  pesados: [
    { value: 'caminhoes', label: 'Caminhões' },
    { value: 'onibus', label: 'Ônibus' }
  ],
  maquinas: [
    { value: 'agricolas', label: 'Agrícolas' },
    { value: 'construcao', label: 'Construção' }
  ],
  aquaticos: [
    { value: 'barcos', label: 'Barcos' },
    { value: 'jet-skis', label: 'Jet Skis' }
  ]
};

export const brandOptions = [
  { value: 'todas-marcas', label: 'Todas as Marcas' },
  { value: 'volkswagen', label: 'Volkswagen' },
  { value: 'honda', label: 'Honda' },
  { value: 'toyota', label: 'Toyota' },
  { value: 'ford', label: 'Ford' }
];

export const modelOptions = [
  { value: 'todos-modelos', label: 'Todos os Modelos' },
  { value: 'civic', label: 'Civic' },
  { value: 'corolla', label: 'Corolla' },
  { value: 't-cross', label: 'T-Cross' }
];

export const colorOptions = [
  'Todas as cores', 'Amarelo', 'Azul', 'Bege', 'Branco', 'Bronze', 
  'Cinza', 'Dourado', 'Grafite', 'Laranja', 'Marrom', 'Prata', 
  'Preto', 'Rosa', 'Roxo', 'Verde', 'Vermelho', 'Vinho'
];
