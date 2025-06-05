
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
  // São Paulo - 8 leiloeiros
  { id: 1, name: "Maria Santos", websiteName: "SP Leilões", state: "São Paulo", phone: "(11) 9999-8888", website: "https://spleiloes.com.br", activeAuctions: 42 },
  { id: 2, name: "João Oliveira", websiteName: "Capital Leilões", state: "São Paulo", phone: "(11) 8888-7777", website: "https://capitalleiloes.com.br", activeAuctions: 23 },
  { id: 3, name: "Carlos Mendes", websiteName: "SP Auctions", state: "São Paulo", phone: "(11) 7777-6666", activeAuctions: 0 },
  { id: 4, name: "Ana Ferreira", websiteName: "Paulista Leilões", state: "São Paulo", phone: "(11) 6666-5555", website: "https://paulistaleiloes.com.br", activeAuctions: 15 },
  { id: 5, name: "Roberto Silva", websiteName: "Grande SP Leilões", state: "São Paulo", phone: "(11) 5555-4444", website: "https://grandespleiloes.com.br", activeAuctions: 31 },
  { id: 6, name: "Fernanda Costa", websiteName: "Metropolitano Leilões", state: "São Paulo", phone: "(11) 4444-3333", website: "https://metropolitanoleiloes.com.br", activeAuctions: 18 },
  { id: 7, name: "Lucas Pereira", websiteName: "Interior SP Leilões", state: "São Paulo", phone: "(11) 3333-2222", activeAuctions: 0 },
  { id: 8, name: "Gabriela Lima", websiteName: "Santos Leilões", state: "São Paulo", phone: "(13) 2222-1111", website: "https://santosleiloes.com.br", activeAuctions: 12 },

  // Minas Gerais - 8 leiloeiros
  { id: 9, name: "Carlos Oliveira", websiteName: "Leilões MG", state: "Minas Gerais", phone: "(31) 7777-6666", website: "https://leiloesmg.com.br", activeAuctions: 8 },
  { id: 10, name: "Fernanda Lima", websiteName: "BH Leilões", state: "Minas Gerais", phone: "(31) 5555-4444", website: "https://bhleiloes.com.br", activeAuctions: 12 },
  { id: 11, name: "Roberto Silva", websiteName: "Mineiro Auctions", state: "Minas Gerais", phone: "(31) 4444-3333", activeAuctions: 0 },
  { id: 12, name: "Amanda Santos", websiteName: "Capital Mineira Leilões", state: "Minas Gerais", phone: "(31) 3333-2222", website: "https://capitalmineiraleiloes.com.br", activeAuctions: 19 },
  { id: 13, name: "Diego Almeida", websiteName: "Interior MG Leilões", state: "Minas Gerais", phone: "(34) 2222-1111", website: "https://interiormgleiloes.com.br", activeAuctions: 7 },
  { id: 14, name: "Juliana Torres", websiteName: "Triangulo Mineiro Leilões", state: "Minas Gerais", phone: "(34) 1111-9999", activeAuctions: 0 },
  { id: 15, name: "Marcos Ferreira", websiteName: "Sul de Minas Leilões", state: "Minas Gerais", phone: "(35) 9999-8888", website: "https://sulminleiloes.com.br", activeAuctions: 14 },
  { id: 16, name: "Patricia Gonçalves", websiteName: "Norte MG Leilões", state: "Minas Gerais", phone: "(38) 8888-7777", website: "https://nortemgleiloes.com.br", activeAuctions: 5 },

  // Rio de Janeiro - 8 leiloeiros
  { id: 17, name: "Ana Costa", websiteName: "RJ Leilões", state: "Rio de Janeiro", phone: "(21) 5555-3333", website: "https://rjleiloes.com.br", activeAuctions: 23 },
  { id: 18, name: "Pedro Santos", websiteName: "Carioca Leilões", state: "Rio de Janeiro", phone: "(21) 4444-2222", website: "https://cariocaleiloes.com.br", activeAuctions: 18 },
  { id: 19, name: "Lucia Martins", websiteName: "Rio Auctions", state: "Rio de Janeiro", phone: "(21) 3333-1111", activeAuctions: 0 },
  { id: 20, name: "Eduardo Campos", websiteName: "Fluminense Leilões", state: "Rio de Janeiro", phone: "(21) 2222-9999", website: "https://fluminenseleiloes.com.br", activeAuctions: 25 },
  { id: 21, name: "Carla Souza", websiteName: "Zona Sul Leilões", state: "Rio de Janeiro", phone: "(21) 1111-8888", website: "https://zonasulleiloes.com.br", activeAuctions: 16 },
  { id: 22, name: "Bruno Lima", websiteName: "Baixada Leilões", state: "Rio de Janeiro", phone: "(21) 9999-7777", activeAuctions: 0 },
  { id: 23, name: "Isabela Rocha", websiteName: "Interior RJ Leilões", state: "Rio de Janeiro", phone: "(24) 7777-6666", website: "https://interiorrjleiloes.com.br", activeAuctions: 11 },
  { id: 24, name: "Thiago Alves", websiteName: "Norte Fluminense Leilões", state: "Rio de Janeiro", phone: "(22) 6666-5555", website: "https://nortefluleiloes.com.br", activeAuctions: 9 },

  // Distrito Federal - 6 leiloeiros
  { id: 25, name: "João Silva", websiteName: "Leilões Brasília", state: "Distrito Federal", phone: "(61) 3333-4444", website: "https://leiloesbrasilia.com.br", activeAuctions: 15 },
  { id: 26, name: "Mariana Costa", websiteName: "Capital Federal Leilões", state: "Distrito Federal", phone: "(61) 2222-3333", website: "https://capitalfederalleiloes.com.br", activeAuctions: 9 },
  { id: 27, name: "Felipe Santos", websiteName: "DF Auctions", state: "Distrito Federal", phone: "(61) 1111-2222", website: "https://dfauctions.com.br", activeAuctions: 22 },
  { id: 28, name: "Carolina Oliveira", websiteName: "Planalto Central Leilões", state: "Distrito Federal", phone: "(61) 9999-1111", activeAuctions: 0 },
  { id: 29, name: "Ricardo Pereira", websiteName: "BSB Leilões", state: "Distrito Federal", phone: "(61) 8888-9999", website: "https://bsbleiloes.com.br", activeAuctions: 13 },
  { id: 30, name: "Vanessa Lima", websiteName: "Candangos Leilões", state: "Distrito Federal", phone: "(61) 7777-8888", website: "https://candangosleiloes.com.br", activeAuctions: 8 },

  // Bahia - 6 leiloeiros
  { id: 31, name: "Pedro Almeida", websiteName: "Bahia Leilões", state: "Bahia", phone: "(71) 4444-2222", website: "https://bahialeiloes.com.br", activeAuctions: 0 },
  { id: 32, name: "Camila Souza", websiteName: "Salvador Auctions", state: "Bahia", phone: "(71) 5555-6666", website: "https://salvadorauctions.com.br", activeAuctions: 7 },
  { id: 33, name: "Leonardo Rocha", websiteName: "Nordeste Leilões", state: "Bahia", phone: "(71) 6666-7777", website: "https://nordesteleiloes.com.br", activeAuctions: 17 },
  { id: 34, name: "Marina Santos", websiteName: "Recôncavo Leilões", state: "Bahia", phone: "(75) 7777-8888", activeAuctions: 0 },
  { id: 35, name: "Gustavo Ferreira", websiteName: "Interior BA Leilões", state: "Bahia", phone: "(77) 8888-9999", website: "https://interiorbaleiloes.com.br", activeAuctions: 12 },
  { id: 36, name: "Larissa Costa", websiteName: "Sul da Bahia Leilões", state: "Bahia", phone: "(73) 9999-1111", website: "https://sulbahleiloes.com.br", activeAuctions: 6 },

  // Paraná - 6 leiloeiros
  { id: 37, name: "Luciana Rocha", websiteName: "Paraná Auctions", state: "Paraná", phone: "(41) 8888-1111", website: "https://paranauctions.com.br", activeAuctions: 19 },
  { id: 38, name: "Eduardo Campos", websiteName: "Curitiba Leilões", state: "Paraná", phone: "(41) 7777-9999", website: "https://curitibailoes.com.br", activeAuctions: 11 },
  { id: 39, name: "Fernanda Dias", websiteName: "Norte do Paraná Leilões", state: "Paraná", phone: "(43) 6666-8888", website: "https://nortepr.com.br", activeAuctions: 14 },
  { id: 40, name: "Carlos Mendes", websiteName: "Oeste PR Leilões", state: "Paraná", phone: "(45) 5555-7777", activeAuctions: 0 },
  { id: 41, name: "Juliana Ferreira", websiteName: "Sul do Paraná Leilões", state: "Paraná", phone: "(42) 4444-6666", website: "https://sulprleiloes.com.br", activeAuctions: 8 },
  { id: 42, name: "Diego Santos", websiteName: "Centro-Oeste PR Leilões", state: "Paraná", phone: "(44) 3333-5555", website: "https://centroesteprleiloes.com.br", activeAuctions: 21 },

  // Rio Grande do Sul - 6 leiloeiros
  { id: 43, name: "Roberto Lima", websiteName: "RS Leilões", state: "Rio Grande do Sul", phone: "(51) 6666-9999", website: "https://rsleiloes.com.br", activeAuctions: 31 },
  { id: 44, name: "Julia Pereira", websiteName: "Gaúcho Leilões", state: "Rio Grande do Sul", phone: "(51) 5555-8888", website: "https://gaucholeiloes.com.br", activeAuctions: 14 },
  { id: 45, name: "Anderson Silva", websiteName: "Porto Alegre Leilões", state: "Rio Grande do Sul", phone: "(51) 4444-7777", website: "https://poaleiloes.com.br", activeAuctions: 18 },
  { id: 46, name: "Cristiane Costa", websiteName: "Serra Gaúcha Leilões", state: "Rio Grande do Sul", phone: "(54) 3333-6666", activeAuctions: 0 },
  { id: 47, name: "Marcos Oliveira", websiteName: "Fronteira Oeste Leilões", state: "Rio Grande do Sul", phone: "(55) 2222-5555", website: "https://fronteiraoeteleiloes.com.br", activeAuctions: 10 },
  { id: 48, name: "Tatiane Almeida", websiteName: "Vale dos Sinos Leilões", state: "Rio Grande do Sul", phone: "(51) 1111-4444", website: "https://valesinosleiloes.com.br", activeAuctions: 7 },

  // Ceará - 6 leiloeiros
  { id: 49, name: "Fernanda Dias", websiteName: "Ceará Leilões", state: "Ceará", phone: "(85) 2222-7777", website: "https://cearaleiloes.com.br", activeAuctions: 12 },
  { id: 50, name: "Marcos Oliveira", websiteName: "Fortaleza Auctions", state: "Ceará", phone: "(85) 1111-5555", activeAuctions: 0 },
  { id: 51, name: "Isabela Santos", websiteName: "Nordeste CE Leilões", state: "Ceará", phone: "(85) 9999-4444", website: "https://nordestece.com.br", activeAuctions: 16 },
  { id: 52, name: "Rafael Lima", websiteName: "Interior CE Leilões", state: "Ceará", phone: "(88) 8888-3333", website: "https://interiorce.com.br", activeAuctions: 9 },
  { id: 53, name: "Camila Rocha", websiteName: "Litoral CE Leilões", state: "Ceará", phone: "(85) 7777-2222", activeAuctions: 0 },
  { id: 54, name: "Bruno Ferreira", websiteName: "Sertão Central Leilões", state: "Ceará", phone: "(85) 6666-1111", website: "https://sertaoce.com.br", activeAuctions: 5 },

  // Santa Catarina - 6 leiloeiros
  { id: 55, name: "Marcos Pereira", websiteName: "SC Auctions", state: "Santa Catarina", phone: "(48) 1111-5555", website: "https://scauctions.com.br", activeAuctions: 5 },
  { id: 56, name: "Isabela Santos", websiteName: "Catarinense Leilões", state: "Santa Catarina", phone: "(48) 2222-6666", website: "https://catarinenseleiloes.com.br", activeAuctions: 8 },
  { id: 57, name: "Leonardo Costa", websiteName: "Grande Floripa Leilões", state: "Santa Catarina", phone: "(48) 3333-7777", website: "https://grandefloripa.com.br", activeAuctions: 13 },
  { id: 58, name: "Patricia Almeida", websiteName: "Vale do Itajaí Leilões", state: "Santa Catarina", phone: "(47) 4444-8888", activeAuctions: 0 },
  { id: 59, name: "Gustavo Lima", websiteName: "Norte SC Leilões", state: "Santa Catarina", phone: "(47) 5555-9999", website: "https://nortesc.com.br", activeAuctions: 11 },
  { id: 60, name: "Carla Santos", websiteName: "Sul SC Leilões", state: "Santa Catarina", phone: "(48) 6666-1111", website: "https://sulsc.com.br", activeAuctions: 7 },

  // Goiás - 6 leiloeiros
  { id: 61, name: "Patricia Gonçalves", websiteName: "Goiás Leilões", state: "Goiás", phone: "(62) 3333-8888", website: "https://goiasleiloes.com.br", activeAuctions: 0 },
  { id: 62, name: "Diego Almeida", websiteName: "Goiânia Auctions", state: "Goiás", phone: "(62) 4444-7777", website: "https://goianiaauctions.com.br", activeAuctions: 6 },
  { id: 63, name: "Marina Oliveira", websiteName: "Centro-Oeste GO Leilões", state: "Goiás", phone: "(62) 5555-6666", website: "https://centrooestego.com.br", activeAuctions: 15 },
  { id: 64, name: "Felipe Santos", websiteName: "Interior GO Leilões", state: "Goiás", phone: "(64) 6666-5555", activeAuctions: 0 },
  { id: 65, name: "Larissa Costa", websiteName: "Sul de Goiás Leilões", state: "Goiás", phone: "(64) 7777-4444", website: "https://sulgoleiloes.com.br", activeAuctions: 9 },
  { id: 66, name: "Ricardo Ferreira", websiteName: "Norte GO Leilões", state: "Goiás", phone: "(62) 8888-3333", website: "https://nortego.com.br", activeAuctions: 12 },

  // Outros estados com 6 leiloeiros cada
  // Acre
  { id: 67, name: "Antonio Ferreira", websiteName: "Acre Leilões", state: "Acre", phone: "(68) 4444-5555", activeAuctions: 0 },
  { id: 68, name: "Maria Santos", websiteName: "Rio Branco Leilões", state: "Acre", phone: "(68) 5555-6666", website: "https://riobrancolleiloes.com.br", activeAuctions: 3 },
  { id: 69, name: "Carlos Lima", websiteName: "Amazônia Acre Leilões", state: "Acre", phone: "(68) 6666-7777", activeAuctions: 0 },
  { id: 70, name: "Fernanda Costa", websiteName: "Interior AC Leilões", state: "Acre", phone: "(68) 7777-8888", website: "https://interiorac.com.br", activeAuctions: 2 },
  { id: 71, name: "Roberto Silva", websiteName: "Fronteira AC Leilões", state: "Acre", phone: "(68) 8888-9999", activeAuctions: 0 },
  { id: 72, name: "Juliana Rocha", websiteName: "Vale do Acre Leilões", state: "Acre", phone: "(68) 9999-1111", website: "https://valeacrelleiloes.com.br", activeAuctions: 1 },

  // Alagoas
  { id: 73, name: "Helena Martins", websiteName: "Alagoas Auctions", state: "Alagoas", phone: "(82) 5555-6666", website: "https://alagoasauctions.com.br", activeAuctions: 0 },
  { id: 74, name: "Pedro Santos", websiteName: "Maceió Leilões", state: "Alagoas", phone: "(82) 6666-7777", website: "https://maceioleiloes.com.br", activeAuctions: 4 },
  { id: 75, name: "Carolina Lima", websiteName: "Litoral AL Leilões", state: "Alagoas", phone: "(82) 7777-8888", activeAuctions: 0 },
  { id: 76, name: "Bruno Costa", websiteName: "Interior AL Leilões", state: "Alagoas", phone: "(82) 8888-9999", website: "https://interioral.com.br", activeAuctions: 2 },
  { id: 77, name: "Isabela Ferreira", websiteName: "Sertão AL Leilões", state: "Alagoas", phone: "(82) 9999-1111", activeAuctions: 0 },
  { id: 78, name: "Diego Almeida", websiteName: "Nordeste AL Leilões", state: "Alagoas", phone: "(82) 1111-2222", website: "https://nordesteal.com.br", activeAuctions: 3 },

  // Amapá
  { id: 79, name: "Rafael Souza", websiteName: "Amapá Leilões", state: "Amapá", phone: "(96) 6666-7777", activeAuctions: 0 },
  { id: 80, name: "Mariana Santos", websiteName: "Macapá Leilões", state: "Amapá", phone: "(96) 7777-8888", website: "https://macapaleiloes.com.br", activeAuctions: 2 },
  { id: 81, name: "Felipe Costa", websiteName: "Norte AP Leilões", state: "Amapá", phone: "(96) 8888-9999", activeAuctions: 0 },
  { id: 82, name: "Larissa Lima", websiteName: "Sul AP Leilões", state: "Amapá", phone: "(96) 9999-1111", website: "https://sulap.com.br", activeAuctions: 1 },
  { id: 83, name: "Carlos Ferreira", websiteName: "Fronteira AP Leilões", state: "Amapá", phone: "(96) 1111-2222", activeAuctions: 0 },
  { id: 84, name: "Juliana Rocha", websiteName: "Amazônia AP Leilões", state: "Amapá", phone: "(96) 2222-3333", website: "https://amazoniaap.com.br", activeAuctions: 1 },

  // Amazonas
  { id: 85, name: "Juliana Barbosa", websiteName: "Amazonas Leilões", state: "Amazonas", phone: "(97) 7777-8888", website: "https://amazanasleiloes.com.br", activeAuctions: 9 },
  { id: 86, name: "Ricardo Santos", websiteName: "Manaus Leilões", state: "Amazonas", phone: "(92) 8888-9999", website: "https://manausleiloes.com.br", activeAuctions: 15 },
  { id: 87, name: "Patricia Costa", websiteName: "Interior AM Leilões", state: "Amazonas", phone: "(97) 9999-1111", activeAuctions: 0 },
  { id: 88, name: "Bruno Lima", websiteName: "Rio Negro Leilões", state: "Amazonas", phone: "(97) 1111-2222", website: "https://rionegroleiloes.com.br", activeAuctions: 6 },
  { id: 89, name: "Fernanda Silva", websiteName: "Solimões Leilões", state: "Amazonas", phone: "(97) 2222-3333", activeAuctions: 0 },
  { id: 90, name: "Leonardo Rocha", websiteName: "Amazônia Central Leilões", state: "Amazonas", phone: "(92) 3333-4444", website: "https://amazoniacentral.com.br", activeAuctions: 8 },

  // Espírito Santo
  { id: 91, name: "Eduardo Campos", websiteName: "ES Leilões", state: "Espírito Santo", phone: "(27) 8888-9999", website: "https://esleiloes.com.br", activeAuctions: 6 },
  { id: 92, name: "Marina Santos", websiteName: "Vitória Leilões", state: "Espírito Santo", phone: "(27) 9999-1111", website: "https://vitorileiloes.com.br", activeAuctions: 11 },
  { id: 93, name: "Felipe Costa", websiteName: "Norte ES Leilões", state: "Espírito Santo", phone: "(27) 1111-2222", activeAuctions: 0 },
  { id: 94, name: "Carla Lima", websiteName: "Sul ES Leilões", state: "Espírito Santo", phone: "(28) 2222-3333", website: "https://sulesleiloes.com.br", activeAuctions: 4 },
  { id: 95, name: "Gustavo Ferreira", websiteName: "Interior ES Leilões", state: "Espírito Santo", phone: "(27) 3333-4444", activeAuctions: 0 },
  { id: 96, name: "Isabela Rocha", websiteName: "Litoral ES Leilões", state: "Espírito Santo", phone: "(27) 4444-5555", website: "https://litoralesleiloes.com.br", activeAuctions: 7 },

  // Maranhão
  { id: 97, name: "Carla Mendes", websiteName: "Maranhão Auctions", state: "Maranhão", phone: "(98) 9999-1111", activeAuctions: 0 },
  { id: 98, name: "Roberto Santos", websiteName: "São Luís Leilões", state: "Maranhão", phone: "(98) 1111-2222", website: "https://saoluisleiloes.com.br", activeAuctions: 5 },
  { id: 99, name: "Fernanda Costa", websiteName: "Interior MA Leilões", state: "Maranhão", phone: "(99) 2222-3333", activeAuctions: 0 },
  { id: 100, name: "Diego Lima", websiteName: "Norte MA Leilões", state: "Maranhão", phone: "(98) 3333-4444", website: "https://nortema.com.br", activeAuctions: 3 },
  { id: 101, name: "Larissa Silva", websiteName: "Sul MA Leilões", state: "Maranhão", phone: "(99) 4444-5555", activeAuctions: 0 },
  { id: 102, name: "Carlos Ferreira", websiteName: "Leste MA Leilões", state: "Maranhão", phone: "(98) 5555-6666", website: "https://lestema.com.br", activeAuctions: 2 },

  // Mato Grosso
  { id: 103, name: "Bruno Silva", websiteName: "MT Leilões", state: "Mato Grosso", phone: "(65) 1111-2222", website: "https://mtleiloes.com.br", activeAuctions: 11 },
  { id: 104, name: "Patricia Santos", websiteName: "Cuiabá Leilões", state: "Mato Grosso", phone: "(65) 2222-3333", website: "https://cuiabaleiloes.com.br", activeAuctions: 18 },
  { id: 105, name: "Leonardo Costa", websiteName: "Norte MT Leilões", state: "Mato Grosso", phone: "(66) 3333-4444", activeAuctions: 0 },
  { id: 106, name: "Marina Lima", websiteName: "Sul MT Leilões", state: "Mato Grosso", phone: "(67) 4444-5555", website: "https://sulmtleiloes.com.br", activeAuctions: 7 },
  { id: 107, name: "Felipe Rocha", websiteName: "Centro MT Leilões", state: "Mato Grosso", phone: "(65) 5555-6666", activeAuctions: 0 },
  { id: 108, name: "Gabriela Ferreira", websiteName: "Pantanal MT Leilões", state: "Mato Grosso", phone: "(65) 6666-7777", website: "https://pantanalmtleiloes.com.br", activeAuctions: 9 },

  // Mato Grosso do Sul
  { id: 109, name: "Camila Torres", websiteName: "MS Leilões", state: "Mato Grosso do Sul", phone: "(67) 2222-3333", website: "https://msleiloes.com.br", activeAuctions: 0 },
  { id: 110, name: "Ricardo Santos", websiteName: "Campo Grande Leilões", state: "Mato Grosso do Sul", phone: "(67) 3333-4444", website: "https://campograndeleiloes.com.br", activeAuctions: 13 },
  { id: 111, name: "Isabela Costa", websiteName: "Norte MS Leilões", state: "Mato Grosso do Sul", phone: "(67) 4444-5555", activeAuctions: 0 },
  { id: 112, name: "Bruno Lima", websiteName: "Sul MS Leilões", state: "Mato Grosso do Sul", phone: "(67) 5555-6666", website: "https://sulmsleiloes.com.br", activeAuctions: 6 },
  { id: 113, name: "Fernanda Silva", websiteName: "Pantanal MS Leilões", state: "Mato Grosso do Sul", phone: "(67) 6666-7777", activeAuctions: 0 },
  { id: 114, name: "Diego Rocha", websiteName: "Centro MS Leilões", state: "Mato Grosso do Sul", phone: "(67) 7777-8888", website: "https://centromsleiloes.com.br", activeAuctions: 4 },

  // Pará
  { id: 115, name: "Diego Santos", websiteName: "Pará Leilões", state: "Pará", phone: "(91) 3333-4444", activeAuctions: 0 },
  { id: 116, name: "Marina Costa", websiteName: "Belém Leilões", state: "Pará", phone: "(91) 4444-5555", website: "https://belemleiloes.com.br", activeAuctions: 8 },
  { id: 117, name: "Felipe Santos", websiteName: "Interior PA Leilões", state: "Pará", phone: "(93) 5555-6666", activeAuctions: 0 },
  { id: 118, name: "Larissa Lima", websiteName: "Norte PA Leilões", state: "Pará", phone: "(91) 6666-7777", website: "https://nortepa.com.br", activeAuctions: 5 },
  { id: 119, name: "Carlos Silva", websiteName: "Sul PA Leilões", state: "Pará", phone: "(94) 7777-8888", activeAuctions: 0 },
  { id: 120, name: "Juliana Ferreira", websiteName: "Amazônia PA Leilões", state: "Pará", phone: "(91) 8888-9999", website: "https://amazoniapa.com.br", activeAuctions: 3 },

  // Paraíba
  { id: 121, name: "Isabela Costa", websiteName: "PB Leilões", state: "Paraíba", phone: "(83) 4444-5555", website: "https://pbleiloes.com.br", activeAuctions: 3 },
  { id: 122, name: "Roberto Santos", websiteName: "João Pessoa Leilões", state: "Paraíba", phone: "(83) 5555-6666", website: "https://joaopessaleiloes.com.br", activeAuctions: 7 },
  { id: 123, name: "Fernanda Lima", websiteName: "Interior PB Leilões", state: "Paraíba", phone: "(83) 6666-7777", activeAuctions: 0 },
  { id: 124, name: "Bruno Costa", websiteName: "Litoral PB Leilões", state: "Paraíba", phone: "(83) 7777-8888", website: "https://litoralpb.com.br", activeAuctions: 4 },
  { id: 125, name: "Marina Silva", websiteName: "Sertão PB Leilões", state: "Paraíba", phone: "(83) 8888-9999", activeAuctions: 0 },
  { id: 126, name: "Leonardo Rocha", websiteName: "Agreste PB Leilões", state: "Paraíba", phone: "(83) 9999-1111", website: "https://agrestepb.com.br", activeAuctions: 2 },

  // Pernambuco
  { id: 127, name: "Gustavo Reis", websiteName: "PE Leilões", state: "Pernambuco", phone: "(81) 5555-6666", website: "https://peleiloes.com.br", activeAuctions: 16 },
  { id: 128, name: "Patricia Santos", websiteName: "Recife Leilões", state: "Pernambuco", phone: "(81) 6666-7777", website: "https://recifeleiloes.com.br", activeAuctions: 22 },
  { id: 129, name: "Felipe Costa", websiteName: "Interior PE Leilões", state: "Pernambuco", phone: "(87) 7777-8888", activeAuctions: 0 },
  { id: 130, name: "Carla Lima", websiteName: "Litoral PE Leilões", state: "Pernambuco", phone: "(81) 8888-9999", website: "https://litoralpe.com.br", activeAuctions: 9 },
  { id: 131, name: "Diego Silva", websiteName: "Sertão PE Leilões", state: "Pernambuco", phone: "(87) 9999-1111", activeAuctions: 0 },
  { id: 132, name: "Isabela Ferreira", websiteName: "Agreste PE Leilões", state: "Pernambuco", phone: "(81) 1111-2222", website: "https://agrestepe.com.br", activeAuctions: 11 },

  // Piauí
  { id: 133, name: "Natália Moura", websiteName: "Piauí Auctions", state: "Piauí", phone: "(86) 6666-7777", activeAuctions: 0 },
  { id: 134, name: "Ricardo Santos", websiteName: "Teresina Leilões", state: "Piauí", phone: "(86) 7777-8888", website: "https://teresinalleiloes.com.br", activeAuctions: 5 },
  { id: 135, name: "Marina Costa", websiteName: "Interior PI Leilões", state: "Piauí", phone: "(89) 8888-9999", activeAuctions: 0 },
  { id: 136, name: "Bruno Lima", websiteName: "Norte PI Leilões", state: "Piauí", phone: "(86) 9999-1111", website: "https://nortepi.com.br", activeAuctions: 3 },
  { id: 137, name: "Fernanda Silva", websiteName: "Sul PI Leilões", state: "Piauí", phone: "(89) 1111-2222", activeAuctions: 0 },
  { id: 138, name: "Carlos Rocha", websiteName: "Centro PI Leilões", state: "Piauí", phone: "(86) 2222-3333", website: "https://centropi.com.br", activeAuctions: 2 },

  // Rio Grande do Norte
  { id: 139, name: "Leonardo Alves", websiteName: "RN Leilões", state: "Rio Grande do Norte", phone: "(84) 7777-8888", website: "https://rnleiloes.com.br", activeAuctions: 5 },
  { id: 140, name: "Patricia Santos", websiteName: "Natal Leilões", state: "Rio Grande do Norte", phone: "(84) 8888-9999", website: "https://natalleiloes.com.br", activeAuctions: 9 },
  { id: 141, name: "Felipe Costa", websiteName: "Interior RN Leilões", state: "Rio Grande do Norte", phone: "(84) 9999-1111", activeAuctions: 0 },
  { id: 142, name: "Marina Lima", websiteName: "Litoral RN Leilões", state: "Rio Grande do Norte", phone: "(84) 1111-2222", website: "https://litoralrn.com.br", activeAuctions: 4 },
  { id: 143, name: "Bruno Silva", websiteName: "Sertão RN Leilões", state: "Rio Grande do Norte", phone: "(84) 2222-3333", activeAuctions: 0 },
  { id: 144, name: "Larissa Ferreira", websiteName: "Agreste RN Leilões", state: "Rio Grande do Norte", phone: "(84) 3333-4444", website: "https://agrestern.com.br", activeAuctions: 3 },

  // Rondônia
  { id: 145, name: "Vanessa Lima", websiteName: "RO Leilões", state: "Rondônia", phone: "(69) 8888-9999", activeAuctions: 0 },
  { id: 146, name: "Roberto Santos", websiteName: "Porto Velho Leilões", state: "Rondônia", phone: "(69) 9999-1111", website: "https://portovelloleiloes.com.br", activeAuctions: 4 },
  { id: 147, name: "Marina Costa", websiteName: "Interior RO Leilões", state: "Rondônia", phone: "(69) 1111-2222", activeAuctions: 0 },
  { id: 148, name: "Felipe Lima", websiteName: "Norte RO Leilões", state: "Rondônia", phone: "(69) 2222-3333", website: "https://nortero.com.br", activeAuctions: 2 },
  { id: 149, name: "Carla Silva", websiteName: "Sul RO Leilões", state: "Rondônia", phone: "(69) 3333-4444", activeAuctions: 0 },
  { id: 150, name: "Diego Rocha", websiteName: "Centro RO Leilões", state: "Rondônia", phone: "(69) 4444-5555", website: "https://centroro.com.br", activeAuctions: 1 },

  // Roraima
  { id: 151, name: "Thiago Nunes", websiteName: "RR Leilões", state: "Roraima", phone: "(95) 9999-1111", website: "https://rrleiloes.com.br", activeAuctions: 0 },
  { id: 152, name: "Patricia Santos", websiteName: "Boa Vista Leilões", state: "Roraima", phone: "(95) 1111-2222", website: "https://boavistaleiloes.com.br", activeAuctions: 2 },
  { id: 153, name: "Felipe Costa", websiteName: "Interior RR Leilões", state: "Roraima", phone: "(95) 2222-3333", activeAuctions: 0 },
  { id: 154, name: "Marina Lima", websiteName: "Norte RR Leilões", state: "Roraima", phone: "(95) 3333-4444", website: "https://norterr.com.br", activeAuctions: 1 },
  { id: 155, name: "Bruno Silva", websiteName: "Sul RR Leilões", state: "Roraima", phone: "(95) 4444-5555", activeAuctions: 0 },
  { id: 156, name: "Larissa Ferreira", websiteName: "Fronteira RR Leilões", state: "Roraima", phone: "(95) 5555-6666", website: "https://fronteirarr.com.br", activeAuctions: 1 },

  // Sergipe
  { id: 157, name: "Larissa Freitas", websiteName: "SE Leilões", state: "Sergipe", phone: "(79) 1111-2222", website: "https://seleiloes.com.br", activeAuctions: 4 },
  { id: 158, name: "Roberto Santos", websiteName: "Aracaju Leilões", state: "Sergipe", phone: "(79) 2222-3333", website: "https://aracajuleiloes.com.br", activeAuctions: 7 },
  { id: 159, name: "Marina Costa", websiteName: "Interior SE Leilões", state: "Sergipe", phone: "(79) 3333-4444", activeAuctions: 0 },
  { id: 160, name: "Felipe Lima", websiteName: "Litoral SE Leilões", state: "Sergipe", phone: "(79) 4444-5555", website: "https://litoralse.com.br", activeAuctions: 3 },
  { id: 161, name: "Carla Silva", websiteName: "Sertão SE Leilões", state: "Sergipe", phone: "(79) 5555-6666", activeAuctions: 0 },
  { id: 162, name: "Diego Rocha", websiteName: "Agreste SE Leilões", state: "Sergipe", phone: "(79) 6666-7777", website: "https://agrestese.com.br", activeAuctions: 2 },

  // Tocantins
  { id: 163, name: "Felipe Cardoso", websiteName: "TO Leilões", state: "Tocantins", phone: "(63) 2222-3333", activeAuctions: 0 },
  { id: 164, name: "Patricia Santos", websiteName: "Palmas Leilões", state: "Tocantins", phone: "(63) 3333-4444", website: "https://palmasleiloes.com.br", activeAuctions: 5 },
  { id: 165, name: "Marina Costa", websiteName: "Norte TO Leilões", state: "Tocantins", phone: "(63) 4444-5555", activeAuctions: 0 },
  { id: 166, name: "Bruno Lima", websiteName: "Sul TO Leilões", state: "Tocantins", phone: "(63) 5555-6666", website: "https://sultoleiloes.com.br", activeAuctions: 3 },
  { id: 167, name: "Fernanda Silva", websiteName: "Centro TO Leilões", state: "Tocantins", phone: "(63) 6666-7777", activeAuctions: 0 },
  { id: 168, name: "Carlos Rocha", websiteName: "Bico do Papagaio Leilões", state: "Tocantins", phone: "(63) 7777-8888", website: "https://bicotoleiloes.com.br", activeAuctions: 2 }
];
