
import React from "react";
import { Building2, Phone, Globe, ExternalLink, AlertCircle } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

interface Leiloeiro {
  id: number;
  name: string;
  websiteName: string;
  state: string;
  phone: string;
  website?: string;
  logo?: string;
  activeAuctions: number;
}

interface LeiloeiroTableRowProps {
  leiloeiro: Leiloeiro;
}

export const LeiloeiroTableRow: React.FC<LeiloeiroTableRowProps> = ({ leiloeiro }) => {
  const getWebsiteDisplay = () => {
    if (!leiloeiro.website) {
      return (
        <div className="flex items-center gap-2 text-gray-400">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span className="text-sm truncate">Sem website</span>
        </div>
      );
    }
    return (
      <div className="text-sm text-blue-600 hover:text-blue-800">
        <a 
          href={leiloeiro.website} 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:underline flex items-center gap-1"
        >
          <Globe className="w-4 h-4 flex-shrink-0" />
          <span className="truncate">{leiloeiro.website.replace('https://', '')}</span>
        </a>
      </div>
    );
  };

  const getAuctionsDisplay = () => {
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

  return (
    <tr className="hover:bg-gray-50 h-16">
      <td className="px-6 py-4">
        <div className="flex items-center h-full">
          <div className="flex-shrink-0 h-10 w-10">
            <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <Building2 className="w-5 h-5 text-blue-600" />
            </div>
          </div>
          <div className="ml-4 min-w-0 flex-1">
            <div className="text-sm font-medium text-gray-900 truncate">
              {leiloeiro.websiteName}
            </div>
            <div className="text-sm font-normal text-gray-500 truncate">
              {leiloeiro.name}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center text-sm text-gray-500 h-full">
          <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
          <span className="truncate">{leiloeiro.phone}</span>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="h-full flex items-center">
          {getWebsiteDisplay()}
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center h-full">
          {getAuctionsDisplay()}
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex justify-center items-center h-full">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => leiloeiro.website && window.open(leiloeiro.website, '_blank')}
            disabled={!leiloeiro.website}
            className="h-10 w-10 p-0"
          >
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </td>
    </tr>
  );
};
