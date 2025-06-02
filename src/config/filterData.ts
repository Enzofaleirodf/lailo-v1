export const propertyCategories = [
  { value: 'residenciais', label: 'Residenciais', icon: 'home' },
  { value: 'comerciais', label: 'Comerciais', icon: 'building' },
  { value: 'rurais', label: 'Rurais', icon: 'tree-pine' },
  { value: 'industriais', label: 'Industriais', icon: 'factory' },
  { value: 'hospedagens', label: 'Hospedagens', icon: 'bed' },
];

export const propertyTypes = {
  residenciais: [
    { value: 'todos', label: 'Todos' },
    { value: 'apartamento', label: 'Apartamento' },
    { value: 'casa', label: 'Casa' },
    { value: 'cobertura', label: 'Cobertura' },
    { value: 'condominio-residencial', label: 'Condomínio Residencial' },
    { value: 'conjunto-residencial', label: 'Conjunto Residencial' },
    { value: 'edificio-residencial', label: 'Edifício Residencial' },
    { value: 'flat', label: 'Flat' },
    { value: 'imovel-misto', label: 'Imóvel Misto' },
    { value: 'kitnet', label: 'Kitnet' },
    { value: 'loft', label: 'Loft' },
    { value: 'loteamento-residencial', label: 'Loteamento Residencial' },
    { value: 'lote-residencial', label: 'Lote Residencial' },
    { value: 'predio-residencial', label: 'Prédio Residencial' },
    { value: 'sobrado', label: 'Sobrado' },
    { value: 'studio', label: 'Studio' },
    { value: 'terreno-residencial', label: 'Terreno Residencial' },
    { value: 'triplex', label: 'Triplex' },
    { value: 'vagas-garagem', label: 'Vagas de Garagem' }
  ],
  comerciais: [
    { value: 'todos', label: 'Todos' },
    { value: 'condominio-comercial', label: 'Condomínio Comercial' },
    { value: 'conjunto-comercial', label: 'Conjunto Comercial' },
    { value: 'deposito', label: 'Depósito' },
    { value: 'escritorio', label: 'Escritório' },
    { value: 'lojas', label: 'Lojas' },
    { value: 'loteamento-comercial', label: 'Loteamento Comercial' },
    { value: 'lote-comercial', label: 'Lote Comercial' },
    { value: 'ponto-comercial', label: 'Ponto Comercial' },
    { value: 'predio-comercial', label: 'Prédio Comercial' },
    { value: 'salas', label: 'Salas' },
    { value: 'terreno-comercial', label: 'Terreno Comercial' }
  ],
  rurais: [
    { value: 'todos', label: 'Todos' },
    { value: 'chacara', label: 'Chácara' },
    { value: 'fazenda', label: 'Fazenda' },
    { value: 'loteamento-rural', label: 'Loteamento Rural' },
    { value: 'lote-rural', label: 'Lote Rural' },
    { value: 'sitio', label: 'Sítio' },
    { value: 'terreno-rural', label: 'Terreno Rural' }
  ],
  industriais: [
    { value: 'todos', label: 'Todos' },
    { value: 'galpao', label: 'Galpão' },
    { value: 'lote-industrial', label: 'Lote Industrial' },
    { value: 'predio-industrial', label: 'Prédio Industrial' },
    { value: 'terreno-industrial', label: 'Terreno Industrial' }
  ],
  hospedagens: [
    { value: 'todos', label: 'Todos' },
    { value: 'hotel', label: 'Hotel' },
    { value: 'motel', label: 'Motel' },
    { value: 'pousada', label: 'Pousada' }
  ]
};

export const vehicleCategories = [
  { value: 'leves', label: 'Leves', icon: 'car' },
  { value: 'pesados', label: 'Pesados', icon: 'truck' },
  { value: 'apoio-reboque', label: 'Apoio', icon: 'wrench' },
  { value: 'lazer-recreacao', label: 'Lazer', icon: 'waves' },
  { value: 'aquaticos', label: 'Aquáticos', icon: 'waves' },
  { value: 'aereos', label: 'Aéreos', icon: 'plane' },
  { value: 'maquinas-agricolas', label: 'Maq. Agrícolas', icon: 'wrench' },
  { value: 'maquinas-construcao', label: 'Maq. Construção', icon: 'wrench' },
  { value: 'outros', label: 'Outros', icon: 'car' },
];

