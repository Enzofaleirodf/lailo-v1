
export const propertyCategories = [
  { value: 'residenciais', label: 'Residenciais', icon: 'home' },
  { value: 'comerciais', label: 'Comerciais', icon: 'building' },
  { value: 'rurais', label: 'Rurais', icon: 'tree-pine' },
  { value: 'industriais', label: 'Industriais', icon: 'factory' },
  { value: 'hospedagens', label: 'Hospedagens', icon: 'bed' },
  { value: 'outros', label: 'Outros', icon: 'more-horizontal' },
];

export const propertyTypes = {
  residenciais: [
    { value: 'todos', label: 'Todos' },
    { value: 'apartamentos', label: 'Apartamentos' },
    { value: 'casas', label: 'Casas' },
    { value: 'condomínios', label: 'Condomínios' },
    { value: 'conjuntos', label: 'Conjuntos' },
    { value: 'edifícios', label: 'Edifícios' },
    { value: 'flats', label: 'Flats' },
    { value: 'garagens', label: 'Garagens' },
    { value: 'mistos', label: 'Mistos' },
    { value: 'kitnets', label: 'Kitnets' },
    { value: 'lofts', label: 'Lofts' },
    { value: 'lotes', label: 'Lotes' },
    { value: 'prédios', label: 'Prédios' },
    { value: 'sobrados', label: 'Sobrados' },
    { value: 'studios', label: 'Studios' },
    { value: 'terrenos', label: 'Terrenos' }
  ],
  comerciais: [
    { value: 'todos', label: 'Todos' },
    { value: 'condomínios', label: 'Condomínios' },
    { value: 'conjuntos', label: 'Conjuntos' },
    { value: 'depósitos', label: 'Depósitos' },
    { value: 'escritórios', label: 'Escritórios' },
    { value: 'garagens', label: 'Garagens' },
    { value: 'lojas', label: 'Lojas' },
    { value: 'lotes', label: 'Lotes' },
    { value: 'prédios', label: 'Prédios' },
    { value: 'salas', label: 'Salas' },
    { value: 'terrenos', label: 'Terrenos' }
  ],
  rurais: [
    { value: 'todos', label: 'Todos' },
    { value: 'chácaras', label: 'Chácaras' },
    { value: 'fazendas', label: 'Fazendas' },
    { value: 'sítios', label: 'Sítios' },
    { value: 'terrenos', label: 'Terrenos' }
  ],
  industriais: [
    { value: 'todos', label: 'Todos' },
    { value: 'galpões', label: 'Galpões' },
    { value: 'lotes', label: 'Lotes' },
    { value: 'terrenos', label: 'Terrenos' }
  ],
  hospedagens: [
    { value: 'todos', label: 'Todos' },
    { value: 'hotéis', label: 'Hotéis' },
    { value: 'motéis', label: 'Motéis' },
    { value: 'pousadas', label: 'Pousadas' }
  ],
  outros: [
    { value: 'todos', label: 'Todos' }
  ]
};

export const vehicleCategories = [
  { value: 'leves', label: 'Leves', icon: 'car' },
  { value: 'pesados', label: 'Pesados', icon: 'truck' },
  { value: 'apoio', label: 'Apoio', icon: 'trailer' },
  { value: 'lazer', label: 'Lazer', icon: 'bike' },
  { value: 'aquáticos', label: 'Aquáticos', icon: 'waves' },
  { value: 'aéreos', label: 'Aéreos', icon: 'plane' },
  { value: 'máquinas-agrícolas', label: 'Máquinas Agrícolas', icon: 'tractor' },
  { value: 'máquinas-construção', label: 'Máquinas de Construção', icon: 'wrench' },
  { value: 'outros', label: 'Outros', icon: 'more-horizontal' },
];

export const vehicleTypes = {
  leves: [
    { value: 'carros', label: 'Carros' },
    { value: 'motos', label: 'Motos' }
  ],
  pesados: [
    { value: 'caminhões', label: 'Caminhões' },
    { value: 'carretas', label: 'Carretas' },
    { value: 'cavalos-mecânicos', label: 'Cavalos Mecânicos' },
    { value: 'micro-ônibus', label: 'Micro-ônibus' },
    { value: 'motorhomes', label: 'Motorhomes' },
    { value: 'ônibus', label: 'Ônibus' }
  ],
  apoio: [
    { value: 'reboques', label: 'Reboques' },
    { value: 'trailers', label: 'Trailers' }
  ],
  lazer: [
    { value: 'bicicletas', label: 'Bicicletas' },
    { value: 'bugges', label: 'Bugges' },
    { value: 'karts', label: 'Karts' },
    { value: 'patinetes', label: 'Patinetes' },
    { value: 'quadriciclos', label: 'Quadriciclos' },
    { value: 'triciclos', label: 'Triciclos' },
    { value: 'utvs', label: 'UTVs' }
  ],
  aquáticos: [
    { value: 'barcos', label: 'Barcos' },
    { value: 'jet-skis', label: 'Jet Skis' },
    { value: 'lanchas', label: 'Lanchas' }
  ],
  aéreos: [
    { value: 'aviões', label: 'Aviões' },
    { value: 'drones', label: 'Drones' },
    { value: 'helicópteros', label: 'Helicópteros' }
  ],
  'máquinas-agrícolas': [
    { value: 'colheitadeiras', label: 'Colheitadeiras' },
    { value: 'plantadeiras', label: 'Plantadeiras' },
    { value: 'roçadeiras', label: 'Roçadeiras' },
    { value: 'tratores', label: 'Tratores' }
  ],
  'máquinas-construção': [
    { value: 'escavadeiras', label: 'Escavadeiras' },
    { value: 'guindastes', label: 'Guindastes' },
    { value: 'motoniveladoras', label: 'Motoniveladoras' },
    { value: 'pás-carregadeiras', label: 'Pás Carregadeiras' },
    { value: 'retroescavadeiras', label: 'Retroescavadeiras' }
  ],
  outros: [
    { value: 'diversos', label: 'Diversos' }
  ]
};

