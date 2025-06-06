
import React from "react";
import { Clock, ArrowUpRight } from "lucide-react";

interface BaseDateProps {
  endDate: string;
  href?: string;
  className?: string;
}

export const BaseDate = ({
  endDate,
  href = "#",
  className = ""
}: BaseDateProps): JSX.Element => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  // Formatar a data para exibição
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className={`flex items-center gap-2 text-gray-500 text-[10px] font-urbanist ${className}`}>
      <div className="flex items-center gap-1">
        <Clock className="h-3 w-3" />
        <span>Encerra em {formatDate(endDate)}</span>
      </div>
      
      <button 
        onClick={handleClick} 
        aria-label="Abrir leilão em nova aba" 
        className="h-[18px] w-[18px] p-0 text-gray-400 hover:text-gray-600 transition-colors bg-transparent flex-shrink-0 flex items-center justify-center rounded hover:bg-gray-100"
      >
        <ArrowUpRight className="h-[18px] w-[18px]" />
      </button>
    </div>
  );
};