export const vehicleTypes = {
  leves: [
    { value: 'carro', label: 'Carro' },
    { value: 'moto', label: 'Moto' }
  ],
  pesados: [
    { value: 'caminhao', label: 'Caminhão' },
    { value: 'carreta', label: 'Carreta' },
    { value: 'cavalo-mecanico', label: 'Cavalo Mecânico' },
    { value: 'micro-onibus', label: 'Micro-ônibus' },
    { value: 'motorhome', label: 'Motorhome' },
    { value: 'onibus', label: 'Ônibus' }
  ],
  'apoio-reboque': [
    { value: 'reboque-semi-reboque', label: 'Reboque e semi-reboque' },
    { value: 'trailer', label: 'Trailer' }
  ],
  'lazer-recreacao': [
    { value: 'bicicleta', label: 'Bicicleta' },
    { value: 'buggy', label: 'Buggy' },
    { value: 'ciclomotor', label: 'Ciclomotor' },
    { value: 'kart', label: 'Kart' },
    { value: 'monociclo', label: 'Monociclo' },
    { value: 'patinete', label: 'Patinete' },
    { value: 'quadriciclo', label: 'Quadriciclo' },
    { value: 'scooter', label: 'Scooter' },
    { value: 'segway', label: 'Segway' },
    { value: 'triciclo', label: 'Triciclo' },
    { value: 'utv', label: 'UTV' }
  ],
  aquaticos: [
    { value: 'barco', label: 'Barco' },
    { value: 'lancha', label: 'Lancha' },
    { value: 'jet-ski', label: 'Jet Ski' }
  ],
  aereos: [
    { value: 'aviao', label: 'Avião' },
    { value: 'helicoptero', label: 'Helicóptero' },
    { value: 'drone', label: 'Drone' }
  ],
  'maquinas-agricolas': [
    { value: 'colheitadeira', label: 'Colheitadeira' },
    { value: 'plantadeira', label: 'Plantadeira' },
    { value: 'trator', label: 'Trator' },
    { value: 'rocadeira', label: 'Roçadeira' },
    { value: 'semeadora', label: 'Semeadora' }
  ],
  'maquinas-construcao': [
    { value: 'retroescavadeira', label: 'Retroescavadeira' },
    { value: 'motoniveladora', label: 'Motoniveladora' },
    { value: 'guindaste', label: 'Guindaste' },
    { value: 'pa-carregadeira', label: 'Pá Carregadeira' }
  ],
  outros: [
    { value: 'ambulancia', label: 'Ambulância' },
    { value: 'sucata', label: 'Sucata' },
    { value: 'viatura', label: 'Viatura' }
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
  { value: 'todas-cores', label: 'Todas as cores', color: '#f3f4f6' },
  { value: 'amarelo', label: 'Amarelo', color: '#fbbf24' },
  { value: 'azul', label: 'Azul', color: '#3b82f6' },
  { value: 'bege', label: 'Bege', color: '#f5f5dc' },
  { value: 'branco', label: 'Branco', color: '#ffffff' },
  { value: 'bronze', label: 'Bronze', color: '#cd7f32' },
  { value: 'cinza', label: 'Cinza', color: '#6b7280' },
  { value: 'dourado', label: 'Dourado', color: '#ffd700' },
  { value: 'grafite', label: 'Grafite', color: '#2f2f2f' },
  { value: 'laranja', label: 'Laranja', color: '#f97316' },
  { value: 'marrom', label: 'Marrom', color: '#92400e' },
  { value: 'prata', label: 'Prata', color: '#c0c0c0' },
  { value: 'preto', label: 'Preto', color: '#000000' },
  { value: 'rosa', label: 'Rosa', color: '#ec4899' },
  { value: 'roxo', label: 'Roxo', color: '#8b5cf6' },
  { value: 'verde', label: 'Verde', color: '#10b981' },
  { value: 'vermelho', label: 'Vermelho', color: '#ef4444' },
  { value: 'vinho', label: 'Vinho', color: '#7f1d1d' }
];

export const formatOptions = [
  { value: 'leilao', label: 'Leilão' },
  { value: 'venda-direta', label: 'Venda Direta' }
];

export const originOptions = [
  { value: 'extrajudicial', label: 'Extrajudicial' },
  { value: 'judicial', label: 'Judicial' },
  { value: 'particular', label: 'Particular' },
  { value: 'publico', label: 'Público' }
];

export const stageOptions = [
  { value: 'praca-unica', label: 'Praça Única' },
  { value: '1a-praca', label: '1ª Praça' },
  { value: '2a-praca', label: '2ª Praça' },
  { value: '3a-praca', label: '3ª Praça' }
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
