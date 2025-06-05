
export const propertyCategories = [
  { value: 'residenciais', label: 'Residenciais', icon: 'home' },
  { value: 'comerciais', label: 'Comerciais', icon: 'building' },
  { value: 'rurais', label: 'Rurais', icon: 'tree-pine' },
  { value: 'industriais', label: 'Industriais', icon: 'factory' },
  { value: 'hospedagens', label: 'Hospedagens', icon: 'bed' },
  { value: 'outros', label: 'Outros', icon: 'building' },
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
  { value: 'maquinas-construcao', label: 'Maq. Const.', icon: 'wrench' },
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

// Marcas de carros
export const carBrandOptions = [
  { value: 'todas-marcas', label: 'Todas as Marcas' },
  { value: 'agrale', label: 'Agrale' },
  { value: 'alfa-romeo', label: 'Alfa Romeo' },
  { value: 'americar', label: 'Americar' },
  { value: 'asia', label: 'Asia' },
  { value: 'aston-martin', label: 'Aston Martin' },
  { value: 'audi', label: 'Audi' },
  { value: 'austin-healey', label: 'Austin-healey' },
  { value: 'avallone', label: 'Avallone' },
  { value: 'bentley', label: 'Bentley' },
  { value: 'bmw', label: 'BMW' },
  { value: 'brm', label: 'BRM' },
  { value: 'bugre', label: 'Bugre' },
  { value: 'bugway', label: 'Bugway' },
  { value: 'byd', label: 'BYD' },
  { value: 'cadillac', label: 'Cadillac' },
  { value: 'caoa-chery', label: 'Caoa Chery' },
  { value: 'cbt', label: 'CBT' },
  { value: 'chamonix', label: 'Chamonix' },
  { value: 'chevrolet', label: 'Chevrolet' },
  { value: 'chrysler', label: 'Chrysler' },
  { value: 'citroen', label: 'Citroën' },
  { value: 'daewoo', label: 'Daewoo' },
  { value: 'daihatsu', label: 'Daihatsu' },
  { value: 'dkw-vemag', label: 'DKW-Vemag' },
  { value: 'dodge', label: 'Dodge' },
  { value: 'effa', label: 'Effa' },
  { value: 'ego', label: 'Ego' },
  { value: 'emis', label: 'Emis' },
  { value: 'engesa', label: 'Engesa' },
  { value: 'envemo', label: 'Envemo' },
  { value: 'farus', label: 'Farus' },
  { value: 'fercar-buggy', label: 'Fercar Buggy' },
  { value: 'ferrari', label: 'Ferrari' },
  { value: 'fever', label: 'Fever' },
  { value: 'fiat', label: 'Fiat' },
  { value: 'fnm', label: 'FNM' },
  { value: 'ford', label: 'Ford' },
  { value: 'fyber', label: 'Fyber' },
  { value: 'geely', label: 'Geely' },
  { value: 'giants', label: 'Giants' },
  { value: 'gmc', label: 'GMC' },
  { value: 'gurgel', label: 'Gurgel' },
  { value: 'gwm', label: 'GWM' },
  { value: 'hafei', label: 'Hafei' },
  { value: 'honda', label: 'Honda' },
  { value: 'hummer', label: 'Hummer' },
  { value: 'hyundai', label: 'Hyundai' },
  { value: 'infiniti', label: 'Infiniti' },
  { value: 'international', label: 'International' },
  { value: 'iveco', label: 'Iveco' },
  { value: 'jac', label: 'JAC' },
  { value: 'jaecoo', label: 'Jaecoo' },
  { value: 'jaguar', label: 'Jaguar' },
  { value: 'jeep', label: 'Jeep' },
  { value: 'jinbei', label: 'Jinbei' },
  { value: 'jpx', label: 'JPX' },
  { value: 'kaiser', label: 'Kaiser' },
  { value: 'kia', label: 'Kia' },
  { value: 'lada', label: 'Lada' },
  { value: 'lamborghini', label: 'Lamborghini' },
  { value: 'land-rover', label: 'Land Rover' },
  { value: 'lexus', label: 'Lexus' },
  { value: 'lifan', label: 'Lifan' },
  { value: 'lincoln', label: 'Lincoln' },
  { value: 'lotus', label: 'Lotus' },
  { value: 'lucid', label: 'Lucid' },
  { value: 'mahindra', label: 'Mahindra' },
  { value: 'marcopolo', label: 'Marcopolo' },
  { value: 'maserati', label: 'Maserati' },
  { value: 'matra', label: 'Matra' },
  { value: 'mazda', label: 'Mazda' },
  { value: 'mclaren', label: 'McLaren' },
  { value: 'mercedes-benz', label: 'Mercedes-Benz' },
  { value: 'mercury', label: 'Mercury' },
  { value: 'mg', label: 'MG' },
  { value: 'mini', label: 'Mini' },
  { value: 'mitsubishi', label: 'Mitsubishi' },
  { value: 'miura', label: 'Miura' },
  { value: 'morgan', label: 'Morgan' },
  { value: 'morris', label: 'Morris' },
  { value: 'mp-lafer', label: 'MP Lafer' },
  { value: 'mplm', label: 'MPLM' },
  { value: 'nash', label: 'Nash' },
  { value: 'neta', label: 'Neta' },
  { value: 'nissan', label: 'Nissan' },
  { value: 'oldsmobile', label: 'Oldsmobile' },
  { value: 'omoda', label: 'Omoda' },
  { value: 'opel', label: 'Opel' },
  { value: 'packard', label: 'Packard' },
  { value: 'peugeot', label: 'Peugeot' },
  { value: 'plymouth', label: 'Plymouth' },
  { value: 'pontiac', label: 'Pontiac' },
  { value: 'porsche', label: 'Porsche' },
  { value: 'puma', label: 'Puma' },
  { value: 'ram', label: 'Ram' },
  { value: 'renault', label: 'Renault' },
  { value: 'rivian', label: 'Rivian' },
  { value: 'rolls-royce', label: 'Rolls-Royce' },
  { value: 'santa-matilde', label: 'Santa Matilde' },
  { value: 'saturn', label: 'Saturn' },
  { value: 'seat', label: 'Seat' },
  { value: 'seres', label: 'Seres' },
  { value: 'shelby', label: 'Shelby' },
  { value: 'shineray', label: 'Shineray' },
  { value: 'smart', label: 'Smart' },
  { value: 'ssangyong', label: 'SsangYong' },
  { value: 'studebaker', label: 'Studebaker' },
  { value: 'subaru', label: 'Subaru' },
  { value: 'suzuki', label: 'Suzuki' },
  { value: 'tac', label: 'TAC' },
  { value: 'tesla', label: 'Tesla' },
  { value: 'toyota', label: 'Toyota' },
  { value: 'troller', label: 'Troller' },
  { value: 'volkswagen', label: 'Volkswagen' },
  { value: 'volvo', label: 'Volvo' },
  { value: 'wake', label: 'Wake' },
  { value: 'way-brasil', label: 'Way Brasil' },
  { value: 'willys', label: 'Willys' },
  { value: 'willys-overland', label: 'Willys Overland' },
  { value: 'zeekr', label: 'Zeekr' }
];

// Marcas de motos
export const motoBrandOptions = [
  { value: 'todas-marcas', label: 'Todas as Marcas' },
  { value: 'aima', label: 'Aima' },
  { value: 'amazonas', label: 'Amazonas' },
  { value: 'aprilia', label: 'Aprilia' },
  { value: 'avelloz', label: 'Avelloz' },
  { value: 'bajaj', label: 'Bajaj' },
  { value: 'bashi', label: 'Bashi' },
  { value: 'benzhou', label: 'Benzhou' },
  { value: 'bimota', label: 'Bimota' },
  { value: 'bmw', label: 'BMW' },
  { value: 'buell', label: 'Buell' },
  { value: 'bull', label: 'Bull' },
  { value: 'by-cristo', label: 'By Cristo' },
  { value: 'cagiva', label: 'Cagiva' },
  { value: 'can-am', label: 'Can-Am' },
  { value: 'casa-do-triciclo', label: 'Casa Do Triciclo' },
  { value: 'cfmoto', label: 'CFMoto' },
  { value: 'dafra', label: 'Dafra' },
  { value: 'ducati', label: 'Ducati' },
  { value: 'fun-motors', label: 'Fun Motors' },
  { value: 'fusco-motosegura', label: 'Fusco-Motosegura' },
  { value: 'fym', label: 'FYM' },
  { value: 'gas-gas', label: 'Gas Gas' },
  { value: 'gloov', label: 'Gloov' },
  { value: 'goes', label: 'Goes' },
  { value: 'goo', label: 'Goo' },
  { value: 'haojue', label: 'Haojue' },
  { value: 'harley-davidson', label: 'Harley-Davidson' },
  { value: 'hisun', label: 'Hisun' },
  { value: 'honda', label: 'Honda' },
  { value: 'husqvarna', label: 'Husqvarna' },
  { value: 'indian', label: 'Indian' },
  { value: 'iros', label: 'Iros' },
  { value: 'jincheng', label: 'Jincheng' },
  { value: 'kasinski', label: 'Kasinski' },
  { value: 'kawasaki', label: 'Kawasaki' },
  { value: 'ktm', label: 'KTM' },
  { value: 'kymco', label: 'Kymco' },
  { value: 'lambretta', label: 'Lambretta' },
  { value: 'linzhi', label: 'Linzhi' },
  { value: 'mobyou', label: 'Mobyou' },
  { value: 'moto-chefe', label: 'Moto Chefe' },
  { value: 'moto-guzzi', label: 'Moto Guzzi' },
  { value: 'motocar', label: 'Motocar' },
  { value: 'motorino', label: 'Motorino' },
  { value: 'mottu', label: 'Mottu' },
  { value: 'ms-eletric', label: 'MS Eletric' },
  { value: 'muuv', label: 'Muuv' },
  { value: 'mv-agusta', label: 'MV Agusta' },
  { value: 'mxf', label: 'MXF' },
  { value: 'niu', label: 'Niu' },
  { value: 'piaggio', label: 'Piaggio' },
  { value: 'polaris', label: 'Polaris' },
  { value: 'riguete', label: 'Riguete' },
  { value: 'royal-enfield', label: 'Royal Enfield' },
  { value: 'sachs', label: 'Sachs' },
  { value: 'segway', label: 'Segway' },
  { value: 'sherco', label: 'Sherco' },
  { value: 'shineray', label: 'Shineray' },
  { value: 'sundown', label: 'Sundown' },
  { value: 'super-soco', label: 'Super Soco' },
  { value: 'suzuki', label: 'Suzuki' },
  { value: 'traxx', label: 'Traxx' },
  { value: 'triumph', label: 'Triumph' },
  { value: 'ventane', label: 'Ventane' },
  { value: 'vespa', label: 'Vespa' },
  { value: 'voltz', label: 'Voltz' }
];

// Agrupamento de marcas por tipo de veículo
export const vehicleBrands = {
  carro: carBrandOptions,
  moto: motoBrandOptions
};

// Modelos por marca (simplificado para exemplo)
export const vehicleModels = {
  'todas-marcas': [{ value: 'todos-modelos', label: 'Todos os Modelos' }],
  honda: [
    { value: 'todos-modelos', label: 'Todos os Modelos' },
    { value: 'civic', label: 'Civic' },
    { value: 'city', label: 'City' },
    { value: 'fit', label: 'Fit' },
    { value: 'hr-v', label: 'HR-V' }
  ],
  toyota: [
    { value: 'todos-modelos', label: 'Todos os Modelos' },
    { value: 'corolla', label: 'Corolla' },
    { value: 'etios', label: 'Etios' }
  ],
  volkswagen: [
    { value: 'todos-modelos', label: 'Todos os Modelos' },
    { value: 't-cross', label: 'T-Cross' },
    { value: 'gol', label: 'Gol' }
  ],
  chevrolet: [
    { value: 'todos-modelos', label: 'Todos os Modelos' },
    { value: 'onix', label: 'Onix' }
  ],
  ford: [
    { value: 'todos-modelos', label: 'Todos os Modelos' },
    { value: 'ka', label: 'Ka' }
  ],
  hyundai: [
    { value: 'todos-modelos', label: 'Todos os Modelos' },
    { value: 'hb20', label: 'HB20' }
  ],
  fiat: [
    { value: 'todos-modelos', label: 'Todos os Modelos' },
    { value: 'uno', label: 'Uno' },
    { value: 'palio', label: 'Palio' }
  ],
  renault: [
    { value: 'todos-modelos', label: 'Todos os Modelos' },
    { value: 'sandero', label: 'Sandero' }
  ],
  nissan: [
    { value: 'todos-modelos', label: 'Todos os Modelos' },
    { value: 'march', label: 'March' }
  ]
};

// Cores de veículos
export const vehicleColors = [
  { value: 'todas-cores', label: 'Todas as Cores' },
  { value: 'amarelo', label: 'Amarelo' },
  { value: 'azul', label: 'Azul' },
  { value: 'bege', label: 'Bege' },
  { value: 'branco', label: 'Branco' },
  { value: 'bronze', label: 'Bronze' },
  { value: 'cinza', label: 'Cinza' },
  { value: 'dourado', label: 'Dourado' },
  { value: 'grafite', label: 'Grafite' },
  { value: 'laranja', label: 'Laranja' },
  { value: 'marrom', label: 'Marrom' },
  { value: 'prata', label: 'Prata' },
  { value: 'preto', label: 'Preto' },
  { value: 'rosa', label: 'Rosa' },
  { value: 'roxo', label: 'Roxo' },
  { value: 'verde', label: 'Verde' },
  { value: 'vermelho', label: 'Vermelho' },
  { value: 'vinho', label: 'Vinho' }
];

// Opções antigas mantidas para compatibilidade
export const brandOptions = carBrandOptions;

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
  { value: 'todas-cores', label: 'Todas', color: '#f3f4f6' },
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
