
import { Leiloeiro, JuntaComercial } from "../types/leiloeiro";

export const juntasComerciais: JuntaComercial[] = [
  { state: "Acre", sigla: "JUCEAC", website: "https://juceac.ac.gov.br" },
  { state: "Alagoas", sigla: "JUCEAL", website: "https://juceal.al.gov.br" },
  { state: "Amapá", sigla: "JUCAP", website: "https://jucap.ap.gov.br" },
  { state: "Amazonas", sigla: "JUCEA", website: "https://jucea.am.gov.br" },
  { state: "Bahia", sigla: "JUCEB", website: "https://juceb.ba.gov.br" },
  { state: "Ceará", sigla: "JUCE", website: "https://juce.ce.gov.br" },
  { state: "Distrito Federal", sigla: "JUCIS", website: "https://jucis.df.gov.br" },
  { state: "Espírito Santo", sigla: "JUCEES", website: "https://jucees.es.gov.br" },
  { state: "Goiás", sigla: "JUCEG", website: "https://juceg.go.gov.br" },
  { state: "Maranhão", sigla: "JUCEMA", website: "https://jucema.ma.gov.br" },
  { state: "Mato Grosso", sigla: "JUCEMAT", website: "https://jucemat.mt.gov.br" },
  { state: "Mato Grosso do Sul", sigla: "JUCEMS", website: "https://jucems.ms.gov.br" },
  { state: "Minas Gerais", sigla: "JUCEMG", website: "https://jucemg.mg.gov.br" },
  { state: "Pará", sigla: "JUCEPA", website: "https://jucepa.pa.gov.br" },
  { state: "Paraíba", sigla: "JUCEP", website: "https://jucep.pb.gov.br" },
  { state: "Paraná", sigla: "JUCEPAR", website: "https://jucepar.pr.gov.br" },
  { state: "Pernambuco", sigla: "JUCEPE", website: "https://jucepe.pe.gov.br" },
  { state: "Piauí", sigla: "JUCEPI", website: "https://jucepi.pi.gov.br" },
  { state: "Rio de Janeiro", sigla: "JUCERJA", website: "https://jucerja.rj.gov.br" },
  { state: "Rio Grande do Norte", sigla: "JUCERN", website: "https://jucern.rn.gov.br" },
  { state: "Rio Grande do Sul", sigla: "JUCERS", website: "https://jucers.rs.gov.br" },
  { state: "Rondônia", sigla: "JUCER", website: "https://jucer.ro.gov.br" },
  { state: "Roraima", sigla: "JUCERR", website: "https://jucerr.rr.gov.br" },
  { state: "Santa Catarina", sigla: "JUCESC", website: "https://jucesc.sc.gov.br" },
  { state: "São Paulo", sigla: "JUCESP", website: "https://jucesp.sp.gov.br" },
  { state: "Sergipe", sigla: "JUCESE", website: "https://jucese.se.gov.br" },
  { state: "Tocantins", sigla: "JUCETINS", website: "https://jucetins.to.gov.br" }
];

