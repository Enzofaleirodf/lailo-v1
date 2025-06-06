
import { FileText, Download, Eye, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SettingsCard } from "../../components/settings/SettingsCard";
import { useIsMobile } from "@/hooks/use-mobile";

const ConfiguracoesLaudos = () => {
  const isMobile = useIsMobile();
  
  const laudos = [
    {
      id: 1,
      titulo: "Apartamento na Vila Madalena",
      tipo: "Imóvel",
      data: "15/12/2024"
    },
    {
      id: 2,
      titulo: "Honda Civic 2020",
      tipo: "Veículo",
      data: "10/12/2024"
    }
  ];

  const handleDelete = (id: number) => {
    // Lógica para excluir o laudo
    console.log('Excluir laudo:', id);
  };

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Header com título */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg md:text-xl font-bold text-gray-900">Meus Laudos</h2>
          <p className="text-sm text-gray-600">Histórico de laudos solicitados</p>
        </div>
      </div>

      {/* Lista de Laudos */}
      <SettingsCard 
        title="Laudos Jurídicos" 
        description="Pareceres técnicos e jurídicos dos leilões"
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
                    <div className="min-w-0 flex-1">
                      <h3 className="font-medium text-sm text-gray-900 line-clamp-2 mb-1">{laudo.titulo}</h3>
                      <p className="text-xs text-blue-600 mb-1">{laudo.tipo}</p>
                      <p className="text-xs text-gray-500">Solicitado em {laudo.data}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2 pt-2 border-t border-gray-100">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className={isMobile ? "" : "flex-1"}
                    title="Visualizar laudo"
                  >
                    <Eye className="w-4 h-4" />
                    {!isMobile && <span className="ml-1">Visualizar</span>}
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className={isMobile ? "" : "flex-1"}
                    title="Baixar PDF"
                  >
                    <Download className="w-4 h-4" />
                    {!isMobile && <span className="ml-1">Baixar PDF</span>}
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className={`${isMobile ? "" : "flex-1"} text-red-600 hover:text-red-700 hover:bg-red-50 hover:border-red-200`}
                    onClick={() => handleDelete(laudo.id)}
                    title="Excluir laudo"
                  >
                    <Trash2 className="w-4 h-4" />
                    {!isMobile && <span className="ml-1">Excluir</span>}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </SettingsCard>
    </div>
  );
};

export default ConfiguracoesLaudos;
