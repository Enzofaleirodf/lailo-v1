
export interface AuctionEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  address: string;
  company: string;
  origin: string;
  types: string[];
  href: string;
}

export const upcomingAuctions: AuctionEvent[] = [
  {
    id: '1',
    title: 'Leilão Judicial de Imóveis Residenciais',
    date: '2025-06-15',
    time: '10:00',
    address: 'Rua Augusta, 1234 - Centro, São Paulo - SP, CEP: 01310-100',
    company: 'Leiloeiro Silva & Associados',
    origin: 'Judicial',
    types: ['Imóveis'],
    href: 'https://example.com/leilao1'
  },
  {
    id: '2',
    title: 'Leilão Extrajudicial de Veículos',
    date: '2025-06-25',
    time: '14:00',
    address: 'Av. Brasil, 5678 - Copacabana, Rio de Janeiro - RJ, CEP: 22070-011',
    company: 'Leilões RJ Ltda',
    origin: 'Extrajudicial',
    types: ['Veículos'],
    href: 'https://example.com/leilao2'
  },
  {
    id: '3',
    title: 'Leilão Misto - Imóveis e Veículos',
    date: '2025-07-01',
    time: '09:30',
    address: 'Praça da Liberdade, 100 - Centro, Belo Horizonte - MG, CEP: 30112-000',
    company: 'MG Leilões & Cia',
    origin: 'Particular',
    types: ['Imóveis', 'Veículos'],
    href: 'https://example.com/leilao3'
  },
  {
    id: '4',
    title: 'Leilão de Imóveis Comerciais',
    date: '2025-07-12',
    time: '11:00',
    address: 'Av. Paulista, 900 - Bela Vista, São Paulo - SP, CEP: 01310-100',
    company: 'Paulista Leilões',
    origin: 'Judicial',
    types: ['Imóveis'],
    href: 'https://example.com/leilao4'
  },
  {
    id: '5',
    title: 'Leilão de Veículos de Luxo',
    date: '2025-08-05',
    time: '15:30',
    address: 'Rua das Flores, 456 - Ipanema, Rio de Janeiro - RJ, CEP: 22411-040',
    company: 'Elite Leilões',
    origin: 'Extrajudicial',
    types: ['Veículos'],
    href: 'https://example.com/leilao5'
  },
  {
    id: '6',
    title: 'Leilão de Imóveis Rurais',
    date: '2025-08-18',
    time: '08:00',
    address: 'Fazenda Boa Vista, Km 25 - Zona Rural, Ribeirão Preto - SP, CEP: 14020-000',
    company: 'Rural Leilões',
    origin: 'Particular',
    types: ['Imóveis'],
    href: 'https://example.com/leilao6'
  },
  {
    id: '7',
    title: 'Leilão Público de Bens Diversos',
    date: '2025-09-03',
    time: '13:00',
    address: 'Centro de Convenções, Av. das Nações, 1500 - Asa Sul, Brasília - DF, CEP: 70070-100',
    company: 'Governo Federal',
    origin: 'Público',
    types: ['Imóveis', 'Veículos'],
    href: 'https://example.com/leilao7'
  },
  {
    id: '8',
    title: 'Leilão de Apartamentos e Casas',
    date: '2025-09-20',
    time: '10:30',
    address: 'Shopping Center Norte, Av. Tucuruvi, 777 - Tucuruvi, São Paulo - SP, CEP: 02304-002',
    company: 'Norte Leilões',
    origin: 'Judicial',
    types: ['Imóveis'],
    href: 'https://example.com/leilao8'
  },
  {
    id: '9',
    title: 'Leilão de Motocicletas e Carros Populares',
    date: '2025-10-10',
    time: '16:00',
    address: 'Estádio Municipal, Rua do Estádio, 200 - Centro, Campinas - SP, CEP: 13010-111',
    company: 'Campinas Leilões',
    origin: 'Extrajudicial',
    types: ['Veículos'],
    href: 'https://example.com/leilao9'
  },
  {
    id: '10',
    title: 'Leilão de Imóveis Industriais',
    date: '2025-10-25',
    time: '09:00',
    address: 'Distrito Industrial, Rua das Indústrias, 1200 - Zona Industrial, São Bernardo do Campo - SP, CEP: 09720-000',
    company: 'Industrial Leilões',
    origin: 'Judicial',
    types: ['Imóveis'],
    href: 'https://example.com/leilao10'
  },
  {
    id: '11',
    title: 'Leilão de Veículos Pesados e Máquinas',
    date: '2025-11-08',
    time: '14:30',
    address: 'Terminal Rodoviário, Av. do Terminal, 500 - Rodoviária, Goiânia - GO, CEP: 74023-010',
    company: 'Centro-Oeste Leilões',
    origin: 'Particular',
    types: ['Veículos'],
    href: 'https://example.com/leilao11'
  },
  {
    id: '12',
    title: 'Leilão de Fim de Ano - Misto',
    date: '2025-12-15',
    time: '10:00',
    address: 'Centro de Eventos, Rua dos Eventos, 999 - Centro, Porto Alegre - RS, CEP: 90010-150',
    company: 'Sul Leilões & Eventos',
    origin: 'Extrajudicial',
    types: ['Imóveis', 'Veículos'],
    href: 'https://example.com/leilao12'
  }
];
