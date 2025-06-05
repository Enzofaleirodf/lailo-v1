
import { FileText, Download, Eye, Clock, CheckCircle } from "lucide-react";
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
      preco: "R$ 89,90",
      icon: CheckCircle,
      iconColor: "text-green-600"
    },
    {
      id: 2,
      titulo: "Honda Civic 2020",
      tipo: "Veículo",
      data: "10/12/2024", 
      status: "Em análise",
      preco: "R$ 89,90",
      icon: Clock,
      iconColor: "text-yellow-600"
    }
  ];

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Lista de Laudos */}
      <SettingsCard 
        title="Meus Laudos" 
        description="Histórico de laudos solicitados"
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
                        <h3 className="font-medium text-sm text-gray-900 line-clamp-2">{laudo.titulo}</h3>
                        <Badge 
                          variant={laudo.status === "Concluído" ? "default" : "secondary"}
                          className="shrink-0 text-xs"
                        >
                          {laudo.status}
                        </Badge>
                      </div>
                      <p className="text-xs text-blue-600 mb-1">{laudo.tipo}</p>
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span>Solicitado em {laudo.data}</span>
                        {laudo.preco}
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
                    <div className="flex items-center gap-2 text-xs text-yellow-700 bg-yellow-50 p-2 rounded">
                      <Clock className="w-4 h-4" />
                      <span>Análise em andamento - Você será notificado quando estiver pronto</span>
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
