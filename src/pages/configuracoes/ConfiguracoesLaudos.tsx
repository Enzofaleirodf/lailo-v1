
import { FileText, Download, Eye, Clock, CheckCircle, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SettingsCard } from "../../components/settings/SettingsCard";
import { FeatureList } from "../../components/settings/FeatureList";

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
      status: "Em análise",
      icon: Clock,
      iconColor: "text-yellow-600"
    }
  ];

  const features = [
    { name: "Análise detalhada dos documentos do leilão", included: true },
    { name: "Verificação de pendências e riscos jurídicos", included: true },
    { name: "Parecer emitido por advogados especializados", included: true },
    { name: "Entrega em até 48 horas úteis", included: true },
    { name: "Laudos ilimitados por mês", included: true },
    { name: "Acesso ao histórico completo", included: true }
  ];

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Informações sobre Laudos */}
      <SettingsCard
        title="Como Funciona"
        description="Entenda o serviço de laudos jurídicos"
        icon={FileText}
      >
        <div className="space-y-4">
          <FeatureList features={features} />
          
          <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
            <div className="flex items-start gap-3">
              <Crown className="w-6 h-6 text-blue-600 mt-0.5" />
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-blue-900 mb-1">
                  Laudos Jurídicos Premium
                </h4>
                <p className="text-sm text-blue-800 mb-3">
                  Acesso ilimitado a laudos jurídicos especializados com sua assinatura ativa.
                </p>
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-100 text-green-800 border-green-200">
                    Incluído na assinatura
                  </Badge>
                  <span className="text-xs text-blue-700">
                    Sem custos adicionais
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SettingsCard>

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
                        <h3 className="font-semibold text-sm text-gray-900 line-clamp-2">{laudo.titulo}</h3>
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
