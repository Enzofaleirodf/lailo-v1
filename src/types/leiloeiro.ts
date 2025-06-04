
export interface Leiloeiro {
  id: number;
  name: string;
  websiteName: string;
  state: string;
  phone: string;
  website?: string;
  logo?: string;
  activeAuctions: number;
}

export interface JuntaComercial {
  state: string;
  sigla: string;
  website: string;
}
