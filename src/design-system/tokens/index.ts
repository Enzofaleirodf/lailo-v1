// Design Tokens para o Lailo Design System
export { colors, type Colors } from './colors'
export { typography, type Typography } from './typography'
export { 
  spacing, 
  componentSpacing, 
  breakpoints,
  type Spacing, 
  type ComponentSpacing, 
  type Breakpoints 
} from './spacing'

// Exportação unificada de todos os tokens
export const tokens = {
  colors,
  typography,
  spacing,
  componentSpacing,
  breakpoints,
} as const

export type DesignTokens = typeof tokens