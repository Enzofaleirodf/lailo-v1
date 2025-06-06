
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
  
  // Typography consistente com tamanhos mobile 2px maiores
  text: {
    title: 'text-xl md:text-sm font-semibold',        // mobile: 20px (+2px), desktop: 14px
    subtitle: 'text-lg md:text-xs font-medium',       // mobile: 18px (+2px), desktop: 12px
    body: 'text-lg md:text-xs',                       // mobile: 18px (+2px), desktop: 12px
    price: 'text-3xl md:text-base font-bold',         // mobile: 30px (+6px), desktop: 16px
  }
} as const;
