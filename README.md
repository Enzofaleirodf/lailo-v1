# Lailo v1 🏡🚗

**Sistema de Leilões Imobiliários e de Veículos**

Uma plataforma moderna e robusta para leilões desenvolvida com Next.js 15, TypeScript e um sistema de design completo. Especializando-se em imóveis e veículos com interface intuitiva e componentes reutilizáveis.

## 🚀 Tecnologias

### Frontend
- **Next.js 15** - Framework React com App Directory
- **TypeScript** - Tipagem estática rigorosa
- **Tailwind CSS v4** - Framework CSS utility-first
- **Radix UI** - Componentes primitivos acessíveis
- **Lucide React** - Biblioteca de ícones moderna
- **Zustand** - Gerenciamento de estado leve

### Design System
- **Design Tokens** - Sistema de cores, tipografia e espaçamento
- **Componentes Reutilizáveis** - 80+ componentes UI organizados
- **Class Variance Authority (CVA)** - Variants consistentes
- **cn function** - Merge inteligente de classes Tailwind

### DevEx & Qualidade
- **ESLint 9** + **Prettier** - Consistência de código
- **Vitest** + **React Testing Library** - Testes unitários
- **Playwright** - Testes E2E
- **GitHub Actions** - CI/CD automático

## 🎨 Design System

### Cores Personalizadas
- **Primary**: `#FEDA03` (Amarelo vibrante)
- **Dark**: `#040405` (Preto para textos/botões)
- **Success**: `#28B833` (Verde)
- **Error**: `#FF5757` (Vermelho)
- **Destructive**: `#FF4444` (Vermelho destrutivo)

### Estrutura de Componentes
```
src/design-system/
├── components/           # Componentes principais
│   ├── ui/              # Componentes UI base
│   ├── auction-card.tsx # Card de leilão
│   ├── property-card.tsx # Card de propriedade
│   ├── vehicle-sidebar.tsx # Filtros de veículos
│   └── ...
├── tokens/              # Design tokens
└── utils/               # Utilitários (cn function)
```

## 📱 Funcionalidades

### Leilões de Imóveis
- **Filtros Avançados**: Localização, metragem, valor, condição
- **Visualizações**: Grid e lista adaptáveis
- **Cards Informativos**: Avaliação, praça atual, leiloeiro
- **Responsivo**: Design mobile-first

### Leilões de Veículos  
- **Filtros Específicos**: Marca/modelo, ano, montadora, condição
- **Categorias**: Carros, motos, outros veículos
- **Status**: Em andamento, finalizados
- **Origem**: Judicial, extrajudicial, particular

### Interface & UX
- **Navigation Tabs**: Alternância entre Imóveis e Veículos
- **Sidebar Filters**: Filtros colapsíveis com contadores
- **Stats Bar**: Estatísticas em tempo real
- **Mobile Bottom Nav**: Navegação otimizada para mobile

## 🛠️ Desenvolvimento

### Instalação
```bash
# Clone o repositório
git clone https://github.com/Enzofaleirodf/lailo-v1.git
cd lailo-v1

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

### Scripts Disponíveis
```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção
npm run start        # Servidor de produção
npm run lint         # Verificação de lint
npm run test         # Testes unitários
npm run e2e:headless # Testes E2E
```

### Estrutura do Projeto
```
├── app/                 # Next.js App Router
├── src/
│   └── design-system/   # Sistema de design completo
├── components/          # Componentes legados
├── store/              # Gerenciamento de estado
├── styles/             # Estilos globais
└── e2e/                # Testes E2E
```

## 📦 Componentes Principais

### Cards de Conteúdo
- **AuctionCard**: Exibição de leilões
- **PropertyCard**: Cards de imóveis (grid/lista)
- **Suporte a veículos**: Props flexíveis para diferentes tipos

### Filtros e Navegação
- **FilterBar**: Barra de filtros principal
- **VehicleSidebar**: Filtros específicos para veículos
- **NavigationTabs**: Navegação entre categorias

### Interface
- **Header/Footer**: Layout consistente
- **StatsBar**: Estatísticas e ordenação
- **ControlsBar**: Controles de visualização

## 🎯 Próximos Passos

### Funcionalidades Planejadas
- [ ] Sistema de autenticação
- [ ] Área do usuário/dashboard
- [ ] Sistema de favoritos
- [ ] Notificações em tempo real
- [ ] API de leilões
- [ ] Sistema de lances

### Melhorias Técnicas
- [ ] Testes de cobertura 100%
- [ ] Storybook para documentação
- [ ] Performance otimization
- [ ] PWA capabilities
- [ ] SEO enhancement

## 📄 Licença

MIT License - Veja [LICENSE](LICENSE) para mais detalhes.

---

⚡ **Desenvolvido com Next.js 15 + TypeScript + Design System completo**