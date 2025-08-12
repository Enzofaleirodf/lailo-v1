# Lailo v1 🏡🚗

**Sistema de Leilões Imobiliários e de Veículos**

Uma plataforma moderna e robusta para leilões desenvolvida com Next.js 15, TypeScript e um sistema de design completo. Especializando-se em imóveis e veículos com interface intuitiva e componentes reutilizáveis.

## 🚀 Tecnologias

### Frontend
- **Next.js 15** - Framework React com App Directory e Turbo
- **TypeScript 5.8** - Tipagem estática rigorosa
- **Tailwind CSS v4** - Framework CSS utility-first moderno
- **React 19** - Biblioteca UI com recursos mais recentes
- **Radix UI** - Componentes primitivos acessíveis (15+ componentes)
- **Lucide React** - Biblioteca de ícones moderna e otimizada
- **React Icons** - Conjunto adicional de ícones
- **Heroicons** - Ícones SVG criados pela Tailwind CSS

### Estado & Dados
- **Zustand** - Gerenciamento de estado leve e performático
- **TanStack Query (React Query)** - Cache e sincronização de dados server-state
- **Zod** - Validação de schemas TypeScript-first

### UI & Styling
- **Class Variance Authority (CVA)** - Sistema de variants consistente
- **cn function** - Merge inteligente de classes Tailwind
- **Tailwind Merge** - Otimização de classes conflitantes
- **Next Themes** - Sistema de tema dark/light
- **Sonner** - Toast notifications elegantes
- **CMDK** - Interface de comandos

### Design System
- **Design Tokens** - Sistema de cores, tipografia e espaçamento
- **Componentes Reutilizáveis** - 80+ componentes UI organizados
- **Class Variance Authority (CVA)** - Variants consistentes
- **cn function** - Merge inteligente de classes Tailwind

### DevEx & Qualidade
- **PNPM 10** - Gerenciador de pacotes rápido e eficiente
- **TypeScript ESLint 8** + **Prettier 3** - Linting e formatação
- **Jest 29** + **React Testing Library** - Testes unitários robustos
- **Playwright** - Testes E2E multi-browser automatizados
- **Cross-env** - Variáveis de ambiente cross-platform
- **Total TypeScript Reset** - Tipos TypeScript otimizados
- **PostCSS** + **Tailwind Plugin** - Processamento CSS avançado
- **CLAUDE.md** - Documentação para AI assistants

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
pnpm install

# Inicie o servidor de desenvolvimento
pnpm dev
```

### Scripts Disponíveis
```bash
pnpm dev          # Servidor de desenvolvimento (com Turbo)
pnpm build        # Build de produção
pnpm start        # Servidor de produção
pnpm lint         # Verificação de lint
pnpm lint:fix     # Correção automática de lint
pnpm prettier     # Verificação de formatação
pnpm prettier:fix # Correção automática de formatação
pnpm test         # Testes unitários (Jest)
pnpm test:watch   # Testes em modo watch
pnpm test:coverage # Cobertura de testes
pnpm e2e:headless # Testes E2E (Playwright)
pnpm e2e:ui       # Testes E2E com interface
```

### Estrutura do Projeto
```
├── app/                     # Next.js 15 App Router
│   ├── api/                # API Routes
│   ├── layout.tsx          # Layout raiz
│   └── page.tsx            # Página principal
├── src/
│   └── design-system/      # Sistema de design completo
│       ├── components/     # Componentes principais
│       │   └── ui/        # 80+ componentes UI base
│       ├── tokens/        # Design tokens (cores, tipografia)
│       └── utils/         # Utilitários (cn function)
├── components/             # Componentes legados (Button, Counter)
├── store/                  # Zustand stores
├── styles/                 # Tailwind CSS global
├── e2e/                   # Playwright E2E tests
├── lib/                   # Utilitários gerais
└── Comps/                 # Componentes específicos do domínio
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
- [ ] Storybook para documentação de componentes
- [ ] Server Actions para operações server-side
- [ ] React Server Components otimizados
- [ ] Performance optimization (bundle analysis)
- [ ] PWA capabilities (service workers)
- [ ] SEO enhancement (metadata dinâmico)
- [ ] Integração completa TanStack Query
- [ ] Sistema de cache avançado
- [ ] Internacionalização (i18n)

## 📄 Licença

MIT License - Veja [LICENSE](LICENSE) para mais detalhes.

---

⚡ **Desenvolvido com Next.js 15 + React 19 + TypeScript 5.8 + TanStack Query + Design System completo**