export const leiloeiros: Leiloeiro[] = [
  // São Paulo
  { id: 1, name: "Maria Santos", websiteName: "SP Leilões", state: "São Paulo", phone: "(11) 9999-8888", website: "https://spleiloes.com.br", activeAuctions: 42 },
  { id: 2, name: "João Oliveira", websiteName: "Capital Leilões", state: "São Paulo", phone: "(11) 8888-7777", website: "https://capitalleiloes.com.br", activeAuctions: 23 },
  { id: 3, name: "Carlos Mendes", websiteName: "SP Auctions", state: "São Paulo", phone: "(11) 7777-6666", activeAuctions: 0 },
  { id: 4, name: "Ana Ferreira", websiteName: "Paulista Leilões", state: "São Paulo", phone: "(11) 6666-5555", website: "https://paulistaleiloes.com.br", activeAuctions: 15 },
  
  // Minas Gerais
  { id: 5, name: "Carlos Oliveira", websiteName: "Leilões MG", state: "Minas Gerais", phone: "(31) 7777-6666", website: "https://leiloesmg.com.br", activeAuctions: 8 },
  { id: 6, name: "Fernanda Lima", websiteName: "BH Leilões", state: "Minas Gerais", phone: "(31) 5555-4444", website: "https://bhleiloes.com.br", activeAuctions: 12 },
  { id: 7, name: "Roberto Silva", websiteName: "Mineiro Auctions", state: "Minas Gerais", phone: "(31) 4444-3333", activeAuctions: 0 },
  
  // Rio de Janeiro
  { id: 8, name: "Ana Costa", websiteName: "RJ Leilões", state: "Rio de Janeiro", phone: "(21) 5555-3333", website: "https://rjleiloes.com.br", activeAuctions: 23 },
  { id: 9, name: "Pedro Santos", websiteName: "Carioca Leilões", state: "Rio de Janeiro", phone: "(21) 4444-2222", website: "https://cariocaleiloes.com.br", activeAuctions: 18 },
  { id: 10, name: "Lucia Martins", websiteName: "Rio Auctions", state: "Rio de Janeiro", phone: "(21) 3333-1111", activeAuctions: 0 },
  
  // Outros estados com dados existentes
  { id: 11, name: "João Silva", websiteName: "Leilões Brasília", state: "Distrito Federal", phone: "(61) 3333-4444", website: "https://leiloesbrasilia.com.br", activeAuctions: 15 },
  { id: 12, name: "Mariana Costa", websiteName: "Capital Federal Leilões", state: "Distrito Federal", phone: "(61) 2222-3333", website: "https://capitalfederalleiloes.com.br", activeAuctions: 9 },
  { id: 13, name: "Pedro Almeida", websiteName: "Bahia Leilões", state: "Bahia", phone: "(71) 4444-2222", website: "https://bahialeiloes.com.br", activeAuctions: 0 },
  { id: 14, name: "Camila Souza", websiteName: "Salvador Auctions", state: "Bahia", phone: "(71) 5555-6666", website: "https://salvadorauctions.com.br", activeAuctions: 7 },
  { id: 15, name: "Luciana Rocha", websiteName: "Paraná Auctions", state: "Paraná", phone: "(41) 8888-1111", website: "https://paranauctions.com.br", activeAuctions: 19 },
  { id: 16, name: "Eduardo Campos", websiteName: "Curitiba Leilões", state: "Paraná", phone: "(41) 7777-9999", website: "https://curitibailoes.com.br", activeAuctions: 11 },
  { id: 17, name: "Roberto Lima", websiteName: "RS Leilões", state: "Rio Grande do Sul", phone: "(51) 6666-9999", website: "https://rsleiloes.com.br", activeAuctions: 31 },
  { id: 18, name: "Julia Pereira", websiteName: "Gaúcho Leilões", state: "Rio Grande do Sul", phone: "(51) 5555-8888", website: "https://gaucholeiloes.com.br", activeAuctions: 14 },
  { id: 19, name: "Fernanda Dias", websiteName: "Ceará Leilões", state: "Ceará", phone: "(85) 2222-7777", website: "https://cearaleiloes.com.br", activeAuctions: 12 },
  { id: 20, name: "Marcos Oliveira", websiteName: "Fortaleza Auctions", state: "Ceará", phone: "(85) 1111-5555", activeAuctions: 0 },
  { id: 21, name: "Marcos Pereira", websiteName: "SC Auctions", state: "Santa Catarina", phone: "(48) 1111-5555", website: "https://scauctions.com.br", activeAuctions: 5 },
  { id: 22, name: "Isabela Santos", websiteName: "Catarinense Leilões", state: "Santa Catarina", phone: "(48) 2222-6666", website: "https://catarinenseleiloes.com.br", activeAuctions: 8 },
  { id: 23, name: "Patricia Gonçalves", websiteName: "Goiás Leilões", state: "Goiás", phone: "(62) 3333-8888", website: "https://goiasleiloes.com.br", activeAuctions: 0 },
  { id: 24, name: "Diego Almeida", websiteName: "Goiânia Auctions", state: "Goiás", phone: "(62) 4444-7777", website: "https://goianiaauctions.com.br", activeAuctions: 6 },
  { id: 25, name: "Antonio Ferreira", websiteName: "Acre Leilões", state: "Acre", phone: "(68) 4444-5555", activeAuctions: 0 },
  { id: 26, name: "Helena Martins", websiteName: "Alagoas Auctions", state: "Alagoas", phone: "(82) 5555-6666", website: "https://alagoasauctions.com.br", activeAuctions: 0 },
  { id: 27, name: "Rafael Souza", websiteName: "Amapá Leilões", state: "Amapá", phone: "(96) 6666-7777", activeAuctions: 0 },
  { id: 28, name: "Juliana Barbosa", websiteName: "Amazonas Leilões", state: "Amazonas", phone: "(97) 7777-8888", website: "https://amazanasleiloes.com.br", activeAuctions: 9 },
  { id: 29, name: "Eduardo Campos", websiteName: "ES Leilões", state: "Espírito Santo", phone: "(27) 8888-9999", website: "https://esleiloes.com.br", activeAuctions: 6 },
  { id: 30, name: "Carla Mendes", websiteName: "Maranhão Auctions", state: "Maranhão", phone: "(98) 9999-1111", activeAuctions: 0 },
  { id: 31, name: "Bruno Silva", websiteName: "MT Leilões", state: "Mato Grosso", phone: "(65) 1111-2222", website: "https://mtleiloes.com.br", activeAuctions: 11 },
  { id: 32, name: "Camila Torres", websiteName: "MS Leilões", state: "Mato Grosso do Sul", phone: "(67) 2222-3333", website: "https://msleiloes.com.br", activeAuctions: 0 },
  { id: 33, name: "Diego Santos", websiteName: "Pará Leilões", state: "Pará", phone: "(91) 3333-4444", activeAuctions: 0 },
  { id: 34, name: "Isabela Costa", websiteName: "PB Leilões", state: "Paraíba", phone: "(83) 4444-5555", website: "https://pbleiloes.com.br", activeAuctions: 3 },
  { id: 35, name: "Gustavo Reis", websiteName: "PE Leilões", state: "Pernambuco", phone: "(81) 5555-6666", website: "https://peleiloes.com.br", activeAuctions: 16 },
  { id: 36, name: "Natália Moura", websiteName: "Piauí Auctions", state: "Piauí", phone: "(86) 6666-7777", activeAuctions: 0 },
  { id: 37, name: "Leonardo Alves", websiteName: "RN Leilões", state: "Rio Grande do Norte", phone: "(84) 7777-8888", website: "https://rnleiloes.com.br", activeAuctions: 5 },
  { id: 38, name: "Vanessa Lima", websiteName: "RO Leilões", state: "Rondônia", phone: "(69) 8888-9999", activeAuctions: 0 },
  { id: 39, name: "Thiago Nunes", websiteName: "RR Leilões", state: "Roraima", phone: "(95) 9999-1111", website: "https://rrleiloes.com.br", activeAuctions: 0 },
  { id: 40, name: "Larissa Freitas", websiteName: "SE Leilões", state: "Sergipe", phone: "(79) 1111-2222", website: "https://seleiloes.com.br", activeAuctions: 4 },
  { id: 41, name: "Felipe Cardoso", websiteName: "TO Leilões", state: "Tocantins", phone: "(63) 2222-3333", activeAuctions: 0 }
];
