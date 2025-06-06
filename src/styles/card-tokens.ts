
export const cardTokens = {
  // Espaçamentos padrão para cards
  spacing: {
    cardPadding: 'p-3',           // Padding único para todos os cards
    contentGap: 'gap-3',          // Gap padrão entre elementos
    priceMargin: 'mt-3',          // Margin top entre header e price
    separatorMargin: 'my-2',      // Margin do separator (8px em cima e embaixo)
  },
  
  // Tamanhos de imagem padronizados
  image: {
    horizontal: 'w-24 h-full',    // Altura total da div pai no horizontal
    vertical: 'w-full aspect-[4/3]', // Aspecto fixo para layout vertical
  },
  
  // Breakpoints unificados
  breakpoints: {
    sm: '640px',   // Small devices
    md: '768px',   // Medium devices  
    lg: '1024px',  // Large devices
  },
  
  // Grid responsivo padronizado
  grid: {
    mobile: 'grid-cols-1',
    tablet: 'sm:grid-cols-2', 
    desktop: 'lg:grid-cols-3',
    gap: 'gap-4',
  },
  
  // Typography consistente com tamanhos mobile 2x maiores
  text: {
    title: 'text-lg md:text-sm font-semibold',        // mobile: 18px, desktop: 14px
    subtitle: 'text-base md:text-xs font-medium',     // mobile: 16px, desktop: 12px
    body: 'text-base md:text-xs',                     // mobile: 16px, desktop: 12px
    price: 'text-2xl md:text-base font-bold',         // mobile: 24px, desktop: 16px
  }
} as const;
