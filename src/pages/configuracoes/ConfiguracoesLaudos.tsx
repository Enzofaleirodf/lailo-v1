
import { FileText, Download, Eye, Clock, CheckCircle, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SettingsCard } from "../../components/settings/SettingsCard";

const ConfiguracoesLaudos = () => {
  const laudos = [
    {
      id: 1,
      titulo: "Apartamento na Vila Madalena",
      tipo: "Imóvel",
      data: "15/12/2024",
      status: "Concluído",
      icon: CheckCircle,
      iconColor: "text-green-600"
    },
    {
      id: 2,
      titulo: "Honda Civic 2020",
      tipo: "Veículo",
      data: "10/12/2024", 
      status: "Processando",
      icon: Clock,
      iconColor: "text-blue-600"
    }
  ];

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Lista de Laudos */}
      <SettingsCard 
        title="Meus Laudos" 
        description="Análises jurídicas automáticas por IA"
        icon={FileText}
      >
        {laudos.length === 0 ? (
          <div className="text-center py-8">
            <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 mb-2">Nenhum laudo solicitado</p>
            <p className="text-sm text-gray-500">
              Solicite laudos jurídicos diretamente nas páginas dos leilões
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {laudos.map((laudo) => (
              <div key={laudo.id} className="p-4 border border-gray-200 rounded-lg bg-white">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    <laudo.icon className={`w-5 h-5 mt-0.5 ${laudo.iconColor} shrink-0`} />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start gap-2 mb-1">
                        <h3 className="font-semibold text-sm text-gray-900 line-clamp-2 font-geist">{laudo.titulo}</h3>
                        <Badge 
                          variant={laudo.status === "Concluído" ? "default" : "secondary"}
                          className="shrink-0 text-xs"
                        >
                          {laudo.status}
                        </Badge>
                      </div>
                      <p className="text-xs text-blue-600 mb-1 font-inter">{laudo.tipo}</p>
                      <div className="flex items-center gap-3 text-xs text-gray-500 font-inter">
                        <span>Solicitado em {laudo.data}</span>
                        <Badge className="bg-green-100 text-green-700 text-xs">
                          Incluído na assinatura
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
                
                {laudo.status === "Concluído" ? (
                  <div className="flex gap-2 pt-2 border-t border-gray-100">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="w-4 h-4 mr-1" />
                      Visualizar
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Download className="w-4 h-4 mr-1" />
                      Baixar PDF
                    </Button>
                  </div>
                ) : (
                  <div className="pt-2 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-xs text-blue-700 bg-blue-50 p-2 rounded font-inter">
                      <Clock className="w-4 h-4" />
                      <span>Análise automática em andamento - Será concluído em instantes</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </SettingsCard>
    </div>
  );
};

export default ConfiguracoesLaudos;
