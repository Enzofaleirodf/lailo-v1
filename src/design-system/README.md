# Design System Lailo

Sistema de design para o projeto Lailo, baseado em tokens e componentes reutilizáveis.

## Estrutura

```
src/design-system/
├── tokens/           # Design tokens (cores, tipografia, espaçamento)
├── components/
│   ├── ui/          # Componentes base (buttons, inputs, etc.)
│   └── patterns/    # Padrões complexos (forms, cards, etc.)
└── utils/           # Utilitários e helpers
```

## Tokens de Design

- **Cores**: Paleta principal do Lailo
- **Tipografia**: Fonte Montserrat
- **Espaçamento**: Sistema base 4px

## Uso

```typescript
import { colors, typography, spacing } from '@/src/design-system'
```