export const brandOptions = [
  { value: 'todas-marcas', label: 'Todas as Marcas' },
  { value: 'volkswagen', label: 'Volkswagen' },
  { value: 'honda', label: 'Honda' },
  { value: 'toyota', label: 'Toyota' },
  { value: 'ford', label: 'Ford' },
  { value: 'chevrolet', label: 'Chevrolet' },
  { value: 'fiat', label: 'Fiat' },
  { value: 'nissan', label: 'Nissan' },
  { value: 'hyundai', label: 'Hyundai' },
  { value: 'renault', label: 'Renault' },
  { value: 'bmw', label: 'BMW' },
  { value: 'mercedes-benz', label: 'Mercedes-Benz' },
  { value: 'audi', label: 'Audi' },
  { value: 'peugeot', label: 'Peugeot' },
  { value: 'citroën', label: 'Citroën' },
  { value: 'jeep', label: 'Jeep' },
  { value: 'mitsubishi', label: 'Mitsubishi' },
  { value: 'kia', label: 'Kia' },
  { value: 'suzuki', label: 'Suzuki' },
  { value: 'mazda', label: 'Mazda' }
];

export const modelOptions = [
  { value: 'todos-modelos', label: 'Todos os Modelos' },
  { value: 'civic', label: 'Civic' },
  { value: 'corolla', label: 'Corolla' },
  { value: 't-cross', label: 'T-Cross' },
  { value: 'gol', label: 'Gol' },
  { value: 'onix', label: 'Onix' },
  { value: 'ka', label: 'Ka' },
  { value: 'hb20', label: 'HB20' },
  { value: 'uno', label: 'Uno' },
  { value: 'palio', label: 'Palio' },
  { value: 'sandero', label: 'Sandero' },
  { value: 'march', label: 'March' },
  { value: 'etios', label: 'Etios' },
  { value: 'fit', label: 'Fit' },
  { value: 'city', label: 'City' },
  { value: 'hr-v', label: 'HR-V' }
];

export const colorOptions = [
  'Todas as cores', 'Amarelo', 'Azul', 'Bege', 'Branco', 'Bronze', 
  'Cinza', 'Dourado', 'Grafite', 'Laranja', 'Marrom', 'Prata', 
  'Preto', 'Rosa', 'Roxo', 'Verde', 'Vermelho', 'Vinho'
];

export const formatOptions = [
  { value: 'leilão', label: 'Leilão' },
  { value: 'venda-direta', label: 'Venda Direta' }
];

export const originOptions = [
  { value: 'extrajudicial', label: 'Extrajudicial' },
  { value: 'judicial', label: 'Judicial' },
  { value: 'particular', label: 'Particular' },
  { value: 'público', label: 'Público' }
];

export const stageOptions = [
  { value: 'praça-única', label: 'Praça Única' },
  { value: '1ª-praça', label: '1ª Praça' },
  { value: '2ª-praça', label: '2ª Praça' },
  { value: '3ª-praça', label: '3ª Praça' }
];

export const sortOptions = [
  { value: 'recent', label: 'Mais novos' },
  { value: 'lowest', label: 'Menor preço' },
  { value: 'highest', label: 'Maior preço' },
  { value: 'discount', label: 'Maior desconto' },
  { value: 'closest', label: 'Mais próximos' }
];

export const stateOptions = [
  'Todos os estados',
  'Acre',
  'Alagoas', 
  'Amapá',
  'Amazonas',
  'Bahia',
  'Ceará',
  'Distrito Federal',
  'Espírito Santo',
  'Goiás',
  'Maranhão',
  'Mato Grosso',
  'Mato Grosso do Sul',
  'Minas Gerais',
  'Pará',
  'Paraíba',
  'Paraná',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rio Grande do Sul',
  'Rondônia',
  'Roraima',
  'Santa Catarina',
  'São Paulo',
  'Sergipe',
  'Tocantins'
];
