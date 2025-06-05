
import { FileText, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ConfiguracoesLaudos = () => {
  const laudos = [
    {
      id: 1,
      titulo: "Apartamento na Vila Madalena",
      tipo: "Imóvel",
      data: "15/12/2024",
      status: "Concluído",
      preco: "R$ 89,90"
    },
    {
      id: 2,
      titulo: "Honda Civic 2020",
      tipo: "Veículo",
      data: "10/12/2024",
      status: "Em análise",
      preco: "R$ 89,90"
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Laudos Jurídicos</h2>
        <p className="text-gray-600">Pareceres jurídicos dos leilões que você solicitou</p>
      </div>

      {/* Informações sobre Laudos */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Como Funciona
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <p className="text-sm text-gray-600">
              • Análise detalhada dos documentos do leilão
            </p>
            <p className="text-sm text-gray-600">
              • Verificação de pendências e riscos jurídicos
            </p>
            <p className="text-sm text-gray-600">
              • Parecer emitido por advogados especializados
            </p>
            <p className="text-sm text-gray-600">
              • Entrega em até 48 horas úteis
            </p>
          </div>
          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Preço:</strong> R$ 89,90 por laudo
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Lista de Laudos */}
      <Card>
        <CardHeader>
          <CardTitle>Meus Laudos</CardTitle>
        </CardHeader>
        <CardContent>
          {laudos.length === 0 ? (
            <div className="text-center py-8">
              <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Nenhum laudo solicitado</p>
              <p className="text-sm text-gray-500 mb-4">
                Solicite laudos jurídicos diretamente nas páginas dos leilões
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {laudos.map((laudo) => (
                <div key={laudo.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium">{laudo.titulo}</h3>
                      <Badge variant={laudo.status === "Concluído" ? "default" : "secondary"}>
                        {laudo.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{laudo.tipo}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>Solicitado em {laudo.data}</span>
                      <span>{laudo.preco}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {laudo.status === "Concluído" ? (
                      <>
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-1" />
                          Ver
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-1" />
                          Baixar
                        </Button>
                      </>
                    ) : (
                      <Badge variant="secondary">Em análise</Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ConfiguracoesLaudos;
