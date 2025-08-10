export const typography = {
  // Família de fontes
  fontFamily: {
    primary: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
    mono: ['ui-monospace', 'SFMono-Regular', 'Monaco', 'Consolas', 'monospace'],
  },

  // Tamanhos de fonte (rem)
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem' }],      // 12px
    sm: ['0.875rem', { lineHeight: '1.25rem' }],   // 14px
    base: ['1rem', { lineHeight: '1.5rem' }],      // 16px
    lg: ['1.125rem', { lineHeight: '1.75rem' }],   // 18px
    xl: ['1.25rem', { lineHeight: '1.75rem' }],    // 20px
    '2xl': ['1.5rem', { lineHeight: '2rem' }],     // 24px
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
    '4xl': ['2.25rem', { lineHeight: '2.5rem' }],   // 36px
    '5xl': ['3rem', { lineHeight: '3.5rem' }],      // 48px
    '6xl': ['3.75rem', { lineHeight: '4rem' }],     // 60px
    '7xl': ['4.5rem', { lineHeight: '4.5rem' }],    // 72px
    '8xl': ['6rem', { lineHeight: '6rem' }],        // 96px
    '9xl': ['8rem', { lineHeight: '8rem' }],        // 128px
  },

  // Pesos de fonte
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },

  // Altura de linha
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },

  // Espaçamento entre letras
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },

  // Estilos de texto predefinidos
  textStyles: {
    // Títulos
    h1: {
      fontSize: '3rem',
      fontWeight: '700',
      lineHeight: '3.5rem',
      letterSpacing: '-0.025em',
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: '600',
      lineHeight: '2.5rem',
      letterSpacing: '-0.025em',
    },
    h3: {
      fontSize: '1.875rem',
      fontWeight: '600',
      lineHeight: '2.25rem',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: '600',
      lineHeight: '2rem',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: '600',
      lineHeight: '1.75rem',
    },
    h6: {
      fontSize: '1.125rem',
      fontWeight: '600',
      lineHeight: '1.75rem',
    },

    // Texto de corpo
    'body-lg': {
      fontSize: '1.125rem',
      fontWeight: '400',
      lineHeight: '1.75rem',
    },
    'body-base': {
      fontSize: '1rem',
      fontWeight: '400',
      lineHeight: '1.5rem',
    },
    'body-sm': {
      fontSize: '0.875rem',
      fontWeight: '400',
      lineHeight: '1.25rem',
    },
    'body-xs': {
      fontSize: '0.75rem',
      fontWeight: '400',
      lineHeight: '1rem',
    },

    // Texto de interface
    'ui-lg': {
      fontSize: '1.125rem',
      fontWeight: '500',
      lineHeight: '1.75rem',
    },
    'ui-base': {
      fontSize: '1rem',
      fontWeight: '500',
      lineHeight: '1.5rem',
    },
    'ui-sm': {
      fontSize: '0.875rem',
      fontWeight: '500',
      lineHeight: '1.25rem',
    },
    'ui-xs': {
      fontSize: '0.75rem',
      fontWeight: '500',
      lineHeight: '1rem',
    },

    // Texto mono/código
    'code-lg': {
      fontSize: '1.125rem',
      fontWeight: '400',
      lineHeight: '1.75rem',
      fontFamily: 'ui-monospace, SFMono-Regular, Monaco, Consolas, monospace',
    },
    'code-base': {
      fontSize: '1rem',
      fontWeight: '400',
      lineHeight: '1.5rem',
      fontFamily: 'ui-monospace, SFMono-Regular, Monaco, Consolas, monospace',
    },
    'code-sm': {
      fontSize: '0.875rem',
      fontWeight: '400',
      lineHeight: '1.25rem',
      fontFamily: 'ui-monospace, SFMono-Regular, Monaco, Consolas, monospace',
    },
  },
} as const

export type Typography = typeof typography