
import React from "react";
import { Building2, Phone, Globe, ExternalLink, AlertCircle } from "lucide-react";
import { BaseCard } from "../base/BaseCard";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Leiloeiro } from "../../data/leiloeiroData";

interface LeiloeiroCardProps {
  leiloeiro: Leiloeiro;
}

export const LeiloeiroCard: React.FC<LeiloeiroCardProps> = ({ leiloeiro }) => {
  const getAuctionsBadge = () => {
    if (!leiloeiro.website) {
      return (
        <Badge className="bg-gray-100 text-gray-700 border-gray-200 text-xs font-medium">
          Sem site
        </Badge>
      );
    }
    
    const badgeColor = leiloeiro.activeAuctions === 0 
      ? "bg-red-100 text-red-700 border-red-200" 
      : "bg-green-100 text-green-700 border-green-200";
    
    return (
      <Badge className={`${badgeColor} text-xs font-medium`}>
        {leiloeiro.activeAuctions} {leiloeiro.activeAuctions === 1 ? 'leilão' : 'leilões'}
      </Badge>
    );
  };

  const getWebsiteDisplay = () => {
    if (!leiloeiro.website) {
      return (
        <div className="flex items-center gap-2 text-gray-400 flex-1 min-w-0">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span className="text-sm truncate">Sem website</span>
        </div>
      );
    }
    
    return (
      <div className="flex items-center gap-2 text-blue-600 flex-1 min-w-0">
        <Globe className="w-4 h-4 flex-shrink-0" />
        <a 
          href={leiloeiro.website} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm hover:underline truncate"
        >
          {leiloeiro.website.replace('https://', '')}
        </a>
      </div>
    );
  };

  return (
    <BaseCard className="h-auto">
      <div className="space-y-4">
        {/* Header com ícone, nome e badge */}
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center">
            <Building2 className="w-6 h-6 text-blue-600" />
          </div>
          <div className="flex-1 min-w-0 flex items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-gray-900 text-base leading-tight mb-1 truncate">
                {leiloeiro.websiteName}
              </h3>
              <p className="text-sm text-gray-600 truncate">
                {leiloeiro.name}
              </p>
            </div>
            <div className="flex-shrink-0">
              {getAuctionsBadge()}
            </div>
          </div>
        </div>

        {/* Informações de contato - telefone e website em linhas separadas */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-gray-600">
            <Phone className="w-4 h-4 flex-shrink-0" />
            <span className="text-sm truncate">{leiloeiro.phone}</span>
          </div>
          
          <div className="flex items-center justify-between gap-2">
            {getWebsiteDisplay()}
            <Button
              variant="outline"
              size="sm"
              onClick={() => leiloeiro.website && window.open(leiloeiro.website, '_blank')}
              disabled={!leiloeiro.website}
              className="h-8 w-8 p-0 flex-shrink-0"
            >
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </BaseCard>
  );
};
