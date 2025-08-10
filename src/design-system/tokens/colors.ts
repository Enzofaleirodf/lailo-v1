export const colors = {
  // Cores principais do Lailo
  primary: {
    DEFAULT: '#FEDA03',
    50: '#FFFEF7',
    100: '#FEFDEE',
    200: '#FEFADB',
    300: '#FEF6C7',
    400: '#FEF1A0',
    500: '#FEDA03',
    600: '#E5C403',
    700: '#CC9F02',
    800: '#B38702',
    900: '#7A5B01',
    950: '#3D2D01',
  },

  // Cor escura principal
  dark: {
    DEFAULT: '#040405',
    50: '#F5F5F5',
    100: '#E8E8E8',
    200: '#D1D1D1',
    300: '#BABABA',
    400: '#8C8C8C',
    500: '#5E5E5E',
    600: '#404040',
    700: '#2A2A2A',
    800: '#1A1A1A',
    900: '#0D0D0D',
    950: '#040405',
  },

  // Cores de feedback
  success: {
    DEFAULT: '#28B833',
    50: '#F0FDF1',
    100: '#DCFCE0',
    200: '#BBF7C2',
    300: '#86EFAC',
    400: '#4ADE80',
    500: '#28B833',
    600: '#22C55E',
    700: '#15803D',
    800: '#166534',
    900: '#14532D',
    950: '#052E16',
  },

  error: {
    DEFAULT: '#FF5757',
    50: '#FEF2F2',
    100: '#FEE2E2',
    200: '#FECACA',
    300: '#FCA5A5',
    400: '#F87171',
    500: '#FF5757',
    600: '#DC2626',
    700: '#B91C1C',
    800: '#991B1B',
    900: '#7F1D1D',
    950: '#450A0A',
  },

  destructive: {
    DEFAULT: '#FF4444',
    50: '#FEF2F2',
    100: '#FEE2E2',
    200: '#FECACA',
    300: '#FCA5A5',
    400: '#FF4444',
    500: '#EF4444',
    600: '#DC2626',
    700: '#B91C1C',
    800: '#991B1B',
    900: '#7F1D1D',
    950: '#450A0A',
  },

  // Cores neutras
  background: {
    DEFAULT: '#FFFFFF',
    secondary: '#F8F9FA',
  },

  // Escala de cinzas baseada no dark (#040405) com opacidades
  gray: {
    50: 'rgba(4, 4, 5, 0.03)',   // #040405 com 3% opacidade
    100: 'rgba(4, 4, 5, 0.06)',  // #040405 com 6% opacidade
    200: 'rgba(4, 4, 5, 0.12)',  // #040405 com 12% opacidade
    300: 'rgba(4, 4, 5, 0.18)',  // #040405 com 18% opacidade
    400: 'rgba(4, 4, 5, 0.36)',  // #040405 com 36% opacidade
    500: 'rgba(4, 4, 5, 0.54)',  // #040405 com 54% opacidade
    600: 'rgba(4, 4, 5, 0.72)',  // #040405 com 72% opacidade
    700: 'rgba(4, 4, 5, 0.84)',  // #040405 com 84% opacidade
    800: 'rgba(4, 4, 5, 0.92)',  // #040405 com 92% opacidade
    900: 'rgba(4, 4, 5, 0.96)',  // #040405 com 96% opacidade
    950: '#040405',               // #040405 sólido
  },

  // Cores para bordas e divisores
  border: {
    DEFAULT: 'rgba(4, 4, 5, 0.12)',
    light: 'rgba(4, 4, 5, 0.06)',
    medium: 'rgba(4, 4, 5, 0.18)',
  },

  // Cores para texto
  text: {
    primary: '#040405',
    secondary: 'rgba(4, 4, 5, 0.72)',
    muted: 'rgba(4, 4, 5, 0.54)',
    light: 'rgba(4, 4, 5, 0.36)',
  },
} as const

export type Colors = typeof colors