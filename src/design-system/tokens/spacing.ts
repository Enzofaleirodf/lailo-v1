export const spacing = {
  // Sistema base 4px
  // Valores em rem (1rem = 16px)
  0: '0px',
  px: '1px',
  0.5: '0.125rem',  // 2px
  1: '0.25rem',     // 4px
  1.5: '0.375rem',  // 6px
  2: '0.5rem',      // 8px
  2.5: '0.625rem',  // 10px
  3: '0.75rem',     // 12px
  3.5: '0.875rem',  // 14px
  4: '1rem',        // 16px
  5: '1.25rem',     // 20px
  6: '1.5rem',      // 24px
  7: '1.75rem',     // 28px
  8: '2rem',        // 32px
  9: '2.25rem',     // 36px
  10: '2.5rem',     // 40px
  11: '2.75rem',    // 44px
  12: '3rem',       // 48px
  14: '3.5rem',     // 56px
  16: '4rem',       // 64px
  20: '5rem',       // 80px
  24: '6rem',       // 96px
  28: '7rem',       // 112px
  32: '8rem',       // 128px
  36: '9rem',       // 144px
  40: '10rem',      // 160px
  44: '11rem',      // 176px
  48: '12rem',      // 192px
  52: '13rem',      // 208px
  56: '14rem',      // 224px
  60: '15rem',      // 240px
  64: '16rem',      // 256px
  72: '18rem',      // 288px
  80: '20rem',      // 320px
  96: '24rem',      // 384px
} as const

// Espaçamentos semânticos para componentes
export const componentSpacing = {
  // Espaçamento interno (padding)
  padding: {
    xs: spacing[1],      // 4px
    sm: spacing[2],      // 8px
    md: spacing[4],      // 16px
    lg: spacing[6],      // 24px
    xl: spacing[8],      // 32px
    '2xl': spacing[12],  // 48px
  },

  // Espaçamento externo (margin)
  margin: {
    xs: spacing[1],      // 4px
    sm: spacing[2],      // 8px
    md: spacing[4],      // 16px
    lg: spacing[6],      // 24px
    xl: spacing[8],      // 32px
    '2xl': spacing[12],  // 48px
  },

  // Gaps para layouts
  gap: {
    xs: spacing[1],      // 4px
    sm: spacing[2],      // 8px
    md: spacing[4],      // 16px
    lg: spacing[6],      // 24px
    xl: spacing[8],      // 32px
    '2xl': spacing[12],  // 48px
  },

  // Espaçamentos específicos para componentes
  button: {
    padding: {
      sm: `${spacing[2]} ${spacing[3]}`,     // 8px 12px
      md: `${spacing[2.5]} ${spacing[4]}`,   // 10px 16px
      lg: `${spacing[3]} ${spacing[6]}`,     // 12px 24px
      xl: `${spacing[4]} ${spacing[8]}`,     // 16px 32px
    },
    gap: spacing[2], // 8px entre ícone e texto
  },

  input: {
    padding: {
      sm: `${spacing[2]} ${spacing[3]}`,     // 8px 12px
      md: `${spacing[2.5]} ${spacing[4]}`,   // 10px 16px
      lg: `${spacing[3]} ${spacing[4]}`,     // 12px 16px
    },
  },

  card: {
    padding: {
      sm: spacing[4],      // 16px
      md: spacing[6],      // 24px
      lg: spacing[8],      // 32px
    },
    gap: spacing[4],       // 16px entre elementos
  },

  section: {
    padding: {
      sm: spacing[8],      // 32px
      md: spacing[12],     // 48px
      lg: spacing[16],     // 64px
      xl: spacing[20],     // 80px
    },
  },

  container: {
    padding: {
      mobile: spacing[4],  // 16px
      tablet: spacing[6],  // 24px
      desktop: spacing[8], // 32px
    },
  },
} as const

// Breakpoints para responsividade
export const breakpoints = {
  xs: '475px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const

export type Spacing = typeof spacing
export type ComponentSpacing = typeof componentSpacing
export type Breakpoints = typeof breakpoints