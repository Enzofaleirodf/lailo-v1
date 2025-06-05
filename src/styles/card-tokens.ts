
export const cardTokens = {
  // Espaçamentos padrão para cards
  spacing: {
    cardPadding: 'p-3',           // Padding único para todos os cards
    contentGap: 'gap-3',          // Gap padrão entre elementos
    sectionSpacing: 'space-y-1',  // Reduzido de space-y-2 para space-y-1 (2px menos)
    separatorMargin: 'my-2',      // Margin do separator
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
  
  // Typography consistente
  text: {
    title: 'text-sm font-semibold',
    subtitle: 'text-xs font-medium', 
    body: 'text-xs',
    price: 'text-base font-bold',
  }
} as const;
